import { SubscriptionMatchTeam } from "../../../API";

export const calculatePoints = (
  teamScoreA: number,
  teamScoreB: number,
  teamPointsA: number,
  teamPointsB: number,
  subscriptionMatchTeamA: SubscriptionMatchTeam,
  subscriptionMatchTeamB: SubscriptionMatchTeam
) => {
  let points = 0;
  if (subscriptionMatchTeamA.score === teamScoreA) {
    points++;
  }
  if (subscriptionMatchTeamB.score === teamScoreB) {
    points++;
  }
  if (
    subscriptionMatchTeamA.score === teamScoreA &&
    subscriptionMatchTeamB.score === teamScoreB
  ) {
    points += 2;
  }
  if (
    subscriptionMatchTeamA.points === teamPointsA &&
    subscriptionMatchTeamB.points === teamPointsB
  ) {
    points += 3;
  }
  return points;
};
