import { Button } from '@/components/atoms/button';

interface CategorySelectProps {
  categoryArray: string[];
  selectedCategory: string | null;
  setSelectedCategory: (selected: string | null) => void;
  setIsFolded: (isFolded: boolean) => void;
}

export const CategorySelect = ({
  categoryArray,
  selectedCategory,
  setSelectedCategory,
  setIsFolded,
}: CategorySelectProps) => {
  const handleSelect = (category: string) => {
    const isSameDate = category === selectedCategory;
    setSelectedCategory(isSameDate ? null : category);
    setIsFolded(false);
  };

  return (
    <div className='mt-5 grid grid-cols-2 gap-3'>
      {categoryArray.map((category) => {
        return (
          <Button
            key={category}
            className='text-sm'
            height={'md'}
            variant={
              selectedCategory === category ? 'primary_fill' : 'gray_fill'
            }
            onClick={() => handleSelect(category)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};
