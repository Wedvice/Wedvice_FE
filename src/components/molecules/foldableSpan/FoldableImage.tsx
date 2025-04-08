'use client';

import DownArrow from '@/assets/wed_icon/icon_16/downarrow_default_gray 800.svg';
import TopArrow from '@/assets/wed_icon/icon_16/uparrow_default_gray 800.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface FoldableImageProps {
  spanText: string;
  images: StaticImageData[];
}

export const FoldableImage = ({ spanText, images }: FoldableImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (images.length <= 3) return null;

  if (isOpen)
    return (
      <div className='flex flex-col'>
        <div className='grid grid-cols-3 gap-[3px]'>
          {images?.map((image) => (
            <Image src={image} width={90} height={90} alt='이미지' />
          ))}
        </div>
        <div
          className='flex cursor-pointer items-center justify-end gap-2'
          onClick={() => setIsOpen(false)}
        >
          접기 <TopArrow />
        </div>
      </div>
    );

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-3 gap-[3px] pb-2'>
        {images
          ?.slice(0, 3)
          .map((image) => (
            <Image src={image} width={90} height={90} alt='이미지' />
          ))}
      </div>
      <div
        className='flex cursor-pointer items-center justify-end gap-2'
        onClick={() => setIsOpen(true)}
      >
        <span>{spanText}</span>
        <DownArrow />
      </div>
    </div>
  );
};
