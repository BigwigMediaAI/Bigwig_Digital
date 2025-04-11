import React, { useState } from "react";
import { useTrail, animated } from "@react-spring/web"; // Import animations
import hero_img from "../assets/desk-office-with-online-marketing-business-concept-removebg-preview.png";
import ContactUs from "./Contact";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Content for animation
  const items = [
    "Say goodbye 👋 ",
    "to old marketing",
    "Try BigWigMedia ",
    "Powered by AI",
    "Discover a smarter way to manage your marketing campaigns with the power of AI. Transform your brand and reach new heights effortlessly.",
  ];

  // Animation logic
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 30 }, // Adjust for smoother animation
    delay: 200, // Optional delay
  });

  return (
    <div
      id="top"
      className="flex flex-col md:flex-row items-center justify-between bg-white mt-5 mb-10 md:mb-12 px-4 md:px-16"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        {trail.map((style, index) => (
          <animated.div key={index} style={style} className="mb-2">
            {index === 0 || index === 1 ? (
              <h1
                className={`text-4xl md:text-6xl font-bold ${
                  index === 1 ? "line-through text-gray-400" : ""
                }`}
              >
                {items[index]}
              </h1>
            ) : index === 2 ? (
              <h1 className="text-4xl md:text-6xl font-bold">{items[index]}</h1>
            ) : index === 3 ? (
              <h1 className="text-3xl md:text-6xl font-bold text-blue-500 italic">
                {items[index]}
              </h1>
            ) : (
              <p className="text-gray-600 mt-4">{items[index]}</p>
            )}
          </animated.div>
        ))}
        <button className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          <a href="/Contact">Contact Us</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={hero_img}
          alt="Marketing AI Illustration"
          className="w-full md:w-[800px] object-cover rounded-lg"
        />
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
    </div>
  );
};

export default Hero;
