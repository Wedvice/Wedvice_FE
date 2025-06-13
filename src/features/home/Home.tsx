import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import MemoLink from '@/components/molecules/memo/MemoLink';
import { Navigation } from '@/components/molecules/navigation';

export const Home = () => {
  return (
    <div className='relative flex h-full w-full flex-col'>
      <Navigation />
      <MemoLink />
      <BottomNavigation />
    </div>
  );
};
