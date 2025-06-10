'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Redirection = () => {
  const router = useRouter();

  // 쿠키 기반 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/status`,
          {
            credentials: 'include',
          },
        );

        const data = await res.json();
        console.log('로그인 상태 응답:', data);

        if (data.isLoggedIn) {
          router.replace('/match-usercode');
        } else {
          console.log('로그인 실패 → 홈으로 이동');
          router.replace('/');
        }
      } catch (err) {
        console.error('로그인 상태 확인 실패:', err);
        router.replace('/');
      }
    };

    checkLoginStatus();
  }, [router]);

  return (
    <div className='flex h-screen items-center justify-center text-xl text-white'>
      로그인 상태 확인 중입니다...
    </div>
  );
};

export default Redirection;
