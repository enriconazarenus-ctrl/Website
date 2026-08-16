import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";

const title = "Datenschutzerklärung – EnergieHeizTechnik";
const description =
  "Informationen zur Verarbeitung personenbezogener Daten auf der Website der EHT EnergieHeizTechnik GmbH.";

export const Route = createFileRoute("/datenschutz")({
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
  component: Datenschutz,
});

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="display-3 text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Datenschutz() {
  return (
    <main className="bg-background pb-24 pt-36 md:pt-44">
      <div className="container-eht max-w-3xl">
        <h1 className="display-2">Datenschutzerklärung</h1>
        <div className="mt-10 space-y-9 text-[1.02rem] leading-relaxed text-muted-foreground">
          <Section heading="1. Datenschutz auf einen Blick">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden
              Sie im Impressum. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch
              Ausfüllen eines Kontaktformulars. Andere Daten werden automatisch beim Besuch der Website durch den
              Hosting-Anbieter erfasst (z. B. technische Daten wie Browser, Betriebssystem, IP-Adresse). Die Daten
              werden genutzt, um Ihre Anfrage zu bearbeiten oder die Website technisch einwandfrei bereitzustellen.
            </p>
          </Section>

          <Section heading="2. Allgemeine Hinweise und Pflichtinformationen">
            <p>
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Verantwortliche Stelle:
              <br />
              {company.name}
              <br />
              {company.street}, {company.city}, {company.country}
              <br />
              E-Mail: {company.email}
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </Section>

          <Section heading="3. Datenerfassung auf unserer Website">
            <p>
              <strong className="text-foreground">Kontakt- und Anfrageformular:</strong> Wenn Sie uns per Formular
              Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
              Kontaktdaten (z. B. Name, Telefonnummer, E-Mail-Adresse) zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              <strong className="text-foreground">Rechtsgrundlage:</strong> Die Verarbeitung der in das Formular
              eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Durchführung
              vorvertraglicher Maßnahmen).
            </p>
            <p>
              <strong className="text-foreground">Server-Log-Dateien:</strong> Beim Aufruf unserer Seiten erfasst der
              Hosting-Anbieter automatisch Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </Section>

          <Section heading="4. Cookies und Einwilligung">
            <p>
              Wir verwenden technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Optionale
              Cookies für Analyse- oder Marketingzwecke setzen wir ausschließlich nach Ihrer ausdrücklichen
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ihre Auswahl können Sie jederzeit ändern, indem Sie die
              gespeicherten Website-Daten in Ihrem Browser löschen.
            </p>
          </Section>

          <Section heading="5. Rechte der betroffenen Person">
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
              der Datenverarbeitung. Außerdem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
              Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden.
            </p>
          </Section>

          <Section heading="6. Widerspruch gegen Werbe-Mails">
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
