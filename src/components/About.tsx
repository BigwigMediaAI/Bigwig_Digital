import { useState, useEffect } from "react";

const rotatingWords = ["Trendsetters", "Innovative", "Unique", "Dynamic"];

const AboutUs = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0f0f11] text-white px-6 md:px-14 lg:px-20 py-20"
    >
      {/* Heading and Description */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  items-start">
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
          In this convoluted industry that is subjected to exponential growth
          and constant evolution, the first impression lasts a lifetime. As the
          best digital marketing company in India, our aim is not only to
          harness the capability of SEO, Google Ads & Facebook Marketing to
          propel your business but to creatively design stunning websites with
          ‘brand perception’ & ‘conversions’ as the key parameters. Working with
          us, you get the most of your investment in marketing. Listed below are
          some of the reasons why:
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {/* Card 1 */}
        <div className="bg-[#1b1b1e] rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Innovative and Passionate
          </h3>
          <hr className="border-gray-600 mb-4" />
          <p className="text-lg text-gray-400">
            We serve as the catalyst propelling your brand’s journey to success,
            leveraging the transformative power of captivating storytelling and
            strategic brand building. Our strong passion for creativity makes us
            the best digital marketing agency in Noida and other areas as well.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1b1b1e] rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Communication is a key</h3>
          <hr className="border-gray-600 mb-4" />
          <p className="text-lg text-gray-400">
            Effective communication helps to build a healthy relationship with
            our clients. So, at every stage of the project, we are transparent
            with our work, constantly updating results, delivering projects on
            time, and keeping you on loop. No surprises, just smooth sailing and
            high-fives prevailing!
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#1b1b1e] rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Good Return on Investment
          </h3>
          <hr className="border-gray-600 mb-4" />
          <p className="text-lg text-gray-400">
            PWorking with us implies significant cost benefits for your company.
            We provide all of our web development and digital marketing
            solutions at reasonable prices. Our experts take every measure
            possible to guarantee that all money invested in the project will
            provide a profit.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-[#1b1b1e] rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            A Gamut of Services under One Roof
          </h3>
          <hr className="border-gray-600 mb-4" />
          <p className="text-lg text-gray-400">
            All of the services you might need are included in our list, from
            designing your website to advertising it online. Proudly recognised
            as the best digital marketing agency in Noida, we provide a
            comprehensive range of services, including web development, CMS
            development, e-commerce development, mobile app development, SEO,
            SEM, and SMO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
