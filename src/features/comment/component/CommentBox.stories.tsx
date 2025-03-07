import { useState } from 'react';
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
  args: {
    text: '',
  },
  render: (args) => {
    const [text, setText] = useState(args.text);
    return <CommentBox {...args} text={text} setText={setText} />;
  },
};
