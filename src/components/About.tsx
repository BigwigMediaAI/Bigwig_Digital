import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const rotatingWords = ["Trendsetters", "Innovative", "Unique", "Dynamic"];

const AboutUs = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200, // 👈 slow animation (you can adjust between 1000–1500 for even slower)
      once: false, // 👈 animate every time it scrolls into view
      mirror: false, // 👈 don't animate again when scrolling back up (optional)
      easing: "ease-in-out", // 👈 smoother slow animation
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-11/12 mx-auto bg-[#0f0f11] text-white py-4 mb-10 px-5"
      data-aos="zoom-in"
    >
      {/* Heading and Description */}
      <div className=" grid grid-cols-1 md:grid-cols-2  items-start ">
        {/* Left Side - Heading */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What Makes us
          </h2>
          <p className="text-3xl md:text-6xl pb-5 italic underline text-gray-200 mt-2 transition-all duration-300 ease-in-out">
            {rotatingWords[currentWordIndex]}?
          </p>
        </div>

        {/* Right Side - Paragraph */}
        <div className="text-gray-300 text-lg text-justify leading-relaxed">
          In a fast-changing digital world, first impressions are everything. As
          a top digital marketing agency in India, we blend creativity with
          strategy—crafting stunning websites while using SEO, Google Ads, and
          Facebook Marketing to boost both perception and conversions. Here’s
          why working with us maximizes your ROI:
        </div>
      </div>

      {/* Cards */}
      {/* Cards */}
      <div className="mt-14">
        {/* Mobile View - Horizontal Scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-5 md:hidden pb-4 px-1">
          {[
            {
              title: "Driven by Innovation and Fueled by Passion",
              content:
                "We’re like rocket fuel for your brand—minus the explosion. With powerful storytelling and creative spark, we help your business soar. It’s no wonder we’re trusted as one of the best digital marketing agencies in India and Dubai.",
            },
            {
              title: "Strong communication is the foundation of success.",
              content:
                "We believe clear communication is the backbone of every great partnership. That’s why we keep things transparent—sharing updates, hitting deadlines, and keeping you in the loop at every step. No last-minute surprises—just smooth progress, solid results, and the occasional virtual high-five!",
            },
            {
              title: "Strong return on investment",
              content:
                "Partnering with us means big value without the big price tag. We offer top-notch web and digital solutions at fair prices, making sure every rupee you invest works hard. Our team’s goal? Maximum results, minimum waste, and a return that makes you smile.",
            },
            {
              title: "Experience a Broad Spectrum of Services All in One Place",
              content:
                "From building your website to putting it on the digital map—we’ve got it all covered. As a leading digital marketing agency in India & Dubai, we offer end-to-end services including web development, CMS, e-commerce, mobile apps, SEO, SEM, and SMO. One team, all the tools you need.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="min-w-full snap-start bg-[#1b1b1e] rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <hr className="border-gray-600 mb-4" />
              <p className="text-lg text-gray-400 text-justify">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-[#1b1b1e] rounded-xl p-6 shadow-md"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">
              Driven by Innovation and Fueled by Passion
            </h3>
            <hr className="border-gray-600 mb-4" />
            <p className="text-lg text-gray-400 text-justify">
              We’re like rocket fuel for your brand—minus the explosion. With
              powerful storytelling and creative spark, we help your business
              soar. It’s no wonder we’re trusted as one of the best digital
              marketing agencies in India and Dubai.
            </p>
          </div>

          <div
            className="bg-[#1b1b1e] rounded-xl p-6 shadow-md"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">
              Strong communication is the foundation of success.
            </h3>
            <hr className="border-gray-600 mb-4" />
            <p className="text-lg text-gray-400 text-justify">
              We believe clear communication is the backbone of every great
              partnership. That’s why we keep things transparent—sharing
              updates, hitting deadlines, and keeping you in the loop at every
              step. No last-minute surprises—just smooth progress, solid
              results, and the occasional virtual high-five!
            </p>
          </div>

          <div
            className="bg-[#1b1b1e] rounded-xl p-6 shadow-md"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">
              Strong return on investment
            </h3>
            <hr className="border-gray-600 mb-4" />
            <p className="text-lg text-gray-400 text-justify">
              Partnering with us means big value without the big price tag. We
              offer top-notch web and digital solutions at fair prices, making
              sure every rupee you invest works hard. Our team’s goal? Maximum
              results, minimum waste, and a return that makes you smile.
            </p>
          </div>

          <div
            className="bg-[#1b1b1e] rounded-xl p-6 shadow-md"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">
              Experience a Broad Spectrum of Services All in One Place
            </h3>
            <hr className="border-gray-600 mb-4" />
            <p className="text-lg text-gray-400 text-justify">
              From building your website to putting it on the digital map—we’ve
              got it all covered. As a leading digital marketing agency in India
              & Dubai, we offer end-to-end services including web development,
              CMS, e-commerce, mobile apps, SEO, SEM, and SMO. One team, all the
              tools you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
