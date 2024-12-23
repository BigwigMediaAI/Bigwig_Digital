import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollOverlappingText: React.FC = () => {
  const items = ["Social Media", "SEO", "Content", "Advertising"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number, inView: boolean) => {
    if (inView) {
      setCurrentIndex(index);
    }
  };

    // Light colors
    const colors = ["#D1E7FF", "#E9D5FD", "#A7F3D0", "#FEF08A"];
    // Different rotation values for tilt effect
    const rotations = ["-5deg", "5deg", "3deg", "-3deg"];

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen mx-auto mt-20">
      <h1 className="max-w-7xl text-4xl md:text-7xl mx-auto font-bold mb-6">
        We help you with{" "}
        <span role="img" aria-label="thumbs up">
          👍
        </span>
      </h1>
      <div className="hidden md:block relative w-full max-w-md h-64 overflow-hidden">
        {/* Display the current text */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {items.map((item, index) => (
            <span
              key={index}
              className={`absolute text-xl md:text-6xl font-semibold transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                backgroundColor: colors[index],
              padding: "1.5rem 2.5rem",
              borderRadius: "999px",
              transform: `rotate(${rotations[index]})`,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Scrollable trigger sections */}
        <div className="scrollable-container">
          {items.map((_, index) => (
            <div key={index} className="h-64 flex-shrink-0">
              <InViewTrigger index={index} onInView={handleInView} />
            </div>
          ))}
        </div>
      </div>

       {/* Mobile View */}
       <div className=" md:hidden flex flex-col space-y-4 items-center mb-10">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-3xl font-semibold"
            style={{
              backgroundColor: colors[index],
              padding: "1.5rem 3.5rem",
              borderRadius: "999px",
              transform: `rotate(${rotations[index]})`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
                .scrollable-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          max-height: 100%;
        }

        /* Hide scrollbar in WebKit browsers */
        .scrollable-container::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        /* Hide scrollbar in Firefox */
        .scrollable-container {
          scrollbar-width: none;
        }     
              `}</style>
    </div>
  );
};

type InViewTriggerProps = {
  index: number;
  onInView: (index: number, inView: boolean) => void;
};

const InViewTrigger: React.FC<InViewTriggerProps> = ({ index, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: false,
  });

  React.useEffect(() => {
    onInView(index, inView);
  }, [inView, index, onInView]);

  return <div ref={ref} className="h-full w-full"></div>;
};

export default ScrollOverlappingText; 