import { Check } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export type ProductPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  paragraphs: string[];
  bullets: string[];
};

export function ProductPage({ eyebrow, title, intro, image, alt, paragraphs, bullets }: ProductPageProps) {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-36 text-ink-foreground md:pb-28 md:pt-44">
        <img src={image} alt={alt} width={1024} height={1024} className="absolute inset-0 -z-10 size-full object-cover opacity-40" />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.16_0.02_258/0.9),oklch(0.16_0.02_258/0.75))]"
          aria-hidden
        />
        <div className="container-eht max-w-3xl">
          <p className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="display-1 mt-5">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-foreground/80">{intro}</p>
          <div className="mt-9">
            <CtaButton href="/#kontakt" size="lg">
              Kostenlos beraten lassen
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-eht grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <Reveal as="p" key={p.slice(0, 24)} delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <ul className="space-y-4 rounded-2xl border border-line bg-card p-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
