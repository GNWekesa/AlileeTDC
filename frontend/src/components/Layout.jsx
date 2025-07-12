import { Outlet, Link } from 'react-router-dom';
import Footer from "../Footer"; // ✅ Goes up one level to src/


function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-[#001C6C] bg-white">
      <header className="bg-[#DA70D6] text-white px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Alilee Blog</h1>
        <nav className="space-x-4">
          <Link to="/blog">Posts</Link>
          <Link to="/blog/create">Create Post</Link>
        </nav>
      </header>

      <main className="p-6 flex-1">
        <Outlet />
      </main>

      {/* ✅ Common footer for all pages */}
      <Footer />
    </div>
  );
}

export default Layout;
