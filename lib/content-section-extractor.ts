export type CmsSectionText = {
  id: string
  source: string
  value: string
}

export type CmsPageSection = {
  id: string
  title: string
  texts: CmsSectionText[]
  newTexts: string[]
}

type TextCandidate = {
  source: string
  normalized: string
}

function cleanHtmlEntities(input: string) {
  return input
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
}

function normalizeWhitespace(input: string) {
  return cleanHtmlEntities(input).replace(/\s+/g, " ").trim()
}

function stripTags(input: string) {
  return normalizeWhitespace(input.replace(/<[^>]+>/g, " "))
}

function collectUniqueTexts(htmlChunk: string): TextCandidate[] {
  const textCandidates = new Map<string, TextCandidate>()

  const blockPattern = /<(h1|h2|h3|h4|h5|h6|p|li|span|a|button|label|strong|em|small|dt|dd|th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi
  let match: RegExpExecArray | null = blockPattern.exec(htmlChunk)

  while (match) {
    const text = stripTags(match[2] ?? "")
    if (text.length >= 2) {
      const normalized = text.toLowerCase()
      if (!textCandidates.has(normalized)) {
        textCandidates.set(normalized, { source: text, normalized })
      }
    }

    match = blockPattern.exec(htmlChunk)
  }

  return Array.from(textCandidates.values())
}

function getSectionTitle(sectionHtml: string, index: number) {
  const headingMatch = sectionHtml.match(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/i)
  if (headingMatch?.[1]) {
    const headingText = stripTags(headingMatch[1])
    if (headingText) {
      return headingText
    }
  }

  return `Section ${index + 1}`
}

function buildSection(idPrefix: string, index: number, title: string, htmlChunk: string): CmsPageSection {
  const texts = collectUniqueTexts(htmlChunk).map((candidate, textIndex) => ({
    id: `${idPrefix}-t-${index}-${textIndex}`,
    source: candidate.source,
    value: candidate.source,
  }))

  return {
    id: `${idPrefix}-s-${index}`,
    title,
    texts,
    newTexts: [],
  }
}

export function extractPageSectionsFromHtml(mainHtml: string): CmsPageSection[] {
  if (!mainHtml?.trim()) {
    return []
  }

  const normalizedHtml = mainHtml
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")

  const sectionRegex = /<section\b[^>]*>([\s\S]*?)<\/section>/gi
  const sections: CmsPageSection[] = []

  let sectionMatch: RegExpExecArray | null = sectionRegex.exec(normalizedHtml)
  let sectionIndex = 0

  while (sectionMatch) {
    const sectionHtml = sectionMatch[0]
    const title = getSectionTitle(sectionHtml, sectionIndex)
    const section = buildSection("cms", sectionIndex, title, sectionHtml)

    if (section.texts.length > 0) {
      sections.push(section)
    }

    sectionIndex += 1
    sectionMatch = sectionRegex.exec(normalizedHtml)
  }

  if (sections.length > 0) {
    return sections
  }

  const fallback = buildSection("cms", 0, "Main Content", normalizedHtml)
  return fallback.texts.length > 0 ? [fallback] : []
}

export function buildTextOverridesFromSections(sections: CmsPageSection[]): Record<string, string> {
  const overrides: Record<string, string> = {}

  for (const section of sections) {
    for (const textItem of section.texts) {
      const from = normalizeWhitespace(textItem.source)
      const to = normalizeWhitespace(textItem.value)

      if (!from || !to) {
        continue
      }

      if (from !== to) {
        overrides[from] = to
      }
    }
  }

  return overrides
}
