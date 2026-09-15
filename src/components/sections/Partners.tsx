import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { partners } from "@/lib/site";

const AUTO_ADVANCE_MS = 3600;

export function Partners() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isSettled, setIsSettled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isPaused = isHovered || hasFocusWithin || isInteracting || reducedMotion;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;

    const updateActive = () => {
      setActive(api.selectedScrollSnap());
      setIsSettled(false);
    };
    const reinitialize = () => {
      setActive(api.selectedScrollSnap());
      setIsSettled(true);
    };
    const beginInteraction = () => {
      setIsInteracting(true);
      setIsSettled(false);
    };
    const endInteraction = () => setIsInteracting(false);
    const finishTransition = () => setIsSettled(true);

    updateActive();
    setIsSettled(true);
    api.on("select", updateActive);
    api.on("reInit", reinitialize);
    api.on("pointerDown", beginInteraction);
    api.on("pointerUp", endInteraction);
    api.on("settle", finishTransition);

    return () => {
      api.off("select", updateActive);
      api.off("reInit", reinitialize);
      api.off("pointerDown", beginInteraction);
      api.off("pointerUp", endInteraction);
      api.off("settle", finishTransition);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || !isSettled) return;

    const timer = window.setTimeout(() => api.scrollNext(), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [active, api, isPaused, isSettled]);

  const goPrevious = useCallback(() => api?.scrollPrev(reducedMotion), [api, reducedMotion]);
  const goNext = useCallback(() => api?.scrollNext(reducedMotion), [api, reducedMotion]);
  const goTo = useCallback(
    (index: number) => api?.scrollTo(index, reducedMotion),
    [api, reducedMotion],
  );

  return (
    <section id="partner" aria-labelledby="partner-title" className="section-y bg-surface">
      <div className="container-eht">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow">
              <span className="brand-rule inline-block h-px w-8" aria-hidden />
              Partner
            </Reveal>
            <Reveal as="h2" delay={80} id="partner-title" className="display-2 mt-5">
              Technologie von starken Partnern.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={140}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            Wir arbeiten mit etablierten Herstellern zusammen – für Komponenten, die langfristig
            zuverlässig funktionieren.
          </Reveal>
        </div>

        <div
          className="partner-carousel-region mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setHasFocusWithin(true)}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget;
            if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
              setHasFocusWithin(false);
            }
          }}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true, skipSnaps: false, duration: 34 }}
            aria-label="Partnerhersteller"
            className="partner-carousel-shell"
          >
            <CarouselContent className="-ml-4 items-center py-10 sm:-ml-6 md:py-12">
              {partners.map((partner, index) => {
                const isActive = active === index;

                return (
                  <CarouselItem
                    key={partner.name}
                    className="basis-[84%] pl-4 sm:basis-[62%] sm:pl-6 md:basis-[48%] lg:basis-[36%] xl:basis-[32%]"
                    data-active={isActive}
                    aria-label={`${partner.name}, Partner ${index + 1} von ${partners.length}`}
                    aria-current={isActive ? "true" : undefined}
                    aria-hidden={!isActive}
                  >
                    <article className="partner-carousel-card" data-active={isActive}>
                      <div className="partner-card-topline">
                        <span>Technologiepartner</span>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="partner-card-rule" aria-hidden />
                      <div className="partner-card-copy">
                        <h3>{partner.name}</h3>
                        <p>{partner.note}</p>
                      </div>
                      <div className="partner-card-halo" aria-hidden />
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <button
              type="button"
              onClick={goPrevious}
              className="partner-carousel-arrow partner-carousel-arrow--previous"
              aria-label="Vorherigen Partner anzeigen"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="partner-carousel-arrow partner-carousel-arrow--next"
              aria-label="Nächsten Partner anzeigen"
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </Carousel>

          <div className="partner-carousel-status">
            <div className="flex items-center gap-1.5" aria-label="Partner auswählen">
              {partners.map((partner, index) => (
                <button
                  key={partner.name}
                  type="button"
                  onClick={() => goTo(index)}
                  className="partner-carousel-dot"
                  data-active={active === index}
                  aria-label={`${partner.name} anzeigen`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
            <p aria-live={isPaused ? "polite" : "off"} aria-atomic="true">
              {String(active + 1).padStart(2, "0")} / {String(partners.length).padStart(2, "0")} ·{" "}
              {partners[active]?.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
