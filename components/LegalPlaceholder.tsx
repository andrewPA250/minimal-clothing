export function LegalPlaceholder({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <div className="container-px mx-auto max-w-container py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          {title}
        </h1>
        <p className="mt-6 font-body text-base text-muted">{note}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-muted">
          Placeholder — finalize before public launch.
        </p>
      </div>
    </div>
  );
}
