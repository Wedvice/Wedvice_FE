import { BottomSheet } from '@/components/atoms/bottomSheet';
import { useCalendarContext } from '@/contexts/calendar';
import { CalendarData, WEEKDAY } from '@/types/calendar/calendarTypes';
import { useRouter } from 'next/navigation';
import { CalendarTodo } from './CalendarTodo';

const BOTTOM_SHEET_MIN_HEIGHT = 403;
const BOTTOM_SHEET_MAX_HEIGHT = 627;

export const CalendarBottomSheet = ({ data }: { data: CalendarData[] }) => {
  const { selectedDate, isSlideOpen, setIsSlideOpen } = useCalendarContext();

  const handleOnDismiss = () => {
    setIsSlideOpen(false);
  };

  return (
    <BottomSheet
      open={isSlideOpen}
      onDismiss={handleOnDismiss}
      snapPoints={({}) => [BOTTOM_SHEET_MIN_HEIGHT, BOTTOM_SHEET_MAX_HEIGHT]}
      defaultSnap={() => BOTTOM_SHEET_MIN_HEIGHT}
      blocking={false}
      header={<BottomSheetHeader selectedDate={selectedDate} />}
      className='calendar pb-24'
    >
      <BottomSheetContent data={data} />
    </BottomSheet>
  );
};

const BottomSheetHeader = ({ selectedDate }: { selectedDate: Date }) => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between p-1 font-medium'>
      <div className='flex items-center gap-1'>
        <span className='text-lg text-white'>{selectedDate.getDate()}일</span>
        <span className='text-base text-gray-700'>
          {WEEKDAY[selectedDate.getDay()]}요일
        </span>
      </div>

      <button
        className='text-sm text-primary-500'
        onClick={() => router.push('/calendar/add')}
      >
        리스트추가
      </button>
    </div>
  );
};

const BottomSheetContent = ({ data }: { data: CalendarData[] }) => {
  if (data.length === 0) {
    return (
      <div className='flex h-full min-h-[300px] items-center justify-center px-4 text-center text-base font-medium text-gray-500'>
        <span>표시된 알림이 없어요</span>
      </div>
    );
  }

  return (
    <div className='grid gap-2 px-4 pb-4'>
      {data.map((todo) => (
        <CalendarTodo
          key={todo.id}
          title={todo.title}
          category={todo.category}
          type={todo.manager}
        />
      ))}
    </div>
  );
};
