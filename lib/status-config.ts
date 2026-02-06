/**
 * Configuración para la API de Estado de Servidores
 * 
 * Personaliza aquí los endpoints y comportamiento
 */

// URLs de la página de estado
export const STATUS_PAGE_CONFIG = {
  // URL base de tu página de estado
  baseUrl: "https://status.snwhitehosting.com",

  // Endpoints de API a intentar (en orden de preferencia)
  apiEndpoints: [
    "https://status.snwhitehosting.com/api/v1/status.json",
    "https://status.snwhitehosting.com/api/status.json",
    "https://api.status.snwhitehosting.com/status",
  ],

  // Timeout para requests (en milisegundos)
  requestTimeout: 5000,

  // Intervalo de auto-refresh en el cliente (en milisegundos)
  // 5 minutos = 300000 ms
  autoRefreshInterval: 5 * 60 * 1000,

  // Duración del cache en el servidor (en segundos)
  // 5 minutos = 300 segundos
  cacheMaxAge: 300,

  // Máximo número de servidores a mostrar
  maxServersDisplay: 10,

  // Estados que se consideran "degradados"
  degradedStatuses: [
    "degraded",
    "degraded_performance",
    "partial_outage",
    "maintenance",
  ],

  // Estados que se consideran "caídos"
  outageStatuses: [
    "outage",
    "down",
    "offline",
    "critical",
  ],

  // Habilitar logging detallado (útil para debugging)
  debugMode: process.env.NODE_ENV === "development",
}

// Mapeos personalizados de nombres de servidores
export const SERVER_NAME_MAPPINGS: Record<string, string> = {
  "ALFRED - FN1": "Web Hosting EU",
  "BRAVO - GM1": "Game Servers EU",
  "CHARLIE - GM2": "Game Servers EU 2",
  "DELTA - GM2": "Game Servers US",
  "CLIENT AREA": "Client Portal",
  "HTTP - FN1": "Web Hosting EU (HTTP)",
  "SMTP - FN1": "Email Services",
  "DNS Services": "DNS & Name Servers",
  "VPS Cloud": "Cloud Hosting",
}

// Datos de fallback personalizados
export const FALLBACK_SERVERS = [
  {
    name: "Web Hosting EU",
    status: "operational" as const,
    uptime: "99.99%",
    latency: "12ms",
  },
  {
    name: "Web Hosting US",
    status: "operational" as const,
    uptime: "99.98%",
    latency: "45ms",
  },
  {
    name: "Game Servers EU",
    status: "operational" as const,
    uptime: "99.97%",
    latency: "8ms",
  },
  {
    name: "Game Servers US",
    status: "operational" as const,
    uptime: "99.95%",
    latency: "38ms",
  },
  {
    name: "VPS Cloud",
    status: "operational" as const,
    uptime: "99.99%",
    latency: "5ms",
  },
  {
    name: "DNS Services",
    status: "operational" as const,
    uptime: "100%",
    latency: "2ms",
  },
]

/**
 * Validar configuración
 */
export function validateConfig() {
  if (!STATUS_PAGE_CONFIG.baseUrl) {
    throw new Error("STATUS_PAGE_CONFIG.baseUrl is not configured")
  }

  if (
    !STATUS_PAGE_CONFIG.apiEndpoints ||
    STATUS_PAGE_CONFIG.apiEndpoints.length === 0
  ) {
    throw new Error("STATUS_PAGE_CONFIG.apiEndpoints is not configured")
  }

  if (STATUS_PAGE_CONFIG.requestTimeout < 1000) {
    console.warn("requestTimeout is very low, may cause issues")
  }

  if (STATUS_PAGE_CONFIG.autoRefreshInterval < 60000) {
    console.warn("autoRefreshInterval is very low, may cause high server load")
  }
}

// Valida la configuración al importar
if (typeof window === "undefined") {
  // Solo valida en el servidor
  try {
    validateConfig()
  } catch (error) {
    console.error("Configuration error:", error)
  }
}
