import { TodoType, colorMap } from '@/types/calendar/calendarTypes';

interface CalendarTodoProps {
  title: string;
  category: string;
  type: TodoType;
}

export const CalendarTodo = ({ title, category, type }: CalendarTodoProps) => {
  const barColor = colorMap[type];
  return (
    <div className='relative flex h-[77px] w-full items-center gap-3 rounded-lg bg-gray-100 p-4'>
      <span
        className={`absolute left-0 h-[45px] w-1 rounded-[4.5px] ${barColor}`}
        aria-hidden='true'
      />
      <div className='flex h-full flex-1 flex-col justify-between font-medium'>
        <h4 className='text-base text-gray-900'>{title}</h4>
        <p className='text-xs text-gray-700'>{category}</p>
      </div>
    </div>
  );
};
