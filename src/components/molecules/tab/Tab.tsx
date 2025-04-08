'use client';

import { Dispatch, forwardRef, ReactNode, SetStateAction } from 'react';

// Tab 정보를 나타내는 타입
export type TabInfo<T> = {
  tabType: T; // Tab의 타입을 나타내는 제네릭 타입 T
  label: string; // Tab의 이름
  count?: number; // 컨텐츠 개수
}[];

// 각 tab에 대응되는 content
export type ContentInfo<TabType extends string> = Record<
  TabType,
  { render: () => ReactNode }
>;

export interface TabProps<T> {
  tabInfo: TabInfo<T>;
  selectedTab: T;
  className?: string;
  onClick: Dispatch<SetStateAction<T>>;
}

const TabComponent = <T,>(
  { className, tabInfo, selectedTab, onClick, ...props }: TabProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={`${className} flex h-[45px] w-full items-center text-center`}
      {...props}
    >
      {tabInfo.map(({ tabType, label, count }) => (
        <button
          key={String(tabType)}
          className={`h-[45px] w-full select-none border-b-2 text-base font-medium ${
            selectedTab === tabType
              ? 'border-white text-white'
              : 'border-gray-200 text-gray-600'
          }`}
          onClick={() => onClick(tabType)}
        >
          <span>{label}</span>
          {count !== undefined && count > 0 && (
            <span className='ml-1'>{count}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export const Tab = forwardRef(TabComponent) as <T>(
  props: TabProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => JSX.Element;
