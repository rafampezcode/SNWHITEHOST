"use client"

import React from "react"
import { AlertTriangle } from "lucide-react"
import { useGlobalSettings } from "@/components/global-settings-provider"
import { PromoBanner } from "@/components/promo-banner"

export function GlobalSiteBanner() {
  const { settings } = useGlobalSettings()

  const promoEndDate = settings.promoBanner.endDate
    ? new Date(settings.promoBanner.endDate)
    : undefined

  return (
    <>
      {settings.maintenance.enabled && (
        <div className="bg-red-600 text-white">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>{settings.maintenance.message}</span>
          </div>
        </div>
      )}

      {!settings.maintenance.enabled && settings.announcement.enabled && settings.announcement.message && (
        <div className="bg-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-center">
            {settings.announcement.message}
          </div>
        </div>
      )}

      {!settings.maintenance.enabled && settings.promoBanner.enabled && (
        <PromoBanner
          message={settings.promoBanner.message}
          code={settings.promoBanner.code}
          endDate={promoEndDate}
          href={settings.promoBanner.href}
        />
      )}
    </>
  )
}
