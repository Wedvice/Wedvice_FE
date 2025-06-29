'use client';

import { useState } from 'react';
import { ManagerType, SubtasksMainProps } from '@/app/subtasks/page';
import SubtasksTitle from './SubtasksTItle';
import { Modal } from '@/components/atoms/modal';
import EmptyList from './components/EmptyList';
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
import { Swiper } from '@/components/atoms/swiper/Swiper';
import { Card } from '@/components/molecules/card';
import { Chip } from '@/components/atoms/chip';

const chipTypes: Record<ManagerType, 'blue' | 'pink' | 'primary300'> = {
  예랑: 'blue',
  예신: 'pink',
  함께: 'primary300',
};

const SubtaskSortableItem = ({
  task,
  onDelete,
  onToggle,
}: {
  task: SubtasksMainProps['tasks'][number];
  onDelete: () => void;
  onToggle: () => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const chipType = chipTypes[task.manager] || 'gray';

  return (
    <div ref={setNodeRef} style={style}>
      <Swiper
        onDelete={onDelete}
        dragHandleProps={{ ...listeners, ...attributes }}
        isDragging={isDragging}
        isEditable={true}
      >
        <Card checked={task.isDone}>
          <Card.Checkbox checked={task.isDone} onChange={onToggle} />
          <Card.TaskTitle>{task.title}</Card.TaskTitle>
          <Card.CostSpan>{task.cost.toLocaleString('ko-KR')} 원</Card.CostSpan>
          <Chip rounded='sm' size='sm'>
            {task.date}
          </Chip>
          <Chip type={chipType} rounded='sm' size='sm'>
            {task.manager}
          </Chip>
        </Card>
      </Swiper>
    </div>
  );
};

const SubtasksMain = ({ tasks }: SubtasksMainProps) => {
  const [subtasks, setSubtasks] = useState(tasks);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleDelete = () => {
    if (selectedIndex !== null) {
      const updated = [...subtasks];
      updated.splice(selectedIndex, 1);
      setSubtasks(updated);
    }
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const handleDeleteClick = (index: number) => {
    setIsOpen(true);
    setSelectedIndex(index);
  };

  const handleChange = (index: number) => {
    const updated = [...subtasks];
    updated[index].isDone = !updated[index].isDone;
    setSubtasks(updated);
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = subtasks.findIndex((item) => item.id === active.id);
      const newIndex = subtasks.findIndex((item) => item.id === over.id);
      setSubtasks((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <div className='flex w-full flex-col gap-4'>
      <SubtasksTitle
        cost={subtasks.reduce((acc, task) => acc + task.cost, 0)}
        title='스튜디오 촬영하기'
        isAllDone={subtasks.every((task) => task.isDone) && subtasks.length > 0}
      />

      {subtasks.length > 0 ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={subtasks.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className='flex flex-col gap-2'>
              {subtasks.map((task, index) => (
                <SubtaskSortableItem
                  key={task.id}
                  task={task}
                  onDelete={() => handleDeleteClick(index)}
                  onToggle={() => handleChange(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <EmptyList />
      )}

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
                onClick={handleDelete}
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

export default SubtasksMain;
