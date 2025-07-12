import { format } from 'date-fns';

export type TodoType = '예신' | '예랑' | '함께';

export interface CalendarData {
  id: string;
  title: string;
  category: string;
  date: string;
  manager: TodoType;
}

type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const getEventsForDate = (
  data: CalendarData[],
  date: Date,
): CalendarData[] => {
  const dateStr = format(date, 'yyyy-MM-dd');
  return data.filter((list) => list.date === dateStr);
};
