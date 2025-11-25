import { type ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'slideDown';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01, // Très bas pour déclencher rapidement
    rootMargin: '100px', // Grande marge pour anticiper
  });

  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    elementRef.current = element;
    inViewRef(element);
  };

  useEffect(() => {
    if (inView && elementRef.current && !hasAnimated.current) {
      hasAnimated.current = true;
      const element = elementRef.current;

      // Configuration des animations selon le type
      const animations: Record<string, gsap.TweenVars> = {
        fadeIn: {
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out'
        },
        slideUp: {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out'
        },
        slideDown: {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out'
        },
        slideLeft: {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power2.out'
        },
        slideRight: {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power2.out'
        },
        scale: {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: 'power2.out'
        }
      };

      gsap.to(element, animations[animation]);
    }
  }, [inView, animation, delay, duration]);

  // États initiaux selon le type d'animation
  const getInitialStyle = (): React.CSSProperties => {
    const styles: Record<string, React.CSSProperties> = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, transform: 'translateY(30px)' },
      slideDown: { opacity: 0, transform: 'translateY(-30px)' },
      slideLeft: { opacity: 0, transform: 'translateX(30px)' },
      slideRight: { opacity: 0, transform: 'translateX(-30px)' },
      scale: { opacity: 0, transform: 'scale(0.95)' }
    };
    return styles[animation];
  };

  return (
    <div
      ref={setRefs}
      style={getInitialStyle()}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
