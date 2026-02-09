# 🚀 Quickstart: Sistema de Configuración Global Simplificado

## ¿Qué se solucionó?

✅ **Antes:** Los cambios del admin (temas, pop-ups) se perdían en cada redeploy  
✅ **Ahora:** Todo se guarda en `config.json` que persiste en git → cambios permanentes

## 🎯 Uso Inmediato

### 1. Modificar tema desde admin

```bash
# Inicia el servidor (si no está corriendo)
pnpm dev

# Ve a: http://localhost:3000/admin/login
# Usuario: admin, Contraseña: admin
```

### 2. Seleccionar tema festivo
1. Scroll a la sección "Default Themes"
2. Click en el tema que quieras (ej: Valentine's Day)
3. Click "Save Settings"
4. Verás: ✓ "Settings and themes updated successfully!"

### 3. Verificar que funcionó
```bash
# En otra terminal:
git status
# Deberías ver: M config.json

git diff config.json
# Debería mostrar el cambio de festiveTheme
```

### 4. Guardar cambios a git
```bash
# Opción A: Scripts automáticos (más fácil)
pnpm config:push

# Opción B: Manual
git add config.json
git commit -m "chore: cambiar tema a valentine"
git push
```

### 5. Lanzar a producción
```bash
# Si estás en Vercel/Netlify/etc:
git push
# El hosting hará redeploy automático

# En siguiente carga, todos verán el nuevo tema
```

## 📁 Archivos Importantes

| Archivo | Propósito |
|---------|----------|
| `config.json` | Configuración central (temas, pop-ups) |
| `scripts/commit-config.js` | Auto-commit cambios (Node.js) |
| `scripts/commit-config.ps1` | Auto-commit cambios (PowerShell) |
| `.github/workflows/auto-commit-config.yml` | GitHub Actions auto-commit |
| `GLOBAL_SETTINGS_GUIDE.md` | Documentación completa |
| `IMPLEMENTACION_SETTINGS.md` | Detalles técnicos de cambios |

## 🔄 Workflows Disponibles

### Workflow 1: Desarrollo Local (Manual)
```
Admin actualiza → Guarda → pnpm config:push → Git push → Producción
```

### Workflow 2: GitHub Actions (Automático)
```
Admin actualiza → Guarda → GitHub Actions auto-commit → Producción
```

### Workflow 3: Edición Manual (Para emergencias)
```
Edita config.json directamente → Git push → Producción
```

## 🎨 Temas Disponibles

Todos estos se guardan y persisten globalmente:

| Tema | ID | Efectos Visuales |
|------|----|-----------------|
| Ninguno | `none` | Sin efectos especiales |
| San Valentín | `valentine` | Corazones flotantes, rosa |
| Navidad | `christmas` | Copos de nieve, azul |
| Halloween | `halloween` | Calabazas, naranja |
| Pascua | `easter` | Huevos coloridos, morado |
| Black Friday | `blackfriday` | Estrellas doradas |
| Verano | `summer` | Flores, rojo |
| Año Nuevo | `newyear` | Fuegos artificiales |
| San Patricio | `stpatricks` | Tréboles, verde |

## 🛠️ Scripts Disponibles

```json
{
  "config:commit": "Hace git commit de config.json (sin push)",
  "config:push": "Hace git commit + push (automático)"
}
```

```bash
# Uso:
pnpm config:commit    # Solo commit local
pnpm config:push      # Commit + push a remote
```

## ✅ Testing: Verificar que Todo Funciona

### Test 1: Cambio de tema persiste
```bash
# 1. Guarda un tema desde admin (ej: valentine)
# 2. Recarga la página → ¿Lo ves?
# 3. Commitea: pnpm config:push
# 4. Simula redeploy:
rm -rf .next && pnpm build && pnpm start
# 5. Recarga → ¿Todavía lo ves?
```

### Test 2: Pop-up festivo funciona
```bash
# 1. Activa Festive Popup en admin
# 2. Guarda settings
# 3. Recarga la página principal
# 4. Debería aparecer el pop-up
```

### Test 3: Auto-commit funciona
```bash
# 1. Guarda cambio desde admin
# 2. Ejecuta: pnpm config:push
# 3. Verifica: git log --oneline -1
# Debería ver: "chore: update global settings (theme: ...)"
```

## 🌍 Cómo Funciona en Producción

### Con GitHub Actions (Recomendado)
```
1. Admin en producción guarda tema
2. config.json se actualiza en servidor efímero
3. GitHub Actions detecta cambio cada X minutos
4. Auto-commitea y pushea
5. Tu hosting redeploy automático (opcional)
6. Todos ven nuevo tema
```

### Sin GitHub Actions (Manual)
```
1. Admin guarda tema en producción
2. config.json se actualiza temporalmente
3. TÚ ejecutas: pnpm config:push (en local)
4. Git push → hosting redeploy
5. Todos ven nuevo tema
```

## 📋 Checklist Primeros Pasos

- [ ] **Probé:** Guardar tema desde admin local
- [ ] **Verifiqué:** `config.json` cambió con `git status`
- [ ] **Confirmé:** Frontend carga el nuevo tema
- [ ] **Probé:** `pnpm config:push` commitea cambios
- [ ] **Pusheé:** Mi primer cambio: `git push`
- [ ] **Configuré:** GitHub Actions (si quiero automatizar)
- [ ] **Lanzé:** A producción y verifiqué que persiste

## 🆘 Problemas Comunes

### "config.json no cambió después de guardar"
```bash
# Verifica que el servidor está corriendo:
ps aux | grep node

# Verifica permisos de escritura:
ls -l config.json
```

### "pnpm config:push falla"
```bash
# Verifica que git está instalado:
git --version

# Verifica que tienes cambios:
git status
```

### "En producción no persiste"
**Causa:** El archivo `config.json` no está en el repositorio.
```bash
# Solución:
git add config.json
git commit -m "chore: add config.json to git"
git push
```

## 🎉 ¡Listo!

Ya tienes un sistema de configuración global que:
- ✅ Persiste entre redeploys
- ✅ Es fácil de editar (JSON simple)
- ✅ Se versiona en git (historial completo)
- ✅ Funciona en cualquier hosting
- ✅ Sin dependencias de MySQL

**Para Más Info:**
- 📖 [GLOBAL_SETTINGS_GUIDE.md](GLOBAL_SETTINGS_GUIDE.md) - Guía completa
- 🔧 [IMPLEMENTACION_SETTINGS.md](IMPLEMENTACION_SETTINGS.md) - Detalles técnicos
- ⚙️ [config.json](config.json) - Editar configuración directamente

---

**¿Dudas?** Simplemente edita `config.json` a mano y haz git push. Es un archivo JSON normal. 🎨
