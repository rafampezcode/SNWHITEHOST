"use client"

import React, { useState, useEffect } from "react"
import { X, Sparkles, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePromoBanner } from "@/components/promo-banner-provider"
import { cn } from "@/lib/utils"

interface PromoBannerProps {
  message?: string
  code?: string
  endDate?: Date
  href?: string
}

export function PromoBanner({ 
  message,
  code = "WELCOME10",
  endDate,
  href = "https://clients.snwhitehosting.com"
}: PromoBannerProps) {
  const { t } = useLanguage()
  const { isBannerVisible, setIsBannerVisible } = usePromoBanner()
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    if (!endDate) return

    const updateTimer = () => {
      const now = new Date()
      const diff = endDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft(t.promoBanner.expired)
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h ${minutes}m`)
      } else {
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [endDate, t])

  if (!isBannerVisible) return null

  return (
    <div className="sticky top-0 z-40 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground shadow-lg">
      <a 
        href={href}
        className="block py-2.5 px-4"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-4 text-sm">
          <Sparkles className="h-4 w-4 shrink-0 animate-pulse" />
          
          <span className="font-medium">{message || t.promoBannerText?.specialOffer || t.promoBanner.defaultMessage}</span>
          
          {code && (
            <span className="hidden sm:inline-flex items-center gap-1 rounded bg-primary-foreground/20 px-2 py-0.5 font-mono font-bold">
              {code}
            </span>
          )}

          {timeLeft && (
            <span className="hidden md:inline-flex items-center gap-1 text-primary-foreground/80">
              <Clock className="h-3.5 w-3.5" />
              {timeLeft}
            </span>
          )}
        </div>
      </a>

      <button
        onClick={(e) => {
          e.preventDefault()
          setIsBannerVisible(false)
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
        aria-label={t.promoBanner.closeButton}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
