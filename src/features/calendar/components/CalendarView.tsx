import { useCalendarContext } from '@/contexts/calendar';
import {
  CalendarData,
  colorMap,
  getEventsForDate,
  SelectedDate,
} from '@/types/calendar/calendarTypes';
import { format } from 'date-fns';
import Calendar from 'react-calendar';

import './styles.css';

const NAV_HEIGHT = 88;

export const CalendarView = ({
  data,
}: {
  data: CalendarData[];
}): JSX.Element => {
  const { selectedDate, setSelectedDate, setIsSlideOpen } =
    useCalendarContext();

  const handleSelect = (newDate: SelectedDate) => {
    if (!(newDate instanceof Date)) return;

    setSelectedDate(newDate);
    setIsSlideOpen(true);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const dayEvents = getEventsForDate(data, date);
    return (
      <div className='mt-2 flex w-full flex-col gap-1 px-0.5 text-xs text-white'>
        {dayEvents.map((event) => (
          <div
            key={event.id}
            className={`overflow-hidden whitespace-nowrap rounded p-0.5 ${colorMap[event.manager]}`}
          >
            {event.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className='flex flex-col items-center'
      style={{ height: `calc(100% - ${NAV_HEIGHT}px)` }}
    >
      <Calendar
        className='react-calendar'
        onChange={handleSelect}
        value={selectedDate}
        calendarType='gregory'
        formatDay={(_, date) => format(date, 'd')}
        tileContent={tileContent}
      />
    </div>
  );
};
