import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Notification from '@/components/Notification';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
