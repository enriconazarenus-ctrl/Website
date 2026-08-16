import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/prod-speicher.jpg";
import { ProductPage } from "@/components/sections/ProductPage";

const title = "Stromspeicher – EnergieHeizTechnik";
const description = "Stromspeicher von EnergieHeizTechnik: Solarstrom speichern, Eigenverbrauch erhöhen und unabhängiger werden – passgenau geplant und installiert.";

export const Route = createFileRoute("/stromspeicher")({
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
      eyebrow="Stromspeicher"
      title="Stromspeicher – Ihre Energie, wenn Sie sie brauchen."
      intro="Speichern Sie Ihren Solarstrom und nutzen Sie ihn genau dann, wenn Sie ihn benötigen – abends, nachts oder an bewölkten Tagen."
      image={img}
      alt="Moderner Batteriespeicher in einem hellen Technikraum"
      paragraphs={["Ein Stromspeicher erhöht den Eigenverbrauch Ihrer Photovoltaikanlage deutlich: Statt Überschüsse günstig einzuspeisen, nutzen Sie sie später selbst.", "Wir dimensionieren den Speicher passend zu Ihrem Verbrauchsprofil und Ihrer Anlagengröße – abgestimmt auf Wärmepumpe und Wallbox, falls vorhanden.", "Dabei setzen wir auf Batteriesysteme etablierter Hersteller und ein Energiemanagement, das die Verbraucher in Ihrem Haus intelligent priorisiert."]}
      bullets={["Höherer Eigenverbrauch Ihres Solarstroms", "Passgenaue Dimensionierung", "Systeme etablierter Hersteller", "Intelligente Steuerung aller Verbraucher", "Nachrüstung bestehender Anlagen möglich"]}
    />
  );
}
