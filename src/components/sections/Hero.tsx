import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroHouse from "@/assets/hero-energy-home-v2.png";
import heatPumpCloseup from "@/assets/buderus-heatpump-outdoor-v1.jpg";
import { CtaButton } from "@/components/CtaButton";

const DUST_PARTICLES = 24;
const LIGHT_RAYS = 3;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothRange(value: number, start: number, end: number) {
  const progress = clamp01((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const finaleRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;

    let disposed = false;
    let cleanup = () => undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const context = gsap.context(() => {
        gsap.set([lightRef.current, approachRef.current, finaleRef.current], {
          autoAlpha: 0,
          y: 30,
        });

        const updateScene = (progress: number) => {
          const approach = smoothRange(progress, 0.24, 0.62);
          const pvReveal = smoothRange(progress, 0.55, 0.7);
          const houseOpacity = 1 - smoothRange(progress, 0.75, 0.84);
          const activation = smoothRange(progress, 0.72, 0.96);
          const lightBuild =
            smoothRange(progress, 0.05, 0.2) * (1 - smoothRange(progress, 0.38, 0.56));
          const lightTravel = smoothRange(progress, 0.04, 0.5);
          const transitionGlow =
            smoothRange(progress, 0.5, 0.59) * (1 - smoothRange(progress, 0.7, 0.79));
          const mobile = window.innerWidth < 768;

          scene.style.setProperty("--scroll-progress", `${progress}`);
          scene.style.setProperty("--house-opacity", `${houseOpacity}`);
          scene.style.setProperty("--approach", `${approach}`);
          scene.style.setProperty("--pv-reveal", `${pvReveal}`);
          scene.style.setProperty("--pv-clip-head", `${pvReveal * 118}%`);
          scene.style.setProperty("--pv-clip-tail", `${pvReveal * 118 - 18}%`);
          scene.style.setProperty("--activation", `${activation}`);
          scene.style.setProperty("--light-build", `${lightBuild}`);
          scene.style.setProperty("--transition-glow", `${transitionGlow}`);
          scene.style.setProperty("--camera-scale", `${1.015 + approach * (mobile ? 0.19 : 0.34)}`);
          scene.style.setProperty("--camera-x", `${approach * (mobile ? -2.5 : -1.5)}%`);
          scene.style.setProperty("--camera-y", `${approach * (mobile ? 1.5 : 3.5)}%`);
          scene.style.setProperty(
            "--closeup-scale",
            `${1.055 - pvReveal * 0.055 + activation * 0.012}`,
          );
          scene.style.setProperty("--light-shift", `${-16 + lightTravel * 52}%`);
          scene.style.setProperty("--shadow-shift", `${-8 + lightTravel * 20}%`);

          if (progressRef.current) {
            progressRef.current.style.transform = `scaleY(${progress})`;
          }
        };

        const storyTimeline = gsap
          .timeline({
            defaults: { ease: "none" },
            onUpdate: () => updateScene(storyTimeline.progress()),
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: reducedMotion ? true : 0.72,
            },
          })
          .to({}, { duration: 1 }, 0)
          .to(introRef.current, { autoAlpha: 0, y: -28, duration: 0.1 }, 0.12)
          .to(lightRef.current, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.22)
          .to(lightRef.current, { autoAlpha: 0, y: -24, duration: 0.1 }, 0.39)
          .to(approachRef.current, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.46)
          .to(approachRef.current, { autoAlpha: 0, y: -24, duration: 0.1 }, 0.65)
          .to(finaleRef.current, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.79);

        updateScene(0);
      }, section);

      cleanup = () => {
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === section) trigger.kill();
        });
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="light-story relative h-[360svh] bg-[#111820] text-white"
      aria-label="Von der persönlichen Planung zur modernen Wärmepumpe"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          ref={sceneRef}
          className="light-scene absolute inset-0"
          style={
            {
              "--scroll-progress": 0,
              "--house-opacity": 1,
              "--approach": 0,
              "--pv-reveal": 0,
              "--pv-clip-head": "0%",
              "--pv-clip-tail": "-18%",
              "--activation": 0,
              "--light-build": 0,
              "--transition-glow": 0,
              "--camera-scale": 1.015,
              "--camera-y": "0%",
              "--camera-x": "0%",
              "--closeup-scale": 1.055,
              "--light-shift": "-16%",
              "--shadow-shift": "-8%",
            } as CSSProperties
          }
          aria-hidden
        >
          <div className="light-house-layer absolute inset-0">
            <div className="light-house-camera absolute inset-0">
              <img
                src={heroHouse}
                alt=""
                className="light-house-photo absolute inset-0 size-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="light-house-grade absolute inset-0" />
            </div>
          </div>

          <div className="light-closeup-layer absolute inset-0">
            <div className="light-closeup-camera absolute inset-0">
              <img
                src={heatPumpCloseup}
                alt=""
                className="light-closeup-photo absolute inset-0 size-full object-cover"
                decoding="async"
              />
              <div className="light-closeup-grade absolute inset-0" />
              <span className="light-closeup-sheen absolute inset-y-0" />
            </div>
          </div>

          <div className="light-cloud-shadow absolute inset-0" />
          <div className="light-sun-wash absolute inset-0" />
          <div className="light-rays absolute inset-0">
            {Array.from({ length: LIGHT_RAYS }, (_, index) => (
              <span key={index} className={`light-ray light-ray--${index + 1}`} />
            ))}
          </div>
          <div className="light-transition-wash absolute inset-0" />

          <div className="light-dust absolute inset-0">
            {Array.from({ length: DUST_PARTICLES }, (_, index) => (
              <span
                key={index}
                style={
                  {
                    "--dust-index": index,
                    "--dust-x": `${(index * 37 + 11) % 101}%`,
                    "--dust-y": `${(index * 53 + 7) % 103}%`,
                    "--dust-size": `${0.8 + ((index * 7) % 3) * 0.55}px`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="light-vignette absolute inset-0" />
          <div className="light-film-grain absolute inset-0" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-5 z-20 hidden items-center md:flex">
          <span className="relative h-32 w-px overflow-hidden bg-white/15">
            <span
              ref={progressRef}
              className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-amber-100 via-orange-300 to-sky-200"
            />
          </span>
        </div>

        <div
          ref={introRef}
          className="light-copy absolute inset-x-0 bottom-[10vh] z-10 md:bottom-[12vh]"
        >
          <div className="container-eht">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-amber-100/85">
              <Sparkles className="size-3.5" aria-hidden />
              Ihr Team für Wärme &amp; Energie
            </p>
            <h1 className="max-w-[13ch] font-display text-[clamp(3rem,7.2vw,7rem)] font-medium leading-[0.91] tracking-[-0.055em]">
              Wärme, die zu Ihrem <span className="light-gradient-text">Zuhause passt.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
              Wir planen und installieren moderne Buderus Wärmepumpen – persönlich, ehrlich und mit
              einem festen Ansprechpartner aus Burgwedel.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
              <CtaButton to="/waermepumpe" size="lg">
                Wärmepumpe entdecken
              </CtaButton>
              <CtaButton href="#ueber-uns" size="lg" variant="ghostLight">
                Unser Team kennenlernen
              </CtaButton>
            </div>
          </div>
        </div>

        <div ref={lightRef} className="light-copy absolute left-0 top-[22vh] z-10 w-full opacity-0">
          <div className="container-eht flex justify-end">
            <div className="max-w-md border-l border-amber-100/35 pl-6 md:mr-[6vw]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                01 / Zuhause
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
                Gute Wärme beginnt mit einem ehrlichen Blick aufs Haus.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                Wir hören zu, schauen genau hin und klären gemeinsam, was Ihr Zuhause wirklich
                braucht – verständlich und ohne Standardlösung.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={approachRef}
          className="light-copy absolute bottom-[15vh] left-0 z-10 w-full opacity-0"
        >
          <div className="container-eht">
            <div className="max-w-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                02 / Planung
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
                Aus Technik wird eine Lösung, die wirklich passt.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                Gebäude, Heizbedarf und Zukunftspläne greifen ineinander. Unser Team plant jedes
                Detail und bleibt dabei Ihr fester Ansprechpartner.
              </p>
            </div>
          </div>
        </div>

        <div ref={finaleRef} className="light-copy absolute inset-x-0 bottom-[11vh] z-10 opacity-0">
          <div className="container-eht text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-amber-100/85">
              03 / Wärmepumpe
            </p>
            <h2 className="mx-auto mt-4 max-w-[17ch] font-display text-4xl font-medium leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Leise. Effizient. Von unserem Team sauber installiert.
            </h2>
            <div className="pointer-events-auto mt-8">
              <CtaButton href="#kontakt" size="lg">
                Persönlich beraten lassen
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/42">
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden /> Scrollen &amp; entdecken
        </div>
      </div>
    </section>
  );
}
