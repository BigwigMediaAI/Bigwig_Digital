import React, { useEffect, useState } from "react";
import hero from "../assets/video.mp4";

// Dummy logo imports or use your actual logos
import googleLogo from "../assets/partner/Google-Partner.png";
import metaLogo from "../assets/partner/Met-Business-Partners.png";
import bingads from "../assets/partner/bing-ads.png";
import hubspotLogo from "../assets/partner/hubspot.png";

const keywords = [
  "Website & Mobile App Designing",
  "Social Media Marketing (SMO)",
  "Performance Marketing (Google & Meta Ads)",
  "Search Engine Optimization (SEO)",
  "Creatives Videos Graphics",
];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [waitBeforeDelete, setWaitBeforeDelete] = useState(false);

  useEffect(() => {
    const currentWord = keywords[currentWordIndex];

    if (waitBeforeDelete) {
      const delayTimeout = setTimeout(() => {
        setWaitBeforeDelete(false);
        setIsDeleting(true);
      }, 1000);
      return () => clearTimeout(delayTimeout);
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) => {
          if (!isDeleting) {
            const nextText = currentWord.substring(0, prev.length + 1);
            if (nextText === currentWord) setWaitBeforeDelete(true);
            return nextText;
          } else {
            const nextText = prev.substring(0, prev.length - 1);
            if (nextText === "") {
              setIsDeleting(false);
              setCurrentWordIndex(
                (prevIndex) => (prevIndex + 1) % keywords.length
              );
            }
            return nextText;
          }
        });
      },
      isDeleting ? 20 : 60
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, waitBeforeDelete]);

  return (
    <div className="relative w-full h-[240px] sm:h-[400px] md:h-[80vh] mb-10 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        ref={(videoRef) => {
          if (videoRef) {
            videoRef.playbackRate = 0.8;
          }
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-20">
        <h1 className="font-bold text-lg md:text-4xl mb-3 max-w-4xl">
          We help businesses grow digitally!
        </h1>
        <h2 className="text-sm md:text-lg italic mb-6">
          <span className="text-white text-3xl font-bold">
            {displayText}
            <span className="border-r-2 border-blue-300 animate-pulse ml-1"></span>
          </span>
        </h2>
        <h2 className="text-sm md:text-lg italic mb-6">Powered by AI</h2>
      </div>

      {/* Partner Logos Overlayed at Bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-4 w-full">
        <div className="py-2 px-4 max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={googleLogo}
              alt="Google"
              className="w-20 h-10 object-contain"
            />
            <div className="w-px h-10 bg-white"></div>

            <img
              src={metaLogo}
              alt="Meta"
              className="w-20 h-10 object-contain"
            />
            <div className="w-px h-10 bg-white"></div>

            <img
              src={bingads}
              alt="SEMrush"
              className="w-20 h-10 object-contain"
            />
            <div className="w-px h-10 bg-white"></div>

            <img
              src={hubspotLogo}
              alt="HubSpot"
              className="w-20 h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
