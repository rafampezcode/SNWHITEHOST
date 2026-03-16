/**
 * API Route: Server Status
 * 
 * Este endpoint actúa como proxy para obtener datos de estado de servidores.
 * Evita problemas de CORS y permite cachear respuestas en el servidor.
 */

import { NextRequest, NextResponse } from "next/server"
import { STATUS_PAGE_CONFIG, FALLBACK_SERVERS } from "@/lib/status-config"

// Tipos
interface ServerStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: string
  latency: string
}

/**
 * Mapea estados de API externa a nuestros estados locales
 */
function mapStatus(status: string): "operational" | "degraded" | "outage" {
  const lowerStatus = status.toLowerCase()

  // Verificar estados operativos
  if (["operational", "up", "online", "success"].includes(lowerStatus)) {
    return "operational"
  }

  // Verificar estados degradados
  if (STATUS_PAGE_CONFIG.degradedStatuses.some((s) =>
    lowerStatus.includes(s.toLowerCase())
  )) {
    return "degraded"
  }

  // Verificar estados caídos
  if (STATUS_PAGE_CONFIG.outageStatuses.some((s) =>
    lowerStatus.includes(s.toLowerCase())
  )) {
    return "outage"
  }

  return "outage"
}

/**
 * GET /api/server-status
 * 
 * Retorna el estado actual de los servidores desde https://status.snwhitehosting.com
 */
export async function GET(request: NextRequest) {
  try {
    // Obtener los endpoints configurados
    const endpoints = STATUS_PAGE_CONFIG.apiEndpoints

    if (STATUS_PAGE_CONFIG.debugMode) {
      console.log("Intentando obtener estado de servidores desde:", endpoints)
    }

    let data: any = null
    let lastError: Error | null = null

    // Intenta cada endpoint
    for (const endpoint of endpoints) {
      try {
        if (STATUS_PAGE_CONFIG.debugMode) {
          console.log(`Intentando endpoint: ${endpoint}`)
        }

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "User-Agent": "SNWhiteHost-WebApp/1.0",
          },
          signal: AbortSignal.timeout(STATUS_PAGE_CONFIG.requestTimeout),
        })

        if (response.ok) {
          data = await response.json()
          if (STATUS_PAGE_CONFIG.debugMode) {
            console.log(`✓ Datos obtenidos de: ${endpoint}`)
          }
          break
        }
      } catch (error) {
        lastError = error as Error
        if (STATUS_PAGE_CONFIG.debugMode) {
          console.error(`✗ Error en ${endpoint}:`, error)
        }
        continue
      }
    }

    // Si no se obtuvo data de ningún endpoint, retorna error
    if (!data) {
      if (STATUS_PAGE_CONFIG.debugMode) {
        console.error("No se pudo obtener datos de ningún endpoint:", lastError)
      }

      return NextResponse.json(
        {
          error: "Unable to fetch server status",
          servers: FALLBACK_SERVERS,
          cached: true,
        },
        { status: 503 }
      )
    }

    // Procesa la respuesta
    const servers = processApiResponse(data)

    if (STATUS_PAGE_CONFIG.debugMode) {
      console.log(`Procesados ${servers.length} servidores`)
    }

    // Cachea la respuesta en el cliente durante el tiempo configurado
    return NextResponse.json(
      {
        servers,
        lastUpdated: new Date().toISOString(),
        cached: false,
      },
      {
        headers: {
          "Cache-Control": `public, max-age=${STATUS_PAGE_CONFIG.cacheMaxAge}, s-maxage=${STATUS_PAGE_CONFIG.cacheMaxAge}`,
          "Content-Type": "application/json",
        },
      }
    )
  } catch (error) {
    console.error("Server status API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        servers: FALLBACK_SERVERS,
        cached: true,
      },
      { status: 500 }
    )
  }
}

/**
 * Procesa la respuesta de la API externa
 */
function processApiResponse(data: any): ServerStatus[] {
  try {
    // Estructura Statuspage.io (muy común)
    if (data.components && Array.isArray(data.components)) {
      return data.components
        .filter((comp: any) => !comp.group_id || comp.group === null)
        .map((component: any) => ({
          name: component.name || "Unknown Service",
          status: mapStatus(component.status),
          uptime: component.uptime || "N/A",
          latency: component.latency || "N/A",
        }))
        .slice(0, STATUS_PAGE_CONFIG.maxServersDisplay)
    }

    // Estructura personalizada
    if (data.servers && Array.isArray(data.servers)) {
      return data.servers
        .map((server: any) => ({
          name: server.name || "Unknown Service",
          status: mapStatus(server.status),
          uptime: server.uptime || "N/A",
          latency: server.latency || "N/A",
        }))
        .slice(0, STATUS_PAGE_CONFIG.maxServersDisplay)
    }

    // Array simple
    if (Array.isArray(data)) {
      return data
        .map((item: any) => ({
          name: item.name || "Unknown Service",
          status: mapStatus(item.status),
          uptime: item.uptime || "N/A",
          latency: item.latency || "N/A",
        }))
        .slice(0, STATUS_PAGE_CONFIG.maxServersDisplay)
    }

    throw new Error("Unknown API response structure")
  } catch (error) {
    console.error("Error processing API response:", error)
    throw error
  }
}
