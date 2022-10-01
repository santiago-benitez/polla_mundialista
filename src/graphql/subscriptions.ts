/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePollaMundialista = /* GraphQL */ `
  subscription OnCreatePollaMundialista {
    onCreatePollaMundialista {
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
export const onUpdatePollaMundialista = /* GraphQL */ `
  subscription OnUpdatePollaMundialista {
    onUpdatePollaMundialista {
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
export const onDeletePollaMundialista = /* GraphQL */ `
  subscription OnDeletePollaMundialista {
    onDeletePollaMundialista {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament {
    onCreateTournament {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament {
    onUpdateTournament {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament {
    onDeleteTournament {
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
export const onCreatePollaSubscription = /* GraphQL */ `
  subscription OnCreatePollaSubscription {
    onCreatePollaSubscription {
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
export const onUpdatePollaSubscription = /* GraphQL */ `
  subscription OnUpdatePollaSubscription {
    onUpdatePollaSubscription {
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
export const onDeletePollaSubscription = /* GraphQL */ `
  subscription OnDeletePollaSubscription {
    onDeletePollaSubscription {
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
