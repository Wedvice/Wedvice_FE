import type { Meta, StoryObj } from '@storybook/react';
import { FoldableSelector } from './FoldableSelector';
import { useState } from 'react';

const meta: Meta<typeof FoldableSelector> = {
  title: 'Components/FoldableSelector',
  component: FoldableSelector,
};

export default meta;
type Story = StoryObj<typeof FoldableSelector>;

export const CalendarSelect: Story = {
  args: {
    selectedValue: null,
  },
  render: (args) => {
    const [date, setDate] = useState<string | null>(args.selectedValue);
    return (
      <div className='w-96'>
        <FoldableSelector selectedValue={date} setSelectedValue={setDate} />
      </div>
    );
  },
};

export const CategorySelector: Story = {
  args: {
    categoryArray: [
      '스튜디오 촬영하기',
      '스냅 촬영하기',
      '드레스/정장',
      '메이크업',
      '외모 관리',
      '결혼식 구성 준비',
    ],
    selectedValue: null,
  },
  render: (args) => {
    const [date, setDate] = useState<string | null>(args.selectedValue);
    return (
      <div className='w-96'>
        <FoldableSelector
          {...args}
          selectedValue={date}
          setSelectedValue={setDate}
        />
      </div>
    );
  },
};
