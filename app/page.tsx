import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { getAllProducts } from "@/lib/products";

export default function HomePage() {
  const products = getAllProducts();

  return (
    <>
      <Hero />

      <section className="border-b border-line">
        <div className="container-px mx-auto max-w-container py-20 sm:py-28 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
            <ProductImage
              src="/products/virtus-tee/back-white.jpg"
              alt="MINIMAL. Virtus Tee — back detail"
              className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
            />

            <div className="max-w-md">
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-muted" aria-hidden="true" />
                Philosophy
              </p>
              <h2 className="font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
                Less, but better.
              </h2>
              <p className="mt-8 font-body text-base leading-relaxed text-muted">
                We design for what stays. No noise, no trends — just clean
                lines, considered fabric, and pieces built to outlast the
                season. Two colors. One standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-px mx-auto max-w-container py-20 sm:py-28 md:py-32">
          <div className="mb-12 flex flex-col gap-8 border-b border-line pb-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-8">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-muted" aria-hidden="true" />
                Products
              </p>
              <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
                Drop 001
              </h2>
              <p className="mt-3 font-body text-sm text-muted">
                Four pieces. One standard.
              </p>
            </div>
            <Link
              href="/shop"
              className="group inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-ink underline decoration-line underline-offset-4 transition-colors duration-250 hover:decoration-ink"
            >
              View All Products
              <span className="transition-transform duration-250 group-hover:translate-x-1">
                →
              </span>
            </Link>
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
