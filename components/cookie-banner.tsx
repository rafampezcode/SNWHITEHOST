"use client"

import React, { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Mostrar despues de 1 segundo
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg",
        "transform transition-transform duration-500",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="h-6 w-6 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            {t.cookieBanner.message}{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
              {t.cookieBanner.privacy}
            </a>
            .
          </p>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={declineCookies} className="bg-transparent">
            {t.cookieBanner.decline}
          </Button>
          <Button size="sm" onClick={acceptCookies}>
            {t.cookieBanner.accept}
          </Button>
        </div>
      </div>
    </div>
  )
}
