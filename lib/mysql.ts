import mysql from "mysql2/promise"

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT || 3306),
  connectionLimit: 5,
}

function assertMysqlConfig() {
  if (!mysqlConfig.host || !mysqlConfig.user || !mysqlConfig.database) {
    throw new Error("Missing MySQL configuration. Set MYSQL_HOST, MYSQL_USER, and MYSQL_DATABASE.")
  }
}

let pool: mysql.Pool | null = null

export function getMysqlPool() {
  if (!pool) {
    assertMysqlConfig()
    pool = mysql.createPool(mysqlConfig)
  }

  return pool
}

export async function queryMysql<T>(sql: string, params: Array<string | number | boolean | null> = []) {
  const [rows] = await getMysqlPool().execute(sql, params)
  return rows as T
}
