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
      tournamentId
      tournament {
        id
        name
        descpription
        createdAt
        updatedAt
      }
      pollaSubscriptions {
        items {
          id
          isAdmin
          pollaMundialistaId
          totalPoints
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        tournamentId
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
        createdAt
        updatedAt
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
      pollaMundialistaId
      pollaMundialista {
        id
        name
        subscriptionPrice
        firstPrize
        secondPrize
        thirdPrize
        fourthPrize
        fifthPrize
        tournamentId
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
      }
      totalPoints
      status
      createdAt
      updatedAt
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
        pollaMundialistaId
        pollaMundialista {
          id
          name
          subscriptionPrice
          firstPrize
          secondPrize
          thirdPrize
          fourthPrize
          fifthPrize
          tournamentId
          createdAt
          updatedAt
        }
        totalPoints
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
