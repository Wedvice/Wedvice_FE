'use client';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface DonutProgressProps {
  percentage: number;
}

export const DonutProgress = ({ percentage }: DonutProgressProps) => {
  const value = Math.max(0, Math.min(100, percentage));

  return (
    <div
      className='relative'
      style={{
        width: 124,
        height: 62,
      }}
    >
      <CircularProgressbarWithChildren
        value={value}
        maxValue={100}
        circleRatio={0.5}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: 'round',
          pathColor: '#9360F9',
          trailColor: '#17181C',
          textColor: '#BF9BFD',
        })}
      >
        <div className='relative -top-2 text-xl font-semibold text-primary-500'>
          {value}%
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
