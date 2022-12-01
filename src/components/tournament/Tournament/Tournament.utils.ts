import {
  Match,
  Group,
  SubscriptionMatch,
  PollaSubscription
} from "../../../API";

export const orderMatchesByDate = (matches: (Match | null)[] | undefined) => {
  if (!matches) {
    return undefined;
  }
  const orderedMatches = matches.sort((a, b) => {
    if (!a || !b) {
      return 0;
    }
    if (new Date(a.matchDate) > new Date(b.matchDate)) {
      return 1;
    }
    if (new Date(a.matchDate) < new Date(b.matchDate)) {
      return -1;
    }
    return 0;
  });
  return orderedMatches;
};

export const orderGroupsByName = (groups: (Group | null)[] | undefined) => {
  if (!groups) {
    return undefined;
  }
  const orderedGroups = groups.sort((a, b) => {
    return a?.name.localeCompare(b?.name ?? "") ?? 0;
  });
  return orderedGroups;
};

export const getGroupPositionsByGroup = (
  subscriptionMatchs: SubscriptionMatch[],
  group: Group | null
) => {
  if (!group) {
    return;
  }
  const teamStats = group.groupTeams?.items.map(groupTeam => {
    const stats = {
      name: groupTeam?.team?.name,
      flagUrl: groupTeam?.team?.flagUrl,
      pts: 0,
      gf: 0,
      ga: 0,
      gd: 0
    };
    const filteredMatches = subscriptionMatchs.filter(subMatch => {
      return subMatch.match?.groupMatchesId === group.id;
    });
    filteredMatches.forEach(match => {
      match.subscriptionMatchTeams?.items.forEach((team, index) => {
        if (team?.teamSubscriptionMatchTeamsId === groupTeam?.team?.id) {
          stats.pts += team?.points ?? 0;
          stats.gf += team?.score ?? 0;
          stats.ga +=
            match.subscriptionMatchTeams?.items[index === 0 ? 1 : 0]?.score ??
            0;
          stats.gd +=
            (team?.score ?? 0) -
            (match.subscriptionMatchTeams?.items[index === 0 ? 1 : 0]?.score ??
              0);
        }
      });
    });
    return stats;
  });
  const positions = teamStats?.sort((b, a) => {
    if (!a || !b) {
      return 0;
    }
    if (a.pts > b.pts) {
      return 1;
    }
    if (a.pts < b.pts) {
      return -1;
    }
    if (a.pts === b.pts) {
      if (a.gd > b.gd) {
        return 1;
      }
      if (a.gd < b.gd) {
        return -1;
      }
      if (a.gd === b.gd) {
        if (a.gf > b.gf) {
          return 1;
        }
        if (a.gf < b.gf) {
          return -1;
        }
      }
    }
    return 0;
  });
  return positions;
};
export const removeEmailFromText = (text: string | undefined) => {
  if (!text) {
    return text;
  }
  const index = text.indexOf("@");
  if (index < 0) {
    return text;
  }
  return text.substring(0, index);
};

export const calculatePositions = (
  subscriptions: (PollaSubscription | null)[] | undefined,
  filter: string[] | undefined = undefined
) => {
  if (!subscriptions) {
    return undefined;
  }
  return subscriptions.map(sub => {
    let filteredMatches = sub?.subscriptionMatches?.items;
    if (filteredMatches && filter) {
      filteredMatches = filteredMatches.filter(
        (subscriptionMatch: SubscriptionMatch | null) => {
          return filter.includes(
            subscriptionMatch?.match?.group?.round?.name ?? ""
          );
        }
      );
    }
    const points = filteredMatches?.reduce((accumulator, object) => {
      return accumulator + (object?.subscriptionPoints ?? 0);
    }, 0);
    return {
      email: sub?.email,
      points
    };
  });
};

export const sortPositions = (subscriptionPoints: any) => {
  if (!subscriptionPoints) {
    return undefined;
  }
  const subscriptionsPositions = subscriptionPoints.sort((a: any, b: any) => {
    if (!a || !b) {
      return 0;
    }
    if ((a.points ?? 0) < (b.points ?? 0)) {
      return 1;
    }
    if ((a.points ?? 0) > (b.points ?? 0)) {
      return -1;
    }
    return 0;
  });
  const mappedSubscriptionsPositions = subscriptionsPositions?.map(
    (sub: any, index: number) => {
      return {
        position: index + 1,
        ...sub
      };
    }
  );
  return mappedSubscriptionsPositions;
};
