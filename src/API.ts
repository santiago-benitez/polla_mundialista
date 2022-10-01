/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePollaMundialistaInput = {
  id?: string | null,
  name: string,
  subscriptionPrice: number,
  firstPrize: number,
  secondPrize: number,
  thirdPrize: number,
  fourthPrize: number,
  fifthPrize: number,
  tournamentPollasMundialistasId?: string | null,
};

export type ModelPollaMundialistaConditionInput = {
  name?: ModelStringInput | null,
  subscriptionPrice?: ModelFloatInput | null,
  firstPrize?: ModelFloatInput | null,
  secondPrize?: ModelFloatInput | null,
  thirdPrize?: ModelFloatInput | null,
  fourthPrize?: ModelFloatInput | null,
  fifthPrize?: ModelFloatInput | null,
  and?: Array< ModelPollaMundialistaConditionInput | null > | null,
  or?: Array< ModelPollaMundialistaConditionInput | null > | null,
  not?: ModelPollaMundialistaConditionInput | null,
  tournamentPollasMundialistasId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type PollaMundialista = {
  __typename: "PollaMundialista",
  id: string,
  name: string,
  subscriptionPrice: number,
  firstPrize: number,
  secondPrize: number,
  thirdPrize: number,
  fourthPrize: number,
  fifthPrize: number,
  tournament?: Tournament | null,
  pollaSubscriptions?: ModelPollaSubscriptionConnection | null,
  createdAt: string,
  updatedAt: string,
  tournamentPollasMundialistasId?: string | null,
};

export type Tournament = {
  __typename: "Tournament",
  id: string,
  name: string,
  descpription?: string | null,
  pollasMundialistas?: ModelPollaMundialistaConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPollaMundialistaConnection = {
  __typename: "ModelPollaMundialistaConnection",
  items:  Array<PollaMundialista | null >,
  nextToken?: string | null,
};

export type ModelPollaSubscriptionConnection = {
  __typename: "ModelPollaSubscriptionConnection",
  items:  Array<PollaSubscription | null >,
  nextToken?: string | null,
};

export type PollaSubscription = {
  __typename: "PollaSubscription",
  id: string,
  isAdmin: boolean,
  pollaMundialistaId: string,
  pollaMundialista?: PollaMundialista | null,
  totalPoints: number,
  status: string,
  createdAt: string,
  updatedAt: string,
  pollaMundialistaPollaSubscriptionsId?: string | null,
};

export type UpdatePollaMundialistaInput = {
  id: string,
  name?: string | null,
  subscriptionPrice?: number | null,
  firstPrize?: number | null,
  secondPrize?: number | null,
  thirdPrize?: number | null,
  fourthPrize?: number | null,
  fifthPrize?: number | null,
  tournamentPollasMundialistasId?: string | null,
};

export type DeletePollaMundialistaInput = {
  id: string,
};

export type CreateTournamentInput = {
  id?: string | null,
  name: string,
  descpription?: string | null,
};

export type ModelTournamentConditionInput = {
  name?: ModelStringInput | null,
  descpription?: ModelStringInput | null,
  and?: Array< ModelTournamentConditionInput | null > | null,
  or?: Array< ModelTournamentConditionInput | null > | null,
  not?: ModelTournamentConditionInput | null,
};

export type UpdateTournamentInput = {
  id: string,
  name?: string | null,
  descpription?: string | null,
};

export type DeleteTournamentInput = {
  id: string,
};

export type CreatePollaSubscriptionInput = {
  id?: string | null,
  isAdmin: boolean,
  pollaMundialistaId: string,
  totalPoints: number,
  status: string,
  pollaMundialistaPollaSubscriptionsId?: string | null,
};

export type ModelPollaSubscriptionConditionInput = {
  isAdmin?: ModelBooleanInput | null,
  pollaMundialistaId?: ModelIDInput | null,
  totalPoints?: ModelIntInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelPollaSubscriptionConditionInput | null > | null,
  or?: Array< ModelPollaSubscriptionConditionInput | null > | null,
  not?: ModelPollaSubscriptionConditionInput | null,
  pollaMundialistaPollaSubscriptionsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePollaSubscriptionInput = {
  id: string,
  isAdmin?: boolean | null,
  pollaMundialistaId?: string | null,
  totalPoints?: number | null,
  status?: string | null,
  pollaMundialistaPollaSubscriptionsId?: string | null,
};

export type DeletePollaSubscriptionInput = {
  id: string,
};

export type ModelPollaMundialistaFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subscriptionPrice?: ModelFloatInput | null,
  firstPrize?: ModelFloatInput | null,
  secondPrize?: ModelFloatInput | null,
  thirdPrize?: ModelFloatInput | null,
  fourthPrize?: ModelFloatInput | null,
  fifthPrize?: ModelFloatInput | null,
  and?: Array< ModelPollaMundialistaFilterInput | null > | null,
  or?: Array< ModelPollaMundialistaFilterInput | null > | null,
  not?: ModelPollaMundialistaFilterInput | null,
  tournamentPollasMundialistasId?: ModelIDInput | null,
};

export type ModelTournamentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  descpription?: ModelStringInput | null,
  and?: Array< ModelTournamentFilterInput | null > | null,
  or?: Array< ModelTournamentFilterInput | null > | null,
  not?: ModelTournamentFilterInput | null,
};

export type ModelTournamentConnection = {
  __typename: "ModelTournamentConnection",
  items:  Array<Tournament | null >,
  nextToken?: string | null,
};

export type ModelPollaSubscriptionFilterInput = {
  id?: ModelIDInput | null,
  isAdmin?: ModelBooleanInput | null,
  pollaMundialistaId?: ModelIDInput | null,
  totalPoints?: ModelIntInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelPollaSubscriptionFilterInput | null > | null,
  or?: Array< ModelPollaSubscriptionFilterInput | null > | null,
  not?: ModelPollaSubscriptionFilterInput | null,
  pollaMundialistaPollaSubscriptionsId?: ModelIDInput | null,
};

export type CreatePollaMundialistaMutationVariables = {
  input: CreatePollaMundialistaInput,
  condition?: ModelPollaMundialistaConditionInput | null,
};

export type CreatePollaMundialistaMutation = {
  createPollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type UpdatePollaMundialistaMutationVariables = {
  input: UpdatePollaMundialistaInput,
  condition?: ModelPollaMundialistaConditionInput | null,
};

export type UpdatePollaMundialistaMutation = {
  updatePollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type DeletePollaMundialistaMutationVariables = {
  input: DeletePollaMundialistaInput,
  condition?: ModelPollaMundialistaConditionInput | null,
};

export type DeletePollaMundialistaMutation = {
  deletePollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type CreateTournamentMutationVariables = {
  input: CreateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type CreateTournamentMutation = {
  createTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTournamentMutationVariables = {
  input: UpdateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type UpdateTournamentMutation = {
  updateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTournamentMutationVariables = {
  input: DeleteTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type DeleteTournamentMutation = {
  deleteTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePollaSubscriptionMutationVariables = {
  input: CreatePollaSubscriptionInput,
  condition?: ModelPollaSubscriptionConditionInput | null,
};

export type CreatePollaSubscriptionMutation = {
  createPollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type UpdatePollaSubscriptionMutationVariables = {
  input: UpdatePollaSubscriptionInput,
  condition?: ModelPollaSubscriptionConditionInput | null,
};

export type UpdatePollaSubscriptionMutation = {
  updatePollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type DeletePollaSubscriptionMutationVariables = {
  input: DeletePollaSubscriptionInput,
  condition?: ModelPollaSubscriptionConditionInput | null,
};

export type DeletePollaSubscriptionMutation = {
  deletePollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type GetPollaMundialistaQueryVariables = {
  id: string,
};

export type GetPollaMundialistaQuery = {
  getPollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type ListPollaMundialistasQueryVariables = {
  filter?: ModelPollaMundialistaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollaMundialistasQuery = {
  listPollaMundialistas?:  {
    __typename: "ModelPollaMundialistaConnection",
    items:  Array< {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTournamentQueryVariables = {
  id: string,
};

export type GetTournamentQuery = {
  getTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentConnection",
    items:  Array< {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPollaSubscriptionQueryVariables = {
  id: string,
};

export type GetPollaSubscriptionQuery = {
  getPollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type ListPollaSubscriptionsQueryVariables = {
  filter?: ModelPollaSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollaSubscriptionsQuery = {
  listPollaSubscriptions?:  {
    __typename: "ModelPollaSubscriptionConnection",
    items:  Array< {
      __typename: "PollaSubscription",
      id: string,
      isAdmin: boolean,
      pollaMundialistaId: string,
      pollaMundialista?:  {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null,
      totalPoints: number,
      status: string,
      createdAt: string,
      updatedAt: string,
      pollaMundialistaPollaSubscriptionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePollaMundialistaSubscription = {
  onCreatePollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type OnUpdatePollaMundialistaSubscription = {
  onUpdatePollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type OnDeletePollaMundialistaSubscription = {
  onDeletePollaMundialista?:  {
    __typename: "PollaMundialista",
    id: string,
    name: string,
    subscriptionPrice: number,
    firstPrize: number,
    secondPrize: number,
    thirdPrize: number,
    fourthPrize: number,
    fifthPrize: number,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      descpription?: string | null,
      pollasMundialistas?:  {
        __typename: "ModelPollaMundialistaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pollaSubscriptions?:  {
      __typename: "ModelPollaSubscriptionConnection",
      items:  Array< {
        __typename: "PollaSubscription",
        id: string,
        isAdmin: boolean,
        pollaMundialistaId: string,
        totalPoints: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        pollaMundialistaPollaSubscriptionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tournamentPollasMundialistasId?: string | null,
  } | null,
};

export type OnCreateTournamentSubscription = {
  onCreateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTournamentSubscription = {
  onUpdateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTournamentSubscription = {
  onDeleteTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    descpription?: string | null,
    pollasMundialistas?:  {
      __typename: "ModelPollaMundialistaConnection",
      items:  Array< {
        __typename: "PollaMundialista",
        id: string,
        name: string,
        subscriptionPrice: number,
        firstPrize: number,
        secondPrize: number,
        thirdPrize: number,
        fourthPrize: number,
        fifthPrize: number,
        createdAt: string,
        updatedAt: string,
        tournamentPollasMundialistasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePollaSubscriptionSubscription = {
  onCreatePollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type OnUpdatePollaSubscriptionSubscription = {
  onUpdatePollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};

export type OnDeletePollaSubscriptionSubscription = {
  onDeletePollaSubscription?:  {
    __typename: "PollaSubscription",
    id: string,
    isAdmin: boolean,
    pollaMundialistaId: string,
    pollaMundialista?:  {
      __typename: "PollaMundialista",
      id: string,
      name: string,
      subscriptionPrice: number,
      firstPrize: number,
      secondPrize: number,
      thirdPrize: number,
      fourthPrize: number,
      fifthPrize: number,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        descpription?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      pollaSubscriptions?:  {
        __typename: "ModelPollaSubscriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tournamentPollasMundialistasId?: string | null,
    } | null,
    totalPoints: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    pollaMundialistaPollaSubscriptionsId?: string | null,
  } | null,
};
