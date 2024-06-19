import { z } from "zod";

const HeroSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
});

const HeroListSchema = z.array(HeroSchema);

const HeroStateSchema = z.object({
  str: z.number(),
  int: z.number(),
  agi: z.number(),
  luk: z.number(),
});

export { HeroListSchema, HeroStateSchema };
