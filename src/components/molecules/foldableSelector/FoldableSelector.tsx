import { useState } from 'react';
import { CategorySelect } from '@/components/molecules/categorySelect';
import { CalendarSelect } from '@/components/molecules/calendarSelect';

interface FoldableSelectorProps {
  categoryArray?: string[];
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void;
}

export const FoldableSelector = ({
  categoryArray,
  selectedValue,
  setSelectedValue,
}: FoldableSelectorProps) => {
  const [isFolded, setIsFolded] = useState<boolean>(false);

  return (
    <div className='w-full rounded-lg bg-gray-100 p-5'>
      <div
        className='flex cursor-pointer justify-between text-base font-medium'
        onClick={() => setIsFolded(true)}
      >
        <span className='font-medium text-white'>
          {categoryArray ? '카테고리' : '날짜'}
        </span>
        <span className={`${selectedValue ? 'text-white' : 'text-gray-500'}`}>
          {selectedValue ?? '선택 안함'}
        </span>
      </div>

      {isFolded &&
        (categoryArray ? (
          <CategorySelect
            categoryArray={categoryArray}
            selectedCategory={selectedValue}
            setSelectedCategory={setSelectedValue}
            setIsFolded={setIsFolded}
          />
        ) : (
          <CalendarSelect
            selectedDate={selectedValue}
            setSelectedDate={setSelectedValue}
            setIsFolded={setIsFolded}
          />
        ))}
    </div>
  );
};
