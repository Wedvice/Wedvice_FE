'use client';

import { ListItem, mockData } from '@/api/homeListMockData';
import { HomeListItem } from '@/components/molecules/homeList';
import { HomeListType } from '@/components/molecules/homeList/HomeListCard';
import {
  HomeListDropdown,
  HomeListDropdownType,
} from '@/components/molecules/homeList/HomeListDropdown';
import { TabType } from '@/components/molecules/homeList/HomeListTab';
import { TopBar } from '@/components/molecules/topBar';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

const labelMap: Record<TabType, string> = {
  together: '함께',
  bride: '예신',
  groom: '예랑',
};

const HomeListPage = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get('type') ?? 'todo') as HomeListType;
  const role = (searchParams.get('role') ?? 'together') as TabType;

  const title =
    type === 'done'
      ? `${labelMap[role]} 완료한 리스트`
      : `${labelMap[role]} 할 리스트`;

  const [sortedOption, setSortedOption] =
    useState<HomeListDropdownType>('날짜순');
  const items: ListItem[] = mockData[role]?.[type] ?? [];

  const sortedItems = useMemo(() => {
    if (sortedOption === '날짜순') {
      return [...items].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    }
    // TODO: 카테고리순 정렬
    return items;
  }, [items, sortedOption]);

  return (
    <>
      <TopBar className='w-full' />
      <div className='mx-5'>
        <h2 className='text-2xl font-semibold text-white'>{title}</h2>
        <div className='mt-7 flex items-center justify-between'>
          <span className='text-base font-semibold text-primary-500'>{`총 ${items.length}개`}</span>
          <HomeListDropdown
            selectedOption={sortedOption}
            onSelectAction={setSortedOption}
          />
        </div>
        <div className='mt-4 flex flex-col space-y-3'>
          {sortedItems.map(({ title, date }) => (
            <HomeListItem
              key={title + date}
              size='medium'
              title={title}
              date={date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeListPage;
