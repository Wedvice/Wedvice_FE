'use client';

import { Button } from '@/components/atoms/button/Button';
import TextInput from '@/components/atoms/textInput/TextInput';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/molecules/topBar/TopBar';

export default function SignNickName() {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handleConnect = () => {
    if (inputValue.length > 0) {
      console.log('닉네임 입력 완료:', inputValue);
    }
  };

  return (
    <>
      <TopBar
        className='flex h-[69px] w-full cursor-pointer items-center bg-gray-50'
        title=''
        time=''
        onPrimaryButtonClick={() => {
          router.push('/match-usercode');
        }}
      />
      <div className='mx-auto flex h-screen w-full min-w-[360px] max-w-[430px] flex-col items-center bg-gray-50 px-6 py-10'>
        <div className='mb-6 w-full text-left'>
          <h2 className='text-lg font-semibold text-primary-500'>연결 완료!</h2>
          <h1 className='text-2xl font-semibold text-white'>
            닉네임을 입력해주세요
          </h1>
          <p className='mt-2 text-sm font-medium text-gray-400'>
            서로를 부르는 특별한 애칭이면 더 좋아요.
          </p>
        </div>

        <div className='flex h-[61px] w-full min-w-[350px] items-center justify-between'>
          <TextInput
            value={inputValue}
            onChange={handleInput}
            placeholder='닉네임 입력'
            maxLength={2}
          />
        </div>

        <div className='absolute bottom-10 left-0 flex w-full justify-center px-6'>
          <Button
            className='w-full max-w-[350px] rounded-lg py-3 text-lg text-white'
            variant={inputValue.length > 0 ? 'primary_fill' : 'gray_fill'}
            rounded='lg'
            onClick={handleConnect}
            disabled={inputValue.length === 0}
          >
            연결하기
          </Button>
        </div>
      </div>
    </>
  );
}
