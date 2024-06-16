import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/heroes/$heroId")({
  component: HeroProfile,
});

function HeroProfile() {
  const { heroId } = Route.useParams();
  return <p>{heroId}</p>;
}
