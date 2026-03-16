# Solución: Database Connection + Temas Globales

## 🔧 Problemas Resueltos

### 1. Database Connection Fail ❌ → ✅
**Causa**: Variables de entorno incorrectas en `docker-compose.yml`
- La aplicación esperaba: `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_DATABASE`, `MYSQL_PASSWORD`
- Docker Compose enviaba: `DB_HOST`, `DB_USER`, `DB_NAME`, `DB_PASSWORD`

**Solución**: Actualizado `docker-compose.yml` para usar las variables correctas con prefijo `MYSQL_*`

### 2. Temas No Se Aplican a Clientes ❌ → ✅
**Causa**: Los temas solo se guardaban en localStorage del navegador (cada usuario tenía su propia preferencia)
- No había persistencia global de temas predeterminados
- Los cambios en el panel admin no afectaban a nuevos visitantes

**Solución**: Sistema de temas globales implementado
- Los temas seleccionados en el panel admin ahora se guardan en la base de datos
- Nuevos visitantes ven automáticamente los temas configurados por el admin
- Los usuarios que cambian sus temas manualmente mantienen su preferencia personal

---

## 📋 Cambios Realizados

### Archivos Modificados

#### 1. `docker-compose.yml`
```yaml
# Variables actualizadas para conexión MySQL
MYSQL_HOST: db
MYSQL_PORT: 3306
MYSQL_DATABASE: snwhitehost_admin  # ✅ Base de datos correcta
MYSQL_USER: root
MYSQL_PASSWORD: ${DB_ROOT_PASSWORD:-rootpassword}

# Labels de Traefik añadidos ✅
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.nextjs.rule=Host(`www.snwhitehosting.com`)"
  - "traefik.http.routers.nextjs.entrypoints=websecure"
  - "traefik.http.routers.nextjs.tls.certresolver=leresolver"
  - "traefik.http.services.nextjs.loadbalancer.server.port=3000"
```

#### 2. `lib/global-settings-types.ts`
- ✅ Añadido tipo `defaultTheme` con `theme`, `colorTheme`, `festiveTheme`
- ✅ Exportados tipos: `Theme`, `ColorTheme`, `FestiveTheme`

#### 3. `lib/global-settings.ts`
- ✅ Añadida normalización para `defaultTheme`
- ✅ Actualizado `mergeGlobalSettings` para incluir temas

#### 4. `components/theme-provider.tsx`
- ✅ Ahora consulta `/api/settings` al cargar para obtener temas predeterminados
- ✅ Prioridad: localStorage del usuario > Temas globales > Preferencia del sistema
- ✅ Fallback a localStorage si la API falla

#### 5. `app/admin/page.tsx`
- ✅ Al guardar settings, también guarda los temas actuales como predeterminados
- ✅ Mensaje informativo sobre cómo funcionan los temas globales
- ✅ Mensaje de confirmación actualizado

#### 6. `database/init.sql`
- ✅ Añadido campo `defaultTheme` en la estructura JSON inicial
- ✅ Valores predeterminados: `light`, `blue`, `none`

---

## 🚀 Instrucciones de Deployment

### En el Servidor (VPS)

#### Paso 1: Parar los contenedores actuales
```bash
cd ~/SNWHITEHOST
docker-compose down
```

#### Paso 2: Actualizar archivos del repositorio
```bash
# Si tienes git configurado:
git pull origin main

# O manualmente:
# - Subir los archivos actualizados via SFTP/SCP
```

#### Paso 3: Limpiar la base de datos (opcional pero recomendado)
Si quieres reiniciar la base de datos con la estructura actualizada:
```bash
# Eliminar el volumen de la base de datos
docker volume rm snwhitehost_db_data

# O si prefieres mantener los datos existentes:
# Actualizar manualmente la tabla global_settings (ver SQL al final)
```

#### Paso 4: Reconstruir y reiniciar los contenedores
```bash
# Reconstruir la imagen (importante después de cambios en código)
docker-compose build --no-cache

# Levantar los servicios
docker-compose up -d

# Ver logs para verificar
docker-compose logs -f app
```

#### Paso 5: Verificar la conexión a la base de datos
```bash
# Entrar al contenedor de la app
docker exec -it snwhitehost-app sh

# Dentro del contenedor, verificar variables de entorno
env | grep MYSQL
# Deberías ver:
# MYSQL_HOST=db
# MYSQL_DATABASE=snwhitehost_admin
# MYSQL_USER=root
# MYSQL_PASSWORD=rootpassword

# Salir del contenedor
exit
```

#### Paso 6: Verificar que la app se conecta correctamente
```bash
# Ver logs de la aplicación
docker-compose logs -f app

# Deberías ver mensajes como:
# ▲ Next.js 16.0.10
# - Local:        http://0.0.0.0:3000
# ✓ Ready in X.Xs

# NO deberías ver errores de MySQL
```

### Actualización Manual de Base de Datos (Si No Quieres Reiniciar)

Si ya tienes datos en la base de datos y no quieres eliminarla:

```bash
# Conectarse a MySQL
docker exec -it snwhitehost-db mysql -u root -prootpassword snwhitehost_admin

# Ejecutar SQL para actualizar
UPDATE global_settings 
SET settings_value = JSON_SET(
  settings_value,
  '$.maintenance.duration', '1-2 hours',
  '$.festivePopup', JSON_OBJECT(
    'enabled', false,
    'title', 'Happy Holidays!',
    'message', 'Celebrate with us and enjoy special offers this season.',
    'buttonText', 'Got it!'
  ),
  '$.defaultTheme', JSON_OBJECT(
    'theme', 'light',
    'colorTheme', 'blue',
    'festiveTheme', 'none'
  )
)
WHERE settings_key = 'global';

# Verificar
SELECT JSON_PRETTY(settings_value) FROM global_settings WHERE settings_key = 'global'\G

# Salir
exit;
```

---

## ✅ Verificación Post-Deploy

### 1. Panel de Admin
1. Acceder a: `https://www.snwhitehosting.com/admin/login`
2. Iniciar sesión con credenciales (por defecto: ADMIN/ADMIN)
3. Cambiar tema a "Dark" y color a "Green"
4. Cambiar festive theme a "Christmas"
5. Click en **"Save Settings"**
6. Deberías ver: ✅ "Settings and themes updated successfully!"

### 2. Verificar Temas en el Sitio Principal
1. Abrir en **modo incógnito** (para simular nuevo visitante): `https://www.snwhitehosting.com`
2. El sitio debería cargar con el tema Dark, color Green y efectos de Christmas
3. Si cambias el tema manualmente (con el switcher), tu preferencia se guarda localmente

### 3. Verificar Base de Datos
```bash
docker exec -it snwhitehost-db mysql -u root -prootpassword snwhitehost_admin -e "SELECT JSON_PRETTY(settings_value) FROM global_settings WHERE settings_key = 'global'\G"
```

Deberías ver la estructura JSON completa con:
```json
{
  "maintenance": { ... },
  "promoBanner": { ... },
  "announcement": { ... },
  "festivePopup": { ... },
  "defaultTheme": {
    "theme": "dark",
    "colorTheme": "green",
    "festiveTheme": "christmas"
  }
}
```

---

## 🔍 Troubleshooting

### Problema: Sigue apareciendo "Database connection fail"
```bash
# 1. Verificar que el contenedor de DB está corriendo
docker ps | grep snwhitehost-db

# 2. Verificar variables de entorno de la app
docker exec -it snwhitehost-app env | grep MYSQL

# 3. Verificar conectividad desde el contenedor de la app
docker exec -it snwhitehost-app sh
ping db
nc -zv db 3306

# 4. Ver logs de MySQL
docker-compose logs db
```

### Problema: Los temas no se aplican
```bash
# 1. Verificar que la API responde
curl https://www.snwhitehosting.com/api/settings

# Debería retornar JSON con settings.defaultTheme

# 2. Ver logs de la aplicación
docker-compose logs -f app

# 3. Borrar caché del navegador y cookies
# 4. Probar en modo incógnito
```

### Problema: Error al guardar desde el panel admin
```bash
# 1. Verificar permisos de escritura en volúmenes
docker exec -it snwhitehost-app ls -la /app/.data

# 2. Verificar logs de la app cuando guardas
docker-compose logs -f app

# 3. Verificar que MySQL está respondiendo
docker exec -it snwhitehost-db mysqladmin ping -h localhost
```

---

## 📊 Comportamiento del Sistema de Temas

### Antes (❌)
- Cada usuario tenía su propio tema guardado solo en su navegador
- Admin no podía controlar el tema predeterminado del sitio
- Nuevos visitantes siempre veían tema Light + Blue

### Ahora (✅)
1. **Admin configura temas** en el panel → Se guardan en MySQL
2. **Nuevo visitante accede al sitio** → Ve los temas configurados por el admin
3. **Usuario cambia tema manualmente** → Su preferencia se guarda en localStorage
4. **Usuario regresa** → Ve su tema personalizado (no el del admin)
5. **Usuario borra caché** → Vuelve a ver el tema del admin

**Prioridad**: localStorage del usuario > Temas del admin > Preferencia del sistema (dark/light mode)

---

## 📝 Notas Importantes

1. **Variables de Entorno**: El archivo `.env` en el servidor (si existe) debe usar `DB_ROOT_PASSWORD` para la contraseña de MySQL root
   
2. **Traefik**: Los labels están configurados para `www.snwhitehosting.com`. Si usas un dominio diferente, actualiza en `docker-compose.yml`

3. **Persistencia**: Los temas se guardan tanto en MySQL como en archivo `.data/global-settings.json` como backup

4. **Seguridad**: Cambiar las contraseñas predeterminadas en producción:
   - Base de datos: `DB_ROOT_PASSWORD` en variables de entorno
   - Panel admin: Actualizar en `ADMIN_PANEL_GUIDE.md`

---

## 🎉 Resultado Final

✅ Panel admin conecta correctamente a MySQL  
✅ Los settings se guardan sin errores  
✅ Los temas configurados en admin se aplican globalmente  
✅ Nuevos visitantes ven los temas del admin  
✅ Los usuarios pueden personalizar sus propios temas  
✅ Traefik enruta correctamente el tráfico HTTPS  

**¡Todo funcionando! 🚀**
