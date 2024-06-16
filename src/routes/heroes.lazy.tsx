import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/heroes")({
  component: HeroLayout,
});

function HeroLayout() {
  return (
    <div>
      <h1>Hero List</h1>
      <Outlet />
    </div>
  );
}
