import React from "react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      
      <div className="relative w-[900px] h-[600px] bg-white overflow-hidden">

        {/* LEFT TYPOGRAPHY */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
          <h1 className="text-[120px] font-serif leading-[90px] tracking-tight text-black">
            G <br />
            A <br />
            R <br />
            C <br />
            E
          </h1>
        </div>

        {/* RIGHT BIG IMAGE */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="/images/model.jpg" // replace with your image
            alt="model"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* CENTER SMALL CARD */}
        <div className="absolute bottom-16 left-[40%] transform -translate-x-1/2 bg-white p-4 shadow-xl">
          <img
            src="/images/model.jpg" // same or different image
            alt="model small"
            className="w-[250px] h-[300px] object-cover grayscale"
          />
        </div>

        {/* SMALL TEXT */}
        <div className="absolute top-10 left-[30%] text-[10px] text-gray-600 uppercase leading-4">
          <p>Photo: Seen Artists</p>
          <p>Stylist: Fred Montes</p>
          <p>Makeup: MAC Team</p>
          <p>Hair: Oribe Studio</p>
        </div>

      </div>
    </div>
  );
}