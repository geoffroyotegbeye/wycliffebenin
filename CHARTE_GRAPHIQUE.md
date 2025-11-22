# Charte Graphique - Wycliffe BENIN

## Couleurs Principales

### Orange (Primaire)
- **Couleur principale**: `#ff6600`
- **Usage**: Boutons d'action, liens, accents, éléments interactifs
- **Classes Tailwind**: `bg-primary`, `text-primary`, `border-primary`
- **Variantes**:
  - `primary-50`: #fff5eb (très clair)
  - `primary-100`: #ffe5cc
  - `primary-500`: #ff6600 (défaut)
  - `primary-600`: #cc5200 (hover)
  - `primary-700`: #993d00 (foncé)

### Bleu (Secondaire)
- **Couleur principale**: `#001f5f`
- **Usage**: Titres, navigation, footer, textes importants
- **Classes Tailwind**: `bg-secondary`, `text-secondary`, `border-secondary`
- **Variantes**:
  - `secondary-50`: #e6eaf2 (très clair)
  - `secondary-100`: #ccd5e5
  - `secondary-500`: #001f5f (défaut)
  - `secondary-600`: #001940 (hover)
  - `secondary-700`: #001330 (foncé)

## Utilisation

### Boutons
- **Bouton primaire**: `bg-primary text-white hover:bg-primary-600`
- **Bouton secondaire**: `bg-secondary text-white hover:bg-secondary-600`
- **Bouton outline**: `border-2 border-primary text-primary hover:bg-primary hover:text-white`

### Titres
- **Titres principaux**: `text-secondary` (bleu foncé)
- **Sous-titres**: `text-gray-700` ou `text-secondary`

### Liens
- **Liens standards**: `text-primary hover:text-primary-600`
- **Liens dans navigation**: `text-secondary hover:bg-primary hover:text-white`

### Cartes et Sections
- **Bordures d'accent**: `border-l-4 border-primary`
- **Badges**: `bg-primary-50 text-primary`
- **Sections alternées**: Fond blanc et `bg-gray-50`

## Exemples de Code

```tsx
// Bouton primaire
<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition">
  Faire un Don
</button>

// Titre de section
<h2 className="text-4xl font-bold text-secondary mb-6">
  Notre Travail
</h2>

// Lien
<Link to="/page" className="text-primary font-semibold hover:text-primary-600 transition">
  En savoir plus →
</Link>

// Badge
<span className="bg-primary-50 text-primary px-3 py-1 rounded-full text-xs font-medium">
  Catégorie
</span>
```

## Configuration Tailwind

Les couleurs sont configurées dans `tailwind.config.js` et peuvent être utilisées directement avec les classes Tailwind standard.

## Variables CSS

Les couleurs sont également disponibles en tant que variables CSS dans `index.css`:
- `--color-primary`: #ff6600
- `--color-primary-dark`: #cc5200
- `--color-secondary`: #001f5f
- `--color-secondary-dark`: #001440
