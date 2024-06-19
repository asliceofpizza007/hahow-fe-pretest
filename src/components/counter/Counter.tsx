import { type ComponentProps } from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import Button from "../button";
import Input from "../input";

interface CounterProps extends Omit<ComponentProps<"div">, "children"> {
  value: number | string;
  name: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({
  className,
  value,
  name,
  onIncrease,
  onDecrease,
  ...restProps
}: CounterProps) => {
  return (
    <div
      {...restProps}
      className={twMerge(
        cx(
          "inline-block rounded-sm border border-au-primary overflow-hidden",
          className
        )
      )}
    >
      <Button
        type="button"
        className="rounded-none"
        size="small"
        onClick={onIncrease}
      >
        +
      </Button>
      <Input
        type="text"
        value={value}
        name={name}
        className="border-none w-[5em] text-center p-0"
        readOnly
      />
      <Button
        type="button"
        className="rounded-none"
        size="small"
        onClick={onDecrease}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
