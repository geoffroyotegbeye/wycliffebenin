# Guide pour ajouter des images réelles

## Structure des dossiers

Placez vos images dans le dossier `public/images/` :

```
public/
  images/
    hero/
      slide1.jpg
      slide2.jpg
      slide3.jpg
      slide4.jpg
    services/
      traduction.jpg
      alphabetisation.jpg
      developpement.jpg
    business/
      cicc.jpg
      tafsiri.jpg
      run.jpg
    news/
      news1.jpg
      news2.jpg
      news3.jpg
```

## Remplacer les gradients par des images

### Dans Accueil.tsx

#### 1. Hero Carousel
Remplacez :
```tsx
const heroSlides = [
  {
    gradient: 'linear-gradient(...)',
    title: "...",
    subtitle: "..."
  }
];
```

Par :
```tsx
const heroSlides = [
  {
    image: '/images/hero/slide1.jpg',
    title: "La Parole de Dieu pour les Peuples",
    subtitle: "Atteindre les non-atteints avec la Parole de Dieu dans leur langue!"
  },
  // ...
];
```

Et dans le JSX :
```tsx
<div style={{ background: slide.gradient }}>
```

Par :
```tsx
<img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-black bg-opacity-40">
```

#### 2. Cartes de services
Remplacez :
```tsx
<div className="w-full h-48 flex items-center justify-center text-white text-6xl" 
     style={{ background: 'linear-gradient(...)' }}>
  <span>📖</span>
</div>
```

Par :
```tsx
<img src="/images/services/traduction.jpg" 
     alt="Traduction Biblique" 
     className="w-full h-48 object-cover" />
```

## Formats d'images recommandés

- **Hero carousel**: 1920x800px (format paysage large)
- **Cartes de services**: 800x600px (format 4:3)
- **Business cards**: 1200x800px (format paysage)
- **News cards**: 800x500px (format 16:10)

## Optimisation

Pour de meilleures performances :
1. Compressez vos images (utilisez TinyPNG ou Squoosh)
2. Utilisez des formats modernes (WebP avec fallback JPG)
3. Taille maximale recommandée : 200-300 KB par image

## Images gratuites

Sources d'images gratuites de qualité :
- Unsplash.com
- Pexels.com
- Pixabay.com
- Freepik.com (avec attribution)

Mots-clés de recherche suggérés :
- "bible translation africa"
- "african children reading"
- "community education"
- "african languages"
- "church africa"
