# Script pour remplacer TOUTES les anciennes images par les nouvelles WebP

Write-Host "🔍 Recherche de toutes les anciennes images..." -ForegroundColor Cyan
Write-Host ""

# Compteurs pour distribuer les images
$compteurs = @{
    'projet' = 1
    'equipe' = 1
    'communaute' = 1
    'temoignage' = 1
    'hero' = 1
}

# Limites
$limites = @{
    'projet' = 15
    'equipe' = 5
    'communaute' = 15
    'temoignage' = 10
    'hero' = 12
}

# Catégories par page
$pageCategories = @{
    'Accueil.tsx' = 'projet'
    'Vision.tsx' = 'communaute'
    'Alphabetisation.tsx' = 'communaute'
    'PourquoiTraduire.tsx' = 'projet'
    'AdministrationGenerale.tsx' = 'equipe'
    'ConseilAdministration.tsx' = 'equipe'
    'EngagezVous.tsx' = 'communaute'
    'Statistiques.tsx' = 'projet'
    'Actualites.tsx' = 'communaute'
    'TemoignageTransformation.tsx' = 'temoignage'
    'TemoignageTraduction.tsx' = 'temoignage'
    'TemoignageAlphabetisation.tsx' = 'temoignage'
    'TemoignagePartenaires.tsx' = 'temoignage'
    'Services.tsx' = 'projet'
    'Partenariat.tsx' = 'communaute'
    'Contact.tsx' = 'communaute'
    'Historique.tsx' = 'communaute'
    'TransformationCommunautaire.tsx' = 'communaute'
    'TraductionAlogbe.tsx' = 'projet'
    'TraductionEcrite.tsx' = 'projet'
    'TraductionOrale.tsx' = 'projet'
    'TraductionVisuelle.tsx' = 'projet'
    'ProjetJesusFilm.tsx' = 'projet'
    'Cartographie.tsx' = 'communaute'
    'Intercedez.tsx' = 'communaute'
    'ChainePriere.tsx' = 'communaute'
    'Donnez.tsx' = 'communaute'
    'NosRdv.tsx' = 'communaute'
    'NosFormations.tsx' = 'communaute'
    'Recrutement.tsx' = 'equipe'
    'Boutique.tsx' = 'projet'
    'Booking.tsx' = 'communaute'
    'BlogAlogbe.tsx' = 'communaute'
    'MissionsExterieur.tsx' = 'communaute'
    'VieCommunautes.tsx' = 'communaute'
    'ZoomWycliffe.tsx' = 'communaute'
}

function Get-ProchainImage {
    param([string]$Categorie)
    
    $num = $compteurs[$Categorie]
    $image = "/images/$Categorie/$Categorie-{0:D2}.webp" -f $num
    
    $compteurs[$Categorie]++
    if ($compteurs[$Categorie] > $limites[$Categorie]) {
        $compteurs[$Categorie] = 1
    }
    
    return $image
}

$totalFichiers = 0
$totalRemplacements = 0

# Parcourir TOUS les fichiers .tsx
$fichiers = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse

foreach ($fichier in $fichiers) {
    $contenu = Get-Content $fichier.FullName -Raw -Encoding UTF8
    $contenuOriginal = $contenu
    $modifie = $false
    
    # Déterminer la catégorie
    $categorie = 'projet'
    if ($pageCategories.ContainsKey($fichier.Name)) {
        $categorie = $pageCategories[$fichier.Name]
    }
    
    # Patterns à remplacer (anciennes images)
    $patterns = @(
        '/images/images\.jpeg',
        '/images/images1\.jpeg',
        '/images/images2\.jpeg',
        '/images/images3\.jpeg',
        '/images/images \(3\)\.jpeg'
    )
    
    $compteurLocal = 0
    
    foreach ($pattern in $patterns) {
        # Chercher avec guillemets simples
        while ($contenu -match "'$pattern'") {
            $nouvelleImage = Get-ProchainImage -Categorie $categorie
            $contenu = $contenu -replace "'$pattern'", "'$nouvelleImage'"
            $compteurLocal++
            $totalRemplacements++
            $modifie = $true
        }
        
        # Chercher avec guillemets doubles
        while ($contenu -match "`"$pattern`"") {
            $nouvelleImage = Get-ProchainImage -Categorie $categorie
            $contenu = $contenu -replace "`"$pattern`"", "`"$nouvelleImage`""
            $compteurLocal++
            $totalRemplacements++
            $modifie = $true
        }
    }
    
    if ($modifie) {
        Set-Content -Path $fichier.FullName -Value $contenu -NoNewline -Encoding UTF8
        Write-Host "✅ $($fichier.Name) - $compteurLocal images -> $categorie" -ForegroundColor Green
        $totalFichiers++
    }
}

Write-Host ""
Write-Host "🎉 Terminé !" -ForegroundColor Green
Write-Host "📊 Statistiques:" -ForegroundColor Cyan
Write-Host "   - Fichiers modifiés: $totalFichiers" -ForegroundColor White
Write-Host "   - Images remplacées: $totalRemplacements" -ForegroundColor White
Write-Host ""
Write-Host "📸 Images utilisées par catégorie:" -ForegroundColor Cyan
foreach ($cat in $compteurs.Keys | Sort-Object) {
    $utilise = $compteurs[$cat] - 1
    $total = $limites[$cat]
    $pourcentage = [math]::Round(($utilise / $total) * 100)
    Write-Host "   - $cat : $utilise/$total" -ForegroundColor White
}
Write-Host ""
Write-Host "Vos images WebP sont maintenant utilisees dans tout le projet !" -ForegroundColor Green
