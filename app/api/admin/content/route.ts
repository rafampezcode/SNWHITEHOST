import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { deleteContentEntry, getContentByPath, listContentEntries, upsertContentEntry } from "@/lib/content-cms"

async function requireAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return Boolean(session?.value)
}

export async function GET(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const path = url.searchParams.get("path")

    if (path) {
      const content = await getContentByPath(path)
      return NextResponse.json({ path, content })
    }

    const items = await listContentEntries()
    return NextResponse.json({ items })
  } catch (error) {
    console.error("Failed to load admin content", error)
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const path = typeof payload?.path === "string" ? payload.path : ""

    if (!path) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 })
    }

    const rawContent = payload?.content
    const content =
      rawContent && typeof rawContent === "object"
        ? Object.fromEntries(
            Object.entries(rawContent as Record<string, unknown>).filter(([key]) => key !== "fullPageHtml"),
          )
        : {}
    const saved = await upsertContentEntry(path, content)
    return NextResponse.json({ path, content: saved })
  } catch (error) {
    console.error("Failed to save admin content", error)
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const path = url.searchParams.get("path")

    if (!path) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 })
    }

    await deleteContentEntry(path)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete admin content", error)
    return NextResponse.json({ error: "Failed to delete content" }, { status: 500 })
  }
}
