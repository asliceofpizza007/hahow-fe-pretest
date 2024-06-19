import { z } from "zod";

const HeroSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
});

const HeroListSchema = z.array(HeroSchema);

type HeroList = z.infer<typeof HeroListSchema>;

const HeroStateSchema = z.object({
  str: z.number(),
  int: z.number(),
  agi: z.number(),
  luk: z.number(),
});

type HeroState = z.infer<typeof HeroStateSchema>;

export { HeroListSchema, HeroStateSchema };
export type { HeroList, HeroState };
