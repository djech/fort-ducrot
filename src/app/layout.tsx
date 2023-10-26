import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: [ "100","300","400","500","700","900"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fort-ducrot',
  description: 'Bienvenue sur le site web officiel du Fort Podbielski Ducrot de Mundolsheim. Découvrez l`histoire de ce fort, les visites guidées proposées par notre association, et les événements à venir. Rejoignez-nous pour explorer ce patrimoine unique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
