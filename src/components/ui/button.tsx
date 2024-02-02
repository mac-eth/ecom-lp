import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex uppercase items-center justify-center  rounded-md text-sm font-semibold shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-zinc-50 shadow-md hover:bg-accent/90",
        outline:
          "border border-accent hover:bg-accent hover:text-zinc-50",
        link: "text-zinc-950 underline-offset-4 shadow-none hover:underline",
      },
      size: {
        default: "py-3 px-6 rounded-full text-xl font-thunder font-semibold ",
        sm: "h-8 rounded-md px-3",
        lg: "px-8 py-4 text-2xl rounded-full font-thunder font-semibold ",
        icon: "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
