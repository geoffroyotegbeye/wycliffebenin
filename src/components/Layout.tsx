import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Scroll vers le haut lors du changement de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <FirstNav />
      <SecondNav />
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
