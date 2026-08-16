import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";

const KEY = "eht-cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const save = (value: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem(KEY, JSON.stringify({ ...value, necessary: true, ts: Date.now() }));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-3 bottom-3 z-[60] rounded-2xl border border-line bg-card p-5 shadow-[0_24px_60px_-24px_oklch(0.2_0.02_258/0.45)] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <h2 className="font-display text-lg font-semibold">Datenschutz-Einstellungen</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Wir verwenden notwendige Cookies für den Betrieb der Website. Optionale Cookies für Analyse und Marketing
        setzen wir nur mit Ihrer Zustimmung. Mehr dazu in unserer{" "}
        <Link to="/datenschutz" className="text-brand underline underline-offset-2">
          Datenschutzerklärung
        </Link>
        .
      </p>

      {details && (
        <div className="mt-4 space-y-3 text-sm">
          <label className="flex items-start gap-3 rounded-lg bg-muted p-3">
            <input type="checkbox" checked readOnly className="mt-1 accent-[oklch(0.70_0.176_52)]" />
            <span>
              <span className="font-medium">Notwendig</span>
              <span className="block text-muted-foreground">Erforderlich für Grundfunktionen der Website.</span>
            </span>
          </label>
          <label className="flex items-start gap-3 rounded-lg bg-muted p-3">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 accent-[oklch(0.70_0.176_52)]"
            />
            <span>
              <span className="font-medium">Analyse</span>
              <span className="block text-muted-foreground">Hilft uns, die Website zu verbessern.</span>
            </span>
          </label>
          <label className="flex items-start gap-3 rounded-lg bg-muted p-3">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1 accent-[oklch(0.70_0.176_52)]"
            />
            <span>
              <span className="font-medium">Marketing</span>
              <span className="block text-muted-foreground">Für personalisierte Inhalte und Werbung.</span>
            </span>
          </label>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <CtaButton arrow={false} onClick={() => save({ analytics: true, marketing: true })}>
          Alle akzeptieren
        </CtaButton>
        <CtaButton
          arrow={false}
          variant="outline"
          onClick={() => (details ? save({ analytics, marketing }) : save({ analytics: false, marketing: false }))}
        >
          {details ? "Auswahl speichern" : "Nur notwendige"}
        </CtaButton>
        {!details && (
          <button
            type="button"
            onClick={() => setDetails(true)}
            className="px-2 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            Einstellungen
          </button>
        )}
      </div>
    </div>
  );
}
