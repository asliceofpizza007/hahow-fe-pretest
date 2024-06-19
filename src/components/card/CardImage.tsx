import type { ComponentProps } from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type CardImageProps = ComponentProps<"img">;

const CardImage = ({ className, ...restProps }: CardImageProps) => {
  return (
    <img
      {...restProps}
      className={twMerge(
        cx(
          "w-full object-cover rounded-t-lg grayscale-[80%] transition-[filter]",
          className
        )
      )}
    />
  );
};

export default CardImage;
