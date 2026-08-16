import cta from "@/assets/cta-evening.jpg";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-ink-foreground md:py-36">
      <img
        src={cta}
        alt="Modernes Haus mit Photovoltaikanlage in der Abendstimmung"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.16_0.02_258/0.92)_0%,oklch(0.16_0.02_258/0.6)_60%,oklch(0.16_0.02_258/0.35)_100%)]"
        aria-hidden
      />
      <div className="container-eht max-w-3xl">
        <Reveal as="h2" className="display-2">
          Bereit für Ihre eigene Energie?
        </Reveal>
        <Reveal as="p" delay={100} className="mt-5 text-lg leading-relaxed text-ink-foreground/80">
          Lassen Sie uns gemeinsam herausfinden, welche Energielösung zu Ihrem Zuhause oder Unternehmen passt.
        </Reveal>
        <Reveal delay={180} className="mt-9">
          <CtaButton href="#kontakt" size="lg">
            Jetzt kostenlos beraten lassen
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
