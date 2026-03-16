import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { getCurrentPageHtmlSnapshot } from "@/lib/content-page-snapshot"
import { buildTextOverridesFromSections, extractPageSectionsFromHtml } from "@/lib/content-section-extractor"
import { getContentByPath, upsertContentEntry } from "@/lib/content-cms"
import { listEditableContentPaths } from "@/lib/content-route-paths"

export const dynamic = "force-dynamic"
export const maxDuration = 300

type SyncPathError = {
  path: string
  reason: string
}

async function requireAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return Boolean(session?.value)
}

function getBaseOrigin(request: Request) {
  const url = new URL(request.url)
  return `${url.protocol}//${url.host}`
}

export async function POST(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const overwrite = Boolean(body?.overwrite)
    const origin = getBaseOrigin(request)
    const paths = await listEditableContentPaths()

    let synced = 0
    let skipped = 0
    let failed = 0
    let totalTexts = 0
    const errors: SyncPathError[] = []

    for (const path of paths) {
      try {
        const existing = await getContentByPath(path)
        if (existing && !overwrite) {
          skipped += 1
          continue
        }

        const snapshot = await getCurrentPageHtmlSnapshot(path, origin)
        const pageSections = extractPageSectionsFromHtml(snapshot.fullPageHtml)
        const textOverrides = buildTextOverridesFromSections(pageSections)

        await upsertContentEntry(path, {
          title: "",
          subtitle: "",
          description: "",
          plans: [],
          features: [],
          faqs: [],
          benefits: [],
          techSpecs: [],
          pageSections,
          textOverrides,
        })

        totalTexts += pageSections.reduce((sum, section) => sum + section.texts.length, 0)
        synced += 1
      } catch (error) {
        failed += 1
        if (errors.length < 30) {
          const reason = error instanceof Error ? error.message : "Unknown error"
          errors.push({ path, reason })
        }
      }
    }

    return NextResponse.json({
      total: paths.length,
      synced,
      skipped,
      failed,
      totalTexts,
      overwrite,
      errors,
    })
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown error"
    console.error("Failed to sync CMS text content", error)
    return NextResponse.json({ error: `Failed to sync all content: ${reason}` }, { status: 500 })
  }
}
