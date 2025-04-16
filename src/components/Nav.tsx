import React, { useState } from "react";
import logo from "../assets/bigwigDigital.png";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 text-[#1752B4] w-full shadow-md">
      <div className="px-4 md:px-16 container mx-auto flex justify-between items-center py-3 w-full">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl">
          <button onClick={() => handleScroll("top")}>
            <a href="/">
              <img src={logo} alt="Logo" className="w-48" />
            </a>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#1752B4]"
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
        <ul className="hidden md:flex items-center space-x-6 text-[#1752B4] font-medium relative">
          <li
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="relative"
          >
            <button className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white">
              <span className="relative z-10 flex items-center">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
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
              <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </button>

            {/* Dropdown */}
            {isSolutionsOpen && (
              <div
                className="absolute top-full left-0 bg-white text-[#1752B4] shadow-lg rounded-md p-6 w-[640px] grid grid-cols-3 gap-4 z-50"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                {[
                  { id: "solution1", label: "Social Media Management" },
                  { id: "solution2", label: "Search Engine Optimization" },
                  { id: "solution3", label: "Performance Marketing" },
                  { id: "solution4", label: "Online Reputation Management" },
                  { id: "solution5", label: "Web Design and App Development" },
                  { id: "solution6", label: "Google My Business" },
                  { id: "solutions1", label: "Lead Management System" },
                  { id: "solutions2", label: "Impactful Awareness Campaigns" },
                  { id: "solutions3", label: "Influencer Marketing" },
                  { id: "solutions4", label: "Live Coverage" },
                  { id: "solutions5", label: "Public Relations" },
                  { id: "solutions6", label: "Video Shoots" },
                  { id: "solutions7", label: "Branded Content" },
                  { id: "solutions8", label: "Creative Innovations" },
                  { id: "solutions9", label: "Affiliate Marketing" },
                ].map((item) => (
                  <button
                    key={item.id}
                    className="text-left text-sm hover:text-[#021f4b] transition"
                    onClick={() => handleScroll(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </li>

          {["about", "faq", "blog"].map((section) => (
            <li key={section}>
              <button
                className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white"
                onClick={() => handleScroll(section)}
              >
                <span className="relative z-10 capitalize">{section}</span>
                <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
              </button>
            </li>
          ))}

          <li className="flex space-x-2">
            <a
              href="/clients"
              className="relative overflow-hidden group rounded-lg py-2 hover:text-white"
            >
              <span className="relative p-2 z-10 rounded-md">Clients</span>
              <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="/team"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white"
            >
              <span className="relative z-10">Team</span>
              <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="/contact"
              className="relative overflow-hidden group rounded-lg py-2 hover:text-white"
            >
              <span className="relative z-10 border-2 border-[#D10B0B] p-2 rounded-md">
                Contact Us
              </span>
              <span className="absolute inset-0 bg-[#D10B0B] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-black bg-opacity-70 z-40" />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 right-0 bg-white shadow-lg rounded-md p-6 w-full max-w-md z-50">
          <ul className="flex flex-col space-y-4 text-[#1752B4]">
            <li>
              <button onClick={() => handleScroll("solutions")}>
                Solutions
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("about")}>About</button>
            </li>
            <li>
              <button onClick={() => handleScroll("faq")}>FAQ</button>
            </li>
            <li>
              <button onClick={() => handleScroll("blog")}>Blogs</button>
            </li>
            <li>
              <a href="/clients">Clients</a>
            </li>
            <li>
              <a href="/team" target="_blank" rel="noopener noreferrer">
                Team
              </a>
            </li>

            <li className="inline border-2 border-[#D10B0B] px-2 py-1 w-fit rounded-sm">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
