import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // ✅ Reuse the same Navbar
import Footer from './Footer'; // ✅ Adjusted path for Footer

function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-[#001C6C] bg-white font-[Garamond,serif]">
      
      {/* ✅ Shared Navbar */}
      <Navbar />

      {/* ✅ Page content */}
      <main className="p-6 flex-1">
        <Outlet />
      </main>

      {/* ✅ Shared Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
