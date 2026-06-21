"use client";

import { useState } from "react";
import { Product, Color, Size } from "@/lib/types";
import { useCart } from "./CartContext";
import { Button } from "./Button";

const SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

// Swatch fill per color — stays within the black/white/grey palette.
const SWATCH_CLASS: Record<Color, string> = {
  Black: "bg-ink",
  White: "bg-paper",
  "Sport Grey": "bg-[#A3A3A3]",
  "Dark Heather": "bg-[#3D3D3D]",
};

type AddToCartFormProps = {
  product: Product;
  color: Color;
  onColorChange: (color: Color) => void;
};

export function AddToCartForm({
  product,
  color,
  onColorChange,
}: AddToCartFormProps) {
  const colors = Object.keys(product.images) as Color[];
  const [size, setSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const { addLine, openCart } = useCart();

  const variant = product.variants.find(
    (v) => v.color === color && v.size === size
  );

  function handleAddToCart() {
    if (!size) {
      setSizeError(true);
      return;
    }
    const v = product.variants.find(
      (v) => v.color === color && v.size === size
    );
    if (!v) return;

    addLine({
      variantId: v.id,
      productSlug: product.slug,
      productName: product.name,
      color: v.color,
      size: v.size,
      price: v.price,
      quantity: 1,
    });
    openCart();
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="eyebrow mb-4">Color — {color}</p>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => onColorChange(c)}
              aria-pressed={color === c}
              aria-label={c}
              className={`flex h-11 w-11 items-center justify-center border transition-all duration-250 ${
                color === c
                  ? "border-ink ring-1 ring-ink ring-offset-2 ring-offset-paper"
                  : "border-line hover:border-ink hover:scale-105"
              }`}
            >
              <span
                className={`h-6 w-6 rounded-full border border-line ${SWATCH_CLASS[c]}`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="eyebrow">Size</p>
          <button className="font-mono text-[11px] uppercase tracking-widest2 text-muted underline decoration-line underline-offset-2 transition-colors duration-250 hover:text-ink hover:decoration-ink">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSize(s);
                setSizeError(false);
              }}
              aria-pressed={size === s}
              className={`h-12 w-12 border font-mono text-xs uppercase transition-all duration-250 ${
                size === s
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink hover:border-ink hover:bg-ink/[0.03]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {sizeError && (
          <p className="mt-3 font-mono text-xs text-ink">
            Select a size to continue.
          </p>
        )}
      </div>

      <Button onClick={handleAddToCart} className="w-full sm:w-auto">
        Add to Bag — €{(variant?.price ?? product.basePrice).toFixed(2)}
      </Button>
    </div>
  );
}
