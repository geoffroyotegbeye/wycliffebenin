# 📖 Guide d'Utilisation - Composants Améliorés

## 🚀 Démarrage Rapide

### Installation
Les dépendances sont déjà installées. Si besoin :
```bash
cd frontend
npm install
```

### Lancer le projet
```bash
npm run dev
```

## 🎨 Composants Disponibles

### 1. ScrollAnimation - Animations au Scroll

**Import :**
```tsx
import ScrollAnimation from '../components/ScrollAnimation';
```

**Utilisation :**
```tsx
<ScrollAnimation 
  animation="slideUp"    // fadeIn | slideUp | slideDown | slideLeft | slideRight | scale
  delay={0.2}            // Délai en secondes (optionnel)
  duration={0.6}         // Durée en secondes (optionnel)
>
  <div>Votre contenu</div>
</ScrollAnimation>
```

**Exemples :**
```tsx
// Animation simple
<ScrollAnimation animation="fadeIn">
  <h2>Titre animé</h2>
</ScrollAnimation>

// Avec délai pour effet cascade
<ScrollAnimation animation="slideUp" delay={0.1}>
  <Card />
</ScrollAnimation>
<ScrollAnimation animation="slideUp" delay={0.2}>
  <Card />
</ScrollAnimation>
<ScrollAnimation animation="slideUp" delay={0.3}>
  <Card />
</ScrollAnimation>
```

---

### 2. LazyImage - Images Optimisées

**Import :**
```tsx
import LazyImage from '../components/LazyImage';
```

**Utilisation :**
```tsx
<LazyImage 
  src="/images/photo.jpg"
  alt="Description de l'image"
  className="w-full h-64 rounded-card"
  objectFit="cover"      // cover | contain | fill | none | scale-down
/>
```

**Avantages :**
- ✅ Chargement automatique au scroll
- ✅ Effet shimmer pendant le chargement
- ✅ Améliore les performances
- ✅ Réduit la bande passante

---

### 3. AnimatedCounter - Compteurs Animés

**Import :**
```tsx
import AnimatedCounter from '../components/AnimatedCounter';
```

**Utilisation :**
```tsx
<AnimatedCounter 
  end={1250}             // Valeur finale
  duration={2000}        // Durée en ms (optionnel)
  suffix="+"             // Suffixe (optionnel)
  prefix=""              // Préfixe (optionnel)
  className="text-4xl"   // Classes CSS (optionnel)
/>
```

**Exemples :**
```tsx
// Nombre simple
<AnimatedCounter end={28} />

// Avec suffixe
<AnimatedCounter end={87} suffix="%" />

// Avec préfixe
<AnimatedCounter end={50000} prefix="+" />

// Personnalisé
<AnimatedCounter 
  end={1250} 
  suffix="+" 
  duration={3000}
  className="text-5xl font-bold text-primary"
/>
```

---

### 4. StatsCard - Cartes de Statistiques

**Import :**
```tsx
import StatsCard from '../components/StatsCard';
import { Users } from 'lucide-react';
```

**Utilisation :**
```tsx
<StatsCard
  value={1250}
  label="Apprenants"
  icon={<Users className="text-primary" size={32} />}
  suffix="+"
  prefix=""
  color="primary"        // primary | secondary
  delay={0.1}
/>
```

**Exemple complet :**
```tsx
<div className="grid md:grid-cols-4 gap-6">
  <StatsCard
    value={28}
    label="Centres actifs"
    icon={<Target className="text-primary" size={32} />}
    color="primary"
    delay={0}
  />
  <StatsCard
    value={1250}
    label="Apprenants"
    icon={<Users className="text-secondary" size={32} />}
    color="secondary"
    delay={0.1}
  />
  <StatsCard
    value={87}
    label="Taux de réussite"
    icon={<TrendingUp className="text-primary" size={32} />}
    suffix="%"
    color="primary"
    delay={0.2}
  />
</div>
```

---

### 5. HeroSection - Section Hero Réutilisable

**Import :**
```tsx
import HeroSection from '../components/HeroSection';
```

**Utilisation :**
```tsx
<HeroSection
  title="Notre Vision"
  subtitle="Transformer des vies par la Parole de Dieu"
  image="/images/hero.jpg"
  height="medium"        // small | medium | large | full
  overlay="medium"       // light | medium | dark
>
  {/* Contenu optionnel */}
  <button>En savoir plus</button>
</HeroSection>
```

**Hauteurs disponibles :**
- `small`: 300px
- `medium`: 400px
- `large`: 500px
- `full`: 100vh - 4rem

---

### 6. SearchModal - Modal de Recherche

**Import :**
```tsx
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
```

**Utilisation :**
```tsx
function MyComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSearchOpen(true)}>
        Rechercher
      </button>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
```

**Fonctionnalités :**
- ✅ Recherche en temps réel
- ✅ Navigation au clavier (↑↓, ESC)
- ✅ Résultats par catégorie
- ✅ Animation fluide

---

## 🎨 Classes CSS Utilitaires

### Shadows
```tsx
className="shadow-card"           // Shadow normale
className="shadow-card-hover"     // Shadow au hover
className="shadow-elevated"       // Shadow élevée
```

### Border Radius
```tsx
className="rounded-card"          // 12px (pour les cartes)
className="rounded-button"        // 8px (pour les boutons)
```

### Boutons Standards
```tsx
// Bouton primaire
className="bg-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg"

// Bouton secondaire
className="bg-secondary text-white px-6 py-3 rounded-button font-semibold hover:bg-secondary-600 transition"

// Bouton outline
className="border-2 border-primary text-primary px-6 py-3 rounded-button font-semibold hover:bg-primary hover:text-white transition"
```

### Cartes Standards
```tsx
className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6"
```

---

## 📊 Graphiques avec Recharts

**Import :**
```tsx
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
```

**Exemple LineChart :**
```tsx
const data = [
  { annee: '2020', valeur: 100 },
  { annee: '2021', valeur: 150 },
  { annee: '2022', valeur: 200 },
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
    <XAxis dataKey="annee" stroke="#001f5f" />
    <YAxis stroke="#001f5f" />
    <Tooltip />
    <Legend />
    <Line 
      type="monotone" 
      dataKey="valeur" 
      stroke="#ff6600" 
      strokeWidth={3}
    />
  </LineChart>
</ResponsiveContainer>
```

**Exemple BarChart :**
```tsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
    <XAxis dataKey="annee" stroke="#001f5f" />
    <YAxis stroke="#001f5f" />
    <Tooltip />
    <Legend />
    <Bar dataKey="valeur" fill="#ff6600" radius={[8, 8, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
```

---

## 🎯 Bonnes Pratiques

### 1. Animations
- ✅ Utilisez `ScrollAnimation` pour tous les éléments importants
- ✅ Ajoutez des délais pour créer des effets en cascade
- ✅ Ne surchargez pas : 1 animation par section suffit

### 2. Images
- ✅ Toujours utiliser `LazyImage` au lieu de `<img>`
- ✅ Fournir un `alt` descriptif
- ✅ Utiliser des images optimisées (WebP si possible)

### 3. Performance
- ✅ Lazy load toutes les images
- ✅ Limiter le nombre d'animations simultanées
- ✅ Utiliser `React.memo` pour les composants lourds

### 4. Accessibilité
- ✅ Toujours fournir des `aria-label` pour les boutons icônes
- ✅ Assurer un contraste minimum de 4.5:1
- ✅ Tester la navigation au clavier

---

## 🐛 Dépannage

### Les animations ne fonctionnent pas
```bash
# Vérifier que framer-motion est installé
npm list framer-motion

# Réinstaller si nécessaire
npm install framer-motion
```

### Les images ne se chargent pas
- Vérifier que le chemin est correct (`/images/...`)
- Vérifier que les images existent dans `public/images/`
- Ouvrir la console pour voir les erreurs

### Les graphiques ne s'affichent pas
```bash
# Vérifier que recharts est installé
npm list recharts

# Réinstaller si nécessaire
npm install recharts
```

---

## 📞 Support

Pour toute question ou problème :
1. Consulter la documentation dans `AMELIORATIONS.md`
2. Vérifier les exemples dans les pages existantes
3. Consulter la documentation officielle :
   - [Framer Motion](https://www.framer.com/motion/)
   - [Recharts](https://recharts.org/)
   - [Tailwind CSS](https://tailwindcss.com/)

---

**Dernière mise à jour** : 24 Novembre 2024
