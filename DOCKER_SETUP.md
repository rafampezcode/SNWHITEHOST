# Docker Setup para SNWHITEHOST

## Archivos Creados

- **Dockerfile**: Configuración multi-stage de Docker para la aplicación Next.js
- **docker-compose.yml**: Orquestación de servicios (Next.js + MySQL)
- **.env.docker**: Variables de entorno para Docker
- **.dockerignore**: Archivos a ignorar en la imagen Docker

## Requisitos Previos

- Docker y Docker Compose instalados
- En Windows: Docker Desktop con WSL 2

## Instrucciones de Uso

### 1. Construir y Levantar los Servicios

```bash
# Construir las imágenes y levantar los contenedores
docker-compose up --build

# En modo detached (background)
docker-compose up -d --build
```

### 2. Ver Logs

```bash
# Todos los servicios
docker-compose logs -f

# Solo la aplicación
docker-compose logs -f app

# Solo la base de datos
docker-compose logs -f db
```

### 3. Acceder a la Aplicación

- **URL**: http://localhost:3000
- **Base de datos**: localhost:3306

### 4. Ejecutar Comandos en el Contenedor

```bash
# Conectarse a la aplicación
docker-compose exec app sh

# Ejecutar linting
docker-compose exec app pnpm lint

# Conectarse a MySQL
docker-compose exec db mysql -u user -p snwhitehost
```

### 5. Detener los Servicios

```bash
# Parar sin eliminar
docker-compose stop

# Parar y eliminar contenedores
docker-compose down

# Eliminar todo incluyendo volúmenes
docker-compose down -v
```

## Variables de Entorno

Puedes personalizar las variables en el archivo `docker-compose.yml` o crear un archivo `.env`:

```env
DB_ROOT_PASSWORD=tu_password_root
DB_NAME=tu_base_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_password
```

## Estructura de Servicios

### App (Next.js)
- Puerto: 3000
- Build: Multi-stage
- Volúmenes: Carpetas del proyecto para desarrollo

### DB (MySQL 8.0)
- Puerto: 3306
- Volumen: `db_data` (persistencia)
- Health Check: Automático

## Troubleshooting

### Puerto 3000 ya está en uso
```bash
docker-compose down  # Detener contenedores previos
```

### Base de datos no se conecta
```bash
# Verificar estado del contenedor
docker-compose ps

# Ver logs de la BD
docker-compose logs db
```

### Reconstruir a partir de cero
```bash
docker-compose down -v
docker-compose up --build
```

## Notas

- La base de datos se inicializa automáticamente con `database/init.sql`
- Los volúmenes de código permiten hot-reload durante desarrollo
- En producción, eliminar los volúmenes de desarrollo
