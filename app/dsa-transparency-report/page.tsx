"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
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
      { title: "1. Introduction", blocks: [{ type: "paragraph", text: "This report is published by SN WHITE HOSTING, operated by SN SOLUTIONS LLC, in compliance with the European Union Digital Services Act (DSA), Regulation (EU) 2022/2065. It provides information about moderation practices, user safeguards, and compliance measures." }] },
      { title: "2. Service Description", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING provides hosting and domain registration services in the European Union. For DSA purposes, we operate as a hosting provider and domain name registrar." }, { type: "paragraph", text: "Services include:" }, { type: "list", items: ["Web hosting services (shared, WordPress, VPS, and dedicated).", "Domain registration and management.", "Email hosting services.", "SSL certificate provisioning."] }] },
      { title: "3. Content Moderation Policies", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING maintains content moderation policies to comply with applicable laws and to prevent illegal or harmful content. Our standards include:" }, { type: "list", items: ["Prohibition of illegal content and materials.", "Protection against intellectual property infringement.", "Prevention of phishing, malware, and security threats.", "Prevention of spam and commercial abuse.", "Enforcement of our Acceptable Use Policy."] }] },
      { title: "4. Notice and Action Data", blocks: [{ type: "paragraph", text: "During the reporting period, SN WHITE HOSTING received and processed the following content-related notices:" }, { type: "list", items: ["Copyright and DMCA notices: data pending update.", "Trademark infringement reports: data pending update.", "Abuse reports: data pending update.", "Illegal content notices: data pending update."] }] },
      { title: "5. Complaint Handling", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING provides mechanisms for users and third parties to report prohibited content or policy violations:" }, { type: "list", items: ["Users can report content through our support portal.", "Copyright complaints are handled through our DMCA process.", "Abuse reports may be sent to abuse@snwhitehosting.com.", "Legal complaints may be sent to legal@snwhitehosting.com."] }, { type: "paragraph", text: "All complaints are investigated within the timeframes specified in our policies. Decisions are documented and may be appealed through the available process." }] },
      { title: "6. User Rights and Safeguards", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING protects user rights through:" }, { type: "list", items: ["Clear notices of policy violations and remedial actions.", "An opportunity to explain or appeal moderation decisions.", "Documented decision-making procedures.", "Protection against arbitrary account suspension or termination."] }] },
      { title: "7. Transparency Measures", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING is committed to transparency regarding content moderation:" }, { type: "list", items: ["This report is published at least annually.", "Decision data is made available publicly in aggregated form.", "Users receive explanations for content removals or account actions.", "Appeal processes are clearly documented."] }] },
      { title: "8. Risk Assessment", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING has identified the following potential risks related to illegal content or unlawful activities:" }, { type: "list", items: ["Malicious actors using hosting services for phishing or malware.", "Copyright or trademark infringement through customer content.", "Spam and unsolicited commercial activity.", "Abusive use of domain names for illegal purposes."] }, { type: "paragraph", text: "We mitigate these risks through monitoring, user verification, and rapid response to reports." }] },
      { title: "9. Mitigation Measures", blocks: [{ type: "paragraph", text: "To address identified risks, SN WHITE HOSTING implements:" }, { type: "list", items: ["Proactive monitoring and scanning systems.", "User verification and identity checks where appropriate.", "Rapid response protocols for abuse reports.", "Cooperation with law enforcement where required.", "Regular policy updates and enforcement reviews."] }] },
      { title: "10. Illegal Content Response", blocks: [{ type: "paragraph", text: "When SN WHITE HOSTING becomes aware of illegal content hosted on our services, we:" }, { type: "list", items: ["Investigate the reported content.", "Remove or disable access to prohibited content.", "Preserve relevant evidence where required.", "Notify competent authorities when legally necessary.", "Take reasonable steps to prevent re-uploading where applicable."] }] },
      { title: "11. External Reporting", blocks: [{ type: "paragraph", text: "In accordance with EU law, SN WHITE HOSTING cooperates with:" }, { type: "list", items: ["Law enforcement and judicial authorities.", "The EU Internet Hotline Network, where applicable.", "Other competent or designated bodies under DSA requirements."] }] },
      { title: "12. Contact Information", blocks: [{ type: "paragraph", text: "For DSA-related inquiries, content concerns, or transparency questions, please contact:" }, { type: "email", text: "legal@snwhitehosting.com" }] },
    ],
  },
  es: {
    sections: [
      { title: "1. Introducción", blocks: [{ type: "paragraph", text: "Este informe es publicado por SN WHITE HOSTING, operado por SN SOLUTIONS LLC, en cumplimiento del Reglamento de Servicios Digitales de la Unión Europea (DSA), Reglamento (UE) 2022/2065. Proporciona información sobre prácticas de moderación, garantías para usuarios y medidas de cumplimiento." }] },
      { title: "2. Descripción del Servicio", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING presta servicios de hosting y registro de dominios en la Unión Europea. A efectos del DSA, operamos como proveedor de alojamiento y registrador de nombres de dominio." }, { type: "paragraph", text: "Los servicios incluyen:" }, { type: "list", items: ["Servicios de alojamiento web (shared, WordPress, VPS y dedicados).", "Registro y gestión de dominios.", "Servicios de correo electrónico.", "Emisión de certificados SSL."] }] },
      { title: "3. Políticas de Moderación de Contenido", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING mantiene políticas de moderación de contenido para cumplir la legislación aplicable y prevenir contenido ilegal o perjudicial. Nuestros estándares incluyen:" }, { type: "list", items: ["Prohibición de contenido y materiales ilegales.", "Protección frente a infracciones de propiedad intelectual.", "Prevención de phishing, malware y amenazas de seguridad.", "Prevención de spam y abuso comercial.", "Aplicación de nuestra Política de Uso Aceptable."] }] },
      { title: "4. Datos de Avisos y Medidas Adoptadas", blocks: [{ type: "paragraph", text: "Durante el período de reporte, SN WHITE HOSTING recibió y tramitó los siguientes avisos relacionados con contenido:" }, { type: "list", items: ["Avisos de copyright y DMCA: datos pendientes de actualización.", "Reportes de infracción marcaria: datos pendientes de actualización.", "Reportes de abuso: datos pendientes de actualización.", "Avisos de contenido ilegal: datos pendientes de actualización."] }] },
      { title: "5. Gestión de Reclamaciones", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING ofrece mecanismos para que usuarios y terceros reporten contenido prohibido o infracciones de políticas:" }, { type: "list", items: ["Los usuarios pueden reportar contenido a través de nuestro portal de soporte.", "Las reclamaciones de copyright se gestionan mediante nuestro proceso DMCA.", "Los reportes de abuso pueden enviarse a abuse@snwhitehosting.com.", "Las reclamaciones legales pueden enviarse a legal@snwhitehosting.com."] }, { type: "paragraph", text: "Todas las reclamaciones se investigan dentro de los plazos previstos en nuestras políticas. Las decisiones se documentan y pueden recurrirse mediante el procedimiento disponible." }] },
      { title: "6. Derechos y Garantías de los Usuarios", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING protege los derechos de los usuarios mediante:" }, { type: "list", items: ["Notificaciones claras sobre infracciones y medidas correctivas.", "La oportunidad de explicar o recurrir decisiones de moderación.", "Procedimientos de toma de decisiones documentados.", "Protección frente a suspensiones o cancelaciones arbitrarias de cuentas."] }] },
      { title: "7. Medidas de Transparencia", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING está comprometido con la transparencia en materia de moderación de contenido:" }, { type: "list", items: ["Este informe se publica al menos una vez al año.", "Los datos de decisiones se publican de forma agregada.", "Los usuarios reciben explicaciones sobre retiradas de contenido o medidas sobre la cuenta.", "Los procesos de recurso están claramente documentados."] }] },
      { title: "8. Evaluación de Riesgos", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING ha identificado los siguientes riesgos potenciales relacionados con contenido ilegal o actividades ilícitas:" }, { type: "list", items: ["Actores maliciosos que utilizan servicios de hosting para phishing o malware.", "Infracciones de copyright o marca mediante contenido de clientes.", "Spam y actividad comercial no solicitada.", "Uso abusivo de dominios con fines ilegales."] }, { type: "paragraph", text: "Mitigamos estos riesgos mediante monitorización, verificación de usuarios y respuesta rápida a los reportes." }] },
      { title: "9. Medidas de Mitigación", blocks: [{ type: "paragraph", text: "Para abordar los riesgos identificados, SN WHITE HOSTING aplica:" }, { type: "list", items: ["Sistemas proactivos de monitorización y análisis.", "Verificación de usuarios y controles de identidad cuando corresponde.", "Protocolos de respuesta rápida para reportes de abuso.", "Cooperación con autoridades cuando sea necesario.", "Actualizaciones periódicas de políticas y revisiones de cumplimiento."] }] },
      { title: "10. Respuesta ante Contenido Ilegal", blocks: [{ type: "paragraph", text: "Cuando SN WHITE HOSTING tiene conocimiento de contenido ilegal alojado en nuestros servicios, actuamos de la siguiente manera:" }, { type: "list", items: ["Investigamos el contenido reportado.", "Retiramos o bloqueamos el acceso al contenido prohibido.", "Preservamos la evidencia relevante cuando procede.", "Notificamos a las autoridades competentes cuando es legalmente necesario.", "Adoptamos medidas razonables para evitar una nueva publicación cuando sea aplicable."] }] },
      { title: "11. Reporte Externo", blocks: [{ type: "paragraph", text: "De conformidad con la normativa de la UE, SN WHITE HOSTING coopera con:" }, { type: "list", items: ["Autoridades policiales y judiciales.", "La red EU Internet Hotline, cuando corresponda.", "Otros organismos competentes o designados conforme a los requisitos del DSA."] }] },
      { title: "12. Información de Contacto", blocks: [{ type: "paragraph", text: "Para consultas relacionadas con el DSA, inquietudes sobre contenido o cuestiones de transparencia, contáctanos en:" }, { type: "email", text: "legal@snwhitehosting.com" }] },
    ],
  },
  de: {
    sections: [
      { title: "1. Einleitung", blocks: [{ type: "paragraph", text: "Dieser Bericht wird von SN WHITE HOSTING, betrieben von SN SOLUTIONS LLC, in Übereinstimmung mit dem Digital Services Act der Europäischen Union (DSA), Verordnung (EU) 2022/2065, veröffentlicht. Er enthält Informationen über Moderationspraktiken, Nutzerschutz und Compliance-Maßnahmen." }] },
      { title: "2. Beschreibung des Dienstes", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING erbringt Hosting- und Domainregistrierungsdienste in der Europäischen Union. Für die Zwecke des DSA agieren wir als Hosting-Anbieter und Domainnamen-Registrar." }, { type: "paragraph", text: "Zu den Diensten gehören:" }, { type: "list", items: ["Webhosting-Dienste (Shared, WordPress, VPS und Dedicated).", "Registrierung und Verwaltung von Domains.", "E-Mail-Hosting-Dienste.", "Bereitstellung von SSL-Zertifikaten."] }] },
      { title: "3. Richtlinien zur Inhaltsmoderation", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING unterhält Richtlinien zur Inhaltsmoderation, um geltendes Recht einzuhalten und illegale oder schädliche Inhalte zu verhindern. Unsere Standards umfassen:" }, { type: "list", items: ["Verbot illegaler Inhalte und Materialien.", "Schutz vor Verletzungen geistiger Eigentumsrechte.", "Prävention von Phishing, Malware und Sicherheitsbedrohungen.", "Prävention von Spam und kommerziellem Missbrauch.", "Durchsetzung unserer Richtlinie zur zulässigen Nutzung."] }] },
      { title: "4. Daten zu Meldungen und Maßnahmen", blocks: [{ type: "paragraph", text: "Im Berichtszeitraum hat SN WHITE HOSTING die folgenden inhaltsbezogenen Meldungen erhalten und bearbeitet:" }, { type: "list", items: ["Urheberrechts- und DMCA-Meldungen: Daten werden noch ergänzt.", "Berichte über Markenverletzungen: Daten werden noch ergänzt.", "Missbrauchsmeldungen: Daten werden noch ergänzt.", "Meldungen über illegale Inhalte: Daten werden noch ergänzt."] }] },
      { title: "5. Beschwerdebearbeitung", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING stellt Mechanismen bereit, über die Nutzer und Dritte verbotene Inhalte oder Richtlinienverstöße melden können:" }, { type: "list", items: ["Nutzer können Inhalte über unser Support-Portal melden.", "Urheberrechtsbeschwerden werden über unser DMCA-Verfahren bearbeitet.", "Missbrauchsmeldungen können an abuse@snwhitehosting.com gesendet werden.", "Rechtliche Beschwerden können an legal@snwhitehosting.com gesendet werden."] }, { type: "paragraph", text: "Alle Beschwerden werden innerhalb der in unseren Richtlinien festgelegten Fristen untersucht. Entscheidungen werden dokumentiert und können über das verfügbare Verfahren angefochten werden." }] },
      { title: "6. Nutzerrechte und Schutzmaßnahmen", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING schützt Nutzerrechte durch:" }, { type: "list", items: ["Klare Hinweise auf Richtlinienverstöße und Abhilfemaßnahmen.", "Die Möglichkeit, Moderationsentscheidungen zu erläutern oder anzufechten.", "Dokumentierte Entscheidungsverfahren.", "Schutz vor willkürlicher Kontosperrung oder Kündigung."] }] },
      { title: "7. Transparenzmaßnahmen", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING verpflichtet sich zu Transparenz bei der Inhaltsmoderation:" }, { type: "list", items: ["Dieser Bericht wird mindestens einmal jährlich veröffentlicht.", "Entscheidungsdaten werden in aggregierter Form öffentlich zugänglich gemacht.", "Nutzer erhalten Begründungen für Inhaltsentfernungen oder Kontomaßnahmen.", "Widerspruchsverfahren sind klar dokumentiert."] }] },
      { title: "8. Risikobewertung", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING hat folgende potenzielle Risiken im Zusammenhang mit illegalen Inhalten oder rechtswidrigen Aktivitäten identifiziert:" }, { type: "list", items: ["Böswillige Akteure, die Hosting-Dienste für Phishing oder Malware nutzen.", "Urheberrechts- oder Markenverletzungen durch Kundeninhalte.", "Spam und unerwünschte kommerzielle Aktivitäten.", "Missbräuchliche Nutzung von Domains für rechtswidrige Zwecke."] }, { type: "paragraph", text: "Wir mindern diese Risiken durch Überwachung, Nutzerverifikation und schnelle Reaktion auf Meldungen." }] },
      { title: "9. Maßnahmen zur Risikominderung", blocks: [{ type: "paragraph", text: "Zur Bewältigung identifizierter Risiken setzt SN WHITE HOSTING folgende Maßnahmen um:" }, { type: "list", items: ["Proaktive Überwachungs- und Scansysteme.", "Nutzerverifikation und Identitätsprüfungen, soweit angemessen.", "Schnelle Reaktionsprotokolle für Missbrauchsmeldungen.", "Zusammenarbeit mit Strafverfolgungsbehörden, soweit erforderlich.", "Regelmäßige Aktualisierung von Richtlinien und Überprüfung ihrer Durchsetzung."] }] },
      { title: "10. Reaktion auf Illegale Inhalte", blocks: [{ type: "paragraph", text: "Wenn SN WHITE HOSTING Kenntnis von illegalen Inhalten auf unseren Diensten erhält, werden wir:" }, { type: "list", items: ["Die gemeldeten Inhalte untersuchen.", "Den Zugang zu verbotenen Inhalten entfernen oder sperren.", "Soweit erforderlich relevante Beweise sichern.", "Zuständige Behörden benachrichtigen, wenn dies gesetzlich erforderlich ist.", "Angemessene Maßnahmen ergreifen, um ein erneutes Hochladen zu verhindern, sofern anwendbar."] }] },
      { title: "11. Externe Meldung", blocks: [{ type: "paragraph", text: "In Übereinstimmung mit dem EU-Recht arbeitet SN WHITE HOSTING zusammen mit:" }, { type: "list", items: ["Strafverfolgungs- und Justizbehörden.", "Dem EU Internet Hotline Network, soweit anwendbar.", "Anderen zuständigen oder benannten Stellen nach den Anforderungen des DSA."] }] },
      { title: "12. Kontaktinformationen", blocks: [{ type: "paragraph", text: "Für Anfragen zum DSA, zu Inhalten oder zu Transparenzfragen kontaktieren Sie bitte:" }, { type: "email", text: "legal@snwhitehosting.com" }] },
    ],
  },
  nl: {
    sections: [
      { title: "1. Inleiding", blocks: [{ type: "paragraph", text: "Dit rapport wordt gepubliceerd door SN WHITE HOSTING, beheerd door SN SOLUTIONS LLC, in overeenstemming met de Digital Services Act van de Europese Unie (DSA), Verordening (EU) 2022/2065. Het bevat informatie over moderatiepraktijken, gebruikerswaarborgen en nalevingsmaatregelen." }] },
      { title: "2. Beschrijving van de Dienst", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING levert hosting- en domeinregistratiediensten binnen de Europese Unie. Voor de toepassing van de DSA treden wij op als hostingprovider en domeinnaamregistrar." }, { type: "paragraph", text: "De diensten omvatten:" }, { type: "list", items: ["Webhostingdiensten (shared, WordPress, VPS en dedicated).", "Registratie en beheer van domeinen.", "E-mailhostingdiensten.", "Uitgifte van SSL-certificaten."] }] },
      { title: "3. Beleid inzake Inhoudsmoderatie", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING hanteert beleid voor inhoudsmoderatie om te voldoen aan de toepasselijke wetgeving en om illegale of schadelijke inhoud te voorkomen. Onze normen omvatten:" }, { type: "list", items: ["Verbod op illegale inhoud en materialen.", "Bescherming tegen inbreuken op intellectuele eigendom.", "Voorkoming van phishing, malware en beveiligingsdreigingen.", "Voorkoming van spam en commercieel misbruik.", "Handhaving van ons Beleid voor Aanvaardbaar Gebruik."] }] },
      { title: "4. Gegevens over Meldingen en Acties", blocks: [{ type: "paragraph", text: "Tijdens de rapportageperiode ontving en verwerkte SN WHITE HOSTING de volgende meldingen met betrekking tot inhoud:" }, { type: "list", items: ["Auteursrecht- en DMCA-meldingen: gegevens moeten nog worden bijgewerkt.", "Meldingen van merkinbreuk: gegevens moeten nog worden bijgewerkt.", "Misbruikmeldingen: gegevens moeten nog worden bijgewerkt.", "Meldingen van illegale inhoud: gegevens moeten nog worden bijgewerkt."] }] },
      { title: "5. Afhandeling van Klachten", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING biedt mechanismen waarmee gebruikers en derden verboden inhoud of schendingen van beleid kunnen melden:" }, { type: "list", items: ["Gebruikers kunnen inhoud melden via ons supportportaal.", "Auteursrechtklachten worden behandeld via ons DMCA-proces.", "Misbruikmeldingen kunnen worden gestuurd naar abuse@snwhitehosting.com.", "Juridische klachten kunnen worden gestuurd naar legal@snwhitehosting.com."] }, { type: "paragraph", text: "Alle klachten worden onderzocht binnen de termijnen die in ons beleid zijn vastgelegd. Beslissingen worden gedocumenteerd en kunnen worden aangevochten via de beschikbare procedure." }] },
      { title: "6. Rechten en Waarborgen voor Gebruikers", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING beschermt gebruikersrechten door middel van:" }, { type: "list", items: ["Duidelijke kennisgevingen van beleidsovertredingen en corrigerende maatregelen.", "De mogelijkheid om moderatiebeslissingen toe te lichten of aan te vechten.", "Gedocumenteerde besluitvormingsprocedures.", "Bescherming tegen willekeurige opschorting of beëindiging van accounts."] }] },
      { title: "7. Transparantiemaatregelen", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING zet zich in voor transparantie met betrekking tot inhoudsmoderatie:" }, { type: "list", items: ["Dit rapport wordt minstens jaarlijks gepubliceerd.", "Beslissingsgegevens worden in geaggregeerde vorm openbaar gemaakt.", "Gebruikers ontvangen uitleg bij verwijdering van inhoud of accountmaatregelen.", "Beroepsprocedures zijn duidelijk gedocumenteerd."] }] },
      { title: "8. Risicobeoordeling", blocks: [{ type: "paragraph", text: "SN WHITE HOSTING heeft de volgende potentiële risico's geïdentificeerd met betrekking tot illegale inhoud of onwettige activiteiten:" }, { type: "list", items: ["Kwaadwillende actoren die hostingdiensten gebruiken voor phishing of malware.", "Auteursrecht- of merkinbreuken via klantinhoud.", "Spam en ongevraagde commerciële activiteiten.", "Misbruik van domeinnamen voor illegale doeleinden."] }, { type: "paragraph", text: "Wij beperken deze risico's door monitoring, gebruikersverificatie en snelle reactie op meldingen." }] },
      { title: "9. Beperkende Maatregelen", blocks: [{ type: "paragraph", text: "Om geïdentificeerde risico's aan te pakken, past SN WHITE HOSTING het volgende toe:" }, { type: "list", items: ["Proactieve monitorings- en scansystemen.", "Gebruikersverificatie en identiteitscontroles waar passend.", "Snelle responsprotocollen voor misbruikmeldingen.", "Samenwerking met wetshandhavingsinstanties waar nodig.", "Regelmatige beleidsupdates en evaluaties van handhaving."] }] },
      { title: "10. Reactie op Illegale Inhoud", blocks: [{ type: "paragraph", text: "Wanneer SN WHITE HOSTING kennis krijgt van illegale inhoud die op onze diensten wordt gehost, zullen wij:" }, { type: "list", items: ["De gemelde inhoud onderzoeken.", "Verboden inhoud verwijderen of de toegang ertoe blokkeren.", "Relevante bewijzen bewaren waar vereist.", "Bevoegde autoriteiten informeren wanneer dit wettelijk noodzakelijk is.", "Redelijke maatregelen nemen om heruploaden te voorkomen waar van toepassing."] }] },
      { title: "11. Externe Rapportage", blocks: [{ type: "paragraph", text: "In overeenstemming met het EU-recht werkt SN WHITE HOSTING samen met:" }, { type: "list", items: ["Opsporings- en gerechtelijke autoriteiten.", "Het EU Internet Hotline Network, waar van toepassing.", "Andere bevoegde of aangewezen instanties onder de DSA-vereisten."] }] },
      { title: "12. Contactinformatie", blocks: [{ type: "paragraph", text: "Voor vragen over de DSA, zorgen over inhoud of transparantiekwesties kunt u contact opnemen via:" }, { type: "email", text: "legal@snwhitehosting.com" }] },
    ],
  },
} as const

export default function DSATransparencyReportPage() {
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
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.dsaReportTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.dsaReportSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/dsa-transparency-report" />

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