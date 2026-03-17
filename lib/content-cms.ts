"server-only"

import { queryMysql } from "@/lib/mysql"
import { normalizeCmsPath } from "@/lib/content-path"
import type { Language } from "@/lib/translations"

type ContentRow = {
  path_key: string
  content_value: string | Record<string, unknown>
  updated_at: string
}

export type ContentListItem = {
  path: string
  updatedAt: string
}

function normalizePathKey(path: string) {
  return normalizeCmsPath(path)
}

function parseContentValue(contentValue: ContentRow["content_value"]) {
  if (typeof contentValue === "string") {
    try {
      return JSON.parse(contentValue)
    } catch {
      return null
    }
  }

  return contentValue
}

function resolveLocalizedContent(content: unknown, language: Language) {
  if (!content || typeof content !== "object" || language === "en") {
    return content
  }

  const source = content as Record<string, unknown>
  const localizedMap =
    source.localized && typeof source.localized === "object"
      ? (source.localized as Record<string, unknown>)
      : {}

  const localizedEntry =
    localizedMap[language] && typeof localizedMap[language] === "object"
      ? (localizedMap[language] as Record<string, unknown>)
      : null

  if (!localizedEntry) {
    return content
  }

  return {
    ...source,
    textOverrides:
      localizedEntry.textOverrides && typeof localizedEntry.textOverrides === "object"
        ? localizedEntry.textOverrides
        : source.textOverrides,
    pageSections: Array.isArray(localizedEntry.pageSections) ? localizedEntry.pageSections : source.pageSections,
  }
}

export async function getContentByPath(path: string) {
  const pathKey = normalizePathKey(path)

  const rows = await queryMysql<ContentRow[]>(
    `SELECT path_key, content_value, updated_at
     FROM site_content
     WHERE path_key = ?
     LIMIT 1`,
    [pathKey],
  )

  if (!rows.length) {
    return null
  }

  return parseContentValue(rows[0].content_value)
}

export async function getContentByPathAndLanguage(path: string, language: Language) {
  const content = await getContentByPath(path)
  return resolveLocalizedContent(content, language)
}

export async function listContentEntries() {
  const rows = await queryMysql<ContentRow[]>(
    `SELECT path_key, content_value, updated_at
     FROM site_content
     ORDER BY path_key ASC`,
  )

  const items: ContentListItem[] = rows.map((row) => ({
    path: row.path_key,
    updatedAt: new Date(row.updated_at).toISOString(),
  }))

  return items
}

export async function upsertContentEntry(path: string, content: unknown) {
  const pathKey = normalizePathKey(path)
  const jsonContent = JSON.stringify(content ?? {})

  await queryMysql(
    `INSERT INTO site_content (path_key, content_value)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE content_value = ?`,
    [pathKey, jsonContent, jsonContent],
  )

  return getContentByPath(pathKey)
}

export async function deleteContentEntry(path: string) {
  const pathKey = normalizePathKey(path)

  await queryMysql(
    `DELETE FROM site_content
     WHERE path_key = ?`,
    [pathKey],
  )
}
