import { useState } from "react";
import understanding from "../assets/understanding.png";
import brainstroming from "../assets/brainstorming.png";
import implementation from "../assets/lmplementation.png";
import maintenance from "../assets/maintenance.png";
import chooseYou from "../assets/choices-order-svgrepo-com (1).svg";
import Rocket from "../assets/rocket-svgrepo-com.svg";
import analysis from "../assets/analysis-analytics-chart-2-svgrepo-com.svg";
import support from "../assets/support-online-center-svgrepo-com.svg";

const workFlowData = [
  {
    id: "We_Attend",
    title: "We Attend",
    image: understanding,
    content:
      "In order to have a deal, both parties have their own concerns. We on the other have concerns with techniques to kick-start your business, if not done already, or to find ways to have party on occasions of success.",
  },
  {
    id: "we_probe",
    title: "We Probe",
    image: brainstroming,
    content:
      "Our work begins and ends on your Ideology. If well suited with your plan, we further bling it up according to our capacity.",
  },
  {
    id: "We_Breakthrough",
    title: "We Breakthrough",
    image: implementation,
    content:
      "We believe in setting an example. That example could be dealing with and for your business, we’re up for it. BigWig has its own team of diverse and equally talented professionals who inhales your motive behind the business and exhales success.",
  },
  {
    id: "We_Present",
    title: "We Present",
    image: maintenance,
    content:
      "Do you know that one idea leads to another? We like to prepare you with the best.\n We conquer. Rest is history.",
  },
  {
    id: "You_choose",
    title: "You choose",
    image: chooseYou,
    content:
      "Let's talk about how it all works. The Ideas are generated, of course from your side, and we work upon giving wings to that ideas. Cheesy enough?! But for real, the starter pack involves your basic knowledge/thoughts towards your business to which we further incorporate our ideas, fulfilling prophecies that never were written.",
  },
  {
    id: "We_Execute",
    title: "We Execute",
    image: Rocket,
    content:
      "Once you have selected the best solution that inspires you, our team of specialists goes into execution mode. Whether it's a digital advertising campaign, web-design project, mobile application, web application, creative campaign, media and events - your project will be accomplished in a swift way and with our team's complete devotion.",
  },
  {
    id: "We_Analyze",
    title: "We Analyze and Optimize",
    image: analysis,
    content:
      "Things are done. Not locked yet. If it works according to the plan, it is a success. If not, a king takes time to build his territory. Don’t Worry, backup plan A-Z are already in store",
  },
  {
    id: "We_retain",
    title: "We Retain",
    image: support,
    content:
      "Once you've seen what we can do, you won’t want to let us go—and guess what? We feel the same! We’re like that loyal friend who remembers your coffee order and your business goals. We don’t just wrap things up and vanish. Nope. We stick around, annoyingly helpful, passionately committed, and always up for a new challenge. Like glitter at a party—you’ll find us long after the confetti settles.",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState("We_Attend");

  return (
    <div id="method" className="text-white py-12 px-4 bg-black">
      <h2 className="text-5xl font-bold text-center mb-10 text-white">
        Method to Madness
      </h2>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden gap-4">
        {workFlowData.map((item) => (
          <div
            key={item.id}
            className="bg-[#121212] border border-gray-700 rounded-xl shadow-md"
          >
            <div
              onClick={() => setActive(active === item.id ? "" : item.id)}
              className={`cursor-pointer p-4 rounded-t-xl text-center transition-all duration-300 ${
                active === item.id
                  ? "bg-[#D20E0E] text-white"
                  : "bg-[#1f1f1f] hover:bg-[#2c2c2c]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 mx-auto mb-2"
              />
              <h3 className="text-base font-semibold">{item.title}</h3>
            </div>
            {active === item.id && (
              <div className="p-4 text-gray-300 whitespace-pre-line text-sm">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
          {workFlowData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer p-4 rounded-xl text-center transition-all duration-300 shadow-md border border-gray-700 ${
                active === item.id
                  ? "bg-[#D20E0E] text-white shadow-lg"
                  : "bg-[#1f1f1f] text-gray-300 hover:bg-[#2c2c2c]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-6xl mx-auto bg-[#1f1f1f] border border-gray-700 p-6 rounded-xl shadow-lg">
          {workFlowData
            .filter((item) => item.id === active)
            .map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold mb-3 text-white border-b border-[#D20E0E] inline-block pb-1">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-300 whitespace-pre-line text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
