'use client';

import { useState } from 'react';
import { Swiper } from './Swiper';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Task = {
  id: string;
  title: string;
};

interface SortableItemProps {
  id: string;
  title: string;
  onDelete: () => void;
}

const SortableItem = ({ id, title, onDelete }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Swiper
        onDelete={onDelete}
        dragHandleProps={{ ...listeners, ...attributes }}
        isDragging={isDragging}
      >
        <div className='rounded-md border bg-white p-4 shadow-sm'>{title}</div>
      </Swiper>
    </div>
  );
};

export const SortableList = () => {
  const [items, setItems] = useState<Task[]>([
    { id: '1', title: '촬영 스케줄 조율' },
    { id: '2', title: '드레스 피팅 예약' },
    { id: '3', title: '스튜디오 장소 정하기' },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className='flex flex-col gap-2'>
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              title={item.title}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
