/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPollaMundialista = /* GraphQL */ `
  mutation CreatePollaMundialista(
    $input: CreatePollaMundialistaInput!
    $condition: ModelPollaMundialistaConditionInput
  ) {
    createPollaMundialista(input: $input, condition: $condition) {
      id
      name
      subscriptionPrice
      firstPrize
      secondPrize
      thirdPrize
      fourthPrize
      fifthPrize
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      pollaSubscriptions {
        items {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentPollasMundialistasId
    }
  }
`;
export const updatePollaMundialista = /* GraphQL */ `
  mutation UpdatePollaMundialista(
    $input: UpdatePollaMundialistaInput!
    $condition: ModelPollaMundialistaConditionInput
  ) {
    updatePollaMundialista(input: $input, condition: $condition) {
      id
      name
      subscriptionPrice
      firstPrize
      secondPrize
      thirdPrize
      fourthPrize
      fifthPrize
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      pollaSubscriptions {
        items {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentPollasMundialistasId
    }
  }
`;
export const deletePollaMundialista = /* GraphQL */ `
  mutation DeletePollaMundialista(
    $input: DeletePollaMundialistaInput!
    $condition: ModelPollaMundialistaConditionInput
  ) {
    deletePollaMundialista(input: $input, condition: $condition) {
      id
      name
      subscriptionPrice
      firstPrize
      secondPrize
      thirdPrize
      fourthPrize
      fifthPrize
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      pollaSubscriptions {
        items {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentPollasMundialistasId
    }
  }
`;
export const createPollaSubscription = /* GraphQL */ `
  mutation CreatePollaSubscription(
    $input: CreatePollaSubscriptionInput!
    $condition: ModelPollaSubscriptionConditionInput
  ) {
    createPollaSubscription(input: $input, condition: $condition) {
      id
      isAdmin
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      pollaMundialista {
        id
        name
        subscriptionPrice
        firstPrize
        secondPrize
        thirdPrize
        fourthPrize
        fifthPrize
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        pollaSubscriptions {
          nextToken
        }
        createdAt
        updatedAt
        tournamentPollasMundialistasId
      }
      totalPoints
      status
      userId
      email
      createdAt
      updatedAt
      pollaMundialistaPollaSubscriptionsId
    }
  }
`;
export const updatePollaSubscription = /* GraphQL */ `
  mutation UpdatePollaSubscription(
    $input: UpdatePollaSubscriptionInput!
    $condition: ModelPollaSubscriptionConditionInput
  ) {
    updatePollaSubscription(input: $input, condition: $condition) {
      id
      isAdmin
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      pollaMundialista {
        id
        name
        subscriptionPrice
        firstPrize
        secondPrize
        thirdPrize
        fourthPrize
        fifthPrize
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        pollaSubscriptions {
          nextToken
        }
        createdAt
        updatedAt
        tournamentPollasMundialistasId
      }
      totalPoints
      status
      userId
      email
      createdAt
      updatedAt
      pollaMundialistaPollaSubscriptionsId
    }
  }
`;
export const deletePollaSubscription = /* GraphQL */ `
  mutation DeletePollaSubscription(
    $input: DeletePollaSubscriptionInput!
    $condition: ModelPollaSubscriptionConditionInput
  ) {
    deletePollaSubscription(input: $input, condition: $condition) {
      id
      isAdmin
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      pollaMundialista {
        id
        name
        subscriptionPrice
        firstPrize
        secondPrize
        thirdPrize
        fourthPrize
        fifthPrize
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        pollaSubscriptions {
          nextToken
        }
        createdAt
        updatedAt
        tournamentPollasMundialistasId
      }
      totalPoints
      status
      userId
      email
      createdAt
      updatedAt
      pollaMundialistaPollaSubscriptionsId
    }
  }
`;
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
      name
      descpription
      pollasMundialistas {
        items {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        nextToken
      }
      rounds {
        items {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
      name
      descpription
      pollasMundialistas {
        items {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        nextToken
      }
      rounds {
        items {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
      id
      name
      descpription
      pollasMundialistas {
        items {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        nextToken
      }
      rounds {
        items {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
      id
      name
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      status
      groups {
        items {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentRoundsId
    }
  }
`;
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
      id
      name
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      status
      groups {
        items {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentRoundsId
    }
  }
`;
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
      id
      name
      tournament {
        id
        name
        descpription
        pollasMundialistas {
          nextToken
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      status
      groups {
        items {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        nextToken
      }
      createdAt
      updatedAt
      tournamentRoundsId
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      status
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      teamA {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamAPosition
      teamB {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamBPosition
      createdAt
      updatedAt
      roundGroupsId
      groupTeamAId
      groupTeamBId
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      status
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      teamA {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamAPosition
      teamB {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamBPosition
      createdAt
      updatedAt
      roundGroupsId
      groupTeamAId
      groupTeamBId
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      status
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroups {
        items {
          id
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionGroupsId
          roundSubscriptionGroupsId
          groupSubscriptionGroupsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      teamA {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamAPosition
      teamB {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      teamBPosition
      createdAt
      updatedAt
      roundGroupsId
      groupTeamAId
      groupTeamBId
    }
  }
`;
export const createSubscriptionGroup = /* GraphQL */ `
  mutation CreateSubscriptionGroup(
    $input: CreateSubscriptionGroupInput!
    $condition: ModelSubscriptionGroupConditionInput
  ) {
    createSubscriptionGroup(input: $input, condition: $condition) {
      id
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionGroupsId
      roundSubscriptionGroupsId
      groupSubscriptionGroupsId
    }
  }
`;
export const updateSubscriptionGroup = /* GraphQL */ `
  mutation UpdateSubscriptionGroup(
    $input: UpdateSubscriptionGroupInput!
    $condition: ModelSubscriptionGroupConditionInput
  ) {
    updateSubscriptionGroup(input: $input, condition: $condition) {
      id
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionGroupsId
      roundSubscriptionGroupsId
      groupSubscriptionGroupsId
    }
  }
`;
export const deleteSubscriptionGroup = /* GraphQL */ `
  mutation DeleteSubscriptionGroup(
    $input: DeleteSubscriptionGroupInput!
    $condition: ModelSubscriptionGroupConditionInput
  ) {
    deleteSubscriptionGroup(input: $input, condition: $condition) {
      id
      round {
        id
        name
        tournament {
          id
          name
          descpription
          createdAt
          updatedAt
        }
        subscriptionGroups {
          nextToken
        }
        status
        groups {
          nextToken
        }
        createdAt
        updatedAt
        tournamentRoundsId
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionGroupsId
      roundSubscriptionGroupsId
      groupSubscriptionGroupsId
    }
  }
`;
export const createGroupTeam = /* GraphQL */ `
  mutation CreateGroupTeam(
    $input: CreateGroupTeamInput!
    $condition: ModelGroupTeamConditionInput
  ) {
    createGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      createdAt
      updatedAt
      groupGroupTeamsId
      teamGroupTeamsId
    }
  }
`;
export const updateGroupTeam = /* GraphQL */ `
  mutation UpdateGroupTeam(
    $input: UpdateGroupTeamInput!
    $condition: ModelGroupTeamConditionInput
  ) {
    updateGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      createdAt
      updatedAt
      groupGroupTeamsId
      teamGroupTeamsId
    }
  }
`;
export const deleteGroupTeam = /* GraphQL */ `
  mutation DeleteGroupTeam(
    $input: DeleteGroupTeamInput!
    $condition: ModelGroupTeamConditionInput
  ) {
    deleteGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      createdAt
      updatedAt
      groupGroupTeamsId
      teamGroupTeamsId
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      description
      flagUrl
      imageUrl
      historyJson
      dt
      players {
        items {
          id
          name
          birthDate
          clubTeam
          marketValue
          imageUrl
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      description
      flagUrl
      imageUrl
      historyJson
      dt
      players {
        items {
          id
          name
          birthDate
          clubTeam
          marketValue
          imageUrl
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      description
      flagUrl
      imageUrl
      historyJson
      dt
      players {
        items {
          id
          name
          birthDate
          clubTeam
          marketValue
          imageUrl
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      groupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          createdAt
          updatedAt
          groupGroupTeamsId
          teamGroupTeamsId
        }
        nextToken
      }
      subscriptionGroupTeams {
        items {
          id
          matchesPlayed
          points
          goalsFor
          goalsAgainst
          goalsDifference
          position
          subscriptionPoints
          createdAt
          updatedAt
          groupSubscriptionGroupTeamsId
          subscriptionGroupSubscriptionGroupTeamsId
          teamSubscriptionGroupTeamsId
        }
        nextToken
      }
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      stadium {
        id
        name
        city
        capacity
        imageUrl
        description
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      matchDate
      status
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupMatchesId
      stadiumMatchesId
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      stadium {
        id
        name
        city
        capacity
        imageUrl
        description
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      matchDate
      status
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupMatchesId
      stadiumMatchesId
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      stadium {
        id
        name
        city
        capacity
        imageUrl
        description
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      matchDate
      status
      matchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamMatchTeamsId
          matchMatchTeamsId
        }
        nextToken
      }
      subscriptionMatches {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionMatchesId
          matchSubscriptionMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupMatchesId
      stadiumMatchesId
    }
  }
`;
export const createStadium = /* GraphQL */ `
  mutation CreateStadium(
    $input: CreateStadiumInput!
    $condition: ModelStadiumConditionInput
  ) {
    createStadium(input: $input, condition: $condition) {
      id
      name
      city
      capacity
      imageUrl
      description
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStadium = /* GraphQL */ `
  mutation UpdateStadium(
    $input: UpdateStadiumInput!
    $condition: ModelStadiumConditionInput
  ) {
    updateStadium(input: $input, condition: $condition) {
      id
      name
      city
      capacity
      imageUrl
      description
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStadium = /* GraphQL */ `
  mutation DeleteStadium(
    $input: DeleteStadiumInput!
    $condition: ModelStadiumConditionInput
  ) {
    deleteStadium(input: $input, condition: $condition) {
      id
      name
      city
      capacity
      imageUrl
      description
      matches {
        items {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMatchTeam = /* GraphQL */ `
  mutation CreateMatchTeam(
    $input: CreateMatchTeamInput!
    $condition: ModelMatchTeamConditionInput
  ) {
    createMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamMatchTeamsId
      matchMatchTeamsId
    }
  }
`;
export const updateMatchTeam = /* GraphQL */ `
  mutation UpdateMatchTeam(
    $input: UpdateMatchTeamInput!
    $condition: ModelMatchTeamConditionInput
  ) {
    updateMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamMatchTeamsId
      matchMatchTeamsId
    }
  }
`;
export const deleteMatchTeam = /* GraphQL */ `
  mutation DeleteMatchTeam(
    $input: DeleteMatchTeamInput!
    $condition: ModelMatchTeamConditionInput
  ) {
    deleteMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamMatchTeamsId
      matchMatchTeamsId
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      birthDate
      clubTeam
      marketValue
      imageUrl
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      birthDate
      clubTeam
      marketValue
      imageUrl
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      birthDate
      clubTeam
      marketValue
      imageUrl
      subscriptionBonuses {
        items {
          id
          subscriptionPoints
          createdAt
          updatedAt
          pollaSubscriptionSubscriptionBonusesId
          teamSubscriptionBonusesId
          playerSubscriptionBonusesId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const createSubscriptionGroupTeam = /* GraphQL */ `
  mutation CreateSubscriptionGroupTeam(
    $input: CreateSubscriptionGroupTeamInput!
    $condition: ModelSubscriptionGroupTeamConditionInput
  ) {
    createSubscriptionGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscriptionGroup {
        id
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionGroupTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionGroupsId
        roundSubscriptionGroupsId
        groupSubscriptionGroupsId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      subscriptionPoints
      createdAt
      updatedAt
      groupSubscriptionGroupTeamsId
      subscriptionGroupSubscriptionGroupTeamsId
      teamSubscriptionGroupTeamsId
    }
  }
`;
export const updateSubscriptionGroupTeam = /* GraphQL */ `
  mutation UpdateSubscriptionGroupTeam(
    $input: UpdateSubscriptionGroupTeamInput!
    $condition: ModelSubscriptionGroupTeamConditionInput
  ) {
    updateSubscriptionGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscriptionGroup {
        id
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionGroupTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionGroupsId
        roundSubscriptionGroupsId
        groupSubscriptionGroupsId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      subscriptionPoints
      createdAt
      updatedAt
      groupSubscriptionGroupTeamsId
      subscriptionGroupSubscriptionGroupTeamsId
      teamSubscriptionGroupTeamsId
    }
  }
`;
export const deleteSubscriptionGroupTeam = /* GraphQL */ `
  mutation DeleteSubscriptionGroupTeam(
    $input: DeleteSubscriptionGroupTeamInput!
    $condition: ModelSubscriptionGroupTeamConditionInput
  ) {
    deleteSubscriptionGroupTeam(input: $input, condition: $condition) {
      id
      group {
        id
        name
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        status
        groupTeams {
          nextToken
        }
        subscriptionGroups {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        matches {
          nextToken
        }
        teamA {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamAPosition
        teamB {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        teamBPosition
        createdAt
        updatedAt
        roundGroupsId
        groupTeamAId
        groupTeamBId
      }
      subscriptionGroup {
        id
        round {
          id
          name
          status
          createdAt
          updatedAt
          tournamentRoundsId
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionGroupTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionGroupsId
        roundSubscriptionGroupsId
        groupSubscriptionGroupsId
      }
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchesPlayed
      points
      goalsFor
      goalsAgainst
      goalsDifference
      position
      subscriptionPoints
      createdAt
      updatedAt
      groupSubscriptionGroupTeamsId
      subscriptionGroupSubscriptionGroupTeamsId
      teamSubscriptionGroupTeamsId
    }
  }
`;
export const createSubscriptionMatch = /* GraphQL */ `
  mutation CreateSubscriptionMatch(
    $input: CreateSubscriptionMatchInput!
    $condition: ModelSubscriptionMatchConditionInput
  ) {
    createSubscriptionMatch(input: $input, condition: $condition) {
      id
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionPoints
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionMatchesId
      matchSubscriptionMatchesId
    }
  }
`;
export const updateSubscriptionMatch = /* GraphQL */ `
  mutation UpdateSubscriptionMatch(
    $input: UpdateSubscriptionMatchInput!
    $condition: ModelSubscriptionMatchConditionInput
  ) {
    updateSubscriptionMatch(input: $input, condition: $condition) {
      id
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionPoints
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionMatchesId
      matchSubscriptionMatchesId
    }
  }
`;
export const deleteSubscriptionMatch = /* GraphQL */ `
  mutation DeleteSubscriptionMatch(
    $input: DeleteSubscriptionMatchInput!
    $condition: ModelSubscriptionMatchConditionInput
  ) {
    deleteSubscriptionMatch(input: $input, condition: $condition) {
      id
      match {
        id
        stadium {
          id
          name
          city
          capacity
          imageUrl
          description
          createdAt
          updatedAt
        }
        group {
          id
          name
          status
          teamAPosition
          teamBPosition
          createdAt
          updatedAt
          roundGroupsId
          groupTeamAId
          groupTeamBId
        }
        matchDate
        status
        matchTeams {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        createdAt
        updatedAt
        groupMatchesId
        stadiumMatchesId
      }
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      subscriptionPoints
      subscriptionMatchTeams {
        items {
          id
          score
          points
          createdAt
          updatedAt
          teamSubscriptionMatchTeamsId
          subscriptionMatchSubscriptionMatchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionMatchesId
      matchSubscriptionMatchesId
    }
  }
`;
export const createSubscriptionMatchTeam = /* GraphQL */ `
  mutation CreateSubscriptionMatchTeam(
    $input: CreateSubscriptionMatchTeamInput!
    $condition: ModelSubscriptionMatchTeamConditionInput
  ) {
    createSubscriptionMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMatch {
        id
        match {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionPoints
        subscriptionMatchTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionMatchesId
        matchSubscriptionMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamSubscriptionMatchTeamsId
      subscriptionMatchSubscriptionMatchTeamsId
    }
  }
`;
export const updateSubscriptionMatchTeam = /* GraphQL */ `
  mutation UpdateSubscriptionMatchTeam(
    $input: UpdateSubscriptionMatchTeamInput!
    $condition: ModelSubscriptionMatchTeamConditionInput
  ) {
    updateSubscriptionMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMatch {
        id
        match {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionPoints
        subscriptionMatchTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionMatchesId
        matchSubscriptionMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamSubscriptionMatchTeamsId
      subscriptionMatchSubscriptionMatchTeamsId
    }
  }
`;
export const deleteSubscriptionMatchTeam = /* GraphQL */ `
  mutation DeleteSubscriptionMatchTeam(
    $input: DeleteSubscriptionMatchTeamInput!
    $condition: ModelSubscriptionMatchTeamConditionInput
  ) {
    deleteSubscriptionMatchTeam(input: $input, condition: $condition) {
      id
      team {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMatch {
        id
        match {
          id
          matchDate
          status
          createdAt
          updatedAt
          groupMatchesId
          stadiumMatchesId
        }
        subscription {
          id
          isAdmin
          totalPoints
          status
          userId
          email
          createdAt
          updatedAt
          pollaMundialistaPollaSubscriptionsId
        }
        subscriptionPoints
        subscriptionMatchTeams {
          nextToken
        }
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionMatchesId
        matchSubscriptionMatchesId
      }
      score
      points
      createdAt
      updatedAt
      teamSubscriptionMatchTeamsId
      subscriptionMatchSubscriptionMatchTeamsId
    }
  }
`;
export const createSubscriptionBonus = /* GraphQL */ `
  mutation CreateSubscriptionBonus(
    $input: CreateSubscriptionBonusInput!
    $condition: ModelSubscriptionBonusConditionInput
  ) {
    createSubscriptionBonus(input: $input, condition: $condition) {
      id
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      champion {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      second {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      third {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      fourth {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      bestPlayer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      maxScorer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      subscriptionPoints
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionBonusesId
      teamSubscriptionBonusesId
      playerSubscriptionBonusesId
    }
  }
`;
export const updateSubscriptionBonus = /* GraphQL */ `
  mutation UpdateSubscriptionBonus(
    $input: UpdateSubscriptionBonusInput!
    $condition: ModelSubscriptionBonusConditionInput
  ) {
    updateSubscriptionBonus(input: $input, condition: $condition) {
      id
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      champion {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      second {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      third {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      fourth {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      bestPlayer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      maxScorer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      subscriptionPoints
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionBonusesId
      teamSubscriptionBonusesId
      playerSubscriptionBonusesId
    }
  }
`;
export const deleteSubscriptionBonus = /* GraphQL */ `
  mutation DeleteSubscriptionBonus(
    $input: DeleteSubscriptionBonusInput!
    $condition: ModelSubscriptionBonusConditionInput
  ) {
    deleteSubscriptionBonus(input: $input, condition: $condition) {
      id
      subscription {
        id
        isAdmin
        subscriptionGroups {
          nextToken
        }
        subscriptionMatches {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          createdAt
          updatedAt
          tournamentPollasMundialistasId
        }
        totalPoints
        status
        userId
        email
        createdAt
        updatedAt
        pollaMundialistaPollaSubscriptionsId
      }
      champion {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      second {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      third {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      fourth {
        id
        name
        description
        flagUrl
        imageUrl
        historyJson
        dt
        players {
          nextToken
        }
        matchTeams {
          nextToken
        }
        groupTeams {
          nextToken
        }
        subscriptionGroupTeams {
          nextToken
        }
        subscriptionMatchTeams {
          nextToken
        }
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      bestPlayer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      maxScorer {
        id
        name
        team {
          id
          name
          description
          flagUrl
          imageUrl
          historyJson
          dt
          createdAt
          updatedAt
        }
        birthDate
        clubTeam
        marketValue
        imageUrl
        subscriptionBonuses {
          nextToken
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      subscriptionPoints
      createdAt
      updatedAt
      pollaSubscriptionSubscriptionBonusesId
      teamSubscriptionBonusesId
      playerSubscriptionBonusesId
    }
  }
`;
