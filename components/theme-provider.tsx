"use client"

import React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type ColorTheme = "blue" | "green" | "orange" | "red" | "cyan"
type FestiveTheme = "none" | "valentine" | "christmas" | "halloween" | "easter" | "blackfriday" | "summer" | "newyear" | "stpatricks"

interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  festiveTheme: FestiveTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
  setFestiveTheme: (festiveTheme: FestiveTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Helper function to get initial theme from localStorage
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return "light"
  const saved = localStorage.getItem("theme") as Theme | null
  if (saved && (saved === "light" || saved === "dark")) return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getInitialColorTheme(): ColorTheme {
  if (typeof window === 'undefined') return "blue"
  const saved = localStorage.getItem("colorTheme") as ColorTheme | null
  if (saved && ["blue", "green", "orange", "red", "cyan"].includes(saved)) return saved
  return "blue"
}

function getInitialFestiveTheme(): FestiveTheme {
  if (typeof window === 'undefined') return "none"
  const saved = localStorage.getItem("festiveTheme") as FestiveTheme | null
  const validFestive = ["none", "valentine", "christmas", "halloween", "easter", "blackfriday", "summer", "newyear", "stpatricks"]
  if (saved && validFestive.includes(saved)) return saved
  return "none"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [colorTheme, setColorTheme] = useState<ColorTheme>(getInitialColorTheme)
  const [festiveTheme, setFestiveTheme] = useState<FestiveTheme>(getInitialFestiveTheme)
  const [mounted, setMounted] = useState(false)

  // Mark as mounted on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fetch global default themes from API (only if user has no saved preferences)
  useEffect(() => {
    if (!mounted) return

    const hasUserPreferences = 
      localStorage.getItem("theme") || 
      localStorage.getItem("colorTheme") || 
      localStorage.getItem("festiveTheme")

    // If user already has preferences, don't override with API defaults
    if (hasUserPreferences) return

    // Fetch global defaults only for new users
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.settings?.defaultTheme) {
          const { theme: defaultTheme, colorTheme: defaultColor, festiveTheme: defaultFestive } = data.settings.defaultTheme
          
          // Only apply defaults if user hasn't set their own preferences
          if (!localStorage.getItem("theme") && defaultTheme) {
            setTheme(defaultTheme)
          }
          
          if (!localStorage.getItem("colorTheme") && defaultColor) {
            setColorTheme(defaultColor)
          }

          if (!localStorage.getItem("festiveTheme") && defaultFestive) {
            setFestiveTheme(defaultFestive)
          }
        }
      })
      .catch(() => {
        // Silent fail - user already has defaults from initial state
      })
  }, [mounted])

  // Apply theme changes to DOM and save to localStorage
  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  // Apply color theme changes to DOM and save to localStorage
  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    if (colorTheme === "blue") {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", colorTheme)
    }
    localStorage.setItem("colorTheme", colorTheme)
  }, [colorTheme, mounted])

  // Apply festive theme changes to DOM and save to localStorage
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    if (festiveTheme === "none") {
      root.removeAttribute("data-festive")
    } else {
      root.setAttribute("data-festive", festiveTheme)
    }
    localStorage.setItem("festiveTheme", festiveTheme)
  }, [festiveTheme, mounted])

  // Don't block rendering - render with initial values immediately
  return (
    <ThemeContext.Provider value={{ theme, colorTheme, festiveTheme, setTheme, setColorTheme, setFestiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export type { FestiveTheme, ColorTheme, Theme }
