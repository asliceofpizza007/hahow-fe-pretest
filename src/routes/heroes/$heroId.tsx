import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { getHeroStateQueryOptions } from "../../api";

const profileSearchSchema = z.object({
  name: z.string().nullish(),
});

type ProfileSearch = z.infer<typeof profileSearchSchema>;

export const Route = createFileRoute("/heroes/$heroId")({
  validateSearch: (search: Record<string, unknown>): ProfileSearch =>
    profileSearchSchema.parse(search),
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(getHeroStateQueryOptions(params.heroId)),
});
