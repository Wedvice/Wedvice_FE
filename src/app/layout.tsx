import './globals.css';
import BaseQueryClientProvider from '@/contexts/tanstackQuery/BaseQueryClientProvider';

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
