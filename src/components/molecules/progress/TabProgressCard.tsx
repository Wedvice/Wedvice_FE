'use client';

import { useEffect, useState } from 'react';
import { DonutProgress } from './DonutProgress';

const tabs = ['함께', '예신', '예랑'] as const;
type TabType = (typeof tabs)[number];
type ProgressDataMap = Record<TabType, ProgressInfo>;

type ProgressInfo = {
  label: string;
  total: number;
  remaining: number;
};

// mock data
const fetchProgressData = async (): Promise<ProgressDataMap> => {
  await new Promise((r) => setTimeout(r, 300));

  return {
    함께: { label: '함께', total: 20, remaining: 12 },
    예신: { label: '예신', total: 5, remaining: 1 },
    예랑: { label: '예랑', total: 4, remaining: 4 },
  };
};

export const TabProgressCard = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('함께');
  const [progressData, setProgressData] = useState<ProgressDataMap>();

  useEffect(() => {
    // TODO : 서버에서 받아와야함
    fetchProgressData().then(setProgressData);
  }, []);

  if (!progressData) {
    return <div className='text-center text-white'>loading...</div>;
  }

  const { label, total, remaining } = progressData[selectedTab];
  const percentage =
    total > 0 ? Math.round(((total - remaining) / total) * 100) : 0;

  return (
    <div className='mt-8 w-full'>
      {/* 탭 메뉴 */}
      <div className='flex h-[53px] items-center rounded-lg bg-gray-100'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`h-[45px] flex-1 rounded-lg text-base font-medium ${
              tab === selectedTab ? 'bg-gray-200 text-white' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 콘텐츠 카드 */}
      <div className='mt-4 rounded-lg bg-gray-100 p-5'>
        <div className='flex items-start justify-between'>
          {/* 텍스트 */}
          <div>
            <div className='mb-1 text-xl font-semibold text-primary-500'>
              {label}
            </div>
            <div className='text-lg font-medium text-white'>
              결혼 준비 진행률
            </div>
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
    </div>
  );
};
