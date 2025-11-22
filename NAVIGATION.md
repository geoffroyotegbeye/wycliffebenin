# Structure de Navigation - Wycliffe BENIN

## Architecture

La navigation est construite avec React Router et comprend 3 niveaux de profondeur.

### Composants principaux

- **Nav.tsx** : Composant de navigation avec menu desktop (hover) et mobile (accordéon)
- **Layout.tsx** : Layout principal avec navigation et footer
- **navigationData.ts** : Données structurées de la navigation

## Structure du menu

### 1. Accueil
- Page d'accueil principale

### 2. À propos
- Vision
- Équipe
- Conseil d'Administration
- Administration Générale
- Historique
- Statistiques

### 3. Activités
- Pourquoi et comment traduire?
- Cartographie linguistique du BENIN
- Transformation communautaire
- Traduction en langue des signes (Alogbe)
- **Autres traductions** (Niveau 3)
  - Traduction écrite
  - Traduction orale
  - Traduction visuelle
  - Projet JESUS FILM
- Alphabétisation holistique

### 4. Rejoignez-nous!
- Intercédez!
- Engagez-vous!
- Donnez!
- Nos RDV
- Nos formations

### 5. Ressources
- Projets
- Services au public
- Offres de partenariat
- Recrutement missionnaire
- Boutique en ligne
- Booking live!

### 6. Témoignages
- Transformation Communautaire
- Traduction
- Alphabétisation holistique
- Partenaires

### 7. Blog
- Actualités au siège
- Missions à l'extérieur
- Vie des communautés
- Zoom sur Wycliffe BENIN
- Chaîne de Prière
- Traduction visuelle (Alogbe)

### 8. Contact
- Formulaire de contact

## Fonctionnalités

### Desktop
- Menu horizontal avec dropdowns au survol
- Sous-menus de niveau 2 qui apparaissent à droite
- Scroll automatique pour les menus longs

### Mobile
- Menu hamburger
- Système d'accordéon pour les sous-menus
- Navigation à 3 niveaux accessible

## Démarrer le projet

```bash
cd frontend
npm install
npm run dev
```

## Personnalisation

Toutes les pages sont des composants minimalistes prêts à être personnalisés. Modifiez le contenu dans `src/pages/`.

Pour modifier la navigation, éditez `src/data/navigationData.ts`.
