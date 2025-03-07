'use client';

import { getFormattedYearMonth } from '@/utils/time';
import { forwardRef, ReactNode } from 'react';

interface BaseProps {
  className?: string;
  button?: ReactNode;
  onButtonClick?: () => void;
}

// title과 time 중 하나만 받음
type LeftAlignedTopBarProps =
  | (BaseProps & { title: string; time?: never })
  | (BaseProps & { time: string; title?: never });

export const LeftAlignedTopBar = forwardRef<
  HTMLDivElement,
  LeftAlignedTopBarProps
>(({ className, title, time, button, onButtonClick, ...props }, ref) => {
  const text = title || (time && getFormattedYearMonth(time));

  return (
    <div
      ref={ref}
      className={`${className} flex h-[53px] items-center px-5 text-center`}
      {...props}
    >
      {/* 타이틀 || 타임 */}
      {text && (
        <span className='select-none text-xl font-semibold text-white'>
          {text}
        </span>
      )}
      {/* 우측 버튼 */}
      {button && (
        <div
          className='ml-auto flex cursor-pointer items-center'
          onClick={onButtonClick}
        >
          {button}
        </div>
      )}
    </div>
  );
});

LeftAlignedTopBar.displayName = 'LeftAlignedTopBar';
