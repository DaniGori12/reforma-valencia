import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar'
import Foooter from './components/Foooter'
import Burguer from './components/Burguer'
import Whats from './components/Whats'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
default: 'Reformas Integrales Valencia',
template: '%s',
  },
  description: 'Reformas integrales en Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto',
  keywords: ['Reformas', 'Valencia', 'Reformas Áticos', 'Reformas baños', 'Reformas cocinas', 'Reformas Edificios',  
  'Reformas Fachadas', 'Reformas Locales', 'Reformas Oficinas', 'Reformas Terrazas',],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
      <Burguer></Burguer>
        {children}
        <Foooter></Foooter>
      <Whats></Whats> 
        </body>
    </html>
  )
}
