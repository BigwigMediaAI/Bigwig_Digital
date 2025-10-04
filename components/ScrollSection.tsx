"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
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
  FaLinkedin,
  FaYahoo,
} from "react-icons/fa";
import { MdSearch } from "react-icons/md";

type Section = {
  id: number;
  title: string;
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

  const isVideo = (src: string) => {
    return (
      src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg")
    );
  };

  return (
    <motion.div
      id={`solution${section.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full overflow-x-hidden px-5"
    >
      <div
        className={`flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-[1440px] mx-auto mb-12 rounded-xl h-fit border border-gray-700 ${
          isReversed ? "md:flex-row-reverse" : ""
        } items-center py-8 md:py-10 px-4 md:px-8 ${section.backgroundColor}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 text-black"
        >
          {section.content}
          {section.icons && (
            <div className="mt-4">
              <div id="solutions" className="flex gap-4">
                {section.icons.map((icon, index) => (
                  <span key={index} className="text-2xl">
                    {icon}
                  </span>
                ))}
              </div>

              {/* Read More button */}
              <a href={`/services/${section.title}`}>
                <button className="mt-8 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                  Read More
                </button>
              </a>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="bg-black p-2 md:p-3 rounded-[1.5rem] shadow-xl w-full max-w-[700px] aspect-[3/2] flex items-center justify-center">
            {isVideo(section.image) ? (
              <video
                src={section.image}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full h-full object-cover"
              />
            ) : (
              <img
                src={section.image}
                alt={`Section ${section.id}`}
                className="rounded-lg w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ScrollSections: React.FC = () => {
  const sections: Section[] = [
    {
      id: 1,
      title: "social-media-optimization",
      backgroundColor: "bg-neutral-950",
      content: (
        <>
          <h1
            id="social-media-management"
            className="text-4xl text-white font-bold"
          >
            Social Media Management
          </h1>
          <div className="mt-2 inline-flex items-center justify-center italic font-semibold py-1 rounded-full text-white text-sm">
            Balancing Your Brand&apos;s Mission and Social Media Presence
          </div>
          <p className="mt-4 text-lg text-white leading-relaxed text-justify">
            Social media is like a party, and your brand needs to be the life of
            it, not the awkward one in the corner...
          </p>
        </>
      ),
      image: "/social2.mp4",
      icons: [
        <FaFacebook key="facebook" className="text-blue-600 text-4xl" />,
        <FaInstagram key="instagram" className="text-pink-500 text-4xl" />,
        <FaTwitter key="twitter" className="text-blue-600 text-4xl" />,
        <FaYoutube key="youtube" className="text-red-700 text-4xl" />,
        <FaLinkedin key="linkedin" className="text-blue-700 text-4xl" />,
        <FaGoogle key="google" className="text-red-700 text-4xl" />,
      ],
    },
    {
      id: 2,
      title: "search-engine-optimization",
      backgroundColor: "bg-neutral-950",
      content: (
        <>
          <h1 className="text-4xl font-bold text-white">
            Search Engine Optimization
          </h1>
          <div className="mt-2 inline-flex items-center justify-center py-1 rounded-full italic font-semibold text-white text-sm">
            Boosting Your Online Visibility to Help Your Brand Shine
          </div>
          <p className="mt-4 text-white text-lg leading-relaxed text-justify">
            Think of us as your brand&rsquo;s personal trainer, but for search
            engines. We&apos;ll whip your online presence into shape, get you
            climbing those rankings, and have your audience saying, &lsquo;How
            did we not see this sooner?&rsquo;
          </p>
        </>
      ),
      image: "/seo1.mp4",
      icons: [
        <MdSearch key="search" className="text-green-600 text-4xl" />,
        <FaGoogle key="google" className="text-red-500 text-4xl" />,
        <FaChartLine key="chart" className="text-blue-700 text-4xl" />,
        <FaTags key="tags" className="text-yellow-500 text-4xl" />,
        <FaYahoo key="yahoo" className="text-purple-700 text-4xl" />,
      ],
    },
    {
      id: 3,
      title: "performance-marketing",
      backgroundColor: "bg-neutral-950",
      content: (
        <>
          <h1 className="text-4xl text-white font-bold">
            Performance Marketing
          </h1>
          <div className="mt-2 inline-flex items-center justify-center py-1 rounded-full italic font-semibold text-white text-sm">
            Marketing Strategies That Help You Stay Ahead of the Competition
          </div>
          <p className="mt-4 text-lg text-white leading-relaxed text-justify">
            Marketing is a race, and we&rsquo;re here to make sure you&rsquo;re
            not the one tripping over your shoelaces. Our data-driven approach
            will keep you ahead of the pack, converting browsers into buyers
            faster than you can say &lsquo;ROI&rsquo; on Google Adwords,
            Instagram Ads, Facebook Ads, LinkedIn Ads, Botim Ads, YouTube Ads,
            etc.
          </p>
        </>
      ),
      image: "/Performance Marketing-1.mp4",
      icons: [
        <FaGoogle key="google" className="text-red-500 text-4xl" />,
        <FaChartLine key="chart" className="text-blue-700 text-4xl" />,
        <FaYoutube key="youtube" className="text-red-700 text-4xl" />,
        <FaLinkedin key="linkedin" className="text-blue-700 text-4xl" />,
        <FaFacebook key="facebook" className="text-blue-600 text-4xl" />,
        <FaInstagram key="instagram" className="text-pink-500 text-4xl" />,
      ],
    },
    {
      id: 4,
      title: "online-reputation-management",
      backgroundColor: "bg-neutral-950",
      content: (
        <>
          <h1 className="text-4xl font-bold text-white">
            Online Reputation Management
          </h1>
          <div className="mt-2 inline-flex items-center justify-center py-1 rounded-full italic font-semibold text-white text-sm">
            Building and Protecting Your Brand&rsquo;s Online Reputation
          </div>
          <p className="mt-4 text-white text-lg leading-relaxed text-justify">
            The internet never forgets, but don&apos;t worry, we&apos;ve got
            your back. With us on your team, your brand will look so good online
            that even your competitors might want to leave a five-star review!
          </p>
        </>
      ),
      image: "/ORM.mp4",
      icons: [
        <FaShieldAlt key="shield" className="text-blue-500 text-4xl" />,
        <FaStar key="star" className="text-yellow-500 text-4xl" />,
        <FaCommentDots key="comment" className="text-green-500 text-4xl" />,
        <FaGlobe key="globe" className="text-gray-600 text-4xl" />,
      ],
    },
    {
      id: 5,
      title: "website-design-development",
      backgroundColor: "bg-neutral-950",
      content: (
        <>
          <h1 className="text-4xl text-white font-bold">
            Web Design and App Development
          </h1>
          <div className="mt-2 inline-flex items-center justify-center py-1 rounded-full italic font-semibold text-white text-sm">
            Crafting Seamless Digital Experiences!
          </div>
          <p className="mt-4 text-lg text-white leading-relaxed text-justify">
            From pixel-perfect responsive websites to feature-rich mobile apps
            on Android &amp; IOS, we bring your ideas to life with designs that
            inspire and functionality that delivers. Let us help you create a
            digital presence that&apos;s as sleek as it is user-friendly,
            ensuring your audience stays engaged and your brand stands out.
          </p>
        </>
      ),
      image: "/web-develop.mp4",
      icons: [
        <FaPalette key="palette" className="text-pink-500 text-4xl" />,
        <FaCode key="code" className="text-blue-500 text-4xl" />,
        <FaMobileAlt key="mobile" className="text-green-500 text-4xl" />,
        <FaLaptopCode key="laptop" className="text-gray-600 text-4xl" />,
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-white text-center my-8">
        Our Services
      </h2>
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
