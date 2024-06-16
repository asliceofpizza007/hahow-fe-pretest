import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1>Home</h1>
      <Link to="/heroes">Hero Page</Link>
    </>
  ),
});
