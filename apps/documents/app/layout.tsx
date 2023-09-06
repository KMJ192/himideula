import type { Metadata } from 'next';
import PageTemplate from '@src/components/PageTemplate/PageTemplate';

import './globals.css';

export const metadata: Metadata = {
  title: 'SsamSsam',
  description: 'SsamSsam Documents Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
}
