"use client";

import { useEffect } from "react";
import { SizeChart } from "@/lib/types";

type SizeRow = {
  size: string;
  width: string;
  length: string;
  sleeve: string;
  tolerance: string;
};

const REGULAR_ROWS: SizeRow[] = [
  { size: "XS", width: "47.50", length: "65.00", sleeve: "21.00", tolerance: "2.54" },
  { size: "S", width: "49.50", length: "69.00", sleeve: "22.50", tolerance: "2.54" },
  { size: "M", width: "53.50", length: "73.00", sleeve: "24.00", tolerance: "2.54" },
  { size: "L", width: "56.50", length: "75.00", sleeve: "24.50", tolerance: "2.54" },
  { size: "XL", width: "59.50", length: "77.00", sleeve: "25.00", tolerance: "2.54" },
  { size: "2XL", width: "63.50", length: "79.00", sleeve: "25.50", tolerance: "2.54" },
  { size: "3XL", width: "67.50", length: "81.00", sleeve: "26.00", tolerance: "2.54" },
];

const GILDAN_ROWS: SizeRow[] = [
  { size: "S", width: "45.72", length: "71.12", sleeve: "38.35", tolerance: "3.81" },
  { size: "M", width: "50.80", length: "73.66", sleeve: "41.91", tolerance: "3.81" },
  { size: "L", width: "55.88", length: "76.20", sleeve: "45.72", tolerance: "3.81" },
  { size: "XL", width: "60.96", length: "78.74", sleeve: "49.53", tolerance: "3.81" },
  { size: "2XL", width: "66.04", length: "81.28", sleeve: "53.34", tolerance: "3.81" },
  { size: "3XL", width: "71.12", length: "83.82", sleeve: "56.90", tolerance: "3.81" },
  { size: "4XL", width: "76.20", length: "86.36", sleeve: "60.20", tolerance: "3.81" },
  { size: "5XL", width: "81.28", length: "88.90", sleeve: "63.50", tolerance: "3.81" },
];

export function SizeGuideModal({
  sizeChart,
  onClose,
}: {
  sizeChart: SizeChart;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const rows = sizeChart === "gildan5000" ? GILDAN_ROWS : REGULAR_ROWS;
  const sleeveLabel =
    sizeChart === "gildan5000"
      ? "Sleeve length from center back (cm)"
      : "Sleeve length (cm)";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Size guide"
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col border border-line bg-paper">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-sm uppercase tracking-widest2">
            Size Guide
          </h2>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="font-mono text-xs uppercase tracking-widest2 transition-opacity duration-250 hover:opacity-60"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                    Size
                  </th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                    Width (cm)
                  </th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                    Length (cm)
                  </th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                    {sleeveLabel}
                  </th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                    Tolerance (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.size} className="border-b border-line last:border-b-0">
                    <td className="py-3 pr-4 font-mono text-sm">{r.size}</td>
                    <td className="py-3 pr-4 font-body text-sm text-muted">
                      {r.width}
                    </td>
                    <td className="py-3 pr-4 font-body text-sm text-muted">
                      {r.length}
                    </td>
                    <td className="py-3 pr-4 font-body text-sm text-muted">
                      {r.sleeve}
                    </td>
                    <td className="py-3 font-body text-sm text-muted">
                      {r.tolerance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Measurements may vary slightly depending on the blank and
            production batch.
          </p>
        </div>
      </div>
    </div>
  );
}
