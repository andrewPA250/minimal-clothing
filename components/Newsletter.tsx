"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a real ESP (Klaviyo, etc). No-op placeholder for MVP.
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="border-b border-line bg-ink text-paper">
      <div className="container-px mx-auto max-w-container py-24 text-center sm:py-28">
        <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Be First.
        </h2>
        <p className="mx-auto mt-4 max-w-sm font-body text-sm text-paper/70">
          New designs are in progress. Subscribers see them before anyone
          else.
        </p>

        {submitted ? (
          <p className="mt-8 font-mono text-xs uppercase tracking-widest2">
            You&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border border-paper/30 bg-transparent px-4 py-3.5 font-mono text-sm placeholder:text-paper/40 transition-colors duration-250 focus:border-paper"
            />
            <button
              type="submit"
              className="border border-paper bg-paper px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors duration-250 hover:bg-ink hover:text-paper"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-paper/40">
          No spam. Just new drops.
        </p>
      </div>
    </section>
  );
}
