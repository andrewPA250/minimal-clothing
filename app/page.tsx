import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export default function HomePage() {
  const products = getAllProducts();

  return (
    <>
      <Hero />

      <section className="border-b border-line">
        <div className="container-px mx-auto max-w-container py-20 sm:py-28 md:py-32">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-muted" aria-hidden="true" />
            Philosophy
          </p>
          <h2 className="max-w-lg font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
            Less, but better.
          </h2>
          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-muted">
            We design for what stays. No noise, no trends — just clean lines,
            considered fabric, and pieces built to outlast the season. Two
            colors. One standard.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-px mx-auto max-w-container py-20 sm:py-28 md:py-32">
          <div className="mb-12 flex items-end justify-between border-b border-line pb-7 sm:mb-16 sm:pb-8">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-muted" aria-hidden="true" />
                Shop
              </p>
              <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
                The Collection
              </h2>
            </div>
            <span className="hidden font-mono text-xs uppercase tracking-widest2 text-muted sm:inline">
              {String(products.length).padStart(2, "0")} Pieces
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
