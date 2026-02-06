"use client"

import React, { useState, useEffect } from "react"
import { Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface LiveVisitorsProps {
  className?: string
  minVisitors?: number
  maxVisitors?: number
}

export function LiveVisitors({ 
  className, 
  minVisitors = 12, 
  maxVisitors = 45 
}: LiveVisitorsProps) {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    // Generar numero inicial
    setVisitors(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors)

    // Actualizar cada 30 segundos con pequena variacion
    const interval = setInterval(() => {
      setVisitors((prev) => {
        const change = Math.floor(Math.random() * 5) - 2 // -2 a +2
        const newValue = prev + change
        return Math.max(minVisitors, Math.min(maxVisitors, newValue))
      })
    }, 30000)

    return () => clearInterval(interval)
  }, [minVisitors, maxVisitors])

  if (visitors === 0) return null

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-sm text-green-600",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <Users className="h-3.5 w-3.5" />
      <span className="font-medium">{visitors} personas viendo esta pagina</span>
    </div>
  )
}
