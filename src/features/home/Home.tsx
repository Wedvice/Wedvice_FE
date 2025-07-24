'use client';

import { ListItem, mockData } from '@/api/homeListMockData';
import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { HomeListCard } from '@/components/molecules/homeList';
import {
  TabSelector,
  TabType,
} from '@/components/molecules/homeList/HomeListTab';
import MemoLink from '@/components/molecules/memo/MemoLink';
import { Navigation } from '@/components/molecules/navigation';
import { ProgressCard, TabProgressCard } from '@/components/molecules/progress';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Home = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<TabType>('together');
  const [todoItems, setTodoItems] = useState<ListItem[]>([]);
  const [doneItems, setDoneItems] = useState<ListItem[]>([]);

  useEffect(() => {
    const data = mockData[selectedTab];
    setTodoItems(data.todo ?? []);
    setDoneItems(data.done ?? []);
  }, [selectedTab]);

  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='mx-5 flex flex-1 flex-col overflow-y-auto'>
        <Navigation />
        <MemoLink />
        {/* TODO : percentage 받아오기 */}
        <ProgressCard percentage={54} />
        <TabSelector selectedTab={selectedTab} onSelectTab={setSelectedTab} />
        <TabProgressCard selectedTab={selectedTab} />
        <HomeListCard
          type='todo'
          items={todoItems}
          onClick={() =>
            router.push(`/home-list?type=todo&role=${selectedTab}`)
          }
        />
        <HomeListCard
          type='done'
          items={doneItems}
          onClick={() =>
            router.push(`/home-list?type=done&role=${selectedTab}`)
          }
        />
      </div>
      <BottomNavigation />
    </div>
  );
};
