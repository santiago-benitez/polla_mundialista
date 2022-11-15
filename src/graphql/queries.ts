/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPollaMundialista = /* GraphQL */ `
  query GetPollaMundialista($id: ID!) {
    getPollaMundialista(id: $id) {
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
export const listPollaMundialistas = /* GraphQL */ `
  query ListPollaMundialistas(
    $filter: ModelPollaMundialistaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollaMundialistas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPollaSubscription = /* GraphQL */ `
  query GetPollaSubscription($id: ID!) {
    getPollaSubscription(id: $id) {
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
export const listPollaSubscriptions = /* GraphQL */ `
  query ListPollaSubscriptions(
    $filter: ModelPollaSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollaSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
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
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
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
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscriptionGroup = /* GraphQL */ `
  query GetSubscriptionGroup($id: ID!) {
    getSubscriptionGroup(id: $id) {
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
export const listSubscriptionGroups = /* GraphQL */ `
  query ListSubscriptionGroups(
    $filter: ModelSubscriptionGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGroupTeam = /* GraphQL */ `
  query GetGroupTeam($id: ID!) {
    getGroupTeam(id: $id) {
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
export const listGroupTeams = /* GraphQL */ `
  query ListGroupTeams(
    $filter: ModelGroupTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStadium = /* GraphQL */ `
  query GetStadium($id: ID!) {
    getStadium(id: $id) {
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
export const listStadiums = /* GraphQL */ `
  query ListStadiums(
    $filter: ModelStadiumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStadiums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMatchTeam = /* GraphQL */ `
  query GetMatchTeam($id: ID!) {
    getMatchTeam(id: $id) {
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
export const listMatchTeams = /* GraphQL */ `
  query ListMatchTeams(
    $filter: ModelMatchTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        match {
          id
          matchDate
          status
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscriptionGroupTeam = /* GraphQL */ `
  query GetSubscriptionGroupTeam($id: ID!) {
    getSubscriptionGroupTeam(id: $id) {
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
export const listSubscriptionGroupTeams = /* GraphQL */ `
  query ListSubscriptionGroupTeams(
    $filter: ModelSubscriptionGroupTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionGroupTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        subscriptionGroup {
          id
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
      nextToken
    }
  }
`;
export const getSubscriptionMatch = /* GraphQL */ `
  query GetSubscriptionMatch($id: ID!) {
    getSubscriptionMatch(id: $id) {
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
export const listSubscriptionMatches = /* GraphQL */ `
  query ListSubscriptionMatches(
    $filter: ModelSubscriptionMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionMatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscriptionMatchTeam = /* GraphQL */ `
  query GetSubscriptionMatchTeam($id: ID!) {
    getSubscriptionMatchTeam(id: $id) {
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
export const listSubscriptionMatchTeams = /* GraphQL */ `
  query ListSubscriptionMatchTeams(
    $filter: ModelSubscriptionMatchTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionMatchTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        subscriptionMatch {
          id
          subscriptionPoints
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
      nextToken
    }
  }
`;
export const getSubscriptionBonus = /* GraphQL */ `
  query GetSubscriptionBonus($id: ID!) {
    getSubscriptionBonus(id: $id) {
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
export const listSubscriptionBonuses = /* GraphQL */ `
  query ListSubscriptionBonuses(
    $filter: ModelSubscriptionBonusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionBonuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        champion {
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
        second {
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
        third {
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
        fourth {
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
        bestPlayer {
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
        maxScorer {
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
        subscriptionPoints
        createdAt
        updatedAt
        pollaSubscriptionSubscriptionBonusesId
        teamSubscriptionBonusesId
        playerSubscriptionBonusesId
      }
      nextToken
    }
  }
`;
