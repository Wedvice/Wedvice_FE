import type { Meta, StoryObj } from '@storybook/react';
import { CommentBox } from './CommentBox';

const meta: Meta<typeof CommentBox> = {
  title: 'Components/CommentBox',
  component: CommentBox,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CommentBox>;

export const Default: Story = {
  render: () => {
    return <CommentBox />;
  },
};
