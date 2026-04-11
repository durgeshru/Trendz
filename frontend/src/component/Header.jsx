import React from "react";
import heroImg from "../../public/images/main.png"; // replace with your image

function Header() {
  return (
    <header className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* Top Right Menu */}
      <nav className="absolute top-6 right-10">
        <ul className="flex gap-8 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-red-400 transition">Home</li>
          <li className="cursor-pointer hover:text-red-400 transition">About</li>
          <li className="cursor-pointer hover:text-red-400 transition">Services</li>
          <li className="cursor-pointer hover:text-red-400 transition">Contact</li>
        </ul>
      </nav>

      {/* Background Big Text */}
      <h1 className="absolute text-[120px] md:text-[180px] font-extrabold text-white/5 tracking-[20px] select-none">
        CREATIVE
      </h1>

      {/* Center Image */}
      <div className="relative z-10">
        <img
          src={heroImg}
          alt="hero"
          className="w-[450px] md:w-[650px] object-contain"
        />
      </div>

    </header>
  );
}

export default Header;