import { CartLine } from "./types";

// STRIPE PLACEHOLDER INTEGRATION
//
// No live keys are used here. This calls our own /api/checkout route,
// which is itself stubbed (see app/api/checkout/route.ts). Once real
// keys exist:
//   1. Add STRIPE_SECRET_KEY to .env.local (see .env.local.example)
//   2. Replace the stub in app/api/checkout/route.ts with a real
//      stripe.checkout.sessions.create(...) call
//   3. This function does not need to change.
export async function startCheckout(lines: CartLine[]): Promise<void> {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lines }),
  });

  if (!res.ok) {
    throw new Error("Checkout could not be started.");
  }

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  }
}
