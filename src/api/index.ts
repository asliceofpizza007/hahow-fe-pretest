import { HeroListSchema, HeroStateSchema } from "./schema";
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

export { getHeroListQueryOptions, getHeroStateQueryOptions };
