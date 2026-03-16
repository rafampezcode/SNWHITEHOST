# CMS Admin Run Guide

## Objetivo
Levantar el proyecto y ver el nuevo sistema CMS conectado a base de datos para editar planes, apartados y precios.

## 1) Configurar entorno

1. Copia `.env.example` a `.env.local`.
2. Ajusta credenciales MySQL en `.env.local`.

Variables mínimas:

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=snwhitehost_admin
MYSQL_PORT=3306
```

## 2) Ejecutar todo en un solo comando (Windows PowerShell)

```powershell
./scripts/run-cms-demo.ps1 -MysqlHost localhost -MysqlUser root -MysqlPassword "" -MysqlDatabase snwhitehost_admin -MysqlPort 3306
```

Este comando hace:
- `pnpm install`
- `pnpm db:migrate:content`
- `pnpm db:seed:content-demo`
- `pnpm dev`

## 3) Verificar visualmente

1. Abre `http://localhost:3000/admin/login`
2. Login: `ADMIN` / `ADMIN`
3. Entra a `http://localhost:3000/admin/content`
4. Abre `http://localhost:3000/hosting/shared`

Debes ver contenido demo servido desde DB (título/subtítulo/planes distintos del hardcode).

## 4) Edición en vivo desde admin

1. En `/admin/content`, carga path `/hosting/shared`.
2. Modifica precios, textos o features en el JSON.
3. Guarda con `Guardar en DB`.
4. Refresca `/hosting/shared` y verás el cambio.

## 5) Comandos manuales (alternativa)

```powershell
pnpm install
pnpm db:migrate:content
pnpm db:seed:content-demo
pnpm dev
```

## Problemas comunes

- `connect ECONNREFUSED` o error de MySQL: la base de datos no está iniciada o credenciales incorrectas.
- `pnpm` no reconocido: instala pnpm globalmente.
- `eslint` no reconocido al hacer lint: instala dependencias con `pnpm install`.
