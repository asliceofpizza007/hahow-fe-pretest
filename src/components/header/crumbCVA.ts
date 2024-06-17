import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const crumbVariants = cva("hover:text-au-accent", {
  variants: {
    isCurrent: {
      true: "select-none text-au-accent cursor-default",
    },
  },
  defaultVariants: {
    isCurrent: false,
  },
});

interface CrumbVariants extends VariantProps<typeof crumbVariants> {}

const crumbCVA = (variants: CrumbVariants) => twMerge(crumbVariants(variants));

export default crumbCVA;
