'use client';

import DownArrow from '@/assets/wed_icon/icon_16/downarrow_default_gray 800.svg';
import { Dropdown } from '@/components/atoms/dropdown';
import { useDropdown } from '@/hooks/useDropdown';
import { useState } from 'react';

export const HomeListDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('날짜순');
  const { isDropdownOpen, handleToggleDropdown, dropdownRef, triggerRef } =
    useDropdown();

  const handleClick = (e: React.MouseEvent) => {
    handleToggleDropdown();
    e.stopPropagation();
  };

  const options = [
    {
      label: '날짜순',
      onClick: () => {
        setSelectedOption('날짜순');
        console.log('날짜순 정렬');
        handleToggleDropdown();
      },
    },
    {
      label: '카테고리순',
      onClick: () => {
        setSelectedOption('카테고리순');
        console.log('카테고리순 정렬');
        handleToggleDropdown();
      },
    },
  ];

  return (
    <div className='relative ml-auto text-center'>
      <div
        ref={triggerRef}
        onClick={handleClick}
        className='flex cursor-pointer items-center gap-1 text-gray-800'
      >
        {selectedOption}
        <DownArrow />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className='absolute right-0 top-3 z-10'>
          <Dropdown options={options} />
        </div>
      )}
    </div>
  );
};
