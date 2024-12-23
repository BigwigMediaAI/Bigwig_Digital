import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Business Owner",
    company: "Cafe Delight",
    text: "BigwigORM helped us respond to reviews quickly and improved our online reputation. Our rating went from 4.0 to 4.8 stars in just 2 months!",
    image: "https://randomuser.me/api/portraits/women/3.jpg", // Image 1
  },
  {
    name: "Michael Brown",
    role: "Operations Manager",
    company: "Urban Stay Hotels",
    text: "Managing reviews across platforms was overwhelming until we started using BigwigORM. It saved us hours every week and boosted customer trust.",
    image: "https://randomuser.me/api/portraits/men/5.jpg", // Image 2
  },
  {
    name: "Sophia Martinez",
    role: "Head of Marketing",
    company: "RetailX",
    text: "The analytics and sentiment analysis gave us deep insights into customer feedback. It’s a must-have tool for businesses serious about their reputation.",
    image: "https://randomuser.me/api/portraits/women/4.jpg", // Image 3
  },
  {
    name: "James Wilson",
    role: "Community Manager",
    company: "Local Eats",
    text: "With automated review requests, we’ve collected more positive reviews than ever before. Our business has seen noticeable growth!",
    image: "https://randomuser.me/api/portraits/men/8.jpg", // Image 4
  },
];

const ImageSlider: React.FC = () => {
    const settings = {
      infinite: true, // Loop infinitely
      speed: 2000, // Speed of slide transition (in ms)
      slidesToShow: 3, // Number of visible slides
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 4000, // Continuous autoplay with no delay
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ] // Smooth animation
    };
  
    return (
      <section id="case" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            What Our Partners Are Saying
          </h2>
  
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </div>
                <p className="text-lg italic text-gray-600 mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default ImageSlider;
  