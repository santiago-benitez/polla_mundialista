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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      pollaMundialistaPollaSubscriptionsId
    }
  }
`;
