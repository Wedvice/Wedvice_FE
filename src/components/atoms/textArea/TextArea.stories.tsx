import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    value: 'test',
    maxLength: 100,
    placeholder: '입력하세요...',
  },
  render: (args) => {
    const [text, setText] = useState(args.value);
    return <TextArea {...args} value={text} onChange={setText} />;
  },
};
