import App from '@/components/pages/app'
import { APP_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import FrontEnd from '@/components/pages/main'
const frame = {
  version: 'next',
  imageUrl: `${APP_URL}/images/EVMcd.webp`,
  button: {
    title: 'Launch Template',
    action: {
      type: 'launch_frame',
      name: 'Stake Stack',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/BlackRL.webp`,
      splashBackgroundColor: '#f7f7f7',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rupture Labs mini app ',
    openGraph: {
      title: 'Rupture Labs MiniApp ',
      description: 'A Rupture Labs gaming formation',
    },
    other: {
      'fc:frame': JSON.stringify(frame),
    },
  }
}

export default function Home() {
  return <App />
}
