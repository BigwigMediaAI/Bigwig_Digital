import React from "react";
import award1 from "../assets/partner/Google-Partner-Logo-Vector.svg-.png";
import award2 from "../assets/partner/Google-Partner-Logo-Vector.svg-.png";
import award3 from "../assets/partner/Google-Partner-Logo-Vector.svg-.png";
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
];

const AwardSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Awards & Recognition
        </h2>
        <p className="text-gray-600 mb-10">
          We're honored to be recognized for our work in digital marketing and
          innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
