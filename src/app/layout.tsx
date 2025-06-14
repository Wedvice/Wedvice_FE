import { MemoProvider } from '@/contexts/memo/MemoProvider';
import BaseQueryClientProvider from '@/contexts/tanstackQuery/BaseQueryClientProvider';
import { Metadata } from 'next';
import { pretendard } from './font';
import './globals.css';

// PWA 관련 세팅
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Wedivce_FE 화이팅^^',
  description: '테스트 메타 데이터 PWA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`layout ${pretendard.variable}`}>
        <BaseQueryClientProvider>
          <MemoProvider>
            <div className='h-[100dvh] w-full bg-gray-100 font-pretendard'>
              {children}
            </div>
          </MemoProvider>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
