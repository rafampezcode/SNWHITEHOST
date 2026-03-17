import { NextResponse } from "next/server"
import { checkMysqlConnection, isMysqlConfigured } from "@/lib/mysql"

export async function GET() {
  if (!isMysqlConfigured()) {
    return NextResponse.json(
      {
        connected: false,
        configured: false,
        error: "Missing MYSQL_HOST, MYSQL_USER or MYSQL_DATABASE",
      },
      { status: 503 },
    )
  }

  try {
    await checkMysqlConnection()

    return NextResponse.json({
      connected: true,
      configured: true,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT || 3306),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown database error"

    return NextResponse.json(
      {
        connected: false,
        configured: true,
        error: message,
      },
      { status: 503 },
    )
  }
}
