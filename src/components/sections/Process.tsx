import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    t: "Kennenlernen",
    d: "Wir hören zu: Wie leben Sie, was ist Ihnen wichtig und welche Fragen sollen wir zuerst klären?",
  },
  {
    n: "02",
    t: "Vor Ort verstehen",
    d: "Gemeinsam betrachten wir Gebäude, Heizbedarf und mögliche Aufstellorte für Ihre Wärmepumpe.",
  },
  {
    n: "03",
    t: "Passend planen",
    d: "Sie erhalten eine nachvollziehbare Lösung, die technisch und wirtschaftlich zu Ihrem Zuhause passt.",
  },
  {
    n: "04",
    t: "Sauber umsetzen",
    d: "Unser Team koordiniert Einbau und Inbetriebnahme – verlässlich und mit Blick auf jedes Detail.",
  },
  {
    n: "05",
    t: "Erreichbar bleiben",
    d: "Wir erklären Ihnen die Anlage verständlich und sind auch danach für Service und Wartung da.",
  },
];

export function Process() {
  return (
    <section className="section-y bg-surface">
      <div className="container-eht">
        <div className="max-w-3xl">
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Gemeinsam zur Wärmepumpe
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Ein klarer Weg. Und ein Mensch, der Sie begleitet.
          </Reveal>
          <Reveal as="p" delay={150} className="lead mt-5">
            Ihr fester Ansprechpartner führt Sie verständlich durch alle Schritte. Im Hintergrund
            arbeitet unser Team gemeinsam daran, dass Ihre Wärmepumpe wirklich zu Ihnen und Ihrem
            Zuhause passt.
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
