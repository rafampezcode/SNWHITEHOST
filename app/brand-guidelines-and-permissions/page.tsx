"use client"

import { Palette, MapPin, Mail, Home } from "lucide-react"
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
      {
        title: "1. Purpose",
        blocks: [
          { type: "paragraph", text: "These guidelines establish the proper use of SN WHITE HOSTING trademarks, logos, brand names, and other brand assets by affiliates, partners, resellers, and third parties." },
        ],
      },
      {
        title: "2. Trademark Ownership",
        blocks: [
          { type: "paragraph", text: "SN WHITE HOSTING, SN SOLUTIONS LLC, and related trademarks are the exclusive property of SN SOLUTIONS LLC. All rights are reserved worldwide. Unauthorized use of these marks is prohibited." },
        ],
      },
      {
        title: "3. Approved Uses of the SN WHITE HOSTING Brand",
        blocks: [
          { type: "paragraph", text: "The following uses of the SN WHITE HOSTING brand are permitted:" },
          { type: "list", items: ["By authorized partners and affiliates in promotional materials.", "In factual statements about services provided by SN WHITE HOSTING.", "In news articles or press releases with proper attribution.", "In customer testimonials and case studies with permission.", "In educational or informational content referring to our services."] },
        ],
      },
      {
        title: "4. Logo Usage Requirements",
        blocks: [
          { type: "paragraph", text: "If you are authorized to use the SN WHITE HOSTING logo, the following requirements apply:" },
          { type: "list", items: ["The logo must be used in its original form without modifications.", "Minimum size: 100px wide.", "Clear space around the logo: at least 10px on all sides.", "Do not change colors, proportions, or orientation.", "Do not rotate, skew, or distort the logo.", "Maintain a clear and readable presentation next to the logo."] },
        ],
      },
      {
        title: "5. Prohibited Uses",
        blocks: [
          { type: "paragraph", text: "The following uses of the SN WHITE HOSTING brand are strictly prohibited:" },
          { type: "list", items: ["Modifying the logo, name, or tagline.", "Using the brand to imply endorsement not granted by SN WHITE HOSTING.", "Using the brand in misleading, offensive, or illegal contexts.", "Registering domain names containing SN WHITE HOSTING or SN SOLUTIONS.", "Creating confusion between your brand and SN WHITE HOSTING.", "Using the brand in social media usernames without permission.", "Implying official status, partnership, or affiliation without authorization."] },
        ],
      },
      {
        title: "6. Attribution and Credit",
        blocks: [
          { type: "paragraph", text: "When referencing SN WHITE HOSTING:" },
          { type: "list", items: ["Always use the full and correct name: SN WHITE HOSTING.", "Provide attribution to SN SOLUTIONS LLC when appropriate.", "Include a link to snwhitehosting.com whenever possible."] },
        ],
      },
      {
        title: "7. Affiliate and Reseller Brand Use",
        blocks: [
          { type: "paragraph", text: "Authorized affiliates and resellers may:" },
          { type: "list", items: ["Use the logos and marketing materials we provide.", "Reference SN WHITE HOSTING in promotional content.", "Use SN WHITE HOSTING in product listings or descriptions.", "Display the SN WHITE HOSTING logo on their websites when a badge or asset has been provided for that purpose."] },
          { type: "paragraph", text: "Affiliates and resellers must not create custom versions of our logo or brand materials without explicit written permission." },
        ],
      },
      {
        title: "8. Brand Material Requests",
        blocks: [
          { type: "paragraph", text: "To request logos, brand materials, or approval for a specific use of the SN WHITE HOSTING brand, contact us at:" },
          { type: "email", text: "legal@snwhitehosting.com" },
          { type: "paragraph", text: "Please allow 5 to 7 business days for review and response to brand requests." },
        ],
      },
      {
        title: "9. Enforcement and Violations",
        blocks: [
          { type: "paragraph", text: "Unauthorized or improper use of the SN WHITE HOSTING brand may result in:" },
          { type: "list", items: ["Cease and desist notices.", "Orders to remove content or materials.", "Account suspension or termination.", "Legal action to enforce trademark rights."] },
        ],
      },
      {
        title: "10. Third-Party Brand References",
        blocks: [
          { type: "paragraph", text: "SN WHITE HOSTING does not endorse or approve third-party brands, products, or services that use our name or logo without explicit written authorization." },
        ],
      },
      {
        title: "11. Policy Amendments",
        blocks: [
          { type: "paragraph", text: "These guidelines may be updated at any time. Changes will be published on snwhitehosting.com at least 15 days in advance." },
        ],
      },
    ],
  },
  es: {
    sections: [
      { title: "1. Finalidad", blocks: [{ type: "paragraph", text: "Estas directrices establecen el uso correcto de las marcas, logotipos, nombres comerciales y demás activos de marca de SN WHITE HOSTING por parte de afiliados, socios, resellers y terceros." }] },
      { title: "2. Titularidad de la Marca", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING, SN SOLUTIONS LLC y las marcas relacionadas son propiedad exclusiva de SN SOLUTIONS LLC. Todos los derechos quedan reservados a nivel mundial. Queda prohibido cualquier uso no autorizado de estas marcas." }] },
      { title: "3. Usos Autorizados de la Marca SN WHITE HOSTING", blocks: [{ type: "paragraph", text: "Se permiten los siguientes usos de la marca SN WHITE HOSTING:" }, { type: "list", items: ["Por socios y afiliados autorizados en materiales promocionales.", "En declaraciones objetivas sobre servicios prestados por SN WHITE HOSTING.", "En artículos informativos o notas de prensa con la atribución adecuada.", "En testimonios y casos de éxito de clientes con permiso.", "En contenido educativo o informativo que haga referencia a nuestros servicios."] }] },
      { title: "4. Requisitos de Uso del Logotipo", blocks: [{ type: "paragraph", text: "Si estás autorizado a utilizar el logotipo de SN WHITE HOSTING, se aplican los siguientes requisitos:" }, { type: "list", items: ["El logotipo debe utilizarse en su forma original y sin modificaciones.", "Tamaño mínimo: 100 px de ancho.", "Espacio libre alrededor del logotipo: al menos 10 px por cada lado.", "No cambies colores, proporciones ni orientación.", "No gires, deformes ni distorsiones el logotipo.", "Mantén una presentación clara y legible junto al logotipo."] }] },
      { title: "5. Usos Prohibidos", blocks: [{ type: "paragraph", text: "Quedan estrictamente prohibidos los siguientes usos de la marca SN WHITE HOSTING:" }, { type: "list", items: ["Modificar el logotipo, nombre o eslogan.", "Usar la marca para insinuar una aprobación no concedida por SN WHITE HOSTING.", "Usar la marca en contextos engañosos, ofensivos o ilegales.", "Registrar dominios que incluyan SN WHITE HOSTING o SN SOLUTIONS.", "Generar confusión entre tu marca y SN WHITE HOSTING.", "Usar la marca en nombres de usuario de redes sociales sin permiso.", "Sugerir carácter oficial, asociación o afiliación sin autorización."] }] },
      { title: "6. Atribución y Crédito", blocks: [{ type: "paragraph", text: "Al hacer referencia a SN WHITE HOSTING:" }, { type: "list", items: ["Usa siempre el nombre completo y correcto: SN WHITE HOSTING.", "Atribuye la marca a SN SOLUTIONS LLC cuando corresponda.", "Incluye un enlace a snwhitehosting.com siempre que sea posible."] }] },
      { title: "7. Uso de Marca por Afiliados y Resellers", blocks: [{ type: "paragraph", text: "Los afiliados y resellers autorizados pueden:" }, { type: "list", items: ["Utilizar los logotipos y materiales de marketing proporcionados por nosotros.", "Mencionar SN WHITE HOSTING en contenido promocional.", "Usar SN WHITE HOSTING en listados o descripciones de productos.", "Mostrar el logotipo de SN WHITE HOSTING en sus sitios web cuando se les haya facilitado un distintivo o recurso para ello."] }, { type: "paragraph", text: "Los afiliados y resellers no deben crear versiones personalizadas de nuestro logotipo o materiales de marca sin autorización expresa por escrito." }] },
      { title: "8. Solicitudes de Material de Marca", blocks: [{ type: "paragraph", text: "Para solicitar logotipos, materiales de marca o aprobación para un uso específico de la marca SN WHITE HOSTING, contáctanos en:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Por favor, permite entre 5 y 7 días hábiles para revisar y responder a las solicitudes de marca." }] },
      { title: "9. Cumplimiento e Infracciones", blocks: [{ type: "paragraph", text: "El uso no autorizado o inadecuado de la marca SN WHITE HOSTING puede dar lugar a:" }, { type: "list", items: ["Requerimientos de cese y desistimiento.", "Órdenes de retirada de contenido o materiales.", "Suspensión o cancelación de la cuenta.", "Acciones legales para hacer valer los derechos marcarios."] }] },
      { title: "10. Referencias a Marcas de Terceros", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING no respalda ni aprueba marcas, productos o servicios de terceros que utilicen nuestro nombre o logotipo sin autorización expresa por escrito." }] },
      { title: "11. Modificaciones de la Política", blocks: [{ type: "paragraph", text: "Estas directrices pueden actualizarse en cualquier momento. Los cambios se publicarán en snwhitehosting.com con al menos 15 días de antelación." }] },
    ],
  },
  de: {
    sections: [
      { title: "1. Zweck", blocks: [{ type: "paragraph", text: "Diese Richtlinien legen die ordnungsgemäße Verwendung der Marken, Logos, Handelsnamen und sonstigen Markenwerte von SN WHITE HOSTING durch Affiliates, Partner, Reseller und Dritte fest." }] },
      { title: "2. Eigentum an den Marken", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING, SN SOLUTIONS LLC und zugehörige Marken sind das ausschließliche Eigentum von SN SOLUTIONS LLC. Alle Rechte sind weltweit vorbehalten. Jede unbefugte Nutzung dieser Marken ist untersagt." }] },
      { title: "3. Zulässige Nutzung der Marke SN WHITE HOSTING", blocks: [{ type: "paragraph", text: "Die folgenden Nutzungen der Marke SN WHITE HOSTING sind zulässig:" }, { type: "list", items: ["Durch autorisierte Partner und Affiliates in Werbematerialien.", "In sachlichen Aussagen über von SN WHITE HOSTING erbrachte Leistungen.", "In Nachrichtenartikeln oder Pressemitteilungen mit ordnungsgemäßer Quellenangabe.", "In Kundentestimonials und Fallstudien mit Erlaubnis.", "In Bildungs- oder Informationsinhalten, die auf unsere Dienste Bezug nehmen."] }] },
      { title: "4. Anforderungen an die Logonutzung", blocks: [{ type: "paragraph", text: "Wenn Sie zur Nutzung des SN WHITE HOSTING-Logos berechtigt sind, gelten folgende Anforderungen:" }, { type: "list", items: ["Das Logo muss in seiner Originalform und ohne Änderungen verwendet werden.", "Mindestgröße: 100 px Breite.", "Freiraum um das Logo: mindestens 10 px auf allen Seiten.", "Farben, Proportionen oder Ausrichtung dürfen nicht verändert werden.", "Das Logo darf nicht gedreht, verzerrt oder verformt werden.", "Neben dem Logo ist eine klare und gut lesbare Darstellung beizubehalten."] }] },
      { title: "5. Unzulässige Nutzungen", blocks: [{ type: "paragraph", text: "Die folgenden Nutzungen der Marke SN WHITE HOSTING sind streng untersagt:" }, { type: "list", items: ["Änderung von Logo, Name oder Slogan.", "Verwendung der Marke, um eine nicht gewährte Billigung durch SN WHITE HOSTING vorzutäuschen.", "Verwendung der Marke in irreführenden, beleidigenden oder rechtswidrigen Kontexten.", "Registrierung von Domainnamen, die SN WHITE HOSTING oder SN SOLUTIONS enthalten.", "Schaffung von Verwechslungen zwischen Ihrer Marke und SN WHITE HOSTING.", "Verwendung der Marke in Social-Media-Benutzernamen ohne Erlaubnis.", "Vortäuschung eines offiziellen Status, einer Partnerschaft oder Zugehörigkeit ohne Genehmigung."] }] },
      { title: "6. Quellenangabe und Nennung", blocks: [{ type: "paragraph", text: "Bei Verweisen auf SN WHITE HOSTING gilt:" }, { type: "list", items: ["Verwenden Sie stets den vollständigen und korrekten Namen: SN WHITE HOSTING.", "Nennen Sie gegebenenfalls SN SOLUTIONS LLC als Rechteinhaber.", "Fügen Sie wenn möglich einen Link zu snwhitehosting.com hinzu."] }] },
      { title: "7. Markennutzung durch Affiliates und Reseller", blocks: [{ type: "paragraph", text: "Autorisierte Affiliates und Reseller dürfen:" }, { type: "list", items: ["Die von uns bereitgestellten Logos und Marketingmaterialien verwenden.", "SN WHITE HOSTING in Werbeinhalten erwähnen.", "SN WHITE HOSTING in Produktlisten oder -beschreibungen verwenden.", "Das SN WHITE HOSTING-Logo auf ihren Websites anzeigen, wenn dafür ein Badge oder Material bereitgestellt wurde."] }, { type: "paragraph", text: "Affiliates und Reseller dürfen ohne ausdrückliche schriftliche Genehmigung keine eigenen Versionen unseres Logos oder unserer Markenmaterialien erstellen." }] },
      { title: "8. Anfragen zu Markenmaterial", blocks: [{ type: "paragraph", text: "Um Logos, Markenmaterialien oder eine Genehmigung für eine bestimmte Verwendung der Marke SN WHITE HOSTING anzufordern, kontaktieren Sie uns unter:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Bitte rechnen Sie mit 5 bis 7 Werktagen für Prüfung und Antwort auf Markenanfragen." }] },
      { title: "9. Durchsetzung und Verstöße", blocks: [{ type: "paragraph", text: "Eine unbefugte oder unsachgemäße Nutzung der Marke SN WHITE HOSTING kann zu Folgendem führen:" }, { type: "list", items: ["Unterlassungsaufforderungen.", "Anordnungen zur Entfernung von Inhalten oder Materialien.", "Sperrung oder Kündigung des Kontos.", "Rechtliche Schritte zur Durchsetzung von Markenrechten."] }] },
      { title: "10. Verweise auf Marken Dritter", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING unterstützt oder genehmigt keine Marken, Produkte oder Dienstleistungen Dritter, die unseren Namen oder unser Logo ohne ausdrückliche schriftliche Genehmigung verwenden." }] },
      { title: "11. Änderungen der Richtlinie", blocks: [{ type: "paragraph", text: "Diese Richtlinien können jederzeit aktualisiert werden. Änderungen werden mindestens 15 Tage im Voraus auf snwhitehosting.com veröffentlicht." }] },
    ],
  },
  nl: {
    sections: [
      { title: "1. Doel", blocks: [{ type: "paragraph", text: "Deze richtlijnen bepalen het correcte gebruik van de handelsmerken, logo's, merknamen en andere merkactiva van SN WHITE HOSTING door affiliates, partners, resellers en derden." }] },
      { title: "2. Eigendom van het Merk", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING, SN SOLUTIONS LLC en aanverwante merken zijn het exclusieve eigendom van SN SOLUTIONS LLC. Alle rechten zijn wereldwijd voorbehouden. Ongeautoriseerd gebruik van deze merken is verboden." }] },
      { title: "3. Toegestaan Gebruik van het Merk SN WHITE HOSTING", blocks: [{ type: "paragraph", text: "De volgende vormen van gebruik van het merk SN WHITE HOSTING zijn toegestaan:" }, { type: "list", items: ["Door geautoriseerde partners en affiliates in promotiemateriaal.", "In feitelijke verklaringen over diensten die door SN WHITE HOSTING worden geleverd.", "In nieuwsartikelen of persberichten met correcte bronvermelding.", "In klantgetuigenissen en case studies met toestemming.", "In educatieve of informatieve inhoud die naar onze diensten verwijst."] }] },
      { title: "4. Vereisten voor Logogebruik", blocks: [{ type: "paragraph", text: "Als u toestemming hebt om het logo van SN WHITE HOSTING te gebruiken, gelden de volgende vereisten:" }, { type: "list", items: ["Het logo moet in de originele vorm en zonder wijzigingen worden gebruikt.", "Minimale grootte: 100 px breed.", "Vrije ruimte rond het logo: minimaal 10 px aan alle zijden.", "Wijzig de kleuren, verhoudingen of oriëntatie niet.", "Het logo mag niet worden gedraaid, scheefgetrokken of vervormd.", "Zorg voor een duidelijke en leesbare presentatie naast het logo."] }] },
      { title: "5. Verboden Gebruik", blocks: [{ type: "paragraph", text: "De volgende vormen van gebruik van het merk SN WHITE HOSTING zijn strikt verboden:" }, { type: "list", items: ["Het wijzigen van het logo, de naam of de slogan.", "Het gebruik van het merk om een goedkeuring te suggereren die niet door SN WHITE HOSTING is verleend.", "Het gebruik van het merk in misleidende, beledigende of illegale contexten.", "Het registreren van domeinnamen met SN WHITE HOSTING of SN SOLUTIONS erin.", "Verwarring creëren tussen uw merk en SN WHITE HOSTING.", "Het gebruik van het merk in socialmedia-gebruikersnamen zonder toestemming.", "Het suggereren van een officiële status, samenwerking of affiliatie zonder autorisatie."] }] },
      { title: "6. Bronvermelding en Krediet", blocks: [{ type: "paragraph", text: "Wanneer u naar SN WHITE HOSTING verwijst:" }, { type: "list", items: ["Gebruik altijd de volledige en correcte naam: SN WHITE HOSTING.", "Vermeld waar passend SN SOLUTIONS LLC als rechthebbende.", "Voeg indien mogelijk een link toe naar snwhitehosting.com."] }] },
      { title: "7. Merkgebruik door Affiliates en Resellers", blocks: [{ type: "paragraph", text: "Geautoriseerde affiliates en resellers mogen:" }, { type: "list", items: ["De door ons verstrekte logo's en marketingmaterialen gebruiken.", "SN WHITE HOSTING noemen in promotionele inhoud.", "SN WHITE HOSTING gebruiken in productoverzichten of beschrijvingen.", "Het logo van SN WHITE HOSTING op hun websites tonen wanneer daarvoor een badge of asset is verstrekt."] }, { type: "paragraph", text: "Affiliates en resellers mogen zonder uitdrukkelijke schriftelijke toestemming geen aangepaste versies van ons logo of onze merkmaterialen maken." }] },
      { title: "8. Aanvragen voor Merkmateriaal", blocks: [{ type: "paragraph", text: "Om logo's, merkmaterialen of goedkeuring voor een specifiek gebruik van het merk SN WHITE HOSTING aan te vragen, neem contact met ons op via:" }, { type: "email", text: "legal@snwhitehosting.com" }, { type: "paragraph", text: "Houd rekening met 5 tot 7 werkdagen voor beoordeling en antwoord op aanvragen voor merkmateriaal." }] },
      { title: "9. Handhaving en Overtredingen", blocks: [{ type: "paragraph", text: "Ongeautoriseerd of onjuist gebruik van het merk SN WHITE HOSTING kan leiden tot:" }, { type: "list", items: ["Sommatie- en stakingsbrieven.", "Bevelen tot verwijdering van inhoud of materialen.", "Opschorting of beëindiging van het account.", "Juridische stappen om merkrechten af te dwingen."] }] },
      { title: "10. Verwijzingen naar Merken van Derden", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING ondersteunt of keurt geen merken, producten of diensten van derden goed die onze naam of ons logo gebruiken zonder uitdrukkelijke schriftelijke toestemming." }] },
      { title: "11. Wijzigingen van het Beleid", blocks: [{ type: "paragraph", text: "Deze richtlijnen kunnen op elk moment worden bijgewerkt. Wijzigingen worden ten minste 15 dagen van tevoren gepubliceerd op snwhitehosting.com." }] },
    ],
  },
} as const

export default function BrandGuidelinesPage() {
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
            <Palette className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.brandGuidelinesTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.brandGuidelinesSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/brand-guidelines-and-permissions" />

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

              <div className="mt-16 p-8 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{t.legal.contactUs}</h3>
                <div className="space-y-4 text-base">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
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