import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

import { Providers } from './providers';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Navlinks from '@/components/Layout/Navlinks';

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
    <html
      lang='fr'
      suppressHydrationWarning
      className='scroll-smooth'
    >
      <body className={inter.className}>
        <Providers>
          <div className='drawer'>
            <input
              id='my-drawer-3'
              type='checkbox'
              className='drawer-toggle'
            />
            <div className='drawer-content flex flex-col'>
              <Navbar />

              <main>{children}</main>
              <Footer />
            </div>

            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-3'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='menu p-4 w-80 min-h-full bg-base-200'>
                <Navlinks />
              </ul>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
