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

export const Basic: Story = {
  args: {
    children: 'Button',
  },
};

export const Main: Story = {
  args: {
    ...Basic.args,
    variant: 'main',
  },
};

export const shortButton: Story = {
  args: {
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};
