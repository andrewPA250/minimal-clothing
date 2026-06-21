"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { CartLine } from "@/lib/types";

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addLine: (line: CartLine) => void;
  removeLine: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  subtotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = "minimal.cart.lines";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load any saved cart once on mount (client only — localStorage isn't
  // available during SSR).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // Ignore corrupt/unavailable storage — start with an empty cart.
    } finally {
      setHydrated(true);
    }
  }, []);

  // Keep localStorage in sync, but only after the initial load above has
  // run — otherwise the empty initial state would overwrite a saved cart
  // before it's been read.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage full or unavailable — cart still works for this session.
    }
  }, [lines, hydrated]);

  function addLine(newLine: CartLine) {
    setLines((prev) => {
      const existing = prev.find((l) => l.variantId === newLine.variantId);
      if (existing) {
        return prev.map((l) =>
          l.variantId === newLine.variantId
            ? { ...l, quantity: l.quantity + newLine.quantity }
            : l
        );
      }
      return [...prev, newLine];
    });
    setIsOpen(true);
  }

  function removeLine(variantId: string) {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  }

  function updateQuantity(variantId: string, quantity: number) {
    if (quantity < 1) {
      removeLine(variantId);
      return;
    }
    setLines((prev) =>
      prev.map((l) => (l.variantId === variantId ? { ...l, quantity } : l))
    );
  }

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [lines]
  );

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{
        lines,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addLine,
        removeLine,
        updateQuantity,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
