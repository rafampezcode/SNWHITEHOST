# Conexión a la Base de Datos en un PC Nuevo

Guía para configurar la base de datos MySQL y evitar errores de carga al arrancar el proyecto en un PC nuevo.

---

## Requisitos Previos

| Herramienta | Versión mínima | Descarga |
|-------------|----------------|---------|
| Node.js     | 20+            | https://nodejs.org |
| pnpm        | 9+             | `npm install -g pnpm` |
| MySQL       | 8.0+           | https://dev.mysql.com/downloads/ |
| Git         | cualquiera     | https://git-scm.com |

> **Alternativa sin instalar MySQL:** usa Docker (ver sección al final).

---

## Paso 1 — Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd SNWHITEHOST
pnpm install
```

---

## Paso 2 — Crear el archivo `.env.local`

Copia el ejemplo y ajusta credenciales:

```bash
cp .env.example .env.local
```

Si prefieres crearlo manualmente, usa:

```env
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASSWORD=rootpassword
MYSQL_DATABASE=snwhitehost_admin
MYSQL_PORT=3306
MYSQL_SSL=false
```

> Cambia `MYSQL_PASSWORD` por la contraseña real de tu instalación de MySQL.

---

## Paso 3 — Crear la base de datos y las tablas

Abre tu cliente MySQL (terminal, MySQL Workbench, TablePlus, etc.) y ejecuta el script de inicialización:

```bash
mysql -u root -p < database/init.sql
```

Esto crea:
- La base de datos `snwhitehost_admin`
- La tabla `global_settings` (configuración del sitio)
- La tabla `site_content` (contenido CMS editable)
- Datos iniciales por defecto

### Si prefieres hacerlo desde Node:

```bash
pnpm db:migrate:content
```

---

## Paso 4 — (Opcional) Cargar contenido de demostración

Si quieres tener contenido de ejemplo en el CMS:

```bash
pnpm db:seed:content-demo
```

---

## Paso 5 — Arrancar el servidor

```bash
pnpm dev
```

Abre http://localhost:3000 — el sitio debe cargar sin errores.

---

## Verificar que la conexión funciona

Visita en el navegador:

```
http://localhost:3000/api/db/health
```

Debes ver `connected: true`.

También puedes probar contenido CMS:

```
http://localhost:3000/api/content?path=/hosting/shared
```

Si devuelve un error, revisa las credenciales en `.env.local`.

---

## Errores Comunes y Soluciones

### `ECONNREFUSED 127.0.0.1:3306`
MySQL no está corriendo. Arráncalo:
- **Windows:** Servicios → MySQL80 → Iniciar, o `net start MySQL80`
- **macOS:** `brew services start mysql`
- **Linux:** `sudo systemctl start mysql`

### `Access denied for user 'root'`
La contraseña en `.env.local` no coincide con la de MySQL. Corrígela o resetea la contraseña de MySQL.

### `Unknown database 'snwhitehost_admin'`
No se ha ejecutado el script de inicialización. Repite el **Paso 3**.

### `Table 'site_content' doesn't exist`
Solo se creó la BD pero no las tablas. Ejecuta:
```bash
mysql -u root -p snwhitehost_admin < database/init.sql
# o bien:
pnpm db:migrate:content
```

### El sitio carga pero el panel admin da error
Verifica que el archivo `.env.local` exista y tenga las 5 variables. El archivo no se sube a git por seguridad.

---

## Opción Alternativa — Docker (sin instalar MySQL)

Si tienes Docker Desktop instalado, una sola instrucción levanta MySQL + la app:

```bash
docker-compose up -d
```

Esto crea automáticamente la base de datos y arranca el servidor. Solo necesitas tener Docker Desktop corriendo.

Para ver logs:
```bash
docker-compose logs -f app
docker-compose logs -f db
```

Para detenerlo:
```bash
docker-compose down
```

> Los datos de MySQL persisten en el volumen `db_data` aunque apagues los contenedores.

---

## Lanzarla Online en el Futuro (Producción)

Cuando vayas a publicar la web online, estos son los pasos recomendados:

1. Crea una base de datos MySQL administrada (Railway, Aiven, PlanetScale, DigitalOcean, AWS RDS, etc.).
2. Carga el esquema inicial ejecutando `database/init.sql` en esa base de datos.
3. En tu hosting (Vercel, VPS, Docker, etc.) configura variables de entorno:

```env
MYSQL_HOST=tu-host-mysql
MYSQL_USER=tu-usuario
MYSQL_PASSWORD=tu-password
MYSQL_DATABASE=snwhitehost_admin
MYSQL_PORT=3306
MYSQL_SSL=true
MYSQL_SSL_REJECT_UNAUTHORIZED=true
```

4. Verifica conectividad desde producción con:
	- `/api/db/health` (debe devolver `connected: true`)
	- `/api/content?path=/hosting/shared`
5. Activa backups automáticos diarios y retención mínima de 7-14 días.
6. Restringe acceso a MySQL por red/IP (solo desde tu app o red privada).
7. Nunca subas `.env.local` al repositorio; usa solo variables del proveedor.

### Nota importante para Vercel

Si despliegas en Vercel, la base de datos debe ser externa (no local). Vercel no aloja MySQL dentro del proyecto.

---

## Resumen rápido (PC nuevo sin Docker)

```bash
git clone <repo> && cd SNWHITEHOST
pnpm install
# Crear .env.local con credenciales MySQL
mysql -u root -p < database/init.sql
pnpm dev
```
