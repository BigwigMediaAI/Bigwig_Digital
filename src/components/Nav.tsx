import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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
    <nav className="bg-gray-800 sticky top-0 z-50 text-white">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center py-3 ">
        {/* Logo Section */}
        <div className="flex items-center font-bold text-2xl">
          <button onClick={() => handleScroll("top")}>
            <a href="/">BigwigMedia®</a>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-black-600 font-bold relative">
          <li
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="relative"
          >
            <button className="relative overflow-hidden group rounded-lg px-3 py-2">
              <span className="relative z-10 flex items-center">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 transition-transform duration-200"
                  style={{
                    transform: isSolutionsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
            {/* Dropdown Container */}
            {isSolutionsOpen && (
              <div
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="absolute top-full left-0 bg-blue-50 shadow-lg rounded-md px-10 w-[600px] h-[400px] grid grid-cols-4 gap-6"
              >
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution1")}
                >
                  Social Media Management
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution2")}
                >
                  Search Engine Optimization
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution3")}
                >
                  Performance Marketing
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution4")}
                >
                  Online Reputation Management
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution5")}
                >
                  Web Design and App Development
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution6")}
                >
                  Google My Business
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions1")}
                >
                  Lead Management System
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions2")}
                >
                  Impactful Awareness Campaigns
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions3")}
                >
                  Influencer Marketing
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions4")}
                >
                  Live Coverage
                </button>

                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions5")}
                >
                  Public Relations
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions6")}
                >
                  Video Shoots
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions7")}
                >
                  Branded Content
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions8")}
                >
                  Creative Innovations
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solutions9")}
                >
                  Affiliate Marketing
                </button>
              </div>
            )}
          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("about")}
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("faq")}
            >
              <span className="relative z-10">FAQ</span>
              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("blog")}
            >
              <span className="relative z-10">Blogs</span>
              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
          <li>
            <button className="relative overflow-hidden group rounded-lg px-4 py-2">
              <span className="relative z-10">
                <a href="/team" target="_blank" rel="noopener noreferrer">
                  Team
                </a>
              </span>
              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>

            <button className="relative overflow-hidden group rounded-lg px-3 py-2">
              <span className="relative z-10">
                <a href="/contact">Contact Us</a>
              </span>
              <span className="absolute inset-0 bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6"></div>
      </div>
      {/* Overlay for Darkening/Blur Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70" />
      )}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-15 right-0 bg-blue-50 shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[30vh] w-full max-w-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <button
                className="text-black"
                onClick={() => handleScroll("solutions")}
              >
                Solutions
              </button>
            </li>
            <li>
              <button
                className="text-black"
                onClick={() => handleScroll("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-black"
                onClick={() => handleScroll("faq")}
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                className="text-black"
                onClick={() => handleScroll("blog")}
              >
                Blogs
              </button>
            </li>
            <li>
              <a
                href="/team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                Team
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
