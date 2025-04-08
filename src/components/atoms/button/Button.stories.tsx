import LeftArrow from '@/assets/wed_icon/icon_16/leftarrow_default.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
      options: ['md', 'lg'],
    },
    width: {
      control: 'inline-radio',
      options: ['full', 'register'],
    },
    height: {
      control: 'inline-radio',
      options: ['xl2', 'xl', 'lg', 'md', 'sm'],
    },
    size: {
      control: 'inline-radio',
      options: ['lg', 'md', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

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
      <div className='w-[100px]'>
        <Story />
      </div>
    ),
  ],
};

export const GrayFill: Story = {
  args: {
    variant: 'gray_fill',
    children: 'text',
  },
  decorators: [
    (Story) => (
      <div className='w-[100px]'>
        <Story />
      </div>
    ),
  ],
};
