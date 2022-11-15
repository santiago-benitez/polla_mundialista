import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import { CreatePollaSubscriptionInput, PollaMundialista } from "../API";
import {
  createSubscriptionBundleService,
  createSubscriptionService
} from "./subscription.service";

export const createPollaMundialistaService = async (
  pollaMundialista: Partial<PollaMundialista>,
  userId: string,
  email: string
) => {
  // 1.- create polla
  const newPollamundialistaResult: any = await API.graphql({
    query: mutations.createPollaMundialista,
    variables: { input: pollaMundialista }
  });
  const newPollamundialista = newPollamundialistaResult.data
    .createPollaMundialista as PollaMundialista;
  // 2.- create subscription
  const subscriptionInput: CreatePollaSubscriptionInput = {
    isAdmin: true,
    totalPoints: 0,
    status: "Aceptado",
    pollaMundialistaPollaSubscriptionsId: newPollamundialista.id,
    userId,
    email
  };
  const newSubscription = await createSubscriptionService(subscriptionInput);
  // 3.- create subscription bundle
  await createSubscriptionBundleService(newSubscription);
};
