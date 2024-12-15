import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex px-[3px] gap-4 items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium text-[20px]',
  {
    variants: {
      variant: {
        primary_fill: 'bg-primary-400 text-white',
        primary_outline:
          'bg-transparent border border-primary-400 text-primary-500',
        gray_fill: 'bg-gray-200 text-gray-800',
        gray_outline: 'bg-transparent border border-gray500 text-gray-800',
        none: 'text-white',
      },
      rounded: {
        xl: 'rounded-xl',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
        none: 'rounded-none',
      },
      width: {
        full: 'w-full',
        register: 'w-[350px]',
      },
      height: {
        lg: 'h-[63px]',
        md: 'h-[45px]',
        sm: 'h-[34px]',
      },
      weight: {
        md: 'font-medium',
        semi: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary_fill',
      rounded: 'lg',
      width: 'full',
      weight: 'md',
      height: 'lg',
    },
  },
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
  },
);
Button.displayName = 'Button';
