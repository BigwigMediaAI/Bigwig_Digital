"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { CustomArrowProps } from "react-slick";
import { useState } from "react";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
}

// Custom Arrow Components
const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer md:hidden"
      onClick={onClick}
    >
      <ChevronRight size={28} className="text-white" />
    </div>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer md:hidden"
      onClick={onClick}
    >
      <ChevronLeft size={28} className="text-white" />
    </div>
  );
};

export default function ImageSlider() {
  const testimonials = [
    {
      name: "Chetan Pandey",
      review:
        "We have been working with Big Wig Media digital for nearly a year and their SEO + PPC combination strategy is giving us steady results. Unlike agency that over promise they deliver consistent improvements and focus on long term growth.",
      rating: 5,
      image: "",
    },
    {
      name: "Aparajita Pandey",
      review:
        "I liked how Big Wig media digital took time to analyse our competitors before suggesting a plan. Their local SEO services helped our restaurant rank higher on Google maps, which brought in a lot of walk in customers. Truly a result oriented team.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV9LGaNpHLRB9zgIuu3-FQAitUeRxKhF-XS986Ll8-SphirLA7CrA=w90-h90-p-rp-mo-br100",
    },
    {
      name: "ESHAAN AGGARWAL",
      review:
        "What I loved most is that they didn’t offer me a one-size-fits-all plan. The strategy they created was tailor-made for my startup’s goals, and it worked beautifully.",
      rating: 5,
      image: "",
    },
    {
      name: "Amit Paal Siingh",
      review:
        "As a business based in Australia I was sceptical engaging with an overseas business but the team at Bigwig was amazing. I got great results at a very affordable pricing structure compared to what I was getting here in Australia. Highly recommended.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVxYdkNjf2_Uda0TFgK4Mt9fA3uftsVT9eAb6YTljLckk_immAXJw=w90-h90-p-rp-mo-ba2-br100",
    },
    {
      name: "Piyush Paswan",
      review:
        "I was struggling with content marketing for my online business. BigWig not only created a content strategy for me but also executed it so well that our engagement grew by 60%. Love their approach!",
      rating: 5,
      image: "",
    },
    {
      name: "Chanchal Sikha",
      review:
        "I own a fashion label and wanted help with Instagram growth. BigWig’s team helped us create a reel strategy that went viral twice in one month. Super impressed!",
      rating: 5,
      image: "",
    },
    {
      name: "Manjot Singh",
      review:
        "They are creative, professional, and most importantly, results-driven. We hired BigWig for PPC and got more leads in the first month than we did in three months with our previous agency.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWocBrIQukTEUH6FyQY-OHikb2HnSX5lb2cg68rB_OW1zUapt_IXw=w90-h90-p-rp-mo-br100",
    },
    {
      name: "Kashvi Chhabra",
      review:
        "Shoutout to the BigWig team for redesigning our outdated website and improving our page speed. It not only looks better now but also performs better in search engines.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVZZS5xpnWcD6qeivGWgPcOxB9vmVoBiGuvRREcL8JdNDsNZNG1AQ=w90-h90-p-rp-mo-br100",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto px-2 mb-16 py-8">
      <h1 className="md:block hidden text-4xl md:text-5xl mb-10 text-center text-gray-100 font-bold">
        What Our Clients Say About Us
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-8 mt-5">
        {/* Left Side Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-100 mb-3">
            CLIENT TESTIMONIALS
          </h2>
          <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt=""
              className="w-10 h-10"
            />
            <div>
              <p className="font-bold text-lg text-gray-100">Rated 4.8/5</p>
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            Don’t just take our word for it. Here’s what our clients have to say
            about their unique experience.
          </p>
        </div>

        {/* Slider */}
        <div className="md:w-2/3 w-full relative">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a href="/contact">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300 font-semibold text-sm md:text-base">
            Want to grow your business?
          </button>
        </a>
      </div>
    </div>
  );
}

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const [showFull, setShowFull] = useState(false);
  const truncateLength = 150;

  const isTruncated = item.review.length > truncateLength;
  const displayedText = showFull
    ? item.review
    : item.review.slice(0, truncateLength);

  return (
    <div className="p-2">
      <div
        className={`bg-gradient-to-br from-gray-900/80 to-gray-950/90 shadow-xl rounded-2xl p-6 border border-gray-700 transition-all duration-300 overflow-hidden ${
          showFull ? "h-auto" : "h-64"
        }`}
      >
        {/* Review */}
        <p className="text-gray-300 mb-3 text-xs md:text-sm leading-relaxed">
          {displayedText}
          {isTruncated && !showFull && "..."}
        </p>

        {/* Read More / Less */}
        {isTruncated && (
          <button
            className="text-blue-400 text-xs mt-1 font-semibold hover:underline"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Show Less" : "Read More"}
          </button>
        )}

        {/* Profile Section */}
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold overflow-hidden text-sm">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{item.name.charAt(0).toUpperCase()}</span>
            )}
          </div>

          <div className="ml-3">
            <p className="font-semibold text-gray-100 text-sm">{item.name}</p>
            <div className="flex mt-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={14} fill="#d49325" stroke="none" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
