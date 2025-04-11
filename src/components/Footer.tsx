import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-4">BigwigMedia.ae</h2>
            <p className="text-gray-400">
              Elevating your media presence with innovative solutions and
              unmatched creativity. Let's build something extraordinary
              together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollToSection("top")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("solution")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("blog")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Blogs
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollToSection("case")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("faq")}
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@bigwigmedia.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/bigwigmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/bigwigmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://x.com/bigwig_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 text-gray-400 text-sm mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 BigwigMedia.ae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
