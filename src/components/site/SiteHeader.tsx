import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-eht.svg";
import { CtaButton } from "@/components/CtaButton";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Produkte", href: "/#produkte" },
  { label: "System", href: "/#system" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Warum wir", href: "/#warum" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-ink-foreground/10" : "bg-transparent",
      )}
    >
      <div className="container-eht flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="EnergieHeizTechnik Startseite">
          <img
            src={logo}
            alt="EnergieHeizTechnik Logo"
            width={1123}
            height={390}
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-ink-foreground/85 transition-colors hover:text-ink-foreground"
            >
              {item.label}
              <span className="brand-rule absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="/#kontakt">Beratung anfragen</CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-20 z-50 bg-ink px-6 pb-10 pt-8 lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-rise border-b border-ink-foreground/10 py-5 font-display text-2xl font-semibold text-ink-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <CtaButton href="/#kontakt" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Beratung anfragen
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
