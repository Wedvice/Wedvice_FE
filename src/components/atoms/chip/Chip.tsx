import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const chipVariants = cva('flex w-fit justify-center break-words', {
  variants: {
    type: {
      wedding: 'bg-gray-200 text-white',
      notification: 'text-gray-900 bg-gray-200 text-gray-900',
      primary300: 'bg-primary-300 text-white',
      pink100: 'bg-pink-100 text-white',
      teal100: 'bg-teal-100 text-white',
      blue100: 'bg-blue-100 text-white',
      yellow100: 'bg-yellow-100 text-white',
      gray100: 'bg-gray-200 text-gray-800',
      red100: 'bg-red-100 text-red-200',
    },
    size: {
      lg: 'px-[16px] py-[12px] text-[14px]',
      md: 'px-[16px] py-[8px] text-[16px]',
      sm: 'px-[8px] py-[4px] text-[14px]',
    },
    rounded: {
      notification: 'rounded-xl rounded-tl-none',
      md: 'rounded-md',
      sm: 'rounded-sm',
    },
  },
  defaultVariants: {
    type: 'wedding',
    size: 'md',
    rounded: 'md',
  },
});

interface ChipProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, type, rounded, size, ...props }, ref) => {
    return (
      <div
        className={chipVariants({ type, className, rounded, size })}
        ref={ref}
        {...props}
      />
    );
  },
);
Chip.displayName = 'Chip';
