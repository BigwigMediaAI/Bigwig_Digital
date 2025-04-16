import React from "react";
import hero from "../assets/hero-elelment.gif";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-20">
        <h1 className=" font-bold text-lg md:text-4xl mb-3 max-w-4xl">
          We help businesses grow digitally!
        </h1>

        <h2 className="text-sm md:text-lg italic mb-6">Powered by AI</h2>
      </div>
    </div>
  );
};

export default Hero;
