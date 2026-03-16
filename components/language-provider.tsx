"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { type Language, getTranslation } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Get initial language from localStorage or browser
function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"
  }

  const savedLang = localStorage.getItem("language") as Language | null
  if (savedLang && ["en", "es", "de", "nl"].includes(savedLang)) {
    return savedLang
  }

  // Detect browser language
  const browserLang = navigator.language.split("-")[0]
  if (["en", "es", "de", "nl"].includes(browserLang)) {
    return browserLang as Language
  }

  return "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("language", language)
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = getTranslation(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
