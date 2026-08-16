import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-eht-light.svg";
import { company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-eht grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <img src={logo} alt="EnergieHeizTechnik Logo" width={1123} height={390} loading="lazy" className="h-10 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
            Ganzheitliche Energielösungen aus einer Hand – Photovoltaik, Stromspeicher, Wärmepumpe und Wallbox.
            Persönlich, transparent und zukunftsorientiert.
          </p>
          <address className="mt-6 space-y-2 text-sm not-italic text-ink-muted">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-brand" aria-hidden />
              <span>
                {company.name}
                <br />
                {company.street}, {company.city}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-brand" aria-hidden />
              <a className="transition-colors hover:text-ink-foreground" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer Navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Über uns", href: "/#ueber-uns" },
              { label: "Leistungen", href: "/#system" },
              { label: "Warum wir", href: "/#warum" },
              { label: "Partner", href: "/#partner" },
              { label: "Kontakt", href: "/#kontakt" },
            ].map((i) => (
              <li key={i.href}>
                <a className="text-ink-foreground/80 transition-colors hover:text-brand" href={i.href}>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Produkte</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Photovoltaik", to: "/photovoltaik" },
              { label: "Stromspeicher", to: "/stromspeicher" },
              { label: "Wärmepumpe", to: "/waermepumpe" },
              { label: "Wallbox", to: "/wallbox" },
            ].map((i) => (
              <li key={i.to}>
                <Link className="text-ink-foreground/80 transition-colors hover:text-brand" to={i.to}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Rechtliches</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link className="text-ink-foreground/80 transition-colors hover:text-brand" to="/impressum">
                Impressum
              </Link>
            </li>
            <li>
              <Link className="text-ink-foreground/80 transition-colors hover:text-brand" to="/datenschutz">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-eht flex flex-col gap-2 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          <p>{company.court} · {company.hrb}</p>
        </div>
      </div>
    </footer>
  );
}
