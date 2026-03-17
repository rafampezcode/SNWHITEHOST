"use client"

import { Copyright, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "email"; text: string }

type ContentSection = {
  title: string
  blocks: ContentBlock[]
}

const localizedContent = {
  en: {
    sections: [
      { title: "1. Purpose", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING is committed to protecting intellectual property rights and preventing trademark and copyright infringement. This policy defines our procedures for handling infringement claims and safeguarding intellectual property." }] },
      { title: "2. Intellectual Property Rights", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING recognizes and respects all intellectual property rights, including:" }, { type: "list", items: ["Trademarks and service marks.", "Copyright-protected works.", "Patents and trade secrets.", "Domain names and brand names."] }] },
      { title: "3. Our Intellectual Property", blocks: [{ type: "paragraph", text: "All content on snwhitehosting.com, including text, graphics, logos, images, software, and other materials, is the property of SN WHITE HOSTING or its content suppliers. Use is permitted only in accordance with these terms and applicable laws." }] },
      { title: "4. Customer-Provided Content", blocks: [{ type: "paragraph", text: "By uploading content to SN WHITE HOSTING services, customers retain ownership of their intellectual property. SN WHITE HOSTING does not claim ownership of customer content." }, { type: "paragraph", text: "However, customers grant SN WHITE HOSTING a license to use customer content as necessary to provide services, including:" }, { type: "list", items: ["Backing up and storing content.", "Displaying content on customer websites.", "Processing content for technical optimization."] }] },
      { title: "5. Copyright Infringement Notices (DMCA)", blocks: [{ type: "paragraph", text: "If you believe content hosted on our services infringes your copyright, you may submit a DMCA notice. SN WHITE HOSTING will take appropriate action upon receipt of a valid notice, including content removal and account suspension." }, { type: "paragraph", text: "DMCA notices should be submitted to:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Notices should include:" }, { type: "list", items: ["Your name, address, and contact information.", "A description of the copyrighted work.", "The URL or specific location of the allegedly infringing content.", "A statement that you believe the content infringes your copyright.", "A statement under penalty of perjury that you are authorized to act on behalf of the copyright holder.", "Your physical or electronic signature."] }] },
      { title: "6. Trademark Infringement Claims", blocks: [{ type: "paragraph", text: "If you believe content or a domain name infringes your trademark rights, contact us at:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Please include:" }, { type: "list", items: ["Proof of trademark registration, if available.", "A description of the infringing use.", "The URL or specific location of the content in question.", "A statement explaining the alleged infringement.", "Your contact information."] }] },
      { title: "7. Counter-Notification Procedure", blocks: [{ type: "paragraph", text: "If your content has been removed due to a copyright or trademark claim and you believe the removal was made in error, you may file a counter-notification. Counter-notifications must include:" }, { type: "list", items: ["Your name and contact information.", "Identification of the removed content.", "A statement that you believe the removal was made in error.", "Your consent to the jurisdiction of the courts where your address is located.", "Your physical or electronic signature."] }] },
      { title: "8. Repeat Infringer Policy", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING maintains a policy of terminating the accounts of repeat infringers. Customers who repeatedly engage in copyright or trademark infringement may have their accounts suspended and terminated without refund." }] },
      { title: "9. Limitation of Liability", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING is not liable for:" }, { type: "list", items: ["Claims arising from customer-provided content.", "Unauthorized modifications of customer content.", "Delays in responding to infringement notices.", "False or fraudulent infringement claims."] }] },
      { title: "10. Investigation Process", blocks: [{ type: "paragraph", text: "Upon receiving an infringement notice, SN WHITE HOSTING will:" }, { type: "list", items: ["Verify that the notice is complete and valid.", "Investigate the reported infringement.", "Take appropriate action if the infringement is confirmed.", "Notify the affected customer."] }] },
      { title: "11. Policy Amendments", blocks: [{ type: "paragraph", text: "This policy may be amended at any time. Changes will be posted on snwhitehosting.com at least 15 days in advance." }] },
    ],
  },
  es: {
    sections: [
      { title: "1. Finalidad", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING está comprometido con la protección de los derechos de propiedad intelectual y con la prevención de infracciones de marca y derechos de autor. Esta política define nuestros procedimientos para gestionar reclamaciones de infracción y proteger la propiedad intelectual." }] },
      { title: "2. Derechos de Propiedad Intelectual", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING reconoce y respeta todos los derechos de propiedad intelectual, incluidos:" }, { type: "list", items: ["Marcas registradas y marcas de servicio.", "Obras protegidas por derechos de autor.", "Patentes y secretos comerciales.", "Nombres de dominio y nombres comerciales."] }] },
      { title: "3. Nuestra Propiedad Intelectual", blocks: [{ type: "paragraph", text: "Todo el contenido de snwhitehosting.com, incluidos textos, gráficos, logotipos, imágenes, software y otros materiales, es propiedad de SN WHITE HOSTING o de sus proveedores de contenido. Su uso solo está permitido conforme a esta política y a la legislación aplicable." }] },
      { title: "4. Contenido Proporcionado por el Cliente", blocks: [{ type: "paragraph", text: "Al subir contenido a los servicios de SN WHITE HOSTING, los clientes conservan la titularidad de su propiedad intelectual. SN WHITE HOSTING no reclama la propiedad del contenido del cliente." }, { type: "paragraph", text: "No obstante, el cliente concede a SN WHITE HOSTING una licencia para utilizar dicho contenido en la medida necesaria para prestar los servicios, lo que incluye:" }, { type: "list", items: ["Realizar copias de seguridad y almacenar el contenido.", "Mostrar el contenido en los sitios web del cliente.", "Procesar el contenido para fines de optimización técnica."] }] },
      { title: "5. Avisos de Infracción de Derechos de Autor (DMCA)", blocks: [{ type: "paragraph", text: "Si consideras que el contenido alojado en nuestros servicios infringe tus derechos de autor, puedes enviar un aviso DMCA. SN WHITE HOSTING adoptará las medidas oportunas al recibir un aviso válido, incluida la retirada del contenido y la suspensión de la cuenta." }, { type: "paragraph", text: "Los avisos DMCA deben enviarse a:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "El aviso debe incluir:" }, { type: "list", items: ["Tu nombre, dirección e información de contacto.", "Una descripción de la obra protegida por derechos de autor.", "La URL o ubicación específica del contenido presuntamente infractor.", "Una declaración indicando que consideras que el contenido infringe tus derechos de autor.", "Una declaración, bajo pena de perjurio, de que estás autorizado para actuar en nombre del titular de los derechos.", "Tu firma física o electrónica."] }] },
      { title: "6. Reclamaciones por Infracción de Marca", blocks: [{ type: "paragraph", text: "Si consideras que un contenido o un nombre de dominio infringe tus derechos marcarios, contáctanos en:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Incluye:" }, { type: "list", items: ["Prueba del registro de la marca, si está disponible.", "Descripción del uso presuntamente infractor.", "La URL o ubicación específica del contenido en cuestión.", "Una explicación de la infracción alegada.", "Tu información de contacto."] }] },
      { title: "7. Procedimiento de Contra-Notificación", blocks: [{ type: "paragraph", text: "Si tu contenido ha sido retirado debido a una reclamación de derechos de autor o marca y consideras que se retiró por error, puedes presentar una contra-notificación. Debe incluir:" }, { type: "list", items: ["Tu nombre e información de contacto.", "La identificación del contenido retirado.", "Una declaración de que consideras que la retirada fue errónea.", "Tu consentimiento a la jurisdicción de los tribunales del lugar donde resides.", "Tu firma física o electrónica."] }] },
      { title: "8. Política para Infractores Reincidentes", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING mantiene una política de cancelación de cuentas de infractores reincidentes. Los clientes que incurran repetidamente en infracciones de marca o derechos de autor pueden ver sus cuentas suspendidas y canceladas sin derecho a reembolso." }] },
      { title: "9. Limitación de Responsabilidad", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING no será responsable de:" }, { type: "list", items: ["Reclamaciones derivadas de contenido proporcionado por clientes.", "Modificaciones no autorizadas del contenido del cliente.", "Retrasos en la respuesta a avisos de infracción.", "Reclamaciones falsas o fraudulentas de infracción."] }] },
      { title: "10. Proceso de Investigación", blocks: [{ type: "paragraph", text: "Al recibir un aviso de infracción, SN WHITE HOSTING:" }, { type: "list", items: ["Verificará que el aviso esté completo y sea válido.", "Investigará la infracción reportada.", "Adoptará las medidas oportunas si se confirma la infracción.", "Notificará al cliente afectado."] }] },
      { title: "11. Modificaciones de la Política", blocks: [{ type: "paragraph", text: "Esta política puede modificarse en cualquier momento. Los cambios se publicarán en snwhitehosting.com con al menos 15 días de antelación." }] },
    ],
  },
  de: {
    sections: [
      { title: "1. Zweck", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING verpflichtet sich zum Schutz geistiger Eigentumsrechte und zur Verhinderung von Marken- und Urheberrechtsverletzungen. Diese Richtlinie definiert unsere Verfahren zur Bearbeitung von Verletzungsmeldungen und zum Schutz geistigen Eigentums." }] },
      { title: "2. Rechte des Geistigen Eigentums", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING erkennt alle Rechte des geistigen Eigentums an und respektiert sie, darunter:" }, { type: "list", items: ["Marken und Dienstleistungsmarken.", "Urheberrechtlich geschützte Werke.", "Patente und Geschäftsgeheimnisse.", "Domainnamen und Markennamen."] }] },
      { title: "3. Unser Geistiges Eigentum", blocks: [{ type: "paragraph", text: "Alle Inhalte auf snwhitehosting.com, einschließlich Texte, Grafiken, Logos, Bilder, Software und sonstiger Materialien, sind Eigentum von SN WHITE HOSTING oder seiner Inhaltsanbieter. Eine Nutzung ist nur im Einklang mit dieser Richtlinie und dem anwendbaren Recht zulässig." }] },
      { title: "4. Vom Kunden Bereitgestellte Inhalte", blocks: [{ type: "paragraph", text: "Durch das Hochladen von Inhalten auf Dienste von SN WHITE HOSTING behalten Kunden das Eigentum an ihren Rechten des geistigen Eigentums. SN WHITE HOSTING beansprucht kein Eigentum an Kundeninhalten." }, { type: "paragraph", text: "Kunden erteilen SN WHITE HOSTING jedoch eine Lizenz zur Nutzung dieser Inhalte, soweit dies zur Bereitstellung der Dienste erforderlich ist, einschließlich:" }, { type: "list", items: ["Sicherung und Speicherung der Inhalte.", "Anzeige der Inhalte auf Kundenwebsites.", "Verarbeitung der Inhalte zur technischen Optimierung."] }] },
      { title: "5. Mitteilungen über Urheberrechtsverletzungen (DMCA)", blocks: [{ type: "paragraph", text: "Wenn Sie der Ansicht sind, dass auf unseren Diensten gehostete Inhalte Ihre Urheberrechte verletzen, können Sie eine DMCA-Meldung einreichen. SN WHITE HOSTING wird nach Erhalt einer gültigen Meldung geeignete Maßnahmen ergreifen, einschließlich der Entfernung von Inhalten und der Sperrung von Konten." }, { type: "paragraph", text: "DMCA-Meldungen sind zu senden an:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Die Meldung sollte enthalten:" }, { type: "list", items: ["Ihren Namen, Ihre Anschrift und Kontaktdaten.", "Eine Beschreibung des urheberrechtlich geschützten Werks.", "Die URL oder den genauen Ort der mutmaßlich rechtsverletzenden Inhalte.", "Eine Erklärung, dass Sie die Inhalte für urheberrechtsverletzend halten.", "Eine eidesstattliche Erklärung, dass Sie befugt sind, im Namen des Rechteinhabers zu handeln.", "Ihre handschriftliche oder elektronische Unterschrift."] }] },
      { title: "6. Ansprüche wegen Markenverletzung", blocks: [{ type: "paragraph", text: "Wenn Sie der Ansicht sind, dass Inhalte oder ein Domainname Ihre Markenrechte verletzen, kontaktieren Sie uns unter:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Bitte fügen Sie Folgendes bei:" }, { type: "list", items: ["Nachweis der Markenregistrierung, sofern vorhanden.", "Beschreibung der mutmaßlich verletzenden Nutzung.", "Die URL oder den genauen Ort der betreffenden Inhalte.", "Eine Erklärung zur behaupteten Verletzung.", "Ihre Kontaktdaten."] }] },
      { title: "7. Gegendarstellungsverfahren", blocks: [{ type: "paragraph", text: "Wenn Ihre Inhalte aufgrund einer Urheberrechts- oder Markenbeschwerde entfernt wurden und Sie glauben, dass dies irrtümlich geschah, können Sie eine Gegendarstellung einreichen. Diese muss enthalten:" }, { type: "list", items: ["Ihren Namen und Ihre Kontaktdaten.", "Die Identifizierung der entfernten Inhalte.", "Eine Erklärung, dass Sie die Entfernung für fehlerhaft halten.", "Ihre Zustimmung zur Zuständigkeit der Gerichte an Ihrem Wohnsitz.", "Ihre handschriftliche oder elektronische Unterschrift."] }] },
      { title: "8. Richtlinie für Wiederholte Verletzer", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING verfolgt die Richtlinie, Konten wiederholter Verletzer zu kündigen. Kunden, die wiederholt Urheberrechts- oder Markenverletzungen begehen, können ohne Rückerstattung gesperrt und gekündigt werden." }] },
      { title: "9. Haftungsbeschränkung", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING haftet nicht für:" }, { type: "list", items: ["Ansprüche aufgrund von kundenbereitgestellten Inhalten.", "Unbefugte Änderungen an Kundeninhalten.", "Verzögerungen bei der Bearbeitung von Verletzungsmeldungen.", "Falsche oder betrügerische Verletzungsanzeigen."] }] },
      { title: "10. Untersuchungsverfahren", blocks: [{ type: "paragraph", text: "Nach Erhalt einer Verletzungsmeldung wird SN WHITE HOSTING:" }, { type: "list", items: ["Prüfen, ob die Meldung vollständig und gültig ist.", "Die gemeldete Verletzung untersuchen.", "Bei bestätigter Verletzung geeignete Maßnahmen ergreifen.", "Den betroffenen Kunden benachrichtigen."] }] },
      { title: "11. Änderungen der Richtlinie", blocks: [{ type: "paragraph", text: "Diese Richtlinie kann jederzeit geändert werden. Änderungen werden mindestens 15 Tage im Voraus auf snwhitehosting.com veröffentlicht." }] },
    ],
  },
  nl: {
    sections: [
      { title: "1. Doel", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING zet zich in voor de bescherming van intellectuele eigendomsrechten en het voorkomen van inbreuken op handelsmerken en auteursrechten. Dit beleid beschrijft onze procedures voor het behandelen van inbreukmeldingen en het beschermen van intellectuele eigendom." }] },
      { title: "2. Intellectuele Eigendomsrechten", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING erkent en respecteert alle intellectuele eigendomsrechten, waaronder:" }, { type: "list", items: ["Handelsmerken en servicemerken.", "Door auteursrecht beschermde werken.", "Octrooien en bedrijfsgeheimen.", "Domeinnamen en merknamen."] }] },
      { title: "3. Onze Intellectuele Eigendom", blocks: [{ type: "paragraph", text: "Alle inhoud op snwhitehosting.com, waaronder tekst, afbeeldingen, logo's, software en andere materialen, is eigendom van SN WHITE HOSTING of haar contentleveranciers. Gebruik is alleen toegestaan in overeenstemming met dit beleid en de toepasselijke wetgeving." }] },
      { title: "4. Door Klanten Geleverde Inhoud", blocks: [{ type: "paragraph", text: "Door inhoud te uploaden naar diensten van SN WHITE HOSTING behouden klanten het eigendom van hun intellectuele eigendom. SN WHITE HOSTING claimt geen eigendom van klantinhoud." }, { type: "paragraph", text: "Klanten verlenen SN WHITE HOSTING echter een licentie om die inhoud te gebruiken voor zover dat nodig is om de diensten te leveren, waaronder:" }, { type: "list", items: ["Het maken van back-ups en het opslaan van inhoud.", "Het tonen van inhoud op websites van klanten.", "Het verwerken van inhoud voor technische optimalisatie."] }] },
      { title: "5. Meldingen van Auteursrechtinbreuk (DMCA)", blocks: [{ type: "paragraph", text: "Als u van mening bent dat inhoud die op onze diensten wordt gehost inbreuk maakt op uw auteursrecht, kunt u een DMCA-melding indienen. SN WHITE HOSTING neemt passende maatregelen na ontvangst van een geldige melding, waaronder verwijdering van inhoud en opschorting van accounts." }, { type: "paragraph", text: "DMCA-meldingen moeten worden gestuurd naar:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "De melding moet bevatten:" }, { type: "list", items: ["Uw naam, adres en contactgegevens.", "Een beschrijving van het auteursrechtelijk beschermde werk.", "De URL of specifieke locatie van de vermeend inbreukmakende inhoud.", "Een verklaring dat u van mening bent dat de inhoud inbreuk maakt op uw auteursrecht.", "Een verklaring, op straffe van meineed, dat u bevoegd bent om namens de rechthebbende op te treden.", "Uw fysieke of elektronische handtekening."] }] },
      { title: "6. Claims inzake Handelsmerkinbreuk", blocks: [{ type: "paragraph", text: "Als u van mening bent dat inhoud of een domeinnaam inbreuk maakt op uw merkrechten, neem dan contact met ons op via:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Voeg het volgende toe:" }, { type: "list", items: ["Bewijs van merkregistratie, indien beschikbaar.", "Een beschrijving van het vermeend inbreukmakende gebruik.", "De URL of specifieke locatie van de betreffende inhoud.", "Een verklaring waarin de vermeende inbreuk wordt uitgelegd.", "Uw contactgegevens."] }] },
      { title: "7. Procedure voor Tegenbericht", blocks: [{ type: "paragraph", text: "Als uw inhoud is verwijderd vanwege een claim van auteursrecht- of handelsmerkinbreuk en u van mening bent dat dit ten onrechte is gebeurd, kunt u een tegenbericht indienen. Dit moet bevatten:" }, { type: "list", items: ["Uw naam en contactgegevens.", "Identificatie van de verwijderde inhoud.", "Een verklaring dat u van mening bent dat de verwijdering onterecht was.", "Uw instemming met de bevoegdheid van de rechtbanken waar uw adres is gevestigd.", "Uw fysieke of elektronische handtekening."] }] },
      { title: "8. Beleid voor Herhaalde Inbreukmakers", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING hanteert een beleid waarbij accounts van herhaalde inbreukmakers worden beëindigd. Klanten die herhaaldelijk inbreuk maken op auteursrechten of handelsmerken kunnen zonder restitutie worden geschorst en beëindigd." }] },
      { title: "9. Beperking van Aansprakelijkheid", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING is niet aansprakelijk voor:" }, { type: "list", items: ["Claims die voortvloeien uit door klanten aangeleverde inhoud.", "Ongeautoriseerde wijzigingen van klantinhoud.", "Vertragingen bij het reageren op inbreukmeldingen.", "Valse of frauduleuze inbreukclaims."] }] },
      { title: "10. Onderzoeksproces", blocks: [{ type: "paragraph", text: "Na ontvangst van een inbreukmelding zal SN WHITE HOSTING:" }, { type: "list", items: ["Controleren of de melding volledig en geldig is.", "De gemelde inbreuk onderzoeken.", "Passende maatregelen nemen als de inbreuk wordt bevestigd.", "De getroffen klant informeren."] }] },
      { title: "11. Wijzigingen van het Beleid", blocks: [{ type: "paragraph", text: "Dit beleid kan op elk moment worden gewijzigd. Wijzigingen worden ten minste 15 dagen van tevoren gepubliceerd op snwhitehosting.com." }] },
    ],
  },
} as const

export default function TrademarkAndCopyrightPolicyPage() {
  const { t, language } = useLanguage()
  const content = localizedContent[language] ?? localizedContent.en

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Copyright className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.trademarkCopyrightTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.trademarkCopyrightSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/trademark-and-copyright-policy" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none ">
              <style jsx global>{`
                .prose h2 {
                  font-size: 2rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  color: hsl(var(--foreground));
                  }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: hsl(var(--primary));
                }
                .prose p {
                  margin-bottom: 1.25rem;
                  line-height: 1.8;
                  color: hsl(var(--foreground));
                }
                .prose ul {
                  margin-top: 1rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.75rem;
                  color: hsl(var(--foreground));
                }
                .prose section {
                  margin-bottom: 3rem;
                }
                .prose strong {
                  color: hsl(var(--foreground));
                }
              `}</style>
              {content.sections.map((section) => (
                <section key={section.title} className="mb-8">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => {
                    if (block.type === "list") {
                      return (
                        <ul key={`${section.title}-list-${index}`}>
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }

                    if (block.type === "email") {
                      return (
                        <p key={`${section.title}-email-${index}`} className="text-primary font-medium">
                          {block.text}
                        </p>
                      )
                    }

                    return <p key={`${section.title}-paragraph-${index}`}>{block.text}</p>
                  })}
                  {section.title === content.sections[content.sections.length - 1].title ? (
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>{t.legal.effectiveDateLabel}:</strong> 01/08/2025
                    </p>
                  ) : null}
                </section>
              ))}

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">{t.legal.contactUs}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:legal@snwhitehosting.com" className="text-primary hover:underline">
                      legal@snwhitehosting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      )
      }