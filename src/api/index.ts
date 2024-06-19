import { HeroListSchema, HeroStateSchema, type HeroState } from "./schema";
import { queryOptions } from "@tanstack/react-query";

const API_URL = "https://hahow-recruit.herokuapp.com/heroes";

// Fetch hero list
const getHeroList = async () => {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  return HeroListSchema.safeParse(data);
};

// Fetch hero state
const getHeroState = async (id: string) => {
  const resp = await fetch(`${API_URL}/${id}/profile`);
  const data = await resp.json();
  return HeroStateSchema.safeParse(data);
};

// Hero list query options
const getHeroListQueryOptions = () =>
  queryOptions({
    queryKey: ["heroList"],
    queryFn: async () => getHeroList(),
  });

// Hero state query options
const getHeroStateQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["heroState", id],
    queryFn: async () => getHeroState(id),
  });

// Patch hero states
const patchHeroState = async ({
  id,
  data,
}: {
  id: string;
  data: HeroState;
}) => {
  return await fetch(`${API_URL}/${id}/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export { getHeroListQueryOptions, getHeroStateQueryOptions, patchHeroState };
