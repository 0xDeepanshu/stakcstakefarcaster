import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    "accountAssociation": {
    "header": "eyJmaWQiOjEzNzUzNjIsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg4RDdiQzIxMDM2ZkZCQkU3NjQ3MEM1Yjk4QTFhNDBkOTI5M0E2NjAyIn0",
    "payload": "eyJkb21haW4iOiJzdGFrY3N0YWtlZmFyY2FzdGVyLnZlcmNlbC5hcHAifQ",
    "signature": "+Z/k171REdkBHDohAtqNctS0oFaXfBuzNGatgD1aWwVF0TBIIaEqf8O4z1MlUhGmr79e5s7MIMO4ahPrIaDJGxs="
  },
    "miniapp": {
      version: "1",
      name: "Rupture Labs mini app",
      iconUrl: `${APP_URL}/images/BlackRL.png`,
      homeUrl: `${APP_URL}`,
      splashImageUrl: `${APP_URL}/images/BlackRL.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
      subtitle: "Experience gaming with RL",
      description: "A template for building Farcaster Mini Apps with Monad integration",
      primaryCategory: "developer-tools",
      tags: ["monad", "farcaster", "miniapp", "template"],
      heroImageUrl: `${APP_URL}/images/EVMcd.png`,
      buttonTitle : "🚩 Start",
    },
  };

  return NextResponse.json(farcasterConfig);
}
