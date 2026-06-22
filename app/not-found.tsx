import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px mx-auto max-w-container py-20 text-center sm:py-32">
      <p className="eyebrow mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-6 bg-muted" aria-hidden="true" />
        404
      </p>
      <h1 className="font-display text-4xl uppercase tracking-wide">
        Nothing here.
      </h1>
      <p className="mx-auto mt-4 max-w-sm font-body text-base text-muted">
        Which, in fairness, is on brand. The page you&apos;re looking for
        doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block font-mono text-xs uppercase tracking-widest2 underline transition-opacity duration-250 hover:opacity-60"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
