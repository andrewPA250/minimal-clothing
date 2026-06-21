import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest2 font-mono transition-colors duration-250 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-paper hover:text-ink border border-ink"
      : "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
