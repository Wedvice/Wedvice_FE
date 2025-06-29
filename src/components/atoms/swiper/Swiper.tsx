'use client';

import { ReactNode, useState } from 'react';
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

    if (offsetX < -50) {
      setIsDeleteOpen(true);
      setIsSortOpen(false);
    } else if (offsetX > 50 && isEditable) {
      setIsSortOpen(true);
      setIsDeleteOpen(false);
    } else {
      setIsDeleteOpen(false);
      setIsSortOpen(false);
    }
  };

  return (
    <div className='relative flex w-full items-center justify-center'>
      {/* 삭제 아이콘: 항상 보이도록 */}
      {isDeleteOpen && (
        <div className='absolute right-4 z-0 flex h-11 w-11 items-center justify-center rounded-full bg-red-100'>
          <button
            onClick={onDelete}
            className='font-bold text-white transition-transform hover:scale-105'
          >
            <DeleteIcon />
          </button>
        </div>
      )}

      {/* 정렬 아이콘: isEditable일 때만 보이게 */}
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
        dragConstraints={{ left: -80, right: 80 }}
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
