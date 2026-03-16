const mysql = require("mysql2/promise")
const { loadEnvLocal } = require("./load-env-local")

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

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS site_content (
      id INT AUTO_INCREMENT PRIMARY KEY,
      path_key VARCHAR(255) NOT NULL UNIQUE,
      content_value JSON NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_path_key (path_key)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  await connection.end()

  process.stdout.write("✅ Migration complete: site_content is ready.\n")
}

run().catch((error) => {
  const message = error?.message || "Unknown error"
  const code = error?.code ? ` (${error.code})` : ""
  process.stderr.write(`❌ Migration failed${code}: ${message}\n`)
  process.exit(1)
})
