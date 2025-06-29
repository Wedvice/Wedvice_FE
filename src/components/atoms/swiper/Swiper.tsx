'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import DeleteIcon from '@/assets/wed_icon/icon_28/delete_active.svg';
import GripIcon from '@/assets/wed_icon/icon_28/Handle_default.svg';
import clsx from 'clsx';

interface SwiperProps {
  children: ReactNode;
  onDelete: () => void;
  isDragging?: boolean;
  dragHandleProps?: any;
  isEditable?: boolean;
}

export const Swiper = ({
  children,
  onDelete,
  isDragging,
  dragHandleProps,
  isEditable = false,
}: SwiperProps) => {
  const x = useMotionValue(0);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const offsetX = info.offset.x;

    if (!isEditable && offsetX < -50) {
      // 삭제만 허용
      setIsDeleteOpen(true);
      setIsSortOpen(false);
    } else if (isEditable && offsetX > 50) {
      // 정렬만 허용
      setIsSortOpen(true);
      setIsDeleteOpen(false);
    } else {
      setIsDeleteOpen(false);
      setIsSortOpen(false);
    }
  };

  useEffect(() => {
    if (isEditable) {
      setIsSortOpen(true);
      setIsDeleteOpen(false);
    } else {
      setIsSortOpen(false);
      setIsDeleteOpen(false);
    }
  }, [isEditable]);

  return (
    <div className='relative flex w-full items-center justify-center'>
      {!isEditable && isDeleteOpen && (
        <div className='absolute right-4 z-0 flex h-11 w-11 items-center justify-center rounded-full bg-red-100'>
          <button
            onClick={onDelete}
            className='font-bold text-white transition-transform hover:scale-105'
          >
            <DeleteIcon />
          </button>
        </div>
      )}

      {isEditable && isSortOpen && (
        <div
          className='absolute left-4 z-0 flex h-11 w-11 items-center justify-center'
          {...dragHandleProps}
        >
          <GripIcon />
        </div>
      )}

      <motion.div
        className={clsx('relative z-10 w-full', isDragging && 'opacity-50')}
        drag='x'
        dragConstraints={{
          left: isEditable ? 0 : -80,
          right: isEditable ? 80 : 0,
        }}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={{
          x: isDeleteOpen ? -80 : isSortOpen ? 80 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
