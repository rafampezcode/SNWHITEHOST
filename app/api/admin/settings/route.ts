import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { mergeGlobalSettings, readGlobalSettings, writeGlobalSettings } from "@/lib/global-settings"
import { execSync } from "child_process"
import { platform } from "os"

async function requireAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return Boolean(session?.value)
}

// Try to auto-commit changes to git
async function tryAutoCommit(theme: string) {
  try {
    // Only attempt on non-Windows platforms or if git is available
    if (platform() !== "win32") {
      const hasGit = execSync("which git", { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] })
      if (hasGit) {
        execSync("git add config.json", { stdio: "ignore" })
        execSync(`git commit -m "chore: update global settings (theme: ${theme})" --quiet`, { stdio: "ignore" })
        execSync("git push --quiet", { stdio: "ignore" })
        console.log(`✓ Auto-committed config changes (theme: ${theme})`)
      }
    }
  } catch {
    // Fail silently - git might not be available in production
    console.log("ℹ️  Git auto-commit unavailable. Run: node scripts/commit-config.js --push")
  }
}

export async function GET() {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const settings = await readGlobalSettings()
    const response = NextResponse.json({ settings })
    
    // Ensure no caching for admin endpoints
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")
    
    return response
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
    
    // Try to auto-commit changes
    const theme = saved.defaultTheme?.festiveTheme || "none"
    await tryAutoCommit(theme)
    
    const response = NextResponse.json({ settings: saved })
    
    // Ensure no caching for admin endpoints
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")
    
    return response
  } catch (error) {
    console.error("Failed to save admin settings", error)
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 })
  }
}
