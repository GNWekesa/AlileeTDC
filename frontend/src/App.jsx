import { useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#001C6C] font-[Garamond,serif]">
      
      
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
    </div>
  );
}

export default App;
