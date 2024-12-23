import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const SunflowerEffect: React.FC = () => {
  const [radius, setRadius] = useState(0);
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) {
        setRadius(250);
      } else {
        setRadius(0);
      }
    },
  });

  const images = [
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0dc17b116bb2a191be3fa_1.webp", alt: "Profile 1" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d1e09b7464f2764ded8677_5.webp", alt: "Profile 2" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0dc6178072902b3f2fc67_6.webp", alt: "Profile 3" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0dc6928e0e26b26b68c0f_7.webp", alt: "Profile 4" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1d7abb12a7bd7982a8e07_8.webp", alt: "Profile 5" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0dc4659edc558fbb8fc0b_4.webp", alt: "Profile 6" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0dc3ec9ed0645648ade63_3.webp", alt: "Profile 7" },
    { src: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1d79a103ea22bc93eab01_2.webp", alt: "Profile 8" },
  ];

  const totalImages = images.length;

  return (
    <div className="md:min-h-[150vh] flex items-center justify-center relative">
      <div
        ref={ref}
        className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center"
      >
        {images.map((image, index) => {
          const angle = (360 / totalImages) * index;
          const targetX =
            radius === 250 ? Math.cos((angle * Math.PI) / 180) * radius : 0;
          const targetY =
            radius === 250 ? Math.sin((angle * Math.PI) / 180) * radius : 0;

          return (
            <div
              key={index}
              className={`absolute ${
                radius === 250 ? "sm:transition-transform sm:duration-500" : ""
              } ease-out sm:block hidden`}
              style={{
                transform: `translate(${targetX}px, ${targetY}px) scale(${
                  radius === 250 ? 1 : 0.8
                })`,
                opacity: radius === 250 ? 1 : 0.7,
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute text-center transition-all transform flex flex-col items-center justify-center w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <h1 className="text-xl font-bold leading-relaxed text-gray-800 lg:text-4xl">
          Transform <br /> engagement into real{" "}
          <span role="img" aria-label="clients">
            ✌️
          </span>{" "}
          clients
        </h1>
      </div>
    </div>
  );
};

export default SunflowerEffect;
