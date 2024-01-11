import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonColors: { [key: string]: { [key: string]: string } } = {
  primary: {
    default: "bg-ocean-primary-10 hover:bg-ocean-primary-30",
    outline:
      "border-ocean-primary-10 text-ocean-primary-10 hover:text-ocean-light-10 hover:bg-ocean-primary-10",
    ghost: "text-ocean-primary-10 hover:bg-ocean-primary-10",
    link: "text-ocean-primary-10",
  },
  secondary: {
    default:
      "bg-ocean-secondary-10 text-ocean-primary-10 hover:bg-ocean-secondary-30 hover:text-ocean-light-10",
    outline:
      "border-ocean-secondary-30 text-ocean-secondary-30 hover:text-ocean-light-10 hover:bg-ocean-secondary-30",
    ghost: "text-ocean-secondary-30 hover:bg-ocean-secondary-30",
    link: "text-ocean-secondary-30",
  },
  success: {
    default: "bg-ocean-success-20 hover:bg-ocean-success-20/90",
    outline:
      "border-ocean-success-20 text-ocean-success-20 hover:text-ocean-light-10 hover:bg-ocean-success-20/90",
    ghost: "text-ocean-success-20 hover:bg-ocean-success-20/90",
    link: "text-ocean-success-20",
  },
  danger: {
    default: "bg-ocean-danger-20 hover:bg-ocean-danger-20/90",
    outline:
      "border-ocean-danger-20 text-ocean-danger-20 hover:text-ocean-light-10 hover:bg-ocean-danger-20/90",
    ghost: "text-ocean-danger-20 hover:bg-ocean-danger-20/90",
    link: "text-ocean-danger-20",
  },
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "text-ocean-light-10",
        outline: "border bg-ocean-light-10 hover:text-ocean-light-10",
        ghost: "hover:text-ocean-light-10",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-6 w-6 p-1",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | undefined;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, color, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape }),
          buttonColors[color ?? "primary"][variant ?? "default"],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
