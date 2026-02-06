"use client"

import React, { useState, useEffect } from "react"
import { Activity, CheckCircle, AlertCircle, Clock, RotateCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { fetchServerStatus, getFallbackServers } from "@/lib/status-api"

interface ServerData {
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: string
  latency: string
}

export function ServerStatus() {
  const { t } = useLanguage()
  const [servers, setServers] = useState<ServerData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Función para obtener datos de la API de status
  const handleFetchStatus = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const data = await fetchServerStatus()
      setServers(data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error("Error fetching server status:", err)
      setError("No se pudo obtener el estado de los servidores. Mostrando datos en caché.")
      
      // Usa datos de fallback
      setServers(getFallbackServers())
    } finally {
      setLoading(false)
    }
  }

  // Fetch inicial y auto-refresh cada 5 minutos
  useEffect(() => {
    handleFetchStatus()
    const interval = setInterval(handleFetchStatus, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const allOperational = servers.every((s) => s.status === "operational")

  const statusConfig = {
    operational: {
      label: t.serverStatus.operational,
      icon: CheckCircle,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    degraded: {
      label: t.serverStatus.degraded,
      icon: AlertCircle,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    outage: {
      label: t.serverStatus.outage,
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Activity className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.serverStatus.title}
            </h2>
          </div>
          
          {allOperational && !error && (
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">{t.serverStatus.allOperational}</span>
            </div>
          )}
          
          {error && (
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium">{error}</span>
            </div>
          )}
          
          {lastUpdated && (
            <div className="text-xs text-muted-foreground mt-4">
              Actualizado: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>

        {loading && servers.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-3">
              <RotateCw className="h-6 w-6 animate-spin text-primary" />
              <p className="text-muted-foreground">Cargando estado de servidores...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servers.map((server) => {
                const config = statusConfig[server.status as keyof typeof statusConfig]
                const StatusIcon = config.icon

                return (
                  <Card key={server.name} className="border-border/50 bg-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-foreground">{server.name}</h3>
                        <div className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", config.bg, config.color)}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {config.label}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {t.serverStatus.uptime}: <span className="text-foreground font-medium">{server.uptime}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {t.serverStatus.latency}: <span className="text-foreground font-medium">{server.latency}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={handleFetchStatus}
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50 text-sm font-medium"
              >
                <RotateCw className={cn("h-4 w-4", loading && "animate-spin")} />
                Actualizar ahora
              </button>
              
              <a 
                href="https://status.snwhitehosting.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                {t.serverStatus.fullHistory}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
