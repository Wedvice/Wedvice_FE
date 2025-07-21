'use client';

export type TabType = 'together' | 'bride' | 'groom';

interface TabSelectorProps {
  selectedTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

const tabLabels: Record<TabType, string> = {
  together: '함께',
  bride: '예신',
  groom: '예랑',
};

const tabs: TabType[] = ['together', 'bride', 'groom'];

export const TabSelector = ({ selectedTab, onSelectTab }: TabSelectorProps) => {
  return (
    <div className='mt-8 flex items-center rounded-lg bg-gray-100'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelectTab(tab)}
          className={`h-[53px] flex-1 rounded-lg text-base font-medium ${
            tab === selectedTab ? 'bg-gray-200 text-white' : 'text-gray-500'
          }`}
        >
          {tabLabels[tab]}
        </button>
      ))}
    </div>
  );
};
