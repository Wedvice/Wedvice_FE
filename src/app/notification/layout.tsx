import { TopBar } from '@/components/molecules/topBar';
import { PropsWithChildren } from 'react';

const NotificationLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='h-full w-full'>
      <TopBar title='알림' className='mb-4 bg-gray-50' />
      {children}
    </main>
  );
};

export default NotificationLayout;
