"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade"
  delay?: number
  duration?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const animationStyles: Record<string, { initial: string; visible: string }> = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "zoom-in": {
      initial: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    fade: {
      initial: "opacity-0",
      visible: "opacity-100",
    },
  }

  const { initial, visible } = animationStyles[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
