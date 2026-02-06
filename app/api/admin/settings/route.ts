import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { mergeGlobalSettings, readGlobalSettings, writeGlobalSettings } from "@/lib/global-settings"

async function requireAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return Boolean(session?.value)
}

export async function GET() {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const settings = await readGlobalSettings()
    return NextResponse.json({ settings })
  } catch (error) {
    console.error("Failed to read admin settings", error)
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const current = await readGlobalSettings()
    const next = mergeGlobalSettings(current, payload?.settings || {})
    const saved = await writeGlobalSettings(next)
    return NextResponse.json({ settings: saved })
  } catch (error) {
    console.error("Failed to save admin settings", error)
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 })
  }
}
