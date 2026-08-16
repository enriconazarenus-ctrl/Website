import { Check } from "lucide-react";
import hero from "@/assets/hero-house.jpg";
import { CtaButton } from "@/components/CtaButton";

const trust = [
  "Persönliche Beratung",
  "Planung & Installation aus einer Hand",
  "Hochwertige Komponenten",
  "Langfristiger Service",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-14 pt-32 md:pb-20">
      <img
        src={hero}
        alt="Modernes Einfamilienhaus mit Photovoltaikanlage, Wärmepumpe und Elektrofahrzeug in der Abenddämmerung"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="animate-slow-zoom absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.16_0.02_258/0.82)_0%,oklch(0.16_0.02_258/0.45)_45%,oklch(0.16_0.02_258/0.92)_100%)]"
        aria-hidden
      />

      <div className="container-eht text-ink-foreground">
        <p className="animate-rise eyebrow" style={{ animationDelay: "80ms" }}>
          <span className="brand-rule inline-block h-px w-8" aria-hidden />
          Energielösungen aus einer Hand
        </p>

        <h1 className="animate-rise display-1 mt-6 max-w-[16ch]" style={{ animationDelay: "180ms" }}>
          Ihre Energie. Ihre Unabhängigkeit. <span className="brand-gradient-text">Ihre Zukunft.</span>
        </h1>

        <p
          className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-ink-foreground/80 md:text-xl"
          style={{ animationDelay: "320ms" }}
        >
          Intelligente Energielösungen für Ihr Zuhause und Unternehmen – von Photovoltaik und Stromspeicher bis
          Wärmepumpe und Wallbox.
        </p>

        <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "440ms" }}>
          <CtaButton href="#kontakt" size="lg">
            Kostenlos beraten lassen
          </CtaButton>
          <CtaButton href="#produkte" size="lg" variant="ghostLight">
            Energielösung entdecken
          </CtaButton>
        </div>

        <ul
          className="animate-rise mt-12 grid gap-x-8 gap-y-3 border-t border-ink-foreground/15 pt-7 text-sm text-ink-foreground/80 sm:grid-cols-2 lg:grid-cols-4"
          style={{ animationDelay: "560ms" }}
        >
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <Check className="size-4 shrink-0 text-brand" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
