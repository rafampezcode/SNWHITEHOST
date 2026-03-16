import type { MetadataRoute } from "next"
import { promises as fs } from "node:fs"
import path from "node:path"
import { SITE_URL } from "@/lib/seo"

const APP_DIR = path.join(process.cwd(), "app")
const EXCLUDED_ROOT_SEGMENTS = new Set(["api", "admin"])

type RouteEntry = {
  path: string
  filePath: string
}

function toRouteFromDir(relativeDir: string): string {
  if (!relativeDir || relativeDir === ".") {
    return "/"
  }

  const cleanedSegments = relativeDir
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("(") && !segment.endsWith(")"))

  if (cleanedSegments.length === 0) {
    return "/"
  }

  return `/${cleanedSegments.join("/")}`
}

function isIndexableRoute(relativeDir: string): boolean {
  const segments = relativeDir.split(path.sep).filter(Boolean)

  if (segments.length > 0 && EXCLUDED_ROOT_SEGMENTS.has(segments[0])) {
    return false
  }

  // Skip dynamic routes ([slug], [...catchAll], [[...optional]]) in sitemap.
  if (segments.some((segment) => segment.includes("[") || segment.includes("]"))) {
    return false
  }

  return true
}

async function collectPageRoutes(dirPath: string, relativeDir = ""): Promise<RouteEntry[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const routes: RouteEntry[] = []

  for (const entry of entries) {
    const entryAbsolutePath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      const childRelativeDir = relativeDir ? path.join(relativeDir, entry.name) : entry.name
      const childRoutes = await collectPageRoutes(entryAbsolutePath, childRelativeDir)
      routes.push(...childRoutes)
      continue
    }

    if (entry.name !== "page.tsx") {
      continue
    }

    if (!isIndexableRoute(relativeDir)) {
      continue
    }

    routes.push({
      path: toRouteFromDir(relativeDir),
      filePath: entryAbsolutePath,
    })
  }

  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const discoveredRoutes = await collectPageRoutes(APP_DIR)

  const entries = await Promise.all(
    discoveredRoutes.map(async (route) => {
      const stats = await fs.stat(route.filePath)

      return {
        url: `${SITE_URL}${route.path}`,
        lastModified: stats.mtime,
        changeFrequency: route.path === "/" ? "daily" : "weekly",
        priority: route.path === "/" ? 1 : 0.7,
      } as const
    }),
  )

  return entries.sort((a, b) => a.url.localeCompare(b.url))
}
