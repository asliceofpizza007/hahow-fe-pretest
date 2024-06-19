import { type HeroState } from "../api/schema";

export const getPoints = (states: HeroState): number => {
  return Object.keys(states).reduce(
    (acc, cur) => acc + states[cur as keyof HeroState],
    0
  );
};
