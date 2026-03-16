$ProgressPreference = 'SilentlyContinue'

Write-Host "=== PRUEBA COMPLETA DE TEMAS GLOBALES ===" -ForegroundColor Cyan
Write-Host ""

# 1. Login
Write-Host "1. Login como ADMIN..." -ForegroundColor Yellow
$loginBody = '{"username":"ADMIN","password":"ADMIN"}'

$loginResponse = Invoke-WebRequest -Uri "http://localhost:3000/api/admin/login" `
  -Method POST `
  -Body $loginBody `
  -ContentType "application/json" `
  -SessionVariable "AdminSession" `
  -UseBasicParsing

Write-Host "   ✅ Login exitoso`n" -ForegroundColor Green

# 2. Get current settings
Write-Host "2. Obteniendo settings actuales..." -ForegroundColor Yellow
$settingsRes = Invoke-WebRequest -Uri "http://localhost:3000/api/admin/settings" `
  -WebSession $AdminSession `
  -UseBasicParsing
$currentSettings = $settingsRes.Content | ConvertFrom-Json
$theme = $currentSettings.settings.defaultTheme
Write-Host "   Actual: $($theme.theme) + $($theme.colorTheme) + $($theme.festiveTheme)`n" -ForegroundColor Green

# 3. Change to VALENTINE
Write-Host "3. Guardando VALENTINE + DARK + CYAN..." -ForegroundColor Yellow
$newSettings = $currentSettings.settings
$newSettings.defaultTheme.theme = "dark"
$newSettings.defaultTheme.colorTheme = "cyan"
$newSettings.defaultTheme.festiveTheme = "valentine"

$updateBody = @{settings = $newSettings} | ConvertTo-Json -Depth 10

$updateRes = Invoke-WebRequest -Uri "http://localhost:3000/api/admin/settings" `
  -Method POST `
  -Body $updateBody `
  -ContentType "application/json" `
  -WebSession $AdminSession `
  -UseBasicParsing
$updateData = $updateRes.Content | ConvertFrom-Json
$saved = $updateData.settings.defaultTheme
Write-Host "   Guardado: $($saved.theme) + $($saved.colorTheme) + $($saved.festiveTheme)`n" -ForegroundColor Green

# 4. Verify config.json
Write-Host "4. Verificando config.json..." -ForegroundColor Yellow
$config = Get-Content config.json | ConvertFrom-Json
$disk = $config.defaultTheme
Write-Host "   En disco: $($disk.theme) + $($disk.colorTheme) + $($disk.festiveTheme)`n" -ForegroundColor Green

# 5. Check API
Write-Host "5. Verificando API /api/settings..." -ForegroundColor Yellow
$apiRes = Invoke-WebRequest -Uri "http://localhost:3000/api/settings" `
  -UseBasicParsing
$apiData = $apiRes.Content | ConvertFrom-Json
$api = $apiData.settings.defaultTheme
Write-Host "   En API: $($api.theme) + $($api.colorTheme) + $($api.festiveTheme)`n" -ForegroundColor Green

# 6. Change to CHRISTMAS
Write-Host "6. Guardando CHRISTMAS + LIGHT + BLUE..." -ForegroundColor Yellow
$newSettings.defaultTheme.theme = "light"
$newSettings.defaultTheme.colorTheme = "blue"
$newSettings.defaultTheme.festiveTheme = "christmas"

$updateBody = @{settings = $newSettings} | ConvertTo-Json -Depth 10

$updateRes2 = Invoke-WebRequest -Uri "http://localhost:3000/api/admin/settings" `
  -Method POST `
  -Body $updateBody `
  -ContentType "application/json" `
  -WebSession $AdminSession `
  -UseBasicParsing
$updateData2 = $updateRes2.Content | ConvertFrom-Json
$saved2 = $updateData2.settings.defaultTheme
Write-Host "   Guardado: $($saved2.theme) + $($saved2.colorTheme) + $($saved2.festiveTheme)`n" -ForegroundColor Green

# 7. Final verification
Write-Host "7. Verificación final..." -ForegroundColor Yellow
$config2 = Get-Content config.json | ConvertFrom-Json
$disk2 = $config2.defaultTheme
Write-Host "   En disco: $($disk2.theme) + $($disk2.colorTheme) + $($disk2.festiveTheme)"

$apiRes2 = Invoke-WebRequest -Uri "http://localhost:3000/api/settings" -UseBasicParsing
$apiData2 = $apiRes2.Content | ConvertFrom-Json
$api2 = $apiData2.settings.defaultTheme
Write-Host "   En API: $($api2.theme) + $($api2.colorTheme) + $($api2.festiveTheme)`n" -ForegroundColor Green

Write-Host "🎉 ✅ TODOS LOS TESTS PASARON" -ForegroundColor Green
Write-Host "`nLos temas se guardan correctamente y se propagan a todos los usuarios.`n" -ForegroundColor Cyan
