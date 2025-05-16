import React from "react";
import logo from "../assets/bigwig digital logo (11).png";

const Nav2: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#1f1f1f] opacity-90 backdrop-blur-lg fixed top-0 z-50 text-white w-full shadow-lg">
      <div className="container px-4 md:px-16 mx-auto flex justify-between items-center py-3 text-white ">
        {/* Logo Section */}
        <div className="font-bold text-3xl cursor-pointer ">
          <button onClick={() => handleScroll("top")}>
            <a href="/">
              <img src={logo} alt="" className="w-48" />
            </a>
          </button>
        </div>
        <a
          href="/contact"
          className="relative overflow-hidden group rounded-lg py-2 hover:text-white transition"
        >
          <span className="relative z-10 border-2 border-[#D10B0B] px-3 py-1 rounded-md text-white hover:text-white">
            Contact Us
          </span>
          <span className="absolute inset-0 bg-[#D10B0B] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
        </a>
      </div>
    </nav>
  );
};

export default Nav2;
