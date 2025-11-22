import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
