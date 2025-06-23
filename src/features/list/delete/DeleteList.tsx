'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/button';
import { Modal } from '@/components/atoms/modal';
import { TopBar } from '@/components/molecules/topBar';
import { TopList } from '@/components/molecules/topList';
import { categories } from '../List';

export const DeleteList = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmDelete = () => {
    console.log('삭제할 카테고리들:', selectCategory);
    router.push('/list');
  };

  const handleClick = (id: string) => {
    setSelectCategory((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const renderTaskCategories = () => {
    return categories.map((category) => {
      const isDelete = selectCategory.find((item) => item === category.id);

      return (
        <TopList
          key={category.id}
          label={category.title}
          currentCount={category.currentCount}
          totalCount={category.totalCount}
          disabled={!isDelete}
          onClick={() => handleClick(category.id)}
        />
      );
    });
  };

  return (
    <div className='relative h-full w-full bg-gray-50'>
      <div className='absolute top-0 z-10 w-full bg-gray-50'>
        <TopBar className='w-full' />
      </div>

      <div className='flex h-full w-full flex-col overflow-y-auto pb-28 pt-[53px] scrollbar-hide'>
        <div className='mx-5 mt-4 flex flex-col'>
          <div className='grid gap-2'>
            <span className='text-2xl font-semibold text-white'>
              삭제할 리스트를 선택해주세요
            </span>
            <span className='text-sm font-medium text-gray-600'>
              리스트 안의 모든 항목도 함께 삭제되고, 복구할 수 없어요.
            </span>
          </div>

          <div className='mt-7 flex-1'>
            <div className='mx-auto grid grid-cols-2 items-center justify-items-center gap-2'>
              {renderTaskCategories()}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 flex h-[97px] w-full items-center justify-center bg-gray-50 px-5'>
        <Button
          onClick={() => setIsOpen(true)}
          size='lg'
          variant={selectCategory.length > 0 ? 'primary_fill' : 'gray_fill'}
          width='register'
          className={`${selectCategory.length === 0 && 'pointer-events-none'} `}
        >
          삭제하기
        </Button>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className='flex w-[320px] flex-col items-center justify-center'>
            <span className='text-lg text-white'>리스트를 삭제할까요?</span>

            <span className='pb-5 pt-3 text-sm text-gray-700'>
              리스트의 모든 항목이 삭제됩니다.
            </span>

            <div className='flex w-full justify-center gap-4'>
              <button
                className='h-[52px] w-[130px] rounded-md bg-gray-300 text-gray-800'
                onClick={() => setIsOpen(false)}
              >
                취소
              </button>
              <button
                className='h-[52px] w-[130px] rounded-md bg-red-200 text-white'
                onClick={handleConfirmDelete}
              >
                삭제
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DeleteList;
