import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Salbi Faza Rinaldi | Senior Data Engineer',
  description: 'The portfolio of Salbi Faza Rinaldi, a Senior Data Engineer specializing in cloud & big data solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
