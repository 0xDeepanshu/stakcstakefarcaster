import App from '@/components/pages/app'
import { APP_URL } from '@/lib/constants'
import type { Metadata } from 'next'
const miniapp = {
  version: 'next',
  imageUrl: `${APP_URL}/images/EVMcd.png`,
  button: {
    title: 'Launch Template',
    action: {
      type: 'launch_miniapp',
      name: 'Stake Stack',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/BlackRL.png`,
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
      'fc:miniapp': JSON.stringify(miniapp),
    },
  }
}

export default function Home() {
  return <App />
}
