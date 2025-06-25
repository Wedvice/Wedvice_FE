import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import MemoLink from '@/components/molecules/memo/MemoLink';
import { Navigation } from '@/components/molecules/navigation';
import { ProgressCard, TabProgressCard } from '@/components/molecules/progress';

export const Home = () => {
  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='mx-5 flex flex-col'>
        <Navigation />
        <MemoLink />
        {/* TODO : percentage 받아오기 */}
        <ProgressCard percentage={54} />
        <TabProgressCard />
      </div>
      <BottomNavigation />
    </div>
  );
};
