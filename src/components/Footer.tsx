import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/bigwig digital logo (11).png";
import line2 from "../assets/line2.png";

function Footer() {
  return (
    <div className="relative">
      <img
        src={line2}
        alt=""
        className="absolute top-0 left-0 invert"
        draggable="false"
      />
      <footer className="bg-[#1f1f1f] text-white pt-12 pb-6">
        <div className="w-11/12 mx-auto px-2">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-14 mb-8">
            {/* Branding - 1/3 */}
            <div className="md:w-1/3">
              <div className="py-2 md:px-2 md:py-1 flex justify-center md:justify-start mb-4">
                <img
                  src={logo}
                  alt="Bigwig Logo"
                  className="w-60"
                  draggable="false"
                />
              </div>
              <p className=" md:w-2/3 text-sm leading-relaxed">
                Elevating your media presence with innovative solutions and
                unmatched creativity. Let’s build something extraordinary
                together.
              </p>
              <div className="flex gap-3 mt-4">
                <img
                  src="https://media.istockphoto.com/id/482478655/photo/arab-emirates-flag.jpg?s=612x612&w=0&k=20&c=fJfB5DUYTEWrJ96RbIxJoLo7uQrYkCPqo0F2BTNNp8A="
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png"
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
                  alt=""
                  className="w-10"
                  draggable="false"
                />
              </div>
            </div>

            {/* Quick Links, Resources, Contact Info - 2/3 */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Careers", id: "faq" },
                    { name: "Blogs", id: "blog" },
                    { name: "FAQ", id: "faq" },
                    { name: "T&C", id: "faq" },
                    { name: "Privacy Policy", id: "faq" },
                  ].map((link) => (
                    <li key={link.id}>
                      <button className="hover:text-blue-600 transition">
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Industries</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Real Estate Industry" },
                    { name: "Beauty" },
                    { name: "Education" },
                    { name: "Finance/Lending" },
                    { name: "Healthcare" },
                    { name: "Manufacturer" },
                    { name: "Events" },
                    { name: "Astrology" },
                  ].map((link, index) => (
                    <li key={index}>
                      <button>{link.name}</button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <a
                      href="mailto:vipul@bigwigmedia.in"
                      className="hover:underline"
                    >
                      vipul@bigwigmedia.in
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    +91 83685 73451
                  </li>
                </ul>
              </div>
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
                  color: "#1877F2",
                },
                {
                  icon: faInstagram,
                  href: "https://www.instagram.com/bigwigmediadigital/",
                  color: "#E1306C",
                },
                {
                  icon: faYoutube,
                  href: "https://www.youtube.com/@BigwigDigital2024",
                  color: "#FF0000",
                },
                {
                  icon: faXTwitter,
                  href: "https://x.com/bigwig_digital",
                  color: "#000000",
                },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/company/106698073/admin/dashboard/",
                  color: "#0077B5",
                },
                {
                  icon: faPinterest,
                  href: "https://in.pinterest.com/bigwigmediadigital/",
                  color: "#E60023",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition duration-300"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              © 2025 BigwigDigital.in. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
