'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tab, TabInfo, TabProps } from './Tab';

// Tab 타입 정의
type TabType = 'comment' | 'photo' | 'link';

const defaultTabInfo: TabInfo<TabType> = [
  { tabType: 'comment', label: '댓글' },
  { tabType: 'photo', label: '사진', count: 0 },
  { tabType: 'link', label: '링크', count: 0 },
];

const meta: Meta<typeof Tab> = {
  title: 'components/Tab',
  component: Tab,
  argTypes: {
    selectedTab: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<TabProps<TabType>>;

// 기본 Tab UI
export const Default: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<TabType>('comment');

    return <Tab {...args} selectedTab={selectedTab} onClick={setSelectedTab} />;
  },
  args: {
    tabInfo: defaultTabInfo,
  },
};

// count가 있는 Tab
export const WithCounts: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<TabType>('comment');

    return (
      <Tab
        {...args}
        tabInfo={[
          { tabType: 'comment', label: '댓글' },
          { tabType: 'photo', label: '사진', count: 9 },
          { tabType: 'link', label: '링크', count: 5 },
        ]}
        selectedTab={selectedTab}
        onClick={setSelectedTab}
      />
    );
  },
};
