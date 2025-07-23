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
import { TopBar } from '@/components/molecules/topBar';
import PlusDefaultGray from '@/assets/wed_icon/icon_20/plus_default_gray.svg';
import Alignment from '@/assets/wed_icon/icon_28/alignment_default.svg';
import clsx from 'clsx';
import { Button } from '@/components/atoms/button';

const chipTypes: Record<ManagerType, 'blue' | 'pink' | 'primary300'> = {
  예랑: 'blue',
  예신: 'pink',
  함께: 'primary300',
};

const PrimaryButton = () => {
  return (
    <button className='text-white'>
      <PlusDefaultGray />
    </button>
  );
};

const SecondaryButton = () => {
  return (
    <button className='text-white'>
      <Alignment />
    </button>
  );
};

const SubtaskSortableItem = ({
  task,
  onDelete,
  onToggle,
  isEditable = false,
}: {
  task: SubtasksMainProps['tasks'][number];
  onDelete: () => void;
  onToggle: () => void;
  isEditable?: boolean;
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
        dragHandleProps={
          isEditable ? { ...listeners, ...attributes } : undefined
        }
        isDragging={isDragging}
        isEditable={isEditable}
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
  const [originalOrder, setOriginalOrder] = useState(tasks.map((t) => t.id));
  const [isEditable, setIsEditable] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPendingExit, setIsPendingExit] = useState(false);

  const isChanged =
    subtasks.length !== originalOrder.length ||
    subtasks.some((task, idx) => task.id !== originalOrder[idx]);

  const toggleEditable = () => {
    if (isEditable && isChanged) {
      setIsPendingExit(true);
    } else {
      setIsEditable(!isEditable);
    }
  };

  const handleSaveOrder = () => {
    setOriginalOrder(subtasks.map((t) => t.id));
    setIsEditable(false);
  };

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

  const handleDragEnd = (event: MouseEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = subtasks.findIndex((item) => item.id === active.id);
      const newIndex = subtasks.findIndex((item) => item.id === over.id);
      setSubtasks((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const handleContinueClick = () => {
    setIsPendingExit(false);
    setIsEditable(true);
  }

  const handleDiscardClick = () => {
    setSubtasks(tasks);
    setOriginalOrder(tasks.map((t) => t.id));
    setIsEditable(false);
    setIsPendingExit(false);
  };

  return (
    <div className='relative flex w-full flex-col overflow-hidden'>
      <TopBar
        primaryButton={<PrimaryButton />}
        secondaryButton={<SecondaryButton />}
        onSecondaryButtonClick={toggleEditable}
      />
      <div className='flex w-full flex-col gap-4 p-5'>
        <SubtasksTitle
          cost={subtasks.reduce((acc, task) => acc + task.cost, 0)}
          title='스튜디오 촬영하기'
          isAllDone={
            subtasks.every((task) => task.isDone) && subtasks.length > 0
          }
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
                    isEditable={isEditable}
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

        {isPendingExit && (
          <Modal onClose={() => setIsPendingExit(false)}>
            <div className='flex w-[320px] flex-col items-center justify-center'>
              <span className='text-lg text-white'>변경을 취소하시겠어요?</span>

              <span className='pb-5 pt-3 text-center text-sm text-gray-700'>
                완료를 누르지 않으면 <br /> 변경사항이 저장되지 않아요.
              </span>

              <div className='flex w-full justify-center gap-4'>
                <button
                  className='h-[52px] w-[130px] rounded-md bg-gray-300 text-gray-800'
                  onClick={handleContinueClick}
                >
                  계속하기
                </button>
                <button
                  className='h-[52px] w-[130px] rounded-md bg-red-200 text-white'
                  onClick={handleDiscardClick}
                >
                  나가기
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
      {isEditable && (
        <div className='fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md p-4 shadow-md'>
          <Button disabled={!isChanged} onClick={handleSaveOrder}>
            완료
          </Button>
        </div>
      )}
    </div>
  );
};

export default SubtasksMain;
