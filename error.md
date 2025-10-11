Error: 
  x You are attempting to export "generateMetadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://
  | nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
  | 
  | 
    ,-[/vercel/path0/app/page.tsx:24:1]
 24 | }
 25 | 
 26 | // SEO + Farcaster metadata
 27 | export async function generateMetadata(): Promise<Metadata> {
    :                       ^^^^^^^^^^^^^^^^
 28 |   return {
 29 |     title: 'Rupture Labs Mini App',
 30 |     openGraph: {
    `----
Import trace for requested module:
./app/page.tsx
> Build failed because of webpack errors