"use client"

import React, { useEffect, useState } from "react"
import { X, Heart, Sparkles, Ghost, Egg, Tag, Sun, PartyPopper, Clover } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import { useGlobalSettings } from "@/components/global-settings-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const festiveIcons = {
  valentine: Heart,
  christmas: Sparkles,
  halloween: Ghost,
  easter: Egg,
  blackfriday: Tag,
  summer: Sun,
  newyear: PartyPopper,
  stpatricks: Clover,
}

const festiveColors = {
  valentine: {
    bg: "from-pink-50 via-rose-50 to-red-50 dark:from-pink-950 dark:via-rose-950 dark:to-red-950",
    border: "border-pink-400 dark:border-pink-600",
    icon: "text-pink-500",
    iconGlow: "bg-pink-500/20",
    button: "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70",
    accent: "bg-pink-100 dark:bg-pink-900/30",
    decorColor: "#ec4899",
  },
  christmas: {
    bg: "from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950 dark:via-cyan-950 dark:to-sky-950",
    border: "border-blue-400 dark:border-blue-600",
    icon: "text-blue-500",
    iconGlow: "bg-blue-500/20",
    button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70",
    accent: "bg-blue-100 dark:bg-blue-900/30",
    decorColor: "#3b82f6",
  },
  halloween: {
    bg: "from-orange-50 via-amber-50 to-purple-50 dark:from-orange-950 dark:via-amber-950 dark:to-purple-950",
    border: "border-orange-400 dark:border-orange-600",
    icon: "text-orange-500",
    iconGlow: "bg-orange-500/20",
    button: "bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70",
    accent: "bg-orange-100 dark:bg-orange-900/30",
    decorColor: "#f97316",
  },
  easter: {
    bg: "from-purple-50 via-pink-50 to-violet-50 dark:from-purple-950 dark:via-pink-950 dark:to-violet-950",
    border: "border-purple-400 dark:border-purple-600",
    icon: "text-purple-500",
    iconGlow: "bg-purple-500/20",
    button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70",
    accent: "bg-purple-100 dark:bg-purple-900/30",
    decorColor: "#a855f7",
  },
  blackfriday: {
    bg: "from-gray-900 via-slate-900 to-black dark:from-gray-950 dark:via-slate-950 dark:to-black",
    border: "border-yellow-400",
    icon: "text-yellow-400",
    iconGlow: "bg-yellow-400/20",
    button: "bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-black font-bold shadow-lg shadow-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/70",
    accent: "bg-yellow-400/10",
    decorColor: "#facc15",
  },
  summer: {
    bg: "from-red-50 via-orange-50 to-yellow-50 dark:from-red-950 dark:via-orange-950 dark:to-yellow-950",
    border: "border-red-400 dark:border-red-600",
    icon: "text-red-500",
    iconGlow: "bg-red-500/20",
    button: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70",
    accent: "bg-red-100 dark:bg-red-900/30",
    decorColor: "#ef4444",
  },
  newyear: {
    bg: "from-purple-50 via-violet-50 to-blue-50 dark:from-purple-950 dark:via-violet-950 dark:to-blue-950",
    border: "border-purple-400 dark:border-purple-600",
    icon: "text-purple-500",
    iconGlow: "bg-purple-500/20",
    button: "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70",
    accent: "bg-purple-100 dark:bg-purple-900/30",
    decorColor: "#a855f7",
  },
  stpatricks: {
    bg: "from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950",
    border: "border-green-400 dark:border-green-600",
    icon: "text-green-500",
    iconGlow: "bg-green-500/20",
    button: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70",
    accent: "bg-green-100 dark:bg-green-900/30",
    decorColor: "#22c55e",
  },
}

export function FestivePopup() {
  const { festiveTheme } = useTheme()
  const { settings, loading } = useGlobalSettings()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const popupSignature = settings?.festivePopup
    ? JSON.stringify({
        theme: festiveTheme,
        title: settings.festivePopup.title,
        message: settings.festivePopup.message,
        buttonText: settings.festivePopup.buttonText,
      })
    : ""

  useEffect(() => {
    // Don't show anything while loading or if festivePopup config doesn't exist
    if (loading || !settings?.festivePopup || pathname !== "/") {
      setShouldShow(false)
      return
    }

    // Check if popup should be shown
    if (festiveTheme === "none" || !settings.festivePopup.enabled) {
      setShouldShow(false)
      return
    }

    // Check localStorage to see if user has already dismissed this festive popup
    const dismissedKey = `festive-popup-dismissed-${festiveTheme}`
    const isDismissed = localStorage.getItem(dismissedKey) === popupSignature

    if (!isDismissed) {
      setShouldShow(true)
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [festiveTheme, settings?.festivePopup, loading, pathname, popupSignature])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that user dismissed this festive popup
    const dismissedKey = `festive-popup-dismissed-${festiveTheme}`
    localStorage.setItem(dismissedKey, popupSignature)
  }

  if (!shouldShow || festiveTheme === "none" || !settings?.festivePopup || pathname !== "/") {
    return null
  }

  const Icon = festiveIcons[festiveTheme as keyof typeof festiveIcons]
  const colors = festiveColors[festiveTheme as keyof typeof festiveColors]

  return (
    <>
      {/* Backdrop with enhanced blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 animate-in fade-in duration-500"
          onClick={handleClose}
        />
      )}

      {/* Popup with enhanced aesthetics */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-500">
          <Card
            className={`relative w-full max-w-lg shadow-2xl border-2 overflow-hidden backdrop-blur-xl ${colors.border}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${colors.iconGlow}`} />
              <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl ${colors.iconGlow}`} />
            </div>

            {/* Close button with better styling */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            <CardContent className={`relative p-10 sm:p-12 text-center bg-gradient-to-br ${colors.bg}`}>
              {/* Icon with enhanced animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Animated glow rings */}
                  <div className={`absolute inset-0 rounded-full ${colors.iconGlow} animate-ping`} style={{ animationDuration: '2s' }} />
                  <div className={`absolute inset-0 blur-3xl rounded-full opacity-40 ${colors.icon} animate-pulse`} />
                  
                  {/* Icon container with glassmorphism */}
                  <div className="relative bg-background/90 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-border/50">
                    <Icon className={`h-16 w-16 ${colors.icon} animate-bounce`} style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="flex items-center justify-center mb-6">
                <div className={`h-1 w-16 rounded-full ${colors.accent}`} />
              </div>

              {/* Title with better typography */}
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-foreground tracking-tight">
                {settings.festivePopup.title}
              </h2>

              {/* Message with accent background */}
              <div className={`${colors.accent} rounded-xl p-4 mb-8 border border-border/30`}>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
                  {settings.festivePopup.message}
                </p>
              </div>

              {/* Action button with gradient and shadow */}
              <Button
                onClick={handleClose}
                className={`w-full text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 ${colors.button}`}
                size="lg"
              >
                {settings.festivePopup.buttonText}
              </Button>

              {/* Decorative accent at bottom */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
                <div className={`h-1 w-1 rounded-full ${colors.accent}`} />
                <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced animation styles */}
      <style jsx global>{`
        @keyframes smoothBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        .animate-bounce {
          animation: smoothBounce 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}
