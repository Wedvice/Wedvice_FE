import Image from 'next/image';
import LoginButton from '@/features/components/LoginButton';

export default function Home() {
  return (
    <div className='relative flex h-screen min-w-[390px] flex-col items-center justify-center overflow-hidden bg-black'>
      <div className='absolute inset-0'>
        <Image
          src='/wedySplashBackgound.png'
          alt='Background'
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className='absolute top-1/3 flex flex-col items-center'>
        <Image
          src='/wedySplashLogo.png'
          alt='Wedy Logo'
          width={135}
          height={55}
          priority
        />
        <h2 className='mt-4 w-[350px] text-center text-[24px] font-semibold leading-[31.2px] tracking-[-0.025em] text-white'>
          결혼준비 레디? 웨디!
        </h2>
        <p className='mt-2 text-center text-[12px] font-medium leading-[15.6px] tracking-[-0.025em] text-gray-400'>
          한 곳에 쏙, 모든 결혼 준비를 한눈에
        </p>
      </div>

      <div className='absolute bottom-10 left-0 flex w-full justify-center px-6'>
        <LoginButton />
      </div>
    </div>
  );
}
