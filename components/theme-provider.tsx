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

// Helper function to get initial theme from localStorage or default to dark
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark"
  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") {
    return stored
  }
  return "dark" // Default to dark mode
}

// Helper function to get initial color theme from localStorage or default to red
const getInitialColorTheme = (): ColorTheme => {
  if (typeof window === "undefined") return "red"
  const stored = localStorage.getItem("colorTheme")
  if (["blue", "green", "orange", "red", "cyan"].includes(stored || "")) {
    return stored as ColorTheme
  }
  return "red" // Default to red
}

// Helper function to get initial festive theme from localStorage
const getInitialFestiveTheme = (): FestiveTheme => {
  if (typeof window === "undefined") return "none"
  const stored = localStorage.getItem("festiveTheme")
  if (["none", "valentine", "christmas", "halloween", "easter", "blackfriday", "summer", "newyear", "stpatricks"].includes(stored || "")) {
    return stored as FestiveTheme
  }
  return "none"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => getInitialColorTheme())
  const [festiveTheme, setFestiveTheme] = useState<FestiveTheme>(() => getInitialFestiveTheme())
  const [mounted, setMounted] = useState(false)
  const [apiLoaded, setApiLoaded] = useState(false)
  const [hasUserPreference, setHasUserPreference] = useState(false)

  // Check if user has saved preferences in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      const savedColor = localStorage.getItem("colorTheme")
      const savedFestive = localStorage.getItem("festiveTheme")
      setHasUserPreference(!!savedTheme || !!savedColor || !!savedFestive)
    }
  }, [])

  // Load global defaults from API on mount ONLY if user has no saved preferences
  // This ensures user choices are always respected across sessions
  useEffect(() => {
    const loadGlobalDefaults = async () => {
      try {
        // Only apply global defaults if user has no preferences AND no API data has been applied yet
        if (hasUserPreference) {
          // User has preferences, respect them
          setMounted(true)
          setApiLoaded(true)
          return
        }

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
          
          // Apply global defaults from server only if user has no preferences
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
        // Silent fail - use defaults/localStorage values
        if (process.env.NODE_ENV === "development") {
          console.debug("Failed to load global theme defaults:", error)
        }
      }
      
      setMounted(true)
      setApiLoaded(true)
    }

    loadGlobalDefaults()
  }, [hasUserPreference])

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
