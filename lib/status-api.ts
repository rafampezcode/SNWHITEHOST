/**
 * Status API Client
 * Conecta con el servidor local proxy que a su vez consulta https://status.snwhitehosting.com
 */

interface ServerStatusData {
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: string
  latency: string
}

interface StatusApiResponse {
  servers: ServerStatusData[]
  lastUpdated?: string
  error?: string
  cached?: boolean
}

/**
 * Obtiene datos de estado de servidores desde el endpoint local (proxy)
 */
export async function fetchServerStatus(): Promise<ServerStatusData[]> {
  try {
    // Consulta el endpoint API local
    const response = await fetch("/api/server-status", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      // Intenta usar cache si está disponible
      next: { revalidate: 300 }, // 5 minutos en ISR
    })

    if (!response.ok) {
      console.error(`API returned status ${response.status}`)
      return getFallbackServers()
    }

    const data: StatusApiResponse = await response.json()

    if (data.servers && Array.isArray(data.servers)) {
      return data.servers
    }

    throw new Error("Invalid API response structure")
  } catch (error) {
    console.error("Error fetching server status:", error)
    return getFallbackServers()
  }
}

/**
 * Datos de fallback para cuando la API no está disponible
 */
export function getFallbackServers(): ServerStatusData[] {
  return [
    { name: "Web Hosting EU", status: "operational", uptime: "99.99%", latency: "12ms" },
    { name: "Web Hosting US", status: "operational", uptime: "99.98%", latency: "45ms" },
    { name: "Game Servers EU", status: "operational", uptime: "99.97%", latency: "8ms" },
    { name: "Game Servers US", status: "operational", uptime: "99.95%", latency: "38ms" },
    { name: "VPS Cloud", status: "operational", uptime: "99.99%", latency: "5ms" },
    { name: "DNS Services", status: "operational", uptime: "100%", latency: "2ms" },
  ]
}
