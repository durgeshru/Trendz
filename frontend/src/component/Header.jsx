import React, { useState } from "react";
import heroImg from "../../public/images/head.png"; // replace with your image

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">

      {/* Top Right Menu - Desktop */}
      <nav className="hidden md:flex absolute top-6 right-10">
        <ul className="flex gap-8 text-black text-lg font-medium uppercase">
          <li className="cursor-pointer relative group">
            <span className=" transition">Products</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className=" transition">Collection</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className=" transition">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className=" transition">Login</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute top-6 right-6 z-50 text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col gap-8 text-black text-xl font-medium">
            <li className="cursor-pointer relative group">
              <span className=" transition">Products</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <span className=" transition">Collection</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <span className=" transition">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <span className=" transition">Login</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Background Big Text */}
      <h1 className="custom-scroll-text absolute text-[120px] md:text-[180px] font-extrabold tracking-[20px] select-none">
        TRENDZ
      </h1>

      {/* Center Image */}
      <div className="relative z-10">
        <img
          src={heroImg}
          alt="hero"
          className="w-[450px] md:w-[650px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

    </header>
  );
}

export default Header;