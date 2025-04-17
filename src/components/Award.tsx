import React from "react";
import award1 from "../assets/partner/award1.png";
import award2 from "../assets/partner/best-seo-award.png";
import award3 from "../assets/partner/google-premier-partner-awards_0-1.jpg";

// Add more awards as needed

const awards = [
  {
    title: "Top Digital Marketing Agency 2024",
    image: award1,
  },
  {
    title: "Google Premier Partner",
    image: award2,
  },
  {
    title: "Best SEO Company",
    image: award3,
  },

  // Add more awards here if needed
];

const AwardSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-4 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-16">
        {/* Left: Title */}
        <div className="text-center md:text-left">
          <h2 className="text-md md:text-xl text-gray-800 mb-2">OUR AWARDS</h2>
        </div>

        {/* Right: Awards as images */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-8">
          {awards.map((award, index) => (
            <img
              key={index}
              src={award.image}
              alt={award.title}
              title={award.title}
              className="w-20 h-16 object-contain hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
