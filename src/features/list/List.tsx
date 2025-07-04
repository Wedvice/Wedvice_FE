'use client';

import { useState } from 'react';
import { ContentInfo, TabInfo } from '@/components/molecules/tab/Tab';
import { TopList } from '@/components/molecules/topList';
import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { LeftAlignedTopBar } from '@/components/molecules/topBar';
import { ListTab } from '@/components/molecules/listTab';
import Delete from '@/assets/wed_icon/icon_28/delete_default.svg';
import { useRouter } from 'next/navigation';

interface TaskCategory {
  title: string;
  id: string;
  currentCount: number;
  totalCount: number;
}

export const categories: TaskCategory[] = [
  {
    title: '스튜디오 촬영하기',
    id: 'STUDIO',
    currentCount: 5,
    totalCount: 8,
  },
  {
    title: '스냅 촬영하기',
    id: 'SNAP',
    currentCount: 2,
    totalCount: 5,
  },
  {
    title: '드레스/정장',
    id: 'DRESS',
    currentCount: 3,
    totalCount: 7,
  },
  {
    title: '메이크업',
    id: 'MAKEUP',
    currentCount: 4,
    totalCount: 6,
  },
  {
    title: '외모 관리',
    id: 'BEAUTY',
    currentCount: 1,
    totalCount: 4,
  },
  {
    title: '결혼식 구성 준비',
    id: 'WEDDING_PLAN',
    currentCount: 6,
    totalCount: 10,
  },
  {
    title: '청첩장',
    id: 'INVITATION',
    currentCount: 0,
    totalCount: 5,
  },
  {
    title: '상견례',
    id: 'MEETING',
    currentCount: 2,
    totalCount: 3,
  },
  {
    title: '신혼 여행',
    id: 'HONEYMOON',
    currentCount: 5,
    totalCount: 5,
  },
  {
    title: '신혼집',
    id: 'HOUSE',
    currentCount: 1,
    totalCount: 6,
  },
];

const inProgressList = categories.filter((c) => c.currentCount < c.totalCount);

const completedList = categories.filter((c) => c.currentCount === c.totalCount);

type ListTabType = 'all' | 'inProgress' | 'completed';

const tabInfo: TabInfo<ListTabType> = [
  { tabType: 'all', label: '전체', count: categories.length },
  { tabType: 'inProgress', label: '진행 중', count: inProgressList.length },
  { tabType: 'completed', label: '진행 완료', count: completedList.length },
];

const contentInfo: ContentInfo<ListTabType> = {
  all: {
    render: () => <CategoryGrid categories={categories} />,
  },
  inProgress: {
    render: () => <CategoryGrid categories={inProgressList} />,
  },
  completed: {
    render: () => <CategoryGrid categories={completedList} />,
  },
};

const CategoryGrid = ({ categories }: { categories: TaskCategory[] }) => {
  const router = useRouter();
  return (
    <div className='grid grid-cols-2 items-center justify-items-center gap-2'>
      {categories.map((category) => (
        <TopList
          key={category.id}
          label={category.title}
          currentCount={category.currentCount}
          totalCount={category.totalCount}
          onClick={() => router.push('/subtasks')}
        />
      ))}
    </div>
  );
};

export const List = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<ListTabType>('all');

  return (
    <div className='relative flex h-full w-full flex-col bg-gray-50'>
      <LeftAlignedTopBar
        title='리스트'
        button={<Delete />}
        onButtonClick={() => router.push('/list/delete')}
      />

      <div className='grid gap-5 overflow-y-auto px-5 pt-4 scrollbar-hide'>
        <ListTab
          tabInfo={tabInfo}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
        />
        {contentInfo[selectedTab].render()}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default List;
