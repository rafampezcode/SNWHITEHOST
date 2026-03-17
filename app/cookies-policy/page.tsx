"use client"

import { Cookie, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const localizedContent = {
  en: {
    sections: [
      { title: "1. Introduction", blocks: [{ type: "paragraph" as const, text: 'This Cookies Policy explains how SN WHITE HOSTING, the trade name of SN SOLUTIONS LLC (hereinafter referred to as "we," "us," or "our"), uses cookies and similar technologies to recognize you when you visit our website snwhitehosting.com and the client area. It also explains what these technologies are, why we use them, and your rights to control their use.' }] },
      { title: "2. What are cookies?", blocks: [
        { type: "paragraph" as const, text: "Cookies are small text files that a website places on your computer or mobile device when you visit it. They are widely used to make websites work or work more efficiently." },
        { type: "list" as const, items: ["First-party cookies: set by the domain you are visiting.", "Third-party cookies: set by domains other than the one you are visiting."] },
      ]},
      { title: "3. Why do we use cookies?", blocks: [
        { type: "list" as const, items: ["To enable the technical and secure operation of our website and client panel.", "To remember your preferences and settings.", "To collect statistical data about the use of our services and improve your experience.", "To provide you with faster and more personalized technical support.", "For legitimate marketing purposes, in cases where you have given your consent."] },
      ]},
      { title: "4. Types of cookies we use", blocks: [
        { type: "paragraph" as const, text: "4.1. Strictly necessary cookies — Essential for you to navigate the site and use its features, such as accessing secure areas." },
        { type: "paragraph" as const, text: "4.2. Performance and analytics cookies — Collect information about how visitors use our website. We use tools such as Google Analytics for this purpose." },
        { type: "paragraph" as const, text: "4.3. Functionality cookies — Allow the site to remember the choices you make (such as language or region) and provide enhanced, more personalized features." },
        { type: "paragraph" as const, text: "4.4. Advertising cookies (only with consent) — Used to display relevant advertisements and measure the effectiveness of advertising campaigns." },
      ]},
      { title: "5. Third-party cookies", blocks: [
        { type: "list" as const, items: ["Google Analytics: to analyze web traffic and improve content and navigation.", "Soluciones Corporativas IP, SL: in the context of domain registration, they may use strictly necessary cookies for WHOIS management."] },
      ]},
      { title: "6. Managing cookies", blocks: [
        { type: "paragraph" as const, text: "You have the right to decide whether to accept or reject cookies. You can set your browser to refuse all cookies or to alert you when a cookie is being sent." },
        { type: "paragraph" as const, text: "If you disable cookies, some parts of our website may not function properly." },
      ]},
      { title: "7. Cookie retention", blocks: [
        { type: "paragraph" as const, text: 'Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or you delete them.' },
      ]},
      { title: "8. Changes to the Cookies Policy", blocks: [
        { type: "paragraph" as const, text: "SN WHITE HOSTING may update this Cookies Policy at any time. When changes are made, we will notify you via our website or other means at least 15 days before they take effect." },
      ]},
      { title: "9. Contact", blocks: [
        { type: "paragraph" as const, text: "SN SOLUTIONS LLC — EIN: 32-0817400 — 1209 Mountain Road Pl NE, Ste N, Albuquerque, New Mexico, 87110, USA" },
        { type: "email" as const, label: "Email:", email: "legal@snwhitehosting.com" },
        { type: "paragraph" as const, text: "Effective date: February 21, 2026" },
      ]},
    ],
  },
  es: {
    sections: [
      { title: "1. Introducción", blocks: [{ type: "paragraph" as const, text: 'Esta Política de Cookies explica cómo SN WHITE HOSTING, nombre comercial de SN SOLUTIONS LLC (en adelante "nosotros", "nos" o "nuestro"), utiliza cookies y tecnologías similares para reconocerle cuando visita nuestro sitio web snwhitehosting.com y el área de clientes.' }] },
      { title: "2. ¿Qué son las cookies?", blocks: [
        { type: "paragraph" as const, text: "Las cookies son pequeños archivos de texto que un sitio web coloca en su ordenador o dispositivo móvil cuando lo visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente." },
        { type: "list" as const, items: ["Cookies propias: establecidas por el dominio que está visitando.", "Cookies de terceros: establecidas por dominios distintos al que está visitando."] },
      ]},
      { title: "3. ¿Por qué usamos cookies?", blocks: [
        { type: "list" as const, items: ["Para permitir el funcionamiento técnico y seguro de nuestro sitio web y panel de clientes.", "Para recordar sus preferencias y ajustes.", "Para recopilar datos estadísticos sobre el uso de nuestros servicios y mejorar su experiencia.", "Para ofrecerle soporte técnico más rápido y personalizado.", "Para fines de marketing legítimos, cuando haya dado su consentimiento."] },
      ]},
      { title: "4. Tipos de cookies que utilizamos", blocks: [
        { type: "paragraph" as const, text: "4.1. Cookies estrictamente necesarias — Esenciales para que pueda navegar por el sitio y utilizar sus funcionalidades." },
        { type: "paragraph" as const, text: "4.2. Cookies de rendimiento y análisis — Recopilan información sobre cómo los visitantes utilizan nuestro sitio web. Usamos herramientas como Google Analytics." },
        { type: "paragraph" as const, text: "4.3. Cookies de funcionalidad — Permiten al sitio recordar las opciones que elige (como idioma o región) y ofrecer funciones mejoradas." },
        { type: "paragraph" as const, text: "4.4. Cookies publicitarias (solo con consentimiento) — Se utilizan para mostrar anuncios relevantes y medir la eficacia de las campañas publicitarias." },
      ]},
      { title: "5. Cookies de terceros", blocks: [
        { type: "list" as const, items: ["Google Analytics: para analizar el tráfico web y mejorar el contenido y la navegación.", "Soluciones Corporativas IP, S.L.: en el contexto del registro de dominios, pueden utilizar cookies estrictamente necesarias para la gestión del WHOIS."] },
      ]},
      { title: "6. Gestión de cookies", blocks: [
        { type: "paragraph" as const, text: "Tiene derecho a decidir si acepta o rechaza las cookies. Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie." },
        { type: "paragraph" as const, text: "Si desactiva las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente." },
      ]},
      { title: "7. Retención de cookies", blocks: [
        { type: "paragraph" as const, text: "Las cookies de sesión se eliminan cuando cierra el navegador, mientras que las cookies persistentes permanecen hasta que expiran o usted las elimina." },
      ]},
      { title: "8. Cambios en la Política de Cookies", blocks: [
        { type: "paragraph" as const, text: "SN WHITE HOSTING puede actualizar esta Política de Cookies en cualquier momento. Cuando se realicen cambios, se lo notificaremos a través de nuestro sitio web u otros medios con al menos 15 días de antelación." },
      ]},
      { title: "9. Contacto", blocks: [
        { type: "paragraph" as const, text: "SN SOLUTIONS LLC — EIN: 32-0817400 — 1209 Mountain Road Pl NE, Ste N, Albuquerque, Nuevo México, 87110, EE. UU." },
        { type: "email" as const, label: "Correo electrónico:", email: "legal@snwhitehosting.com" },
        { type: "paragraph" as const, text: "Fecha de entrada en vigor: 21 de febrero de 2026" },
      ]},
    ],
  },
  de: {
    sections: [
      { title: "1. Einleitung", blocks: [{ type: "paragraph" as const, text: 'Diese Cookie-Richtlinie erklärt, wie SN WHITE HOSTING, der Handelsname von SN SOLUTIONS LLC (im Folgenden "wir", "uns" oder "unser"), Cookies und ähnliche Technologien verwendet, um Sie zu erkennen, wenn Sie unsere Website snwhitehosting.com und den Kundenbereich besuchen.' }] },
      { title: "2. Was sind Cookies?", blocks: [
        { type: "paragraph" as const, text: "Cookies sind kleine Textdateien, die eine Website auf Ihrem Computer oder Mobilgerät speichert, wenn Sie sie besuchen. Sie werden häufig eingesetzt, damit Websites effizienter funktionieren." },
        { type: "list" as const, items: ["Erstanbieter-Cookies: gesetzt durch die Domain, die Sie besuchen.", "Drittanbieter-Cookies: gesetzt durch andere Domains als die besuchte."] },
      ]},
      { title: "3. Warum verwenden wir Cookies?", blocks: [
        { type: "list" as const, items: ["Für den technischen und sicheren Betrieb unserer Website und des Kundenbereichs.", "Um Ihre Einstellungen und Präferenzen zu speichern.", "Zur Erfassung statistischer Daten über die Nutzung unserer Dienste und zur Verbesserung Ihrer Erfahrung.", "Für schnelleren und persönlicheren technischen Support.", "Für legitime Marketingzwecke, wenn Sie Ihre Einwilligung gegeben haben."] },
      ]},
      { title: "4. Arten von Cookies, die wir verwenden", blocks: [
        { type: "paragraph" as const, text: "4.1. Unbedingt notwendige Cookies — Wesentlich für die Navigation und Nutzung der Website." },
        { type: "paragraph" as const, text: "4.2. Leistungs- und Analyse-Cookies — Erfassen Informationen über die Nutzung unserer Website. Wir verwenden Tools wie Google Analytics." },
        { type: "paragraph" as const, text: "4.3. Funktionale Cookies — Ermöglichen es der Website, Ihre Auswahl (z. B. Sprache oder Region) zu speichern und verbesserte Funktionen anzubieten." },
        { type: "paragraph" as const, text: "4.4. Werbe-Cookies (nur mit Einwilligung) — Werden zur Anzeige relevanter Werbung und Messung der Kampagneneffektivität verwendet." },
      ]},
      { title: "5. Drittanbieter-Cookies", blocks: [
        { type: "list" as const, items: ["Google Analytics: zur Analyse des Web-Traffics und Verbesserung von Inhalten und Navigation.", "Soluciones Corporativas IP, S.L.: Im Rahmen der Domainregistrierung können notwendige Cookies für die WHOIS-Verwaltung verwendet werden."] },
      ]},
      { title: "6. Cookie-Verwaltung", blocks: [
        { type: "paragraph" as const, text: "Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihren Browser so einstellen, dass alle Cookies abgelehnt werden oder Sie benachrichtigt werden." },
        { type: "paragraph" as const, text: "Wenn Sie Cookies deaktivieren, funktionieren einige Teile unserer Website möglicherweise nicht korrekt." },
      ]},
      { title: "7. Cookie-Aufbewahrung", blocks: [
        { type: "paragraph" as const, text: "Sitzungs-Cookies werden gelöscht, wenn Sie Ihren Browser schließen, während persistente Cookies verbleiben, bis sie ablaufen oder von Ihnen gelöscht werden." },
      ]},
      { title: "8. Änderungen der Cookie-Richtlinie", blocks: [
        { type: "paragraph" as const, text: "SN WHITE HOSTING kann diese Cookie-Richtlinie jederzeit aktualisieren. Bei Änderungen werden wir Sie über unsere Website oder andere Kanäle mindestens 15 Tage im Voraus informieren." },
      ]},
      { title: "9. Kontakt", blocks: [
        { type: "paragraph" as const, text: "SN SOLUTIONS LLC — EIN: 32-0817400 — 1209 Mountain Road Pl NE, Ste N, Albuquerque, New Mexico, 87110, USA" },
        { type: "email" as const, label: "E-Mail:", email: "legal@snwhitehosting.com" },
        { type: "paragraph" as const, text: "Datum des Inkrafttretens: 21. Februar 2026" },
      ]},
    ],
  },
  nl: {
    sections: [
      { title: "1. Inleiding", blocks: [{ type: "paragraph" as const, text: 'Dit Cookiebeleid legt uit hoe SN WHITE HOSTING, de handelsnaam van SN SOLUTIONS LLC (hierna "wij", "ons" of "onze"), cookies en soortgelijke technologieën gebruikt om u te herkennen wanneer u onze website snwhitehosting.com en het klantengebied bezoekt.' }] },
      { title: "2. Wat zijn cookies?", blocks: [
        { type: "paragraph" as const, text: "Cookies zijn kleine tekstbestanden die een website op uw computer of mobiel apparaat plaatst wanneer u die website bezoekt. Ze worden veel gebruikt om websites efficiënter te laten werken." },
        { type: "list" as const, items: ["Eigen cookies: geplaatst door het domein dat u bezoekt.", "Cookies van derden: geplaatst door andere domeinen dan het domein dat u bezoekt."] },
      ]},
      { title: "3. Waarom gebruiken wij cookies?", blocks: [
        { type: "list" as const, items: ["Voor de technische en veilige werking van onze website en het klantenpaneel.", "Om uw voorkeuren en instellingen te onthouden.", "Om statistische gegevens te verzamelen over het gebruik van onze diensten en uw ervaring te verbeteren.", "Om u snellere en meer gepersonaliseerde technische ondersteuning te bieden.", "Voor legitieme marketingdoeleinden, wanneer u daarvoor toestemming heeft gegeven."] },
      ]},
      { title: "4. Soorten cookies die wij gebruiken", blocks: [
        { type: "paragraph" as const, text: "4.1. Strikt noodzakelijke cookies — Essentieel om op de website te navigeren en de functies te gebruiken." },
        { type: "paragraph" as const, text: "4.2. Prestatie- en analysecookies — Verzamelen informatie over hoe bezoekers onze website gebruiken. Wij gebruiken tools zoals Google Analytics." },
        { type: "paragraph" as const, text: "4.3. Functionaliteitscookies — Stellen de website in staat uw keuzes te onthouden (zoals taal of regio) en verbeterde functies aan te bieden." },
        { type: "paragraph" as const, text: "4.4. Advertentiecookies (alleen met toestemming) — Worden gebruikt om relevante advertenties te tonen en de effectiviteit van campagnes te meten." },
      ]},
      { title: "5. Cookies van derden", blocks: [
        { type: "list" as const, items: ["Google Analytics: voor het analyseren van webverkeer en het verbeteren van inhoud en navigatie.", "Soluciones Corporativas IP, S.L.: in het kader van domeinregistratie kunnen strikt noodzakelijke cookies worden gebruikt voor WHOIS-beheer."] },
      ]},
      { title: "6. Cookies beheren", blocks: [
        { type: "paragraph" as const, text: "U heeft het recht om te beslissen of u cookies accepteert of weigert. U kunt uw browser instellen om alle cookies te weigeren of u te waarschuwen wanneer een cookie wordt verzonden." },
        { type: "paragraph" as const, text: "Als u cookies uitschakelt, werken sommige onderdelen van onze website mogelijk niet correct." },
      ]},
      { title: "7. Bewaring van cookies", blocks: [
        { type: "paragraph" as const, text: "Sessiecookies worden verwijderd wanneer u uw browser sluit, terwijl persistente cookies bewaard blijven totdat ze verlopen of u ze verwijdert." },
      ]},
      { title: "8. Wijzigingen in het Cookiebeleid", blocks: [
        { type: "paragraph" as const, text: "SN WHITE HOSTING kan dit Cookiebeleid op elk moment bijwerken. Bij wijzigingen zullen wij u via onze website of andere middelen ten minste 15 dagen van tevoren informeren." },
      ]},
      { title: "9. Contact", blocks: [
        { type: "paragraph" as const, text: "SN SOLUTIONS LLC — EIN: 32-0817400 — 1209 Mountain Road Pl NE, Ste N, Albuquerque, New Mexico, 87110, VS" },
        { type: "email" as const, label: "E-mail:", email: "legal@snwhitehosting.com" },
        { type: "paragraph" as const, text: "Ingangsdatum: 21 februari 2026" },
      ]},
    ],
  },
} as const

export default function CookiesPolicyPage() {
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
            <Cookie className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.cookiesPolicyTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.cookiesPolicySubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/cookies-policy" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              <style jsx global>{`
                .prose h2 { font-size: 2rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; color: hsl(var(--foreground)); }
                .prose p { margin-bottom: 1.25rem; line-height: 1.8; color: hsl(var(--foreground)); }
                .prose ul { margin-top: 1rem; margin-bottom: 1.5rem; padding-left: 1.5rem; }
                .prose li { margin-bottom: 0.75rem; color: hsl(var(--foreground)); }
                .prose section { margin-bottom: 3rem; }
              `}</style>

              {content.sections.map((section) => (
                <section key={section.title} className="mb-8">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => {
                    if (block.type === "paragraph") return <p key={index}>{block.text}</p>
                    if (block.type === "list") return <ul key={index}>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    if (block.type === "email") return <p key={index}>{block.label} <a href={`mailto:${block.email}`} className="text-primary hover:underline">{block.email}</a></p>
                    return null
                  })}
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
                    <a href="mailto:legal@snwhitehosting.com" className="text-primary hover:underline">legal@snwhitehosting.com</a>
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
