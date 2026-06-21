import { NextRequest, NextResponse } from "next/server";

// STUBBED CHECKOUT ROUTE — no Stripe secret key is used here.
//
// When ready to go live:
//   import Stripe from "stripe";
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     line_items: lines.map((l) => ({
//       price_data: {
//         currency: "eur",
//         product_data: { name: `${l.productName} — ${l.color} / ${l.size}` },
//         unit_amount: Math.round(l.price * 100),
//       },
//       quantity: l.quantity,
//     })),
//     success_url: `${origin}/order-confirmation`,
//     cancel_url: `${origin}/cart`,
//   });
//   return NextResponse.json({ url: session.url });
//
// For now it just simulates a short delay and redirects straight to the
// confirmation page so the full frontend flow can be demoed end to end.
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body?.lines?.length) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  // Simulated placeholder response — replace with a real Stripe session URL.
  return NextResponse.json({ url: "/order-confirmation" });
}
