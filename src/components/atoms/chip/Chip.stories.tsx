import type { Args, Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';
import React from 'react';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: [
          'wedding',
          'alarm',
          'primary300',
          'pink',
          'teal',
          'blue',
          'yellow',
          'gray',
          'red',
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const WeddingChip: Story = {
  args: {
    children: (
      <div className="flex gap-2">
        <span className="text-primary-500">결혼까지 </span>
        <span>D-173</span>
      </div>
    ),
    type: 'wedding',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div className="flex w-[150px]">
        <Story />
      </div>
    ),
  ],
};

export const AlarmChip: Story = {
  args: {
    children: 'text~!',
    type: 'notification',
    size: 'lg',
    rounded: 'notification',
  },
  decorators: [
    (Story) => (
      <div className="max-w-[50%]">
        <Story />
      </div>
    ),
  ],
};

export const PrimaryChip: Story = {
  args: {
    children: 'text',
    type: 'primary300',
    rounded: 'sm',
    size: 'sm',
  },
};

export const PinkChip: Story = {
  args: {
    children: 'text',
    type: 'pink',
    rounded: 'sm',
    size: 'sm',
  },
};

export const TealChip: Story = {
  args: {
    children: 'text',
    type: 'teal',
    rounded: 'sm',
    size: 'sm',
  },
};

export const BlueChip: Story = {
  args: {
    children: 'text',
    type: 'blue',
    rounded: 'sm',
    size: 'sm',
  },
};

export const YellowChip: Story = {
  args: {
    children: 'text',
    type: 'yellow',
    rounded: 'sm',
    size: 'sm',
  },
};

export const GrayChip: Story = {
  args: {
    children: 'text',
    type: 'gray',
    rounded: 'sm',
    size: 'sm',
  },
};

export const RedChip: Story = {
  args: {
    children: 'text',
    type: 'red',
    rounded: 'sm',
    size: 'sm',
  },
};
