'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ListTab, ListTabProps } from './ListTab';
import { TabInfo } from '../tab/Tab';

// ListTab 타입 정의
type ListTabType = 'all' | 'inProgress' | 'completed';

const defaultListTabInfo: TabInfo<ListTabType> = [
  { tabType: 'all', label: '전체', count: 7 },
  { tabType: 'inProgress', label: '진행 중', count: 5 },
  { tabType: 'completed', label: '진행 완료' },
];

const meta: Meta<typeof ListTab> = {
  title: 'components/ListTab',
  component: ListTab,
  argTypes: {
    selectedTab: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<ListTabProps<ListTabType>>;

// 기본 ListTab UI
export const Default: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<ListTabType>('all');

    return (
      <ListTab {...args} selectedTab={selectedTab} onClick={setSelectedTab} />
    );
  },
  args: {
    tabInfo: defaultListTabInfo,
  },
};

// count가 있는 ListTab
export const WithCounts: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<ListTabType>('all');

    return (
      <ListTab
        {...args}
        tabInfo={[
          { tabType: 'all', label: '전체', count: 7 },
          { tabType: 'inProgress', label: '진행 중', count: 5 },
          { tabType: 'completed', label: '진행 완료', count: 2 },
        ]}
        selectedTab={selectedTab}
        onClick={setSelectedTab}
      />
    );
  },
};
