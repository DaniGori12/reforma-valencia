import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar'
import Foooter from './components/Foooter'
import Burguer from './components/Burguer'
import Whats from './components/Whats'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <Whats></Whats> 
        <Foooter></Foooter>
        </body>
    </html>
  )
}
