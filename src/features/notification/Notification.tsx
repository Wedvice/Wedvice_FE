import { NotificationCard } from './components/NotificationCard';

type CategoryType = 'calendar' | 'comment' | 'task';

const cardPropsList = [
  {
    title: '달력',
    category: 'calendar' as CategoryType,
    content: '오늘 N개의 리스트가 예정되어 있어요.',
    postedTime: new Date(),
    isUnChecked: true,
  },
  {
    title: '웨딩홀 고르기',
    category: 'comment' as CategoryType,
    content: '새로운 댓글이 달렸어요.',
    postedTime: new Date(),
    chipContent: '이런 것도 있드라~ 사진 첨부완료!',
    isUnChecked: true,
  },
  {
    title: '달력',
    category: 'calendar' as CategoryType,
    content: '오늘 N개의 리스트가 예정되어 있어요.',
    postedTime: new Date(),
    isUnChecked: false,
  },
  {
    title: '웨딩촬영 컨셉 정하기',
    category: 'task' as CategoryType,
    content: '{닉네임}님이 새로운 리스트를 등록했어요.',
    postedTime: new Date(),
    isUnChecked: false,
  },
  {
    title: '웨딩촬영 컨셉 정하기',
    category: 'task' as CategoryType,
    content: '{닉네임}님이 새로운 리스트를 등록했어요.',
    postedTime: new Date(),
    isUnChecked: false,
  },
];

export const Notification = () => {
  return (
    <div className='h-full w-full bg-gray-50'>
      {cardPropsList.map((props, index) => (
        <NotificationCard key={index} {...props} />
      ))}
    </div>
  );
};
