"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { href: "/shop", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative py-1 transition-colors duration-250 ${
        isActive ? "text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-250 group-hover:scale-x-100 ${
          isActive ? "scale-x-100" : ""
        }`}
      />
    </Link>
  );
}

export function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-px mx-auto flex max-w-container items-center justify-between py-5">
        <Link
          href="/"
          className="font-display text-xl font-bold uppercase tracking-wide"
        >
          MINIMAL.
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest2 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={openCart}
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="font-mono text-xs uppercase tracking-widest2 text-muted transition-colors duration-250 hover:text-ink"
          >
            Bag ({itemCount})
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative flex h-5 w-6 flex-col items-center justify-center gap-[5px] transition-opacity duration-250 hover:opacity-60 md:hidden"
          >
            <span
              className={`block h-px w-full bg-ink transition-transform duration-250 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-ink transition-transform duration-250 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[73px] z-30 border-b border-line bg-paper transition-[max-height,opacity] duration-250 md:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-73px)] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="container-px flex flex-col py-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between border-b border-line py-5 font-display text-2xl uppercase tracking-wide transition-colors duration-250 last:border-b-0 ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
