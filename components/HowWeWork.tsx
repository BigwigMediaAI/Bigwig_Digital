"use client";
import { useEffect, useState } from "react";
import understanding from "../Assets/method/understanding.png";
import brainstroming from "../Assets/method/brainstorming.png";
import implementation from "../Assets/method/lmplementation.png";
import maintenance from "../Assets/method/maintenance.png";
import chooseYou from "../Assets/method/choices-order-svgrepo-com (1).svg";
import Rocket from "../Assets/method/rocket-svgrepo-com.svg";
import analysis from "../Assets/method/analysis-analytics-chart-2-svgrepo-com.svg";
import support from "../Assets/method/support-online-center-svgrepo-com.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const workFlowData = [
  {
    id: "We_Attend",
    title: "We Attend",
    image: understanding,
    content:
      "Every good story starts with 'We were just talking…' Well, we listen. Your ideas, concerns, and caffeine intake levels, everything. We’re basically the therapists of the business world, minus the couch and with a lot more coffee.",
  },
  {
    id: "we_probe",
    title: "We Probe",
    image: brainstroming,
    content:
      "We ask questions. A lot of them. Like a nosy neighbor, but helpful. We dive deep into your ideas, sprinkle a bit of our own madness, and make it all look shiny and brilliant.",
  },
  {
    id: "We_Breakthrough",
    title: "We Breakthrough",
    image: implementation,
    content:
      "Boom! That’s the sound of barriers breaking and breakthroughs happening. We don’t just think outside the box, we recycle the box, throw a party, and build a rocket with the leftover cardboard.",
  },
  {
    id: "We_Present",
    title: "We Present",
    image: maintenance,
    content:
      "Now comes the show-and-tell. Except we don't show stick figures, we show magic. We bring the big guns: shiny presentations, genius ideas, and a slight addiction to overdelivering.",
  },
  {
    id: "You_choose",
    title: "You Choose",
    image: chooseYou,
    content:
      "Here’s the plot twist—you’re in charge. Like the captain of the ship, or the final judge on a reality show. We bring the ideas, you bring the nod, and together we make history.",
  },
  {
    id: "We_Execute",
    title: "We Execute",
    image: Rocket,
    content:
      "This is where the cape comes on. We fly into action like caffeinated superheroes. Websites? Apps? Campaigns? You name it, we build it, launch it, and probably high-five each other afterward.",
  },
  {
    id: "We_Analyze",
    title: "We Analyze and Optimize",
    image: analysis,
    content:
      "Done? Ha, not yet. We zoom in like CSI experts, checking what worked, what didn’t, and who forgot to put a semicolon. If Plan A fails—don’t worry, we’ve got plans B through Z.",
  },
  {
    id: "We_retain",
    title: "We Retain",
    image: support,
    content:
      "You thought we were done? Plot twist! We stick around like glitter—helpful, sparkly, and impossible to get rid of. It’s not a goodbye, it’s a ‘What’s next?’",
  },
];

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(workFlowData[0].id);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(() => {
        const sectionId = window.location.hash.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 120;
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : workFlowData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < workFlowData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div id="method" className="mb-10 py-4 px-5 bg-white">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900">
        Method to Madness
      </h2>

      {/* Mobile View */}
      <div className="md:hidden relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-md border border-gray-300 bg-white">
        <div className="relative bg-gradient-to-r from-red-500 to-red-600 flex justify-center items-center h-40">
          <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <Image
            src={workFlowData[activeIndex].image}
            alt={workFlowData[activeIndex].title}
            className="w-14 h-14 z-10"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            {workFlowData[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {workFlowData[activeIndex].content}
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-4 gap-4">
          {workFlowData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer p-4 rounded-xl text-center transition-all duration-300 shadow-sm border border-gray-300
              ${
                active === item.id
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 w-11/12 md:w-5/6 mx-auto bg-white border border-gray-300 p-6 rounded-xl shadow-md">
          {workFlowData
            .filter((item) => item.id === active)
            .map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold mb-3 text-red-600 border-b border-red-400 inline-block pb-1">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
