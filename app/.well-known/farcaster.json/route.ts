import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    
    "miniapp": {
      version: "1",
      name: "Rupture Labs mini app",
      iconUrl: `${APP_URL}/images/BlackRL.png`,
      homeUrl: `${APP_URL}`,
      splashImageUrl: `${APP_URL}/images/BlackRL.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
      subtitle: "experience a good gaming with rl games and out mini game as its highly preserved",
      description: "A template for building Farcaster Mini Apps with Monad integration",
      primaryCategory: "developer-tools",
      tags: ["monad", "farcaster", "miniapp", "template"],
      heroImageUrl: `${APP_URL}/images/EVMcd.png`,
      buttonTitle : "🚩 Start",
    },
  };

  return NextResponse.json(farcasterConfig);
}
