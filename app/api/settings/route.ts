import { NextResponse } from "next/server"
import { readGlobalSettings } from "@/lib/global-settings"

export async function GET() {
  try {
    const settings = await readGlobalSettings()
    const response = NextResponse.json({ settings })
    
    // Ensure no caching so clients always get latest settings
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")
    
    return response
  } catch (error) {
    console.error("Failed to read global settings", error)
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 })
  }
}
