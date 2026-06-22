import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-px mx-auto max-w-container py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-wide">
              MINIMAL.
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-paper/60">
              Simplicity Wins.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-paper/50">Products</p>
            <Link href="/shop" className="text-sm transition-opacity duration-250 hover:opacity-60">
              All Products
            </Link>
            <Link href="/product/signature-tee" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Signature Tee
            </Link>
            <Link href="/product/focus-tee" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Focus Tee
            </Link>
            <Link href="/product/you-vs-you-tee" className="text-sm transition-opacity duration-250 hover:opacity-60">
              You vs You Tee
            </Link>
            <Link href="/product/virtus-tee" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Virtus Tee
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-paper/50">About</p>
            <Link href="/about" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Our Story
            </Link>
            <Link href="/contact" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-paper/50">Legal</p>
            <Link href="/legal/privacy" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Terms &amp; Conditions
            </Link>
            <Link href="/legal/shipping" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Shipping Policy
            </Link>
            <Link href="/legal/refunds" className="text-sm transition-opacity duration-250 hover:opacity-60">
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-[11px] uppercase tracking-widest2 text-paper/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} MINIMAL.</span>
          <span>wearminimal.eu</span>
        </div>
      </div>
    </footer>
  );
}
