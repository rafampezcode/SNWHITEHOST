import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { getCurrentPageHtmlSnapshot } from "@/lib/content-page-snapshot"

async function requireAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return Boolean(session?.value)
}

function getBaseOrigin(request: Request) {
  const url = new URL(request.url)
  return `${url.protocol}//${url.host}`
}

export async function GET(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const path = url.searchParams.get("path") || ""
    const snapshot = await getCurrentPageHtmlSnapshot(path, getBaseOrigin(request))
    return NextResponse.json(snapshot)
  } catch (error) {
    console.error("Failed to generate page snapshot", error)
    return NextResponse.json({ error: "Failed to snapshot page" }, { status: 500 })
  }
}
