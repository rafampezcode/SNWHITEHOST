type NormalizePathOptions = {
  allowAdmin?: boolean
  allowApi?: boolean
}

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`
}

function removeQueryAndHash(path: string) {
  return path.split(/[?#]/, 1)[0] || "/"
}

export function normalizeCmsPath(inputPath: string, options: NormalizePathOptions = {}) {
  const trimmed = (inputPath || "").trim()
  if (!trimmed) {
    throw new Error("Path is required")
  }

  const withLeadingSlash = ensureLeadingSlash(trimmed)
  const withoutQuery = removeQueryAndHash(withLeadingSlash)

  // Canonicalize to avoid duplicate keys like /hosting/shared and /hosting/shared/
  const canonical = withoutQuery !== "/" ? withoutQuery.replace(/\/+$/, "") : "/"

  if (!options.allowApi && canonical.startsWith("/api")) {
    throw new Error("Path is not editable from content CMS")
  }

  if (!options.allowAdmin && canonical.startsWith("/admin")) {
    throw new Error("Path is not editable from content CMS")
  }

  if (canonical.length > 255) {
    throw new Error("Path is too long")
  }

  return canonical
}
