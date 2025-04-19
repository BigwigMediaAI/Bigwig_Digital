import { useState } from "react";
import understanding from "../assets/understanding.png";
import brainstroming from "../assets/brainstorming.png";
import implementation from "../assets/lmplementation.png";
import maintenance from "../assets/maintenance.png";

const workFlowData = [
  {
    id: "understanding",
    title: "Understanding",
    image: understanding,
    content:
      "We begin the process by having an in-depth conversation with our clients about the brand. For us, understanding the brand is our priority, and we leave no stone unturned to ask questions. This is crucial when it comes to outlining a brand's success.",
  },
  {
    id: "brainstorming",
    title: "Brainstorming",
    image: brainstroming,
    content:
      "After understanding your company, we work hand in hand with our team to pitch and bring ideas to the table for brainstorming. Here, our team of experts picks the best idea that can help your company achieve its ultimate vision.",
  },
  {
    id: "implementation",
    title: "Implementation",
    image: implementation,
    content:
      "In this phase, we implement our core strategy to turn your vision into reality. We do not only promise, we believe in bringing tangible results. Here, our best team works effortlessly to execute a master plan to boost your brand success.",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    image: maintenance,
    content:
      "After the completion of a project, our job was far from over. We take pride in keeping your project in prime condition. Instead of just handing over your project, our team actively engages with you for daily work. We’re not just an affordable digital marketing agency, but a dedicated partner committed to your long-term success.",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState("understanding");

  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">How We Work?</h2>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden gap-4">
        {workFlowData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-4">
            <div
              onClick={() => setActive(active === item.id ? "" : item.id)}
              className={`cursor-pointer p-4 rounded-xl text-center transition-all duration-300 ${
                active === item.id
                  ? "bg-[#D20E0E] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-2 object-contain"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            {active === item.id && (
              <div className="mt-4 text-gray-700 text-sm">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center gap-4">
          {workFlowData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer p-6 rounded-xl w-60 text-center shadow-md transition-all duration-300 ${
                active === item.id
                  ? "bg-[#D20E0E] text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-2 object-contain"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-8 rounded-xl max-w-5xl mx-auto shadow-md">
          {workFlowData
            .filter((item) => item.id === active)
            .map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold mb-2 border-b border-[#D20E0E] inline-block pb-1">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-gray-700">{item.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
