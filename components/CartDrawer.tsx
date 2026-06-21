"use client";

import Image from "next/image";
import { useCart } from "./CartContext";
import { Button } from "./Button";
import { getProductBySlug } from "@/lib/products";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeLine, updateQuantity, subtotal } =
    useCart();
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (!isOpen) setShowComingSoon(false);
  }, [isOpen]);

  function handleCheckout() {
    // Checkout is not wired up yet — no Stripe session, no real order.
    // This just surfaces an honest placeholder instead of pretending an
    // order went through.
    setShowComingSoon(true);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-250 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper transition-transform duration-250 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-sm uppercase tracking-widest2">
            Bag ({lines.reduce((n, l) => n + l.quantity, 0)})
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="font-mono text-xs uppercase tracking-widest2 transition-opacity duration-250 hover:opacity-60"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="font-mono text-sm text-muted">
              Your bag is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {lines.map((line) => {
                const product = getProductBySlug(line.productSlug);
                const thumbSrc = product?.images[line.color]?.[0];
                return (
                <li
                  key={line.variantId}
                  className="flex gap-4 border-b border-line pb-6"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden border border-line bg-paper">
                    {thumbSrc && (
                      <Image
                        src={thumbSrc}
                        alt={`${line.productName} — ${line.color}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-display text-sm uppercase tracking-wide">
                      {line.productName}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                      {line.color} / {line.size}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() =>
                          updateQuantity(line.variantId, line.quantity - 1)
                        }
                        className="border border-line px-2 font-mono text-xs transition-colors duration-250 hover:border-ink hover:bg-ink hover:text-paper"
                      >
                        −
                      </button>
                      <span className="font-mono text-xs">
                        {line.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateQuantity(line.variantId, line.quantity + 1)
                        }
                        className="border border-line px-2 font-mono text-xs transition-colors duration-250 hover:border-ink hover:bg-ink hover:text-paper"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-mono text-sm">
                      €{(line.price * line.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeLine(line.variantId)}
                      className="font-mono text-[11px] uppercase tracking-widest2 text-muted transition-colors duration-250 hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-line px-6 py-6">
            <div className="mb-4 flex items-center justify-between font-mono text-sm">
              <span className="uppercase tracking-widest2 text-muted">
                Subtotal
              </span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            {showComingSoon ? (
              <p className="border border-line px-4 py-4 text-center font-mono text-xs uppercase tracking-widest2 text-muted">
                Checkout coming soon.
              </p>
            ) : (
              <Button className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
            )}
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Taxes &amp; shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
