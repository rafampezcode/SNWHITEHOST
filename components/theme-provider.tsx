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

// Helper function to detect browser theme preference
const getBrowserThemePreference = (): Theme => {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// Default fallback values for SSR
const DEFAULT_THEME: Theme = "light"
const DEFAULT_COLOR_THEME: ColorTheme = "red"
const DEFAULT_FESTIVE_THEME: FestiveTheme = "none"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getBrowserThemePreference())
  const [colorTheme, setColorTheme] = useState<ColorTheme>(DEFAULT_COLOR_THEME)
  const [festiveTheme, setFestiveTheme] = useState<FestiveTheme>(DEFAULT_FESTIVE_THEME)
  const [mounted, setMounted] = useState(false)
  const [apiLoaded, setApiLoaded] = useState(false)

  // Load global defaults from API on mount (always, like maintenance/popups)
  // This ensures every visitor sees the admin's global theme settings
  useEffect(() => {
    const loadGlobalDefaults = async () => {
      try {
        // Always fetch latest global theme settings from server (no-cache)
        const response = await fetch("/api/settings", {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
          },
        })
        const data = await response.json()
        
        if (data?.settings?.defaultTheme) {
          const { theme: globalTheme, colorTheme: globalColor, festiveTheme: globalFestive } = data.settings.defaultTheme
          
          // Apply global defaults from server (always override on page load)
          if (globalTheme && (globalTheme === "light" || globalTheme === "dark")) {
            setTheme(globalTheme)
          }
          if (globalColor && ["blue", "green", "orange", "red", "cyan"].includes(globalColor)) {
            setColorTheme(globalColor)
          }
          if (globalFestive && ["none", "valentine", "christmas", "halloween", "easter", "blackfriday", "summer", "newyear", "stpatricks"].includes(globalFestive)) {
            setFestiveTheme(globalFestive)
          }
        }
      } catch (error) {
        // Silent fail - use defaults
        if (process.env.NODE_ENV === "development") {
          console.debug("Failed to load global theme defaults:", error)
        }
      }
      
      setMounted(true)
      setApiLoaded(true)
    }

    loadGlobalDefaults()
  }, [])

  // Apply theme changes to DOM and save to localStorage
  useEffect(() => {
    if (!mounted || !apiLoaded) return
    
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    // Persist user preference in localStorage
    localStorage.setItem("theme", theme)
  }, [theme, mounted, apiLoaded])

  // Apply color theme changes to DOM and save to localStorage ONLY on user interaction
  useEffect(() => {
    if (!mounted || !apiLoaded) return
    
    const root = document.documentElement
    if (colorTheme === "blue") {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", colorTheme)
    }
    // Save to localStorage to track user customization
    localStorage.setItem("colorTheme", colorTheme)
  }, [colorTheme, mounted, apiLoaded])

  // Apply festive theme changes to DOM and save to localStorage ONLY on user interaction
  useEffect(() => {
    if (!mounted || !apiLoaded) return

    const root = document.documentElement
    if (festiveTheme === "none") {
      root.removeAttribute("data-festive")
    } else {
      root.setAttribute("data-festive", festiveTheme)
    }
    // Save to localStorage to track user customization
    localStorage.setItem("festiveTheme", festiveTheme)
  }, [festiveTheme, mounted, apiLoaded])

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
