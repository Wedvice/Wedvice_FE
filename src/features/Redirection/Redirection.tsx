'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Redirection = () => {
  const router = useRouter();
  const [accessTokenFetching, setAccessTokenFetching] = useState(false); // 요청 상태 관리

  const getAccessToken = async () => {
    if (accessTokenFetching) return; // 이미 요청 중이면 실행하지 않음
    setAccessTokenFetching(true); // 요청 상태 시작

    try {
      const code = new URL(window.location.href).searchParams.get('code');

      // TODO : 임시적으로 리디렉션, 백엔드 통신 후 완료 되어야 함
      router.push('/match-usercode'); // MatchUserCode 경로로 리디렉션

      // TODO : 여기에서 인가코드를 백엔드에 쏴주고 백엔드에서 Kakao랑 통신
      if (!code) throw new Error('Authorization code is missing'); //

      console.log('받아온 인가 코드', code);

      // TODO : 카카오 발급 코드지만, 백엔드에서 다뤄져야함
      // Kakao API 요청
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: `${process.env.NEXT_PUBLIC_REST_API_KEY}`,
          redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
          code,
          client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      );

      console.log('Access Token Response:', res.data);

      // Access Token 저장 및 리디렉션
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);
    } catch (error) {
      console.error('Error during token fetching:', error);
    } finally {
      setAccessTokenFetching(false); // 요청 상태 종료
    }
  };

  // 뒤로가기 방지
  // TODO : 뒤로가기 관련 백엔드 발급 토큰 활용하여 조건문 추가 예정
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      console.log('뒤로가기 동작 감지');
      // TODO : 토큰 혹은 쿠키(세션ID)가 존재할 때 제자리 조건 로직
      router.replace('/match-usercode');
    };

    // popstate 이벤트 리스너 추가
    window.addEventListener('popstate', handlePopState);

    history.pushState(null, '', window.location.href);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  // 컴포넌트 마운트 시 Access Token 요청
  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <div className='flex h-screen items-center justify-center text-xl text-white'>
      로그인 중입니다...
    </div>
  );
};

export default Redirection;
