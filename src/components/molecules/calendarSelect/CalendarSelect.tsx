'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import LeftArrow from '@/assets/left_arrow.svg';
import RightArrow from '@/assets/right_arrow.svg';

import './styles.css';

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const CalendarSelect = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(null);
  const [isFolded, setIsFolded] = useState<boolean>(false);

  const handleSelectedDate = (newDate: SelectedDate) => {
    if (!(newDate instanceof Date)) return;

    const isSameDate =
      selectedDate instanceof Date &&
      selectedDate.getTime() === newDate.getTime();

    setSelectedDate(isSameDate ? null : newDate);
    setIsFolded((prev) => !prev);
  };

  return (
    <div className='rounded-lg bg-gray-100 p-5'>
      <div
        className='flex cursor-pointer justify-between text-base font-medium'
        onClick={() => setIsFolded(true)}
      >
        <span className='text-gray-800'>날짜</span>
        <span className={`${selectedDate ? 'text-white' : 'text-gray-500'}`}>
          {selectedDate instanceof Date
            ? format(selectedDate, 'yyyy년 M월 d일')
            : '선택 안함'}
        </span>
      </div>

      {isFolded && (
        <Calendar
          className='react-calendar'
          onChange={handleSelectedDate}
          value={selectedDate}
          view='month'
          calendarType='gregory'
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          formatDay={(_, date) => format(date, 'd')}
          prevLabel={
            <div className='mb-5 mr-1 flex h-6 w-6 items-center justify-center'>
              <LeftArrow />
            </div>
          }
          nextLabel={
            <div className='ml-1 flex h-6 w-6 items-center justify-center'>
              <RightArrow />
            </div>
          }
          tileClassName={({ date }) =>
            date < new Date() ? 'text-gray-400' : ''
          }
        />
      )}
    </div>
  );
};
