"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductImage } from "@/components/ProductImage";
import { Button } from "@/components/Button";

const SUPPORT_EMAIL = "support@wearminimal.eu";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [isOrderRelated, setIsOrderRelated] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const orderNumber = data.get("orderNumber")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    if (isOrderRelated && !orderNumber) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          isOrderRelated,
          orderNumber,
          message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
      setIsOrderRelated(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start md:gap-16 lg:gap-24">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-muted" aria-hidden="true" />
            Contact
          </p>
          <h1 className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Questions about an order, sizing, shipping, or product issues?
            Send us a message and we&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="mt-8 border border-line p-6">
            <p className="eyebrow mb-4">Before You Write</p>
            <p className="font-body text-sm leading-relaxed text-muted">
              For damaged, defective, incorrect items or missing deliveries,
              include your order number and a short description of the
              issue.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted">
              If your item arrived damaged or defective, please email photos
              of the product and packaging so we can review the issue and
              request a replacement through our production partner.
            </p>
            <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 font-mono text-xs uppercase tracking-widest2 text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-ink underline decoration-line underline-offset-2 transition-colors duration-250 hover:decoration-ink"
              >
                {SUPPORT_EMAIL}
              </a>
              <span>We usually reply within 1–2 business days.</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="eyebrow mb-2 block text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-2 block text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>

            <label
              htmlFor="isOrderRelated"
              className="flex w-fit cursor-pointer items-center gap-3"
            >
              <input
                id="isOrderRelated"
                type="checkbox"
                checked={isOrderRelated}
                onChange={(e) => setIsOrderRelated(e.target.checked)}
                className="h-4 w-4 border border-line accent-ink"
              />
              <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
                This message is about an order
              </span>
            </label>

            {isOrderRelated && (
              <div>
                <label
                  htmlFor="orderNumber"
                  className="eyebrow mb-2 block text-muted"
                >
                  Order Number
                </label>
                <input
                  id="orderNumber"
                  name="orderNumber"
                  type="text"
                  required
                  className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
                />
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                  Required for damaged items, missing deliveries, incorrect
                  products or order questions.
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className="eyebrow mb-2 block text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>

            <Button
              type="submit"
              className="w-fit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                Message sent. We&apos;ll get back to you within 1–2 business
                days.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                Something went wrong. Please email {SUPPORT_EMAIL} directly.
              </p>
            )}
          </form>
        </div>

        <div className="md:pt-2">
          <Link href="/product/virtus-tee" className="group block">
            <ProductImage
              src="/products/virtus-tee/back-black.jpg"
              alt="MINIMAL. Virtus Tee — back detail"
              className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] transition-opacity duration-250 group-hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
