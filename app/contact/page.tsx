"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a real form handler / email service.
    setSubmitted(true);
  }

  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="max-w-md">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-muted" aria-hidden="true" />
          Contact
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Get in touch
        </h1>
        <p className="mt-4 font-body text-base leading-relaxed text-muted">
          Questions about an order, sizing, or anything else — we read every
          message.
        </p>

        {submitted ? (
          <p className="mt-10 font-mono text-sm uppercase tracking-widest2">
            Message sent. We&apos;ll reply within 1–2 business days.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="eyebrow mb-2 block text-muted"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="eyebrow mb-2 block text-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="eyebrow mb-2 block text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm transition-colors duration-250 focus:border-ink"
              />
            </div>
            <Button type="submit" className="w-fit">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
