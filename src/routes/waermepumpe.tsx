import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/prod-waermepumpe.jpg";
import { ProductPage } from "@/components/sections/ProductPage";

const title = "Wärmepumpe – EnergieHeizTechnik";
const description = "Wärmepumpen von EnergieHeizTechnik: effizient heizen, Betriebskosten senken und mit Photovoltaik kombinieren – geplant und installiert aus einer Hand.";

export const Route = createFileRoute("/waermepumpe")({
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
      eyebrow="Wärmepumpe"
      title="Wärmepumpe – effizient heizen, fossilfrei denken."
      intro="Effizient heizen und gleichzeitig unabhängiger von fossilen Energieträgern werden – besonders wirtschaftlich in Kombination mit Photovoltaik."
      image={img}
      alt="Luft-Wasser-Wärmepumpe an der Fassade eines modernen Hauses"
      paragraphs={["Eine Wärmepumpe gewinnt den größten Teil der Heizenergie aus der Umwelt. Mit eigenem Solarstrom senken Sie die Betriebskosten zusätzlich.", "Wir prüfen Ihre Gegebenheiten – beheizbare Fläche, aktueller Energieträger, Heizsystem – und legen die Anlage realistisch und effizient aus.", "Von der Planung über die Installation bis zur Inbetriebnahme und Wartung begleiten wir Sie mit erfahrenen Fachkräften."]}
      bullets={["Ehrliche Prüfung Ihrer Voraussetzungen", "Ideale Kombination mit Photovoltaik und Speicher", "Effiziente Auslegung statt Überdimensionierung", "Installation durch erfahrene Fachkräfte", "Wartung und Support auch außerhalb der Geschäftszeiten"]}
    />
  );
}
