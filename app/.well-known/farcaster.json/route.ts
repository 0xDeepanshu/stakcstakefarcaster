import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    "accountAssociation": {
      "header": "eyJmaWQiOjkxNTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMmVmNzkwRGQ3OTkzQTM1ZkQ4NDdDMDUzRURkQUU5NDBEMDU1NTk2In0",
      "payload": "eyJkb21haW4iOiJyZXdhcmRzLndhcnBjYXN0LmNvbSJ9",
      "signature": "MHgxMGQwZGU4ZGYwZDUwZTdmMGIxN2YxMTU2NDI1MjRmZTY0MTUyZGU4ZGU1MWU0MThiYjU4ZjVmZmQxYjRjNDBiNGVlZTRhNDcwNmVmNjhlMzQ0ZGQ5MDBkYmQyMmNlMmVlZGY5ZGQ0N2JlNWRmNzMwYzUxNjE4OWVjZDJjY2Y0MDFj"
    },
    "miniapp": {
      version: "1",
      name: "Rupture Labs mini app",
      iconUrl: `${APP_URL}/images/BlackRL.png`,
      homeUrl: `${APP_URL}`,
      splashImageUrl: `${APP_URL}/images/BlackRL.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
      subtitle: "Monad Farcaster MiniApp Template",
      description: "A template for building Farcaster Mini Apps with Monad integration",
      primaryCategory: "developer-tools",
      tags: ["monad", "farcaster", "miniapp", "template"],
      heroImageUrl: `${APP_URL}/images/EVMcd.png`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
