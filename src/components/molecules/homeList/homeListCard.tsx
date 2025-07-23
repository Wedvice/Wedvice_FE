'use client';

import RightArrow from '@/assets/wed_icon/icon_16/rightarrow_default_gray 800.svg';
import { HomeListItem } from './HomeListItem';

type HomeListType = 'done' | 'todo';

const titleMap: Record<HomeListType, string> = {
  done: '완료한 리스트',
  todo: '남은 리스트',
};

interface HomeListItem {
  title: string;
  date: string;
}

interface HomeListCardProps {
  type: HomeListType;
  items: HomeListItem[];
  onClick?: () => void;
}

export const HomeListCard = ({
  type,
  items,
  onClick,
}: HomeListCardProps): JSX.Element => {
  const slicedItems = items.slice(0, 3);
  const title = titleMap[type];

  return (
    <div className='mt-4 rounded-lg bg-gray-100 p-5'>
      <div className='mb-4 flex items-center justify-between'>
        <span className='flex items-center gap-1 text-base font-medium text-white'>
          {title}
          <span className={'font-semibold text-primary-500'}>
            {items.length}개
          </span>
        </span>

        <button
          onClick={onClick}
          className='flex items-center text-sm font-medium text-gray-600'
        >
          전체보기
          <RightArrow />
        </button>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        {slicedItems.map(({ title, date }) => (
          <HomeListItem
            key={title + date}
            size='small'
            title={title}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};
