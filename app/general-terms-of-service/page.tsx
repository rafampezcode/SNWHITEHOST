"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const localizedContent = {
  en: { sections: [
    { title: "1. SCOPE OF THE AGREEMENT", blocks: [
      { type: "paragraph" as const, text: 'These General Terms of Service ("Terms") govern the contractual relationship between SN WHITE HOSTING, owned by SN SOLUTIONS LLC ("SN WHITE HOSTING", "we", "us", "our"), and any natural or legal person ("Client" or "User") who acquires any of the following services:' },
      { type: "list" as const, items: ["Shared and WordPress Hosting.", "Reseller Hosting.", "VPS (Virtual Private Servers), Dedicated Servers, Game Servers, and Docker Containers.", "Domain Registration and SSL Certificates.", "StorageBox (Backup & Storage solutions).", "Software Licenses (cPanel, Plesk, and other addons)."] },
    ]},
    { title: "2. GOVERNING LAW AND JURISDICTION", blocks: [{ type: "paragraph" as const, text: "This agreement is governed by the laws of the United States of America, specifically the laws of the State of New Mexico. The official language of this agreement is English. Any translation provided is for informational purposes only; in the event of a conflict, the English version shall prevail." }] },
    { title: "3. CONTRACTING PROCESS", blocks: [
      { type: "paragraph" as const, text: "To acquire a service, the Client must:" },
      { type: "list" as const, items: ["Create an account in our Client Panel.", "Provide accurate billing and payment details.", "Expressly accept these General Terms and the Specific Terms related to the chosen service.", "Complete payment according to the selected plan."] },
    ]},
    { title: "4. SERVICE PROVISION AND TECHNICAL SUPPORT", blocks: [
      { type: "list" as const, items: ["Support Hours: Monday to Friday during business hours (New Mexico time), excluding emergencies.", "Emergencies: Critical incidents (server down) are handled via our priority ticketing system, which triggers an immediate alert to our technical team 24/7.", "Scope: Support covers the functionality of the contracted service. It does not include web development, custom programming, or third-party application management unless otherwise agreed."] },
    ]},
    { title: "5. CLIENT OBLIGATIONS", blocks: [
      { type: "list" as const, items: ["Use services in compliance with the law and our Acceptable Use Policy (AUP).", "Prohibit illegal activities, spam, malware hosting, or copyright infringement.", "Keep contact and billing information updated at all times.", "Secure account credentials and assume responsibility for any activity under their account."] },
    ]},
    { title: "6. BILLING AND PAYMENTS", blocks: [
      { type: "list" as const, items: ["All payments are made to SN WHITE HOSTING.", "The Client is responsible for timely payments to avoid service suspension.", "Domain registrations and licenses are set to auto-renew unless canceled through the Client Panel at least 15 days prior to expiration."] },
    ]},
    { title: "7. DOMAIN REGISTRATION", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING acts as an intermediary with accredited registrars. The Client is the legal owner of the registered domain and is responsible for ensuring the accuracy of the WHOIS data provided." }] },
    { title: "8. SUSPENSION AND TERMINATION", blocks: [{ type: "paragraph" as const, text: "We reserve the right to suspend or terminate services for non-payment, breach of terms, or illegal activities." }] },
    { title: "8.1 TERMINATION FOR INTIMIDATION, HARASSMENT, OR ABUSIVE BEHAVIOR", blocks: [
      { type: "paragraph" as const, text: "SN WHITE HOSTING has zero tolerance for bullying, harassment, threats, coercion, verbal abuse, or disrespectful behavior directed toward any staff member, contractor, representative, or the Company Founder." },
      { type: "paragraph" as const, text: "Engaging in such behavior constitutes a material breach of these Terms. The Client will be notified of termination with a 30-day notice period, during which the service remains active only for migration purposes." },
    ]},
    { title: "9. LIMITATION OF LIABILITY", blocks: [
      { type: "list" as const, items: ["Indirect damages or loss of profits.", "Failures caused by third parties (network providers, software vendors).", "Data loss resulting from Client negligence or non-payment."] },
    ]},
    { title: "10. SERVICE LEVEL AGREEMENT (SLA) COMPENSATION", blocks: [
      { type: "list" as const, items: ["99.0% â€“ 99.94% uptime: 5% credit of the monthly fee.", "98.0% â€“ 98.99% uptime: 10% credit of the monthly fee.", "Below 98.0% uptime: 25% credit of the monthly fee."] },
      { type: "paragraph" as const, text: "Requests must be submitted via ticket within 10 days of the incident." },
    ]},
    { title: "11. MODIFICATIONS TO SERVICES AND PRICES", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING reserves the right to modify service specifications and rates at any time. Clients will be notified at least 15 days in advance. Continued use of the service after the notice period constitutes acceptance of the new conditions." }] },
    { title: "12. DISPUTE RESOLUTION", blocks: [
      { type: "paragraph" as const, text: "Any dispute shall be resolved in the state or federal courts located in the State of New Mexico, USA." },
      { type: "paragraph" as const, text: "Effective date: February 21, 2026" },
    ]},
  ]},
  es: { sections: [
    { title: "1. ÃMBITO DEL ACUERDO", blocks: [
      { type: "paragraph" as const, text: 'Estas Condiciones Generales de Servicio ("CGS") regulan la relaciÃ³n contractual entre SN WHITE HOSTING, propiedad de SN SOLUTIONS LLC ("SN WHITE HOSTING", "nosotros"), y cualquier persona fÃ­sica o jurÃ­dica ("Cliente" o "Usuario") que adquiera cualquiera de los siguientes servicios:' },
      { type: "list" as const, items: ["Hosting Compartido y WordPress.", "Hosting Reseller.", "VPS, Servidores Dedicados, Servidores de Juegos y Contenedores Docker.", "Registro de Dominios y Certificados SSL.", "StorageBox (soluciones de Backup y Almacenamiento).", "Licencias de Software (cPanel, Plesk y otros addons)."] },
    ]},
    { title: "2. LEY APLICABLE Y JURISDICCIÃ“N", blocks: [{ type: "paragraph" as const, text: "Este acuerdo se rige por las leyes de los Estados Unidos de AmÃ©rica, especÃ­ficamente las leyes del Estado de Nuevo MÃ©xico. El idioma oficial de este acuerdo es el inglÃ©s. Cualquier traducciÃ³n proporcionada es meramente informativa; en caso de conflicto, prevalecerÃ¡ la versiÃ³n en inglÃ©s." }] },
    { title: "3. PROCESO DE CONTRATACIÃ“N", blocks: [
      { type: "paragraph" as const, text: "Para adquirir un servicio, el Cliente debe:" },
      { type: "list" as const, items: ["Crear una cuenta en nuestro Portal de Clientes.", "Proporcionar datos de facturaciÃ³n y pago precisos.", "Aceptar expresamente estas Condiciones Generales y las Condiciones EspecÃ­ficas del servicio elegido.", "Completar el pago segÃºn el plan seleccionado."] },
    ]},
    { title: "4. PRESTACIÃ“N DEL SERVICIO Y SOPORTE TÃ‰CNICO", blocks: [
      { type: "list" as const, items: ["Horario de soporte: Lunes a viernes en horario laboral (hora de Nuevo MÃ©xico), excepto emergencias.", "Emergencias: Los incidentes crÃ­ticos (servidor caÃ­do) se gestionan a travÃ©s de nuestro sistema de tickets prioritarios, que genera una alerta inmediata al equipo tÃ©cnico 24/7.", "Alcance: El soporte cubre la funcionalidad del servicio contratado. No incluye desarrollo web, programaciÃ³n personalizada ni gestiÃ³n de aplicaciones de terceros, salvo acuerdo previo."] },
    ]},
    { title: "5. OBLIGACIONES DEL CLIENTE", blocks: [
      { type: "list" as const, items: ["Utilizar los servicios conforme a la ley y a nuestra PolÃ­tica de Uso Aceptable (AUP).", "Prohibir actividades ilegales, spam, alojamiento de malware o infracciÃ³n de derechos de autor.", "Mantener actualizados los datos de contacto y facturaciÃ³n en todo momento.", "Proteger las credenciales de acceso y asumir la responsabilidad de cualquier actividad bajo su cuenta."] },
    ]},
    { title: "6. FACTURACIÃ“N Y PAGOS", blocks: [
      { type: "list" as const, items: ["Todos los pagos se realizan a SN WHITE HOSTING.", "El Cliente es responsable de los pagos puntuales para evitar la suspensiÃ³n del servicio.", "Los registros de dominios y licencias se renuevan automÃ¡ticamente, salvo que se cancelen a travÃ©s del Portal de Clientes al menos 15 dÃ­as antes de la fecha de vencimiento."] },
    ]},
    { title: "7. REGISTRO DE DOMINIOS", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING actÃºa como intermediario con registradores acreditados. El Cliente es el propietario legal del dominio registrado y es responsable de garantizar la exactitud de los datos WHOIS proporcionados." }] },
    { title: "8. SUSPENSIÃ“N Y RESCISIÃ“N", blocks: [{ type: "paragraph" as const, text: "Nos reservamos el derecho de suspender o rescindir los servicios por impago, incumplimiento de los tÃ©rminos o actividades ilegales." }] },
    { title: "8.1 RESCISIÃ“N POR INTIMIDACIÃ“N, ACOSO O CONDUCTA ABUSIVA", blocks: [
      { type: "paragraph" as const, text: "SN WHITE HOSTING tiene tolerancia cero hacia el acoso, las amenazas, la coerciÃ³n, el abuso verbal o el comportamiento irrespetuoso dirigido a cualquier miembro del personal, contratista, representante o el fundador de la empresa." },
      { type: "paragraph" as const, text: "Dicho comportamiento constituye un incumplimiento material de estas Condiciones. Se notificarÃ¡ al Cliente la rescisiÃ³n con un preaviso de 30 dÃ­as, durante el cual el servicio permanecerÃ¡ activo Ãºnicamente para la migraciÃ³n de datos." },
    ]},
    { title: "9. LIMITACIÃ“N DE RESPONSABILIDAD", blocks: [
      { type: "list" as const, items: ["DaÃ±os indirectos o pÃ©rdida de beneficios.", "Fallos causados por terceros (proveedores de red, proveedores de software).", "PÃ©rdida de datos derivada de negligencia del Cliente o impago."] },
    ]},
    { title: "10. COMPENSACIÃ“N POR ACUERDO DE NIVEL DE SERVICIO (SLA)", blocks: [
      { type: "list" as const, items: ["99,0% â€“ 99,94% de disponibilidad: 5% de crÃ©dito sobre la tarifa mensual.", "98,0% â€“ 98,99% de disponibilidad: 10% de crÃ©dito sobre la tarifa mensual.", "Por debajo del 98,0% de disponibilidad: 25% de crÃ©dito sobre la tarifa mensual."] },
      { type: "paragraph" as const, text: "Las solicitudes deben presentarse mediante ticket en los 10 dÃ­as siguientes al incidente." },
    ]},
    { title: "11. MODIFICACIONES DE SERVICIOS Y PRECIOS", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING se reserva el derecho de modificar las especificaciones y tarifas de los servicios en cualquier momento. Los Clientes serÃ¡n notificados con al menos 15 dÃ­as de antelaciÃ³n. El uso continuado del servicio tras el perÃ­odo de aviso constituye la aceptaciÃ³n de las nuevas condiciones." }] },
    { title: "12. RESOLUCIÃ“N DE CONFLICTOS", blocks: [
      { type: "paragraph" as const, text: "Cualquier disputa se resolverÃ¡ en los tribunales estatales o federales del Estado de Nuevo MÃ©xico, EE. UU." },
      { type: "paragraph" as const, text: "Fecha de entrada en vigor: 21 de febrero de 2026" },
    ]},
  ]},
  de: { sections: [
    { title: "1. ANWENDUNGSBEREICH", blocks: [
      { type: "paragraph" as const, text: 'Diese Allgemeinen GeschÃ¤ftsbedingungen ("AGB") regeln das VertragsverhÃ¤ltnis zwischen SN WHITE HOSTING, EigentÃ¼mer SN SOLUTIONS LLC ("SN WHITE HOSTING", "wir"), und jeder natÃ¼rlichen oder juristischen Person ("Kunde" oder "Nutzer"), die folgende Dienste erwirbt:' },
      { type: "list" as const, items: ["Shared und WordPress-Hosting.", "Reseller-Hosting.", "VPS, Dedizierte Server, Gameserver und Docker-Container.", "Domainregistrierung und SSL-Zertifikate.", "StorageBox (Backup- und SpeicherlÃ¶sungen).", "Software-Lizenzen (cPanel, Plesk und weitere Add-ons)."] },
    ]},
    { title: "2. ANWENDBARES RECHT UND GERICHTSSTAND", blocks: [{ type: "paragraph" as const, text: "Dieser Vertrag unterliegt dem Recht der Vereinigten Staaten von Amerika, insbesondere dem Recht des Bundesstaates New Mexico. Die offizielle Sprache dieses Vertrags ist Englisch. Alle Ãœbersetzungen dienen nur zur Information; bei Konflikten gilt die englische Fassung." }] },
    { title: "3. VERTRAGSSCHLUSS", blocks: [
      { type: "paragraph" as const, text: "Um einen Dienst zu erwerben, muss der Kunde:" },
      { type: "list" as const, items: ["Ein Konto im Kundenportal erstellen.", "Korrekte Rechnungs- und Zahlungsdaten angeben.", "Diese AGB und die spezifischen Bedingungen des gewÃ¤hlten Dienstes ausdrÃ¼cklich akzeptieren.", "Die Zahlung gemÃ¤ÃŸ dem gewÃ¤hlten Plan abschlieÃŸen."] },
    ]},
    { title: "4. LEISTUNGSERBRINGUNG UND TECHNISCHER SUPPORT", blocks: [
      { type: "list" as const, items: ["Support-Zeiten: Montag bis Freitag wÃ¤hrend der GeschÃ¤ftszeiten (New-Mexico-Zeit), ausgenommen NotfÃ¤lle.", "NotfÃ¤lle: Kritische VorfÃ¤lle (Server ausgefallen) werden Ã¼ber unser PrioritÃ¤ts-Ticketsystem bearbeitet, das sofort das technische Team 24/7 alarmiert.", "Umfang: Der Support deckt die FunktionalitÃ¤t des beauftragten Dienstes ab. Er umfasst keine Webentwicklung, individuelle Programmierung oder Verwaltung von Drittanbieteranwendungen, sofern nicht anders vereinbart."] },
    ]},
    { title: "5. KUNDENPFLICHTEN", blocks: [
      { type: "list" as const, items: ["Dienste gesetzeskonform und gemÃ¤ÃŸ unserer Richtlinie zur akzeptablen Nutzung (AUP) verwenden.", "Illegale AktivitÃ¤ten, Spam, Malware-Hosting oder Urheberrechtsverletzungen unterlassen.", "Kontakt- und Rechnungsdaten stets aktuell halten.", "Zugangsdaten schÃ¼tzen und Verantwortung fÃ¼r alle AktivitÃ¤ten im eigenen Konto Ã¼bernehmen."] },
    ]},
    { title: "6. ABRECHNUNG UND ZAHLUNGEN", blocks: [
      { type: "list" as const, items: ["Alle Zahlungen erfolgen an SN WHITE HOSTING.", "Der Kunde ist fÃ¼r rechtzeitige Zahlungen verantwortlich, um eine Sperrung zu vermeiden.", "Domainregistrierungen und Lizenzen verlÃ¤ngern sich automatisch, sofern sie nicht mindestens 15 Tage vor Ablauf Ã¼ber das Kundenportal gekÃ¼ndigt werden."] },
    ]},
    { title: "7. DOMAINREGISTRIERUNG", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING agiert als Vermittler mit akkreditierten Registraren. Der Kunde ist der rechtliche EigentÃ¼mer der registrierten Domain und fÃ¼r die Richtigkeit der WHOIS-Daten verantwortlich." }] },
    { title: "8. SPERRUNG UND KÃœNDIGUNG", blocks: [{ type: "paragraph" as const, text: "Wir behalten uns das Recht vor, Dienste wegen Zahlungsverzugs, Vertragsverletzung oder illegaler AktivitÃ¤ten zu sperren oder zu kÃ¼ndigen." }] },
    { title: "8.1 KÃœNDIGUNG BEI EINSCHÃœCHTERUNG, BELÃ„STIGUNG ODER MISSBRÃ„UCHLICHEM VERHALTEN", blocks: [
      { type: "paragraph" as const, text: "SN WHITE HOSTING duldet keinerlei Mobbing, BelÃ¤stigung, Drohungen, NÃ¶tigung, verbale Ãœbergriffe oder respektloses Verhalten gegenÃ¼ber Mitarbeitern, Auftragnehmern, Vertretern oder dem UnternehmensgrÃ¼nder." },
      { type: "paragraph" as const, text: "Solches Verhalten stellt eine wesentliche Vertragsverletzung dar. Der Kunde wird mit einer 30-tÃ¤gigen Frist benachrichtigt, wÃ¤hrend der der Dienst nur fÃ¼r Migrationszwecke aktiv bleibt." },
    ]},
    { title: "9. HAFTUNGSBESCHRÃ„NKUNG", blocks: [
      { type: "list" as const, items: ["Indirekte SchÃ¤den oder Gewinnverluste.", "AusfÃ¤lle durch Dritte (Netzanbieter, Softwareanbieter).", "Datenverlust aufgrund von Kundenverschulden oder Zahlungsverzug."] },
    ]},
    { title: "10. SLA-KOMPENSATION", blocks: [
      { type: "list" as const, items: ["99,0% â€“ 99,94% VerfÃ¼gbarkeit: 5% Guthaben der MonatsgebÃ¼hr.", "98,0% â€“ 98,99% VerfÃ¼gbarkeit: 10% Guthaben der MonatsgebÃ¼hr.", "Unter 98,0% VerfÃ¼gbarkeit: 25% Guthaben der MonatsgebÃ¼hr."] },
      { type: "paragraph" as const, text: "Anfragen mÃ¼ssen innerhalb von 10 Tagen nach dem Vorfall per Ticket eingereicht werden." },
    ]},
    { title: "11. Ã„NDERUNGEN DER DIENSTE UND PREISE", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING behÃ¤lt sich das Recht vor, Leistungsmerkmale und Preise jederzeit zu Ã¤ndern. Kunden werden mindestens 15 Tage im Voraus benachrichtigt. Die weitere Nutzung nach Ablauf der Frist gilt als Zustimmung zu den neuen Bedingungen." }] },
    { title: "12. STREITBEILEGUNG", blocks: [
      { type: "paragraph" as const, text: "Streitigkeiten werden vor den Bundes- oder Staatsgerichten im Bundesstaat New Mexico, USA, beigelegt." },
      { type: "paragraph" as const, text: "Datum des Inkrafttretens: 21. Februar 2026" },
    ]},
  ]},
  nl: { sections: [
    { title: "1. TOEPASSINGSGEBIED", blocks: [
      { type: "paragraph" as const, text: 'Deze Algemene Servicevoorwaarden ("Voorwaarden") regelen de contractuele relatie tussen SN WHITE HOSTING, eigendom van SN SOLUTIONS LLC ("SN WHITE HOSTING", "wij"), en elke natuurlijke of rechtspersoon ("Klant" of "Gebruiker") die een van de volgende diensten afneemt:' },
      { type: "list" as const, items: ["Gedeeld en WordPress-hosting.", "Reseller-hosting.", "VPS, Dedicated Servers, Gameservers en Docker-containers.", "Domeinregistratie en SSL-certificaten.", "StorageBox (back-up- en opslagoplossingen).", "Softwarelicenties (cPanel, Plesk en andere add-ons)."] },
    ]},
    { title: "2. TOEPASSELIJK RECHT EN JURISDICTIE", blocks: [{ type: "paragraph" as const, text: "Deze overeenkomst wordt beheerst door het recht van de Verenigde Staten van Amerika, meer bepaald het recht van de staat New Mexico. De officiÃ«le taal van deze overeenkomst is Engels. Vertalingen zijn louter informatief; bij tegenstrijdigheden geldt de Engelse versie." }] },
    { title: "3. CONTRACTPROCES", blocks: [
      { type: "paragraph" as const, text: "Om een dienst af te nemen, moet de Klant:" },
      { type: "list" as const, items: ["Een account aanmaken in ons Klantportaal.", "Nauwkeurige facturerings- en betalingsgegevens opgeven.", "Deze Voorwaarden en de Specifieke Voorwaarden van de gekozen dienst uitdrukkelijk accepteren.", "De betaling voltooien volgens het geselecteerde abonnement."] },
    ]},
    { title: "4. DIENSTVERLENING EN TECHNISCHE ONDERSTEUNING", blocks: [
      { type: "list" as const, items: ["Ondersteuningsuren: Maandag tot vrijdag tijdens kantooruren (New Mexico-tijd), met uitzondering van noodgevallen.", "Noodgevallen: Kritieke incidenten (server neer) worden afgehandeld via ons prioriteitsticketssysteem, dat het technisch team 24/7 direct alarmeert.", "Reikwijdte: Ondersteuning dekt de functionaliteit van de gecontracteerde dienst. Het omvat geen webontwikkeling, maatwerkaanprogrammering of beheer van toepassingen van derden, tenzij anders overeengekomen."] },
    ]},
    { title: "5. VERPLICHTINGEN VAN DE KLANT", blocks: [
      { type: "list" as const, items: ["Diensten gebruiken in overeenstemming met de wet en ons Beleid voor aanvaardbaar gebruik (AUP).", "Illegale activiteiten, spam, malware-hosting of inbreuk op auteursrechten verbieden.", "Contact- en factureringsgegevens te allen tijde bijgewerkt houden.", "Accountreferenties beveiligen en verantwoordelijkheid nemen voor alle activiteiten op het account."] },
    ]},
    { title: "6. FACTURERING EN BETALINGEN", blocks: [
      { type: "list" as const, items: ["Alle betalingen worden gedaan aan SN WHITE HOSTING.", "De Klant is verantwoordelijk voor tijdige betalingen om schorsing van de dienst te vermijden.", "Domeinregistraties en licenties worden automatisch verlengd, tenzij ze via het Klantportaal worden geannuleerd ten minste 15 dagen voor het verstrijken."] },
    ]},
    { title: "7. DOMEINREGISTRATIE", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING treedt op als tussenpersoon bij geaccrediteerde registrars. De Klant is de wettelijke eigenaar van het geregistreerde domein en is verantwoordelijk voor de juistheid van de verstrekte WHOIS-gegevens." }] },
    { title: "8. SCHORSING EN BEÃ‹INDIGING", blocks: [{ type: "paragraph" as const, text: "Wij behouden het recht voor diensten te schorsen of te beÃ«indigen wegens niet-betaling, schending van de voorwaarden of illegale activiteiten." }] },
    { title: "8.1 BEÃ‹INDIGING WEGENS INTIMIDATIE, PESTERIJEN OF MISBRUIK", blocks: [
      { type: "paragraph" as const, text: "SN WHITE HOSTING tolereert geen enkele vorm van intimidatie, pesterijen, bedreigingen, dwang, verbaal misbruik of respectloos gedrag jegens personeelsleden, opdrachtnemers, vertegenwoordigers of de bedrijfsoprichter." },
      { type: "paragraph" as const, text: "Dergelijk gedrag vormt een wezenlijke contractbreuk. De Klant wordt in kennis gesteld van beÃ«indiging met een opzegtermijn van 30 dagen, gedurende welke de dienst uitsluitend actief blijft voor migratiedoeleinden." },
    ]},
    { title: "9. AANSPRAKELIJKHEIDSBEPERKING", blocks: [
      { type: "list" as const, items: ["Indirecte schade of winstderving.", "Storingen veroorzaakt door derden (netwerkproviders, softwareleveranciers).", "Gegevensverlies als gevolg van nalatigheid van de Klant of niet-betaling."] },
    ]},
    { title: "10. SLA-COMPENSATIE", blocks: [
      { type: "list" as const, items: ["99,0% â€“ 99,94% uptime: 5% tegoed op de maandelijkse vergoeding.", "98,0% â€“ 98,99% uptime: 10% tegoed op de maandelijkse vergoeding.", "Onder 98,0% uptime: 25% tegoed op de maandelijkse vergoeding."] },
      { type: "paragraph" as const, text: "Aanvragen moeten binnen 10 dagen na het incident via een ticket worden ingediend." },
    ]},
    { title: "11. WIJZIGINGEN IN DIENSTEN EN PRIJZEN", blocks: [{ type: "paragraph" as const, text: "SN WHITE HOSTING behoudt het recht om servicespecificaties en tarieven op elk moment te wijzigen. Klanten worden ten minste 15 dagen van tevoren op de hoogte gesteld. Voortgezet gebruik van de dienst na de opzegtermijn geldt als aanvaarding van de nieuwe voorwaarden." }] },
    { title: "12. GESCHILLENBESLECHTING", blocks: [
      { type: "paragraph" as const, text: "Geschillen worden beslecht door de staats- of federale rechtbanken in de staat New Mexico, VS." },
      { type: "paragraph" as const, text: "Ingangsdatum: 21 februari 2026" },
    ]},
  ]},
} as const

export default function GeneralTermsOfServicePage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.generalTermsTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.generalTermsSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/general-terms-of-service" />

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

