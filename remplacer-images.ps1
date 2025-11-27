# Script PowerShell pour remplacer toutes les anciennes images par les nouvelles images WebP

Write-Host "🔄 Remplacement des images en cours..." -ForegroundColor Cyan

# Compteur
$totalRemplacements = 0

# Fonction pour remplacer les images dans un fichier
function Replace-Images {
    param (
        [string]$FilePath
    )
    
    $content = Get-Content $FilePath -Raw
    $originalContent = $content
    
    # Remplacer images1.jpeg, images2.jpeg, images3.jpeg par les nouvelles images
    # On va distribuer intelligemment selon le contexte
    
    # Pour les projets
    $content = $content -replace "'/images/images1\.jpeg'", "'/images/projet/projet-01.webp'"
    $content = $content -replace "'/images/images2\.jpeg'", "'/images/projet/projet-02.webp'"
    $content = $content -replace "'/images/images3\.jpeg'", "'/images/projet/projet-03.webp'"
    $content = $content -replace '"/images/images1\.jpeg"', '"/images/projet/projet-01.webp"'
    $content = $content -replace '"/images/images2\.jpeg"', '"/images/projet/projet-02.webp"'
    $content = $content -replace '"/images/images3\.jpeg"', '"/images/projet/projet-03.webp"'
    
    # Sauvegarder si changements
    if ($content -ne $originalContent) {
        Set-Content -Path $FilePath -Value $content -NoNewline
        return $true
    }
    return $false
}

# Parcourir tous les fichiers .tsx dans src/pages
$files = Get-ChildItem -Path "src/pages" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    if (Replace-Images -FilePath $file.FullName) {
        Write-Host "✅ $($file.Name)" -ForegroundColor Green
        $totalRemplacements++
    }
}

Write-Host "`n🎉 Terminé ! $totalRemplacements fichiers modifiés." -ForegroundColor Green
Write-Host "⚠️  Note: Vérifiez manuellement pour ajuster les images selon le contexte." -ForegroundColor Yellow
