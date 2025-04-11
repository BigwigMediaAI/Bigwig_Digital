import React from "react";

const Nav: React.FC = () => {
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
    <nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-md">
      <div className="container px-4 md:px-12 mx-auto flex justify-between items-center py-3 text-white ">
        {/* Logo Section */}
        <div className="font-bold text-3xl cursor-pointer ">
          <button onClick={() => handleScroll("top")}>
            <a href="/">BigwigMedia®</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
