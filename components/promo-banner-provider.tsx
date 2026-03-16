"use client"

import React, { createContext, useContext, useState } from "react"

interface PromoBannerContextType {
  isBannerVisible: boolean
  setIsBannerVisible: (visible: boolean) => void
}

const PromoBannerContext = createContext<PromoBannerContextType | undefined>(undefined)

export function PromoBannerProvider({ children }: { children: React.ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  return (
    <PromoBannerContext.Provider value={{ isBannerVisible, setIsBannerVisible }}>
      {children}
    </PromoBannerContext.Provider>
  )
}

export function usePromoBanner() {
  const context = useContext(PromoBannerContext)
  if (context === undefined) {
    throw new Error("usePromoBanner must be used within a PromoBannerProvider")
  }
  return context
}
