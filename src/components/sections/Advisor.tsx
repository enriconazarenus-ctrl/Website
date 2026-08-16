import { useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

type Data = {
  interests: string[];
  roofType: string;
  orientation: string[];
  roofArea: string;
  consumption: number;
  storage: string;
  energySource: string;
  heatedArea: string;
  name: string;
  email: string;
  phone: string;
  privacy: boolean;
};

const empty: Data = {
  interests: [],
  roofType: "",
  orientation: [],
  roofArea: "",
  consumption: 4000,
  storage: "",
  energySource: "",
  heatedArea: "",
  name: "",
  email: "",
  phone: "",
  privacy: false,
};

const interestOptions = ["Photovoltaik", "Wärmepumpe", "Stromspeicher", "Wallbox"];
const roofOptions = ["Satteldach", "Flachdach", "Pultdach", "Andere"];
const orientationOptions = ["Süd", "Ost", "West", "Nord"];
const storageOptions = ["Ja", "Nein", "Noch unentschlossen"];
const sourceOptions = ["Öl", "Gas", "Wärmepumpe"];

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left font-medium transition-all duration-300",
        selected
          ? "border-brand bg-accent/70 text-foreground"
          : "border-line bg-card text-foreground hover:-translate-y-0.5 hover:border-brand/50",
      )}
    >
      {label}
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-full border transition-colors",
          selected ? "border-brand bg-brand text-brand-foreground" : "border-line",
        )}
      >
        {selected && <Check className="size-3" aria-hidden />}
      </span>
    </button>
  );
}

export function Advisor() {
  const [data, setData] = useState<Data>(empty);
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const wantsHeatPump = data.interests.includes("Wärmepumpe");

  const steps = useMemo(() => {
    const base = ["interests", "roof", "orientation", "area", "consumption", "storage"];
    if (wantsHeatPump) base.push("heatpump");
    base.push("contact");
    return base;
  }, [wantsHeatPump]);

  const current = steps[Math.min(step, steps.length - 1)];
  const total = steps.length;

  const toggle = (key: "interests" | "orientation", value: string) =>
    setData((d) => ({
      ...d,
      [key]: d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value],
    }));

  const validate = () => {
    switch (current) {
      case "interests":
        return data.interests.length ? null : "Bitte wählen Sie mindestens eine Option.";
      case "roof":
        return data.roofType ? null : "Bitte wählen Sie einen Dachtyp.";
      case "storage":
        return data.storage ? null : "Bitte wählen Sie eine Option.";
      case "contact":
        if (!data.name.trim()) return "Bitte geben Sie Ihren Namen an.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Bitte geben Sie eine gültige E-Mail-Adresse an.";
        if (!data.privacy) return "Bitte bestätigen Sie die Datenschutzerklärung.";
        return null;
      default:
        return null;
    }
  };

  const next = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, total - 1));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (current !== "contact") {
      next();
      return;
    }
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setDone(true);
  };

  return (
    <section id="kontakt" className="section-y bg-background">
      <div className="container-eht grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal as="p" className="eyebrow">
            <span className="brand-rule inline-block h-px w-8" aria-hidden />
            Beratung
          </Reveal>
          <Reveal as="h2" delay={80} className="display-2 mt-5">
            Finden Sie Ihre passende Energielösung.
          </Reveal>
          <Reveal as="p" delay={140} className="lead mt-5">
            Beantworten Sie ein paar kurze Fragen – wir melden uns persönlich mit einer Einschätzung zu Ihrem Projekt.
          </Reveal>
          <Reveal delay={200} className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p>Lieber direkt schreiben?</p>
            <a
              className="font-display text-lg font-semibold text-foreground underline decoration-brand decoration-2 underline-offset-4"
              href="mailto:info@energieheiztechnik.de"
            >
              info@energieheiztechnik.de
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-card p-6 shadow-[0_30px_80px_-50px_oklch(0.2_0.02_258/0.6)] md:p-9">
            {done ? (
              <div className="flex flex-col items-start gap-5 py-10">
                <svg viewBox="0 0 52 52" className="size-16" aria-hidden>
                  <circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="oklch(0.70 0.176 52)"
                    strokeWidth="2"
                    style={{ animation: "eht-ring 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
                  />
                  <path
                    d="M15 27l8 8 15-16"
                    fill="none"
                    stroke="oklch(0.70 0.176 52)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    style={{ animation: "eht-check 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
                  />
                </svg>
                <h3 className="display-2">Vielen Dank für Ihre Anfrage.</h3>
                <p className="lead">
                  Wir haben Ihre Angaben erhalten und melden uns persönlich bei Ihnen – in der Regel innerhalb eines
                  Werktages.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && current !== "contact") {
                    e.preventDefault();
                    next();
                  }
                }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <span>
                    Schritt {step + 1} von {total}
                  </span>
                  <span>{Math.round(((step + 1) / total) * 100)} %</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="brand-rule h-full transition-all duration-500 ease-out"
                    style={{ width: `${((step + 1) / total) * 100}%` }}
                  />
                </div>

                <div key={current} className="animate-rise mt-8">
                  {current === "interests" && (
                    <fieldset>
                      <legend className="display-3">Wofür interessieren Sie sich?</legend>
                      <p className="mt-2 text-sm text-muted-foreground">Mehrfachauswahl möglich.</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {interestOptions.map((o) => (
                          <OptionButton
                            key={o}
                            label={o}
                            selected={data.interests.includes(o)}
                            onClick={() => toggle("interests", o)}
                          />
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {current === "roof" && (
                    <fieldset>
                      <legend className="display-3">Wie sieht Ihr Dach aus?</legend>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {roofOptions.map((o) => (
                          <OptionButton
                            key={o}
                            label={o}
                            selected={data.roofType === o}
                            onClick={() => setData((d) => ({ ...d, roofType: o }))}
                          />
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {current === "orientation" && (
                    <fieldset>
                      <legend className="display-3">Wie ist Ihr Dach ausgerichtet?</legend>
                      <p className="mt-2 text-sm text-muted-foreground">Falls bekannt – Mehrfachauswahl möglich.</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {orientationOptions.map((o) => (
                          <OptionButton
                            key={o}
                            label={o}
                            selected={data.orientation.includes(o)}
                            onClick={() => toggle("orientation", o)}
                          />
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {current === "area" && (
                    <div>
                      <label htmlFor="roofArea" className="display-3 block">
                        Wie groß ist Ihre Dachfläche?
                      </label>
                      <p className="mt-2 text-sm text-muted-foreground">Angabe in m² – eine Schätzung genügt.</p>
                      <input
                        id="roofArea"
                        type="number"
                        min={0}
                        inputMode="numeric"
                        value={data.roofArea}
                        onChange={(e) => setData((d) => ({ ...d, roofArea: e.target.value }))}
                        placeholder="z. B. 80"
                        className="mt-6 h-14 w-full rounded-xl border border-line bg-background px-5 text-lg outline-none transition-colors focus:border-brand"
                      />
                    </div>
                  )}

                  {current === "consumption" && (
                    <div>
                      <label htmlFor="consumption" className="display-3 block">
                        Wie hoch ist Ihr jährlicher Stromverbrauch?
                      </label>
                      <p className="mt-6 font-display text-4xl font-semibold text-brand">
                        {data.consumption.toLocaleString("de-DE")} kWh
                      </p>
                      <input
                        id="consumption"
                        type="range"
                        min={1800}
                        max={20000}
                        step={100}
                        value={data.consumption}
                        onChange={(e) => setData((d) => ({ ...d, consumption: Number(e.target.value) }))}
                        className="mt-6 w-full accent-[oklch(0.70_0.176_52)]"
                      />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>1.800 kWh</span>
                        <span>20.000 kWh</span>
                      </div>
                    </div>
                  )}

                  {current === "storage" && (
                    <fieldset>
                      <legend className="display-3">Interessieren Sie sich für einen Stromspeicher?</legend>
                      <div className="mt-6 grid gap-3">
                        {storageOptions.map((o) => (
                          <OptionButton
                            key={o}
                            label={o}
                            selected={data.storage === o}
                            onClick={() => setData((d) => ({ ...d, storage: o }))}
                          />
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {current === "heatpump" && (
                    <div>
                      <h3 className="display-3">Ihre aktuelle Heizsituation</h3>
                      <fieldset className="mt-6">
                        <legend className="text-sm font-semibold">Aktueller Energieträger</legend>
                        <div className="mt-3 grid gap-3 sm:grid-cols-3">
                          {sourceOptions.map((o) => (
                            <OptionButton
                              key={o}
                              label={o}
                              selected={data.energySource === o}
                              onClick={() => setData((d) => ({ ...d, energySource: o }))}
                            />
                          ))}
                        </div>
                      </fieldset>
                      <label htmlFor="heatedArea" className="mt-7 block text-sm font-semibold">
                        Beheizbare Fläche (m²)
                      </label>
                      <input
                        id="heatedArea"
                        type="number"
                        min={0}
                        inputMode="numeric"
                        value={data.heatedArea}
                        onChange={(e) => setData((d) => ({ ...d, heatedArea: e.target.value }))}
                        placeholder="z. B. 140"
                        className="mt-3 h-14 w-full rounded-xl border border-line bg-background px-5 text-lg outline-none transition-colors focus:border-brand"
                      />
                    </div>
                  )}

                  {current === "contact" && (
                    <div>
                      <h3 className="display-3">Fast geschafft.</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Wie dürfen wir Sie erreichen? Pflichtfelder sind Name und E-Mail.
                      </p>
                      <div className="mt-6 grid gap-4">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium">
                            Vor- und Nachname
                          </label>
                          <input
                            id="name"
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                            className="mt-2 h-13 w-full rounded-xl border border-line bg-background px-5 py-3 outline-none transition-colors focus:border-brand"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-sm font-medium">
                            E-Mail
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                            className="mt-2 h-13 w-full rounded-xl border border-line bg-background px-5 py-3 outline-none transition-colors focus:border-brand"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium">
                            Telefonnummer <span className="text-muted-foreground">(optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            value={data.phone}
                            onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                            className="mt-2 h-13 w-full rounded-xl border border-line bg-background px-5 py-3 outline-none transition-colors focus:border-brand"
                          />
                        </div>
                        <label className="mt-1 flex items-start gap-3 text-sm text-muted-foreground">
                          <input
                            type="checkbox"
                            checked={data.privacy}
                            onChange={(e) => setData((d) => ({ ...d, privacy: e.target.checked }))}
                            className="mt-1 size-4 accent-[oklch(0.70_0.176_52)]"
                          />
                          <span>
                            Ich habe die{" "}
                            <Link to="/datenschutz" className="text-brand underline underline-offset-2">
                              Datenschutzerklärung
                            </Link>{" "}
                            zur Kenntnis genommen und bin mit der Verarbeitung meiner Daten einverstanden.
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <p role="alert" className="mt-5 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </p>
                )}

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setError(null);
                      setStep((s) => Math.max(0, s - 1));
                    }}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-0"
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    Zurück
                  </button>

                  {current === "contact" ? (
                    <CtaButton type="submit" size="lg">
                      Kostenlose Beratung anfragen
                    </CtaButton>
                  ) : (
                    <button
                      type="button"
                      onClick={next}
                      className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ink-foreground transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Weiter
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
