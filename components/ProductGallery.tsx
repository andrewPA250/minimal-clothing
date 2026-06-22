"use client";

import { useEffect, useState } from "react";
import { Color } from "@/lib/types";
import { ProductImage } from "./ProductImage";
import { ImageLightbox } from "./ImageLightbox";

type ProductGalleryProps = {
  images: string[];
  productName: string;
  color: Color;
  index: string;
};

// Shows every image available for the selected color — main shot plus
// however many more exist, scaling the thumbnail grid to fit (no fixed
// count of "front/back only"). Clicking any image opens a fullscreen
// lightbox to browse all of that color's images.
export function ProductGallery({
  images,
  productName,
  color,
  index,
}: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [main, ...rest] = images;

  // The image set changes when the user picks a different color — close
  // any open lightbox rather than risk it pointing at a stale index.
  useEffect(() => {
    setLightboxIndex(null);
  }, [images]);

  return (
    <div className="flex flex-col gap-3">
      {main && (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View ${productName} — ${color}, image 1 of ${images.length}`}
          className="group block w-full cursor-zoom-in text-left"
        >
          <ProductImage
            src={main}
            alt={`${productName} — ${color}, image 1`}
            index={index}
            zoomOnGroupHover
            priority
            className="transition-colors duration-250 group-hover:border-ink"
          />
        </button>
      )}
      {rest.length > 0 && (
        <div
          className={`grid gap-3 ${
            rest.length >= 3 ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {rest.map((src, i) => (
            <button
              type="button"
              key={src}
              onClick={() => setLightboxIndex(i + 1)}
              aria-label={`View ${productName} — ${color}, image ${i + 2} of ${images.length}`}
              className="group block cursor-zoom-in text-left"
            >
              <ProductImage
                src={src}
                alt={`${productName} — ${color}, image ${i + 2}`}
                zoomOnGroupHover
                className="transition-colors duration-250 group-hover:border-ink"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          alt={`${productName} — ${color}`}
        />
      )}
    </div>
  );
}
