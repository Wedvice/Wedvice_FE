'use client';

import { Dispatch, forwardRef, SetStateAction } from 'react';
import { TabInfo } from '../tab/Tab';

export interface ListTabProps<T> {
  tabInfo: TabInfo<T>;
  selectedTab: T;
  className?: string;
  onClick: Dispatch<SetStateAction<T>>;
}

const ListTabComponent = <T,>(
  { className, tabInfo, selectedTab, onClick, ...props }: ListTabProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={`${className} flex h-[70px] w-full items-center rounded-2xl bg-gray-100 p-1 text-center`}
      {...props}
    >
      {tabInfo.map(({ tabType, label, count }) => {
        const isSelected = selectedTab === tabType;

        return (
          <button
            key={String(tabType)}
            className={`flex h-full w-full select-none flex-col justify-center gap-1 rounded-2xl ${
              isSelected ? 'bg-gray-200 text-white' : 'text-gray-500'
            }`}
            onClick={() => onClick(tabType)}
          >
            {count !== undefined && count > 0 && (
              <span
                className={`text-xl font-semibold ${isSelected ? 'text-primary-400' : 'text-gray-500'}`}
              >
                {count}
              </span>
            )}
            <span className='text-xs font-medium'>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export const ListTab = forwardRef(ListTabComponent) as <T>(
  props: ListTabProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => JSX.Element;
