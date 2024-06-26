import { useMemo, useRef, type CSSProperties } from "react";
import {
  Link,
  Outlet,
  createLazyFileRoute,
  useLocation,
} from "@tanstack/react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Card } from "../components";

export const Route = createLazyFileRoute("/heroes")({
  component: HeroLayout,
  pendingComponent: () => <div>loading...</div>,
});

const cssVars: Record<string, Record<string, string>> = {
  1: {
    "--color": "#ed1b23",
  },
  2: {
    "--color": "#967136",
  },
  3: {
    "--color": "#e53a25",
  },
  4: {
    "--color": "#4fac65",
  },
};

function HeroLayout() {
  const loaderData = Route.useLoaderData();
  const location = useLocation();
  const id = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths[paths.length - 1];
  }, [location.pathname]);

  // animation
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.timeline().from(".card", {
        y: 50,
        opacity: 0.3,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
      });
    },
    { scope: container }
  );

  return (
    <>
      <section className="w-full">
        <div
          ref={container}
          className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3"
        >
          {loaderData.data ? (
            loaderData.data.map((hero) => {
              const style = cssVars[hero.id as string] as CSSProperties;
              const isActive = hero.id === id;
              return (
                <Card
                  key={hero.id}
                  style={style}
                  className={isActive ? "active" : ""}
                >
                  <Card.Image src={hero.image} alt={hero.name} />
                  <Card.Title>{hero.name}</Card.Title>
                  <Link
                    className="inline-flex justify-center items-center px-4 py-2 bg-au-background/80 rounded-md font-medium text-xs uppercase underline shadow-sm transition duration-300 ease-in-out hover:bg-au-secondary hover:border-transparent focus:outline-none"
                    to={`/heroes/${hero.id}`}
                    search={{
                      name: hero.name,
                    }}
                  >
                    To Profile
                  </Link>
                </Card>
              );
            })
          ) : (
            <p>There's no data displayed.</p>
          )}
        </div>
      </section>
      <Outlet />
    </>
  );
}
