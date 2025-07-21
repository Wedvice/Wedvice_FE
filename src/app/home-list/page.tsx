'use client';

import { ListItem, mockData } from '@/api/homeListMockData';
import { HomeListItem } from '@/components/molecules/homeList';
import { HomeListType } from '@/components/molecules/homeList/homeListCard';
import { TabType } from '@/components/molecules/homeList/HomeListTab';
import { TopBar } from '@/components/molecules/topBar';
import { useSearchParams } from 'next/navigation';

const HomeListPage = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get('type') ?? 'todo') as HomeListType;
  const role = (searchParams.get('role') ?? 'together') as TabType;

  const items: ListItem[] = mockData[role]?.[type] ?? [];

  const labelMap: Record<TabType, string> = {
    together: '함께',
    bride: '예신',
    groom: '예랑',
  };

  const title =
    type === 'done'
      ? `${labelMap[role]} 완료한 리스트`
      : `${labelMap[role]} 남은 리스트`;

  return (
    <>
      <TopBar className='w-full' />
      <h2 className='my-4 text-center text-lg font-semibold'>{title}</h2>
      <div className='flex flex-col items-center space-y-2'>
        {items.map(({ title, date }) => (
          <HomeListItem
            key={title + date}
            size='small'
            title={title}
            date={date}
          />
        ))}
      </div>
    </>
  );
};

export default HomeListPage;
