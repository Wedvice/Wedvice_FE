'use client';

import AlarmDefaultIcon from '@/assets/wed_icon/icon_28/alarm_default.svg';
import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { LeftAlignedTopBar } from '@/components/molecules/topBar';
import { useRouter } from 'next/navigation';

export const Calendar = () => {
  const router = useRouter();

  return (
    <div className='relative flex h-full w-full flex-col bg-black'>
      <LeftAlignedTopBar
        title='2024년 12월'
        button={<AlarmDefaultIcon />}
        onButtonClick={() => router.push('/notification')}
      />

      <div className='px-5 pt-4'></div>

      <BottomNavigation />
    </div>
  );
};

export default Calendar;
