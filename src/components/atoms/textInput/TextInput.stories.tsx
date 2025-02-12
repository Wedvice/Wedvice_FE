import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    value: 'test',
    maxLength: 18,
    placeholder: '입력하세요...',
  },
  render: (args) => {
    const [text, setText] = useState(args.value);
    return <TextInput {...args} value={text} onChange={setText} />;
  },
};
