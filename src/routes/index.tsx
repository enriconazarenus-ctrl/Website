import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { EnergyFlow } from "@/components/sections/EnergyFlow";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Why } from "@/components/sections/Why";
import { Partners } from "@/components/sections/Partners";
import { Advisor } from "@/components/sections/Advisor";
import { CtaBand } from "@/components/sections/CtaBand";
import { company } from "@/lib/site";

const title = "EnergieHeizTechnik – Buderus Wärmepumpen & persönliche Beratung";
const description =
  "Ihr Team aus Burgwedel für moderne Buderus Wärmepumpen: persönlich geplant, sauber installiert und dauerhaft begleitet – ergänzt durch Photovoltaik, Speicher und Wallbox.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: company.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          email: company.email,
          url: company.url,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.street,
            postalCode: company.city.split(" ")[0],
            addressLocality: company.city.split(" ").slice(1).join(" "),
            addressCountry: "DE",
          },
          areaServed: "Region Hannover",
          knowsAbout: ["Wärmepumpe", "Photovoltaik", "Stromspeicher", "Wallbox"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <EnergyFlow />
      <Process />
      <Why />
      <Partners />
      <Advisor />
      <CtaBand />
    </main>
  );
}
