param(
  [string]$MysqlHost = "localhost",
  [string]$MysqlUser = "root",
  [string]$MysqlPassword = "",
  [string]$MysqlDatabase = "snwhitehost_admin",
  [int]$MysqlPort = 3306
)

$ErrorActionPreference = "Stop"

Write-Host "[1/5] Verificando dependencias..." -ForegroundColor Cyan

if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  throw "pnpm no está instalado. Instálalo y vuelve a ejecutar este script."
}

Write-Host "[2/5] Instalando dependencias..." -ForegroundColor Cyan
pnpm install

Write-Host "[3/5] Configurando variables de entorno MySQL..." -ForegroundColor Cyan
$env:MYSQL_HOST = $MysqlHost
$env:MYSQL_USER = $MysqlUser
$env:MYSQL_PASSWORD = $MysqlPassword
$env:MYSQL_DATABASE = $MysqlDatabase
$env:MYSQL_PORT = "$MysqlPort"

Write-Host "[4/5] Ejecutando migración CMS y seed demo..." -ForegroundColor Cyan
pnpm db:migrate:content
pnpm db:seed:content-demo

Write-Host "[5/5] Iniciando servidor de desarrollo..." -ForegroundColor Cyan
Write-Host "Admin login: ADMIN / ADMIN" -ForegroundColor Yellow
Write-Host "Abrir: http://localhost:3000/admin/content y http://localhost:3000/hosting/shared" -ForegroundColor Yellow

pnpm dev
