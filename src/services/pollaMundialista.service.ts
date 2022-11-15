import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import { CreatePollaSubscriptionInput, PollaMundialista } from "../API";
import { createSubscriptionService } from "./subscription.service";

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
  console.log("HEEEY");
  await createSubscriptionService(subscriptionInput);
};
