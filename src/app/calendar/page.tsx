'use client';

import { CalendarProvider } from '@/contexts/calendar';
import { Calendar } from '@/features/calendar';

const CalendarPage = () => {
  return (
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  );
};

export default CalendarPage;
