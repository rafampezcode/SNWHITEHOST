"server-only"

import { normalizeCmsPath } from "@/lib/content-path"

function normalizePath(inputPath: string) {
  return normalizeCmsPath(inputPath)
}

function extractMainContent(html: string) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  if (mainMatch?.[1]) {
    return mainMatch[1].trim()
  }

  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)
  if (bodyMatch?.[1]) {
    return bodyMatch[1].trim()
  }

  return html.trim()
}

function sanitizeForCms(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+=("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .trim()
}

export async function getCurrentPageHtmlSnapshot(path: string, baseOrigin: string) {
  const normalizedPath = normalizePath(path)
  const pageUrl = `${baseOrigin}${normalizedPath}`

  const response = await fetch(pageUrl, {
    cache: "no-store",
    headers: {
      "x-cms-snapshot": "1",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch page HTML (${response.status})`)
  }

  const html = await response.text()
  const mainHtml = extractMainContent(html)
  const safeHtml = sanitizeForCms(mainHtml)

  if (!safeHtml) {
    throw new Error("Could not extract page content")
  }

  return {
    path: normalizedPath,
    fullPageHtml: safeHtml,
  }
}
