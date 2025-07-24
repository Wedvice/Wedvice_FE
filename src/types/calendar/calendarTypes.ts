import { format } from 'date-fns';

export const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export type TodoType = '예신' | '예랑' | '함께';

export interface CalendarData {
  id: string;
  title: string;
  category: string;
  date: string;
  manager: TodoType;
}

export const colorMap: Record<TodoType, string> = {
  예신: 'bg-primary-300',
  예랑: 'bg-pink',
  함께: 'bg-blue',
};

type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const getEventsForDate = (
  data: CalendarData[],
  date: Date,
): CalendarData[] => {
  const dateStr = format(date, 'yyyy-MM-dd');
  return data.filter((list) => list.date === dateStr);
};
