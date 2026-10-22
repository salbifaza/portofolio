import type {Metadata} from 'next';
import {Archivo, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Header} from '@/components/site/header';
import {initScript} from '@/lib/init-script';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-geist-mono',
  display: 'swap',
});

const description =
  'Portfolio of Salbi Faza Rinaldi, a Senior Data Engineer building batch and streaming data platforms, lakehouses and pipelines.';

export const metadata: Metadata = {
  title: 'Salbi Faza Rinaldi | Senior Data Engineer',
  description,
  openGraph: {
    title: 'Salbi Faza Rinaldi | Senior Data Engineer',
    description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: initScript}} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
