import { type ComponentProps } from "react";

import inputCVA, { type InputVariants } from "./inputCVA";

interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    Omit<InputVariants, "className"> {}

const Input = ({ className, size, ...restProps }: InputProps) => {
  return <input {...restProps} className={inputCVA({ className, size })} />;
};

export default Input;
