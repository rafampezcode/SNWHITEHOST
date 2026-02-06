import { NextResponse } from "next/server"
import { readGlobalSettings } from "@/lib/global-settings"

export async function GET() {
  try {
    const settings = await readGlobalSettings()
    return NextResponse.json({ settings })
  } catch (error) {
    console.error("Failed to read global settings", error)
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 })
  }
}
