import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { listEditableContentPaths } from "@/lib/content-route-paths"

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
    const paths = await listEditableContentPaths()
    return NextResponse.json({ paths })
  } catch (error) {
    console.error("Failed to list editable content paths", error)
    return NextResponse.json({ error: "Failed to load paths" }, { status: 500 })
  }
}
