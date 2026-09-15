import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Car,
  Home,
  PanelTop,
  Sun,
  Thermometer,
} from "lucide-react";
import type { CSSProperties } from "react";
import sunImage from "@/assets/energy-step-sun-v2.jpg";
import solarDetail from "@/assets/energy-step-photovoltaik-v2.jpg";
import storageImage from "@/assets/energy-step-storage-v2.jpg";
import homeImage from "@/assets/energy-step-home-v2.jpg";
import heatPumpImage from "@/assets/buderus-heatpump-outdoor-v1.jpg";
import wallboxImage from "@/assets/energy-step-mobility-v2.jpg";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Sun,
    title: "Sonne",
    label: "Energiequelle",
    text: "Sonnenenergie trifft auf Ihr Dach – kostenlos, leise und jeden Tag neu verfügbar.",
    image: sunImage,
    imagePosition: "48% 48%",
    accent: "#ffc56b",
    effect: "sun",
  },
  {
    icon: PanelTop,
    title: "Photovoltaik",
    label: "Erzeugung",
    text: "Hocheffiziente Module wandeln das einfallende Licht direkt in Strom für Ihr Zuhause um.",
    image: solarDetail,
    imagePosition: "50% 46%",
    accent: "#86d4ff",
    effect: "solar",
  },
  {
    icon: BatteryCharging,
    title: "Stromspeicher",
    label: "Speicherung",
    text: "Überschüssige Energie bleibt im System und steht auch abends oder bei wenig Sonne bereit.",
    image: storageImage,
    imagePosition: "50% 50%",
    accent: "#8de0bc",
    effect: "storage",
  },
  {
    icon: Home,
    title: "Zuhause",
    label: "Eigenverbrauch",
    text: "Ihr Haushalt nutzt automatisch zuerst den selbst erzeugten, günstigen Solarstrom.",
    image: homeImage,
    imagePosition: "52% 50%",
    accent: "#ffad72",
    effect: "home",
  },
  {
    icon: Thermometer,
    title: "Wärmepumpe",
    label: "Herzstück",
    text: "Die Buderus Wärmepumpe sorgt zuverlässig für behagliche Wärme und Warmwasser – persönlich auf Ihr Zuhause abgestimmt.",
    image: heatPumpImage,
    imagePosition: "52% 50%",
    accent: "#91dce5",
    effect: "heat",
  },
  {
    icon: Car,
    title: "Elektroauto",
    label: "Mobilität",
    text: "Die Wallbox lädt Ihr Fahrzeug intelligent dann, wenn eigener Solarstrom verfügbar ist.",
    image: wallboxImage,
    imagePosition: "64% 50%",
    accent: "#aebcff",
    effect: "mobility",
  },
] as const;

const HEAT_PUMP_INDEX = steps.findIndex((step) => step.effect === "heat");

export function EnergyFlow() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(HEAT_PUMP_INDEX);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;

    const updateActive = () => setActive(api.selectedScrollSnap());
    updateActive();
    api.on("select", updateActive);
    api.on("reInit", updateActive);

    return () => {
      api.off("select", updateActive);
      api.off("reInit", updateActive);
    };
  }, [api]);

  const goPrevious = useCallback(() => api?.scrollPrev(reducedMotion), [api, reducedMotion]);
  const goNext = useCallback(() => api?.scrollNext(reducedMotion), [api, reducedMotion]);
  const goTo = useCallback(
    (index: number) => api?.scrollTo(index, reducedMotion),
    [api, reducedMotion],
  );

  return (
    <section
      id="system"
      aria-labelledby="energy-flow-title"
      className="overflow-hidden bg-ink py-24 text-ink-foreground md:py-32"
    >
      <div className="container-eht">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Ihr Energiesystem
          </p>
          <h2 id="energy-flow-title" className="display-2 mt-5">
            Die Wärmepumpe. Das Herz Ihres Energiesystems.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/68 md:text-lg">
            Sie schenkt Ihrem Zuhause zuverlässig Wärme und verbindet sich intelligent mit
            Photovoltaik, Speicher und Mobilität. Entdecken Sie, wie daraus Ihr persönliches
            Energiesystem entsteht.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            duration: 34,
            startIndex: HEAT_PUMP_INDEX,
          }}
          aria-label="Komponenten Ihres Energiesystems"
          className="energy-carousel-shell mt-14 md:mt-18"
        >
          <CarouselContent className="-ml-4 md:-ml-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === active;

              return (
                <CarouselItem
                  key={step.title}
                  className="basis-[88%] pl-4 sm:basis-[76%] md:basis-[68%] md:pl-7 lg:basis-[58%] xl:basis-[52%]"
                  aria-label={`Schritt ${index + 1} von ${steps.length}: ${step.title}`}
                  aria-current={isActive ? "step" : undefined}
                  aria-hidden={!isActive}
                >
                  <article
                    data-active={isActive}
                    data-effect={step.effect}
                    className="energy-carousel-card"
                    style={{ "--energy-accent": step.accent } as CSSProperties}
                  >
                    <div
                      className="energy-carousel-image absolute inset-0 size-full object-cover"
                      style={
                        {
                          "--energy-image-position": step.imagePosition,
                          backgroundImage: `url(${step.image})`,
                        } as CSSProperties
                      }
                      aria-hidden
                    />
                    <div className="energy-carousel-image-grade absolute inset-0" />
                    <div className="energy-card-effect absolute inset-0" aria-hidden>
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 sm:p-7">
                      <span className="energy-icon-ring flex size-12 items-center justify-center rounded-full border sm:size-14">
                        <Icon className="size-5 sm:size-6" aria-hidden />
                      </span>
                      <span className="rounded-full border border-white/18 bg-black/24 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(steps.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="energy-carousel-copy absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 md:p-10">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--energy-accent)]">
                        {step.label}
                      </p>
                      <h3 className="mt-3 font-display text-[clamp(2.15rem,4.5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/76 sm:text-base sm:leading-7 md:text-lg">
                        {step.text}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <button
            type="button"
            onClick={goPrevious}
            className="energy-carousel-arrow energy-carousel-arrow--previous"
            aria-label="Vorheriger Schritt"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="energy-carousel-arrow energy-carousel-arrow--next"
            aria-label="Nächster Schritt"
          >
            <ArrowRight className="size-5" aria-hidden />
          </button>
        </Carousel>

        <div className="mt-20 flex flex-col items-center justify-center gap-4 md:mt-8">
          <div className="flex items-center gap-2" aria-label="Schritt auswählen">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => goTo(index)}
                className={cn("energy-carousel-dot", index === active && "is-active")}
                aria-label={`${step.title} anzeigen`}
                aria-current={index === active ? "step" : undefined}
              />
            ))}
          </div>
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-muted"
            aria-live="polite"
            aria-atomic="true"
          >
            Schritt {String(active + 1).padStart(2, "0")} von{" "}
            {String(steps.length).padStart(2, "0")} · {steps[active]?.title}
          </p>
        </div>
      </div>
    </section>
  );
}
