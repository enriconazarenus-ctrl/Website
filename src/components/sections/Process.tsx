import { Reveal } from "@/components/Reveal";

const steps = [
  { n: "01", t: "Beratung", d: "Wir hören zu, analysieren Ihren Bedarf und zeigen realistische Möglichkeiten auf." },
  { n: "02", t: "Planung", d: "Individuelle Auslegung von Anlage, Speicher und Wärmetechnik – transparent kalkuliert." },
  { n: "03", t: "Installation", d: "Fachgerechte Montage durch erfahrene Fachkräfte, koordiniert aus einer Hand." },
  { n: "04", t: "Inbetriebnahme", d: "Anmeldung, Einrichtung und Einweisung, bis alles zuverlässig läuft." },
  { n: "05", t: "Service", d: "Wartung und Support – auch außerhalb der üblichen Geschäftszeiten." },
];

export function Process() {
  return (
    <section className="section-y bg-surface">
      <div className="container-eht">
        <div className="max-w-3xl">
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Alles aus einer Hand
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Von der ersten Idee bis zur fertigen Energielösung.
          </Reveal>
          <Reveal as="p" delay={150} className="lead mt-5">
            Planung, Installation und Wartung erfolgen bei uns aus einer Hand – transparent, innovativ und
            kundenorientiert.
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="h-full">
              <li className="group relative flex h-full flex-col gap-3 bg-card p-7 transition-colors duration-500 hover:bg-accent/60">
                <span className="font-display text-4xl font-semibold text-line transition-colors duration-500 group-hover:text-brand">
                  {s.n}
                </span>
                <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
