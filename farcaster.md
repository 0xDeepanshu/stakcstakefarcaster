Farcaster Mini Apps: Developer Guide
🚀 Overview
Farcaster Mini Apps let developers build native-like web apps for Farcaster users with easy onboarding, social discovery, and deep wallet integration. Apps are made with HTML, CSS, and JavaScript, and the Mini App SDK exposes Farcaster features.

Ship Fast: No app store review, instant distribution.

Get Discovered: Viral social feed & app stores.

Retain Users: Push notifications and saved apps.

Transact Seamlessly: Built-in Ethereum wallet support.

Build Social: No forms/passwords; use Farcaster's social data.

🔧 Getting Started
Prerequisites
Node.js 22.11.0 or higher (LTS recommended)

Package manager: npm, pnpm, or yarn

Check your Node version:

bash
node --version
Enable Developer Mode in Farcaster
Log into Farcaster (mobile or desktop).

Visit: https://farcaster.xyz/~/settings/developer-tools

Toggle "Developer Mode" ON for access to development tools.

🏁 Quick Start
To bootstrap a Mini App project:

bash
npm create @farcaster/mini-app
Or manually add the SDK:

bash
npm install @farcaster/miniapp-sdk
Or via CDN:

xml
<script type="module">
  import { sdk } from 'https://esm.sh/@farcaster/miniapp-sdk';
</script>
Important: After loading your app, call:

js
import { sdk } from '@farcaster/miniapp-sdk';
// After your app is fully loaded
await sdk.actions.ready();
If not called, users see an infinite loader!

📑 Manifest File (/.well-known/farcaster.json)
What is the Manifest?
A manifest file registers your Mini App with Farcaster—used for app stores, notifications, and domain verification.

Required for full Mini App capabilities.

Example Content
json
{
  "accountAssociation": {
    "header": "<base64-encoded JFS header>",
    "payload": "<base64-encoded payload>",
    "signature": "<base64-encoded signature>"
  },
  "miniapp": {
    "version": "1",
    "name": "My MiniApp",
    "iconUrl": "https://example.com/icon.png",
    "homeUrl": "https://example.com/app",
    "splashImageUrl": "https://example.com/icon.png",
    "splashBackgroundColor": "#f5f0ec",
    "webhookUrl": "https://example.com/api/webhook",
    "subtitle": "A fast Farcaster mini app",
    "description": "Engaging social app for Farcaster.",
    "primaryCategory": "social",
    "tags": ["fast", "social"],
    "heroImageUrl": "https://example.com/hero.png"
  }
}
Key Fields
Field	Required	Description
accountAssociation	✅	Verifies domain ownership (see JSON Farcaster Signature)
miniapp.version	✅	Manifest version; must be "1"
miniapp.name	✅	App name (max 32 chars)
miniapp.iconUrl	✅	1024x1024 PNG icon (no alpha)
miniapp.homeUrl	✅	Default launch URL
miniapp.webhookUrl	❌	For notifications (if supported)
miniapp.description	❌	Marketing message (max 170 chars, no emojis/specials)
miniapp.tags	❌	Array (max 5 tags, lowercase, no spaces/emojis)
miniapp.primaryCategory	❌	App category (e.g., social, games)
...	...	[See full schema for additional optional fields]
🗂️ Embeds (Social Meta Tags)
For each page you want shareable:

Add an fc:miniapp meta tag to your HTML.

Example
xml
<meta name="fc:miniapp" content='{
  "version":"1",
  "imageUrl":"https://example.com/share-image.png",
  "button":{
    "title":"Try Now!",
    "action":{
      "type":"launch_frame",
      "name":"My MiniApp",
      "url":"https://example.com/app"
    }
  }
}' />
Purpose: Enables rich cards/buttons in Farcaster social feeds.

Fields
Field	Required	Description
version	✅	"1"
imageUrl	✅	3:2 aspect ratio image
button.title	✅	Button text
button.action	✅	Launch frame/action (see schema)
💻 SDK Usage
Common SDK actions (after importing sdk):

sdk.actions.ready() — Hide splash screen, display app.

sdk.actions.addMiniApp() — Prompt user to favorite/add app.

sdk.actions.composeCast() — Prompt social cast.

sdk.actions.openUrl(url) — Open an external URL.

sdk.wallet.getEthereumProvider() — Access wallet.

See full SDK reference.

🛠️ Manifest vs Embed: Key Points
Manifest: One per domain, at /.well-known/farcaster.json. Controls app registration, notifications, app store listings, and proofs of domain ownership.

Embed: One per page, in HTML meta tags. Controls social sharing for specific pages (rich cards).

Best practice: Always set both up!

📦 Distribution & Publishing
Publish your app: fill out manifest, set up notification webhook if needed.

Add social embeds for discoverability in feeds.

Use developer tools in Farcaster to audit manifests and preview.

🧩 AI Training & Context
You can ingest these docs as context for building AI agents/LLMs.

Follow /llms.txt standard (see llmstxt.org).

References:

Mini Apps Docs

Manifest Specification

Manifest vs Embed