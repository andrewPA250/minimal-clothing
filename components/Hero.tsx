import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function Hero() {
  const featured = getProductBySlug("focus-tee")!;

  return (
    <section className="border-b border-line">
      <div className="container-px mx-auto grid max-w-container grid-cols-1 items-start gap-12 py-16 sm:gap-14 sm:py-24 md:grid-cols-[1.15fr_1fr] md:gap-20 md:py-32 lg:py-40">
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-6 bg-muted" aria-hidden="true" />
            Black — White — Nothing Else
          </p>
          <h1 className="font-display text-6xl font-bold uppercase leading-[0.9] tracking-wide sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            MINIMAL.
          </h1>
          <p className="mt-6 font-display text-xl uppercase tracking-[0.2em] text-muted sm:text-2xl">
            Simplicity Wins.
          </p>
          <p className="mt-8 max-w-sm font-body text-base leading-relaxed text-muted">
            The Essential range. Two tees, two colors, built to outlast the
            season they launched in.
          </p>
          <Link
            href="/shop"
            className="group mt-14 inline-flex w-fit items-center justify-center gap-3 border border-ink bg-ink px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors duration-250 hover:bg-paper hover:text-ink"
          >
            Shop Now
            <span className="transition-transform duration-250 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="flex w-full flex-col">
          <Link
            href={`/product/${featured.slug}`}
            className="group relative block"
          >
            <ProductImage
              src={featured.images[featured.primaryColor]![0]}
              alt={`${featured.name} — ${featured.primaryColor}`}
              zoomOnGroupHover
              priority
              className="transition-colors duration-[400ms] group-hover:border-ink"
            />
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest2 text-ink/60">
              {featured.index}
            </span>
            <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-widest2 text-ink/60">
              Featured
            </span>
          </Link>

          <div className="mt-5 flex items-start justify-between gap-4 border-t border-line pt-5">
            <p className="font-body text-base italic leading-snug text-muted sm:text-lg">
              {featured.shortDescription}
            </p>
            <Link
              href={`/product/${featured.slug}`}
              className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest2 text-ink underline decoration-line underline-offset-4 transition-colors duration-250 hover:decoration-ink"
            >
              Shop {featured.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
