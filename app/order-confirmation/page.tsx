import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="container-px mx-auto max-w-container py-20 text-center sm:py-32">
      <p className="eyebrow mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-6 bg-muted" aria-hidden="true" />
        Order Confirmed
      </p>
      <h1 className="font-display text-4xl uppercase tracking-wide">
        Thank you.
      </h1>
      <p className="mx-auto mt-4 max-w-sm font-body text-base text-muted">
        This is a placeholder confirmation page. Once Stripe is connected
        with live keys, this will reflect a real completed order and trigger
        a Printify fulfillment request.
      </p>
      <Link
        href="/shop"
        className="mt-10 inline-block font-mono text-xs uppercase tracking-widest2 underline transition-opacity duration-250 hover:opacity-60"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
