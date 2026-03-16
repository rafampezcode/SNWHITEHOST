"use client"

import { useEffect, useMemo, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type RuntimeSection = {
  id: string
  title: string
  texts?: Array<{ source?: string; value?: string }>
  newTexts?: string[]
}

function shouldSkipNode(parent: ParentNode | null) {
  if (!(parent instanceof HTMLElement)) {
    return false
  }

  const tag = parent.tagName
  return ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"].includes(tag)
}

function applyOverridesToNode(node: Node, overrides: Array<[string, string]>) {
  if (!(node instanceof Text)) {
    return false
  }

  if (shouldSkipNode(node.parentNode)) {
    return false
  }

  let changed = false
  let nextValue = node.nodeValue ?? ""

  for (const [from, to] of overrides) {
    if (nextValue.includes(from)) {
      nextValue = nextValue.split(from).join(to)
      changed = true
    }
  }

  if (changed && nextValue !== node.nodeValue) {
    node.nodeValue = nextValue
  }

  return changed
}

function applyOverridesToDocument(overrides: Array<[string, string]>) {
  if (!overrides.length) {
    return
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let currentNode = walker.nextNode()

  while (currentNode) {
    applyOverridesToNode(currentNode, overrides)
    currentNode = walker.nextNode()
  }
}

function normalizeText(input: string) {
  return input.replace(/\s+/g, " ").trim().toLowerCase()
}

function getHeadingText(sectionElement: HTMLElement) {
  const heading = sectionElement.querySelector("h1, h2, h3, h4, h5, h6")
  if (!heading) {
    return ""
  }

  return normalizeText(heading.textContent ?? "")
}

function findTargetSection(section: RuntimeSection) {
  const sections = Array.from(document.querySelectorAll("main section")) as HTMLElement[]
  if (!sections.length) {
    return null
  }

  const wantedHeading = normalizeText(section.title || "")
  if (wantedHeading) {
    const byHeading = sections.find((element) => getHeadingText(element) === wantedHeading)
    if (byHeading) {
      return byHeading
    }
  }

  const anchorText = normalizeText(section.texts?.[0]?.value || section.texts?.[0]?.source || "")
  if (anchorText) {
    const byAnchor = sections.find((element) => normalizeText(element.textContent ?? "").includes(anchorText))
    if (byAnchor) {
      return byAnchor
    }
  }

  return null
}

function applyNewTextsToDocument(sections: RuntimeSection[]) {
  const withNewTexts = sections.filter((section) =>
    Array.isArray(section.newTexts) && section.newTexts.some((text) => typeof text === "string" && text.trim().length > 0),
  )

  for (const section of withNewTexts) {
    const targetSection = findTargetSection(section)
    if (!targetSection) {
      continue
    }

    const wrapperId = `cms-added-${section.id}`
    let wrapper = targetSection.querySelector(`[data-cms-added-wrapper="${wrapperId}"]`) as HTMLElement | null

    if (!wrapper) {
      wrapper = document.createElement("div")
      wrapper.setAttribute("data-cms-added-wrapper", wrapperId)
      wrapper.className = "mt-6 space-y-3"
      targetSection.appendChild(wrapper)
    }

    const cleanedNewTexts = (section.newTexts ?? []).map((text) => text.trim()).filter(Boolean)
    wrapper.innerHTML = ""

    for (const text of cleanedNewTexts) {
      const paragraph = document.createElement("p")
      paragraph.className = "text-base text-muted-foreground"
      paragraph.textContent = text
      wrapper.appendChild(paragraph)
    }
  }
}

export function ContentCmsPageOverride({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isSkippablePath = useMemo(() => {
    if (!pathname) {
      return true
    }

    return pathname.startsWith("/admin") || pathname.startsWith("/api")
  }, [pathname])

  useEffect(() => {
    if (isSkippablePath || !pathname) {
      return
    }

    let disposed = false
    let observer: MutationObserver | null = null
    let applying = false

    const loadAndApplyOverrides = async () => {
      try {
        const response = await fetch(`/api/content?path=${encodeURIComponent(pathname)}`, {
          cache: "no-store",
        })

        if (!response.ok || disposed) {
          return
        }

        const data = await response.json()
        const raw = data?.content?.textOverrides
        const rawSections = Array.isArray(data?.content?.pageSections)
          ? (data.content.pageSections as RuntimeSection[])
          : []

        if (!raw || typeof raw !== "object") {
          return
        }

        const overrides = Object.entries(raw as Record<string, unknown>)
          .filter((entry): entry is [string, string] => {
            const [from, to] = entry
            return typeof from === "string" && typeof to === "string" && from.trim().length > 0 && to.trim().length > 0
          })
          .map(([from, to]) => [from.trim(), to] as [string, string])
          .sort((a, b) => b[0].length - a[0].length)

        if (!overrides.length || disposed) {
          return
        }

        const safeApply = () => {
          if (applying || disposed) {
            return
          }

          applying = true
          try {
            applyOverridesToDocument(overrides)
            applyNewTextsToDocument(rawSections)
          } finally {
            applying = false
          }
        }

        safeApply()
        window.setTimeout(safeApply, 300)
        window.setTimeout(safeApply, 1000)

        observer = new MutationObserver(() => {
          safeApply()
        })

        observer.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
        })
      } catch {
        // Keep page usable even if CMS override fetch fails.
      }
    }

    loadAndApplyOverrides()

    return () => {
      disposed = true
      observer?.disconnect()
    }
  }, [isSkippablePath, pathname])

  return <>{children}</>
}
