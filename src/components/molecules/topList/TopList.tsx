import Folder from '../../../../public/folder.svg';

interface TopListProps {
  label: string;
  currentCount: number;
  totalCount: number;
}

export const TopList = ({ label, currentCount, totalCount }: TopListProps) => {
  const isCompleted = currentCount === totalCount;
  return (
    <div className='relative h-[171px] w-[171px]'>
      <div
        className={`absolute right-0 top-[7px] flex h-[42px] w-[67px] justify-center rounded-tr-[8px] pt-[3px] ${
          isCompleted ? 'bg-primary-400' : 'bg-gray-300'
        }`}
      >
        <span className='text-sm font-medium text-gray-900'>
          {isCompleted ? '완료' : `${currentCount}/${totalCount}`}
        </span>
      </div>

      <Folder className='absolute inset-0 z-0' />

      <span className='absolute bottom-5 left-5 text-base font-semibold text-white'>
        {label}
      </span>
    </div>
  );
};
