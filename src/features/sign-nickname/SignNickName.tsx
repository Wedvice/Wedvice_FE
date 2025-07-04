'use client';

import { Button } from '@/components/atoms/button/Button';
import TextInput from '@/components/atoms/textInput/TextInput';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/molecules/topBar/TopBar';

export default function SignNickName() {
  const [inputValue, setInputValue] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const router = useRouter();

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handleConnect = async () => {
    if (inputValue.length === 0 || gender === '') return;

    // GROOM: 신랑 / BRIDE: 신부
    const mappedGender = gender === 'male' ? 'GROOM' : 'BRIDE';

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/couple`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            gender: mappedGender,
            nickName: inputValue,
          }),
        },
      );

      if (!res.ok) {
        throw new Error(`요청 실패: ${res.status}`);
      }

      const result = await res.json();
      console.log('요청 성공:', result);

      router.push(`/home/${inputValue}`);
    } catch (error) {
      console.error('요청 중 오류 발생:', error);
    }
  };

  return (
    <div className='flex min-h-screen w-full flex-col bg-gray-50'>
      <TopBar
        className='flex h-[69px] w-full cursor-pointer items-center bg-gray-50'
        title=''
        time=''
        onPrimaryButtonClick={() => {
          router.push('/match-usercode');
        }}
      />

      <div className='mx-auto flex w-full min-w-[360px] max-w-[430px] grow flex-col items-center bg-gray-50 px-6 py-10'>
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

        <div className='mt-6 w-full max-w-[350px]'>
          <div className='flex justify-between gap-4'>
            {[
              { value: 'male', label: '남자' },
              { value: 'female', label: '여자' },
            ].map(({ value, label }) => {
              const isSelected = gender === value;

              return (
                <label
                  key={value}
                  className={`flex-1 cursor-pointer rounded-full border px-4 py-2 text-center font-semibold transition-all duration-150 ${isSelected ? 'border-gray-500 bg-primary-500 text-black' : 'bg-black text-white'} `}
                >
                  <input
                    type='radio'
                    name='gender'
                    value={value}
                    checked={isSelected}
                    onChange={(e) => setGender(e.target.value)}
                    className='hidden'
                  />
                  {label}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className='absolute bottom-10 left-0 flex w-full justify-center px-6'>
        <Button
          className='w-full max-w-[350px] rounded-lg py-3 text-lg text-white'
          variant={
            inputValue.length > 0 && gender ? 'primary_fill' : 'gray_fill'
          }
          rounded='lg'
          onClick={handleConnect}
          disabled={inputValue.length === 0 || gender === ''}
        >
          연결하기
        </Button>
      </div>
    </div>
  );
}
