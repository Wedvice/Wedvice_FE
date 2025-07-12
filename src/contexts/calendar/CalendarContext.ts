import { createContext, useContext } from 'react';

interface CalendarContextProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  isSlideOpen: boolean;
  setIsSlideOpen: (value: boolean) => void;
}

export const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined,
);

// CalendarContext 사용을 위한 Hook
export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      'CalendarContext 사용할 수 없습니다. CalendarProvider를 감싸주세요.',
    );
  }
  return context;
};

export default useCalendarContext;
