/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePollaMundialista = /* GraphQL */ `
  subscription OnCreatePollaMundialista(
    $filter: ModelSubscriptionPollaMundialistaFilterInput
  ) {
    onCreatePollaMundialista(filter: $filter) {
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
export const onUpdatePollaMundialista = /* GraphQL */ `
  subscription OnUpdatePollaMundialista(
    $filter: ModelSubscriptionPollaMundialistaFilterInput
  ) {
    onUpdatePollaMundialista(filter: $filter) {
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
export const onDeletePollaMundialista = /* GraphQL */ `
  subscription OnDeletePollaMundialista(
    $filter: ModelSubscriptionPollaMundialistaFilterInput
  ) {
    onDeletePollaMundialista(filter: $filter) {
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
export const onCreatePollaSubscription = /* GraphQL */ `
  subscription OnCreatePollaSubscription(
    $filter: ModelSubscriptionPollaSubscriptionFilterInput
  ) {
    onCreatePollaSubscription(filter: $filter) {
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
export const onUpdatePollaSubscription = /* GraphQL */ `
  subscription OnUpdatePollaSubscription(
    $filter: ModelSubscriptionPollaSubscriptionFilterInput
  ) {
    onUpdatePollaSubscription(filter: $filter) {
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
export const onDeletePollaSubscription = /* GraphQL */ `
  subscription OnDeletePollaSubscription(
    $filter: ModelSubscriptionPollaSubscriptionFilterInput
  ) {
    onDeletePollaSubscription(filter: $filter) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onCreateTournament(filter: $filter) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onUpdateTournament(filter: $filter) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onDeleteTournament(filter: $filter) {
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound($filter: ModelSubscriptionRoundFilterInput) {
    onCreateRound(filter: $filter) {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound($filter: ModelSubscriptionRoundFilterInput) {
    onUpdateRound(filter: $filter) {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound($filter: ModelSubscriptionRoundFilterInput) {
    onDeleteRound(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateSubscriptionGroup = /* GraphQL */ `
  subscription OnCreateSubscriptionGroup(
    $filter: ModelSubscriptionSubscriptionGroupFilterInput
  ) {
    onCreateSubscriptionGroup(filter: $filter) {
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
export const onUpdateSubscriptionGroup = /* GraphQL */ `
  subscription OnUpdateSubscriptionGroup(
    $filter: ModelSubscriptionSubscriptionGroupFilterInput
  ) {
    onUpdateSubscriptionGroup(filter: $filter) {
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
export const onDeleteSubscriptionGroup = /* GraphQL */ `
  subscription OnDeleteSubscriptionGroup(
    $filter: ModelSubscriptionSubscriptionGroupFilterInput
  ) {
    onDeleteSubscriptionGroup(filter: $filter) {
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
export const onCreateGroupTeam = /* GraphQL */ `
  subscription OnCreateGroupTeam(
    $filter: ModelSubscriptionGroupTeamFilterInput
  ) {
    onCreateGroupTeam(filter: $filter) {
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
export const onUpdateGroupTeam = /* GraphQL */ `
  subscription OnUpdateGroupTeam(
    $filter: ModelSubscriptionGroupTeamFilterInput
  ) {
    onUpdateGroupTeam(filter: $filter) {
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
export const onDeleteGroupTeam = /* GraphQL */ `
  subscription OnDeleteGroupTeam(
    $filter: ModelSubscriptionGroupTeamFilterInput
  ) {
    onDeleteGroupTeam(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onCreateMatch(filter: $filter) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onUpdateMatch(filter: $filter) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
    onDeleteMatch(filter: $filter) {
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
export const onCreateStadium = /* GraphQL */ `
  subscription OnCreateStadium($filter: ModelSubscriptionStadiumFilterInput) {
    onCreateStadium(filter: $filter) {
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
export const onUpdateStadium = /* GraphQL */ `
  subscription OnUpdateStadium($filter: ModelSubscriptionStadiumFilterInput) {
    onUpdateStadium(filter: $filter) {
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
export const onDeleteStadium = /* GraphQL */ `
  subscription OnDeleteStadium($filter: ModelSubscriptionStadiumFilterInput) {
    onDeleteStadium(filter: $filter) {
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
export const onCreateMatchTeam = /* GraphQL */ `
  subscription OnCreateMatchTeam(
    $filter: ModelSubscriptionMatchTeamFilterInput
  ) {
    onCreateMatchTeam(filter: $filter) {
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
export const onUpdateMatchTeam = /* GraphQL */ `
  subscription OnUpdateMatchTeam(
    $filter: ModelSubscriptionMatchTeamFilterInput
  ) {
    onUpdateMatchTeam(filter: $filter) {
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
export const onDeleteMatchTeam = /* GraphQL */ `
  subscription OnDeleteMatchTeam(
    $filter: ModelSubscriptionMatchTeamFilterInput
  ) {
    onDeleteMatchTeam(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateSubscriptionGroupTeam = /* GraphQL */ `
  subscription OnCreateSubscriptionGroupTeam(
    $filter: ModelSubscriptionSubscriptionGroupTeamFilterInput
  ) {
    onCreateSubscriptionGroupTeam(filter: $filter) {
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
export const onUpdateSubscriptionGroupTeam = /* GraphQL */ `
  subscription OnUpdateSubscriptionGroupTeam(
    $filter: ModelSubscriptionSubscriptionGroupTeamFilterInput
  ) {
    onUpdateSubscriptionGroupTeam(filter: $filter) {
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
export const onDeleteSubscriptionGroupTeam = /* GraphQL */ `
  subscription OnDeleteSubscriptionGroupTeam(
    $filter: ModelSubscriptionSubscriptionGroupTeamFilterInput
  ) {
    onDeleteSubscriptionGroupTeam(filter: $filter) {
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
export const onCreateSubscriptionMatch = /* GraphQL */ `
  subscription OnCreateSubscriptionMatch(
    $filter: ModelSubscriptionSubscriptionMatchFilterInput
  ) {
    onCreateSubscriptionMatch(filter: $filter) {
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
export const onUpdateSubscriptionMatch = /* GraphQL */ `
  subscription OnUpdateSubscriptionMatch(
    $filter: ModelSubscriptionSubscriptionMatchFilterInput
  ) {
    onUpdateSubscriptionMatch(filter: $filter) {
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
export const onDeleteSubscriptionMatch = /* GraphQL */ `
  subscription OnDeleteSubscriptionMatch(
    $filter: ModelSubscriptionSubscriptionMatchFilterInput
  ) {
    onDeleteSubscriptionMatch(filter: $filter) {
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
export const onCreateSubscriptionMatchTeam = /* GraphQL */ `
  subscription OnCreateSubscriptionMatchTeam(
    $filter: ModelSubscriptionSubscriptionMatchTeamFilterInput
  ) {
    onCreateSubscriptionMatchTeam(filter: $filter) {
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
export const onUpdateSubscriptionMatchTeam = /* GraphQL */ `
  subscription OnUpdateSubscriptionMatchTeam(
    $filter: ModelSubscriptionSubscriptionMatchTeamFilterInput
  ) {
    onUpdateSubscriptionMatchTeam(filter: $filter) {
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
export const onDeleteSubscriptionMatchTeam = /* GraphQL */ `
  subscription OnDeleteSubscriptionMatchTeam(
    $filter: ModelSubscriptionSubscriptionMatchTeamFilterInput
  ) {
    onDeleteSubscriptionMatchTeam(filter: $filter) {
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
export const onCreateSubscriptionBonus = /* GraphQL */ `
  subscription OnCreateSubscriptionBonus(
    $filter: ModelSubscriptionSubscriptionBonusFilterInput
  ) {
    onCreateSubscriptionBonus(filter: $filter) {
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
export const onUpdateSubscriptionBonus = /* GraphQL */ `
  subscription OnUpdateSubscriptionBonus(
    $filter: ModelSubscriptionSubscriptionBonusFilterInput
  ) {
    onUpdateSubscriptionBonus(filter: $filter) {
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
export const onDeleteSubscriptionBonus = /* GraphQL */ `
  subscription OnDeleteSubscriptionBonus(
    $filter: ModelSubscriptionSubscriptionBonusFilterInput
  ) {
    onDeleteSubscriptionBonus(filter: $filter) {
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
