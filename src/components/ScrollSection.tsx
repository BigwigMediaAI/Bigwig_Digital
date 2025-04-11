import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import social from "../assets/Handleey-Social-Media-Post.webp";
import google_ad from "../assets/google_ad.png";
import seo from "../assets/Handleey-Web_Analysis-New-removebg-preview.webp";
import performance from "../assets/Handleey-SMS-New-removebg-preview.webp";
import web from "../assets/webdev.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaStar,
  FaYoutube,
  FaChartLine,
  FaTags,
  FaCommentDots,
  FaGlobe,
  FaPalette,
  FaCode,
  FaLaptopCode,
  FaBuilding,
  FaLinkedin,
  FaYahoo,
} from "react-icons/fa"; // Example icons
import { MdSearch } from "react-icons/md";

type Section = {
  id: number;
  backgroundColor: string;
  content: React.ReactNode;
  image: string;
  icons?: React.ReactNode[];
};

type AnimatedSectionProps = {
  section: Section;
  isReversed: boolean;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  section,
  isReversed,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      id={`solution${section.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row gap-9 w-11/12 mx-auto mb-12 rounded-xl h-fit ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center py-8 px-8 md:px-10 ${section.backgroundColor}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-black"
      >
        {section.content}
        {section.icons && (
          <div id="solutions" className="mt-4 flex gap-4">
            {section.icons.map((icon, index) => (
              <span key={index} className="text-2xl">
                {icon}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={section.image}
          alt={`Section ${section.id}`}
          className="rounded-lg w-full h-[25vh] md:h-[60vh]"
        />
      </motion.div>
    </motion.div>
  );
};

const ScrollSections: React.FC = () => {
  const sections: Section[] = [
    {
      id: 1,
      backgroundColor: "bg-yellow-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Social Media Management</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Balancing Your Brand's Mission and Social Media Presence
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Social media is like a party, and your brand needs to be the life of
            it—not the awkward one in the corner. With our strategies, you'll
            charm the crowd, start meaningful conversations, increase your
            brands community and leave everyone wanting more. All powered by
            some serious research and trend magic!
          </p>
        </>
      ),
      image: social,
      icons: [
        <FaFacebook className="text-blue-600 text-4xl" />,
        <FaInstagram className="text-pink-500 text-4xl" />,
        <FaTwitter className="text-blue-600 text-4xl" />,
        <FaYoutube className="text-red-700 text-4xl" />,
        <FaLinkedin className="text-blue-700 text-4xl" />,
        <FaGoogle className="text-red-700 text-4xl" />,
      ],
    },
    {
      id: 2,
      backgroundColor: "bg-blue-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Search Engine Optimization</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Boosting Your Online Visibility to Help Your Brand Shine
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Think of us as your brand’s personal trainer, but for search
            engines. We’ll whip your online presence into shape, get you
            climbing those rankings, and have your audience saying, ‘How did we
            not see this sooner?’
          </p>
        </>
      ),
      image: seo,
      icons: [
        <MdSearch className="text-green-600 text-4xl" />,
        <FaGoogle className="text-red-500 text-4xl" />,
        <FaChartLine className="text-blue-700 text-4xl" />,
        <FaTags className="text-yellow-500 text-4xl" />,
        <FaYahoo className="text-purple-700 text-4xl" />,
      ],
    },
    {
      id: 3,
      backgroundColor: "bg-pink-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Performance Marketing</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Marketing Strategies That Help You Stay Ahead of the Competition
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Marketing is a race, and we’re here to make sure you’re not the one
            tripping over your shoelaces. Our data-driven approach will keep you
            ahead of the pack, converting browsers into buyers faster than you
            can say ‘ROI’ on Google Adwords, Instagram Ads, Facebook Ads,
            LinkedIn Ads, Botim Ads, Youtube Ads etc.
          </p>
        </>
      ),
      image: performance,
      icons: [
        <FaGoogle className="text-red-500 text-4xl" />,
        <FaChartLine className="text-blue-700 text-4xl" />,
        <FaYoutube className="text-red-700 text-4xl" />,
        <FaLinkedin className="text-blue-700 text-4xl" />,
        <FaFacebook className="text-blue-600 text-4xl" />,
        <FaInstagram className="text-pink-500 text-4xl" />,
      ],
    },
    {
      id: 4,
      backgroundColor: "bg-green-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Online Reputation Management</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Building and Protecting Your Brand’s Online Reputation
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            The internet never forgets, but don’t worry—we’ve got your back.
            With us on your team, your brand will look so good online that even
            your competitors might want to leave a five-star review!
          </p>
        </>
      ),
      image:
        "https://handleey.com/handleey/assets/img/images/Pending-Reviews.png",
      icons: [
        <FaShieldAlt className="text-blue-500 text-4xl" />,
        <FaStar className="text-yellow-500 text-4xl" />,
        <FaCommentDots className="text-green-500 text-4xl" />,
        <FaGlobe className="text-gray-600 text-4xl" />,
      ],
    },
    {
      id: 5,
      backgroundColor: "bg-purple-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Web Design and App Development</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Crafting Seamless Digital Experiences!
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            From pixel-perfect responsive websites to feature-rich mobile apps
            on Android & IOS, we bring your ideas to life with designs that
            inspire and functionality that delivers. Let us help you create a
            digital presence that's as sleek as it is user-friendly, ensuring
            your audience stays engaged and your brand stands out.
          </p>
        </>
      ),
      image: web,
      icons: [
        <FaPalette className="text-pink-500 text-4xl" />,
        <FaCode className="text-blue-500 text-4xl" />,
        <FaMobileAlt className="text-green-500 text-4xl" />,
        <FaLaptopCode className="text-gray-600 text-4xl" />,
      ],
    },
    {
      id: 6,
      backgroundColor: "bg-teal-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Google My Business</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Elevate Your Local Presence with GMB
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Get your business locally & vocally noticed on Google search and
            maps! With a strategic Google My Business profile, we'll help you
            attract more local customers, build credibility, and keep your
            audience engaged. From setup to optimization, we’ll ensure your
            business shines brightly in your neighborhood and beyond.
          </p>
        </>
      ),
      image: google_ad,
      icons: [
        <FaGoogle className="text-red-500 text-4xl" />,
        <FaMapMarkerAlt className="text-green-600 text-4xl" />,
        <FaBuilding className="text-blue-500 text-4xl" />,
        <FaStar className="text-yellow-400 text-4xl" />,
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          section={section}
          isReversed={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default ScrollSections;
