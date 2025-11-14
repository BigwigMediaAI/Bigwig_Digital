"use client";
import Nav from "../../../../components/Nav";
import ContactForm from "../../../../components/ContactForm";
import bannerImage from "../../../../Assets/dubai.jpg";
import Footer from "../../../../components/Footer";
import seoImage from "../../../../Assets/Dubai/transformBuisness.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
// import { useState } from "react";
import PopupForm from "../../../../components/PopupForm";
import CTABanner from "../../../../components/CTABanner";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function AffiliateMarketingDubai() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white text-black font-raleway">
      <Nav />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bannerImage.src})`, // replace with your image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Video Shoot Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Capture Your Brand’s Story with Professional Video Shoot Services
              in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s vibrant media landscape, BigWig Media Digital brings
              your brand to life through professional video production. From
              concept to final cut, we create visually stunning videos that
              engage audiences, elevate your brand, and drive results.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Bring Your Brand Story to Life with Professional Video Shoot
              Services in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              In the heart of innovation and luxury, Dubai is a city that
              thrives on visuals. Whether it’s a brand launch, real estate
              showcase, corporate event, or social media campaign, high-quality
              video content is what sets you apart.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At <strong>BigWig Media Digital</strong>, we specialize in{" "}
              <strong>Video Shoot Services in Dubai</strong> that help
              businesses, influencers, and brands capture powerful stories
              through cinematic visuals. Our team of professional videographers,
              directors, and editors works with cutting-edge equipment to
              deliver content that not only looks stunning but also drives
              engagement and conversions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you’re looking for video production that reflects your brand’s
              excellence, creativity, and professionalism, you’re in the right
              place.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your Video Shoot image
              alt="Video Shoot Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-10">
          Why Video Content Matters More Than Ever
        </h2>

        {/* Content */}
        <div className="space-y-6  text-gray-700 leading-relaxed">
          <p>
            Video is the most engaging form of content on the internet — and in
            Dubai, it’s the fastest way to attract attention. Whether on
            Instagram, YouTube, or your company website, videos have the power
            to connect emotionally, build trust, and inspire action.
          </p>

          <ul className="space-y-4">
            {[
              "85% of consumers want to see more video content from brands.",
              "72% of customers prefer learning about a product or service through video.",
              "Businesses using professional video shoots see up to 60% higher engagement.",
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-3 h-3 rounded-full bg-[var(--primary-color)] mt-2"></div>
                <p>{point}</p>
              </li>
            ))}
          </ul>

          <p>
            Our <strong>Video Shoot Services in Dubai</strong> focus on creating
            visual experiences that don’t just entertain — they convert.
          </p>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Range of Video Shoot Services in Dubai
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Individual Boxes */}
          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Corporate Video Shoots
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Perfect for brand introductions, company profiles, employee
              testimonials, and internal communication videos. We create
              polished, professional videos that reflect your organization’s
              culture and values.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Product & Brand Videos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Showcase your product’s best features through dynamic product
              videos that grab attention instantly - perfect for eCommerce,
              retail, and tech brands.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Real Estate & Architecture Videos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From luxury villas in Palm Jumeirah to skyscrapers in Downtown
              Dubai - our real estate video shoot services bring your properties
              to life with drone shots, smooth camera movements, and cinematic
              storytelling.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Event Video Coverage
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From corporate conferences to product launches and award shows,
              our team covers every detail to deliver visually engaging event
              videos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Social Media Video Production
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Short, engaging, and trend-aligned videos optimized for Instagram,
              TikTok, YouTube, and Facebook. Ideal for brands targeting younger,
              digitally active audiences in Dubai.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Fashion & Lifestyle Shoots
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We specialize in creating stylish, editorial-quality videos for
              fashion brands, influencers, and lifestyle companies that want to
              showcase elegance and luxury.
            </p>
          </div>

          <div className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Commercial & Ad Films
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From concept to final cut, we create powerful commercial videos
              that leave a lasting impression on your audience.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 bg-white">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Video Production Process
        </h2>

        {/* Process Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              step: " Discovery & Planning",
              desc: "We begin by understanding your goals, target audience, and creative vision. This helps us craft a clear concept and production strategy.",
            },
            {
              step: " Scriptwriting & Storyboarding",
              desc: "Our creative team writes compelling scripts and storyboards to visualize your story before shooting begins.",
            },
            {
              step: " Pre-Production",
              desc: "We handle location scouting, permits, talent sourcing, and scheduling - ensuring a smooth shooting experience.",
            },
            {
              step: " Video Shoot",
              desc: "Using professional-grade cameras (RED, Sony FX, Canon C-Series) and cinematic lighting setups, we capture your story with precision and creativity.",
            },
            {
              step: " Post-Production",
              desc: "Our editors handle color grading, motion graphics, VFX, music design, and sound mixing — delivering a final video that exceeds expectations.",
            },
            {
              step: " Delivery & Optimization",
              desc: "We optimize your video for all platforms (web, social, TV, or digital ads) to ensure it performs flawlessly everywhere.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-color)]">
                  {item.step}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl">
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            Want to turn your vision into cinematic reality? Book your Video
            Shoot Services in Dubai with <strong>BigWig Media Digital</strong>{" "}
            today.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Create Stunning Visual Stories with Expert Video Shoot Services in Dubai."
        buttonText="Get Started Today"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default AffiliateMarketingDubai;
