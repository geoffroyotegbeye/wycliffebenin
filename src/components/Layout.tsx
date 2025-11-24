import { Outlet } from 'react-router-dom';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FirstNav />
      <SecondNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
