import { Chip } from '@/components/atoms/chip';
import CalendarIcon from '@/assets/wed_icon/icon_24/calendar_default.svg';
import CommentIcon from '@/assets/wed_icon/icon_24/comment_default.svg';
import TaskIcon from '@/assets/wed_icon/icon_24/task_default.svg';
import clsx from 'clsx';
import { detailDate } from '@/utils/time';

const categoryIcons = {
  calendar: <CalendarIcon />,
  comment: <CommentIcon />,
  task: <TaskIcon />,
};

interface NotificationProps {
  title: string;
  content: string;
  postedTime: Date;
  category: keyof typeof categoryIcons;
  isUnChecked: boolean;
  chipContent?: string;
}

export const NotificationCard = ({
  title,
  content,
  postedTime,
  category,
  chipContent,
  isUnChecked = false,
}: NotificationProps) => {
  return (
    <div className={clsx('w-full p-[20px]', isUnChecked && 'bg-gray-100')}>
      <div className='flex w-full gap-[12px]'>
        <div className='w-[24px]'>{categoryIcons[category]}</div>
        <div className='flex-1 text-white'>
          <div className='flex flex-col'>
            <div className='flex justify-between text-[12px] text-gray-600'>
              <span>{title}</span>
              <span>{detailDate(postedTime)}</span>
            </div>
            <span className='text-[16px] text-gray-800'>{content}</span>
            {chipContent && (
              <Chip
                type='notification'
                rounded='notification'
                size='lg'
                className='mt-sm'
              >
                {chipContent}
              </Chip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
