import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { overpass } from '@/lib/font';

export const metadata: Metadata = {
  title: {
    template: '%s | saisaynoomleng',
    default: 'saisaynoomleng',
  },
  description:
    'Sai Say Noom Leng is a front-end web developer. He designs and develops marketing websites, blog sites, retails & e-commerce websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.variable}>{children}</body>
    </html>
  );
}
