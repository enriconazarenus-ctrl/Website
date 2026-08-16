import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/prod-wallbox.jpg";
import { ProductPage } from "@/components/sections/ProductPage";

const title = "Wallbox & Elektromobilität – EnergieHeizTechnik";
const description = "Wallbox-Installation von EnergieHeizTechnik: intelligentes Laden Ihres Elektrofahrzeugs mit eigenem Solarstrom – für Privat und Gewerbe.";

export const Route = createFileRoute("/wallbox")({
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
      eyebrow="Wallbox & Elektromobilität"
      title="Wallbox – laden mit Ihrer eigenen Energie."
      intro="Laden Sie Ihr Elektrofahrzeug komfortabel und intelligent zu Hause oder im Unternehmen – idealerweise mit Strom vom eigenen Dach."
      image={img}
      alt="Elektrofahrzeug lädt an einer Wallbox vor einem modernen Haus"
      paragraphs={["Eine Wallbox lädt Ihr Fahrzeug schneller, sicherer und komfortabler als eine Haushaltssteckdose – und lässt sich in Ihr Energiesystem einbinden.", "Mit einem intelligenten Energiemanagement lädt Ihr Fahrzeug bevorzugt dann, wenn Ihre Photovoltaikanlage Überschüsse produziert.", "Wir übernehmen Beratung, Elektroinstallation, Inbetriebnahme und den weiteren Service – für Privathaushalte und Unternehmen."]}
      bullets={["Sicheres und schnelles Laden zu Hause", "Überschussladen mit eigenem Solarstrom", "Lösungen für Privat und Gewerbe", "Fachgerechte Elektroinstallation", "Service und Support nach der Installation"]}
    />
  );
}
