import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";

export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const cinematicHero = document.querySelector<HTMLElement>(".light-story");
      const threshold = cinematicHero
        ? cinematicHero.offsetTop + cinematicHero.offsetHeight - window.innerHeight * 0.7
        : 700;
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 p-3 backdrop-blur-md transition-transform duration-500 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CtaButton href="/#kontakt" size="lg" className="w-full">
        Persönlich beraten lassen
      </CtaButton>
    </div>
  );
}
