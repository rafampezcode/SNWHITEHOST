"use client"

import Link from "next/link"
import { Home, Mail, MapPin, type LucideIcon } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"

type ParagraphBlock = {
  type: "paragraph"
  text: string
}

type ListBlock = {
  type: "list"
  items: string[]
  ordered?: boolean
}

type LinkListBlock = {
  type: "linkList"
  items: Array<{
    href: string
    label: string
    description?: string
  }>
}

type TableBlock = {
  type: "table"
  headers: string[]
  rows: string[][]
}

type FormulaBlock = {
  type: "formula"
  text: string
}

export type LegalContentBlock =
  | ParagraphBlock
  | ListBlock
  | LinkListBlock
  | TableBlock
  | FormulaBlock

export type LegalContentSection = {
  title: string
  blocks: LegalContentBlock[]
}

export type LocalizedLegalContent = Record<Language, {
  sections: LegalContentSection[]
  effectiveDate: string
}>

interface LegalDocumentPageProps {
  icon: LucideIcon
  title: string
  subtitle: string
  currentPath: string
  contactEmail?: string
  content: LocalizedLegalContent
}

export function LegalDocumentPage({
  icon: Icon,
  title,
  subtitle,
  currentPath,
  contactEmail = "legal@snwhitehosting.com",
  content,
}: LegalDocumentPageProps) {
  const { t, language } = useLanguage()
  const localizedContent = content[language] ?? content.en

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Icon className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath={currentPath} />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              <style jsx global>{`
                .prose h2 {
                  font-size: 2rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  color: hsl(var(--foreground));
                }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: hsl(var(--primary));
                }
                .prose p {
                  margin-bottom: 1.25rem;
                  line-height: 1.8;
                  color: hsl(var(--foreground));
                }
                .prose ul,
                .prose ol {
                  margin-top: 1rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.75rem;
                  color: hsl(var(--foreground));
                }
                .prose section {
                  margin-bottom: 3rem;
                }
                .prose strong {
                  color: hsl(var(--foreground));
                }
              `}</style>

              {localizedContent.sections.map((section) => (
                <section key={section.title} className="mb-8">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => {
                    if (block.type === "paragraph") {
                      return <p key={`${section.title}-paragraph-${index}`}>{block.text}</p>
                    }

                    if (block.type === "list") {
                      const ListTag = block.ordered ? "ol" : "ul"
                      const listClassName = block.ordered ? "list-decimal pl-6" : undefined

                      return (
                        <ListTag key={`${section.title}-list-${index}`} className={listClassName}>
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ListTag>
                      )
                    }

                    if (block.type === "linkList") {
                      return (
                        <ul key={`${section.title}-links-${index}`}>
                          {block.items.map((item) => (
                            <li key={item.href}>
                              <strong>
                                <Link href={item.href} className="text-primary hover:underline">
                                  {item.label}
                                </Link>
                              </strong>
                              {item.description ? ` - ${item.description}` : ""}
                            </li>
                          ))}
                        </ul>
                      )
                    }

                    if (block.type === "table") {
                      return (
                        <div key={`${section.title}-table-${index}`} className="overflow-x-auto my-4">
                          <table className="min-w-full border-collapse border border-border">
                            <thead className="bg-muted">
                              <tr>
                                {block.headers.map((header) => (
                                  <th key={header} className="border border-border px-4 py-2 text-left">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, rowIndex) => (
                                <tr key={`${section.title}-row-${rowIndex}`}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={`${section.title}-cell-${rowIndex}-${cellIndex}`} className="border border-border px-4 py-2">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    }

                    return (
                      <div key={`${section.title}-formula-${index}`} className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        {block.text}
                      </div>
                    )
                  })}
                </section>
              ))}

              <p className="text-sm text-muted-foreground mt-4">
                <strong>{t.legal.effectiveDateLabel}:</strong> {localizedContent.effectiveDate}
              </p>

              <div className="mt-16 p-8 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{t.legal.contactUs}</h3>
                <div className="space-y-4 text-base">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                      {contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}