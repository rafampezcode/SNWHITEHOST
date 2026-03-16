import type { CmsContent, CmsPageSection, CmsPlan } from "./_types"

export function parseNumber(value: unknown, fallback = 0): number {
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value)
    return Number.isFinite(parsed) ? parsed : fallback
  }
  return fallback
}

export function createEmptyPlan(): CmsPlan {
  return {
    name: "",
    description: "",
    priceEUR: 0,
    priceUSD: 0,
    features: [""],
    href: "https://clients.snwhitehosting.com",
    popular: false,
    badge: "",
  }
}

export function createEmptyContent(): CmsContent {
  return {
    title: "",
    subtitle: "",
    description: "",
    textOverrides: {},
    plans: [createEmptyPlan()],
    features: [{ title: "", description: "" }],
    faqs: [{ question: "", answer: "" }],
    benefits: [""],
    techSpecs: [{ label: "", value: "" }],
    pageSections: [],
  }
}

function normalizePageSections(input: unknown): CmsPageSection[] {
  if (!Array.isArray(input)) {
    return []
  }

  return input
    .map((section, sectionIndex) => {
      const source = typeof section === "object" && section !== null ? (section as Record<string, unknown>) : {}
      const rawTexts = Array.isArray(source.texts) ? source.texts : []
      const newTexts = Array.isArray(source.newTexts)
        ? source.newTexts
            .filter((item): item is string => typeof item === "string")
            .map((item) => item.trim())
            .filter(Boolean)
        : []

      const texts = rawTexts
        .map((textItem, textIndex) => {
          const item =
            typeof textItem === "object" && textItem !== null ? (textItem as Record<string, unknown>) : {}

          const sourceText = typeof item.source === "string" ? item.source.trim() : ""
          const valueText = typeof item.value === "string" ? item.value : sourceText
          const idValue = typeof item.id === "string" && item.id.trim() ? item.id.trim() : `section-${sectionIndex}-text-${textIndex}`

          if (!sourceText) {
            return null
          }

          return {
            id: idValue,
            source: sourceText,
            value: valueText,
          }
        })
        .filter((item): item is CmsPageSection["texts"][number] => Boolean(item))

      if (texts.length === 0) {
        return null
      }

      return {
        id:
          typeof source.id === "string" && source.id.trim()
            ? source.id.trim()
            : `section-${sectionIndex}`,
        title:
          typeof source.title === "string" && source.title.trim()
            ? source.title.trim()
            : `Section ${sectionIndex + 1}`,
        texts,
        newTexts,
      }
    })
    .filter((section): section is CmsPageSection => Boolean(section))
}

export function normalizeContent(input: unknown): CmsContent {
  const source = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {}

  const textOverrides: Record<string, string> = {}
  if (source.textOverrides && typeof source.textOverrides === "object") {
    for (const [key, value] of Object.entries(source.textOverrides as Record<string, unknown>)) {
      const cleanKey = key.trim()
      if (!cleanKey || typeof value !== "string") continue
      textOverrides[cleanKey] = value
    }
  }

  const plans = Array.isArray(source.plans)
    ? source.plans.map((item) => {
        const p = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {}
        const features = Array.isArray(p.features)
          ? p.features.filter((f): f is string => typeof f === "string")
          : []
        return {
          name: typeof p.name === "string" ? p.name : "",
          description: typeof p.description === "string" ? p.description : "",
          priceEUR: parseNumber(p.priceEUR, 0),
          priceUSD: parseNumber(p.priceUSD, 0),
          features: features.length > 0 ? features : [""],
          href: typeof p.href === "string" && p.href ? p.href : "https://clients.snwhitehosting.com",
          popular: Boolean(p.popular),
          badge: typeof p.badge === "string" ? p.badge : "",
        }
      })
    : []

  const features = Array.isArray(source.features)
    ? source.features.map((item) => {
        const f = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {}
        return {
          title: typeof f.title === "string" ? f.title : "",
          description: typeof f.description === "string" ? f.description : "",
        }
      })
    : []

  const faqs = Array.isArray(source.faqs)
    ? source.faqs.map((item) => {
        const f = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {}
        return {
          question: typeof f.question === "string" ? f.question : "",
          answer: typeof f.answer === "string" ? f.answer : "",
        }
      })
    : []

  const benefits = Array.isArray(source.benefits)
    ? source.benefits.filter((item): item is string => typeof item === "string")
    : []

  const techSpecs = Array.isArray(source.techSpecs)
    ? source.techSpecs.map((item) => {
        const t = typeof item === "object" && item !== null ? (item as Record<string, unknown>) : {}
        return {
          label: typeof t.label === "string" ? t.label : "",
          value: typeof t.value === "string" ? t.value : "",
        }
      })
    : []

  const pageSections = normalizePageSections(source.pageSections)

  return {
    title: typeof source.title === "string" ? source.title : "",
    subtitle: typeof source.subtitle === "string" ? source.subtitle : "",
    description: typeof source.description === "string" ? source.description : "",
    textOverrides,
    plans,
    features,
    faqs,
    benefits,
    techSpecs,
    pageSections,
  }
}

export function toPrettyJson(content: CmsContent): string {
  return JSON.stringify(content, null, 2)
}
