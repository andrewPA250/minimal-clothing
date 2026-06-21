# MINIMAL. — Storefront (Phase 1 MVP)

Custom storefront for MINIMAL., built on Next.js App Router + TypeScript +
Tailwind CSS, deployed to Vercel. Stripe and Printify are stubbed with
placeholders — see below.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's real vs. stubbed

**Real (working now, no external services needed):**
- Homepage, Shop, Product, About, Contact, legal placeholder pages
- Cart drawer (React Context, in-memory — add/remove/update quantity)
- Mobile-first responsive layout
- Product data structure, pre-shaped to match Printify's product/variant model
- Real product photography for Signature Tee and Focus Tee, Black and White
  variants (`public/products/`)

**Stubbed (intentionally, per the brief — no real keys yet):**
- `lib/products.ts` — mock catalog (Signature Tee, Focus Tee). Swap for a
  real Printify API fetch later; the `Product` type in `lib/types.ts`
  won't need to change.
- `app/api/checkout/route.ts` — returns a fake redirect to
  `/order-confirmation` instead of creating a real Stripe Checkout
  session. The real implementation is commented inline in that file.
- Newsletter and contact forms — capture input but don't send anywhere
  yet (no ESP connected).

## Connecting real services later

1. Copy `.env.local.example` to `.env.local` and fill in
   `STRIPE_SECRET_KEY`, `PRINTIFY_API_KEY`, `PRINTIFY_SHOP_ID`.
2. Replace the stub in `app/api/checkout/route.ts` with a real
   `stripe.checkout.sessions.create(...)` call (commented example
   included in that file).
3. Replace the mock array in `lib/products.ts` with a fetch against the
   Printify API (`GET /shops/{shop_id}/products.json`), mapped into the
   same `Product` type.
4. Add a webhook handler for Stripe's `checkout.session.completed` event
   that creates the matching order in Printify.

## Design system

- Colors: `ink` (#0A0A0A), `paper` (#FAFAFA), `line`, `muted` — defined in
  `tailwind.config.ts`. No third color is used anywhere; keep it that way.
- Fonts: Bricolage Grotesque (display/headlines), Inter (body), JetBrains
  Mono (prices, labels, product index codes like `MIN / 001`) — loaded via
  `next/font/google` in `app/layout.tsx`.
- Buttons: two variants only (`solid` / `outline`) in `components/Button.tsx`.

## Deploying

Push to a Git repo and import into Vercel. No environment variables are
required for the app to build and run in its current stubbed state.
