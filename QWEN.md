# Qwen Code Analysis - Monad Farcaster MiniApp Template

## Project Overview

This is a Next.js-based Farcaster MiniApp template called "Stake Stack" built by Rupture Labs. It's designed to demonstrate all Mini App capabilities for building applications that integrate with the Farcaster protocol and Monad ecosystem.

The project is a template for creating Farcaster Mini Apps that can interact with user contexts, perform native actions, and prompt wallet operations. It uses React with TypeScript and follows Next.js App Router patterns.

## Key Technologies and Dependencies

- Next.js 14.2.6 (App Router)
- React 18 & React DOM
- TypeScript
- Tailwind CSS for styling
- Farcaster MiniApp SDKs (`@farcaster/miniapp-core`, `@farcaster/miniapp-node`, `@farcaster/miniapp-sdk`)
- Viem and Wagmi for wallet integration
- @upstash/redis for data persistence
- Framer Motion and GSAP for animations
- Zod for schema validation

## Project Structure

```
D:\Nextjs\monadfc\
├── .env.example
├── .gitignore
├── biome.json
├── next.config.mjs
├── package.json
├── tsconfig.json
├── .git/
├── .next/
├── app/
│   ├── .well-known/
│   ├── api/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.png
│   └── page.tsx
├── components/
├── lib/
├── node_modules/
├── public/
└── types/
```

### Key Directories

- `app/` - Next.js App Router pages and API routes
- `components/` - React components including pages, providers and UI elements
- `lib/` - Utility functions, constants and Redis integration
- `public/` - Static assets like images

### Main Components

- `app/page.tsx` - Main page that sets up the Farcaster frame metadata
- `components/pages/app.tsx` - Main application component with loading states
- `components/providers.tsx` - Main providers wrapper for Farcaster and Wallet
- `components/farcaster-provider.tsx` - Farcaster context provider
- `components/wallet-provider.tsx` - Wallet integration provider
- `lib/constants.ts` - Application constants and environment configuration

## Building and Running

### Prerequisites
- Node.js and pnpm (though package.json shows pnpm as the package manager, there's also a bun.lock and pnpm-lock.yaml)

### Setup
1. Install dependencies:
   ```bash
   pnpm install
   # or
   yarn install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Set the `NEXT_PUBLIC_URL` environment variable in `.env.local`:
   ```bash
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

### Development
```bash
yarn run dev
# or
pnpm run dev
```

This will start the development server on port 3000.

### Production
```bash
yarn run build
yarn run start
```
or
```bash
pnpm run build
pnpm run start
```

## Farcaster MiniApp Integration

The app integrates with Farcaster using:
- `@farcaster/miniapp-sdk` for context and actions
- Frame metadata configuration in `app/page.tsx`
- `useFrame` hook to access user context and Farcaster functionality
- Wallet integration with viem and wagmi for blockchain interactions

### Frame Configuration
The frame is configured in `app/page.tsx` with:
- Image URL for feed display
- Launch button with splash screen configuration
- Title and name for the app

### Farcaster Actions
The template includes examples of:
- `addFrame` - Save/bookmark the app
- `composeCast` - Prompt user to cast with prefilled content
- `viewProfile` - Show Farcaster user profiles

### Wallet Integration
Includes examples of:
- Transaction prompting
- Chain switching (specifically Monad Testnet with chain ID 10143)
- Using viem for blockchain interactions

## Development Conventions

- Uses TypeScript for type safety
- Tailwind CSS for styling with a mobile-first approach
- Component organization with dedicated directories for pages and providers
- Environment variables for configuration
- Safe area containers for proper mobile rendering
- Asynchronous loading states for Farcaster SDK
- Zod for schema validation where applicable

## Special Considerations

### Local Development and Testing
- Farcaster Mini Apps need to be accessed through the Farcaster client to work properly
- For local development, tools like `cloudflared` or `ngrok` are needed to expose the local server to the internet
- The embed tool at https://warpcast.com/~/developers/mini-apps/embed can be used to preview the app

### Environment Variables
- `NEXT_PUBLIC_URL` - Required for the app to function properly
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` - For Redis integration
- `NEYNAR_API_KEY` - For Farcaster API integration

### Security
- The project includes validation for the NEXT_PUBLIC_URL environment variable
- Uses secure Redis connection for data persistence
- Implements proper safe area handling for different clients