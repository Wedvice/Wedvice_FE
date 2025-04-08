'use client';

import ThreeDot from '@/assets/wed_icon/icon_20/editdot_default.svg';
import { CommentDropdown } from '@/features/comment/components';
import { useDropdown } from '@/hooks/useDropdown';
import { detailDate } from '@/utils/time';

interface CommentCardProps {
  name: string;
  text: string;
  time: Date;
}

export const CommentCard = ({ name, text, time }: CommentCardProps) => {
  const { isDropdownOpen, handleToggleDropdown, dropdownRef, triggerRef } =
    useDropdown();

  const handleClick = (e: React.MouseEvent) => {
    handleToggleDropdown();
    e.stopPropagation();
  };
  return (
    <div className='flex flex-col pb-3'>
      <div className='relative'>
        <div className='flex justify-between pb-2 text-[12px]'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-800'>{name}</span>
            <span className='text-xs text-gray-600'>{detailDate(time)}</span>
          </div>
          <div
            ref={triggerRef}
            onClick={handleClick}
            className='cursor-pointer'
          >
            <ThreeDot />
          </div>
        </div>
        {isDropdownOpen && (
          <div ref={dropdownRef} className='absolute right-0 top-6 z-10'>
            <CommentDropdown />
          </div>
        )}
      </div>
      <span className='text-[16px] text-white'>{text}</span>
    </div>
  );
};
