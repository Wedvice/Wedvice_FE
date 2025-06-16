import Folder from '../../../../public/folder.svg';

interface TopListProps {
  label: string;
  progressText?: string; // '0/8' or undefined
}

export const TopList = ({ label, progressText }: TopListProps) => {
  return (
    <div className='relative h-[171px] w-[171px]'>
      <div
        className={`absolute right-0 top-[7px] flex h-[42px] w-[67px] justify-center rounded-tr-[8px] pt-[3px] ${
          progressText ? 'bg-primary-400' : 'bg-gray-300'
        }`}
      >
        <span className='text-sm font-medium text-gray-900'>
          {progressText ?? '완료'}
        </span>
      </div>

      <Folder className='absolute inset-0 z-0' />

      <div className='absolute bottom-5 left-5 text-base font-semibold text-white'>
        {label}
      </div>
    </div>
  );
};
