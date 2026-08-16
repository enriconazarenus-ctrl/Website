import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/prod-photovoltaik.jpg";
import { ProductPage } from "@/components/sections/ProductPage";

const title = "Photovoltaik – EnergieHeizTechnik";
const description = "Photovoltaikanlagen von EnergieHeizTechnik: eigener Solarstrom, individuelle Planung, hochwertige Komponenten und Installation aus einer Hand.";

export const Route = createFileRoute("/photovoltaik")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ProductPage
      eyebrow="Photovoltaik"
      title="Photovoltaik – Ihre Unabhängigkeit beginnt jetzt."
      intro="Mit einer Photovoltaikanlage nutzen Sie die Kraft der Sonne, um Ihren eigenen Strom zu erzeugen – nachhaltig, effizient und direkt vor Ort."
      image={img}
      alt="Modernes Hausdach mit vollflächiger schwarzer Photovoltaikanlage"
      paragraphs={["Mit einer Photovoltaikanlage reduzieren Sie nicht nur Ihre Energiekosten, sondern machen sich auch ein Stück weit unabhängig von steigenden Strompreisen.", "Ob für den Eigenverbrauch im Haushalt oder in Kombination mit einer Wärmepumpe: Solarstrom lässt sich vielseitig einsetzen und optimal in den Alltag integrieren.", "Überschüssige Energie kann gespeichert oder ins Netz eingespeist werden – für maximale Flexibilität und Wirtschaftlichkeit. Planung, Installation und Wartung übernehmen wir aus einer Hand."]}
      bullets={["Individuelle Auslegung nach Dach und Verbrauch", "Hochwertige Module und Wechselrichter namhafter Hersteller", "Smartes Energiemanagement", "Kombinierbar mit Speicher, Wärmepumpe und Wallbox", "Planung, Installation und Wartung aus einer Hand"]}
    />
  );
}
