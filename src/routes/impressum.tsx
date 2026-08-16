import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";

const title = "Impressum – EnergieHeizTechnik";
const description = "Impressum und Anbieterkennzeichnung der EHT EnergieHeizTechnik GmbH aus Burgwedel.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <main className="bg-background pb-24 pt-36 md:pt-44">
      <div className="container-eht max-w-3xl">
        <h1 className="display-2">Impressum</h1>
        <div className="mt-10 space-y-8 text-[1.02rem] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="display-3 text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.city}
              <br />
              {company.country}
            </p>
          </section>
          <section>
            <h2 className="display-3 text-foreground">Handelsregister</h2>
            <p className="mt-3">
              Handelsregister: {company.hrb}
              <br />
              Registergericht: {company.court}
            </p>
          </section>
          <section>
            <h2 className="display-3 text-foreground">Vertretungsberechtigte Geschäftsführer</h2>
            <p className="mt-3">{company.ceo}</p>
          </section>
          <section>
            <h2 className="display-3 text-foreground">Kontakt</h2>
            <p className="mt-3">
              E-Mail:{" "}
              <a className="text-brand underline underline-offset-2" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </section>
          <section>
            <h2 className="display-3 text-foreground">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="mt-3">Gemäß § 27 a Umsatzsteuergesetz: {company.vat}</p>
          </section>
          <section>
            <h2 className="display-3 text-foreground">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
