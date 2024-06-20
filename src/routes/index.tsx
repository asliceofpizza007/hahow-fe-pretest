import { useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const container = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const intro = new SplitType("#intro", { types: "words" });
      const desc = new SplitType("#desc", { types: "words" });

      tl.from(container.current, {
        y: 50,
        opacity: 0.7,
        duration: 0.3,
        ease: "back",
      })
        .to(intro.words, {
          color: "#e8eff7",
          duration: 0.1,
          stagger: 0.1,
          ease: "back",
        })
        .to(desc.words, {
          color: "#e8eff7",
          duration: 0.1,
          stagger: 0.1,
          ease: "back",
        })
        .from(linkRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.3,
          ease: "back",
        });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="flex items-center justify-center w-full p-8"
    >
      <div className="flex flex-col gap-4">
        <p id="intro" className="text-xl text-gray-500">
          Hi, I'm Austin.
        </p>
        <p id="desc" className="text-gray-500">
          This is the frontend engineer pretest project of Hahow.
        </p>
        <div className="flex justify-end">
          <Link
            ref={linkRef}
            className="relative inline-flex items-center justify-center mt-2 p-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-au-accent/20 before:transition after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border after:border-au-accent after:border-solid after:opacity-0 after:scale-[1.2] after:transition before:hover:opacity-0 before:hover:scale-[0.5] after:hover:opacity-100 after:hover:scale-[1]"
            to="/heroes"
          >
            Go To Hero Page
          </Link>
        </div>
      </div>
    </section>
  );
}
