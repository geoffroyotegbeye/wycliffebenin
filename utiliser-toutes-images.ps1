# Script pour utiliser TOUTES les images WebP disponibles

Write-Host "🎨 Remplacement intelligent de toutes les images..." -ForegroundColor Cyan
Write-Host ""

# Compteurs pour distribuer les images
$compteurs = @{
    'projet' = 1
    'equipe' = 1
    'communaute' = 1
    'temoignage' = 1
    'hero' = 1
}

# Limites par catégorie
$limites = @{
    'projet' = 15
    'equipe' = 5
    'communaute' = 15
    'temoignage' = 10
    'hero' = 12
}

# Mapping des pages vers leurs catégories d'images
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
    
    # Incrémenter et reset si nécessaire
    $compteurs[$Categorie]++
    if ($compteurs[$Categorie] > $limites[$Categorie]) {
        $compteurs[$Categorie] = 1
    }
    
    return $image
}

$totalFichiers = 0
$totalRemplacements = 0

# Parcourir tous les fichiers .tsx dans src/pages
$fichiers = Get-ChildItem -Path "src/pages" -Filter "*.tsx"

foreach ($fichier in $fichiers) {
    $contenu = Get-Content $fichier.FullName -Raw -Encoding UTF8
    $contenuOriginal = $contenu
    
    # Déterminer la catégorie pour ce fichier
    $categorie = 'projet'  # Par défaut
    if ($pageCategories.ContainsKey($fichier.Name)) {
        $categorie = $pageCategories[$fichier.Name]
    }
    
    # Compter combien d'images à remplacer (guillemets simples ET doubles)
    $matches = [regex]::Matches($contenu, "['\x22]/images/(images\d?|projet/projet-\d+)\.(?:jpeg|webp)['\x22]")
    
    if ($matches.Count -gt 0) {
        Write-Host "📄 $($fichier.Name) - $($matches.Count) images" -ForegroundColor Yellow
        
        # Remplacer chaque occurrence par une nouvelle image
        foreach ($match in $matches) {
            $nouvelleImage = Get-ProchainImage -Categorie $categorie
            $contenu = $contenu.Replace($match.Value, "'$nouvelleImage'")
            $totalRemplacements++
        }
        
        # Sauvegarder
        Set-Content -Path $fichier.FullName -Value $contenu -NoNewline -Encoding UTF8
        Write-Host "   ✅ Remplacé par des images de catégorie: $categorie" -ForegroundColor Green
        $totalFichiers++
    }
}

Write-Host ""
Write-Host "🎉 Terminé !" -ForegroundColor Green
Write-Host "📊 Statistiques:" -ForegroundColor Cyan
Write-Host "   - Fichiers modifiés: $totalFichiers" -ForegroundColor White
Write-Host "   - Images remplacées: $totalRemplacements" -ForegroundColor White
Write-Host ""
Write-Host "📸 Utilisation des images:" -ForegroundColor Cyan
foreach ($cat in $compteurs.Keys | Sort-Object) {
    $utilise = $compteurs[$cat] - 1
    $total = $limites[$cat]
    Write-Host "   - $cat : $utilise/$total images utilisées" -ForegroundColor White
}
Write-Host ""
Write-Host "✨ Toutes vos images WebP sont maintenant utilisées !" -ForegroundColor Green
