"use client"

import React, { useEffect, useState } from "react"
import { useTheme, type FestiveTheme } from "@/components/theme-provider"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
  opacity: number
}

const festiveConfig: Record<FestiveTheme, { emoji: string; count: number } | null> = {
  none: null,
  valentine: { emoji: "heart", count: 15 },
  christmas: { emoji: "snowflake", count: 18 },
  halloween: { emoji: "pumpkin", count: 12 },
  easter: { emoji: "egg", count: 15 },
  blackfriday: { emoji: "star", count: 12 },
  summer: { emoji: "sun", count: 10 },
  newyear: { emoji: "firework", count: 15 },
  stpatricks: { emoji: "clover", count: 15 },
}

function getParticleContent(theme: FestiveTheme): string {
  switch (theme) {
    case "valentine":
      return "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    case "christmas":
      return "M12 2L9 9H2l6 5-2 8 6-4 6 4-2-8 6-5h-7z"
    case "halloween":
      return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    case "easter":
      return "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
    case "blackfriday":
      return "M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
    case "summer":
      return "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"
    case "newyear":
      return "M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
    case "stpatricks":
      return "M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h1c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
    default:
      return ""
  }
}

function getParticleColor(theme: FestiveTheme): string {
  switch (theme) {
    case "valentine":
      return "#e91e63"
    case "christmas":
      return "#2196f3"
    case "halloween":
      return "#ff9800"
    case "easter":
      return "#9c27b0"
    case "blackfriday":
      return "#ffd700"
    case "summer":
      return "#f44336"
    case "newyear":
      return "#ffd700"
    case "stpatricks":
      return "#4caf50"
    default:
      return "#ffffff"
  }
}

export function FestiveEffects() {
  const { festiveTheme } = useTheme()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (festiveTheme === "none") {
      setParticles([])
      return
    }

    const config = festiveConfig[festiveTheme]
    if (!config) return

    const newParticles: Particle[] = Array.from({ length: config.count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -100,
      size: Math.random() * 10 + 8,
      speed: Math.random() * 1.5 + 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 3,
      opacity: Math.random() * 0.3 + 0.15,
    }))

    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y > 110 ? -10 : p.y + p.speed * 0.5,
          x: p.x + Math.sin(p.y * 0.02) * 0.3,
          rotation: p.rotation + p.rotationSpeed,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [festiveTheme])

  if (festiveTheme === "none" || particles.length === 0) return null

  const pathContent = getParticleContent(festiveTheme)
  const color = getParticleColor(festiveTheme)

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <svg
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
          }}
          viewBox="0 0 24 24"
          fill={color}
        >
          <path d={pathContent} />
        </svg>
      ))}
    </div>
  )
}
