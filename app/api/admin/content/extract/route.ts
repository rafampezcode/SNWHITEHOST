import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { normalizeCmsPath } from "@/lib/content-path"
import { getCurrentPageHtmlSnapshot } from "@/lib/content-page-snapshot"
import { buildTextOverridesFromSections, extractPageSectionsFromHtml } from "@/lib/content-section-extractor"

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
    const rawPath = url.searchParams.get("path")

    if (!rawPath) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 })
    }

    const path = normalizeCmsPath(rawPath)
    const snapshot = await getCurrentPageHtmlSnapshot(path, getBaseOrigin(request))
    const pageSections = extractPageSectionsFromHtml(snapshot.fullPageHtml)
    const textOverrides = buildTextOverridesFromSections(pageSections)

    return NextResponse.json({
      path,
      pageSections,
      textOverrides,
      fullPageHtml: snapshot.fullPageHtml,
      extractedTexts: pageSections.reduce((total, section) => total + section.texts.length, 0),
    })
  } catch (error) {
    console.error("Failed to extract page text content", error)
    return NextResponse.json({ error: "Failed to extract page text" }, { status: 500 })
  }
}
