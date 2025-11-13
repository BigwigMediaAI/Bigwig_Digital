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

function AiCgiDubai() {
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
              AI and CGI Ads Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Revolutionize Your Marketing with Next-Gen AI and CGI Ads in Dubai
            </h2>
            <p className="text-lg">
              In Dubai’s fast-paced digital market, BigWig Media Digital brings
              your brand to life with cutting-edge AI and CGI advertising. Our
              services create hyper-realistic visuals, 3D ads, and immersive
              digital experiences that captivate audiences and drive
              conversions. Stand out with innovative, high-impact ads crafted
              for Dubai’s competitive landscape.
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
            <h1 className="text-3xl md:text-4xl font-bold text- mb-6">
              Redefine Your Advertising with AI and CGI Ads in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Welcome to the future of advertising - where creativity meets
              innovation. At <strong>BigWig Media Digital</strong>, we
              specialize in AI and CGI Ads Services in Dubai, helping brands
              create visually stunning, data-driven, and hyper-realistic ad
              campaigns that captivate audiences and boost conversions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              In a city like Dubai - known for its luxury, innovation, and
              global influence - traditional advertising is no longer enough.
              Brands that want to stand out need campaigns that wow viewers and
              stay in their minds. That’s where our AI and CGI advertising
              expertise comes in - blending advanced technology with creativity
              to produce campaigns that feel futuristic, yet emotionally
              engaging.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it’s for real estate, automotive, fashion, or F&B brands,
              our AI and CGI Ads Services in Dubai are designed to make your
              marketing campaigns visually superior, more effective, and
              impossible to ignore.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your AI/CGI ads image
              alt="AI & CGI Ads Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 relative ">
        {/* Section Title */}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Right Side - Features */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transform transition">
              <h3 className="text-2xl font-semibold mb-6 text-">
                Why Choose AI and CGI Ads Services in Dubai
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition">
                  <span className="font-semibold text-blue-600 mb-2">
                    Hyper-Realistic Visuals:
                  </span>
                  <span>
                    Bring your brand to life with cinematic CGI content that
                    feels real and futuristic.
                  </span>
                </div>

                <div className="flex flex-col bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition">
                  <span className="font-semibold text-blue-600 mb-2">
                    AI Precision Targeting:
                  </span>
                  <span>
                    Deliver ads to the right audience using AI analytics,
                    ensuring maximum ROI.
                  </span>
                </div>

                <div className="flex flex-col bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition">
                  <span className="font-semibold text-blue-600 mb-2">
                    Cost-Effective Production:
                  </span>
                  <span>
                    Create visual masterpieces without costly physical setups.
                  </span>
                </div>

                <div className="flex flex-col bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition">
                  <span className="font-semibold text-blue-600 mb-2">
                    24/7 Ad Adaptability:
                  </span>
                  <span>
                    Optimize your campaigns in real-time based on AI insights.
                  </span>
                </div>

                <div className="flex flex-col bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition md:col-span-2">
                  <span className="font-semibold text-blue-600 mb-2">
                    Dubai-Focused Strategy:
                  </span>
                  <span>
                    Tailored for the UAE audience, ensuring cultural and
                    regional relevance.
                  </span>
                </div>
              </div>

              <p className="mt-6 text-gray-800 font-semibold">
                💡 Want your next campaign to go viral? Talk to our team today
                for the most innovative AI and CGI Ads Services in Dubai.
              </p>
            </div>
          </div>

          {/* Left Side - Introduction */}
          <div className="flex flex-col gap-8 w-11/12 mx-auto relative">
            {/* AI Ads Box */}
            <div className="relative group">
              <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-2xl border border-yellow-300 transform ">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-">
                  AI Ads
                </h3>
                <p className="text-gray-700 mb-2">
                  AI Ads (Artificial Intelligence Advertising) leverage machine
                  learning to analyze data, predict consumer behavior, and
                  personalize ad experiences - ensuring you reach the right
                  audience with the right message.
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                  Combined with CGI, AI Ads offer campaigns that are
                  intelligently targeted and visually breathtaking.
                </p>
              </div>
              {/* Decorative Icon */}
              <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-r from-[var(--primary-color)] to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                AI
              </div>
            </div>

            {/* CGI Ads Box */}
            <div className="relative group">
              <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-2xl border border-yellow-300 transform ">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-">
                  CGI Ads
                </h3>
                <p className="text-gray-700 mb-2">
                  CGI Ads (Computer Generated Imagery) use digital artistry to
                  create hyper-realistic visuals that can showcase products,
                  people, or even fantasy worlds - without physical limitations.
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                  Combined with AI, CGI Ads produce campaigns that are visually
                  superior and impossible to ignore.
                </p>
              </div>
              {/* Decorative Icon */}
              <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-[var(--primary-color)] to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                CGI
              </div>
            </div>
          </div>
        </div>

        {/* Optional Decorative Shapes */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -top-16 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text- text-center mb-12">
          Our Process - How We Create High-Impact CGI & AI Ads
        </h2>

        {/* Grid of Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              Brand Analysis & Goal Setting
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              We begin by understanding your brand’s message, campaign
              objectives, and target audience. Whether you want awareness,
              engagement, or conversions - we customize our creative direction
              accordingly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              Concept Development
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our creative strategists brainstorm unique, futuristic, and
              emotion-driven ideas that align with your brand’s identity. You’ll
              receive concept mockups and storyboards for approval.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              CGI Modeling & Animation
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our in-house 3D artists design hyper-realistic models, scenes, and
              animations - using industry-leading software like Blender, Unreal
              Engine, and Cinema 4D. Every pixel is crafted with perfection.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              AI-Powered Enhancement
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              We use artificial intelligence for data-driven targeting,
              predictive behavior analysis, and audience segmentation - ensuring
              your ads reach those most likely to engage.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              Editing & Post-Production
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our video production team polishes every frame for cinematic
              quality, adding lighting, motion effects, and audio design to
              deliver flawless final output.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              Campaign Optimization
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Once live, AI tools monitor ad performance, optimize budgets, and
              adjust content automatically to improve engagement and
              conversions.
            </p>
          </div>
        </div>

        <div className="mt-10 py-12 px-6 text-center bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl shadow-xl">
          {/* Text */}
          <p className="text-gray-800 text-lg md:text-2xl mb-8 leading-relaxed font-medium">
            Ready to transform your ad campaigns? <br />
            Let’s create something extraordinary with BigWig Media Digital’s AI
            and CGI Ads Services in Dubai.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)]   text-white font-semibold py-4 px-10 rounded-full shadow-2xl cursor-pointer"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Types of AI and CGI Ads We Create
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product CGI Ads */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Product CGI Ads
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Showcase your products in dynamic, interactive 3D visuals that
              highlight every detail - ideal for luxury, automotive, real
              estate, and fashion brands.
            </p>
          </div>

          {/* Architectural CGI */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Architectural CGI
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Bring your real estate projects to life with cinematic
              walkthroughs, aerial renders, and lifestyle visualizations before
              construction even begins.
            </p>
          </div>

          {/* Social Media CGI Campaigns */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Social Media CGI Campaigns
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Create scroll-stopping CGI videos and posts optimized for
              Instagram, TikTok, and YouTube - perfect for brands that want to
              stand out in Dubai’s digital landscape.
            </p>
          </div>

          {/* AI-Personalized Ads */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI-Personalized Ads
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Leverage machine learning to tailor visuals, messages, and offers
              for each segment of your audience in real time.
            </p>
          </div>

          {/* CGI Brand Films */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              CGI Brand Films
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tell your story through cinematic short films infused with
              emotion, technology, and world-class CGI production.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-800 text-lg md:text-xl mb-6 font-medium">
            🎬 Impress. Inspire. Influence. <br />
            Get started today with our creative AI and CGI Ads Services in
            Dubai.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 relative">
        {/* Industries Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Industries That Benefit from CGI and AI Ads
        </h2>

        {/* Floating Industry Cards */}
        <div className="relative flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Real Estate Developers",
              desc: "Showcase projects before they’re built.",
              icon: "🏢",
            },
            {
              title: "Luxury Automotive Brands",
              desc: "Create futuristic visual campaigns.",
              icon: "🚗",
            },
            {
              title: "E-commerce Businesses",
              desc: "Generate product visuals that boost conversions.",
              icon: "🛒",
            },
            {
              title: "Fashion & Lifestyle Brands",
              desc: "Create immersive runway visuals and lookbooks.",
              icon: "👗",
            },
            {
              title: "Hospitality & Tourism",
              desc: "Visualize experiences that attract global travelers.",
              icon: "🏨",
            },
            {
              title: "Technology Companies",
              desc: "Present products in engaging, futuristic settings.",
              icon: "💻",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-3xl shadow-xl w-64 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-24 mb-12">
          Why BigWig Media Digital Is Dubai’s Leading CGI and AI Ads Agency
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Left Block */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-l-4 border-[var(--primary-color)] transform hover:-translate-y-2 transition-all duration-300 flex-1">
            <ul className="space-y-6 text-gray-700 text-lg">
              <li>
                ✅{" "}
                <span className="font-semibold text-[var(--primary-color)]">
                  Full In-House Creative Team:
                </span>{" "}
                From 3D artists to AI engineers, everything done internally.
              </li>
              <li>
                ✅{" "}
                <span className="font-semibold text-[var(--primary-color)]">
                  Dubai-Specific Expertise:
                </span>{" "}
                We understand regional trends, languages, and audience
                behaviors.
              </li>
              <li>
                ✅{" "}
                <span className="font-semibold text-[var(--primary-color)]">
                  End-to-End Services:
                </span>{" "}
                From concept creation to media buying - everything under one
                roof.
              </li>
            </ul>
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-l-4 border-[var(--primary-color)] transform hover:-translate-y-2 transition-all duration-300 flex-1">
            <ul className="space-y-6 text-gray-700 text-lg">
              <li>
                ✅{" "}
                <span className="font-semibold text-[var(--primary-color)]">
                  Affordable CGI Packages:
                </span>{" "}
                World-class visuals within your budget.
              </li>
              <li>
                ✅{" "}
                <span className="font-semibold text-[var(--primary-color)]">
                  Guaranteed Indexability:
                </span>{" "}
                Video, content, and metadata optimized for Google.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-20">
        {/* Section 1: Key Benefits */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          The Power of CGI and AI in Modern Advertising
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {[
            {
              title: "Futuristic Storytelling",
              desc: "CGI allows brands to create anything they imagine - from flying cars to luxury towers.",
            },
            {
              title: "High ROI with AI Targeting",
              desc: "Data-backed insights ensure your ad spend goes to the most responsive audience.",
            },
            {
              title: "No Physical Limitations",
              desc: "No need for expensive setups or location shoots. CGI can create limitless creative worlds.",
            },
            {
              title: "Speed and Scalability",
              desc: "Update ad visuals instantly without reshooting.",
            },
            {
              title: "Enhanced Engagement",
              desc: "People remember what they’ve never seen before - and that’s exactly what CGI delivers.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-3xl shadow-xl border border-yellow-300 flex-1 min-w-[250px] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Local Advantage */}
        <div className="flex flex-col md:flex-row gap-8 mt-20">
          <div className="flex-1 p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Local Advantage – Why Dubai Is the Perfect Market
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Dubai’s consumers are tech-savvy and appreciate cutting-edge
              creativity. Whether it’s a luxury villa launch in Downtown or a
              premium skincare ad in Mall of the Emirates, our team knows how to
              make your content resonate locally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We incorporate Dubai’s skyline, culture, and modern aesthetic into
              your visuals - giving your brand local relevance with
              international appeal.
            </p>
          </div>

          <div className="flex-1 p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future of Advertising?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Your audience has seen enough traditional ads. Now, it’s time to
              show them something unforgettable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At BigWig Media Digital, we combine creative excellence,
              artificial intelligence, and CGI innovation to produce campaigns
              that move audiences and drive measurable results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Let’s collaborate on your next groundbreaking campaign. Contact us
              for Dubai’s most advanced AI and CGI Ads Services. Email us or
              schedule a creative consultation today.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Elevate Your Brand with Cutting-Edge AI & CGI Ads That Captivate and Convert in Dubai."
        buttonText="Contact Us"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default AiCgiDubai;
