import Image from 'next/image';
import LoginButton from '@/features/components/LoginButton';

export default function Home() {
  return (
    <div className='relative w-full h-screen bg-black'>
      <Image
        src='/wedy_splash.png'
        alt='wedy_splash'
        layout='fill'
        objectFit='cover'
        priority
      />

      <div className='absolute bottom-10 left-0 w-full flex justify-center px-6'>
        <LoginButton />
      </div>
    </div>
  );
}
