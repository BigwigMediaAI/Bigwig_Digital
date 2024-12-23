import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Social Media Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Branding Section */}
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
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollToSection("top")}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("solution")}
                  className="text-gray-400 hover:text-white"
                >
                  Solution
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollToSection("blog")}
                  className="text-gray-400 hover:text-white"
                >
                  Blogs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
              <button
                  className="text-gray-400 hover:text-white"
                >
                  blog
                </button>
              </li>
              <li>
              <button
                  className="text-gray-400 hover:text-white"
                >
                  Case Studies
                </button>
              </li>
              <li>
              <button
                  className="text-gray-400 hover:text-white"
                >
                  FAQ
                </button>
              </li>
              <li>
              <button
                  className="text-gray-400 hover:text-white"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                info@bigwigmedia.in
              </li>
              <li className="text-gray-400">Delhi,India</li>
              <li className="text-gray-400">+91-11 49 384 555</li>
            </ul>
          </div>
        </div>

         {/* Bottom Section */}
         <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/bigwigmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/bigwigmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://x.com/bigwig_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          {/* Footer Copy */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2024 BigwigMedia.ae. All rights reserved.
          </p>
        </div>
      </div>
      </div>

  );
}

export default Footer;
