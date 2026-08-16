import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";

export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
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
        Kostenlose Beratung
      </CtaButton>
    </div>
  );
}
