import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean; // Pour les images critiques (hero, etc.)
  sizes?: string; // Pour les images responsive
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  objectFit = 'cover',
  priority = false,
  sizes
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : '');
  const [hasError, setHasError] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01, // Charger un peu avant que l'image soit visible
    rootMargin: '50px', // Précharger 50px avant
  });

  useEffect(() => {
    if (inView && !imageSrc && !priority) {
      // Précharger l'image
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
      };
      img.onerror = () => {
        setHasError(true);
      };
    }
  }, [inView, src, imageSrc, priority]);

  // Générer les srcset pour différentes tailles
  const generateSrcSet = (baseSrc: string) => {
    // Si l'image est déjà en webp, on génère des versions de différentes tailles
    // Format attendu: /images/nom.webp
    const parts = baseSrc.split('.');
    const extension = parts.pop();
    const basePath = parts.join('.');
    
    // Retourner le srcset avec différentes tailles (à adapter selon vos besoins)
    return `${basePath}.${extension} 1x, ${basePath}.${extension} 2x`;
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder avec effet de shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
      )}
      
      {/* Message d'erreur si l'image ne charge pas */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">Image non disponible</p>
          </div>
        </div>
      )}
      
      {/* Image */}
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          srcSet={generateSrcSet(imageSrc)}
          sizes={sizes || '100vw'}
          alt={alt}
          className={`w-full h-full transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
        />
      )}
    </div>
  );
};

export default LazyImage;
