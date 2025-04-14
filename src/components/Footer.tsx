import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/bigwigDigital.png";

function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F3A80] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div>
            <div className="bg-white py-2 md:px-2 md:py-1 flex justify-center md:inline-block rounded-lg mb-4">
              <img src={logo} alt="Bigwig Logo" className="w-56" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Elevating your media presence with innovative solutions and
              unmatched creativity. Let’s build something extraordinary
              together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", id: "top" },
                { name: "About Us", id: "about" },
                { name: "Solution", id: "solution" },
                { name: "Blogs", id: "blog" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleScrollToSection("case")}
                  className="text-gray-300 hover:text-white transition"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("faq")}
                  className="text-gray-300 hover:text-white transition"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-white"
                />
                <a
                  href="mailto:vipul@bigwigmedia.in"
                  className="hover:underline text-gray-300"
                >
                  vipul@bigwigmedia.in
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
                +91 83685 73451
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              {
                icon: faFacebookF,
                href: "https://www.facebook.com/bigwigmedia.in/",
              },
              {
                icon: faInstagram,
                href: "https://www.instagram.com/bigwigdigital/",
              },
              {
                icon: faYoutube,
                href: "https://www.youtube.com/@BigwigDigital2024",
              },
              {
                icon: faXTwitter,
                href: "https://x.com/bigwig_digital",
              },
              {
                icon: faLinkedin,
                href: "https://www.linkedin.com/company/bigwig-media---digital-media-solutions/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-white transition"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center">
            © 2025 BigwigMedia.ae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
