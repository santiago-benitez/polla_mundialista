import { API } from "aws-amplify";
import {
  CreatePollaSubscriptionInput,
  CreateSubscriptionGroupTeamInput,
  CreateSubscriptionMatchInput,
  CreateSubscriptionMatchTeamInput,
  Group,
  Match,
  PollaSubscription,
  Round,
  SubscriptionMatch,
  Tournament
} from "../API";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

export const createSubscriptionService = async (
  subscription: CreatePollaSubscriptionInput
) => {
  // 1.- Create new Subscription
  const newSubscriptionResult: any = await API.graphql({
    query: mutations.createPollaSubscription,
    variables: { input: subscription }
  });
  const newSubscription = newSubscriptionResult.data
    .createPollaSubscription as PollaSubscription;
  return newSubscription;
};

export const createSubscriptionBundleService = async (
  subscription: PollaSubscription
) => {
  // 1.- Retrieve Tournament rounds and groups
  if (subscription.pollaMundialista?.tournament?.id) {
    const getTournamentResult: any = await API.graphql({
      query: queries.getTournament,
      variables: { id: subscription.pollaMundialista?.tournament.id }
    });
    const tournament: Tournament = getTournamentResult.data.getTournament;
    // 2.- Retrieve rounds
    const rounds = tournament.rounds?.items;
    if (rounds) {
      for (const round of rounds) {
        if (round) {
          const getRoundResult: any = await API.graphql({
            query: queries.getRound,
            variables: { id: round.id }
          });
          const fetchedRound: Round = getRoundResult.data.getRound;
          const groups = fetchedRound.groups?.items;
          if (groups) {
            for (const group of groups) {
              if (group) {
                // 4.- Retrieve groups
                const getGroupResult: any = await API.graphql({
                  query: queries.getGroup,
                  variables: { id: group.id }
                });
                const fetchedGroup: Group = getGroupResult.data.getGroup;
                const groupTeams = fetchedGroup.groupTeams?.items;
                if (groupTeams) {
                  for (const groupTeam of groupTeams) {
                    if (groupTeam) {
                      const subGroupTeamInput: CreateSubscriptionGroupTeamInput =
                        {
                          matchesPlayed: groupTeam.matchesPlayed,
                          points: groupTeam.points,
                          goalsFor: groupTeam.goalsFor,
                          goalsAgainst: groupTeam.goalsAgainst,
                          goalsDifference: groupTeam.goalsDifference,
                          position: groupTeam.position,
                          subscriptionPoints: 0,
                          groupSubscriptionGroupTeamsId: group.id,
                          teamSubscriptionGroupTeamsId: groupTeam.team?.id
                        };
                      // 5.- Create subscription group team
                      await API.graphql({
                        query: mutations.createSubscriptionGroupTeam,
                        variables: { input: subGroupTeamInput }
                      });
                    }
                  }
                }
                const matches = fetchedGroup.matches?.items;
                if (matches) {
                  for (const match of matches) {
                    if (match) {
                      const subMatchInput: CreateSubscriptionMatchInput = {
                        subscriptionPoints: 0,
                        pollaSubscriptionSubscriptionMatchesId: subscription.id,
                        matchSubscriptionMatchesId: match.id
                      };
                      // 6.- Create subscription match
                      const newSubMatchResult: any = await API.graphql({
                        query: mutations.createSubscriptionMatch,
                        variables: { input: subMatchInput }
                      });
                      const newSubMatch: SubscriptionMatch =
                        newSubMatchResult.data.createSubscriptionMatch;
                      // 7.- Retrieve matches
                      const getMatchesResult: any = await API.graphql({
                        query: queries.getMatch,
                        variables: { id: match.id }
                      });
                      const fetchedMatch: Match =
                        getMatchesResult.data.getMatch;
                      const matchTeams = fetchedMatch.matchTeams?.items;
                      if (matchTeams) {
                        for (const matchTeam of matchTeams) {
                          if (matchTeam) {
                            const subMatchTeamInput: CreateSubscriptionMatchTeamInput =
                              {
                                score: matchTeam.score,
                                points: matchTeam.score,
                                teamSubscriptionMatchTeamsId:
                                  matchTeam.team?.id,
                                subscriptionMatchSubscriptionMatchTeamsId:
                                  newSubMatch.id
                              };
                            // 8.- Create subscription match team
                            await API.graphql({
                              query: mutations.createSubscriptionMatchTeam,
                              variables: { input: subMatchTeamInput }
                            });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
