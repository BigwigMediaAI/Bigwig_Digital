import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Adjust for sticky navbar height
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container px-4 md:px-16 mx-auto flex justify-between items-center py-3">
        {/* Logo Section */}
        <div className="flex items-center font-bold">
          <button onClick={() => handleScroll("top")}><a href="/">BigwigMedia®</a></button>
          
        </div>

        
        {/* Desktop Menu */}
     

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6"></div>
</div>
        

        

      {/* Overlay for Darkening/Blur Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70" />
      )}
      
    </nav>
  );
};

export default Nav;
