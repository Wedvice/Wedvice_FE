'use client';

import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { HomeListCard } from '@/components/molecules/homeList';
import MemoLink from '@/components/molecules/memo/MemoLink';
import { Navigation } from '@/components/molecules/navigation';
import { ProgressCard, TabProgressCard } from '@/components/molecules/progress';

// mock data
const homeListItems = [
  { title: '촬영업체 선택1', date: '2025.07.08' },
  { title: '촬영업체 선택2', date: '2025.07.08' },
  { title: '촬영업체 선택3', date: '2025.07.08' },
  { title: '촬영업체 선택4', date: '2025.07.08' },
  { title: '촬영업체 선택5', date: '2025.07.08' },
];

export const Home = () => {
  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='mx-5 flex flex-1 flex-col overflow-y-auto'>
        <Navigation />
        <MemoLink />
        {/* TODO : percentage 받아오기 */}
        <ProgressCard percentage={54} />
        <TabProgressCard />
        <HomeListCard
          type='todo'
          items={homeListItems}
          onClick={() => console.log('남은 리스트 click')}
        />
        <HomeListCard
          type='done'
          items={homeListItems}
          onClick={() => console.log('완료한 리스트 click')}
        />
      </div>
      <BottomNavigation />
    </div>
  );
};
