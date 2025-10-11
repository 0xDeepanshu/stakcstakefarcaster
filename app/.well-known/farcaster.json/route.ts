import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    // TODO: Add your own account association
    "frame": {
    "name": "rupture labs mini games",
    "version": "1",
    "iconUrl": "https://stakcstakefarcaster.vercel.app/icon.png",
    "homeUrl": "https://stakcstakefarcaster.vercel.app",
    "imageUrl": "https://stakcstakefarcaster.vercel.app/image.png",
    "splashImageUrl": "https://stakcstakefarcaster.vercel.app/splash.png",
    "splashBackgroundColor": "#FFFFFF",
    "webhookUrl": "https://stakcstakefarcaster.vercel.app/api/webhook",
    "subtitle": "stack stale",
    "description": "experience the fututre of gaming",
    "primaryCategory": "games"
  }
  };

  return NextResponse.json(farcasterConfig);
}
