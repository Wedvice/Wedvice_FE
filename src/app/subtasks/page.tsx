'use client';

import SubtasksMain from '@/features/subtasks/SubtasksMain';

export type ManagerType = '예신' | '예랑' | '함께';
export interface SubtasksMainProps {
  tasks: {
    id: string;
    isDone: boolean;
    title: string;
    cost: number;
    date: string;
    manager: ManagerType;
    onDelete?: () => void;
  }[];
}

// SSR로 가져올 Mock 데이터
const initialData: SubtasksMainProps = {
  tasks: [
    {
      id: '1',
      isDone: false,
      title: '촬영 업체 선택',
      cost: 400000,
      date: '2024.11.19',
      manager: '예랑',
    },
    {
      id: '2',
      isDone: false,
      title: '드레스 샵 투어',
      cost: 200000,
      date: '2024.11.20',
      manager: '함께',
    },
    {
      id: '3',
      isDone: false,
      title: '스튜디오 예약',
      cost: 300000,
      date: '2024.11.21',
      manager: '예신',
    },
  ],
};

const SubtasksPage = () => {
  return (
    <>
      <div className='flex w-full flex-col overflow-hidden'>
        <SubtasksMain tasks={initialData.tasks} />
      </div>
    </>
  );
};

export default SubtasksPage;
