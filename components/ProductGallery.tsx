import { Color } from "@/lib/types";
import { ProductImage } from "./ProductImage";

type ProductGalleryProps = {
  images: string[];
  productName: string;
  color: Color;
  index: string;
};

// Shows every image available for the selected color — main shot plus
// however many more exist, scaling the thumbnail grid to fit (no fixed
// count of "front/back only").
export function ProductGallery({
  images,
  productName,
  color,
  index,
}: ProductGalleryProps) {
  const [main, ...rest] = images;

  return (
    <div className="flex flex-col gap-3">
      {main && (
        <div className="group">
          <ProductImage
            src={main}
            alt={`${productName} — ${color}, image 1`}
            index={index}
            zoomOnGroupHover
            priority
            className="aspect-[3/4] transition-colors duration-250 group-hover:border-ink md:aspect-[4/5]"
          />
        </div>
      )}
      {rest.length > 0 && (
        <div
          className={`grid gap-3 ${
            rest.length >= 3 ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {rest.map((src, i) => (
            <div key={src} className="group">
              <ProductImage
                src={src}
                alt={`${productName} — ${color}, image ${i + 2}`}
                zoomOnGroupHover
                className="transition-colors duration-250 group-hover:border-ink"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
