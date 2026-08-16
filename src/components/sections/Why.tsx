import { ShieldCheck, Headphones, UserRoundCog } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Höchste Qualität",
    text: "Unsere Lösungen stehen für geprüfte Technik und langlebige Qualität. Wir setzen ausschließlich auf hochwertige Komponenten namhafter Hersteller und arbeiten mit erfahrenen Fachkräften – für maximale Zuverlässigkeit und Effizienz.",
  },
  {
    icon: Headphones,
    title: "Verlässlicher Support",
    text: "Wir sind für Sie da – auch außerhalb der üblichen Geschäftszeiten. Ob telefonisch, per Mail oder persönlich: Unser Team beantwortet Ihre Fragen schnell, kompetent und individuell.",
  },
  {
    icon: UserRoundCog,
    title: "Individuelle Beratung",
    text: "Jedes Projekt ist einzigartig. Deshalb nehmen wir uns Zeit, Ihre Bedürfnisse genau zu verstehen und maßgeschneiderte Energielösungen zu entwickeln – transparent, ehrlich und zukunftsorientiert.",
  },
];

export function Why() {
  return (
    <section id="warum" className="section-y bg-ink text-ink-foreground">
      <div className="container-eht">
        <div className="max-w-3xl">
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Warum EnergieHeizTechnik
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Qualität, die man plant. Service, den man spürt.
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
