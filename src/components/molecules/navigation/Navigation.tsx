import Logo from '@/assets/navigation/logo.svg';
import Notification from '@/assets/wed_icon/icon_28/alarm_default.svg';
import { Chip } from '@/components/atoms/chip';
import { SubIcon } from './SubIcon';

interface TopNavigationProps {
  active?: boolean;
}

export const Navigation = ({ active = false }: TopNavigationProps) => {
  return (
    <header className='opacity-8 absolute sticky left-0 top-0 flex h-[53px] w-full items-center justify-between bg-gray-100 px-[20px] text-white'>
      <SubIcon href='/' Icon={Logo} />
      <Chip>
        <button className='flex gap-2'>
          <span className='text-primary-500'>결혼까지</span>
          <span>D-173</span>
        </button>
      </Chip>
      <SubIcon href='/' Icon={Notification} active={active} color='gray-700' />
    </header>
  );
};
