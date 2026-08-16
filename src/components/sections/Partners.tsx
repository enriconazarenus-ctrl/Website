import { Reveal } from "@/components/Reveal";
import { partners } from "@/lib/site";

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section id="partner" className="section-y bg-surface">
      <div className="container-eht">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow">
              <span className="brand-rule inline-block h-px w-8" aria-hidden />
              Partner
            </Reveal>
            <Reveal as="h2" delay={80} className="display-2 mt-5">
              Technologie von starken Partnern.
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Wir arbeiten mit etablierten Herstellern zusammen – für Komponenten, die langfristig zuverlässig
            funktionieren.
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden" aria-label="Partnerhersteller">
        <div className="flex w-max gap-4 [animation:eht-marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group flex min-w-[16rem] flex-col justify-center gap-1 rounded-xl border border-line bg-card px-8 py-7 transition-colors duration-500 hover:border-brand/40"
            >
              <span className="font-display text-2xl font-semibold text-muted-foreground transition-colors duration-500 group-hover:text-brand">
                {p.name}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground/70">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
