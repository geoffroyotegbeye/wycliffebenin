# Script PowerShell pour créer des versions responsive des images
# Crée des versions small, medium, large de chaque image

Write-Host "=== Optimisation des images pour responsive ===" -ForegroundColor Cyan
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

# Vérifier si ImageMagick est installé (pour le redimensionnement)
$magickPath = Get-Command magick -ErrorAction SilentlyContinue

if (-not $magickPath) {
    Write-Host "AVERTISSEMENT: ImageMagick n'est pas installé!" -ForegroundColor Yellow
    Write-Host "Le script utilisera seulement cwebp (pas de redimensionnement)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Pour installer ImageMagick:" -ForegroundColor Yellow
    Write-Host "1. Téléchargez depuis: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    Write-Host "2. Ou installez via Chocolatey: choco install imagemagick" -ForegroundColor Yellow
    Write-Host ""
    $useResize = $false
} else {
    $useResize = $true
}

# Dossier des images
$imagesDir = "public/images"

if (-not (Test-Path $imagesDir)) {
    Write-Host "ERREUR: Le dossier $imagesDir n'existe pas!" -ForegroundColor Red
    exit 1
}

# Tailles responsive
$sizes = @{
    "small" = 640   # Mobile
    "medium" = 1024 # Tablette
    "large" = 1920  # Desktop
}

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

Write-Host "Traitement des images..." -ForegroundColor Cyan
Write-Host ""

$totalFiles = 0
$totalCreated = 0

# Parcourir tous les fichiers WebP
Get-ChildItem -Path $imagesDir -Filter "*.webp" -Recurse | ForEach-Object {
    $file = $_
    $totalFiles++
    
    # Ignorer les fichiers déjà redimensionnés
    if ($file.Name -match "-(small|medium|large)\.webp$") {
        return
    }
    
    Write-Host "Traitement: $($file.Name)" -ForegroundColor White
    
    $baseName = $file.BaseName
    $directory = $file.DirectoryName
    
    if ($useResize) {
        # Créer les versions responsive
        foreach ($sizeName in $sizes.Keys) {
            $width = $sizes[$sizeName]
            $outputFile = Join-Path $directory "$baseName-$sizeName.webp"
            
            if (-not (Test-Path $outputFile)) {
                Write-Host "  Création: $sizeName ($width px)" -NoNewline
                
                # Redimensionner avec ImageMagick puis compresser avec cwebp
                $tempPng = "$($file.FullName).temp.png"
                
                # Redimensionner
                & magick "$($file.FullName)" -resize "${width}x>" "$tempPng" 2>&1 | Out-Null
                
                if (Test-Path $tempPng) {
                    # Compresser en WebP
                    & cwebp -q 80 -m 6 -mt "$tempPng" -o "$outputFile" 2>&1 | Out-Null
                    
                    if (Test-Path $outputFile) {
                        $size = (Get-Item $outputFile).Length
                        Write-Host " - $(Format-FileSize $size)" -ForegroundColor Green
                        $totalCreated++
                    } else {
                        Write-Host " - ERREUR" -ForegroundColor Red
                    }
                    
                    # Supprimer le fichier temporaire
                    Remove-Item $tempPng -Force -ErrorAction SilentlyContinue
                } else {
                    Write-Host " - ERREUR (redimensionnement)" -ForegroundColor Red
                }
            } else {
                Write-Host "  $sizeName existe déjà" -ForegroundColor Gray
            }
        }
    } else {
        Write-Host "  Compression uniquement (pas de redimensionnement)" -ForegroundColor Yellow
        
        # Juste compresser l'image originale
        $tempFile = "$($file.FullName).temp.webp"
        & cwebp -q 80 -m 6 -mt "$($file.FullName)" -o "$tempFile" 2>&1 | Out-Null
        
        if (Test-Path $tempFile) {
            $sizeBefore = $file.Length
            $sizeAfter = (Get-Item $tempFile).Length
            
            if ($sizeAfter -lt $sizeBefore) {
                Move-Item -Path $tempFile -Destination $file.FullName -Force
                $reduction = [math]::Round((($sizeBefore - $sizeAfter) / $sizeBefore) * 100, 2)
                Write-Host "  Réduit de $reduction%" -ForegroundColor Green
            } else {
                Remove-Item $tempFile -Force
                Write-Host "  Déjà optimisé" -ForegroundColor Gray
            }
        }
    }
    
    Write-Host ""
}

# Résumé
Write-Host "=== Résumé ===" -ForegroundColor Cyan
Write-Host "Fichiers traités: $totalFiles" -ForegroundColor White

if ($useResize) {
    Write-Host "Versions responsive créées: $totalCreated" -ForegroundColor Green
    Write-Host ""
    Write-Host "Utilisation dans le code:" -ForegroundColor Yellow
    Write-Host '  <LazyImage' -ForegroundColor Gray
    Write-Host '    src="/images/hero.webp"' -ForegroundColor Gray
    Write-Host '    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"' -ForegroundColor Gray
    Write-Host '  />' -ForegroundColor Gray
}

Write-Host ""
Write-Host "Terminé!" -ForegroundColor Green
