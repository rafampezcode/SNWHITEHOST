export type ContentListItem = {
  path: string
  updatedAt: string
}

export type CmsPlan = {
  name: string
  description: string
  priceEUR: number
  priceUSD: number
  features: string[]
  href: string
  popular: boolean
  badge: string
}

export type CmsFeature = {
  title: string
  description: string
}

export type CmsFaq = {
  question: string
  answer: string
}

export type CmsTechSpec = {
  label: string
  value: string
}

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

export type CmsContent = {
  title: string
  subtitle: string
  description: string
  textOverrides: Record<string, string>
  plans: CmsPlan[]
  features: CmsFeature[]
  faqs: CmsFaq[]
  benefits: string[]
  techSpecs: CmsTechSpec[]
  pageSections: CmsPageSection[]
}
