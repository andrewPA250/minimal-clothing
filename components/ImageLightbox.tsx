"use client";

import { useEffect } from "react";
import Image from "next/image";

type ImageLightboxProps = {
  images: string[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  alt: string;
};

export function ImageLightbox({
  images,
  index,
  onIndexChange,
  onClose,
  alt,
}: ImageLightboxProps) {
  const count = images.length;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
      else if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, count, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper/60">
          {index + 1} / {count}
        </span>
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="font-mono text-xs uppercase tracking-widest2 text-paper transition-opacity duration-250 hover:opacity-60"
        >
          Close
        </button>
      </div>

      <div className="relative flex-1 px-4 pb-6 sm:px-10">
        <div
          className="relative mx-auto h-full w-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index]}
            alt={`${alt} — image ${index + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange((index - 1 + count) % count);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/40 font-display text-xl text-paper transition-colors duration-250 hover:border-paper sm:left-6"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange((index + 1) % count);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/40 font-display text-xl text-paper transition-colors duration-250 hover:border-paper sm:right-6"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
