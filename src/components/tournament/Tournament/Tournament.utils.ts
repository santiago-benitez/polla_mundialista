import { Match, Group } from "../../../API";

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
