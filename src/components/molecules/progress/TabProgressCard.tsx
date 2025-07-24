'use client';

import { mockData } from '@/api/homeListMockData';
import { TabType } from '../homeList/HomeListTab';
import { DonutProgress } from './DonutProgress';
interface TabProgressCardProps {
  selectedTab: TabType;
}

export const TabProgressCard = ({ selectedTab }: TabProgressCardProps) => {
  const tabData = mockData[selectedTab];
  const total = (tabData.todo?.length ?? 0) + (tabData.done?.length ?? 0);
  const remaining = tabData.todo?.length ?? 0;
  const percentage =
    total > 0 ? Math.round(((total - remaining) / total) * 100) : 0;

  const labelMap: Record<TabType, string> = {
    together: '함께',
    bride: '예신',
    groom: '예랑',
  };

  return (
    <div className='mt-4 rounded-lg bg-gray-100 p-5'>
      <div className='flex items-start justify-between'>
        {/* 텍스트 */}
        <div>
          <div className='mb-1 text-xl font-semibold text-primary-500'>
            {labelMap[selectedTab]}
          </div>
          <div className='text-lg font-medium text-white'>결혼 준비 진행률</div>
          <div className='mt-3 text-sm font-medium text-gray-600'>
            {total}개 중 {remaining}개 남았어요!
          </div>
        </div>

        {/* 도넛 차트 */}
        <div className='ml-auto mt-[10px]'>
          <DonutProgress percentage={percentage} />
        </div>
      </div>
    </div>
  );
};
