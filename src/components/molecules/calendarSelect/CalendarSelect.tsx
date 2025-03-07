import Calendar from 'react-calendar';
import { format, parse } from 'date-fns';
import LeftArrow from '@/assets/left_arrow.svg';
import RightArrow from '@/assets/right_arrow.svg';

import './styles.css';

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

const CalendarNavButton = ({ direction }: { direction: 'left' | 'right' }) => {
  const isLeft = direction === 'left';
  return (
    <div
      className={`mb-5 flex h-6 w-6 items-center justify-center ${isLeft ? 'mr-1' : 'ml-1'}`}
    >
      {isLeft ? <LeftArrow /> : <RightArrow />}
    </div>
  );
};

interface CalendarSelectProps {
  selectedDate: string | null;
  setSelectedDate: (selected: string | null) => void;
  setIsFolded: (isFolded: boolean) => void;
}

export const CalendarSelect = ({
  selectedDate,
  setSelectedDate,
  setIsFolded,
}: CalendarSelectProps): JSX.Element => {
  const parsedSelectedDate = selectedDate
    ? parse(selectedDate, 'yyyy.MM.dd', new Date())
    : null;

  const handleSelect = (newDate: SelectedDate) => {
    if (!(newDate instanceof Date)) return;

    const isSameDate = parsedSelectedDate?.getTime() === newDate.getTime();
    setSelectedDate(isSameDate ? null : format(newDate, 'yyyy.MM.dd'));
    setIsFolded(false);
  };

  return (
    <Calendar
      className='react-calendar'
      onChange={handleSelect}
      value={parsedSelectedDate}
      view='month'
      calendarType='gregory'
      prev2Label={null}
      next2Label={null}
      showNeighboringMonth={false}
      formatDay={(_, date) => format(date, 'd')}
      prevLabel={<CalendarNavButton direction='left' />}
      nextLabel={<CalendarNavButton direction='right' />}
      tileClassName={({ date }) => (date < new Date() ? 'text-gray-400' : '')}
    />
  );
};
