'use client';

import AlarmDefaultIcon from '@/assets/wed_icon/icon_28/alarm_default.svg';
import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { LeftAlignedTopBar } from '@/components/molecules/topBar';
import { useCalendarContext } from '@/contexts/calendar';
import { CalendarData, getEventsForDate } from '@/types/calendar/calendarTypes';
import { useRouter } from 'next/navigation';
import { CalendarBottomSheet } from './components/CalendarBottomSheet';
import { CalendarView } from './components/CalendarView';

const dayData: CalendarData[] = [
  {
    id: '1',
    title: '스탭 컨설',
    category: '드레스/정장',
    date: '2025-07-01',
    manager: '예랑',
  },
  {
    id: '14',
    title: '결혼 반지',
    category: '드레스/정장',
    date: '2025-07-01',
    manager: '예신',
  },
  {
    id: '15',
    title: '휴즈 하늘',
    category: '장소/예식장',
    date: '2025-07-01',
    manager: '함께',
  },
  {
    id: '2',
    title: '스탭 컨설',
    category: '장소/예식장',
    date: '2025-07-02',
    manager: '함께',
  },
  {
    id: '3',
    title: '학업 후기',
    category: '드레스/정장',
    date: '2025-07-05',
    manager: '예신',
  },
  {
    id: '4',
    title: '스탭 컨설',
    category: '드레스/정장',
    date: '2025-07-05',
    manager: '예랑',
  },
  {
    id: '5',
    title: '혜이 브랜드 가보기',
    category: '드레스/정장',
    date: '2025-07-06',
    manager: '예랑',
  },
  {
    id: '6',
    title: '스탭 컨설',
    category: '드레스/정장',
    date: '2025-07-06',
    manager: '함께',
  },
  {
    id: '7',
    title: '스탭 컨설',
    category: '드레스/정장',
    date: '2025-07-06',
    manager: '예신',
  },
  {
    id: '8',
    title: '드레스샵',
    category: '장소/예식장',
    date: '2025-07-09',
    manager: '예랑',
  },
  {
    id: '9',
    title: '분식 부제',
    category: '장소/예식장',
    date: '2025-07-12',
    manager: '함께',
  },
  {
    id: '10',
    title: '드레스 강',
    category: '드레스/정장',
    date: '2025-07-21',
    manager: '예신',
  },
  {
    id: '11',
    title: '정장 영재',
    category: '장소/예식장',
    date: '2025-07-21',
    manager: '예랑',
  },
  {
    id: '12',
    title: '정장 가능',
    category: '장소/예식장',
    date: '2025-07-31',
    manager: '함께',
  },
  {
    id: '13',
    title: '결혼 반지',
    category: '드레스/정장',
    date: '2025-07-31',
    manager: '예신',
  },
];

export const Calendar = () => {
  const router = useRouter();
  const { selectedDate } = useCalendarContext();
  const currentEvents = getEventsForDate(dayData, selectedDate);

  return (
    <div className='relative flex h-full w-full flex-col'>
      <LeftAlignedTopBar
        title={`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월`}
        button={<AlarmDefaultIcon />}
        onButtonClick={() => router.push('/notification')}
      />

      <div className='h-full flex-1 overflow-y-scroll px-5 pt-4 scrollbar-hide'>
        <CalendarView data={dayData} />
        <CalendarBottomSheet data={currentEvents} />
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Calendar;
