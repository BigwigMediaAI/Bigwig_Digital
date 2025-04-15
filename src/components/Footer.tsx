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
    <div>
      <div className="bg-black h-1"></div>
      <footer className="bg-gray-100 text-black pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Branding */}
            <div>
              <div className=" py-2 md:px-2 md:py-1 flex justify-center md:inline-block  mb-4">
                <img src={logo} alt="Bigwig Logo" className="w-56" />
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
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
                      className="text-gray-800 hover:text-gray-900 transition"
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
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("faq")}
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-black"
                  />
                  <a
                    href="mailto:vipul@bigwigmedia.in"
                    className="hover:underline text-gray-800"
                  >
                    vipul@bigwigmedia.in
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />
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
                  href: "https://www.facebook.com/profile.php?id=61575340735142",
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
                  href: "https://www.linkedin.com/company/106698073/admin/dashboard/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-800 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
              <a href="#" className="hover:text-black transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition">
                Terms of Service
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-800 text-center">
              © 2025 BigwigMedia.ae. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
