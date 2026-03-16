"server-only"

import fs from "node:fs/promises"
import path from "node:path"
import { normalizeCmsPath } from "@/lib/content-path"

const ROOT_DIR = process.cwd()
const APP_DIR = path.join(ROOT_DIR, "app")

function isRouteGroupSegment(segment: string) {
  return segment.startsWith("(") && segment.endsWith(")")
}

function isParallelSegment(segment: string) {
  return segment.startsWith("@")
}

function normalizeSegments(rawSegments: string[]) {
  return rawSegments.filter((segment) => {
    if (!segment || segment === "app") {
      return false
    }

    if (segment === "api") {
      return false
    }

    if (isRouteGroupSegment(segment) || isParallelSegment(segment)) {
      return false
    }

    return true
  })
}

async function walkAppDir(dirPath: string, found: Set<string>) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const hasPage = entries.some((entry) => entry.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(entry.name))

  if (hasPage) {
    const relativeDir = path.relative(APP_DIR, dirPath)
    const discoveredPath = relativeDir
      ? `/${normalizeSegments(relativeDir.split(path.sep)).join("/")}`
      : "/"

    if (!discoveredPath.startsWith("/admin") && discoveredPath !== "/api") {
      found.add(normalizeCmsPath(discoveredPath))
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue
    }

    await walkAppDir(path.join(dirPath, entry.name), found)
  }
}

export async function listEditableContentPaths() {
  const found = new Set<string>()
  await walkAppDir(APP_DIR, found)
  return Array.from(found).sort((a, b) => a.localeCompare(b))
}
