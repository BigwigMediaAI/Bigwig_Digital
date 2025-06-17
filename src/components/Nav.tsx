import React, { useState } from "react";
import logo from "../assets/bigwig digital logo (11).png";
import {
  LayoutDashboard,
  Info,
  HelpCircle,
  FileText,
  Users,
  Settings,
  UsersRound,
  Phone,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const location = useLocation();
  const handleScroll = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navigate to landing page with hash
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 120;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;

        // Instantly jump to position (no smooth scroll)
        window.scrollTo({ top: sectionTop, behavior: "auto" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#1f1f1f] opacity-90 backdrop-blur-lg sticky top-0 z-50 text-white w-full shadow-lg">
      <div className="px-4 md:px-16 container mx-auto flex justify-between items-center py-3 w-full">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl">
          <button onClick={() => handleScroll("top")}>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-44 md:w-48  transition duration-300"
                draggable="false"
              />
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
            className="w-7 h-7"
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
        <ul className="hidden md:flex items-center space-x-3 text-white font-medium relative">
          {/* Solutions Dropdown */}
          <li
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="relative"
          >
            <button className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white transition-colors duration-300">
              <span className="relative z-10 flex items-center">
                Services
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

            {/* Dropdown Menu */}
            {isSolutionsOpen && (
              <div
                className="absolute top-full left-0 bg-[#1f1f1f] text-white shadow-2xl border border-[#2a2a2a] rounded-xl p-6 w-[640px] grid grid-cols-3 gap-4 z-50"
                style={{ backgroundColor: "#1f1f1f", opacity: 1 }}
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
                    className="text-left text-sm transition hover:scale-[1.02]"
                    onClick={() => handleScroll(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </li>

          {/* Other Sections */}
          {["about", "faq", "blog", "clients", "method"].map((section) => (
            <li key={section}>
              <button
                className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white transition-colors duration-300"
                onClick={() => handleScroll(section)}
              >
                <span className="relative z-10 capitalize">{section}</span>
                <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
              </button>
            </li>
          ))}

          {/* Extra Links */}
          <li className="flex space-x-3 items-center">
            <a
              href="/team"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white transition"
            >
              <span className="relative z-10">Team</span>
              <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="/Our-Work"
              rel="noopener noreferrer"
              className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-white transition"
            >
              <span className="relative z-10">Our Work</span>
              <span className="absolute inset-0 bg-[#1752B4] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="/contact"
              className="relative overflow-hidden group rounded-lg py-2 hover:text-white transition"
            >
              <span className="relative z-10 border-2 border-[#D10B0B] px-3 py-1 rounded-md text-white hover:text-white">
                Contact Us
              </span>
              <span className="absolute inset-0 bg-[#D10B0B] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all" />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay with blur effect */}
          <div
            className="fixed bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="absolute top-24 right-0 bg-[#1f1f1f] shadow-xl rounded-md p-6 w-full max-w-md z-50">
            <ul className="flex flex-col space-y-5 text-white font-medium">
              <li className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <button onClick={() => handleScroll("solutions")}>
                  Services
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Info size={18} />
                <button onClick={() => handleScroll("about")}>About</button>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle size={18} />
                <button onClick={() => handleScroll("faq")}>FAQ</button>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={18} />
                <button onClick={() => handleScroll("blog")}>Blogs</button>
              </li>
              <li className="flex items-center gap-2">
                <Users size={18} />
                <button onClick={() => handleScroll("clients")}>Clients</button>
              </li>
              <li className="flex items-center gap-2">
                <Settings size={18} />
                <button onClick={() => handleScroll("method")}>Method</button>
              </li>
              <li className="flex items-center gap-2">
                <Settings size={18} />
                <a href="/Our-Work" rel="noopener noreferrer">
                  Our Work
                </a>
              </li>
              <li className="flex items-center gap-2">
                <UsersRound size={18} />
                <a href="/team" target="_blank" rel="noopener noreferrer">
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center gap-2  py-2 rounded-md text-[#D10B0B]  transition"
                >
                  <Phone size={18} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
