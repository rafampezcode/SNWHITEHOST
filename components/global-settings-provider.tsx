"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import type { GlobalSettings } from "@/lib/global-settings-types"
import { defaultGlobalSettings } from "@/lib/global-settings-types"

type GlobalSettingsContextValue = {
  settings: GlobalSettings
  loading: boolean
  refresh: () => Promise<void>
}

const GlobalSettingsContext = createContext<GlobalSettingsContextValue | undefined>(undefined)

export function GlobalSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<GlobalSettings>(defaultGlobalSettings)
  const [loading, setLoading] = useState(true)

  const loadSettings = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/settings")
      if (response.ok) {
        const data = await response.json()
        if (data?.settings) {
          setSettings(data.settings)
        }
      }
    } catch {
      setSettings(defaultGlobalSettings)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSettings()
  }, [])

  return (
    <GlobalSettingsContext.Provider value={{ settings, loading, refresh: loadSettings }}>
      {children}
    </GlobalSettingsContext.Provider>
  )
}

export function useGlobalSettings() {
  const context = useContext(GlobalSettingsContext)
  if (!context) {
    throw new Error("useGlobalSettings must be used within GlobalSettingsProvider")
  }
  return context
}
