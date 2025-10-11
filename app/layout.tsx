import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { APP_URL } from '@/lib/constants'

import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${APP_URL}/images/EVMcd.png`;
  const iconUrl = `${APP_URL}/images/BlackRL.png`;
  
  // The miniapp configuration for sharing
  const miniappConfig = {
    version: "1",
    imageUrl: imageUrl,
    button: {
      title: "Launch Template",
      action: {
        type: "launch_frame",
        name: "Stake Stack",
        url: APP_URL,
        splashImageUrl: iconUrl,
        splashBackgroundColor: "#f7f7f7",
      },
    },
  };

  return {
    title: 'Rupture Labs Mini App',
    description: 'A Rupture Labs gaming formation',
    openGraph: {
      title: 'Rupture Labs Mini App',
      description: 'A Rupture Labs gaming formation',
      images: [imageUrl],
    },
    other: {
      'fc:miniapp': JSON.stringify(miniappConfig),
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
