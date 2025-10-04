"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rotatingWords = ["Trendsetters", "Innovative", "Unique", "Dynamic"];

const AboutUs = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Use window.location inside useEffect instead of Next hooks
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 120;
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
      }
    }
  }, []); // no dependencies on Next hooks

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Driven by Innovation and Fueled by Passion",
      content:
        "We’re like rocket fuel for your brand, minus the explosion. With powerful storytelling and creative spark, we help your business soar. It’s no wonder we’re trusted as one of the best digital marketing agencies in Dubai, India, Australia, New Zealand.",
    },
    {
      title: "Strong Communication is the Foundation of Success.",
      content:
        "We believe clear communication is the backbone of every great partnership. That’s why we keep things transparent, sharing updates, hitting deadlines, and keeping you in the loop at every step. No last-minute surprises, just smooth progress, solid results, and the frequent virtual high-five!",
    },
    {
      title: "Higher Return on Investment",
      content:
        "Partnering with us means big value without the big price tag. We offer top-notch web and digital solutions at fair prices, making sure every rupee you invest works hard. Our team’s goal? Maximum results, minimum waste, and a return that makes you smile.",
    },
    {
      title: "One Stop Shop - All Services in One Place",
      content:
        "From building your website to putting it on the digital map, we’ve got it all covered. As a leading digital marketing agency in India, Dubai & Australasia, we offer end-to-end services including web development, CMS, e-commerce, mobile apps, SEO, SEM, and SMO. One team, all the tools you need.",
    },
  ];

  return (
    <section
      id="about"
      className="w-11/12 mx-auto bg-neutral-950 text-white py-4 mb-10 px-0 md:px-5"
    >
      <h1 className="text-5xl text-center py-4 font-bold leading-tight mb-7">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight pb-5">
            What Makes us{" "}
            <span className="underline italic text-gray-200 mt-2 transition-all duration-300 ease-in-out">
              {rotatingWords[currentWordIndex]}?
            </span>
          </h2>
        </div>

        <div
          className="text-gray-300 text-lg text-justify leading-relaxed"
          data-aos="zoom-in"
        >
          In a fast-changing digital world, first impressions are everything. As
          a top digital marketing agency in India, we blend creativity with
          strategy, crafting stunning websites while using SEO, Google Ads, and
          Facebook Marketing to boost both perception and conversions. Here’s
          why working with us maximizes your ROI:
        </div>
      </div>

      <div className="mt-0 md:mt-14">
        <div className="block md:hidden relative">
          <div className="flex justify-center items-center mb-4">
            <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10">
              <button
                onClick={() =>
                  setMobileIndex((prev) =>
                    prev === 0 ? cards.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft size={28} className="text-white" />
              </button>
              <button
                onClick={() =>
                  setMobileIndex((prev) =>
                    prev === cards.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight size={28} className="text-white" />
              </button>
            </div>
          </div>

          <div
            className="bg-[#28282B] border border-gray-700 rounded-xl shadow-md p-3 w-[85%] mx-auto mt-12"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">
              {cards[mobileIndex].title}
            </h3>
            <hr className="border-gray-600 mb-4" />
            <p className="text-lg text-gray-400 text-justify">
              {cards[mobileIndex].content}
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#1b1b1e] rounded-xl p-6 shadow-md"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <hr className="border-gray-600 mb-4" />
              <p className="text-lg text-gray-400 text-justify">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
