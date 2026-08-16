import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import pv from "@/assets/prod-photovoltaik.jpg";
import speicher from "@/assets/prod-speicher.jpg";
import wp from "@/assets/prod-waermepumpe.jpg";
import wallbox from "@/assets/prod-wallbox.jpg";
import { Reveal } from "@/components/Reveal";

export const products = [
  {
    to: "/photovoltaik",
    title: "Photovoltaik",
    text: "Produzieren Sie Ihren eigenen Strom und machen Sie sich unabhängiger von steigenden Energiekosten.",
    cta: "Photovoltaik entdecken",
    image: pv,
    alt: "Modernes Hausdach mit vollflächiger schwarzer Photovoltaikanlage",
  },
  {
    to: "/stromspeicher",
    title: "Stromspeicher",
    text: "Speichern Sie Ihren Solarstrom und nutzen Sie ihn genau dann, wenn Sie ihn benötigen.",
    cta: "Stromspeicher entdecken",
    image: speicher,
    alt: "Moderner Batteriespeicher in einem hellen Technikraum",
  },
  {
    to: "/waermepumpe",
    title: "Wärmepumpe",
    text: "Effizient heizen und gleichzeitig unabhängiger von fossilen Energieträgern werden.",
    cta: "Wärmepumpe entdecken",
    image: wp,
    alt: "Luft-Wasser-Wärmepumpe an der Fassade eines modernen Hauses",
  },
  {
    to: "/wallbox",
    title: "Wallbox",
    text: "Laden Sie Ihr Elektrofahrzeug komfortabel und intelligent mit Ihrer eigenen Energie.",
    cta: "Wallbox entdecken",
    image: wallbox,
    alt: "Elektrofahrzeug lädt an einer Wallbox vor einem modernen Haus",
  },
];

export function Products() {
  return (
    <section id="produkte" className="section-y bg-background">
      <div className="container-eht">
        <div className="max-w-3xl">
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Produkte
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Energie neu gedacht.
          </Reveal>
          <Reveal as="p" delay={160} className="lead mt-5">
            Technologie, die Ihr Zuhause effizienter, unabhängiger und zukunftssicher macht.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.to} delay={i * 90}>
              <Link
                to={p.to}
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_70px_-40px_oklch(0.2_0.02_258/0.6)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.16_0.02_258/0.55)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col gap-4 p-7 md:p-8">
                  <h3 className="display-3">{p.title}</h3>
                  <p className="text-[0.975rem] leading-relaxed text-muted-foreground">{p.text}</p>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    {p.cta}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
