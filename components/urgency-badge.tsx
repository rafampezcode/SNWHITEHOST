"use client"

import React from "react"
import { Flame, Clock, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

interface UrgencyBadgeProps {
  type: "limited" | "popular" | "ending-soon"
  text?: string
  className?: string
}

export function UrgencyBadge({ type, text, className }: UrgencyBadgeProps) {
  const { t } = useLanguage()

  const getDefaultText = () => {
    switch (type) {
      case "limited":
        return t.urgencyBadge?.limited || "Limited Offer"
      case "popular":
        return t.urgencyBadge?.popular || "Very Popular"
      case "ending-soon":
        return t.urgencyBadge?.endingSoon || "Ending Soon"
      default:
        return ""
    }
  }

  const config = {
    limited: {
      icon: Flame,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    popular: {
      icon: Users,
      color: "bg-primary/10 text-primary border-primary/20",
    },
    "ending-soon": {
      icon: Clock,
      color: "bg-red-500/10 text-red-500 border-red-500/20",
    },
  }

  const { icon: Icon, color } = config[type]

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        color,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {text || getDefaultText()}
    </span>
  )
}
