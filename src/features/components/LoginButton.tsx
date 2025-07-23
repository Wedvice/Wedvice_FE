'use client';

import React from 'react';

const LoginButton = () => {
  const redirectUrl = encodeURIComponent('http://localhost:3000/Redirection');
  const KAKAO_AUTH_URL = `${process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}?redirectUrl=${redirectUrl}`;
  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <img
      src='/kakao_login_button.png'
      className='block hover:cursor-pointer'
      onClick={loginHandler}
    />
  );
};

export default LoginButton;
