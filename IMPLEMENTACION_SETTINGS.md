# ✅ Cambios Implementados - Global Settings Simplificado

## Resumen
Se simplificó el sistema de guardado de configuración global (temas, pop-ups) para que **persista automáticamente** en redeploys sin depender de MySQL. Ahora funciona con un archivo `config.json` trackeado en git.

## 📂 Archivos Modificados

### 1. `lib/global-settings.ts` ⬇️ Simplificado
- **Antes:** Intentaba conectar a MySQL, fallaba, caía a archivos en `.data/`
- **Después:** Lee/escribe directamente de `config.json` en la raíz del proyecto
- **Cambio:** -50 líneas de código MySQL innecesario

**Lo que cambió:**
```typescript
// ANTES: Problemas con MySQL y archivos efímeros
if (isMySQLConfigured()) { // Fallaba en producción
  // intentaba MySQL...
}
return readFromFile() // .data/global-settings.json se perdía

// DESPUÉS: Simple y directo
return readFromFile() // Siempre lee config.json
```

### 2. `app/api/admin/settings/route.ts` ⬇️ Auto-commit
- **Antes:** Solo guardaba en archivo (que se perdía)
- **Después:** Guarda + intenta auto-commit a git automáticamente
- **Nuevo:** Función `tryAutoCommit()` que hace:
  - `git add config.json`
  - `git commit -m "chore: update..."`
  - `git push`

**Ventaja:** En servidores Unix/Linux con git disponible, los cambios se commitan automáticamente.

### 3. `config.json` (NUEVO) ✨
- **Nuevo archivo** que reemplaza `.data/global-settings.json`
- **Ubicación:** Raíz del proyecto (fácil de encontrar)
- **Trackeado:** En git (persiste en redeploys)
- **Contenido:** Configuración inicial con defaults

```json
{
  "maintenance": {...},
  "promoBanner": {...},
  "announcement": {...},
  "festivePopup": {...},
  "defaultTheme": {
    "theme": "light",
    "colorTheme": "blue",
    "festiveTheme": "none"  // ← Aquí es donde cambia el tema
  }
}
```

### 4. `scripts/commit-config.js` (NUEVO) 📝
Script Node.js que:
- Detecta si `config.json` cambió
- Hace `git add + commit + push` automáticamente
- Obtiene el tema actual para el mensaje de commit

**Uso:**
```bash
node scripts/commit-config.js          # Solo commit local
node scripts/commit-config.js --push   # Commit + push a remote
```

### 5. `scripts/commit-config.ps1` (NUEVO) 🪟
Versión PowerShell del script anterior (para usuarios Windows).

**Uso:**
```powershell
PowerShell -ExecutionPolicy Bypass -File scripts\commit-config.ps1
# Con push: add -Push flag
```

### 6. `.github/workflows/auto-commit-config.yml` (NUEVO) 🤖
GitHub Action que:
- Monitorea cambios en `config.json`
- Auto-commitea y pushea automáticamente (sin intervención manual)
- Se puede ejecutar manualmente desde GitHub Actions tab

**Ventaja:** Producción completamente automatizada.

### 7. `package.json` ⬆️ Scripts agregados
```json
"scripts": {
  "config:commit": "node scripts/commit-config.js",
  "config:push": "node scripts/commit-config.js --push"
}
```

Ahora puedes:
```bash
pnpm config:push  # Auto-commit + push
```

### 8. `GLOBAL_SETTINGS_GUIDE.md` (NUEVO) 📖
Documentación completa con:
- Cómo funciona el nuevo sistema
- Opciones de auto-commit
- Troubleshooting
- Ejemplos de uso

## 🔄 Flujo Actualizado

### Desarrollo
```
Admin modifica tema en panel
        ↓
POST /api/admin/settings
        ↓
writeGlobalSettings() → config.json se actualiza
        ↓
Intenta auto-commit a git (opcional en local)
        ↓
Manual: pnpm config:push
```

### Producción (con GitHub Actions)
```
Admin en producción actualiza tema
        ↓
config.json se actualiza en servidor
        ↓
GitHub Actions detecta cambio
        ↓
Auto-commitea y pushea a main
        ↓
Next.js webhook (si está configurado) redeploy automático
        ↓
Todos los usuarios ven cambio al cargar
```

## ✨ Ventajas del Nuevo Sistema

| Aspecto | Antes | Después |
|--------|-------|---------|
| **Persistencia** | Se pierde en redeploy | Persiste en git ✅ |
| **Complejidad** | MySQL necesario | Solo archivo JSON ✅ |
| **Depuración** | `.data/global-settings.json` oculto | `config.json` visible en raíz ✅ |
| **Versionado** | No controlado | Git history completo ✅ |
| **Escalabilidad** | Requiere servidor DB | Funciona en cualquier hosting ✅ |
| **Mantenimiento** | Muchas conexiones fallidas | Cero dependencias ✅ |

## 🧪 Testing: Cómo Verificar que Funciona

### Paso 1: Desarrollo Local
```bash
# Terminal 1:
pnpm dev

# Terminal 2:
git status  # Nota el estado actual de config.json
```

### Paso 2: Cambiar Tema desde Admin
1. Ve a `http://localhost:3000/admin/login`
2. Usuario: `admin`, Contraseña: `admin`
3. En "Default Themes", selecciona "Valentine's Day"
4. Click "Save Settings"
5. Deberías ver: ✓ "Settings and themes updated successfully!"

### Paso 3: Verificar que config.json cambió
```bash
git status  # Debería mostrar "M config.json"
git diff config.json  # Debería mostrar:
# "festiveTheme": "valentine"
```

### Paso 4: Verificar que frontend carga cambios
1. Abre la página principal: `http://localhost:3000`
2. Recarga la página (Ctrl+R)
3. ¿Ves el tema de San Valentín? (corazones flotantes, colores rosa)

### Paso 5: Auto-commit (opcional)
```bash
pnpm config:push
# Debería mostrar:
# ✓ Committed config.json (theme: valentine)
# ✓ Pushed to remote
```

### Paso 6: Verificar persistencia en producción
```bash
# Simula redeploy:
rm -rf .next
pnpm build && pnpm start

# Recarga: http://localhost:3000
# ¿Todavía ves el tema de San Valentín?
```

## 🔐 Notas de Seguridad

✅ **Seguro:**
- `config.json` es público (no contiene secretos)
- Solo admin puede escribir (`/api/admin/settings` requiere sesión)
- Público puede leer (`/api/settings` sin auth)

⚠️ **No guardes en config.json:**
- Contraseñas
- API keys
- Información de usuarios

## 📋 Checklist Post-Implementación

- [ ] Probé guardar un tema desde admin local
- [ ] Verificué que `config.json` cambió
- [ ] Recargué la página y vi el tema aplicado
- [ ] Ejecuté `pnpm config:push`
- [ ] Verificué que el commit apareció en git
- [ ] Probé que persista después de `pnpm build && pnpm start`
- [ ] Lanzaré a producción con `git push`
- [ ] GitHub Actions auto-commitea cambios futuros

## 📞 Troubleshooting Rápido

**P: Guardé desde admin pero `config.json` no cambió**
```bash
# Verifica permisos:
ls -l config.json        # ¿Tienes permisos de escritura?
ps aux | grep node       # ¿App está corriendo?
```

**P: GitHub Actions no auto-commitea**
- Verifica: `.github/workflows/auto-commit-config.yml` existe
- En repo: Settings → Actions → "Allow all actions"

**P: Terminal Windows no ejecuta script  PowerShell**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
PowerShell -File scripts\commit-config.ps1
```

## 🎉 ¡Listo para Producción!

Ya puedes:
1. ✅ Guardar temas desde admin
2. ✅ Ver cambios inmediatamente en la web
3. ✅ Que persistan en redeploys
4. ✅ Auto-commit con GitHub Actions
5. ✅ Pop-ups funcionales también

**Para lanzar a web:**
```bash
git add config.json
git commit -m "chore: initial global settings"
git push
# Verifica que GitHub Actions ejecute y haga auto-commit
# Tu hosting hará redeploy automático
# ¡Listo!
```

---

**Preguntas?** Lee `GLOBAL_SETTINGS_GUIDE.md` para documentación completa.
