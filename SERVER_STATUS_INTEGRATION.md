# Integración de Estado de Servidores en Tiempo Real

## Descripción General

El componente `ServerStatus` ahora está conectado a tu página de estado en **https://status.snwhitehosting.com** para mostrar datos en tiempo real sobre el estado de los servidores.

## Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    components/server-status.tsx            │
│                   (Componente React Client)                │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ fetch("/api/server-status")
                           ▼
┌─────────────────────────────────────────────────────────────┐
│            app/api/server-status/route.ts                  │
│              (Endpoint Next.js API - Proxy)                │
│                                                             │
│  - Intenta múltiples endpoints de API                      │
│  - Procesa respuestas en diferentes formatos              │
│  - Retorna datos cacheados (5 minutos)                    │
│  - Fallback a datos predeterminados si falla              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ fetch("https://status.snwhitehosting.com/api/...")
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           https://status.snwhitehosting.com                 │
│                    (Tu página de estado)                    │
│                                                             │
│  API esperada:                                              │
│  - /api/v1/status.json                                     │
│  - /api/status.json                                        │
│  - O cualquier otro endpoint JSON con estructura conocida  │
└─────────────────────────────────────────────────────────────┘
```

## Archivos Modificados/Creados

### 1. **components/server-status.tsx** (Modificado)
- Ahora usa hooks `useState` y `useEffect` para obtener datos dinámicamente
- Se conecta al endpoint local `/api/server-status`
- Auto-actualiza cada 5 minutos
- Maneja estados de carga, error y éxito
- Botón para actualizar manualmente
- Muestra timestamp de última actualización

### 2. **app/api/server-status/route.ts** (NUEVO)
Endpoint API que actúa como **proxy seguro**:
- Intenta conectarse a múltiples endpoints de tu API de estado
- Mapea diferentes formatos de estado (operational, degraded, outage, etc.)
- Cachea respuestas durante 5 minutos
- Retorna datos de fallback si falla la conexión
- Headers de cache HTTP para optimización

### 3. **lib/status-api.ts** (NUEVO)
Cliente utility para interactuar con el endpoint API:
- Función `fetchServerStatus()`: Obtiene datos del servidor
- Función `getFallbackServers()`: Retorna datos de respaldo
- Documentación clara y tipos TypeScript

## Flujo de Datos

### Carga Inicial
1. Componente monta en el cliente
2. `useEffect` dispara `handleFetchStatus()`
3. Se realiza `fetch("/api/server-status")`
4. Endpoint local consulta `https://status.snwhitehosting.com/api/*`
5. Datos se cacheam en cliente durante 5 minutos
6. Se renderizan con animaciones de carga

### Auto-Refresh
- Cada 5 minutos, se dispara una actualización automática
- Usuario puede hacer click en "Actualizar ahora" para forzar update inmediato
- Last updated timestamp se muestra en la UI

### Fallback
Si la API externa no responde:
1. Se muestra un mensaje de error
2. Se renderizan datos predeterminados
3. Usuario puede reintentar con el botón "Actualizar ahora"

## Configuración Necesaria

Tu API de estado debe retornar JSON en uno de estos formatos:

### Formato 1: Statuspage.io (Recomendado)
```json
{
  "components": [
    {
      "name": "Web Hosting EU",
      "status": "operational",
      "uptime": "99.99%",
      "latency": "12ms"
    }
  ]
}
```

### Formato 2: Personalizado
```json
{
  "servers": [
    {
      "name": "VPS Cloud",
      "status": "operational",
      "uptime": "99.99%",
      "latency": "5ms"
    }
  ]
}
```

### Formato 3: Array Simple
```json
[
  {
    "name": "DNS Services",
    "status": "operational",
    "uptime": "100%",
    "latency": "2ms"
  }
]
```

## Estados Soportados

- `operational` / `up` / `online` → ✅ Verde (Operativo)
- `degraded` / `degraded_performance` / `partial_outage` → ⚠️ Amarillo (Degradado)
- `outage` / `down` / `offline` / `maintenance` → ❌ Rojo (Caído)

## Configuración de tu API de Estado

Si tu página está en `https://status.snwhitehosting.com`:

### Opción A: Exponer API JSON (Recomendado)
```
GET https://status.snwhitehosting.com/api/v1/status.json
GET https://status.snwhitehosting.com/api/status.json
```

### Opción B: Si usas Statuspage.io
El endpoint automáticamente detectará y usará la API oficial.

### Opción C: Configurar en tu DNS
Apunta un subdominio API:
```
api.status.snwhitehosting.com → tu servidor de estado
```

## Testing

Para verificar que todo funciona:

1. **En desarrollo:**
   ```bash
   pnpm dev
   ```
   Abre `http://localhost:3000` y ve a la sección "Estado de Servidores"

2. **Revisa la consola del navegador** (F12):
   - Verifica que no hay errores CORS
   - Comprueba que se cargan los datos
   - Mira las llamadas a `/api/server-status`

3. **Revisa la consola del servidor** (terminal):
   - Mira los logs de las requests
   - Comprueba los endpoints que intenta

## Troubleshooting

### Los datos no se cargan
1. Verifica que tu API de estado está en línea
2. Abre DevTools → Red → ve si `/api/server-status` retorna 200
3. Revisa la respuesta JSON en la pestaña de Network

### CORS errors (en desarrollo)
- Esto no debería ocurrir porque el proxy está en Next.js
- Si ves errores, verifica que el endpoint externo permite requests

### Datos siempre son fallback
1. Tu API externa puede no estar disponible
2. Verifica los endpoints en `app/api/server-status/route.ts`
3. Añade logs para debuguear

### Quiero cambiar el intervalo de auto-update
Edita en `components/server-status.tsx`:
```typescript
const interval = setInterval(handleFetchStatus, 5 * 60 * 1000) // Cambia este número
// 300000 ms = 5 minutos
// 60000 ms = 1 minuto
// 30000 ms = 30 segundos
```

## Implementación en Producción

### 1. Asegúrate de que tu API de estado está disponible
```bash
curl https://status.snwhitehosting.com/api/v1/status.json
# o el endpoint que uses
```

### 2. Verifica que los endpoints retornan datos válidos
La respuesta debe ser JSON con estructura reconocida

### 3. Configura cache headers en tu API (opcional)
```
Cache-Control: public, max-age=300
```

### 4. Monitorea en producción
Revisa los logs del servidor para errores de conexión

## Características Actuales

✅ Conexión en tiempo real con API de estado  
✅ Auto-actualización cada 5 minutos  
✅ Botón para actualizar manualmente  
✅ Timestamps de última actualización  
✅ Manejo de errores con fallback  
✅ Estados color-coded (verde/amarillo/rojo)  
✅ Indicador de carga  
✅ Soporte para múltiples formatos de API  
✅ Caching para optimizar rendimiento  

## Próximas Mejoras Posibles

- [ ] Histórico de cambios de estado
- [ ] Gráficos de uptime/latencia
- [ ] Alertas personalizadas
- [ ] Notificaciones push
- [ ] Análisis de incidentes
- [ ] Búsqueda/filtrado de servidores
- [ ] Integración con webhooks

---

**Última actualización:** Febrero 2026
**Estado:** ✅ Producción Ready
