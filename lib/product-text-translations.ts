import type { Language } from "@/lib/translations"

type TranslationEntry = Record<Language, string>

const textMap: Record<string, TranslationEntry> = {
  // Plan Descriptions & Names
  "Free Trial": {
    en: "Free Trial",
    es: "Prueba gratis",
    de: "Kostenlose Testversion",
    nl: "Gratis proef",
  },
  "Free Trial — ¡GRATIS!": {
    en: "Free Trial — FREE!",
    es: "Free Trial — ¡GRATIS!",
    de: "Kostenlose Testversion — GRATIS!",
    nl: "Gratis proef — GRATIS!",
  },
  "Entrada": {
    en: "Entry",
    es: "Entrada",
    de: "Einstieg",
    nl: "Instap",
  },
  "Recomendado": {
    en: "Recommended",
    es: "Recomendado",
    de: "Empfohlen",
    nl: "Aanbevolen",
  },
  "Para comunidades": {
    en: "For communities",
    es: "Para comunidades",
    de: "Für Communities",
    nl: "Voor communities",
  },
  "Alta capacidad": {
    en: "High capacity",
    es: "Alta capacidad",
    de: "Hohe Kapazität",
    nl: "Hoge capaciteit",
  },
  "Máximo rendimiento": {
    en: "Maximum performance",
    es: "Máximo rendimiento",
    de: "Maximale Leistung",
    nl: "Maximale prestaties",
  },
  "Para negocios en crecimiento": {
    en: "For growing businesses",
    es: "Para negocios en crecimiento",
    de: "Für wachsende Unternehmen",
    nl: "Voor groeiende bedrijven",
  },
  // Plan names - Minecraft
  "MJ - Servidor Gratis": {
    en: "MJ - Free Server",
    es: "MJ - Servidor Gratis",
    de: "MJ - Kostenloser Server",
    nl: "MJ - Gratis server",
  },
  "MJ - Plan Madera": {
    en: "MJ - Wood Plan",
    es: "MJ - Plan Madera",
    de: "MJ - Holz-Plan",
    nl: "MJ - Hout-plan",
  },
  "MJ - Plan Piedra": {
    en: "MJ - Stone Plan",
    es: "MJ - Plan Piedra",
    de: "MJ - Stein-Plan",
    nl: "MJ - Steen-plan",
  },
  "MJ - Plan Hierrónico": {
    en: "MJ - Iron Plan",
    es: "MJ - Plan Hierrónico",
    de: "MJ - Eisen-Plan",
    nl: "MJ - IJzer-plan",
  },
  "MJ - Plan Oro": {
    en: "MJ - Gold Plan",
    es: "MJ - Plan Oro",
    de: "MJ - Gold-Plan",
    nl: "MJ - Goud-plan",
  },
  "MJ - Plan Cobre": {
    en: "MJ - Copper Plan",
    es: "MJ - Plan Cobre",
    de: "MJ - Kupfer-Plan",
    nl: "MJ - Koper-plan",
  },
  "MJ - Plan Diamante": {
    en: "MJ - Diamond Plan",
    es: "MJ - Plan Diamante",
    de: "MJ - Diamant-Plan",
    nl: "MJ - Diamant-plan",
  },
  // Hardware & Features
  "2GB RAM": {
    en: "2GB RAM",
    es: "2GB RAM",
    de: "2GB RAM",
    nl: "2GB RAM",
  },
  "3GB RAM": {
    en: "3GB RAM",
    es: "3GB RAM",
    de: "3GB RAM",
    nl: "3GB RAM",
  },
  "4GB RAM": {
    en: "4GB RAM",
    es: "4GB RAM",
    de: "4GB RAM",
    nl: "4GB RAM",
  },
  "6GB RAM": {
    en: "6GB RAM",
    es: "6GB RAM",
    de: "6GB RAM",
    nl: "6GB RAM",
  },
  "2 Núcleos": {
    en: "2 Cores",
    es: "2 Núcleos",
    de: "2 Kerne",
    nl: "2 Cores",
  },
  "2GB de memoria RAM": {
    en: "2GB of RAM",
    es: "2GB de memoria RAM",
    de: "2GB RAM",
    nl: "2GB RAM",
  },
  "5GB almacenamiento": {
    en: "5GB Storage",
    es: "5GB almacenamiento",
    de: "5GB Speicher",
    nl: "5GB opslag",
  },
  "5GB de almacenamiento NVME": {
    en: "5GB NVMe Storage",
    es: "5GB de almacenamiento NVME",
    de: "5GB NVMe Speicher",
    nl: "5GB NVMe opslag",
  },
  "8GB almacenamiento": {
    en: "8GB Storage",
    es: "8GB almacenamiento",
    de: "8GB Speicher",
    nl: "8GB opslag",
  },
  "10GB almacenamiento": {
    en: "10GB Storage",
    es: "10GB almacenamiento",
    de: "10GB Speicher",
    nl: "10GB opslag",
  },
  "Pterodactyl Panel": {
    en: "Pterodactyl Panel",
    es: "Pterodactyl Panel",
    de: "Pterodactyl Panel",
    nl: "Pterodactyl Panel",
  },
  "Panel Pterodactyl": {
    en: "Pterodactyl Panel",
    es: "Panel Pterodactyl",
    de: "Pterodactyl Panel",
    nl: "Pterodactyl Panel",
  },
  "Todas las versiones": {
    en: "All versions",
    es: "Todas las versiones",
    de: "Alle Versionen",
    nl: "Alle versies",
  },
  "Slots ilimitados": {
    en: "Unlimited Slots",
    es: "Slots ilimitados",
    de: "Unbegrenzte Slots",
    nl: "Onbeperkte slots",
  },
  "Plugins": {
    en: "Plugins",
    es: "Plugins",
    de: "Plugins",
    nl: "Plugins",
  },
  "Mods": {
    en: "Mods",
    es: "Mods",
    de: "Mods",
    nl: "Mods",
  },
  "Base de datos": {
    en: "Database",
    es: "Base de datos",
    de: "Datenbank",
    nl: "Database",
  },
  "FTP": {
    en: "FTP Access",
    es: "Acceso FTP",
    de: "FTP-Zugriff",
    nl: "FTP-toegang",
  },
  "Soporte 24/7": {
    en: "24/7 Support",
    es: "Soporte 24/7",
    de: "24/7 Support",
    nl: "24/7 Ondersteuning",
  },
  // Common features
  "Mensual": {
    en: "Monthly",
    es: "Mensual",
    de: "Monatlich",
    nl: "Maandelijks",
  },
  "Coste de Instalación": {
    en: "Installation Fee",
    es: "Coste de Instalación",
    de: "Installationsgebühr",
    nl: "Installatiekosten",
  },
  "Localización: Estados Unidos": {
    en: "Location: United States",
    es: "Localización: Estados Unidos",
    de: "Standort: Vereinigte Staaten",
    nl: "Locatie: Verenigde Staten",
  },
  "Localización: Alemania": {
    en: "Location: Germany",
    es: "Localización: Alemania",
    de: "Standort: Deutschland",
    nl: "Locatie: Duitsland",
  },
  "Localización: Finlandia": {
    en: "Location: Finland",
    es: "Localización: Finlandia",
    de: "Standort: Finnland",
    nl: "Locatie: Finland",
  },
  "Ubicación: Alemania": {
    en: "Location: Germany",
    es: "Ubicación: Alemania",
    de: "Standort: Deutschland",
    nl: "Locatie: Duitsland",
  },
  "Ancho de Banda - Ilimitado": {
    en: "Bandwidth - Unlimited",
    es: "Ancho de Banda - Ilimitado",
    de: "Bandbreite - Unbegrenzt",
    nl: "Bandbreedte - Onbeperkt",
  },
  "Intel® Core™ i5-13500 14-Core \"Raptor Lake-S\"": {
    en: "Intel® Core™ i5-13500 14-Core \"Raptor Lake-S\"",
    es: "Intel® Core™ i5-13500 14 núcleos \"Raptor Lake-S\"",
    de: "Intel® Core™ i5-13500 14-Kern \"Raptor Lake-S\"",
    nl: "Intel® Core™ i5-13500 14-Core \"Raptor Lake-S\"",
  },
  "64 GB DDR4 RAM": {
    en: "64 GB DDR4 RAM",
    es: "64 GB DDR4 RAM",
    de: "64 GB DDR4 RAM",
    nl: "64 GB DDR4 RAM",
  },
  "2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)": {
    en: "2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
    es: "2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
    de: "2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
    nl: "2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
  },
  // Additional descriptions
  "Para servidores RP pequeños": {
    en: "For small RP servers",
    es: "Para servidores RP pequeños",
    de: "Für kleine RP-Server",
    nl: "Voor kleine RP-servers",
  },
  "Más popular": {
    en: "Most Popular",
    es: "Más popular",
    de: "Am beliebtesten",
    nl: "Meest populair",
  },
  "Para comunidades grandes": {
    en: "For large communities",
    es: "Para comunidades grandes",
    de: "Für große Communities",
    nl: "Voor grote communities",
  },
  "Para servidores en crecimiento": {
    en: "For growing servers",
    es: "Para servidores en crecimiento",
    de: "Für wachsende Server",
    nl: "Voor groeiende servers",
  },
  "Para servidores grandes": {
    en: "For large servers",
    es: "Para servidores grandes",
    de: "Für große Server",
    nl: "Voor grote servers",
  },
  "Para servidores pequeños": {
    en: "For small servers",
    es: "Para servidores pequeños",
    de: "Für kleine Server",
    nl: "Voor kleine servers",
  },
  "Comunidades grandes": {
    en: "Large Communities",
    es: "Comunidades grandes",
    de: "Große Communities",
    nl: "Grote communities",
  },
  "Comunidades en crecimiento": {
    en: "Growing Communities",
    es: "Comunidades en crecimiento",
    de: "Wachsende Communities",
    nl: "Groeiende communities",
  },
  "Para comunidades pequeñas": {
    en: "For small communities",
    es: "Para comunidades pequeñas",
    de: "Für kleine Communities",
    nl: "Voor kleine communities",
  },
  "Alto rendimiento": {
    en: "High Performance",
    es: "Alto rendimiento",
    de: "Hohe Leistung",
    nl: "Hoge prestatie",
  },
  "Muy alto rendimiento": {
    en: "Very High Performance",
    es: "Muy alto rendimiento",
    de: "Sehr hohe Leistung",
    nl: "Zeer hoge prestatie",
  },
  "Máxima potencia": {
    en: "Maximum Power",
    es: "Máxima potencia",
    de: "Maximale Kraft",
    nl: "Maximale kracht",
  },
  "¡GRATIS!": {
    en: "FREE!",
    es: "¡GRATIS!",
    de: "KOSTENLOS!",
    nl: "GRATIS!",
  },
  "For small groups": {
    en: "For small groups",
    es: "Para grupos pequeños",
    de: "Für kleine Gruppen",
    nl: "Voor kleine groepen",
  },
  "Great for casual play": {
    en: "Great for casual play",
    es: "Perfecto para juego casual",
    de: "Großartig zum Spielen",
    nl: "Geweldig voor casual spelen",
  },
  "For dedicated groups": {
    en: "For dedicated groups",
    es: "Para grupos dedicados",
    de: "Für engagierte Gruppen",
    nl: "Voor toegewijde groepen",
  },
  "Maximum performance": {
    en: "Maximum performance",
    es: "Rendimiento máximo",
    de: "Maximale Leistung",
    nl: "Maximale prestatie",
  },
  "Empieza tu negocio de hosting": {
    en: "Start your hosting business",
    es: "Empieza tu negocio de hosting",
    de: "Starten Sie Ihr Hosting-Geschäft",
    nl: "Start uw hostingbedrijf",
  },
  "Para resellers ambiciosos": {
    en: "For ambitious resellers",
    es: "Para resellers ambiciosos",
    de: "Für ehrgeizige Reseller",
    nl: "Voor ambitieuze resellers",
  },
  "Para agencias establecidas": {
    en: "For established agencies",
    es: "Para agencias establecidas",
    de: "Für etablierte Agenturen",
    nl: "Voor gevestigde bureaus",
  },
  "Maxima capacidad": {
    en: "Maximum Capacity",
    es: "Maxima capacidad",
    de: "Maximale Kapazität",
    nl: "Maximale capaciteit",
  },
  // Shared Hosting - Plan descriptions
  "Ideal para empezar con tu proyecto sin renunciar a la calidad. Hosting rápido, seguro y estable desde el primer día.": {
    en: "Ideal to start your project without compromising quality. Fast, secure and stable hosting from day one.",
    es: "Ideal para empezar con tu proyecto sin renunciar a la calidad. Hosting rápido, seguro y estable desde el primer día.",
    de: "Ideal, um Ihr Projekt ohne Kompromisse zu starten. Schnelles, sicheres und stabiles Hosting vom ersten Tag an.",
    nl: "Ideaal om je project te starten zonder in te boeten aan kwaliteit. Snelle, veilige en stabiele hosting vanaf dag één.",
  },
  "El equilibrio perfecto entre rendimiento y capacidad. Ideal para webs profesionales o corporativas que requieren estabilidad total.": {
    en: "The perfect balance between performance and capacity. Ideal for professional or corporate websites that require total stability.",
    es: "El equilibrio perfecto entre rendimiento y capacidad. Ideal para webs profesionales o corporativas que requieren estabilidad total.",
    de: "Die perfekte Balance zwischen Leistung und Kapazität. Ideal für professionelle oder Unternehmenswebsites, die volle Stabilität erfordern.",
    nl: "De perfecte balans tussen prestaties en capaciteit. Ideaal voor professionele of bedrijfswebsites die totale stabiliteit vereisen.",
  },
  "Más potencia para proyectos dinámicos y bases de datos exigentes. Rendimiento superior y estabilidad en todo momento.": {
    en: "More power for dynamic projects and demanding databases. Superior performance and stability at all times.",
    es: "Más potencia para proyectos dinámicos y bases de datos exigentes. Rendimiento superior y estabilidad en todo momento.",
    de: "Mehr Leistung für dynamische Projekte und anspruchsvolle Datenbanken. Überlegene Leistung und Stabilität jederzeit.",
    nl: "Meer vermogen voor dynamische projecten en veeleisende databases. Superieure prestaties en stabiliteit op elk moment.",
  },
  "Máxima potencia y estabilidad. Diseñado para tiendas online, webs de alto tráfico y proyectos empresariales.": {
    en: "Maximum power and stability. Designed for online stores, high-traffic websites, and business projects.",
    es: "Máxima potencia y estabilidad. Diseñado para tiendas online, webs de alto tráfico y proyectos empresariales.",
    de: "Maximale Leistung und Stabilität. Entwickelt für Online-Shops, Websites mit hohem Traffic und Unternehmensprojekte.",
    nl: "Maximale kracht en stabiliteit. Ontworpen voor webshops, websites met veel verkeer en zakelijke projecten.",
  },
  // Shared Hosting - Features
  "15 GB de almacenamiento NVMe (máxima velocidad)": {
    en: "15 GB NVMe storage (maximum speed)",
    es: "15 GB de almacenamiento NVMe (máxima velocidad)",
    de: "15 GB NVMe-Speicher (maximale Geschwindigkeit)",
    nl: "15 GB NVMe-opslag (maximale snelheid)",
  },
  "20 GB de almacenamiento NVMe": {
    en: "20 GB NVMe storage",
    es: "20 GB de almacenamiento NVMe",
    de: "20 GB NVMe-Speicher",
    nl: "20 GB NVMe-opslag",
  },
  "50 GB de almacenamiento NVMe": {
    en: "50 GB NVMe storage",
    es: "50 GB de almacenamiento NVMe",
    de: "50 GB NVMe-Speicher",
    nl: "50 GB NVMe-opslag",
  },
  "100 GB de almacenamiento NVMe": {
    en: "100 GB NVMe storage",
    es: "100 GB de almacenamiento NVMe",
    de: "100 GB NVMe-Speicher",
    nl: "100 GB NVMe-opslag",
  },
  "Memoria DDR4 de alto rendimiento": {
    en: "High-performance DDR4 memory",
    es: "Memoria DDR4 de alto rendimiento",
    de: "Hochleistungs-DDR4-Speicher",
    nl: "Hoogwaardig DDR4-geheugen",
  },
  "Memoria DDR5 de alto rendimiento": {
    en: "High-performance DDR5 memory",
    es: "Memoria DDR5 de alto rendimiento",
    de: "Hochleistungs-DDR5-Speicher",
    nl: "Hoogwaardig DDR5-geheugen",
  },
  "Servidor LiteSpeed + LSCache (optimización avanzada)": {
    en: "LiteSpeed server + LSCache (advanced optimization)",
    es: "Servidor LiteSpeed + LSCache (optimización avanzada)",
    de: "LiteSpeed-Server + LSCache (erweiterte Optimierung)",
    nl: "LiteSpeed-server + LSCache (geavanceerde optimalisatie)",
  },
  "Servidor LiteSpeed + LSCache": {
    en: "LiteSpeed server + LSCache",
    es: "Servidor LiteSpeed + LSCache",
    de: "LiteSpeed-Server + LSCache",
    nl: "LiteSpeed-server + LSCache",
  },
  "Servidor LiteSpeed + LSCache (optimización extrema)": {
    en: "LiteSpeed server + LSCache (extreme optimization)",
    es: "Servidor LiteSpeed + LSCache (optimización extrema)",
    de: "LiteSpeed-Server + LSCache (extreme Optimierung)",
    nl: "LiteSpeed-server + LSCache (extreme optimalisatie)",
  },
  "Servidor LiteSpeed + LSCache (rendimiento extremo)": {
    en: "LiteSpeed server + LSCache (extreme performance)",
    es: "Servidor LiteSpeed + LSCache (rendimiento extremo)",
    de: "LiteSpeed-Server + LSCache (extreme Leistung)",
    nl: "LiteSpeed-server + LSCache (extreme prestaties)",
  },
  "Seguridad Imunify360 Anti-Malware": {
    en: "Imunify360 Anti-Malware security",
    es: "Seguridad Imunify360 Anti-Malware",
    de: "Imunify360 Anti-Malware-Sicherheit",
    nl: "Imunify360 Anti-Malware-beveiliging",
  },
  "Suite Imunify360 Anti-Malware": {
    en: "Imunify360 Anti-Malware suite",
    es: "Suite Imunify360 Anti-Malware",
    de: "Imunify360 Anti-Malware-Suite",
    nl: "Imunify360 Anti-Malware-suite",
  },
  "Sistema CloudLinux (recursos garantizados)": {
    en: "CloudLinux system (guaranteed resources)",
    es: "Sistema CloudLinux (recursos garantizados)",
    de: "CloudLinux-System (garantierte Ressourcen)",
    nl: "CloudLinux-systeem (gegarandeerde middelen)",
  },
  "Copias de seguridad automáticas con JetBackup": {
    en: "Automatic backups with JetBackup",
    es: "Copias de seguridad automáticas con JetBackup",
    de: "Automatische Backups mit JetBackup",
    nl: "Automatische back-ups met JetBackup",
  },
  "Copias de seguridad diarias con JetBackup": {
    en: "Daily backups with JetBackup",
    es: "Copias de seguridad diarias con JetBackup",
    de: "Tägliche Backups mit JetBackup",
    nl: "Dagelijkse back-ups met JetBackup",
  },
  "cPanel incluido": {
    en: "cPanel included",
    es: "cPanel incluido",
    de: "cPanel enthalten",
    nl: "cPanel inbegrepen",
  },
  "3 Bases de Datos MySQL": {
    en: "3 MySQL databases",
    es: "3 Bases de Datos MySQL",
    de: "3 MySQL-Datenbanken",
    nl: "3 MySQL-databases",
  },
  "6 Bases de Datos MySQL": {
    en: "6 MySQL databases",
    es: "6 Bases de Datos MySQL",
    de: "6 MySQL-Datenbanken",
    nl: "6 MySQL-databases",
  },
  "10 Bases de Datos MySQL": {
    en: "10 MySQL databases",
    es: "10 Bases de Datos MySQL",
    de: "10 MySQL-Datenbanken",
    nl: "10 MySQL-databases",
  },
  "20 Bases de Datos MySQL": {
    en: "20 MySQL databases",
    es: "20 Bases de Datos MySQL",
    de: "20 MySQL-Datenbanken",
    nl: "20 MySQL-databases",
  },
  "3 Cuentas FTP": {
    en: "3 FTP accounts",
    es: "3 Cuentas FTP",
    de: "3 FTP-Konten",
    nl: "3 FTP-accounts",
  },
  "6 Cuentas FTP": {
    en: "6 FTP accounts",
    es: "6 Cuentas FTP",
    de: "6 FTP-Konten",
    nl: "6 FTP-accounts",
  },
  "10 Cuentas FTP": {
    en: "10 FTP accounts",
    es: "10 Cuentas FTP",
    de: "10 FTP-Konten",
    nl: "10 FTP-accounts",
  },
  "20 Cuentas FTP": {
    en: "20 FTP accounts",
    es: "20 Cuentas FTP",
    de: "20 FTP-Konten",
    nl: "20 FTP-accounts",
  },
  "Correos electrónicos ilimitados": {
    en: "Unlimited email accounts",
    es: "Correos electrónicos ilimitados",
    de: "Unbegrenzte E-Mail-Konten",
    nl: "Onbeperkte e-mailaccounts",
  },
  "Certificado SSL gratuito": {
    en: "Free SSL certificate",
    es: "Certificado SSL gratuito",
    de: "Kostenloses SSL-Zertifikat",
    nl: "Gratis SSL-certificaat",
  },
  "Ubicación del servidor - Finlandia Y Alemania": {
    en: "Server location - Finland and Germany",
    es: "Ubicación del servidor - Finlandia Y Alemania",
    de: "Serverstandort - Finnland und Deutschland",
    nl: "Serverlocatie - Finland en Duitsland",
  },
  "Perfecto para blogs, webs personales, páginas pequeñas y proyectos que inician.": {
    en: "Perfect for blogs, personal websites, small pages, and starting projects.",
    es: "Perfecto para blogs, webs personales, páginas pequeñas y proyectos que inician.",
    de: "Perfekt für Blogs, persönliche Websites, kleine Seiten und Startprojekte.",
    nl: "Perfect voor blogs, persoonlijke websites, kleine pagina's en startende projecten.",
  },
  "Perfecto para empresas, webs corporativas, landing pages y proyectos en crecimiento.": {
    en: "Perfect for businesses, corporate websites, landing pages, and growing projects.",
    es: "Perfecto para empresas, webs corporativas, landing pages y proyectos en crecimiento.",
    de: "Perfekt für Unternehmen, Firmenwebsites, Landing Pages und wachsende Projekte.",
    nl: "Perfect voor bedrijven, bedrijfswebsites, landingpages en groeiende projecten.",
  },
  "Perfecto para tiendas pequeñas, proyectos dinámicos, webs con bases de datos activas y carga media.": {
    en: "Perfect for small stores, dynamic projects, sites with active databases, and medium traffic.",
    es: "Perfecto para tiendas pequeñas, proyectos dinámicos, webs con bases de datos activas y carga media.",
    de: "Perfekt für kleine Shops, dynamische Projekte, Seiten mit aktiven Datenbanken und mittlerem Traffic.",
    nl: "Perfect voor kleine winkels, dynamische projecten, sites met actieve databases en gemiddeld verkeer.",
  },
  "Ideal para e-commerce, webs con picos de tráfico, proyectos empresariales y negocios en expansión.": {
    en: "Ideal for e-commerce, websites with traffic spikes, business projects, and expanding companies.",
    es: "Ideal para e-commerce, webs con picos de tráfico, proyectos empresariales y negocios en expansión.",
    de: "Ideal für E-Commerce, Websites mit Traffic-Spitzen, Unternehmensprojekte und wachsende Unternehmen.",
    nl: "Ideaal voor e-commerce, sites met verkeerspieken, bedrijfsprojecten en groeiende bedrijven.",
  },
  // Migrations page
  "Website Migration": {
    en: "Website Migration",
    es: "Migración Web",
    de: "Website-Migration",
    nl: "Website-migratie",
  },
  "Do you need a website migration?": {
    en: "Do you need a website migration?",
    es: "¿Necesitas una migración web?",
    de: "Benötigen Sie eine Website-Migration?",
    nl: "Heb je een website-migratie nodig?",
  },
  "We migrate your website from your current hosting provider with zero downtime. If you purchase any of our web hosting products, we will migrate up to 10 websites and the content of up to 10 email accounts completely free of charge.": {
    en: "We migrate your website from your current hosting provider with zero downtime. If you purchase any of our web hosting products, we will migrate up to 10 websites and the content of up to 10 email accounts completely free of charge.",
    es: "Migramos tu web desde tu proveedor actual sin tiempo de inactividad. Al contratar cualquiera de nuestros planes de hosting, migramos hasta 10 webs y el contenido de hasta 10 cuentas de correo totalmente gratis.",
    de: "Wir migrieren Ihre Website ohne Ausfallzeit von Ihrem aktuellen Anbieter. Beim Kauf eines unserer Hosting-Produkte migrieren wir bis zu 10 Websites und den Inhalt von bis zu 10 E-Mail-Konten kostenlos.",
    nl: "We migreren je website zonder downtime vanaf je huidige provider. Bij aankoop van onze hostingproducten migreren we tot 10 websites en de inhoud van tot 10 e-mailaccounts gratis.",
  },
  "Free with new plans": {
    en: "Free with new plans",
    es: "Gratis con nuevos planes",
    de: "Kostenlos bei neuen Plänen",
    nl: "Gratis bij nieuwe plannen",
  },
  "No downtime": {
    en: "No downtime",
    es: "Sin tiempo de inactividad",
    de: "Keine Ausfallzeit",
    nl: "Geen downtime",
  },
  "24/7 support": {
    en: "24/7 support",
    es: "Soporte 24/7",
    de: "24/7 Support",
    nl: "24/7 ondersteuning",
  },
  "Schedule your migration": {
    en: "Schedule your migration",
    es: "Programa tu migración",
    de: "Planen Sie Ihre Migration",
    nl: "Plan je migratie",
  },
  "Migration with guarantees": {
    en: "Migration with guarantees",
    es: "Migración con garantías",
    de: "Migration mit Garantien",
    nl: "Migratie met garanties",
  },
  "See migration types": {
    en: "See migration types",
    es: "Ver tipos de migración",
    de: "Migrationstypen ansehen",
    nl: "Migratietypes bekijken",
  },
  "Talk to us": {
    en: "Talk to us",
    es: "Habla con nosotros",
    de: "Sprechen Sie mit uns",
    nl: "Praat met ons",
  },
  "The process is easier than you think": {
    en: "The process is easier than you think",
    es: "El proceso es más fácil de lo que crees",
    de: "Der Prozess ist einfacher als Sie denken",
    nl: "Het proces is makkelijker dan je denkt",
  },
  "How to migrate your website": {
    en: "How to migrate your website",
    es: "Cómo migrar tu web",
    de: "So migrieren Sie Ihre Website",
    nl: "Zo migreer je je website",
  },
  "No stress, no mistakes, and no downtime.": {
    en: "No stress, no mistakes, and no downtime.",
    es: "Sin estrés, sin errores y sin caídas.",
    de: "Kein Stress, keine Fehler und keine Ausfallzeit.",
    nl: "Geen stress, geen fouten en geen downtime.",
  },
  "Step 1": {
    en: "Step 1",
    es: "Paso 1",
    de: "Schritt 1",
    nl: "Stap 1",
  },
  "Step 2": {
    en: "Step 2",
    es: "Paso 2",
    de: "Schritt 2",
    nl: "Stap 2",
  },
  "Step 3": {
    en: "Step 3",
    es: "Paso 3",
    de: "Schritt 3",
    nl: "Stap 3",
  },
  "What you need before starting": {
    en: "What you need before starting",
    es: "Lo que necesitas antes de empezar",
    de: "Was Sie vor dem Start benötigen",
    nl: "Wat je nodig hebt voordat je begint",
  },
  "Choose the type of migration you need": {
    en: "Choose the type of migration you need",
    es: "Elige el tipo de migración que necesitas",
    de: "Wählen Sie die Art der Migration, die Sie benötigen",
    nl: "Kies het type migratie dat je nodig hebt",
  },
  "Get in touch with us": {
    en: "Get in touch with us",
    es: "Ponte en contacto con nosotros",
    de: "Kontaktieren Sie uns",
    nl: "Neem contact met ons op",
  },
  "Access to the control panel of your current hosting (username + password).": {
    en: "Access to the control panel of your current hosting (username + password).",
    es: "Acceso al panel de control de tu hosting actual (usuario + contraseña).",
    de: "Zugriff auf das Control Panel Ihres aktuellen Hostings (Benutzername + Passwort).",
    nl: "Toegang tot het controlepaneel van je huidige hosting (gebruikersnaam + wachtwoord).",
  },
  "Previous hosting plan must be active and running.": {
    en: "Previous hosting plan must be active and running.",
    es: "El plan anterior debe estar activo y funcionando.",
    de: "Der vorherige Hosting-Plan muss aktiv und laufend sein.",
    nl: "Het vorige hostingpakket moet actief en werkend zijn.",
  },
  "Migration must be from a compatible platform (not Wix/Shopify, etc.).": {
    en: "Migration must be from a compatible platform (not Wix/Shopify, etc.).",
    es: "La migración debe ser desde una plataforma compatible (no Wix/Shopify, etc.).",
    de: "Die Migration muss von einer kompatiblen Plattform erfolgen (nicht Wix/Shopify usw.).",
    nl: "De migratie moet van een compatibel platform zijn (niet Wix/Shopify, etc.).",
  },
  "Free migration valid up to 30 days after purchase a SN White Hosting.": {
    en: "Free migration valid up to 30 days after purchase a SN White Hosting.",
    es: "La migración gratuita es válida hasta 30 días después de contratar SN White Hosting.",
    de: "Die kostenlose Migration ist bis zu 30 Tage nach dem Kauf von SN White Hosting gültig.",
    nl: "De gratis migratie is geldig tot 30 dagen na aankoop van SN White Hosting.",
  },
  "Free migration is included with the purchase of hosting, VPS, or dedicated products.": {
    en: "Free migration is included with the purchase of hosting, VPS, or dedicated products.",
    es: "La migración gratuita está incluida con la compra de hosting, VPS o dedicados.",
    de: "Die kostenlose Migration ist bei Hosting-, VPS- oder Dedicated-Produkten enthalten.",
    nl: "Gratis migratie is inbegrepen bij hosting-, VPS- of dedicated-producten.",
  },
  "For standard migration, sales will inform you of current waiting time.": {
    en: "For standard migration, sales will inform you of current waiting time.",
    es: "Para la migración estándar, ventas te informará del tiempo de espera actual.",
    de: "Für die Standard-Migration informiert Sie der Vertrieb über die aktuelle Wartezeit.",
    nl: "Voor standaardmigratie informeert sales je over de huidige wachttijd.",
  },
  "Urgent migrations are handled with maximum priority and delivery in business hours.": {
    en: "Urgent migrations are handled with maximum priority and delivery in business hours.",
    es: "Las migraciones urgentes se gestionan con máxima prioridad y entrega en horario laboral.",
    de: "Dringende Migrationen werden mit höchster Priorität in den Geschäftszeiten durchgeführt.",
    nl: "Spoedmigraties worden met maximale prioriteit binnen kantooruren uitgevoerd.",
  },
  "If you are a client, open a ticket to Sales from the Client Area.": {
    en: "If you are a client, open a ticket to Sales from the Client Area.",
    es: "Si eres cliente, abre un ticket a Ventas desde el Área de Cliente.",
    de: "Wenn Sie Kunde sind, öffnen Sie ein Ticket an den Vertrieb im Kundenbereich.",
    nl: "Als je klant bent, open je een ticket naar Sales via het klantportaal.",
  },
  "If you are not a client, fill out the contact form and select “Migration inquiry”.": {
    en: "If you are not a client, fill out the contact form and select “Migration inquiry”.",
    es: "Si no eres cliente, completa el formulario de contacto y selecciona “Consulta de migración”.",
    de: "Wenn Sie kein Kunde sind, füllen Sie das Kontaktformular aus und wählen Sie „Migrationsanfrage“.",
    nl: "Als je geen klant bent, vul het contactformulier in en selecteer “Migratie-aanvraag”.",
  },
  "Migration types": {
    en: "Migration types",
    es: "Tipos de migración",
    de: "Migrationstypen",
    nl: "Migratietypes",
  },
  "Prices are indicative. Contact sales to evaluate your case and provide a fixed quote.": {
    en: "Prices are indicative. Contact sales to evaluate your case and provide a fixed quote.",
    es: "Los precios son orientativos. Contacta con ventas para evaluar tu caso y ofrecer un presupuesto cerrado.",
    de: "Die Preise sind unverbindlich. Kontaktieren Sie den Vertrieb für ein festes Angebot.",
    nl: "Prijzen zijn indicatief. Neem contact op met sales voor een vaste offerte.",
  },
  "Included": {
    en: "Included",
    es: "Incluido",
    de: "Inklusive",
    nl: "Inbegrepen",
  },
  "Recommended": {
    en: "Recommended",
    es: "Recomendado",
    de: "Empfohlen",
    nl: "Aanbevolen",
  },
  "Priority": {
    en: "Priority",
    es: "Prioridad",
    de: "Priorität",
    nl: "Prioriteit",
  },
  "Custom": {
    en: "Custom",
    es: "Personalizado",
    de: "Individuell",
    nl: "Op maat",
  },
  "Process start: 3–20 business days": {
    en: "Process start: 3–20 business days",
    es: "Inicio del proceso: 3–20 días hábiles",
    de: "Prozessstart: 3–20 Werktage",
    nl: "Start proces: 3–20 werkdagen",
  },
  "Process start: 3–12 business days": {
    en: "Process start: 3–12 business days",
    es: "Inicio del proceso: 3–12 días hábiles",
    de: "Prozessstart: 3–12 Werktage",
    nl: "Start proces: 3–12 werkdagen",
  },
  "Process start: Max. 48h business": {
    en: "Process start: Max. 48h business",
    es: "Inicio del proceso: Máx. 48h hábiles",
    de: "Prozessstart: Max. 48 Std. (Werktage)",
    nl: "Start proces: Max. 48 uur (werkdagen)",
  },
  "Process start: Customized": {
    en: "Process start: Customized",
    es: "Inicio del proceso: Personalizado",
    de: "Prozessstart: Individuell",
    nl: "Start proces: Op maat",
  },
  "Schedule: Mon–Fri": {
    en: "Schedule: Mon–Fri",
    es: "Horario: Lun–Vie",
    de: "Zeitplan: Mo–Fr",
    nl: "Planning: ma–vr",
  },
  "Schedule: Customized": {
    en: "Schedule: Customized",
    es: "Horario: Personalizado",
    de: "Zeitplan: Individuell",
    nl: "Planning: op maat",
  },
  "Websites: Unlimited": {
    en: "Websites: Unlimited",
    es: "Webs: Ilimitadas",
    de: "Websites: Unbegrenzt",
    nl: "Websites: onbeperkt",
  },
  "Email accounts: Unlimited": {
    en: "Email accounts: Unlimited",
    es: "Cuentas de correo: Ilimitadas",
    de: "E-Mail-Konten: Unbegrenzt",
    nl: "E-mailaccounts: onbeperkt",
  },
  "Price per website: $0": {
    en: "Price per website: $0",
    es: "Precio por web: $0",
    de: "Preis pro Website: $0",
    nl: "Prijs per website: $0",
  },
  "Price per email: €0": {
    en: "Price per email: €0",
    es: "Precio por correo: €0",
    de: "Preis pro E-Mail: €0",
    nl: "Prijs per e-mail: €0",
  },
  "Price per website: $5": {
    en: "Price per website: $5",
    es: "Precio por web: $5",
    de: "Preis pro Website: $5",
    nl: "Prijs per website: $5",
  },
  "Price per email: $1.50": {
    en: "Price per email: $1.50",
    es: "Precio por correo: $1.50",
    de: "Preis pro E-Mail: $1.50",
    nl: "Prijs per e-mail: $1.50",
  },
  "Price per website: $10": {
    en: "Price per website: $10",
    es: "Precio por web: $10",
    de: "Preis pro Website: $10",
    nl: "Prijs per website: $10",
  },
  "Price per email: $3": {
    en: "Price per email: $3",
    es: "Precio por correo: $3",
    de: "Preis pro E-Mail: $3",
    nl: "Prijs per e-mail: $3",
  },
  "Price per website: Mon–Fri: $20 / Sat–Sun: $40 / Holidays: $40": {
    en: "Price per website: Mon–Fri: $20 / Sat–Sun: $40 / Holidays: $40",
    es: "Precio por web: Lun–Vie: $20 / Sáb–Dom: $40 / Festivos: $40",
    de: "Preis pro Website: Mo–Fr: $20 / Sa–So: $40 / Feiertage: $40",
    nl: "Prijs per website: ma–vr: $20 / za–zo: $40 / feestdagen: $40",
  },
  "Price per email: Mon–Fri: $6 / Sat–Sun: $12 / Holidays: $12": {
    en: "Price per email: Mon–Fri: $6 / Sat–Sun: $12 / Holidays: $12",
    es: "Precio por correo: Lun–Vie: $6 / Sáb–Dom: $12 / Festivos: $12",
    de: "Preis pro E-Mail: Mo–Fr: $6 / Sa–So: $12 / Feiertage: $12",
    nl: "Prijs per e-mail: ma–vr: $6 / za–zo: $12 / feestdagen: $12",
  },
  "Website migration handled by professionals": {
    en: "Website migration handled by professionals",
    es: "Migración web gestionada por profesionales",
    de: "Website-Migration durch Profis",
    nl: "Website-migratie door professionals",
  },
  "We perform hundreds of migrations every day with guaranteed post-migration functionality.": {
    en: "We perform hundreds of migrations every day with guaranteed post-migration functionality.",
    es: "Realizamos cientos de migraciones cada día con funcionamiento garantizado tras la migración.",
    de: "Wir führen täglich Hunderte Migrationen mit garantierter Funktionalität nach der Migration durch.",
    nl: "We voeren dagelijks honderden migraties uit met gegarandeerde werking na migratie.",
  },
  "No unexpected errors": {
    en: "No unexpected errors",
    es: "Sin errores inesperados",
    de: "Keine unerwarteten Fehler",
    nl: "Geen onverwachte fouten",
  },
  "Your site remains online while we move everything safely.": {
    en: "Your site remains online while we move everything safely.",
    es: "Tu web permanece online mientras movemos todo de forma segura.",
    de: "Ihre Website bleibt online, während wir alles sicher umziehen.",
    nl: "Je site blijft online terwijl we alles veilig verplaatsen.",
  },
  "24/7 year-round support": {
    en: "24/7 year-round support",
    es: "Soporte 24/7 todo el año",
    de: "24/7 Support das ganze Jahr",
    nl: "24/7 ondersteuning het hele jaar",
  },
  "We are always available to help before, during, and after your migration.": {
    en: "We are always available to help before, during, and after your migration.",
    es: "Siempre estamos disponibles para ayudarte antes, durante y después de la migración.",
    de: "Wir sind immer verfügbar, um vor, während und nach der Migration zu helfen.",
    nl: "We zijn altijd beschikbaar om te helpen vóór, tijdens en na je migratie.",
  },
  "Schedule your migration": {
    en: "Schedule your migration",
    es: "Programa tu migración",
    de: "Planen Sie Ihre Migration",
    nl: "Plan je migratie",
  },
  "Choose the time that suits you best with scheduled migrations.": {
    en: "Choose the time that suits you best with scheduled migrations.",
    es: "Elige el momento que mejor te convenga con migraciones programadas.",
    de: "Wählen Sie mit geplanten Migrationen die Zeit, die Ihnen am besten passt.",
    nl: "Kies het tijdstip dat je het beste uitkomt met geplande migraties.",
  },
  "Frequently Asked Questions About Migrations": {
    en: "Frequently Asked Questions About Migrations",
    es: "Preguntas frecuentes sobre migraciones",
    de: "Häufig gestellte Fragen zu Migrationen",
    nl: "Veelgestelde vragen over migraties",
  },
  "What exactly does the web migration service include?": {
    en: "What exactly does the web migration service include?",
    es: "¿Qué incluye exactamente el servicio de migración web?",
    de: "Was genau beinhaltet der Web-Migrationsservice?",
    nl: "Wat omvat de webmigratieservice precies?",
  },
  "We migrate your website and email accounts from your previous provider to our servers. The process is designed to avoid downtime and preserve functionality.": {
    en: "We migrate your website and email accounts from your previous provider to our servers. The process is designed to avoid downtime and preserve functionality.",
    es: "Migramos tu web y tus cuentas de correo desde tu proveedor anterior a nuestros servidores. El proceso evita caídas y mantiene la funcionalidad.",
    de: "Wir migrieren Ihre Website und E-Mail-Konten von Ihrem bisherigen Anbieter auf unsere Server. Der Prozess vermeidet Ausfallzeiten und erhält die Funktionalität.",
    nl: "We migreren je website en e-mailaccounts van je vorige provider naar onze servers. Het proces voorkomt downtime en behoudt functionaliteit.",
  },
  "Will the migration affect my website’s operation?": {
    en: "Will the migration affect my website’s operation?",
    es: "¿La migración afectará el funcionamiento de mi web?",
    de: "Wird die Migration den Betrieb meiner Website beeinträchtigen?",
    nl: "Heeft de migratie invloed op de werking van mijn website?",
  },
  "In 99% of cases there is no downtime during the migration. For e-commerce sites, we may request maintenance mode to prevent order sync issues.": {
    en: "In 99% of cases there is no downtime during the migration. For e-commerce sites, we may request maintenance mode to prevent order sync issues.",
    es: "En el 99% de los casos no hay tiempo de inactividad. En e-commerce, podemos solicitar modo mantenimiento para evitar problemas de sincronización.",
    de: "In 99 % der Fälle gibt es keine Ausfallzeit. Bei E-Commerce-Seiten kann ein Wartungsmodus erforderlich sein.",
    nl: "In 99% van de gevallen is er geen downtime. Voor e-commerce kunnen we onderhoudsmodus vragen om synchronisatieproblemen te voorkomen.",
  },
  "How long does the migration take?": {
    en: "How long does the migration take?",
    es: "¿Cuánto tarda la migración?",
    de: "Wie lange dauert die Migration?",
    nl: "Hoe lang duurt de migratie?",
  },
  "It depends on the number and size of websites and mailboxes, plus our current queue. Ask our sales team for current timing.": {
    en: "It depends on the number and size of websites and mailboxes, plus our current queue. Ask our sales team for current timing.",
    es: "Depende del número y tamaño de webs y buzones, además de la cola actual. Consulta a ventas para tiempos actuales.",
    de: "Es hängt von Anzahl und Größe der Websites/Postfächer sowie unserer Warteschlange ab. Fragen Sie den Vertrieb nach aktuellen Zeiten.",
    nl: "Het hangt af van het aantal en de grootte van websites en mailboxen, plus onze huidige wachtrij. Vraag sales naar de actuele timing.",
  },
  "Do you migrate emails too?": {
    en: "Do you migrate emails too?",
    es: "¿También migráis correos?",
    de: "Migrieren Sie auch E-Mails?",
    nl: "Migreren jullie ook e-mails?",
  },
  "Yes, we can migrate email accounts and their contents if you provide credentials.": {
    en: "Yes, we can migrate email accounts and their contents if you provide credentials.",
    es: "Sí, podemos migrar cuentas de correo y su contenido si proporcionas credenciales.",
    de: "Ja, wir können E-Mail-Konten und Inhalte migrieren, wenn Sie Zugangsdaten bereitstellen.",
    nl: "Ja, we kunnen e-mailaccounts en hun inhoud migreren als je inloggegevens verstrekt.",
  },
  "Do you have doubts? We are here to help you.": {
    en: "Do you have doubts? We are here to help you.",
    es: "¿Tienes dudas? Estamos aquí para ayudarte.",
    de: "Haben Sie Fragen? Wir helfen Ihnen gern.",
    nl: "Heb je vragen? We helpen je graag.",
  },
  "We respond quickly, straightforwardly, and with clear solutions.": {
    en: "We respond quickly, straightforwardly, and with clear solutions.",
    es: "Respondemos rápido, de forma clara y con soluciones directas.",
    de: "Wir antworten schnell, direkt und mit klaren Lösungen.",
    nl: "We reageren snel, direct en met duidelijke oplossingen.",
  },
  "Open a ticket": {
    en: "Open a ticket",
    es: "Abrir un ticket",
    de: "Ticket öffnen",
    nl: "Ticket openen",
  },
  "Go to the form": {
    en: "Go to the form",
    es: "Ir al formulario",
    de: "Zum Formular",
    nl: "Ga naar het formulier",
  },
  "Ideal para empezar tu negocio de reseller y gestionar tus primeros clientes con facilidad": {
    en: "Ideal for starting your reseller business and managing your first clients with ease",
    es: "Ideal para empezar tu negocio de reseller y gestionar tus primeros clientes con facilidad",
    de: "Ideal um Ihr Reseller-Geschäft zu starten und Ihre ersten Kunden einfach zu verwalten",
    nl: "Ideaal om uw reseller-bedrijf te starten en uw eerste klanten gemakkelijk te beheren",
  },
  "Más espacio y capacidad para crecer con tu negocio de reseller y atender más clientes.": {
    en: "More space and capacity to grow with your reseller business and serve more clients.",
    es: "Más espacio y capacidad para crecer con tu negocio de reseller y atender más clientes.",
    de: "Mehr Speicher und Kapazität, um mit Ihrem Reseller-Geschäft zu wachsen und mehr Clients zu bedienen.",
    nl: "Meer ruimte en capaciteit om met uw reseller-bedrijf te groeien en meer clients te bedienen.",
  },
  "Diseñado para resellers ambiciosos que necesitan gestionar gran cantidad de clientes con fiabilidad total": {
    en: "Designed for ambitious resellers who need to manage large numbers of clients with total reliability",
    es: "Diseñado para resellers ambiciosos que necesitan gestionar gran cantidad de clientes con fiabilidad total",
    de: "Für ehrgeizige Reseller konzipiert, die eine große Anzahl von Clients mit vollständiger Zuverlässigkeit verwalten müssen",
    nl: "Ontworpen voor ambitieuze resellers die een groot aantal clients met totale betrouwbaarheid moeten beheren",
  },
  "Capacidad y recursos para agencias o revendedores establecidos con muchas cuentas.": {
    en: "Capacity and resources for established agencies or resellers with many accounts.",
    es: "Capacidad y recursos para agencias o revendedores establecidos con muchas cuentas.",
    de: "Kapazität und Ressourcen für etablierte Agenturen oder Reseller mit vielen Konten.",
    nl: "Capaciteit en bronnen voor gevestigde bureaus of resellers met veel accounts.",
  },
  "6.50 € Mensual + 7.00 € Coste de Instalación": {
    en: "6.50 € Monthly + 7.00 € Installation Fee",
    es: "6.50 € Mensual + 7.00 € Coste de Instalación",
    de: "6,50 € Monatlich + 7,00 € Installationsgebühr",
    nl: "6,50 € Maandelijks + 7,00 € Installatiekosten",
  },
  "9.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "9.00 € Monthly + 7.00 € Installation Fee",
    es: "9.00 € Mensual + 7.00 € Coste de Instalación",
    de: "9,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "9,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "12.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "12.00 € Monthly + 7.00 € Installation Fee",
    es: "12.00 € Mensual + 7.00 € Coste de Instalación",
    de: "12,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "12,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "18.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "18.00 € Monthly + 7.00 € Installation Fee",
    es: "18.00 € Mensual + 7.00 € Coste de Instalación",
    de: "18,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "18,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "22.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "22.00 € Monthly + 7.00 € Installation Fee",
    es: "22.00 € Mensual + 7.00 € Coste de Instalación",
    de: "22,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "22,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "26.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "26.00 € Monthly + 7.00 € Installation Fee",
    es: "26.00 € Mensual + 7.00 € Coste de Instalación",
    de: "26,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "26,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "32.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "32.00 € Monthly + 7.00 € Installation Fee",
    es: "32.00 € Mensual + 7.00 € Coste de Instalación",
    de: "32,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "32,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "40.00 € Mensual + 7.00 € Coste de Instalación": {
    en: "40.00 € Monthly + 7.00 € Installation Fee",
    es: "40.00 € Mensual + 7.00 € Coste de Instalación",
    de: "40,00 € Monatlich + 7,00 € Installationsgebühr",
    nl: "40,00 € Maandelijks + 7,00 € Installatiekosten",
  },
  "$172.00 Mensual + $92.00 Coste de Instalación — Localización: Alemania": {
    en: "$172.00 Monthly + $92.00 Installation Fee — Location: Germany",
    es: "$172.00 Mensual + $92.00 Coste de Instalación — Localización: Alemania",
    de: "$172,00 Monatlich + $92,00 Installationsgebühr — Standort: Deutschland",
    nl: "$172,00 Maandelijks + $92,00 Installatiekosten — Locatie: Duitsland",
  },
  "$155.00 Mensual + $92.00 Coste de Instalación — Localización: Finlandia": {
    en: "$155.00 Monthly + $92.00 Installation Fee — Location: Finland",
    es: "$155.00 Mensual + $92.00 Coste de Instalación — Localización: Finlandia",
    de: "$155,00 Monatlich + $92,00 Installationsgebühr — Standort: Finnland",
    nl: "$155,00 Maandelijks + $92,00 Installatiekosten — Locatie: Finland",
  },
  "$208.00 Mensual + $186.00 Coste de Instalación — Localización: Alemania": {
    en: "$208.00 Monthly + $186.00 Installation Fee — Location: Germany",
    es: "$208.00 Mensual + $186.00 Coste de Instalación — Localización: Alemania",
    de: "$208,00 Monatlich + $186,00 Installationsgebühr — Standort: Deutschland",
    nl: "$208,00 Maandelijks + $186,00 Installatiekosten — Locatie: Duitsland",
  },
  "$190.00 Mensual + $186.00 Coste de Instalación — Localización: Finlandia": {
    en: "$190.00 Monthly + $186.00 Installation Fee — Location: Finland",
    es: "$190.00 Mensual + $186.00 Coste de Instalación — Localización: Finlandia",
    de: "$190,00 Monatlich + $186,00 Installationsgebühr — Standort: Finnland",
    nl: "$190,00 Maandelijks + $186,00 Installatiekosten — Locatie: Finland",
  },
  "$95.00 Mensual — Localización: Alemania": {
    en: "$95.00 Monthly — Location: Germany",
    es: "$95.00 Mensual — Localización: Alemania",
    de: "$95,00 Monatlich — Standort: Deutschland",
    nl: "$95,00 Maandelijks — Locatie: Duitsland",
  },
  "$53.00 Mensual — Localización: Finlandia": {
    en: "$53.00 Monthly — Location: Finland",
    es: "$53.00 Mensual — Localización: Finlandia",
    de: "$53,00 Monatlich — Standort: Finnland",
    nl: "$53,00 Maandelijks — Locatie: Finland",
  },
  "$96.00 Mensual + $92.00 Coste de Instalación — Localización: Alemania": {
    en: "$96.00 Monthly + $92.00 Installation Fee — Location: Germany",
    es: "$96.00 Mensual + $92.00 Coste de Instalación — Localización: Alemania",
    de: "$96,00 Monatlich + $92,00 Installationsgebühr — Standort: Deutschland",
    nl: "$96,00 Maandelijks + $92,00 Installatiekosten — Locatie: Duitsland",
  },
  "$79.00 Mensual — Localización: Finlandia": {
    en: "$79.00 Monthly — Location: Finland",
    es: "$79.00 Mensual — Localización: Finlandia",
    de: "$79,00 Monatlich — Standort: Finnland",
    nl: "$79,00 Maandelijks — Locatie: Finland",
  },
  "Para grupos grandes": {
    en: "For large groups",
    es: "Para grupos grandes",
    de: "Für große Gruppen",
    nl: "Voor grote groepen",
  },
  "FiveM - Plan Mini Performance - US": {
    en: "FiveM - Mini Performance Plan - US",
    es: "FiveM - Plan Mini Performance - US",
    de: "FiveM - Mini-Leistungsplan - US",
    nl: "FiveM - Mini Prestatie Plan - US",
  },
  "FiveM - Plan Regular - US": {
    en: "FiveM - Regular Plan - US",
    es: "FiveM - Plan Regular - US",
    de: "FiveM - Standardplan - US",
    nl: "FiveM - Standaard Plan - US",
  },
  "FiveM - Plan Performance - US": {
    en: "FiveM - Performance Plan - US",
    es: "FiveM - Plan Performance - US",
    de: "FiveM - Leistungsplan - US",
    nl: "FiveM - Prestatie Plan - US",
  },
  "6GB DDR5": {
    en: "6GB DDR5",
    es: "6GB DDR5",
    de: "6GB DDR5",
    nl: "6GB DDR5",
  },
  "AMD EPYC™ 9645": {
    en: "AMD EPYC™ 9645",
    es: "AMD EPYC™ 9645",
    de: "AMD EPYC™ 9645",
    nl: "AMD EPYC™ 9645",
  },
  "4 Core": {
    en: "4 Core",
    es: "4 Núcleos",
    de: "4 Kern",
    nl: "4 Core",
  },
  "8GB DDR5": {
    en: "8GB DDR5",
    es: "8GB DDR5",
    de: "8GB DDR5",
    nl: "8GB DDR5",
  },
  "8 Core": {
    en: "8 Core",
    es: "8 Núcleos",
    de: "8 Kern",
    nl: "8 Core",
  },
  "16GB DDR5": {
    en: "16GB DDR5",
    es: "16GB DDR5",
    de: "16GB DDR5",
    nl: "16GB DDR5",
  },
  "80GB almacenamiento NVME": {
    en: "80GB NVMe Storage",
    es: "80GB almacenamiento NVME",
    de: "80GB NVMe Speicher",
    nl: "80GB NVMe opslag",
  },
  "128GB almacenamiento NVME": {
    en: "128GB NVMe Storage",
    es: "128GB almacenamiento NVME",
    de: "128GB NVMe Speicher",
    nl: "128GB NVMe opslag",
  },
  "256GB almacenamiento NVME": {
    en: "256GB NVMe Storage",
    es: "256GB almacenamiento NVME",
    de: "256GB NVMe Speicher",
    nl: "256GB NVMe opslag",
  },
  "1 Base de datos": {
    en: "1 Database",
    es: "1 Base de datos",
    de: "1 Datenbank",
    nl: "1 Database",
  },
  "2 Bases de datos": {
    en: "2 Databases",
    es: "2 Bases de datos",
    de: "2 Datenbanken",
    nl: "2 Databases",
  },
  "1 Backups": {
    en: "1 Backup",
    es: "1 Backups",
    de: "1 Backup",
    nl: "1 Back-up",
  },
  "2 Backups": {
    en: "2 Backups",
    es: "2 Backups",
    de: "2 Backups",
    nl: "2 Back-ups",
  },
  "VPS R9 - Small": {
    en: "VPS R9 - Small",
    es: "VPS R9 - Small",
    de: "VPS R9 - Klein",
    nl: "VPS R9 - Klein",
  },
  "VPS R9 - Small plus": {
    en: "VPS R9 - Small Plus",
    es: "VPS R9 - Small plus",
    de: "VPS R9 - Klein Plus",
    nl: "VPS R9 - Klein Plus",
  },
  "VPS R9 - Medium": {
    en: "VPS R9 - Medium",
    es: "VPS R9 - Medium",
    de: "VPS R9 - Mittel",
    nl: "VPS R9 - Gemiddeld",
  },
  "Medium plus": {
    en: "Medium Plus",
    es: "Medium plus",
    de: "Mittel Plus",
    nl: "Gemiddeld Plus",
  },
  "full": {
    en: "Full",
    es: "full",
    de: "Vollständig",
    nl: "Volledig",
  },
  "pro": {
    en: "Pro",
    es: "pro",
    de: "Pro",
    nl: "Pro",
  },
  "2GB RAM DDR5": {
    en: "2GB RAM DDR5",
    es: "2GB RAM DDR5",
    de: "2GB RAM DDR5",
    nl: "2GB RAM DDR5",
  },
  "1 núcleo virtual": {
    en: "1 Virtual Core",
    es: "1 núcleo virtual",
    de: "1 Virtueller Kern",
    nl: "1 Virtuele core",
  },
  "AMD RYZEN 9 7950X3D": {
    en: "AMD RYZEN 9 7950X3D",
    es: "AMD RYZEN 9 7950X3D",
    de: "AMD RYZEN 9 7950X3D",
    nl: "AMD RYZEN 9 7950X3D",
  },
  "Frecuencia: 4.2 GHz hasta 5.7GHz": {
    en: "Frequency: 4.2 GHz to 5.7GHz",
    es: "Frecuencia: 4.2 GHz hasta 5.7GHz",
    de: "Frequenz: 4,2 GHz bis 5,7 GHz",
    nl: "Frequentie: 4,2 GHz tot 5,7 GHz",
  },
  "20GB almacenamiento NVMe": {
    en: "20GB NVMe Storage",
    es: "20GB almacenamiento NVMe",
    de: "20GB NVMe Speicher",
    nl: "20GB NVMe opslag",
  },
  "4 GB de RAM DDR5": {
    en: "4 GB DDR5 RAM",
    es: "4 GB de RAM DDR5",
    de: "4 GB DDR5 RAM",
    nl: "4 GB DDR5 RAM",
  },
  "2 núcleos virtuales": {
    en: "2 Virtual Cores",
    es: "2 núcleos virtuales",
    de: "2 Virtuelle Kerne",
    nl: "2 Virtuele cores",
  },
  "AMD Ryzen 9 7950X3D": {
    en: "AMD Ryzen 9 7950X3D",
    es: "AMD Ryzen 9 7950X3D",
    de: "AMD Ryzen 9 7950X3D",
    nl: "AMD Ryzen 9 7950X3D",
  },
  "Frecuencia: 4,2 GHz hasta 5,7 GHz": {
    en: "Frequency: 4.2 GHz to 5.7 GHz",
    es: "Frecuencia: 4,2 GHz hasta 5,7 GHz",
    de: "Frequenz: 4,2 GHz bis 5,7 GHz",
    nl: "Frequentie: 4,2 GHz tot 5,7 GHz",
  },
  "64 GB de almacenamiento NVMe": {
    en: "64 GB NVMe Storage",
    es: "64 GB de almacenamiento NVMe",
    de: "64 GB NVMe Speicher",
    nl: "64 GB NVMe opslag",
  },
  "6 GB de RAM DDR5": {
    en: "6 GB DDR5 RAM",
    es: "6 GB de RAM DDR5",
    de: "6 GB DDR5 RAM",
    nl: "6 GB DDR5 RAM",
  },
  "128 GB de almacenamiento NVMe": {
    en: "128 GB NVMe Storage",
    es: "128 GB de almacenamiento NVMe",
    de: "128 GB NVMe Speicher",
    nl: "128 GB NVMe opslag",
  },
  "8 GB DDR5 RAM": {
    en: "8 GB DDR5 RAM",
    es: "8 GB DDR5 RAM",
    de: "8 GB DDR5 RAM",
    nl: "8 GB DDR5 RAM",
  },
  "4 núcleos virtuales": {
    en: "4 Virtual Cores",
    es: "4 núcleos virtuales",
    de: "4 Virtuelle Kerne",
    nl: "4 Virtuele cores",
  },
  "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)": {
    en: "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)",
    es: "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)",
    de: "AMD Ryzen 9 7950X3D (4,2–5,7 GHz)",
    nl: "AMD Ryzen 9 7950X3D (4,2–5,7 GHz)",
  },
  "180 GB NVMe": {
    en: "180 GB NVMe",
    es: "180 GB NVMe",
    de: "180 GB NVMe",
    nl: "180 GB NVMe",
  },
  "12 GB DDR5 RAM": {
    en: "12 GB DDR5 RAM",
    es: "12 GB DDR5 RAM",
    de: "12 GB DDR5 RAM",
    nl: "12 GB DDR5 RAM",
  },
  "256 GB NVMe": {
    en: "256 GB NVMe",
    es: "256 GB NVMe",
    de: "256 GB NVMe",
    nl: "256 GB NVMe",
  },
  "Ideal para empezar tu proyecto": {
    en: "Perfect for starting your project",
    es: "Ideal para empezar tu proyecto",
    de: "Perfekt um Ihr Projekt zu starten",
    nl: "Ideaal om uw project te starten",
  },
  "El equilibrio perfecto": {
    en: "The perfect balance",
    es: "El equilibrio perfecto",
    de: "Das perfekte Gleichgewicht",
    nl: "De perfecte balans",
  },
  "Ideal para empezar con tu proyecto sin renunciar a la calidad": {
    en: "Perfect to start with your project without compromising quality",
    es: "Ideal para empezar con tu proyecto sin renunciar a la calidad",
    de: "Perfekt um mit Ihrem Projekt zu beginnen ohne Qualität zu kompromittieren",
    nl: "Ideaal om met uw project te beginnen zonder kwaliteit in te leveren",
  },
  "Mas potencia para proyectos dinamicos": {
    en: "More power for dynamic projects",
    es: "Mas potencia para proyectos dinamicos",
    de: "Mehr Leistung für dynamische Projekte",
    nl: "Meer kracht voor dynamische projecten",
  },
  "Maxima potencia y estabilidad": {
    en: "Maximum power and stability",
    es: "Maxima potencia y estabilidad",
    de: "Maximale Leistung und Stabilität",
    nl: "Maximale kracht en stabiliteit",
  },
  "Ejecuta cualquier version de Minecraft, desde la clasica hasta el ultimo snapshot, Java o Bedrock.": {
    en: "Run any version of Minecraft, from classic to the latest snapshot, Java or Bedrock.",
    es: "Ejecuta cualquier version de Minecraft, desde la clasica hasta el ultimo snapshot, Java o Bedrock.",
    de: "Führen Sie jede Version von Minecraft aus, von Classic bis zum neuesten Snapshot, Java oder Bedrock.",
    nl: "Voer elke versie van Minecraft uit, van Classic tot de laatste snapshot, Java of Bedrock.",
  },
  "Instalacion con un clic de Forge, Fabric, Spigot, Paper y mas de 1000 modpacks.": {
    en: "One-click installation of Forge, Fabric, Spigot, Paper and over 1000 modpacks.",
    es: "Instalacion con un clic de Forge, Fabric, Spigot, Paper y mas de 1000 modpacks.",
    de: "One-Click-Installation von Forge, Fabric, Spigot, Paper und über 1000 Modpacks.",
    nl: "One-click installatie van Forge, Fabric, Spigot, Paper en meer dan 1000 modpacks.",
  },
  "Sin limites artificiales de jugadores. Aloja tantos jugadores como tu RAM permita.": {
    en: "No artificial player limits. Host as many players as your RAM allows.",
    es: "Sin limites artificiales de jugadores. Aloja tantos jugadores como tu RAM permita.",
    de: "Keine künstlichen Spielerlimits. Hosten Sie so viele Spieler wie Ihr RAM erlaubt.",
    nl: "Geen kunstmatige spelerlimiten. Zet zoveel spelers in als uw RAM toestaat.",
  },
  "Mitigacion DDoS de nivel empresarial mantiene tu servidor online durante ataques.": {
    en: "Enterprise-level DDoS mitigation keeps your server online during attacks.",
    es: "Mitigacion DDoS de nivel empresarial mantiene tu servidor online durante ataques.",
    de: "DDoS-Mitigation auf Unternehmensebene hält Ihren Server während Angriffen online.",
    nl: "DDoS-mitigatie op ondernemingsniveau houdt uw server online tijdens aanvallen.",
  },
  "Tu servidor esta listo para jugar en 60 segundos despues del pedido.": {
    en: "Your server is ready to play in 60 seconds after ordering.",
    es: "Tu servidor esta listo para jugar en 60 segundos despues del pedido.",
    de: "Ihr Server ist 60 Sekunden nach der Bestellung spielbereit.",
    nl: "Uw server is 60 seconden na bestelling klaar om te spelen.",
  },
  "Expertos en Minecraft disponibles las 24 horas para ayudarte con cualquier problema.": {
    en: "Minecraft experts available 24 hours to help you with any issue.",
    es: "Expertos en Minecraft disponibles las 24 horas para ayudarte con cualquier problema.",
    de: "Minecraft-Experten sind rund um die Uhr verfügbar, um Ihnen bei Problemen zu helfen.",
    nl: "Minecraft-experts zijn 24 uur beschikbaar om u te helpen met elk probleem.",
  },
  "Start small, scale big": {
    en: "Start small, scale big",
    es: "Comienza pequeño, crece grande",
    de: "Klein anfangen, groß skalieren",
    nl: "Klein beginnen, groot schalen",
  },
  "Most popular": {
    en: "Most popular",
    es: "Más popular",
    de: "Am beliebtesten",
    nl: "Meest populair",
  },
  "For production workloads": {
    en: "For production workloads",
    es: "Para cargas de producción",
    de: "Für Produktions-Workloads",
    nl: "Voor productiewerklast",
  },
  "High-performance": {
    en: "High-performance",
    es: "Alto rendimiento",
    de: "Hochleistung",
    nl: "Hoge prestaties",
  },
  "Single server task": {
    en: "Single server task",
    es: "Tarea de un solo servidor",
    de: "Einzelne Server-Aufgabe",
    nl: "Taak voor één server",
  },
  "Essential server management": {
    en: "Essential server management",
    es: "Gestión esencial del servidor",
    de: "Wesentliche Serververwaltung",
    nl: "Essentieel serverbeheer",
  },
  "Complete management": {
    en: "Complete management",
    es: "Gestión completa",
    de: "Vollständige Verwaltung",
    nl: "Volledig beheer",
  },
  "For large infrastructures": {
    en: "For large infrastructures",
    es: "Para grandes infraestructuras",
    de: "Für große Infrastrukturen",
    nl: "Voor grote infrastructuren",
  },
  "Basic encryption": {
    en: "Basic encryption",
    es: "Encriptación básica",
    de: "Grundlegende Verschlüsselung",
    nl: "Basisversleuteling",
  },
  "Business verified": {
    en: "Business verified",
    es: "Negocio verificado",
    de: "Geschäft verifiziert",
    nl: "Bedrijf geverifieerd",
  },
  "Maximum trust": {
    en: "Maximum trust",
    es: "Máxima confianza",
    de: "Maximales Vertrauen",
    nl: "Maximaal vertrouwen",
  },
  "Unlimited subdomains": {
    en: "Unlimited subdomains",
    es: "Subdominios ilimitados",
    de: "Unbegrenzte Subdomains",
    nl: "Onbeperkte subdomeinen",
  },
  "Hosting control panel": {
    en: "Hosting control panel",
    es: "Panel de control de alojamiento",
    de: "Hosting-Kontrollpaneel",
    nl: "Hosting-bedieningspaneel",
  },
  "Web hosting platform": {
    en: "Web hosting platform",
    es: "Plataforma de alojamiento web",
    de: "Web-Hosting-Plattform",
    nl: "Web-hostingplatform",
  },
  "Billing automation": {
    en: "Billing automation",
    es: "Automatización de facturación",
    de: "Automatisierung der Abrechnung",
    nl: "Factureringsautomatisering",
  },
  "Server OS": {
    en: "Server OS",
    es: "SO del servidor",
    de: "Server-BS",
    nl: "Server-OS",
  },
  "For individuals": {
    en: "For individuals",
    es: "Para individuos",
    de: "Für Privatpersonen",
    nl: "Voor particulieren",
  },
  "For teams": {
    en: "For teams",
    es: "Para equipos",
    de: "Für Teams",
    nl: "Voor teams",
  },
  "For organizations": {
    en: "For organizations",
    es: "Para organizaciones",
    de: "Für Organisationen",
    nl: "Voor organisaties",
  },
  // Feature titles and descriptions  
  "FiveM Optimized": {
    en: "FiveM Optimized",
    es: "FiveM Optimizado",
    de: "FiveM Optimiert",
    nl: "FiveM Geoptimaliseerd",
  },
  "Servers specifically configured and optimized for FiveM roleplay servers.": {
    en: "Servers specifically configured and optimized for FiveM roleplay servers.",
    es: "Servidores específicamente configurados y optimizados para servidores de rol FiveM.",
    de: "Server, die speziell für FiveM-Rollenspiel-Server konfiguriert und optimiert sind.",
    nl: "Servers speciaal geconfigureerd en geoptimaliseerd voor FiveM roleplaying servers.",
  },
  "txAdmin Included": {
    en: "txAdmin Included",
    es: "txAdmin Incluido",
    de: "txAdmin Enthalten",
    nl: "txAdmin Inbegrepen",
  },
  "Full txAdmin control panel for easy server management and player administration.": {
    en: "Full txAdmin control panel for easy server management and player administration.",
    es: "Panel de control txAdmin completo para fácil gestión del servidor y administración de jugadores.",
    de: "Vollständiges txAdmin-Kontrollpaneel für einfache Serververwaltung und Spielerverwaltung.",
    nl: "Volledig txAdmin-bedieningspaneel voor eenvoudig serverbeheer en spelierbeheer.",
  },
  "MySQL Databases": {
    en: "MySQL Databases",
    es: "Bases de Datos MySQL",
    de: "MySQL-Datenbanken",
    nl: "MySQL-databases",
  },
  "Included MySQL databases for frameworks like ESX, QBCore, and vRP.": {
    en: "Included MySQL databases for frameworks like ESX, QBCore, and vRP.",
    es: "Bases de datos MySQL incluidas para marcos como ESX, QBCore y vRP.",
    de: "Enthaltene MySQL-Datenbanken für Frameworks wie ESX, QBCore und vRP.",
    nl: "Inbegrepen MySQL-databases voor frameworks zoals ESX, QBCore en vRP.",
  },
  "DDoS Protection": {
    en: "DDoS Protection",
    es: "Protección DDoS",
    de: "DDoS-Schutz",
    nl: "DDoS-bescherming",
  },
  "Advanced DDoS mitigation to keep your roleplay server online 24/7.": {
    en: "Advanced DDoS mitigation to keep your roleplay server online 24/7.",
    es: "Mitigación avanzada de DDoS para mantener tu servidor de rol en línea 24/7.",
    de: "Erweiterte DDoS-Mitigation, um deinen Rollenspiel-Server rund um die Uhr online zu halten.",
    nl: "Geavanceerde DDoS-mitigatie om je roleplaying server 24/7 online te houden.",
  },
  "High Performance": {
    en: "High Performance",
    es: "Alto Rendimiento",
    de: "Hohe Leistung",
    nl: "Hoge Prestaties",
  },
  "Latest AMD Ryzen processors and NVMe storage for smooth gameplay.": {
    en: "Latest AMD Ryzen processors and NVMe storage for smooth gameplay.",
    es: "Los últimos procesadores AMD Ryzen y almacenamiento NVMe para juego suave.",
    de: "Neueste AMD Ryzen-Prozessoren und NVMe-Speicher für sanftes Gameplay.",
    nl: "Nieuwste AMD Ryzen-processors en NVMe-opslag voor soepel spelen.",
  },
  "FiveM Experts": {
    en: "FiveM Experts",
    es: "Expertos en FiveM",
    de: "FiveM-Experten",
    nl: "FiveM-experts",
  },
  "Support team experienced with FiveM, ESX, QBCore, and popular scripts.": {
    en: "Support team experienced with FiveM, ESX, QBCore, and popular scripts.",
    es: "Equipo de soporte experimentado con FiveM, ESX, QBCore y scripts populares.",
    de: "Support-Team mit Erfahrung in FiveM, ESX, QBCore und populären Skripten.",
    nl: "Ondersteuningsteam ervaren met FiveM, ESX, QBCore en populaire scripts.",
  },
  "Bedrock Edition Support": {
    en: "Bedrock Edition Support",
    es: "Soporte de Edición Bedrock",
    de: "Bedrock Edition Unterstützung",
    nl: "Bedrock Edition Ondersteuning",
  },
  "Full support for Minecraft Bedrock Edition on all platforms": {
    en: "Full support for Minecraft Bedrock Edition on all platforms",
    es: "Soporte completo para Minecraft Bedrock Edition en todas las plataformas",
    de: "Vollständige Unterstützung für Minecraft Bedrock Edition auf allen Plattformen",
    nl: "Volledige ondersteuning voor Minecraft Bedrock Edition op alle platforms",
  },
  "Dedicated Resources": {
    en: "Dedicated Resources",
    es: "Recursos Dedicados",
    de: "Dedizierte Ressourcen",
    nl: "Toegewezen Middelen",
  },
  "Guaranteed CPU, RAM and storage for smooth gameplay": {
    en: "Guaranteed CPU, RAM and storage for smooth gameplay",
    es: "CPU, RAM y almacenamiento garantizados para juego suave",
    de: "Garantierte CPU, RAM und Speicher für sanftes Gameplay",
    nl: "Gegarandeerde CPU, RAM en opslag voor soepel spelen",
  },
  "Unlimited Slots": {
    en: "Unlimited Slots",
    es: "Espacios Ilimitados",
    de: "Unbegrenzte Plätze",
    nl: "Onbeperkte sloten",
  },
  "Host as many players as your server can handle": {
    en: "Host as many players as your server can handle",
    es: "Aloja tantos jugadores como tu servidor pueda manejar",
    de: "Host so viele Spieler wie dein Server verkraften kann",
    nl: "Zet zoveel spelers in als je server aankan",
  },
  "Anti-DDoS Protection": {
    en: "Anti-DDoS Protection",
    es: "Protección Anti-DDoS",
    de: "Anti-DDoS-Schutz",
    nl: "Anti-DDoS-bescherming",
  },
  "Built-in protection against DDoS attacks": {
    en: "Built-in protection against DDoS attacks",
    es: "Protección incorporada contra ataques DDoS",
    de: "Integrierter Schutz gegen DDoS-Angriffe",
    nl: "Ingebouwde bescherming tegen DDoS-aanvallen",
  },
  "Instant Setup": {
    en: "Instant Setup",
    es: "Configuración Instantánea",
    de: "Sofortige Einrichtung",
    nl: "Onmiddellijke installatie",
  },
  "Server is ready to play within minutes of ordering": {
    en: "Server is ready to play within minutes of ordering",
    es: "El servidor está listo para jugar en minutos desde el pedido",
    de: "Server ist Minuten nach der Bestellung spielbereit",
    nl: "Server is minuten na bestelling klaar om te spelen",
  },
  "24/7 Support": {
    en: "24/7 Support",
    es: "Soporte 24/7",
    de: "24/7 Unterstützung",
    nl: "24/7 Ondersteuning",
  },
  "Expert support team available around the clock": {
    en: "Expert support team available around the clock",
    es: "Equipo de soporte experto disponible las 24 horas",
    de: "Experten-Support-Team rund um die Uhr verfügbar",
    nl: "Deskundige ondersteuningsteam 24 uur beschikbaar",
  },
  "Mod Support": {
    en: "Mod Support",
    es: "Soporte de Mods",
    de: "Mod-Unterstützung",
    nl: "Mod-ondersteuning",
  },
  "Full support for Terraria mods and plugins": {
    en: "Full support for Terraria mods and plugins",
    es: "Soporte completo para mods y complementos de Terraria",
    de: "Vollständige Unterstützung für Terraria-Mods und Plugins",
    nl: "Volledige ondersteuning voor Terraria mods en plugins",
  },
  "Unlimited Players": {
    en: "Unlimited Players",
    es: "Jugadores Ilimitados",
    de: "Unbegrenzte Spieler",
    nl: "Onbeperkte spelers",
  },
  "Host unlimited players on your server": {
    en: "Host unlimited players on your server",
    es: "Aloja jugadores ilimitados en tu servidor",
    de: "Host unbegrenzte Spieler auf deinem Server",
    nl: "Zet onbeperkte spelers op je server",
  },
  "Advanced protection against attacks": {
    en: "Advanced protection against attacks",
    es: "Protección avanzada contra ataques",
    de: "Fortgeschrittener Schutz vor Angriffen",
    nl: "Geavanceerde bescherming tegen aanvallen",
  },
  "Ready to play in minutes": {
    en: "Ready to play in minutes",
    es: "Listo para jugar en minutos",
    de: "Bereit zum Spielen in Minuten",
    nl: "Klaar om in minuten te spelen",
  },
  "Expert support team always available": {
    en: "Expert support team always available",
    es: "Equipo de soporte experto siempre disponible",
    de: "Experten-Support-Team immer verfügbar",
    nl: "Deskundige ondersteuningsteam altijd beschikbaar",
  },
  "Survival Experience": {
    en: "Survival Experience",
    es: "Experiencia de Supervivencia",
    de: "Überlebenserlebnis",
    nl: "Overlevingservaring",
  },
  "Authentic zombie apocalypse survival gameplay": {
    en: "Authentic zombie apocalypse survival gameplay",
    es: "Jugabilidad auténtica de supervivencia del apocalipsis zombi",
    de: "Authentisches Zombie-Apokalypse-Überlebensspiel",
    nl: "Authentieke zombie apocalyps overlevingsgameplay",
  },
  "Multiplayer Ready": {
    en: "Multiplayer Ready",
    es: "Listo para Multijugador",
    de: "Multiplayer-Bereit",
    nl: "Klaar voor Multiplayer",
  },
  "Host your survival group with unlimited slots": {
    en: "Host your survival group with unlimited slots",
    es: "Aloja tu grupo de supervivencia con espacios ilimitados",
    de: "Host deine Überlebensgruppe mit unbegrenzten Plätzen",
    nl: "Zet je overlevingsgroep in met onbeperkte sloten",
  },
  "Hytale Ready": {
    en: "Hytale Ready",
    es: "Listo para Hytale",
    de: "Hytale-Bereit",
    nl: "Hytale-klaar",
  },
  "Optimized for Hytale gameplay": {
    en: "Optimized for Hytale gameplay",
    es: "Optimizado para el juego de Hytale",
    de: "Optimiert für Hytale-Gameplay",
    nl: "Geoptimaliseerd voor Hytale-gameplay",
  },
  "GTA V RAGEMP": {
    en: "GTA V RAGEMP",
    es: "GTA V RAGEMP",
    de: "GTA V RAGEMP",
    nl: "GTA V RAGEMP",
  },
  "Custom GTA V multiplayer experience": {
    en: "Custom GTA V multiplayer experience",
    es: "Experiencia multijugador GTA V personalizada",
    de: "Benutzerdefinierte GTA V Mehrspieler-Erfahrung",
    nl: "Aangepaste GTA V multiplayer-ervaring",
  },
  "Dedicated Hardware": {
    en: "Dedicated Hardware",
    es: "Hardware Dedicado",
    de: "Dedizierte Hardware",
    nl: "Toegewijde Hardware",
  },
  "Guaranteed CPU and RAM performance": {
    en: "Guaranteed CPU and RAM performance",
    es: "Rendimiento garantizado de CPU y RAM",
    de: "Garantierte CPU- und RAM-Leistung",
    nl: "Gegarandeerde CPU- en RAM-prestaties",
  },
  "Host unlimited players": {
    en: "Host unlimited players",
    es: "Aloja jugadores ilimitados",
    de: "Host unbegrenzte Spieler",
    nl: "Zet onbeperkte spelers in",
  },
  "Advanced attack protection": {
    en: "Advanced attack protection",
    es: "Protección avanzada contra ataques",
    de: "Fortgeschrittener Angriffschutz",
    nl: "Geavanceerde aanvalsbeveiliging",
  },
  "Expert support team": {
    en: "Expert support team",
    es: "Equipo de soporte experto",
    de: "Experten-Support-Team",
    nl: "Deskundige ondersteuningsteam",
  },
  "Multi Theft Auto": {
    en: "Multi Theft Auto",
    es: "Multi Theft Auto",
    de: "Multi Theft Auto",
    nl: "Multi Theft Auto",
  },
  "Custom GTA multiplayer with MTA": {
    en: "Custom GTA multiplayer with MTA",
    es: "GTA multijugador personalizado con MTA",
    de: "Benutzerdefinierte GTA Mehrspieler mit MTA",
    nl: "Aangepaste GTA multiplayer met MTA",
  },
  "ATS Multiplayer": {
    en: "ATS Multiplayer",
    es: "ATS Multijugador",
    de: "ATS Mehrspieler",
    nl: "ATS Multiplayer",
  },
  "American Truck Simulator multiplayer servers": {
    en: "American Truck Simulator multiplayer servers",
    es: "Servidores multijugador de American Truck Simulator",
    de: "American Truck Simulator Mehrspieler-Server",
    nl: "American Truck Simulator multiplayer servers",
  },
  "Host unlimited truck drivers": {
    en: "Host unlimited truck drivers",
    es: "Aloja conductores de camiones ilimitados",
    de: "Host unbegrenzte Lkw-Fahrer",
    nl: "Zet onbeperkte vrachtwagenchauffeurs in",
  },
  "Racing Simulation": {
    en: "Racing Simulation",
    es: "Simulación de Carreras",
    de: "Rennensimulation",
    nl: "Racesimulatie",
  },
  "Professional racing physics and car models": {
    en: "Professional racing physics and car models",
    es: "Física de carreras profesional y modelos de autos",
    de: "Professionelle Rennphysik und Automodelle",
    nl: "Professionele racefysica en auto-modellen",
  },
  "Multiplayer Races": {
    en: "Multiplayer Races",
    es: "Carreras Multijugador",
    de: "Mehrspieler-Rennen",
    nl: "Multiplayer-races",
  },
  "Host competitive online races": {
    en: "Host competitive online races",
    es: "Aloja carreras competitivas en línea",
    de: "Host wettbewerbsfähige Online-Rennen",
    nl: "Zet competitieve online races in",
  },
  "Fair play protection": {
    en: "Fair play protection",
    es: "Protección de juego limpio",
    de: "Schutz vor unfairem Spiel",
    nl: "Fair-play-bescherming",
  },
  "Custom Content": {
    en: "Custom Content",
    es: "Contenido Personalizado",
    de: "Benutzerdefinierter Inhalt",
    nl: "Aangepaste inhoud",
  },
  "Full mod and track support": {
    en: "Full mod and track support",
    es: "Soporte completo de mods y pistas",
    de: "Volle Mod- und Track-Unterstützung",
    nl: "Volledige mod- en baanondersteuning",
  },
  "Racing community support": {
    en: "Racing community support",
    es: "Soporte de la comunidad de carreras",
    de: "Unterstützung der Rennfahrer-Gemeinschaft",
    nl: "Ondersteuning van de racegemeenschap",
  },
  "Rust Optimized": {
    en: "Rust Optimized",
    es: "Rust Optimizado",
    de: "Rust Optimiert",
    nl: "Rust Geoptimaliseerd",
  },
  "High-frequency CPUs and optimized configurations for smooth Rust gameplay.": {
    en: "High-frequency CPUs and optimized configurations for smooth Rust gameplay.",
    es: "CPUs de alta frecuencia y configuraciones optimizadas para Rust suave.",
    de: "Hochfrequenz-CPUs und optimierte Konfigurationen für sanftes Rust-Gameplay.",
    nl: "Hochfrequency-CPU's en geoptimaliseerde configuraties voor soepel Rust-spelen.",
  },
  "Custom Maps": {
    en: "Custom Maps",
    es: "Mapas Personalizados",
    de: "Benutzerdefinierte Karten",
    nl: "Aangepaste kaarten",
  },
  "Upload and run custom maps, or use our selection of popular community maps.": {
    en: "Upload and run custom maps, or use our selection of popular community maps.",
    es: "Carga y ejecuta mapas personalizados, o usa nuestra selección de mapas comunitarios populares.",
    de: "Lade und führe benutzerdefinierte Karten aus, oder verwende unsere Auswahl beliebter Community-Karten.",
    nl: "Upload en voer aangepaste kaarten uit, of gebruik onze selectie populaire community-kaarten.",
  },
  "Enterprise-grade protection keeps your server online during attacks.": {
    en: "Enterprise-grade protection keeps your server online during attacks.",
    es: "La protección de nivel empresarial mantiene tu servidor en línea durante ataques.",
    de: "Der Enterprise-Schutz hält deinen Server während Angriffen online.",
    nl: "Enterprise-bescherming houdt je server online tijdens aanvallen.",
  },
  "Powerful hardware ensures no lag even with high player counts.": {
    en: "Powerful hardware ensures no lag even with high player counts.",
    es: "El hardware potente asegura sin retraso incluso con muchos jugadores.",
    de: "Leistungsstarke Hardware sorgt für keine Verzögerung auch mit hohen Spielerzahlen.",
    nl: "Krachtige hardware zorgt voor geen vertraging zelfs met veel spelers.",
  },
  "Support team familiar with Rust server administration and plugins.": {
    en: "Support team familiar with Rust server administration and plugins.",
    es: "Equipo de soporte familiarizado con la administración del servidor Rust y complementos.",
    de: "Support-Team vertraut mit Rust Server Administration und Plugins.",
    nl: "Ondersteuningsteam bekend met Rust-serverbeheer en plugins.",
  },
  "Todas las Versiones": {
    en: "All Versions",
    es: "Todas las Versiones",
    de: "Alle Versionen",
    nl: "Alle versies",
  },
  "Soporte de Modpacks": {
    en: "Modpack Support",
    es: "Soporte de Modpacks",
    de: "Modpack-Unterstützung",
    nl: "Modpack-ondersteuning",
  },
  "Slots Ilimitados": {
    en: "Unlimited Slots",
    es: "Slots Ilimitados",
    de: "Unbegrenzte Slots",
    nl: "Onbeperkte slots",
  },
  "Proteccion DDoS": {
    en: "DDoS Protection",
    es: "Proteccion DDoS",
    de: "DDoS-Schutz",
    nl: "DDoS-bescherming",
  },
  "Setup Instantaneo": {
    en: "Instant Setup",
    es: "Setup Instantaneo",
    de: "Sofortige Einrichtung",
    nl: "Onmiddellijke installatie",
  },
  "Find Your Perfect Domain": {
    en: "Find Your Perfect Domain",
    es: "Encuentra Tu Dominio Perfecto",
    de: "Finden Sie Ihre perfekte Domain",
    nl: "Vind uw perfecte domein",
  },
  "Search from hundreds of domain extensions. Free DNS management included with every domain.": {
    en: "Search from hundreds of domain extensions. Free DNS management included with every domain.",
    es: "Busca entre cientos de extensiones de dominio. Gestión DNS gratuita incluida con cada dominio.",
    de: "Suchen Sie aus Hunderten von Domain-Erweiterungen. Kostenlose DNS-Verwaltung in jeder Domain enthalten.",
    nl: "Zoek uit honderden domeinextensies. Gratis DNS-beheer inbegrepen bij elk domein.",
  },
  "Search for your domain...": {
    en: "Search for your domain...",
    es: "Busca tu dominio...",
    de: "Suchen Sie nach Ihrer Domain...",
    nl: "Zoek uw domein...",
  },
  "Search": {
    en: "Search",
    es: "Buscar",
    de: "Suchen",
    nl: "Zoeken",
  },
  "Popular Domain Extensions": {
    en: "Popular Domain Extensions",
    es: "Extensiones de Dominio Populares",
    de: "Beliebte Domain-Erweiterungen",
    nl: "Populaire domeinextensies",
  },
  "Choose from hundreds of domain extensions at competitive prices": {
    en: "Choose from hundreds of domain extensions at competitive prices",
    es: "Elige entre cientos de extensiones de dominio a precios competitivos",
    de: "Wählen Sie aus Hunderten von Domain-Erweiterungen zu wettbewerbsfähigen Preisen",
    nl: "Kies uit honderden domeinextensies tegen concurrerende prijzen",
  },
  "1 Año": {
    en: "1 Year",
    es: "1 Año",
    de: "1 Jahr",
    nl: "1 Jaar",
  },
  "/year": {
    en: "/year",
    es: "/año",
    de: "/Jahr",
    nl: "/jaar",
  },
  "Register": {
    en: "Register",
    es: "Registrar",
    de: "Registrieren",
    nl: "Registreren",
  },
  "View all domain extensions": {
    en: "View all domain extensions",
    es: "Ver todas las extensiones de dominio",
    de: "Alle Domain-Erweiterungen anzeigen",
    nl: "Alle domeinextensies weergeven",
  },
  "Everything Included": {
    en: "Everything Included",
    es: "Todo Incluido",
    de: "Alles enthalten",
    nl: "Alles inbegrepen",
  },
  "All domains include these features at no extra cost": {
    en: "All domains include these features at no extra cost",
    es: "Todos los dominios incluyen estas características sin costo adicional",
    de: "Alle Domains enthalten diese Funktionen ohne zusätzliche Kosten",
    nl: "Alle domeinen bevatten deze functies zonder extra kosten",
  },
  "Domain Lock": {
    en: "Domain Lock",
    es: "Bloqueo de Dominio",
    de: "Domain-Sperre",
    nl: "Domeinvergrendeling",
  },
  "Prevent unauthorized transfers with domain lock protection included.": {
    en: "Prevent unauthorized transfers with domain lock protection included.",
    es: "Evita transferencias no autorizadas con protección de bloqueo de dominio incluida.",
    de: "Verhindern Sie unbefugte Übertragungen mit enthaltenem Domain-Schutz.",
    nl: "Voorkom ongeautoriseerde overdrachten met domeinvergrendeling inbegrepen.",
  },
  "Easy Transfers": {
    en: "Easy Transfers",
    es: "Transferencias Fáciles",
    de: "Einfache Übertragungen",
    nl: "Eenvoudige overdrachten",
  },
  "Transfer your existing domains to us with no downtime and free transfer assistance.": {
    en: "Transfer your existing domains to us with no downtime and free transfer assistance.",
    es: "Transfiere tus dominios existentes sin tiempo de inactividad y con asistencia de transferencia gratuita.",
    de: "Übertragen Sie Ihre vorhandenen Domains ohne Ausfallzeiten und kostenlose Übertragungshilfe.",
    nl: "Voer uw bestaande domeinen naar ons over zonder downtime en gratis overdrachthulp.",
  },
  "DNS Management": {
    en: "DNS Management",
    es: "Gestión DNS",
    de: "DNS-Verwaltung",
    nl: "DNS-beheer",
  },
  "Full DNS management with support for A, AAAA, CNAME, MX, TXT, and more records.": {
    en: "Full DNS management with support for A, AAAA, CNAME, MX, TXT, and more records.",
    es: "Gestión DNS completa con soporte para registros A, AAAA, CNAME, MX, TXT y más.",
    de: "Vollständige DNS-Verwaltung mit Unterstützung für A-, AAAA-, CNAME-, MX-, TXT- und weitere Datensätze.",
    nl: "Volledig DNS-beheer met ondersteuning voor A-, AAAA-, CNAME-, MX-, TXT- en meer records.",
  },
  "Transfer Your Domain": {
    en: "Transfer Your Domain",
    es: "Transfiere Tu Dominio",
    de: "Übertragen Sie Ihre Domain",
    nl: "Draag uw domein over",
  },
  "Already have a domain? Transfer it to us and get a free year extension plus all our features.": {
    en: "Already have a domain? Transfer it to us and get a free year extension plus all our features.",
    es: "¿Ya tienes un dominio? Transfierelo y obtén una extensión de año gratis más todas nuestras características.",
    de: "Haben Sie bereits eine Domain? Übertragen Sie sie zu uns und erhalten Sie eine kostenlose Jahresverlängerung plus alle unsere Funktionen.",
    nl: "Hebt u al een domein? Draag het naar ons over en krijg een gratis jaarverlenging plus al onze functies.",
  },
  "Free +1 Year Extension": {
    en: "Free +1 Year Extension",
    es: "Extensión Gratuita +1 Año",
    de: "Kostenlose +1 Jahr Verlängerung",
    nl: "Gratis +1 jaar verlenging",
  },
  "No Downtime": {
    en: "No Downtime",
    es: "Sin Tiempo de Inactividad",
    de: "Keine Ausfallzeit",
    nl: "Geen downtime",
  },
  "Free Transfer Assistance": {
    en: "Free Transfer Assistance",
    es: "Asistencia de Transferencia Gratuita",
    de: "Kostenlose Übertragungshilfe",
    nl: "Gratis overdrachthulp",
  },
  "Transfer Domain": {
    en: "Transfer Domain",
    es: "Transferir Dominio",
    de: "Domain übertragen",
    nl: "Domein overdragen",
  },
  "Register": {
    en: "Register",
    es: "Registrar",
    de: "Registrieren",
    nl: "Registreren",
  },
  "Transfer": {
    en: "Transfer",
    es: "Transferir",
    de: "Übertragen",
    nl: "Overdragen",
  },
  "/year": {
    en: "/year",
    es: "/año",
    de: "/Jahr",
    nl: "/jaar",
  },
  "1 Año": {
    en: "1 Year",
    es: "1 Año",
    de: "1 Jahr",
    nl: "1 jaar",
  },
  "1 Year": {
    en: "1 Year",
    es: "1 Año",
    de: "1 Jahr",
    nl: "1 jaar",
  },
  "Search": {
    en: "Search",
    es: "Buscar",
    de: "Suchen",
    nl: "Zoeken",
  },
  "Search for your domain...": {
    en: "Search for your domain...",
    es: "Busca tu dominio...",
    de: "Suchen Sie Ihre Domain...",
    nl: "Zoek naar uw domein...",
  },
  "View all domain extensions": {
    en: "View all domain extensions",
    es: "Ver todas las extensiones de dominio",
    de: "Alle Domain-Erweiterungen anzeigen",
    nl: "Alle domeinextensies weergeven",
  },

  // Email Plans
  "Plan Básico": {
    en: "Basic Plan",
    es: "Plan Básico",
    de: "Basis-Plan",
    nl: "Basis Plan",
  },
  "Plan Profesional": {
    en: "Professional Plan",
    es: "Plan Profesional",
    de: "Professioneller Plan",
    nl: "Professioneel Plan",
  },
  "Plan Empresa": {
    en: "Business Plan",
    es: "Plan Empresa",
    de: "Unternehmensplan",
    nl: "Bedrijfsplan",
  },
  "Ideal para empezar con tu correo profesional y gestionar tus cuentas con facilidad": {
    en: "Ideal to start with your professional email and manage your accounts easily",
    es: "Ideal para empezar con tu correo profesional y gestionar tus cuentas con facilidad",
    de: "Ideal, um mit Ihrer professionellen E-Mail zu beginnen und Ihre Konten einfach zu verwalten",
    nl: "Ideaal om te beginnen met uw professionele e-mail en uw accounts eenvoudig te beheren",
  },
  "Ideal para pequeñas empresas que necesitan gestionar varias cuentas de correo profesional": {
    en: "Ideal for small businesses that need to manage multiple professional email accounts",
    es: "Ideal para pequeñas empresas que necesitan gestionar varias cuentas de correo profesional",
    de: "Ideal für kleine Unternehmen, die mehrere professionelle E-Mail-Konten verwalten müssen",
    nl: "Ideaal voor kleine bedrijven die meerdere professionele e-mailaccounts moeten beheren",
  },
  "Ideal para empresas que necesitan correo profesional completo y con mayor capacidad": {
    en: "Ideal for companies that need complete professional email with greater capacity",
    es: "Ideal para empresas que necesitan correo profesional completo y con mayor capacidad",
    de: "Ideal für Unternehmen, die vollständige professionelle E-Mail mit größerer Kapazität benötigen",
    nl: "Ideaal voor bedrijven die volledige professionele e-mail met grotere capaciteit nodig hebben",
  },
  "1 cuenta de correo profesional": {
    en: "1 professional email account",
    es: "1 cuenta de correo profesional",
    de: "1 professionelles E-Mail-Konto",
    nl: "1 professioneel e-mailaccount",
  },
  "2 GB de almacenamiento": {
    en: "2 GB storage",
    es: "2 GB de almacenamiento",
    de: "2 GB Speicher",
    nl: "2 GB opslag",
  },
  "Webmail accesible desde navegador": {
    en: "Browser-accessible webmail",
    es: "Webmail accesible desde navegador",
    de: "Browser-zugängliches Webmail",
    nl: "Via browser toegankelijke webmail",
  },
  "Configuración en móviles, Outlook y PC": {
    en: "Configuration on mobile, Outlook and PC",
    es: "Configuración en móviles, Outlook y PC",
    de: "Konfiguration auf Mobilgeräten, Outlook und PC",
    nl: "Configuratie op mobiel, Outlook en PC",
  },
  "Filtro antispam básico": {
    en: "Basic antispam filter",
    es: "Filtro antispam básico",
    de: "Basis-Antispam-Filter",
    nl: "Basis antispam filter",
  },
  "Copias de seguridad diarias": {
    en: "Daily backups",
    es: "Copias de seguridad diarias",
    de: "Tägliche Backups",
    nl: "Dagelijkse back-ups",
  },
  "Soporte incluido": {
    en: "Support included",
    es: "Soporte incluido",
    de: "Support enthalten",
    nl: "Ondersteuning inbegrepen",
  },
  "Hasta 5 cuentas de correo": {
    en: "Up to 5 email accounts",
    es: "Hasta 5 cuentas de correo",
    de: "Bis zu 5 E-Mail-Konten",
    nl: "Tot 5 e-mailaccounts",
  },
  "10 GB de almacenamiento por cuenta": {
    en: "10 GB storage per account",
    es: "10 GB de almacenamiento por cuenta",
    de: "10 GB Speicher pro Konto",
    nl: "10 GB opslag per account",
  },
  "Webmail + clientes externos": {
    en: "Webmail + external clients",
    es: "Webmail + clientes externos",
    de: "Webmail + externe Clients",
    nl: "Webmail + externe clients",
  },
  "Antispam avanzado": {
    en: "Advanced antispam",
    es: "Antispam avanzado",
    de: "Erweitertes Antispam",
    nl: "Geavanceerd antispam",
  },
  "Autorespuesta y reenvíos": {
    en: "Auto-reply and forwarding",
    es: "Autorespuesta y reenvíos",
    de: "Automatische Antwort und Weiterleitung",
    nl: "Auto-antwoord en doorsturen",
  },
  "Hasta 10 cuentas de correo": {
    en: "Up to 10 email accounts",
    es: "Hasta 10 cuentas de correo",
    de: "Bis zu 10 E-Mail-Konten",
    nl: "Tot 10 e-mailaccounts",
  },
  "25 GB de almacenamiento por cuenta": {
    en: "25 GB storage per account",
    es: "25 GB de almacenamiento por cuenta",
    de: "25 GB Speicher pro Konto",
    nl: "25 GB opslag per account",
  },
  "Dominio Gratis con pago Anual": {
    en: "Free Domain with Annual payment",
    es: "Dominio Gratis con pago Anual",
    de: "Kostenlose Domain bei jährlicher Zahlung",
    nl: "Gratis domein bij jaarlijkse betaling",
  },
  "Antivirus y antispam premium": {
    en: "Premium antivirus and antispam",
    es: "Antivirus y antispam premium",
    de: "Premium-Antivirus und Antispam",
    nl: "Premium antivirus en antispam",
  },
  "4.9/5 Rating": {
    en: "4.9/5 Rating",
    es: "Calificación 4.9/5",
    de: "4.9/5 Bewertung",
    nl: "4.9/5 Beoordeling",
  },
  "+500 Active Clients": {
    en: "+500 Active Clients",
    es: "+500 Clientes Activos",
    de: "+500 Aktive Kunden",
    nl: "+500 Actieve Klanten",
  },
  "30-day guarantee": {
    en: "30-day guarantee",
    es: "Garantía de 30 días",
    de: "30-Tage-Garantie",
    nl: "30-dagen garantie",
  },
  "Setup in minutes": {
    en: "Setup in minutes",
    es: "Configuración en minutos",
    de: "Einrichtung in Minuten",
    nl: "Installatie in minuten",
  },
  "Monthly": {
    en: "Monthly",
    es: "Mensual",
    de: "Monatlich",
    nl: "Maandelijks",
  },
  "Installation Fee": {
    en: "Installation Fee",
    es: "Coste de Instalación",
    de: "Installationsgebühr",
    nl: "Installatiekosten",
  },
}

const normalizeText = (text: string) => text.trim().replace(/\s+/g, " ").replace(/[.]+$/g, "")

const withTrailingPeriod = (original: string, translated: string) =>
  /\.$/.test(original.trim()) ? `${translated}.` : translated

const translateByMap = (text: string, language: Language) => {
  const normalized = normalizeText(text)
  
  // Try exact normalized match first
  let entry = textMap[normalized]
  
  // If not found, try the original text (in case it has periods)
  if (!entry) {
    entry = textMap[text]
  }
  
  // If still not found, try without trailing period
  if (!entry && text.endsWith(".")) {
    entry = textMap[text.slice(0, -1)]
  }
  
  if (!entry) return text
  return withTrailingPeriod(text, entry[language])
}

const formatCores = (value: string, language: Language) => {
  const n = Number(value)
  if (Number.isNaN(n)) return value
  if (language === "es") return `${n} Núcleo${n === 1 ? "" : "s"}`
  if (language === "de") return `${n} Kern${n === 1 ? "" : "e"}`
  if (language === "nl") return `${n} Kern${n === 1 ? "" : "en"}`
  return `${n} Core${n === 1 ? "" : "s"}`
}

const formatVcpuCores = (value: string, language: Language) => {
  const n = Number(value)
  if (Number.isNaN(n)) return value
  if (language === "es") return `${n} núcleos vCPU`
  if (language === "de") return `${n} vCPU-Kerne`
  if (language === "nl") return `${n} vCPU-kernen`
  return `${n} vCPU Cores`
}

const formatRam = (value: string, language: Language, ddr5 = false) => {
  if (language === "es") return `${value}GB${ddr5 ? " DDR5" : " RAM"}`
  if (language === "de") return `${value} GB${ddr5 ? " DDR5" : " RAM"}`
  if (language === "nl") return `${value} GB${ddr5 ? " DDR5" : " RAM"}`
  return `${value} GB${ddr5 ? " DDR5" : " RAM"}`
}

const formatStorage = (value: string, language: Language, nvme = false) => {
  if (language === "es") return `${value}GB almacenamiento${nvme ? " NVME" : ""}`
  if (language === "de") return `${value} GB ${nvme ? "NVMe" : ""} Speicher`.trim()
  if (language === "nl") return `${value} GB ${nvme ? "NVMe" : ""} opslag`.trim()
  return `${value} GB ${nvme ? "NVMe" : ""} Storage`.trim()
}

export const translateProductText = (text: string, language: Language) => {
  if (!text) return text
  const mapped = translateByMap(text, language)
  if (mapped !== text) return mapped

  const normalized = normalizeText(text)
  const replaced = normalized
    .replace(/Coste de Instalación/gi, language === "en" ? "Installation Fee" : language === "de" ? "Installationsgebühr" : "Installatiekosten")
    .replace(/Mensual/gi, language === "en" ? "Monthly" : language === "de" ? "Monatlich" : "Maandelijks")
    .replace(/Localización/gi, language === "en" ? "Location" : language === "de" ? "Standort" : "Locatie")
    .replace(/Ubicación/gi, language === "en" ? "Location" : language === "de" ? "Standort" : "Locatie")
    .replace(/Alemania/gi, language === "en" ? "Germany" : language === "de" ? "Deutschland" : "Duitsland")
    .replace(/Finlandia/gi, language === "en" ? "Finland" : language === "de" ? "Finnland" : "Finland")
    .replace(/Ancho de Banda/gi, language === "en" ? "Bandwidth" : language === "de" ? "Bandbreite" : "Bandbreedte")
    .replace(/Ilimitado/gi, language === "en" ? "Unlimited" : language === "de" ? "Unbegrenzt" : "Onbeperkt")

  return withTrailingPeriod(text, replaced)
}

export const translatePlanFeature = (text: string, language: Language) => {
  if (!text) return text

  const mapped = translateByMap(text, language)
  if (mapped !== text) return mapped

  const normalized = normalizeText(text)

  const coreMatch = normalized.match(/^(\d+)\s?(Core|Cores|Núcleo|Núcleos)$/i)
  if (coreMatch) {
    return withTrailingPeriod(text, formatCores(coreMatch[1], language))
  }

  const vcpuMatch = normalized.match(/^(\d+)\s?(vCPU|vCore)s?$/i)
  if (vcpuMatch) {
    return withTrailingPeriod(text, formatVcpuCores(vcpuMatch[1], language))
  }

  const ramMatch = normalized.match(/^(\d+(?:[.,]\d+)?)\s?GB\s?(?:RAM|DDR4|DDR5)(?:\s?ECC)?$/i)
  if (ramMatch) {
    const value = ramMatch[1].replace(",", ".")
    const usesDDR5 = /DDR5/i.test(normalized)
    return withTrailingPeriod(text, formatRam(value, language, usesDDR5))
  }

  const storageMatch = normalized.match(/^(\d+(?:[.,]\d+)?)\s?GB\s?(?:almacenamiento|Storage)(?:\s?NVME|\s?NVMe)?$/i)
  if (storageMatch) {
    const value = storageMatch[1].replace(",", ".")
    const usesNvme = /NVME|NVMe/i.test(normalized)
    return withTrailingPeriod(text, formatStorage(value, language, usesNvme))
  }

  return translateProductText(text, language)
}
