import { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — MINIMAL.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="container-px mx-auto max-w-container py-14 sm:py-20 md:py-24">
      <p className="eyebrow mb-5 flex items-center gap-3">
        <span className="h-px w-6 bg-muted" aria-hidden="true" />
        Products
      </p>
      <h1 className="mb-14 border-b border-line pb-10 font-display text-4xl uppercase tracking-wide sm:mb-16 sm:pb-12 sm:text-5xl">
        All Products
      </h1>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
