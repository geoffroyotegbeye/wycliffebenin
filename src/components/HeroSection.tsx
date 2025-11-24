import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: 'small' | 'medium' | 'large' | 'full';
  overlay?: 'light' | 'medium' | 'dark';
  children?: ReactNode;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  image, 
  height = 'medium',
  overlay = 'medium',
  children 
}: HeroSectionProps) => {
  const heightClasses = {
    small: 'h-[300px]',
    medium: 'h-[400px]',
    large: 'h-[500px]',
    full: 'h-[calc(100vh-4rem)]'
  };

  const overlayClasses = {
    light: 'bg-gradient-to-r from-secondary/60 via-secondary/50 to-transparent',
    medium: 'bg-gradient-to-r from-secondary via-secondary/90 to-transparent',
    dark: 'bg-gradient-to-r from-secondary via-secondary to-secondary/80'
  };

  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden`}>
      <LazyImage 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
