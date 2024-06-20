import { Fragment, useMemo } from "react";
import { useLocation, Link } from "@tanstack/react-router";

import crumbCVA from "./crumbCVA";

type Crumb = {
  path: string;
  name: string;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = useMemo<Crumb[]>(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    let currPath = "";
    const res = [];
    for (const path of paths) {
      currPath += `/${path}`;
      res.push({
        path: currPath,
        name: path,
      });
    }
    return import.meta.env.DEV
      ? res
      : res.filter((crumb) => crumb.name !== "hahow-fe-pretest");
  }, [location.pathname]);

  return (
    <nav
      className="flex items-center gap-1 uppercase font-bold text-base md:text-lg md:gap-2"
      aria-label="breadcrumb"
    >
      <Link className="hover:text-au-accent" to="/">
        Home
      </Link>
      {crumbs.map((crumb) => {
        return (
          <Fragment key={crumb.name}>
            <span className="select-none"> / </span>
            <Link
              className={crumbCVA({
                isCurrent: crumb.path === location.pathname,
              })}
              to={crumb.path}
            >
              {crumb.name}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
