'use client';

import { useEffect, useState } from 'react';

interface ProgressCardProps {
  percentage: number;
}

export const ProgressCard = ({
  percentage,
}: ProgressCardProps): JSX.Element => {
  const range = Math.min(100, Math.max(0, percentage));
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(range);
    }, 50);
    return () => clearTimeout(timeout);
  }, [range]);

  return (
    <div className='mt-12 w-full rounded-lg bg-gray-100 p-4 text-white'>
      <div className='mb-1 text-lg font-semibold'>우리는 지금까지</div>
      <div className='mb-5 text-lg font-semibold'>
        <span className='text-primary-500'>{range}%</span>
        <span className='ml-2'>완료했어요!</span>
      </div>

      <div className='relative h-4 w-full rounded-sm bg-gray-50'>
        <div
          className='h-full rounded-sm bg-gradient-to-r from-[#9360F9] to-[#BF9BFD] transition-all duration-500'
          style={{ width: `${width}%` }}
        />
      </div>

      <div className='mt-2 flex justify-between text-xs font-medium text-gray-400'>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};
