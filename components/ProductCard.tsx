import Link from "next/link";
import { Product } from "@/lib/types";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const primarySrc = product.images[product.primaryColor]![0];

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative">
        <ProductImage
          src={primarySrc}
          alt={`${product.name} — ${product.primaryColor}`}
          index={product.index}
          zoomOnGroupHover
          className="transition-colors duration-[400ms] ease-out group-hover:border-ink"
        />
        <span className="absolute bottom-4 right-4 translate-y-1 bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-paper opacity-0 transition-[opacity,transform] duration-250 group-hover:translate-y-0 group-hover:opacity-90">
          View Product
        </span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4 border-t border-line pt-4">
        <div>
          <p className="font-display text-base uppercase tracking-wide transition-colors duration-250 group-hover:text-muted">
            {product.name}
          </p>
          <p className="mt-1.5 font-body text-sm italic leading-snug text-muted">
            {product.shortDescription}
          </p>
        </div>
        <span className="font-mono text-sm shrink-0">
          €{product.basePrice.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
