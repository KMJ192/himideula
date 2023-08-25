import type { Metadata } from 'next';
import './globals.css';
import PageTemplate from '@src/PageTemplate/PageTemplate';

export const metadata: Metadata = {
  title: 'ssamssam Documents',
  description: 'ssamssam Documents',
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
