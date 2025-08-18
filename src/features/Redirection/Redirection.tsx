'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Redirection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      // accessToken 로컬스토리지에 저장
      localStorage.setItem('accessToken', accessToken);
      console.log('accessToken 저장 완료:', accessToken);
    } else {
      console.warn('accessToken 없음, 홈으로 이동');
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
        console.log('로그인 상태 응답:', data);

        if (data.code === 200) {
          router.replace('/match-usercode');
        } else {
          console.log('로그인 실패 → 홈으로');
          router.replace('/');
        }
      } catch (err) {
        console.error('로그인 상태 확인 실패:', err);
        router.replace('/');
      }
    };

    checkLoginStatus();
  }, [router, searchParams]);

  return (
    <div className='flex h-screen items-center justify-center text-xl text-white'>
      로그인 상태 확인 중입니다...
    </div>
  );
};

export default Redirection;
