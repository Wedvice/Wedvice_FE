'use client';

import { Button } from '@/components/atoms/button/Button';
import TextInput from '@/components/atoms/textInput/TextInput';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { TopBar } from '@/components/molecules/topBar/TopBar';

export default function MatchUserCode() {
  const [inputValue, setInputValue] = useState<string>('');
  const [userCode, setUserCode] = useState<string>('');
  const router = useRouter();

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handleConnect = () => {
    if (inputValue === userCode) router.push('/sign-nickname');
  };

  const getAccessToken = () => {
    if (process.env.NODE_ENV === 'development') {
      // 개발 환경에서는 localStorage
      return localStorage.getItem('accessToken');
    } else {
      // 배포 환경에서는 쿠키에서 읽기
      return Cookies.get('accessToken');
    }
  };

  // 쿠키 기반 로그인 상태 확인 및 유저 코드 요청
  useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      console.warn('Access token이 없습니다. 홈으로 이동합니다.');
      router.replace('/');
      return;
    }

    const checkLoginStatus = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/status`,
          {
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const data = await res.json();
        const isValid = data.code;

        console.log('로그인 상태 응답:', data);

        if (isValid === 200) {
          fetchMatchCode(accessToken);
        } else {
          console.log('로그인 실패 → 홈으로 이동');
          router.replace('/');
        }
      } catch (err) {
        console.error('로그인 상태 확인 실패:', err);
        router.replace('/');
      }
    };

    const fetchMatchCode = async (token: string) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/couple/match-code`,
          {
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();
        const isValid = data.code;
        console.log('매치 코드 응답:', data);

        if (isValid === 200 && data.data?.matchCode) {
          setUserCode(data.data.matchCode);
        } else {
          console.warn('매치 코드 응답 실패');
        }
      } catch (err) {
        console.error('매치 코드 불러오기 실패:', err);
      }
    };

    checkLoginStatus();
  }, [router]);

  return (
    <div className='flex min-h-screen w-full flex-col bg-gray-50'>
      <TopBar
        className='flex h-[69px] w-full cursor-pointer items-center bg-gray-50'
        title=''
        time=''
        onPrimaryButtonClick={() => router.push('/')}
      />

      <div className='mx-auto flex w-full min-w-[360px] max-w-[430px] grow flex-col items-center bg-gray-50 px-6 py-10'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-white'>
            상대방의 코드를 입력해, 연결하세요!
          </h1>
          <p className='mt-2 text-[14px] font-medium leading-[18.2px] tracking-[-0.025em] text-gray-400'>
            내 코드를 상대가 입력하거나, 내가 상대 코드를
            <br />
            입력하면 바로 연결돼요.
          </p>
        </div>

        <div className='mb-6 w-full max-w-[350px] rounded-lg bg-gray-100 p-5 text-center font-medium'>
          <p className='mb-1 text-sm text-gray-400'>내 코드</p>
          <p className='text-lg text-primary-500 underline decoration-primary-500'>
            {userCode || '코드 불러오는 중...'}
          </p>
        </div>

        <div className='w-full max-w-[350px]'>
          <TextInput
            value={inputValue}
            onChange={handleInput}
            placeholder='상대 코드 입력'
          />
        </div>
      </div>

      <div className='absolute bottom-10 left-0 flex w-full justify-center px-6'>
        <Button
          className={`w-full max-w-[350px] rounded-lg py-3 text-lg ${
            inputValue ? 'text-white' : 'text-gray-800'
          }`}
          variant={inputValue ? 'primary_fill' : 'gray_fill'}
          rounded='lg'
          onClick={handleConnect}
        >
          연결하기
        </Button>
      </div>
    </div>
  );
}
