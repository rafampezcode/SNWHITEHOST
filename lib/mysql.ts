import mysql from "mysql2/promise"

function buildMysqlConfig(): mysql.PoolOptions {
  const sslEnabled = process.env.MYSQL_SSL === "true"
  const rejectUnauthorized = process.env.MYSQL_SSL_REJECT_UNAUTHORIZED !== "false"

  return {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: Number(process.env.MYSQL_PORT || 3306),
    connectionLimit: 5,
    ...(sslEnabled ? { ssl: { rejectUnauthorized } } : {}),
  }
}

export function isMysqlConfigured() {
  return Boolean(process.env.MYSQL_HOST && process.env.MYSQL_USER && process.env.MYSQL_DATABASE)
}

function assertMysqlConfig() {
  if (!isMysqlConfigured()) {
    throw new Error("Missing MySQL configuration. Set MYSQL_HOST, MYSQL_USER, and MYSQL_DATABASE.")
  }
}

let pool: mysql.Pool | null = null

export function getMysqlPool() {
  if (!pool) {
    assertMysqlConfig()
    const mysqlConfig = buildMysqlConfig()
    pool = mysql.createPool(mysqlConfig)
  }

  return pool
}

export async function queryMysql<T>(sql: string, params: Array<string | number | boolean | null> = []) {
  const [rows] = await getMysqlPool().execute(sql, params)
  return rows as T
}

export async function checkMysqlConnection() {
  await queryMysql("SELECT 1")
  return true
}
