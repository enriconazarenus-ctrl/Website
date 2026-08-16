import about from "@/assets/about-team.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

export function About() {
  return (
    <section id="ueber-uns" className="section-y bg-background">
      <div className="container-eht grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal variant="mask" className="overflow-hidden rounded-2xl">
          <img
            src={about}
            alt="Zwei Monteure von EnergieHeizTechnik installieren Solarmodule auf einem Dach"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Über EnergieHeizTechnik
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Persönlich. Kompetent. Zukunftsorientiert.
          </Reveal>
          <div className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            <Reveal as="p" delay={140}>
              Wir sind ein junges, dynamisches Unternehmen mit familiärem Charakter – offen, engagiert und mit echter
              Leidenschaft für erneuerbare Energien. Hier fühlen wir uns zuhause – und genau das macht den Unterschied.
            </Reveal>
            <Reveal as="p" delay={210}>
              Mit frischen Ideen, fundiertem Know-how und echter Nähe zum Kunden begleiten wir Privatpersonen und
              Unternehmen auf dem Weg in eine nachhaltige Zukunft.
            </Reveal>
            <Reveal as="p" delay={280}>
              Ob Photovoltaik, Stromspeicher oder Wärmepumpe – wir bieten ganzheitliche Lösungen aus einer Hand:
              persönlich, transparent und zukunftsorientiert.
            </Reveal>
          </div>

          <Reveal delay={340} className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {[
              { k: "Privat & Gewerbe", v: "Für Haushalte und Unternehmen" },
              { k: "Aus einer Hand", v: "Planung, Installation, Wartung" },
              { k: "Region Hannover", v: "Burgwedel und Umgebung" },
            ].map((s) => (
              <div key={s.k} className="bg-card p-5">
                <p className="font-display text-base font-semibold">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={400} className="mt-9">
            <CtaButton href="#kontakt" variant="ink">
              Jetzt Beratung starten
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
