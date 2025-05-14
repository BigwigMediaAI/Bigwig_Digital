"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Custom Arrow Components
const NextArrow = (props: any) => {
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

const PrevArrow = (props: any) => {
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
      name: "Amal Al Khaja",
      review:
        "I recently purchased a property through Riverfront .Their team provided expert guidance, and their knowledge of the Dubai market is unparalleled....",
      rating: 5,
      image:
        "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
    },
    {
      name: "Fatima Al Sayegh",
      review:
        "Riverfront helped me find my dream home in Dubai, and I couldn't be happier with the service I received...",
      rating: 5,
      image:
        "https://t3.ftcdn.net/jpg/11/78/73/70/360_F_1178737095_LwMHsASBgW6xP8q58hjc6rH20gC2t4lg.jpg",
    },
    {
      name: "Khalid Al Mansoori",
      review:
        "I've invested in several properties in Dubai, but my experience with Riverfront has been exceptional...",
      rating: 5,
      image:
        "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1596588103144-YDOUWGJ09KUD4SMJJD6A/company+profile+picture.jpg",
    },
    {
      name: "Prakul Rathnakar",
      review:
        "I would like to thank Vanessa Lenger from Unique Properties for helping me with a hassle-free experience...",
      rating: 5,
      image:
        "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1596588691090-TCV46R86567N1U47WJTT/corporateprofile+image.jpg",
    },
    {
      name: "Pascal Macauilt",
      review:
        "Anna provided a great support at all steps of the transaction...",
      rating: 5,
      image:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    {
      name: "Rob Sundberg",
      review:
        "They took care of me at every step, and I can proudly recommend both agents...",
      rating: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Emily Johnson",
      review:
        "Amazing service! The team was professional and helped me find exactly what I was looking for...",
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZdrybHV3F79eAqX8lguAtd1W6Z037RAR7eDdxxi96nDBs490Dd5oH9EQAbC-Ubk5ad0&usqp=CAU",
    },
    {
      name: "Michael Smith",
      review:
        "Very pleased with the experience. They guided me throughout the entire process...",
      rating: 5,
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg",
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
    <div className="w-11/12 mx-auto px-2 mb-10 py-4">
      <h1 className="md:block hidden text-5xl mb-5 text-center text-gray-100 font-bold">
        Look What Our Beloved Clients Say About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-5">
        {/* Left Side */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-100">
            CLIENT TESTIMONIALS
          </h2>
          <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
            <div className="rounded-full p-2 text-gray-100 text-xl font-bold">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt=""
                className="w-8"
              />
            </div>
            <div>
              <p className="font-bold text-lg text-gray-100">Rated 4.8/5</p>
              <p className="text-gray-400 text-sm">250+ Google Reviews</p>
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            Don't just take our word for it. Here's what our clients have to say
            about their Unique experience.
          </p>
        </div>

        {/* Slider */}
        <div className="md:w-2/3 w-full relative">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-neutral-950 shadow-md rounded-lg p-6 h-72 w-3/4 md:w-full mx-auto border border-gray-700">
                  <p className="text-gray-200 mb-4">
                    {item.review.slice(0, 100)}...
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-100">{item.name}</p>
                      <div className="flex">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#d49325"
                            stroke="none"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <a href="/contact">
          <button className="mt-6 bg-[#1752B4] text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 text-sm">
            Want to grow your business
          </button>
        </a>
      </div>
    </div>
  );
}
