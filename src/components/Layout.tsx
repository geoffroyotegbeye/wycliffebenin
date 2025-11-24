import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      setProgress(0);
      
      // Simuler une barre de progression
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barre de progression */}
      {transitionStage === 'fadeOut' && (
        <div className="fixed top-0 left-0 right-0 z-[100]">
          <div 
            className="h-1 bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      <FirstNav />
      <SecondNav />
      <main
        className={`transition-all duration-300 ease-in-out ${
          transitionStage === 'fadeOut' 
            ? 'opacity-0 translate-y-4' 
            : 'opacity-100 translate-y-0'
        }`}
        onTransitionEnd={() => {
          if (transitionStage === 'fadeOut') {
            setProgress(100);
            setTimeout(() => {
              setTransitionStage('fadeIn');
              setDisplayLocation(location);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
