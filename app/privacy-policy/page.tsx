"use client"

import { Shield, Mail, MapPin, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const localizedContent = {
  en: {
    sections: [
      {
        title: "1. Introduction",
        blocks: [
          { type: "paragraph" as const, text: 'SN WHITE HOSTING is the trade name of SN SOLUTIONS LLC, headquartered at 1209 Mountain Road Pl NE, STE N, Albuquerque, New Mexico, 87110, United States, EIN: 32-0817400 (hereinafter "SN WHITE HOSTING," "we," or "our").' },
          { type: "paragraph" as const, text: "We provide shared hosting, WordPress hosting, VPS, dedicated servers, game servers, domain registration services, and related products." },
          { type: "paragraph" as const, text: "The privacy and security of our customers is a top priority. We process and protect personal data in accordance with U.S. law and, for customers in the European Union, in compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679." },
          { type: "paragraph" as const, text: 'When this Policy refers to "you" or "user," it means any person who uses our services, visits our website snwhitehosting.com, or communicates with us.' },
          { type: "email" as const, label: "For any inquiries about this policy or about the processing of your data, you can contact us at:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "2. General Data Processing Principles",
        blocks: [
          { type: "paragraph" as const, text: "We process your personal data in accordance with the following principles:" },
          { type: "list" as const, items: ["Lawfulness, fairness, and transparency: always with a legal basis and in a clear manner.", "Purpose limitation: we collect data only for specific and legitimate purposes.", "Data minimization: we process only the data strictly necessary.", "Accuracy: we keep your data updated.", "Storage limitation: we do not keep your data longer than necessary.", "Integrity and confidentiality: we protect your data from unauthorized access or accidental loss."] },
          { type: "paragraph" as const, text: "All information is treated as strictly confidential, and only authorized personnel have access to it." },
        ],
      },
      {
        title: "3. Information We Collect",
        blocks: [
          { type: "paragraph" as const, text: "3.1. Information you provide — We collect personal data when you: register on our website, purchase services, request technical support, contact us, or participate in promotions." },
          { type: "list" as const, items: ["Full name.", "Email address.", "Postal address.", "Phone number.", "Billing and payment details (processed via secure gateways; we do not store full card details).", "Identity documents (only when required for domain registration)."] },
          { type: "paragraph" as const, text: "3.2. Information collected automatically — When you access snwhitehosting.com we collect: IP address, browser type and version, operating system, date/time of connection, and activity logs." },
          { type: "paragraph" as const, text: "3.3. Domain registration information — For domain registration, we process personal data as part of the WHOIS process required by ICANN. This is carried out by Soluciones Corporativas IP, SL exclusively for domain management purposes." },
        ],
      },
      {
        title: "4. How We Use Your Data",
        blocks: [
          { type: "list" as const, items: ["Provide, manage, and bill our services.", "Set up your account and manage access to the client area.", "Comply with legal obligations (including tax regulations and ICANN rules).", "Communicate with you about updates, incidents, or service changes.", "Improve our services and perform statistical analysis.", "Prevent fraud and ensure infrastructure security."] },
        ],
      },
      {
        title: "5. Legal Basis for Processing",
        blocks: [
          { type: "list" as const, items: ["Contract performance: when necessary to provide our services.", "Legal obligation: when required by applicable law.", "Consent: for marketing or non-essential communications.", "Legitimate interest: for continuous service improvement and abuse prevention."] },
        ],
      },
      {
        title: "6. Data Retention",
        blocks: [
          { type: "paragraph" as const, text: "We retain your data for as long as necessary to fulfill the processing purpose and our legal obligations." },
          { type: "list" as const, items: ["Personal data will be anonymized or deleted within a maximum of 30 days upon account closure, unless otherwise required by law.", "Data related to domains will be retained as required by ICANN and the provider Soluciones Corporativas IP, SL."] },
        ],
      },
      {
        title: "7. Data Transfers",
        blocks: [
          { type: "paragraph" as const, text: "We may transfer data to third parties only when: necessary for service provision, required by law, or we have your explicit consent." },
          { type: "paragraph" as const, text: "For international transfers outside the U.S. or EU, we apply European Commission-approved standard contractual clauses." },
        ],
      },
      {
        title: "8. Data Security",
        blocks: [
          { type: "list" as const, items: ["SSL/TLS encryption for all communications.", "Restricted access control.", "Automatic daily backups (incremental Monday–Saturday, full backups Sundays at 03:00 AM)."] },
        ],
      },
      {
        title: "9. User Rights",
        blocks: [
          { type: "list" as const, items: ["Access your data.", "Correct inaccurate data.", "Request deletion.", "Restrict or object to processing.", "Request data portability."] },
          { type: "email" as const, label: "You can exercise these rights by contacting:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "10. Policy Changes",
        blocks: [
          { type: "paragraph" as const, text: "We may modify this policy at any time. We will notify changes 15 days in advance before they take effect, unless a different period is required by law." },
          { type: "paragraph" as const, text: "Effective date: February 21, 2026" },
        ],
      },
    ],
  },
  es: {
    sections: [
      {
        title: "1. Introducción",
        blocks: [
          { type: "paragraph" as const, text: 'SN WHITE HOSTING es el nombre comercial de SN SOLUTIONS LLC, con sede en 1209 Mountain Road Pl NE, STE N, Albuquerque, Nuevo México, 87110, Estados Unidos, EIN: 32-0817400 (en adelante "SN WHITE HOSTING", "nosotros" o "nuestro").' },
          { type: "paragraph" as const, text: "Ofrecemos alojamiento compartido, hosting WordPress, VPS, servidores dedicados, servidores de juegos, registro de dominios y productos relacionados." },
          { type: "paragraph" as const, text: "La privacidad y seguridad de nuestros clientes es una prioridad. Tratamos y protegemos los datos personales conforme a la ley estadounidense y, para clientes en la Unión Europea, en cumplimiento del Reglamento General de Protección de Datos (RGPD) (UE) 2016/679." },
          { type: "paragraph" as const, text: 'Cuando esta Política hace referencia a "usted" o "usuario", se refiere a cualquier persona que utilice nuestros servicios, visite nuestro sitio web snwhitehosting.com o se comunique con nosotros.' },
          { type: "email" as const, label: "Para cualquier consulta sobre esta política o sobre el tratamiento de sus datos, puede contactarnos en:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "2. Principios del Tratamiento de Datos",
        blocks: [
          { type: "paragraph" as const, text: "Tratamos sus datos personales conforme a los siguientes principios:" },
          { type: "list" as const, items: ["Licitud, lealtad y transparencia: siempre con base legal y de forma clara.", "Limitación de la finalidad: recopilamos datos únicamente para fines específicos y legítimos.", "Minimización de datos: tratamos solo los datos estrictamente necesarios.", "Exactitud: mantenemos sus datos actualizados.", "Limitación del plazo de conservación: no conservamos sus datos más tiempo del necesario.", "Integridad y confidencialidad: protegemos sus datos contra accesos no autorizados o pérdidas accidentales."] },
          { type: "paragraph" as const, text: "Toda la información se trata como estrictamente confidencial y solo el personal autorizado tiene acceso a ella." },
        ],
      },
      {
        title: "3. Información que Recopilamos",
        blocks: [
          { type: "paragraph" as const, text: "3.1. Información que usted proporciona — Recopilamos datos personales cuando: se registra en nuestro sitio web, adquiere servicios, solicita soporte técnico, nos contacta o participa en promociones." },
          { type: "list" as const, items: ["Nombre completo.", "Dirección de correo electrónico.", "Dirección postal.", "Número de teléfono.", "Datos de facturación y pago (procesados a través de pasarelas seguras; no almacenamos los datos completos de tarjeta).", "Documentos de identidad (solo cuando sea necesario para el registro de dominios)."] },
          { type: "paragraph" as const, text: "3.2. Información recopilada automáticamente — Al acceder a snwhitehosting.com recopilamos: dirección IP, tipo y versión del navegador, sistema operativo, fecha/hora de conexión y registros de actividad." },
          { type: "paragraph" as const, text: "3.3. Información de registro de dominios — Para el registro de dominios, tratamos datos personales como parte del proceso WHOIS requerido por ICANN. Esto lo realiza Soluciones Corporativas IP, S.L. exclusivamente para la gestión de dominios." },
        ],
      },
      {
        title: "4. Cómo Usamos sus Datos",
        blocks: [
          { type: "list" as const, items: ["Prestar, gestionar y facturar nuestros servicios.", "Configurar su cuenta y gestionar el acceso al área de clientes.", "Cumplir con las obligaciones legales (incluidas las normativas fiscales y las reglas de ICANN).", "Comunicarnos con usted sobre actualizaciones, incidencias o cambios en el servicio.", "Mejorar nuestros servicios y realizar análisis estadísticos.", "Prevenir fraudes y garantizar la seguridad de la infraestructura."] },
        ],
      },
      {
        title: "5. Base Legal del Tratamiento",
        blocks: [
          { type: "list" as const, items: ["Ejecución de contrato: cuando sea necesario para prestar nuestros servicios.", "Obligación legal: cuando lo exija la normativa aplicable.", "Consentimiento: para comunicaciones de marketing o no esenciales.", "Interés legítimo: para la mejora continua del servicio y la prevención de abusos."] },
        ],
      },
      {
        title: "6. Conservación de Datos",
        blocks: [
          { type: "paragraph" as const, text: "Conservamos sus datos durante el tiempo necesario para cumplir la finalidad del tratamiento y nuestras obligaciones legales." },
          { type: "list" as const, items: ["Los datos personales se anonimizarán o eliminarán en un máximo de 30 días tras el cierre de la cuenta, salvo que la ley exija algo distinto.", "Los datos relacionados con dominios se conservarán conforme a los requisitos de ICANN y del proveedor Soluciones Corporativas IP, S.L."] },
        ],
      },
      {
        title: "7. Transferencias de Datos",
        blocks: [
          { type: "paragraph" as const, text: "Podemos transferir datos a terceros únicamente cuando: sea necesario para la prestación del servicio, lo exija la ley o contemos con su consentimiento explícito." },
          { type: "paragraph" as const, text: "Para transferencias internacionales fuera de EE. UU. o la UE, aplicamos las cláusulas contractuales tipo aprobadas por la Comisión Europea." },
        ],
      },
      {
        title: "8. Seguridad de los Datos",
        blocks: [
          { type: "list" as const, items: ["Cifrado SSL/TLS en todas las comunicaciones.", "Control de acceso restringido.", "Copias de seguridad automáticas diarias (incrementales de lunes a sábado, copia completa los domingos a las 03:00 h)."] },
        ],
      },
      {
        title: "9. Derechos del Usuario",
        blocks: [
          { type: "list" as const, items: ["Acceder a sus datos.", "Corregir datos inexactos.", "Solicitar la supresión.", "Limitar u oponerse al tratamiento.", "Solicitar la portabilidad de los datos."] },
          { type: "email" as const, label: "Puede ejercer estos derechos contactando con:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "10. Cambios en la Política",
        blocks: [
          { type: "paragraph" as const, text: "Podemos modificar esta política en cualquier momento. Notificaremos los cambios con 15 días de antelación antes de que entren en vigor, salvo que la ley exija un plazo diferente." },
          { type: "paragraph" as const, text: "Fecha de entrada en vigor: 21 de febrero de 2026" },
        ],
      },
    ],
  },
  de: {
    sections: [
      {
        title: "1. Einleitung",
        blocks: [
          { type: "paragraph" as const, text: 'SN WHITE HOSTING ist der Handelsname von SN SOLUTIONS LLC, mit Sitz in 1209 Mountain Road Pl NE, STE N, Albuquerque, New Mexico, 87110, USA, EIN: 32-0817400 (im Folgenden "SN WHITE HOSTING", "wir" oder "unser").' },
          { type: "paragraph" as const, text: "Wir bieten Shared Hosting, WordPress-Hosting, VPS, dedizierte Server, Gameserver, Domainregistrierung und verwandte Produkte an." },
          { type: "paragraph" as const, text: "Der Schutz der Privatsphäre und die Sicherheit unserer Kunden haben höchste Priorität. Wir verarbeiten und schützen personenbezogene Daten gemäß dem US-amerikanischen Recht und, für Kunden in der Europäischen Union, in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) (EU) 2016/679." },
          { type: "paragraph" as const, text: 'Wenn in dieser Richtlinie von „Sie" oder „Nutzer" die Rede ist, sind alle Personen gemeint, die unsere Dienste nutzen, unsere Website snwhitehosting.com besuchen oder mit uns kommunizieren.' },
          { type: "email" as const, label: "Bei Fragen zu dieser Richtlinie oder zur Verarbeitung Ihrer Daten können Sie uns kontaktieren:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "2. Grundsätze der Datenverarbeitung",
        blocks: [
          { type: "paragraph" as const, text: "Wir verarbeiten Ihre personenbezogenen Daten nach folgenden Grundsätzen:" },
          { type: "list" as const, items: ["Rechtmäßigkeit, Fairness und Transparenz: stets auf einer Rechtsgrundlage und in klarer Weise.", "Zweckbindung: Daten werden nur für bestimmte und legitime Zwecke erhoben.", "Datensparsamkeit: wir verarbeiten nur die unbedingt notwendigen Daten.", "Richtigkeit: wir halten Ihre Daten aktuell.", "Speicherbegrenzung: wir speichern Ihre Daten nicht länger als nötig.", "Integrität und Vertraulichkeit: wir schützen Ihre Daten vor unbefugtem Zugriff oder versehentlichem Verlust."] },
          { type: "paragraph" as const, text: "Alle Informationen werden streng vertraulich behandelt und nur autorisiertes Personal hat Zugang dazu." },
        ],
      },
      {
        title: "3. Erfasste Daten",
        blocks: [
          { type: "paragraph" as const, text: "3.1. Von Ihnen bereitgestellte Daten — Wir erfassen personenbezogene Daten, wenn Sie: sich auf unserer Website registrieren, Dienste erwerben, technischen Support anfordern, uns kontaktieren oder an Aktionen teilnehmen." },
          { type: "list" as const, items: ["Vollständiger Name.", "E-Mail-Adresse.", "Postanschrift.", "Telefonnummer.", "Rechnungs- und Zahlungsdaten (über sichere Zahlungsgateways; wir speichern keine vollständigen Kartendaten).", "Ausweisdokumente (nur bei Bedarf für die Domainregistrierung)."] },
          { type: "paragraph" as const, text: "3.2. Automatisch erfasste Daten — Beim Besuch von snwhitehosting.com erfassen wir: IP-Adresse, Browsertyp und -version, Betriebssystem, Datum/Uhrzeit der Verbindung und Aktivitätsprotokolle." },
          { type: "paragraph" as const, text: "3.3. Domainregistrierungsdaten — Für die Domainregistrierung verarbeiten wir personenbezogene Daten im Rahmen des von ICANN geforderten WHOIS-Verfahrens. Dies erfolgt durch Soluciones Corporativas IP, S.L. ausschließlich für die Domainverwaltung." },
        ],
      },
      {
        title: "4. Verwendung Ihrer Daten",
        blocks: [
          { type: "list" as const, items: ["Bereitstellung, Verwaltung und Abrechnung unserer Dienste.", "Einrichtung Ihres Kontos und Verwaltung des Zugangs zum Kundenbereich.", "Erfüllung gesetzlicher Pflichten (einschließlich Steuervorschriften und ICANN-Regeln).", "Kommunikation über Updates, Vorfälle oder Änderungen.", "Verbesserung unserer Dienste und statistische Analysen.", "Betrugsprävention und Gewährleistung der Infrastruktursicherheit."] },
        ],
      },
      {
        title: "5. Rechtsgrundlage der Verarbeitung",
        blocks: [
          { type: "list" as const, items: ["Vertragserfüllung: wenn zur Leistungserbringung erforderlich.", "Rechtliche Verpflichtung: wenn durch anwendbares Recht vorgeschrieben.", "Einwilligung: für Marketing- oder nicht wesentliche Kommunikation.", "Berechtigte Interessen: zur kontinuierlichen Serviceverbesserung und Missbrauchsprävention."] },
        ],
      },
      {
        title: "6. Datenspeicherung",
        blocks: [
          { type: "paragraph" as const, text: "Wir speichern Ihre Daten so lange, wie es zur Erfüllung des Verarbeitungszwecks und unserer gesetzlichen Pflichten erforderlich ist." },
          { type: "list" as const, items: ["Personenbezogene Daten werden nach Kontoschließung innerhalb von 30 Tagen anonymisiert oder gelöscht, sofern gesetzlich nichts anderes vorgeschrieben ist.", "Domainbezogene Daten werden entsprechend den Anforderungen von ICANN und dem Anbieter Soluciones Corporativas IP, S.L. aufbewahrt."] },
        ],
      },
      {
        title: "7. Datenübertragungen",
        blocks: [
          { type: "paragraph" as const, text: "Wir übermitteln Daten an Dritte nur, wenn: dies für die Leistungserbringung notwendig ist, gesetzlich verlangt wird oder Ihre ausdrückliche Einwilligung vorliegt." },
          { type: "paragraph" as const, text: "Für internationale Übertragungen außerhalb der USA oder der EU wenden wir die von der Europäischen Kommission genehmigten Standardvertragsklauseln an." },
        ],
      },
      {
        title: "8. Datensicherheit",
        blocks: [
          { type: "list" as const, items: ["SSL/TLS-Verschlüsselung für die gesamte Kommunikation.", "Eingeschränkte Zugriffskontrolle.", "Automatische tägliche Backups (inkrementell Mo–Sa, vollständiges Backup sonntags um 03:00 Uhr)."] },
        ],
      },
      {
        title: "9. Nutzerrechte",
        blocks: [
          { type: "list" as const, items: ["Auskunft über Ihre Daten.", "Berichtigung unrichtiger Daten.", "Löschung beantragen.", "Verarbeitung einschränken oder widersprechen.", "Datenportabilität beantragen."] },
          { type: "email" as const, label: "Sie können diese Rechte ausüben, indem Sie uns kontaktieren:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "10. Änderungen der Richtlinie",
        blocks: [
          { type: "paragraph" as const, text: "Wir können diese Richtlinie jederzeit ändern. Änderungen werden 15 Tage im Voraus angekündigt, sofern gesetzlich kein anderer Zeitraum vorgeschrieben ist." },
          { type: "paragraph" as const, text: "Datum des Inkrafttretens: 21. Februar 2026" },
        ],
      },
    ],
  },
  nl: {
    sections: [
      {
        title: "1. Inleiding",
        blocks: [
          { type: "paragraph" as const, text: 'SN WHITE HOSTING is de handelsnaam van SN SOLUTIONS LLC, gevestigd te 1209 Mountain Road Pl NE, STE N, Albuquerque, New Mexico, 87110, Verenigde Staten, EIN: 32-0817400 (hierna "SN WHITE HOSTING", "wij" of "ons").' },
          { type: "paragraph" as const, text: "Wij bieden gedeeld hosting, WordPress-hosting, VPS, dedicated servers, gameservers, domeinregistratie en aanverwante producten aan." },
          { type: "paragraph" as const, text: "De privacy en veiligheid van onze klanten is onze hoogste prioriteit. Wij verwerken en beschermen persoonsgegevens in overeenstemming met de Amerikaanse wetgeving en, voor klanten in de Europese Unie, conform de Algemene Verordening Gegevensbescherming (AVG) (EU) 2016/679." },
          { type: "paragraph" as const, text: 'Wanneer dit beleid verwijst naar "u" of "gebruiker", worden alle personen bedoeld die onze diensten gebruiken, onze website snwhitehosting.com bezoeken of met ons communiceren.' },
          { type: "email" as const, label: "Voor vragen over dit beleid of over de verwerking van uw gegevens kunt u contact met ons opnemen via:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "2. Beginselen van Gegevensverwerking",
        blocks: [
          { type: "paragraph" as const, text: "Wij verwerken uw persoonsgegevens in overeenstemming met de volgende beginselen:" },
          { type: "list" as const, items: ["Rechtmatigheid, eerlijkheid en transparantie: altijd met een rechtsgrondslag en op een duidelijke manier.", "Doelbinding: wij verzamelen gegevens alleen voor specifieke en legitieme doeleinden.", "Minimale gegevensverwerking: wij verwerken alleen de strikt noodzakelijke gegevens.", "Juistheid: wij houden uw gegevens up-to-date.", "Opslagbeperking: wij bewaren uw gegevens niet langer dan nodig.", "Integriteit en vertrouwelijkheid: wij beschermen uw gegevens tegen onbevoegde toegang of onbedoeld verlies."] },
          { type: "paragraph" as const, text: "Alle informatie wordt strikt vertrouwelijk behandeld en alleen bevoegd personeel heeft er toegang toe." },
        ],
      },
      {
        title: "3. Informatie die Wij Verzamelen",
        blocks: [
          { type: "paragraph" as const, text: "3.1. Door u verstrekte informatie — Wij verzamelen persoonsgegevens wanneer u: zich registreert op onze website, diensten aanschaft, technische ondersteuning vraagt, contact met ons opneemt of deelneemt aan acties." },
          { type: "list" as const, items: ["Volledige naam.", "E-mailadres.", "Postadres.", "Telefoonnummer.", "Facturerings- en betalingsgegevens (verwerkt via beveiligde betaalgateways; wij slaan geen volledige kaartgegevens op).", "Identiteitsdocumenten (alleen indien vereist voor domeinregistratie)."] },
          { type: "paragraph" as const, text: "3.2. Automatisch verzamelde informatie — Bij toegang tot snwhitehosting.com verzamelen wij: IP-adres, browsertype en -versie, besturingssysteem, datum/tijd van de verbinding en activiteitenlogboeken." },
          { type: "paragraph" as const, text: "3.3. Domeinregistratie-informatie — Voor domeinregistratie verwerken wij persoonsgegevens als onderdeel van het door ICANN vereiste WHOIS-proces. Dit wordt uitgevoerd door Soluciones Corporativas IP, S.L. uitsluitend voor domeinbeheer." },
        ],
      },
      {
        title: "4. Hoe Wij Uw Gegevens Gebruiken",
        blocks: [
          { type: "list" as const, items: ["Het leveren, beheren en factureren van onze diensten.", "Het instellen van uw account en beheer van de toegang tot het klantengebied.", "Voldoen aan wettelijke verplichtingen (inclusief belastingregels en ICANN-regels).", "Communiceren over updates, incidenten of servicewijzigingen.", "Verbeteren van onze diensten en uitvoeren van statistische analyses.", "Fraude voorkomen en de infrastructuurveiligheid waarborgen."] },
        ],
      },
      {
        title: "5. Rechtsgrondslag voor Verwerking",
        blocks: [
          { type: "list" as const, items: ["Uitvoering van overeenkomst: wanneer noodzakelijk voor het leveren van onze diensten.", "Wettelijke verplichting: wanneer vereist door toepasselijk recht.", "Toestemming: voor marketing of niet-essentiële communicatie.", "Gerechtvaardigd belang: voor continue serviceverbetering en misbruikpreventie."] },
        ],
      },
      {
        title: "6. Bewaring van Gegevens",
        blocks: [
          { type: "paragraph" as const, text: "Wij bewaren uw gegevens zo lang als nodig is voor het verwerkingsdoel en onze wettelijke verplichtingen." },
          { type: "list" as const, items: ["Persoonsgegevens worden na sluiting van het account binnen 30 dagen geanonimiseerd of verwijderd, tenzij de wet anders vereist.", "Domeingegevens worden bewaard conform de vereisten van ICANN en de provider Soluciones Corporativas IP, S.L."] },
        ],
      },
      {
        title: "7. Gegevensdoorgiften",
        blocks: [
          { type: "paragraph" as const, text: "Wij kunnen gegevens aan derden doorgeven alleen wanneer: dit noodzakelijk is voor de dienstverlening, wettelijk vereist is of u expliciet toestemming heeft gegeven." },
          { type: "paragraph" as const, text: "Voor internationale doorgiften buiten de VS of de EU passen wij de door de Europese Commissie goedgekeurde standaardcontractbepalingen toe." },
        ],
      },
      {
        title: "8. Gegevensbeveiliging",
        blocks: [
          { type: "list" as const, items: ["SSL/TLS-versleuteling voor alle communicatie.", "Beperkte toegangscontrole.", "Automatische dagelijkse back-ups (incrementeel ma–za, volledige back-up op zondag om 03:00 uur)."] },
        ],
      },
      {
        title: "9. Rechten van de Gebruiker",
        blocks: [
          { type: "list" as const, items: ["Inzage in uw gegevens.", "Onjuiste gegevens corrigeren.", "Verwijdering aanvragen.", "Verwerking beperken of bezwaar maken.", "Gegevensoverdraagbaarheid aanvragen."] },
          { type: "email" as const, label: "U kunt deze rechten uitoefenen door contact met ons op te nemen via:", email: "privacy@snwhitehosting.com" },
        ],
      },
      {
        title: "10. Wijzigingen in het Beleid",
        blocks: [
          { type: "paragraph" as const, text: "Wij kunnen dit beleid op elk moment wijzigen. Wij zullen wijzigingen 15 dagen van tevoren aankondigen voordat ze van kracht worden, tenzij de wet een andere termijn vereist." },
          { type: "paragraph" as const, text: "Ingangsdatum: 21 februari 2026" },
        ],
      },
    ],
  },
} as const

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage()
  const content = localizedContent[language] ?? localizedContent.en

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.privacyPolicyTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.privacyPolicySubtitle}
            </p>
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/privacy-policy" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              <style jsx global>{`
                .prose h2 {
                  font-size: 2rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  color: hsl(var(--foreground));
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
              `}</style>

              {content.sections.map((section) => (
                <section key={section.title} className="mb-12">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => {
                    if (block.type === "paragraph") {
                      return <p key={index}>{block.text}</p>
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={index}>
                          {block.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )
                    }
                    if (block.type === "email") {
                      return (
                        <p key={index}>
                          {block.label}{" "}
                          <a href={`mailto:${block.email}`} className="text-primary hover:underline">{block.email}</a>
                        </p>
                      )
                    }
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
                    <a href="mailto:privacy@snwhitehosting.com" className="text-primary hover:underline">
                      privacy@snwhitehosting.com
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
