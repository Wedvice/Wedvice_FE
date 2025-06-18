import type { Meta, StoryObj } from '@storybook/react';
import { TopList } from './TopList';

const meta: Meta<typeof TopList> = {
  title: 'components/TopList',
  component: TopList,
};

export default meta;
type Story = StoryObj<typeof TopList>;

export const inprogress: Story = {
  args: {
    label: 'text',
    currentCount: 0,
    totalCount: 8,
  },
};

export const complete: Story = {
  args: {
    label: 'text',
    currentCount: 8,
    totalCount: 8,
  },
};
