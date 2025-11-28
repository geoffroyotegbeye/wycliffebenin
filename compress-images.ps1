# Script PowerShell pour compresser les images WebP
# Nécessite cwebp (Google WebP tools)

Write-Host "=== Compression des images WebP ===" -ForegroundColor Cyan
Write-Host ""

# Vérifier si cwebp est installé
$cwebpPath = Get-Command cwebp -ErrorAction SilentlyContinue

if (-not $cwebpPath) {
    Write-Host "ERREUR: cwebp n'est pas installé!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Pour installer cwebp:" -ForegroundColor Yellow
    Write-Host "1. Téléchargez depuis: https://developers.google.com/speed/webp/download" -ForegroundColor Yellow
    Write-Host "2. Ou installez via Chocolatey: choco install webp" -ForegroundColor Yellow
    Write-Host "3. Ou via Scoop: scoop install libwebp" -ForegroundColor Yellow
    exit 1
}

# Dossier des images
$imagesDir = "public/images"

if (-not (Test-Path $imagesDir)) {
    Write-Host "ERREUR: Le dossier $imagesDir n'existe pas!" -ForegroundColor Red
    exit 1
}

# Créer un dossier de backup
$backupDir = "public/images_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
Write-Host "Création du backup dans: $backupDir" -ForegroundColor Yellow
Copy-Item -Path $imagesDir -Destination $backupDir -Recurse

# Compteurs
$totalFiles = 0
$compressedFiles = 0
$totalSizeBefore = 0
$totalSizeAfter = 0

# Fonction pour formater la taille
function Format-FileSize {
    param([long]$size)
    if ($size -gt 1MB) {
        return "{0:N2} MB" -f ($size / 1MB)
    } elseif ($size -gt 1KB) {
        return "{0:N2} KB" -f ($size / 1KB)
    } else {
        return "$size bytes"
    }
}

Write-Host ""
Write-Host "Compression des images WebP..." -ForegroundColor Cyan
Write-Host "Qualité: 80 (bon compromis qualité/taille)" -ForegroundColor Gray
Write-Host ""

# Parcourir tous les fichiers WebP
Get-ChildItem -Path $imagesDir -Filter "*.webp" -Recurse | ForEach-Object {
    $totalFiles++
    $file = $_
    $sizeBefore = $file.Length
    $totalSizeBefore += $sizeBefore
    
    # Créer un fichier temporaire
    $tempFile = "$($file.FullName).temp.webp"
    
    Write-Host "Compression: $($file.Name)" -NoNewline
    
    # Compresser avec cwebp
    # -q 80 : qualité 80 (0-100, 80 est un bon compromis)
    # -m 6 : méthode de compression 6 (0-6, 6 est la plus lente mais meilleure compression)
    # -mt : utiliser multi-threading
    $result = & cwebp -q 80 -m 6 -mt "$($file.FullName)" -o "$tempFile" 2>&1
    
    if (Test-Path $tempFile) {
        $sizeAfter = (Get-Item $tempFile).Length
        $totalSizeAfter += $sizeAfter
        
        # Remplacer l'original seulement si la nouvelle version est plus petite
        if ($sizeAfter -lt $sizeBefore) {
            Move-Item -Path $tempFile -Destination $file.FullName -Force
            $reduction = [math]::Round((($sizeBefore - $sizeAfter) / $sizeBefore) * 100, 2)
            Write-Host " - Réduit de $reduction% ($(Format-FileSize $sizeBefore) -> $(Format-FileSize $sizeAfter))" -ForegroundColor Green
            $compressedFiles++
        } else {
            Remove-Item $tempFile -Force
            Write-Host " - Déjà optimisé" -ForegroundColor Gray
        }
    } else {
        Write-Host " - ERREUR" -ForegroundColor Red
    }
}

# Résumé
Write-Host ""
Write-Host "=== Résumé ===" -ForegroundColor Cyan
Write-Host "Fichiers traités: $totalFiles" -ForegroundColor White
Write-Host "Fichiers compressés: $compressedFiles" -ForegroundColor Green
Write-Host "Taille avant: $(Format-FileSize $totalSizeBefore)" -ForegroundColor White
Write-Host "Taille après: $(Format-FileSize $totalSizeAfter)" -ForegroundColor White

if ($totalSizeBefore -gt 0) {
    $totalReduction = [math]::Round((($totalSizeBefore - $totalSizeAfter) / $totalSizeBefore) * 100, 2)
    $savedSpace = $totalSizeBefore - $totalSizeAfter
    Write-Host "Réduction totale: $totalReduction% ($(Format-FileSize $savedSpace) économisés)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Backup créé dans: $backupDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "Terminé!" -ForegroundColor Green
