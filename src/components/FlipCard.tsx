import { useState, useRef } from "react";
import {
  FaUsers,
  FaBullhorn,
  FaBroadcastTower,
  FaNewspaper,
  FaVideo,
  FaLightbulb,
  FaBrush,
} from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FlipCard = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1200, // 👈 slow animation (you can adjust between 1000–1500 for even slower)
      once: false, // 👈 animate every time it scrolls into view
      mirror: false, // 👈 don't animate again when scrolling back up (optional)
      easing: "ease-in-out", // 👈 smoother slow animation
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);

  const cards = [
    {
      id: "solutions1",
      solution: "Lead Management System",
      title: "Effortlessly Managing Leads from First Click to Final Sale",
      description:
        "Boost your brand with a lead system so smooth, your competitors will wonder if it's magic. Say goodbye to missed opportunities and hello to seamless conversions!",
      bgColor: "bg-neutral-950",
      icon: <FaUsers className="text-4xl text-yellow-600" />,
    },
    {
      id: "solutions2",
      solution: "Impactful Awareness Campaigns",
      title: "Unforgettable Campaigns to Make Your Brand the Talk of the Town",
      description:
        "Ready to shine? We’ll grab eyeballs, spark emotions, and deliver success with strategies so good, even your grandma will notice your brand.",
      bgColor: "bg-neutral-950",
      icon: <GiAwareness className="text-4xl text-blue-600" />,
    },
    {
      id: "solutions3",
      solution: "Influencer Marketing",
      title: "Amplify Your Brand’s Story with Voices Everyone Trusts",
      description:
        "From strategy to stardom, we’ll pair you with influencers who make waves—and results that’ll make you say, ‘Is this real life?’",
      bgColor: "bg-neutral-950",
      icon: <FaBullhorn className="text-4xl text-purple-600" />,
    },
    {
      id: "solutions4",
      solution: "Live Coverage",
      title: "Teleporting Your Audience to the Heart of Every Event",
      description:
        "From concerts to conferences, we’ll bring the action to life—no FOMO, just unforgettable moments straight to their screens.",
      bgColor: "bg-neutral-950",
      icon: <FaBroadcastTower className="text-4xl text-green-600" />,
    },
    {
      id: "solutions5",
      solution: "Public Relations",
      title: "Turning Your Achievements into Headlines That Matter",
      description:
        "From local buzz to global fame, we’ll make sure your story lands where it counts. Fame not included, but definitely earned!",
      bgColor: "bg-neutral-950",
      icon: <FaNewspaper className="text-4xl text-pink-600" />,
    },
    {
      id: "solutions6",
      solution: "Video Shoots",
      title: "Capturing Your Brand’s Essence, One Frame at a Time",
      description:
        "From brand stories to jaw-dropping visuals, our videos don’t just tell stories—they make audiences stop scrolling.",
      bgColor: "bg-neutral-950",
      icon: <FaVideo className="text-4xl text-teal-600" />,
    },
    {
      id: "solutions7",
      solution: "Branded Content",
      title: "Crafting Clever, Gorgeous Content That Speaks Your Brand’s Soul",
      description:
        "We make content that’s funny, smart, and drop-dead gorgeous. Your audience? They won’t just look; they’ll stay for the encore.",
      bgColor: "bg-neutral-950",
      icon: <FaBrush className="text-4xl text-orange-600" />,
    },
    {
      id: "solutions8",
      solution: "Creative Innovations",
      title: "Bringing Your Wildest Brand Ideas to Life with Unmatched Flair",
      description:
        "No cookie-cutter solutions here! Just bold ideas so wild, your audience will say, ‘Wow, didn’t see that coming!’",
      bgColor: "bg-neutral-950",
      icon: <FaLightbulb className="text-4xl text-violet-600" />,
    },
    {
      id: "solutions9",
      solution: "Affiliate Marketing",
      title: "Partnering Smartly to Multiply Your Reach!",
      description:
        "Think of us as your brand’s ultimate matchmaker—pairing you up with affiliates who will shout your praises from the rooftops (or at least their websites). We’ll help you create a win-win partnership so smooth, even Cupid would be jealous. Cha-ching for everyone involved!",
      bgColor: "bg-neutral-950",
      icon: <SiGooglemarketingplatform className="text-4xl text-red-400" />,
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleFlip = (index: number) => {
    const updatedStates = [...flippedStates];
    updatedStates[index] = !updatedStates[index];
    setFlippedStates(updatedStates);
  };

  return (
    <div id="solution" className="w-11/12 mx-auto py-4 mb-10">
      {/* ✅ Mobile View - Single FlipCard with Arrows */}
      <div className="block md:hidden relative">
        <div className="flex justify-center items-center mb-4">
          {/* Arrows Above */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between  z-10">
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

          <div className="w-full px-10  mx-auto perspective">
            <div
              className={`relative w-full h-[300px] rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
                flippedStates[mobileIndex] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div
                className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border border-gray-700 ${cards[mobileIndex].bgColor}`}
              >
                <div className="absolute top-6 left-4">
                  {cards[mobileIndex].icon}
                </div>
                <div className="absolute top-6 right-4">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt="icon"
                    className="w-8 invert"
                  />
                </div>
                <div className="p-4 h-1/2 flex flex-col mt-20">
                  <h3 className="text-lg font-bold text-left text-white">
                    {cards[mobileIndex].solution}
                  </h3>
                  <p className="mt-6 text-white">{cards[mobileIndex].title}</p>
                </div>
                <button
                  onClick={() => handleFlip(mobileIndex)}
                  className="absolute bottom-4 right-4 px-2 py-2 border-2 border-r-4 border-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Back */}
              <div
                className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${cards[mobileIndex].bgColor}`}
              >
                <a href="contact">
                  <div className="border-2 border-black absolute top-6 left-4 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                    Contact
                  </div>
                </a>
                <div className="absolute top-6 right-4">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt="icon"
                    className="w-8 invert"
                  />
                </div>
                <p className="text-justify text-sm text-white">
                  {cards[mobileIndex].description}
                </p>
                <button
                  onClick={() => handleFlip(mobileIndex)}
                  className="px-2 py-2 border-2 border-r-4 border-black absolute bottom-4 right-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition font-bold text-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (sectionsRef.current[card.id] = el)}
            id={card.id}
            data-aos="zoom-in"
            className="group w-full md:w-96 h-[300px] perspective mx-auto"
          >
            <div
              className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
                flippedStates[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div
                className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border border-gray-700 ${card.bgColor}`}
              >
                <div className="absolute top-6 left-4">{card.icon}</div>
                <div className="absolute top-6 right-4">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt="icon"
                    className="w-8 invert"
                  />
                </div>
                <div className="p-4 h-1/2 flex flex-col mt-20">
                  <h3 className="text-lg font-bold text-left text-white">
                    {card.solution}
                  </h3>
                  <p className="mt-6 text-white">{card.title}</p>
                </div>
                <button
                  onClick={() => handleFlip(index)}
                  className="absolute bottom-4 right-4 px-4 py-4 border-2 border-r-4 border-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Back */}
              <div
                className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
              >
                <a href="contact">
                  <div className="border-2 border-black absolute top-6 left-4 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                    Contact
                  </div>
                </a>
                <div className="absolute top-6 right-4">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt="icon"
                    className="w-8 invert"
                  />
                </div>
                <p className="text-justify text-md text-white">
                  {card.description}
                </p>
                <button
                  onClick={() => handleFlip(index)}
                  className="px-4 py-3 border-2 border-r-4 border-black absolute bottom-4 right-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition font-bold text-2xl"
                >
                  —
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
