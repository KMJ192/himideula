import type { Metadata } from 'next';
import PageTemplate from '@src/components/PageTemplate/PageTemplate';

import './globals.css';
import '@src/styles/styles.scss';

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
      <body>
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
}
