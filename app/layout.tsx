import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rupture Lsbs Farcaster MiniApp ',
  description: 'A game for  mini-app on Farcaster and Base',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
    
    <meta name="fc:miniapp" content='{"version":"1","imageUrl":"https://stakcstakefarcaster.vercel.app/images/BlackRL.png","button":{"title":"🚩 Start","action":{"type":"launch_miniapp","name":"Stack Stake!","url":"https://stakcstakefarcaster.vercel.app","splashImageUrl":"https://stakcstakefarcaster.vercel.app/images/EVMcd.png","splashBackgroundColor":"#f5f0ec"}}}' />
    <meta name="fc:frame" content='{"version":"1","imageUrl":"https://stakcstakefarcaster.vercel.app/images/BlackRL.png","button":{"title":"🚩 Start","action":{"type":"launch_frame","name":"Stack Stake!","url":"https://stakcstakefarcaster.vercel.app","splashImageUrl":"https://stakcstakefarcaster.vercel.app/images/EVMcd.png","splashBackgroundColor":"#f5f0ec"}}}' />
  </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}