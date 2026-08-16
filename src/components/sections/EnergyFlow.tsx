import { useEffect, useRef, useState } from "react";
import { Sun, PanelTop, BatteryCharging, Home, Thermometer, Car } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Sun, title: "Sonne", text: "Sonnenenergie trifft auf Ihr Dach – kostenlos und unbegrenzt verfügbar." },
  { icon: PanelTop, title: "Photovoltaik", text: "Die Module wandeln Sonnenlicht in Strom für Ihren Haushalt um." },
  { icon: BatteryCharging, title: "Stromspeicher", text: "Überschüssige Energie wird gespeichert statt eingespeist." },
  { icon: Home, title: "Zuhause", text: "Ihr Haushalt nutzt zuerst den eigenen, günstigen Solarstrom." },
  { icon: Thermometer, title: "Wärmepumpe", text: "Heizung und Warmwasser laufen effizient mit eigener Energie." },
  { icon: Car, title: "Elektroauto", text: "Ihr Fahrzeug lädt mit dem Strom vom eigenen Dach." },
];

export function EnergyFlow() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length * 1.02)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="system" className="bg-ink text-ink-foreground">
      <div ref={wrapRef} className="relative h-[420vh] lg:h-[520vh]">
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-24">
          <div
            className="pointer-events-none absolute -right-40 top-1/4 size-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.70_0.176_52/0.18),transparent_65%)]"
            aria-hidden
          />
          <div className="container-eht relative grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">
                <span className="brand-rule inline-block h-px w-8" aria-hidden />
                Ihr Energiesystem
              </p>
              <h2 className="display-2 mt-5">Aus Sonne wird Energie.</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-foreground/70">
                Alle Komponenten greifen ineinander – geplant, installiert und aufeinander abgestimmt von
                EnergieHeizTechnik.
              </p>

              <div className="mt-10 min-h-[7rem] max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Schritt {String(active + 1).padStart(2, "0")}
                </p>
                <h3 className="display-3 mt-3">{steps[active].title}</h3>
                <p className="mt-2 leading-relaxed text-ink-foreground/70">{steps[active].text}</p>
              </div>

              <div className="mt-8 h-px w-full max-w-md bg-ink-foreground/15">
                <div
                  className="brand-rule h-px transition-all duration-700 ease-out"
                  style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>

            <ol className="relative grid gap-3 sm:grid-cols-2">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const on = i <= active;
                return (
                  <li
                    key={s.title}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border p-4 transition-all duration-700 sm:p-5",
                      on
                        ? "border-brand/45 bg-ink-foreground/[0.06]"
                        : "border-ink-foreground/10 bg-transparent opacity-45",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-full transition-all duration-700",
                        on ? "bg-brand text-brand-foreground" : "bg-ink-foreground/10 text-ink-foreground/60",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-semibold">{s.title}</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
