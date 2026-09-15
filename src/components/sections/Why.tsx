import { Headphones, ShieldCheck, UserRoundCog } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: UserRoundCog,
    title: "Ein fester Ansprechpartner",
    text: "Eine Person kennt Ihr Projekt, bündelt Ihre Fragen und begleitet Sie vom ersten Gespräch bis zur Inbetriebnahme.",
  },
  {
    icon: ShieldCheck,
    title: "Verständlich geplant",
    text: "Wir erklären unsere Empfehlung nachvollziehbar und dimensionieren Ihre Wärmepumpe passend zu Gebäude, Bedarf und Alltag.",
  },
  {
    icon: Headphones,
    title: "Auch danach erreichbar",
    text: "Nach Einbau und Einweisung bleiben wir Ihr Ansprechpartner für Fragen, Service und die langfristige Betreuung Ihrer Anlage.",
  },
];

export function Why() {
  return (
    <section id="warum" className="section-y bg-ink text-ink-foreground">
      <div className="container-eht">
        <div className="max-w-3xl">
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            So arbeiten wir
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Bei uns bleibt Technik persönlich.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 110} className="h-full">
                <article className="group flex h-full flex-col gap-5 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/[0.03] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/45 hover:bg-ink-foreground/[0.07]">
                  <span className="flex size-12 items-center justify-center rounded-full border border-brand/40 text-brand transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="display-3">{item.title}</h3>
                  <p className="text-[0.975rem] leading-relaxed text-ink-foreground/65 transition-colors duration-500 group-hover:text-ink-foreground/85">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
