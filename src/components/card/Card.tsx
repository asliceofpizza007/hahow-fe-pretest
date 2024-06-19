import type { ComponentProps, MouseEventHandler } from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import CardTitle from "./CardTitle";
import CardImage from "./CardImage";

type CardProps = ComponentProps<"div">;

const Card = ({ children, className, ...restProps }: CardProps) => {
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };
  return (
    <div
      {...restProps}
      className={twMerge(cx("card", className))}
      onMouseMove={onMouseMove}
    >
      <div className="relative flex flex-col gap-2 z-10">{children}</div>
    </div>
  );
};

Card.Title = CardTitle;
Card.Image = CardImage;
export default Card;
