import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const cta = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-foreground shadow-[0_10px_30px_-12px_oklch(0.70_0.176_52/0.75)] hover:-translate-y-0.5 hover:brightness-105",
        outline:
          "border border-line bg-transparent text-foreground hover:border-brand hover:text-brand",
        ghostLight:
          "border border-ink-foreground/25 text-ink-foreground hover:border-ink-foreground/60 hover:bg-ink-foreground/10",
        ink: "bg-ink text-ink-foreground hover:-translate-y-0.5 hover:bg-ink/90",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "brand", size: "md" },
  },
);

type Props = VariantProps<typeof cta> & {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
  ariaLabel?: string;
};

export function CtaButton({
  children,
  className,
  variant,
  size,
  to,
  href,
  onClick,
  type = "button",
  arrow = true,
  ariaLabel,
}: Props) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      )}
    </>
  );
  const classes = cn(cta({ variant, size }), className);

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
