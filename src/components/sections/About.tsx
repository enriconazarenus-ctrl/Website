import about from "@/assets/about-consultation-v1.png";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

export function About() {
  return (
    <section id="ueber-uns" className="section-y bg-background">
      <div className="container-eht grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
        <div className="group relative overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-ink/10">
          <img
            src={about}
            alt="Wärmepumpenplanung mit Bauunterlagen und zwei Kaffeetassen in einem bewohnten Zuhause"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,oklch(0.15_0.02_258/0.88)_100%)]"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Persönlich bei Ihnen geplant
            </p>
            <p className="mt-2 max-w-md font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Technik ist wichtig. Vertrauen ebenso.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/78">
              Ein gutes Gespräch, eine sorgfältige Planung und ein fester Ansprechpartner – von der
              ersten Idee bis zum zuverlässigen Betrieb.
            </p>
          </div>
        </div>

        <div>
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Menschen hinter der Technik
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Gute Wärmetechnik beginnt mit Menschen, die zuhören.
          </Reveal>
          <div className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            <Reveal as="p" delay={140}>
              Wir sind EnergieHeizTechnik aus Burgwedel: ein engagiertes Team, das moderne
              Wärmepumpen nicht einfach verkauft, sondern passend zu Ihrem Haus, Ihrem Verbrauch und
              Ihrem Alltag plant.
            </Reveal>
            <Reveal as="p" delay={210}>
              Bei uns sprechen Sie nicht bei jedem Schritt mit jemand anderem. Ein fester
              Ansprechpartner behält Ihr Vorhaben im Blick, beantwortet Ihre Fragen verständlich und
              koordiniert die nächsten Schritte mit unserem Team.
            </Reveal>
            <Reveal as="p" delay={280}>
              Von der Bestandsaufnahme bis zur Inbetriebnahme verbinden wir saubere Handwerksarbeit
              mit ehrlicher Beratung. Und auch danach bleiben wir für Service und Wartung
              erreichbar.
            </Reveal>
          </div>

          <Reveal
            delay={340}
            className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
          >
            {[
              { k: "Fester Kontakt", v: "Eine persönliche Begleitung" },
              { k: "Wärmepumpe im Fokus", v: "Passend zu Haus und Alltag" },
              { k: "Regional verbunden", v: "Burgwedel und Umgebung" },
            ].map((s) => (
              <div key={s.k} className="bg-card p-5">
                <p className="font-display text-base font-semibold">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={400} className="mt-9">
            <CtaButton href="#kontakt" variant="ink">
              Persönliches Gespräch vereinbaren
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
