"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading & Rating */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              CLIENT TESTIMONIALS
            </h2>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <div className=" rounded-full p-2 text-black text-xl font-bold">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="w-8"
                />
              </div>
              <div>
                <p className="font-bold text-lg">Rated 4.8/5</p>
                <p className="text-gray-600 text-sm">250+ Google Reviews</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Don't just take our word for it. Here's what our clients have to
              say about their Unique experience.
            </p>
          </div>

          {/* Slick Slider */}
          <div className="md:w-2/3 w-full">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-72">
                    <p className="text-gray-700 mb-4 ">
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
                        <p className="font-semibold">{item.name}</p>
                        <div className="flex text-yellow-500">
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
      </div>
    </section>
  );
}
