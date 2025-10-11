'use client'

import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'
import App from '@/components/pages/app'
import FrontEnd from '@/components/pages/main'
import { APP_URL } from '@/lib/constants'
import type { Metadata } from 'next'

// Mini App metadata configuration
const miniapp = {
  version: '1',
  imageUrl: `${APP_URL}/images/EVMcd.png`,
  button: {
    title: 'Launch Template',
    action: {
      type: 'launch_frame',
      name: 'Stake Stack',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/BlackRL.png`,
      splashBackgroundColor: '#f7f7f7',
    },
  },
}

// SEO + Farcaster metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rupture Labs Mini App',
    openGraph: {
      title: 'Rupture Labs Mini App',
      description: 'A Rupture Labs gaming formation',
    },
    other: {
      'fc:miniapp': JSON.stringify(miniapp),
    },
  }
}

export default function Home() {
  const [isMiniApp, setIsMiniApp] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkMiniApp() {
      try {
        const insideMiniApp = await sdk.isInMiniApp()
        setIsMiniApp(insideMiniApp)
      } catch (err) {
        console.error('Error checking Mini App environment:', err)
        setIsMiniApp(false)
      }
    }

    checkMiniApp()
  }, [])

  // Loading state (optional)
  if (isMiniApp === null) return <div>Loading...</div>

  // Conditional rendering
  return isMiniApp ? <App /> : <FrontEnd />
}
