import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fort ducrot',
  description:
    'Bienvenue sur le site web officiel du Fort Podbielski Ducrot de Mundolsheim. Découvrez l`histoire de ce fort, les visites guidées proposées par notre association, et les événements à venir. Rejoignez-nous pour explorer ce patrimoine unique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
