import React, { useState } from "react";
import Nav from "../components/Nav";
import { postItems, PostItem } from "../data/postData";
import { reelItems, ReelItem } from "../data/reelData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Category = "all" | "creative" | "ai" | "cgi" | "videos";

const filterLabels: { key: Category; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "creative", label: "CREATIVE" },
  { key: "ai", label: "AI" },
  { key: "cgi", label: "CGI" },
  { key: "videos", label: "REELS" },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const allItems: (PostItem | (ReelItem & { type?: string }))[] = [
    ...postItems,
    ...reelItems.map((reel) => ({ ...reel, type: "videos" })),
  ];

  const filteredItems = allItems.filter((item) =>
    activeCategory === "all" ? true : item.type === activeCategory
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full text-black bg-white">
      <Nav />
      <section className="py-5 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="text-[#4E6CBA]">Our</span>{" "}
          <span className="text-[#DA4D42]">Work</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
          {filterLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`uppercase tracking-wide ${
                activeCategory === key
                  ? "text-[#4E6CBA] underline underline-offset-4"
                  : "text-gray-500 hover:text-[#4E6CBA]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, i) =>
            "youtubeId" in item ? (
              <div
                key={i}
                className="text-left"
                data-aos="fade-up"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="overflow-hidden border border-gray-200 shadow-lg shadow-gray-500 rounded-md">
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${
                      item.youtubeId
                    }?autoplay=${hoveredIndex === i ? "1" : "0"}&mute=1`}
                    title={item.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    draggable="false"
                  />
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold mt-4 inline-block hover:text-blue-600"
                >
                  {item.title}
                </a>
              </div>
            ) : (
              <div key={i} className="text-left relative" data-aos="fade-up">
                <div className="overflow-hidden border border-gray-200 shadow-lg shadow-gray-500 rounded-md relative">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full md:h-[350px] h-[450px] object-fill transition-transform duration-300 transform hover:scale-105"
                      draggable="false"
                    />
                  </a>

                  {/* Social Media Icons Overlay */}
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    {item.socials.map((social, index) => {
                      const iconMap = {
                        instagram: <FaInstagram className="text-pink-600" />,
                        facebook: <FaFacebookF className="text-blue-600" />,
                        twitter: <FaXTwitter className="text-blue-400" />,
                        linkedin: <FaLinkedinIn className="text-blue-700" />,
                      };

                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform"
                        >
                          {iconMap[social.platform]}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold mt-4 inline-block hover:text-blue-600"
                >
                  {item.alt}
                </a> */}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
