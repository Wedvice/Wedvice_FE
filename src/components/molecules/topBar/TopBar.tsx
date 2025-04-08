'use client';

import LeftArrow from '@/assets/wed_icon/icon_28/leftarrow_default.svg';
import { getFormattedTime } from '@/utils/time';
import { useRouter } from 'next/navigation';
import { forwardRef, ReactNode } from 'react';

interface TopBarProps {
  title?: string;
  time?: string;
  className?: string;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export const TopBar = forwardRef<HTMLDivElement, TopBarProps>(
  (
    {
      title,
      time,
      primaryButton,
      secondaryButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      className,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();

    const handleBack = () => {
      router.back();
    };

    return (
      <div
        ref={ref}
        className={`${className} relative flex h-[53px] items-center px-5 text-center`}
        {...props}
      >
        {/* 뒤로가기 버튼 */}
        <div
          className='flex h-9 w-9 cursor-pointer items-center justify-center'
          onClick={handleBack}
        >
          <LeftArrow />
        </div>
        {/* 타이틀 + 시간 */}
        <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 select-none items-center'>
          {title && (
            <span className='text-lg font-semibold text-gray-800'>{title}</span>
          )}
          {time && (
            <span className='ml-2 text-xs font-medium text-gray-700'>
              {getFormattedTime(time)}
            </span>
          )}
        </div>
        {/* 우측 버튼 그룹 */}
        {primaryButton && (
          <div className='ml-auto flex items-center space-x-4'>
            {secondaryButton && (
              <div className='cursor-pointer' onClick={onSecondaryButtonClick}>
                {secondaryButton}
              </div>
            )}
            <div className='cursor-pointer' onClick={onPrimaryButtonClick}>
              {primaryButton}
            </div>
          </div>
        )}
      </div>
    );
  },
);

TopBar.displayName = 'TopBar';
