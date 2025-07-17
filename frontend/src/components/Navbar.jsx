import { useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/AlileeOfficialLogo.png';
import sloganImage from '../assets/JiajiriSlogan.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-md">
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Logo" className="w-16 md:w-20" />
          <img src={sloganImage} alt="Slogan" className="w-32 md:w-40" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/blog" className="hover:underline text-[#DA70D6]">Blog</Link>
          <Link to="/blog/create" className="hover:underline text-[#DA70D6]">Create Post</Link>
        </nav>

        {/* Hamburger Menu Button */}
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

      {/* Mobile Navigation */}
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
    </>
  );
}
