const mysql = require("mysql2/promise")
const { loadEnvLocal } = require("./load-env-local")

const demoPath = "/hosting/shared"

const demoContent = {
  title: "Hosting Compartido - Editable desde Admin",
  subtitle: "Demo CMS conectada a MySQL",
  description: "Esta página está siendo servida con contenido dinámico desde la base de datos.",
  plans: [
    {
      name: "Plan Demo Start",
      description: "Plan de entrada editable",
      priceEUR: 2.99,
      priceUSD: 3.49,
      features: [
        "1 Sitio web",
        "10GB NVMe",
        "SSL gratis",
        "Soporte 24/7",
      ],
      href: "https://clients.snwhitehosting.com",
      popular: false,
    },
    {
      name: "Plan Demo Pro",
      description: "Plan recomendado editable",
      priceEUR: 6.49,
      priceUSD: 7.49,
      features: [
        "5 Sitios web",
        "50GB NVMe",
        "Backups diarios",
        "SSL gratis",
        "Soporte prioritario",
      ],
      href: "https://clients.snwhitehosting.com",
      popular: true,
      badge: "HOT",
    },
    {
      name: "Plan Demo Business",
      description: "Alta capacidad editable",
      priceEUR: 12.99,
      priceUSD: 14.99,
      features: [
        "Sitios ilimitados",
        "200GB NVMe",
        "Backups diarios",
        "WAF incluido",
        "Soporte premium 24/7",
      ],
      href: "https://clients.snwhitehosting.com",
      popular: false,
    },
  ],
  features: [
    {
      title: "Panel moderno",
      description: "Gestiona todo el hosting con una interfaz simple y rápida.",
    },
    {
      title: "Rendimiento NVMe",
      description: "Discos NVMe de alta velocidad para mejores tiempos de carga.",
    },
    {
      title: "Seguridad avanzada",
      description: "Protección activa y certificados SSL incluidos.",
    },
  ],
  faqs: [
    {
      question: "¿Este contenido viene de la base de datos?",
      answer: "Sí, este bloque es una demo almacenada en la tabla site_content.",
    },
    {
      question: "¿Puedo cambiar precios desde admin?",
      answer: "Sí, puedes editar el JSON en /admin/content y guardar en MySQL.",
    },
  ],
  benefits: ["Activación rápida", "Escalable", "Soporte humano"],
  techSpecs: [
    { label: "CPU", value: "AMD EPYC" },
    { label: "Storage", value: "NVMe" },
    { label: "Uptime", value: "99.9%" },
  ],
}

async function run() {
  loadEnvLocal()

  const host = process.env.MYSQL_HOST || "localhost"
  const user = process.env.MYSQL_USER || "root"
  const password = process.env.MYSQL_PASSWORD || ""
  const database = process.env.MYSQL_DATABASE || "snwhitehost_admin"
  const port = Number(process.env.MYSQL_PORT || 3306)

  const connection = await mysql.createConnection({
    host,
    user,
    password,
    database,
    port,
  })

  const contentJson = JSON.stringify(demoContent)

  await connection.execute(
    `INSERT INTO site_content (path_key, content_value)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE content_value = VALUES(content_value)`,
    [demoPath, contentJson],
  )

  await connection.end()

  process.stdout.write(`✅ Demo content seeded for ${demoPath}\n`)
}

run().catch((error) => {
  const message = error?.message || "Unknown error"
  const code = error?.code ? ` (${error.code})` : ""
  process.stderr.write(`❌ Seed failed${code}: ${message}\n`)
  process.exit(1)
})
