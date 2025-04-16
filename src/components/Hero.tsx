import React from "react";
import { Link } from "react-router-dom";
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
        <h1 className=" font-bold text-sm md:text-lg mb-6 max-w-4xl">
          We help businesses grow digitally!
        </h1>
        <h1 className="text-sm md:text-lg mb-6 max-w-4xl">
          At BigwigDigital, we combine creativity, cutting-edge technology and
          smart media strategies to increase your sales and strengthen your
          relationship with your customers. <br />
          <br /> Excited to take your brand to the next level? Partner with us
          for an incredible journey toward success & growth!
        </h1>

        <h2 className="text-sm md:text-lg italic mb-6">Powered by AI</h2>

        {/* Contact Button */}
        <Link to="/Contact">
          <button className="bg-[#1752B4] hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
