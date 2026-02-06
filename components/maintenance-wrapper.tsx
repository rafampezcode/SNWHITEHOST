"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { useGlobalSettings } from "@/components/global-settings-provider"
import { MaintenancePage } from "@/components/maintenance-page"

export function MaintenanceWrapper({ children }: { children: React.ReactNode }) {
  const { settings, loading } = useGlobalSettings()
  const pathname = usePathname()

  // Don't block admin routes
  const isAdminRoute = pathname?.startsWith("/admin")

  // Show loading or normal content if:
  // - Still loading settings
  // - Admin route
  // - Maintenance disabled
  if (loading || isAdminRoute || !settings.maintenance.enabled) {
    return <>{children}</>
  }

  // Show maintenance page
  return <MaintenancePage message={settings.maintenance.message} duration={settings.maintenance.duration} />
}
