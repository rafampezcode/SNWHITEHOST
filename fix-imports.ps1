$filesToCheck = @(
    "app/affiliate-program-agreement/page.tsx",
    "app/affiliate-program-partners/page.tsx",
    "app/referral-program-agreement/page.tsx",
    "app/brand-guidelines-and-permissions/page.tsx",
    "app/registrar-information/page.tsx",
    "app/dsa-transparency-report/page.tsx",
    "app/company-policies-overview/page.tsx",
    "app/expired-domain-recovery-policy/page.tsx",
    "app/tld-registration-policy/page.tsx",
    "app/trademark-and-copyright-policy/page.tsx",
    "app/service-level-agreement/page.tsx",
    "app/hosting-agreement/page.tsx",
    "app/domain-name-transfer-agreement/page.tsx",
    "app/data-processing-addendum/page.tsx"
)

foreach ($file in $filesToCheck) {
    if (-Not (Test-Path $file)) {
        continue
    }
    
    $content = Get-Content $file -Raw
    
    # Arreglar imports con backtick incorrecto
    $content = $content -replace '`nimport', "`nimport"
    $content = $content -replace 'header"`nimport', 'header"`n`nimport'
    $content = $content -replace "header\"\`nimport", "header\"`nimport"
    
    # Arreglar imports concatenados sin saltos de línea
    $content = $content -replace 'footer"import \{ useLanguage', 'footer"`nimport { useLanguage'
    
    Set-Content $file $content -NoNewline
    Write-Host "✓ Verificado: $file"
}

Write-Host "Listo!"
