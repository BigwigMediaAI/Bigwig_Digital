import { useState } from "react";
import about from "../assets/ABOUT.png";
import ContactUs from "./Contact";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="px-6 md:px-14 lg:px-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
        About Us
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <p className="text-md font-semibold text-justify text-gray-600 mt-2">
            Introducing BigwigDigital — Dubai’s premier digital marketing
            solution.
          </p>
          <p className="text-sm text-justify text-gray-600 mt-2">
            We specialize in powerful, results-driven strategies that boost your
            online presence and make your brand stand out.
          </p>
          <p className="text-sm text-justify text-gray-600 mt-2">
            From SEO and social media to email, content marketing, and PPC — we
            tailor each strategy to your unique brand edge. With real-time
            tracking, you’ll see your traffic rise, bounce rates fall, and
            conversions grow.
          </p>
          <p className="text-sm text-justify text-gray-600 mt-2">
            What sets us apart? Innovation. We don’t do one-size-fits-all. Our
            strategies evolve with market trends to keep you two steps ahead.
          </p>
          <p className="text-md font-semibold text-justify text-gray-600 mt-2">
            Tired of low traffic and sales?
          </p>
          <p className="text-sm text-justify text-gray-600 mt-2">
            If you're tired of low traffic and sales, it's time to upgrade to
            the best. Experience the BigwigDigital difference and leap ahead of
            your competitors.
          </p>
          <button
            onClick={openModal}
            className="inline-block mt-4 bg-[#1752B4] text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 text-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="About Us"
            className="w-full max-w-sm md:max-w-xl rounded-lg"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
            >
              ✖
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
