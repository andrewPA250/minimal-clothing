import { Metadata } from "next";
import { ProductImage } from "@/components/ProductImage";

export const metadata: Metadata = {
  title: "About — MINIMAL.",
};

export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start md:gap-16 lg:gap-24">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-muted" aria-hidden="true" />
            About
          </p>
          <h1 className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl">
            Less Noise. More Purpose.
          </h1>
          <p className="mt-8 font-body text-base leading-relaxed text-muted">
            MINIMAL. was created around a simple idea: less noise, more
            purpose.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            We believe clothing should be timeless, versatile and built to
            last. Every piece is designed with simplicity at its core, proving
            that the strongest statement is often the simplest one.
          </p>

          <p className="mt-10 font-display text-xl uppercase leading-snug tracking-wide text-ink sm:text-2xl">
            No trends. No distractions.
            <br />
            Just the essentials.
          </p>

          <p className="mt-6 font-display text-xl uppercase tracking-[0.2em] text-muted">
            Simplicity Wins.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            {["No Trends", "No Distractions", "Timeless", "Built To Last"].map(
              (v) => (
                <p
                  key={v}
                  className="font-mono text-xs uppercase tracking-widest2 text-muted"
                >
                  {v}
                </p>
              )
            )}
          </div>
        </div>

        <div className="md:pt-2">
          <ProductImage
            src="/products/signature-tee/back-black.jpg"
            alt="MINIMAL. Signature Tee — Simplicity Wins."
            className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
          />
        </div>
      </div>
    </div>
  );
}
