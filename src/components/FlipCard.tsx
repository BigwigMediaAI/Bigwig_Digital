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
const FlipCard = () => {
  const cards = [
    {
      id: "solutions1",
      solution: "Lead Management System",
      title: "Effortlessly Managing Leads from First Click to Final Sale",
      description:
        "Boost your brand with a lead system so smooth, your competitors will wonder if it's magic. Say goodbye to missed opportunities and hello to seamless conversions!",
      bgColor: "bg-[#28282B]",
      icon: <FaUsers className="text-4xl text-yellow-600" />,
    },
    {
      id: "solutions2",
      solution: "Impactful Awareness Campaigns",
      title: "Unforgettable Campaigns to Make Your Brand the Talk of the Town",
      description:
        "Ready to shine? We’ll grab eyeballs, spark emotions, and deliver success with strategies so good, even your grandma will notice your brand.",
      bgColor: "bg-[#28282B]",
      icon: <GiAwareness className="text-4xl text-blue-600" />,
    },
    {
      id: "solutions3",
      solution: "Influencer Marketing",
      title: "Amplify Your Brand’s Story with Voices Everyone Trusts",
      description:
        "From strategy to stardom, we’ll pair you with influencers who make waves—and results that’ll make you say, ‘Is this real life?’",
      bgColor: "bg-[#28282B]",
      icon: <FaBullhorn className="text-4xl text-purple-600" />,
    },
    {
      id: "solutions4",
      solution: "Live Coverage",
      title: "Teleporting Your Audience to the Heart of Every Event",
      description:
        "From concerts to conferences, we’ll bring the action to life—no FOMO, just unforgettable moments straight to their screens.",
      bgColor: "bg-[#28282B]",
      icon: <FaBroadcastTower className="text-4xl text-green-600" />,
    },
    {
      id: "solutions5",
      solution: "Public Relations",
      title: "Turning Your Achievements into Headlines That Matter",
      description:
        "From local buzz to global fame, we’ll make sure your story lands where it counts. Fame not included, but definitely earned!",
      bgColor: "bg-[#28282B]",
      icon: <FaNewspaper className="text-4xl text-pink-600" />,
    },
    {
      id: "solutions6",
      solution: "Video Shoots",
      title: "Capturing Your Brand’s Essence, One Frame at a Time",
      description:
        "From brand stories to jaw-dropping visuals, our videos don’t just tell stories—they make audiences stop scrolling.",
      bgColor: "bg-[#28282B]",
      icon: <FaVideo className="text-4xl text-teal-600" />,
    },
    {
      id: "solutions7",
      solution: "Branded Content",
      title: "Crafting Clever, Gorgeous Content That Speaks Your Brand’s Soul",
      description:
        "We make content that’s funny, smart, and drop-dead gorgeous. Your audience? They won’t just look; they’ll stay for the encore.",
      bgColor: "bg-[#28282B]",
      icon: <FaBrush className="text-4xl text-orange-600" />,
    },
    {
      id: "solutions8",
      solution: "Creative Innovations",
      title: "Bringing Your Wildest Brand Ideas to Life with Unmatched Flair",
      description:
        "No cookie-cutter solutions here! Just bold ideas so wild, your audience will say, ‘Wow, didn’t see that coming!’",
      bgColor: "bg-[#28282B]",
      icon: <FaLightbulb className="text-4xl text-violet-600" />,
    },
    {
      id: "solutions9",
      solution: "Affiliate Marketing",
      title: "Partnering Smartly to Multiply Your Reach!",
      description:
        "Think of us as your brand’s ultimate matchmaker—pairing you up with affiliates who will shout your praises from the rooftops (or at least their websites). We’ll help you create a win-win partnership so smooth, even Cupid would be jealous. Cha-ching for everyone involved!",
      bgColor: "bg-[#28282B]",
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
    <div
      id="solution"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto py-4 mb-10"
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (sectionsRef.current[card.id] = el)}
          id={card.id}
          className="group w-full sm:w-full md:w-96 h-[300px] perspective mx-auto"
        >
          <div
            className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
              flippedStates[index] ? "rotate-y-180" : ""
            }`}
          >
            <div
              className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden ${card.bgColor}`}
            >
              <div className="absolute top-6 left-4">{card.icon}</div>

              <div className="absolute top-6 right-4 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt="icon"
                  className="w-8 "
                />
              </div>

              <div className="p-4 h-1/2 flex flex-col mt-20">
                <h3 className="text-lg md:text-xl font-bold text-left text-white">
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

            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
            >
              <a href="contact">
                <div className="border-2 border-black absolute top-6 left-4 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                  Contact
                </div>
              </a>
              <div className="absolute top-6 right-4 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt="icon"
                  className="w-8"
                />
              </div>
              <p className="text-justify text-md md:text-lg text-white">
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
  );
};

export default FlipCard;
