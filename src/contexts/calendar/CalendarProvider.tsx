import { ReactNode, useState } from 'react';
import { CalendarContext } from './CalendarContext';

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        isSlideOpen,
        setIsSlideOpen,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
