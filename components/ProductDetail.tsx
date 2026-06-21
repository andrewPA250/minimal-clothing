"use client";

import { useState } from "react";
import { Product, Color } from "@/lib/types";
import { ProductGallery } from "./ProductGallery";
import { AddToCartForm } from "./AddToCartForm";

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState<Color>(product.primaryColor);
  const images = product.images[color] ?? [];

  return (
    <div className="grid grid-cols-1 gap-10 sm:gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
      <ProductGallery
        images={images}
        productName={product.name}
        color={color}
        index={product.index}
      />

      <div className="flex flex-col py-2 md:max-w-md">
        <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
          {product.index}
        </p>
        <h1 className="mt-3 font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 font-mono text-lg">
          €{product.basePrice.toFixed(2)}
        </p>

        <p className="mt-7 font-body text-base leading-relaxed text-muted">
          {product.description}
        </p>

        <div className="mt-10 border-t border-line pt-10">
          <AddToCartForm
            product={product}
            color={color}
            onColorChange={setColor}
          />
        </div>

        <details className="group mt-12 border-t border-line pt-6">
          <summary className="flex cursor-pointer list-none items-center justify-between font-mono text-xs uppercase tracking-widest2 transition-colors duration-250 hover:text-muted">
            Material &amp; Care
            <span className="font-body text-base leading-none transition-transform duration-250 group-open:rotate-45">
              +
            </span>
          </summary>
          <ul className="mt-5 flex flex-col gap-2.5">
            {product.details.map((d) => (
              <li key={d} className="font-body text-sm text-muted">
                {d}
              </li>
            ))}
          </ul>
        </details>

        <p className="mt-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest2 text-muted">
          Ships from the EU within 2–4 business days
        </p>
      </div>
    </div>
  );
}
