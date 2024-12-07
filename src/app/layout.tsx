import { Metadata } from 'next';
import './globals.css';
import BaseQueryClientProvider from '@/contexts/tanstackQuery/BaseQueryClientProvider';

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
    <html lang="en">
      <body className="layout">
        <BaseQueryClientProvider>{children}</BaseQueryClientProvider>
      </body>
    </html>
  );
}
