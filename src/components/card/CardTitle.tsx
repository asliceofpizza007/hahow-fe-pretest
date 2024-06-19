import type { ComponentProps } from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type CardTitleProps = ComponentProps<"h3">;

const CardTitle = ({ children, className, ...restProps }: CardTitleProps) => {
  return (
    <h3 {...restProps} className={twMerge(cx("text-lg font-bold", className))}>
      {children}
    </h3>
  );
};

export default CardTitle;
