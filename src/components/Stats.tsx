import React from "react";
import { FaGlobe, FaMedal } from "react-icons/fa";
import line2 from "../assets/line2.png";
import line1 from "../assets/line1.png";

const Stats: React.FC = () => {
  return (
    <div className="relative bg-[#1752B4] py-8 overflow-hidden mb-6">
      {/* Top Decorative Line */}
      <img
        src={line2}
        alt="top decoration"
        className="absolute top-0 left-0 w-full z-0"
      />

      {/* Main Stats Section */}
      <div className="relative w-11/12 lg:w-10/12 mx-auto z-10">
        <div className="grid p-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="flex items-center gap-2">
              <FaMedal className="text-2xl text-white" />
              <p className="text-lg lg:text-2xl text-white font-bold">No.1</p>
            </div>
            <p className="text-sm lg:text-lg text-white">Product</p>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <div className="flex items-center gap-2">
              <FaGlobe className="text-2xl text-white" />
              <p className="text-lg lg:text-2xl text-white font-bold">20+</p>
            </div>
            <p className="text-sm lg:text-lg text-white">Countries</p>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-lg lg:text-2xl text-white font-bold">1.4M+</p>
            <p className="text-sm lg:text-lg text-white">Happy Users</p>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-lg lg:text-2xl text-white font-bold">8.5M+</p>
            <p className="text-sm lg:text-lg text-white">Files Converted</p>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-lg lg:text-2xl text-white font-bold">150+</p>
            <p className="text-sm lg:text-lg text-white">Online Tools</p>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-lg lg:text-2xl text-white font-bold">12.6M+</p>
            <p className="text-sm lg:text-lg text-white">Content Generated</p>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <img
        src={line1}
        alt="bottom decoration"
        className="absolute bottom-0 left-0 w-full z-0"
      />
    </div>
  );
};

export default Stats;
