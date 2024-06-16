import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/heroes/")({
  component: HeroList,
});

function HeroList() {
  return (
    <div>
      <h3>hero list</h3>
    </div>
  );
}
