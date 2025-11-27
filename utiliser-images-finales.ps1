# Script pour utiliser toutes les images WebP (maintenant dans /images/)

Write-Host "Remplacement de toutes les images..." -ForegroundColor Cyan
Write-Host ""

# Compteurs
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

# Categories par page
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
    $image = "/images/$Categorie-{0:D2}.webp" -f $num
    
    $compteurs[$Categorie]++
    if ($compteurs[$Categorie] > $limites[$Categorie]) {
        $compteurs[$Categorie] = 1
    }
    
    return $image
}

$totalFichiers = 0
$totalRemplacements = 0

# Parcourir tous les fichiers .tsx
$fichiers = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse

foreach ($fichier in $fichiers) {
    $contenu = Get-Content $fichier.FullName -Raw -Encoding UTF8
    $contenuOriginal = $contenu
    $modifie = $false
    
    # Determiner la categorie
    $categorie = 'projet'
    if ($pageCategories.ContainsKey($fichier.Name)) {
        $categorie = $pageCategories[$fichier.Name]
    }
    
    # Patterns a remplacer
    $patterns = @(
        '/images/images\.jpeg',
        '/images/images1\.jpeg',
        '/images/images2\.jpeg',
        '/images/images3\.jpeg',
        '/images/projet/projet-\d+\.webp'
    )
    
    $compteurLocal = 0
    
    foreach ($pattern in $patterns) {
        # Guillemets simples
        $regex = "'$pattern'"
        while ($contenu -match $regex) {
            $nouvelleImage = Get-ProchainImage -Categorie $categorie
            $contenu = $contenu -replace $regex, "'$nouvelleImage'", 1
            $compteurLocal++
            $totalRemplacements++
            $modifie = $true
        }
        
        # Guillemets doubles
        $regex = "`"$pattern`""
        while ($contenu -match $regex) {
            $nouvelleImage = Get-ProchainImage -Categorie $categorie
            $contenu = $contenu -replace $regex, "`"$nouvelleImage`"", 1
            $compteurLocal++
            $totalRemplacements++
            $modifie = $true
        }
    }
    
    if ($modifie) {
        Set-Content -Path $fichier.FullName -Value $contenu -NoNewline -Encoding UTF8
        Write-Host "OK $($fichier.Name) - $compteurLocal images -> $categorie" -ForegroundColor Green
        $totalFichiers++
    }
}

Write-Host ""
Write-Host "Termine !" -ForegroundColor Green
Write-Host "Fichiers modifies: $totalFichiers" -ForegroundColor White
Write-Host "Images remplacees: $totalRemplacements" -ForegroundColor White
Write-Host ""
Write-Host "Images utilisees:" -ForegroundColor Cyan
foreach ($cat in $compteurs.Keys | Sort-Object) {
    $utilise = $compteurs[$cat] - 1
    $total = $limites[$cat]
    Write-Host "  $cat : $utilise/$total" -ForegroundColor White
}
