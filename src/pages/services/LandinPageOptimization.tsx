import { TypeAnimation } from "react-type-animation";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet";
import hero from "../../assets/Services hero/Landing Page.jpg";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import landing from "../../assets/services/11.jpg";
import {
  FaGoogle,
  FaFunnelDollar,
  FaShoppingCart,
  FaCalendarAlt,
  FaVideo,
  FaMobileAlt,
} from "react-icons/fa";

const resultItems = [
  {
    icon: <FaGoogle className="text-2xl text-blue-600" />,
    title: "Google Ads & Meta Ads",
  },
  {
    icon: <FaFunnelDollar className="text-2xl text-green-600" />,
    title: "Lead Generation Funnels",
  },
  {
    icon: <FaShoppingCart className="text-2xl text-pink-600" />,
    title: "E-commerce Product Launches",
  },
  {
    icon: <FaCalendarAlt className="text-2xl text-purple-600" />,
    title: "Event Registration Campaigns",
  },
  {
    icon: <FaVideo className="text-2xl text-red-600" />,
    title: "Webinar Signups",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-yellow-600" />,
    title: "App Install Campaigns",
  },
];

const features = [
  {
    title: "Mobile-First Performance",
    desc: "We optimize pages to perform flawlessly across all devices, especially mobile, where most users browse and convert.",
  },
  {
    title: "Speed & Load Time",
    desc: "Even a one-second delay can drop conversions. We ensure lightning-fast loading for better retention and ranking.",
  },
  {
    title: "Copy That Sells",
    desc: "Clear, persuasive messaging and powerful CTAs that guide the user toward the action you want.",
  },
  {
    title: "Clean & Focused Design",
    desc: "No distractions. No confusion. Just a single goal: conversion. We keep designs lean, intuitive, and high-performing.",
  },
  {
    title: "A/B Testing-Ready",
    desc: "We build landing pages designed for experimentation, so you can continuously improve based on real user behavior.",
  },
  {
    title: "Seamless Integration",
    desc: "Whether you use HubSpot, Mailchimp, Shopify, or any other CRM/tool, we build landing pages that integrate smoothly into your system.",
  },
];

function LandinPageOptimization() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };
  return (
    <div>
      <Helmet>
        <title>Landing Page Optimization Services in Delhi</title>
      </Helmet>
      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Landing Page Optimization Services in Delhi That Maximize
              Conversions
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">
                We optimize landing pages that&nbsp;
              </span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "convert more leads",
                    2000,
                    "reduce bounce rates ",
                    2000,
                    " boost ad performance",
                    2000,
                    "turn clicks into customers ",
                    2000,
                    " drive real results",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Boost your ad performance and lower bounce rates with powerful
              landing page strategies. Book a free consultation now.
            </p>
            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md lg:max-w-sm mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] text-white py-2 rounded font-semibold hover:bg-opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto  space-y-16">
          {/* HERO SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--primary-color)] leading-tight mb-6">
                In digital marketing, traffic without conversions is a lost
                opportunity.
              </h2>
              <p className="text-lg text-gray-700">
                At BigWig Digital, we offer performance-driven{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">
                    {" "}
                    Landing Page Optimization Services in Delhi{" "}
                  </a>
                </strong>
                tailored to turn your visitors into customers. Whether your
                audience arrives via paid ads, SEO, or social media campaigns,
                your landing page plays a make-or-break role in their
                decision-making process. A slow, cluttered, or poorly designed
                landing page can drive them away instantly.
              </p>
            </div>
            <div className="relative rounded-3xl shadow-lg flex items-center justify-center">
              <img
                src={landing}
                alt="Landing Page Optimization Services in Delhi"
                className="w-full h-[40vh] rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* GOAL SECTION */}
          <div className=" rounded-3xl ">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                  Our goal is simple:
                </h3>
                <p className="text-gray-700 text-lg">
                  To create landing pages that are visually impactful,
                  technically strong, and conversion-focused. From compelling
                  copy and persuasive CTAs to fast load times and mobile
                  responsiveness, we optimize every element to ensure maximum
                  ROI from your marketing efforts.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-lg text-[var(--primary-color)] mb-3">
                  We focus on:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>Compelling copy</li>
                  <li>Persuasive CTAs</li>
                  <li>Fast load times</li>
                  <li>Mobile responsiveness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HIGHLIGHT SECTION */}
          <div className="bg-[var(--primary-color)] text-white rounded-3xl px-10 py-12 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              What Makes a High-Converting Landing Page?
            </h3>
            <p className="max-w-4xl mx-auto text-lg">
              Every brand is different, but high-performing landing pages share
              a few non-negotiables: clarity, relevance, speed, and simplicity.
              At BigWig Digital, we use data-backed strategies to identify what
              your users expect and deliver it in seconds.
            </p>
          </div>

          {/* WHY SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold ">
                Why Landing Page Optimization Is Crucial for Your Business
              </h3>
              <p className="text-gray-700">
                A great landing page isn’t just about design, it’s about
                psychology, strategy, and user experience. With attention spans
                shorter than ever, you have just a few seconds to capture
                interest and lead the user to action.
              </p>
              <p className="text-gray-700">
                Our team understands what makes a user stay, scroll, and submit.
                Through strategic layout, focused messaging, and data-driven
                content improvements, our{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">
                    {" "}
                    Landing Page Optimization Services in India
                  </a>
                </strong>{" "}
                help you reduce bounce rates, increase form submissions, and
                lower your cost per acquisition across platforms.
              </p>
              <p className="text-gray-700">
                Whether you’re running Meta ads, Google Ads, email campaigns, or
                influencer-driven traffic, a highly optimized landing page
                ensures you’re getting the most out of every click.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
                Quick Takeaways:
              </h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Reduce bounce rates</li>
                <li>Increase form submissions</li>
                <li>Lower cost per acquisition</li>
                <li>
                  Better performance across Meta, Google, email, and influencer
                  channels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--primary-color)]">
            Designed to Convert
          </h2>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="border-l-4 border-[var(--primary-color)] bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel layout */}
          <div className="md:hidden mt-4">
            <Slider {...slickSettings}>
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-blue-600 bg-gray-50 p-6 mx-2 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="w-5/6 mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--primary-color)]">
            Where Our Landing Pages Deliver Results
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {resultItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-white to-blue-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              >
                <div className="bg-white p-2 sm:p-3 rounded-full shadow flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  {item.icon}
                </div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 mt-10 max-w-3xl mx-auto">
            Each landing page is tailored to your offer, audience, and ad
            intent, so your marketing funnel performs better from the first
            click.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* Section 1: Built for Humans (Content left, Box right on desktop) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built for Humans,{" "}
                <span className="text-[var(--primary-color)]">
                  Backed by Data
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Excellent landing pages seem intuitive in addition to being
                visually appealing. At BigWig Digital, we understand that user
                behavior drives performance. That’s why we combine analytics
                insights with user experience design to ensure your landing page
                speaks to your audience’s needs in real time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From scroll patterns to click paths, we analyze what users are
                doing, and what’s stopping them from converting. Then, we use
                that data to adjust layouts, messages, and elements so your page
                works the way your customers think. The result? A seamless
                journey from interest to action.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border-l-4 border-[var(--primary-color)] order-2">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                What We Analyze:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>User scroll patterns</li>
                <li>Click-through behavior</li>
                <li>Conversion drop-off points</li>
                <li>Engagement bottlenecks</li>
                <li>UX friction areas</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Custom Optimization (Box left, Content right on desktop) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Box first on desktop, second on mobile */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border-l-4 border-[var(--primary-color)] order-2 md:order-1">
              <h4 className="text-xl font-semibold mb-4">We Customize For:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lead Gen Funnels (High-Ticket)</li>
                <li>Limited-Time eCommerce Offers</li>
                <li>Campaign Platform Specifics</li>
                <li>Ad Intent & User Mindset</li>
                <li>Google, Meta, LinkedIn Optimization</li>
              </ul>
            </div>

            {/* Content second on desktop, first on mobile */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Custom Optimization,{" "}
                <span className="text-[var(--primary-color)]">
                  for Every Campaign
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Not every campaign is the same, and neither should your landing
                pages be. Whether you're running a high-ticket lead generation
                funnel or promoting a limited-time eCommerce offer, we craft
                unique pages that match the goal, the platform, and the audience
                intent.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our landing page optimization services are tailored to fit
                campaign-specific needs, ensuring better quality scores for
                Google Ads, higher ROAS on Meta, and more engagement on
                LinkedIn. Each page is built to align with your conversion path,
                helping you make the most of every marketing channel you invest
                in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />

      {/* Final Call-to-Action */}
      <div className=" py-12 bg-[var(--primary-color)]">
        <div className="w-11/12 md:w-5/6 mx-auto rounded-xl p-6 md:p-8 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Why BigWig for Landing Page Optimization Services?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            As a results-focused{" "}
            <strong>landing page optimization agency in Delhi</strong>, we bring
            together performance design, digital psychology, and marketing
            expertise. With a sharp focus on conversions, we help you squeeze
            the most out of every marketing rupee you spend.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandinPageOptimization;
