import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import LeftArrow from '../../../assets/left_arrow.svg';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['main', 'none'],
    },
    rounded: {
      control: 'inline-radio',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    width: {
      control: 'inline-radio',
      options: ['full', 'register'],
    },
    height: {
      control: 'inline-radio',
      options: ['xl2', 'xl', 'lg', 'md', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  args: {
    children: 'text',
  },
};

export const PrimaryFillWithArrow: Story = {
  args: {
    variant: 'primary_fill',
    children: (
      <>
        <LeftArrow fill={'white'} />
        text
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};

export const PrimaryOutline: Story = {
  args: {
    ...BasicButton.args,
    variant: 'primary_outline',
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};

export const GrayFill: Story = {
  args: {
    ...BasicButton.args,
    variant: 'gray_fill',
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};

export const GrayOutline: Story = {
  args: {
    ...BasicButton.args,
    variant: 'gray_outline',
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};
