import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex px-[3px] gap-[6px] items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium text-[20px]",
  {
    variants: {
      variant: {
        main: "bg-purple-40 hover:bg-purple-50 text-white",
        none: "text-white",
      },
      rounded: {
        xl: "rounded-xl",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        none: "rounded-none",
      },
      width: {
        full: "w-full",
        register: "w-[350px]",
      },
      height: {
        xl2: "h-[70px]",
        xl: "h-[58px]",
        lg: "h-[48px]",
        md: "h-[40px]",
        sm: "h-[35px]",
      },
      weight: {
        md: "font-medium",
        semi: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "main",
      rounded: "lg",
      width: "full",
      weight: "md",
      height: "lg",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, width, weight, height, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({
          variant,
          rounded,
          width,
          weight,
          height,
          className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
