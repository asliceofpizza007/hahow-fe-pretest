import { createFileRoute } from "@tanstack/react-router";
import { getHeroListQueryOptions } from "../api";

export const Route = createFileRoute("/heroes")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getHeroListQueryOptions()),
});
