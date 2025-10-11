'use client'

import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'
import App from '@/components/pages/app'
import FrontEnd from '@/components/pages/main'

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
