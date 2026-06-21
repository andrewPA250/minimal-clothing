import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
  index?: string;
  className?: string;
  zoomOnGroupHover?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function ProductImage({
  src,
  alt,
  index,
  className = "",
  zoomOnGroupHover = false,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: ProductImageProps) {
  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden border border-line bg-paper ${className}`}
    >
      {index && (
        <span className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest2 text-ink/60">
          {index}
        </span>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-transform duration-[500ms] ease-out ${
          zoomOnGroupHover ? "group-hover:scale-[1.06]" : ""
        }`}
      />
    </div>
  );
}
