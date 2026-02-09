# Global Settings - Sistema Simplificado

## 🎯 Cómo Funciona

1. **El admin guarda un tema** (ej: San Valentín) desde el panel
2. **`config.json` se actualiza automáticamente** en el servidor
3. **Todos los visitantes ven el mismo tema** al cargar la página
4. **Los cambios persisten en redeploys** porque están en el repositorio

## 📁 Archivos Principales

- `config.json` - Archivo de configuración central (trackeado en git)
- `lib/global-settings.ts` - Lógica de lectura/escritura
- `app/api/settings/route.ts` - API pública (lecturas)
- `app/api/admin/settings/route.ts` - API privada (solo admin)

## 🚀 Flujo de Guardado

```
Admin actualiza tema
        ↓
Envía POST a /api/admin/settings
        ↓
Servidor: writeGlobalSettings()
        ↓
Actualiza config.json
        ↓
Intenta auto-commit a git (opcional)
        ↓
Todos los usuarios ven cambios inmediatamente
```

## 📋 Opción 1: Auto-Commit Manual (Recomendado para desarrollo)

Después de actualizar desde admin, ejecuta:

```bash
# PowerShell (Windows)
PowerShell -ExecutionPolicy Bypass -File scripts\commit-config.ps1

# Bash (Mac/Linux)
node scripts/commit-config.js

# Con push automático:
node scripts/commit-config.js --push
```

O en `package.json`, añade al `scripts`:
```json
"scripts": {
  "config:commit": "node scripts/commit-config.js",
  "config:push": "node scripts/commit-config.js --push"
}
```

Y ejecuta:
```bash
pnpm config:push
```

## 📋 Opción 2: GitHub Actions (Recomendado para producción)

Se incluye `.github/workflows/auto-commit-config.yml` que:
- ✅ Monitorea cambios en `config.json`
- ✅ Auto-commitea y pushea a main
- ✅ Funciona completamente automatizado

Solo necesitas:
- GitHub Actions habilitado (por defecto)
- Permisos de contenido (configurado en workflow)
- Opcional: Configurar un schedule (ej: cada hora)

## 🔍 Cómo Ver que Funciona

### En desarrollo:
```bash
# 1. Inicia el servidor
pnpm dev

# 2. Ve a http://localhost:3000/admin/login (admin/admin)

# 3. Guarda un tema (ej: Valentine)

# 4. Verifica que config.json cambió:
git status
# verás: M config.json

# 5. Commitea:
pnpm config:push
```

### En producción:
- Guarda desde el admin
- `config.json` se actualiza
- Con GitHub Actions: automáticamente va a main
- Cada redeploy incluye los cambios
- Los usuarios ven los cambios al recargar

## 🌍 Cómo se Propagan los Cambios a los Usuarios

### Opción A: Con SSG estático (recomendado)
```
1. Admin guarda tema
2. config.json se actualiza
3. Commitea a main
4. Reconstruye (rebuild)
5. Todos ven el nuevo tema
```

### Opción B: Con client-side fetch
```
1. Admin guarda tema
2. config.json se actualiza
3. GlobalSettingsProvider fetches /api/settings
4. Actualiza contexto
5. Componentes se re-renderizan
```

El sistema usa **Opción B + caché** (por eso es rápido).

## 🎨 Ejemplo: Activar Tema de San Valentín

1. **En admin:**
   - Ir a "Default Themes" → "Valentine's Day"
   - Click "Save Settings"
   - Aparece: ✓ "Settings and themes updated successfully!"

2. **Lo que pasó:**
   ```json
   // config.json se actualiza a:
   {
     "defaultTheme": {
       "festiveTheme": "valentine"
     }
   }
   ```

3. **Commits cambios:**
   ```bash
   pnpm config:push
   # chore: update global settings (theme: valentine)
   ```

4. **Usuario abre el sitio:**
   ```
   Carga config → festiveTheme: valentine
   → Aplica tema rojo/rosa
   → Todos ven corazones flotantes
   ```

## ⚙️ Configuración por Hosting

### Vercel
- ✅ Funciona con auto-commit vía GitHub Actions
- ✅ `config.json` se incluye en cada build
- ✅ No requiere configuración adicional

### Otros (Netlify, Railway, etc.)
- ✅ Funciona igual - es un archivo JSON normal
- ✅ Si usas GitHub Actions: automático
- ✅ Si no: ejecuta script manual después de guardar

## 🔐 Seguridad

- `config.json` está trackeado en git (es público)
- Cambios sensibles NO van aquí (solo UI/temas)
- Solo admin puede guardar (`/api/admin/settings` requiere sesión)
- Usuarios normales solo leen (`/api/settings`)

## 🆘 Troubleshooting

### Los cambios no aparecen después de guardar
```bash
# Verifica que config.json se actualizó:
git status      # ¿Aparece M config.json?

# Si no aparece, el servidor no pudo escribir
# Probablemente problema de permisos
```

### GitHub Actions no auto-commitea
- Verifica: `.github/workflows/auto-commit-config.yml` existe
- En repo settings: Actions debe estar enabled
- Verifica permisos de "contents: write"

### En producción el tema no persiste
```
CAUSAS POSIBLES:
1. config.json no se commitó a main
2. El build no incluye config.json
3. El usuario tiene preferencias locales (localStorage)
   → Solución: Borrar cache/cookies
```

## 📝 Resumen: Qué Hicimos

| Antes | Después |
|-------|---------|
| Guardaba en `.data/` que se perdía en redeploy | Guarda en `config.json` trackeado en git |
| Solo funciona en desarrollo | Funciona en producción |
| No hay persistencia entre deploys | Persiste automáticamente |
| MySQL complicado | Simple: archivo JSON |
| No hay auto-commit | Script auto-commit incluido |

## 🚀 Próximos Pasos

1. **Hoy:**
   - Prueba guardar un tema desde admin
   - Recarga la página - ¿lo ves?

2. **Para producción:**
   - `git add config.json && git commit && git push`
   - Verifica GitHub Actions ejecute
   - Redeploy y verifica que persista

3. **Opcional:**
   - Configura schedule en GitHub Actions (auto-check cada hora)
   - Añade notificaciones Slack cuando cambie tema

---

**¿Preguntas?** Verifica el archivo en `config.json` - es un JSON normal que puedes editar directamente si lo necesitas.
