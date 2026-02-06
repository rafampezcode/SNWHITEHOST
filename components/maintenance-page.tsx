"use client"

import React from "react"
import Image from "next/image"
import { Settings, Clock, Mail, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

interface MaintenancePageProps {
  message?: string
  duration?: string
}

export function MaintenancePage({ message, duration }: MaintenancePageProps) {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <Card className="w-full max-w-2xl border-2">
        <CardContent className="p-8 sm:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="SN White Hosting"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Maintenance Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <div className="relative bg-primary/10 rounded-full p-6">
                <Settings className="h-16 w-16 text-primary animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            {t.maintenance.title}
          </h1>

          {/* Message */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6 border border-border">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-center flex-1">
                {message || t.maintenance.defaultMessage}
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">{t.maintenance.durationTitle}</div>
                <div className="text-xs text-muted-foreground">{duration || t.maintenance.durationText}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">{t.maintenance.supportTitle}</div>
                <div className="text-xs text-muted-foreground">{t.maintenance.supportEmail}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="default" 
              className="flex-1"
              onClick={() => window.location.reload()}
            >
              {t.maintenance.refreshButton}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              asChild
            >
              <a href="https://clients.snwhitehosting.com" target="_blank" rel="noopener noreferrer">
                {t.maintenance.portalButton}
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              {t.maintenance.footer}
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  )
}
