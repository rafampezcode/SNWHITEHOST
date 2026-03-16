# Windows PowerShell script to auto-commit config changes
# Usage: PowerShell -ExecutionPolicy Bypass -File scripts\commit-config.ps1 [-Push]

param(
    [switch]$Push
)

$configFile = "config.json"
$hasChanges = -not (git status --porcelain $configFile | Select-String -Quiet "^")

if (-not $hasChanges) {
    Write-Host "✓ No changes to config.json" -ForegroundColor Green
    exit 0
}

# Read current config to get theme info
try {
    $config = Get-Content $configFile -Raw | ConvertFrom-Json
    $theme = $config.defaultTheme.festiveTheme
} catch {
    $theme = "unknown"
}

try {
    git add $configFile
    git commit -m "chore: update global settings (theme: $theme)"
    Write-Host "✓ Committed config.json (theme: $theme)" -ForegroundColor Green

    if ($Push) {
        git push
        Write-Host "✓ Pushed to remote" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Run with -Push parameter to automatically push to remote" -ForegroundColor Cyan
    }
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
    exit 1
}
