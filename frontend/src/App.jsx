import { useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from './assets/AlileeOfficialLogo.png';
import sloganImage from './assets/JiajiriSlogan.png';
import Footer from "./Footer"; // ✅ correct



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#001C6C] font-[Garamond,serif]">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-md">
        {/* Logo & Slogan */}
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Logo" className="w-16 md:w-20" />
          <img src={sloganImage} alt="Slogan" className="w-32 md:w-40" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/blog" className="hover:underline text-[#DA70D6]">Blog</Link>
          <Link to="/blog/create" className="hover:underline text-[#DA70D6]">Create Post</Link>
        </nav>

        {/* Hamburger Menu Button (Mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-[#001C6C]"></div>
            <div className="w-6 h-0.5 bg-[#001C6C]"></div>
            <div className="w-6 h-0.5 bg-[#001C6C]"></div>
          </div>
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-2 py-4 bg-white border-b">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/blog" className="hover:underline text-[#DA70D6]">Blog</Link>
          <Link to="/blog/create" className="hover:underline text-[#DA70D6]">Create Post</Link>
        </nav>
      )}

      {/* Hero Section */}
      <main className="text-center pt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          Welcome to Alilee Learning Platform
        </h1>

        <p className="mt-4 text-lg text-[#001C6C]/90">
          Learn, Grow, and Transform Your Future with Alilee.
          <br />
          The Hub for DIY
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#DA70D6] hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded">
            Get Started
          </button>
          <Link
            to="/blog"
            className="border border-[#DA70D6] hover:bg-[#DA70D6] hover:text-white text-[#DA70D6] font-semibold py-2 px-6 rounded"
          >
            View Blog
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
