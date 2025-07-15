import { TypeAnimation } from "react-type-animation";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet";
import hero from "../../assets/Services hero/affiliate marketing.jpg";
import affiliate from "../../assets/services/12.jpg";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";
import {
  FaShoppingBag,
  FaLaptopCode,
  FaGraduationCap,
  FaTshirt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaThumbsUp,
  FaSearch,
  FaClipboardCheck,
  FaPuzzlePiece,
} from "react-icons/fa";
import Slider from "react-slick";

const benefits = [
  {
    title: "Performance-Based ROI",
    desc: "You only pay when you get a result — a sale, lead, or sign-up. That’s what makes affiliate marketing so efficient.",
    icon: <FaChartLine className="text-3xl text-blue-600" />,
  },
  {
    title: "Low-Risk, High Reward",
    desc: "With no upfront ad spend, affiliate marketing helps you grow without wasting budget on non-converting traffic.",
    icon: <FaShieldAlt className="text-3xl text-green-600" />,
  },
  {
    title: "Wider Market Reach",
    desc: "Tap into new audiences via affiliates, influencers, and bloggers who already have earned audience trust.",
    icon: <FaGlobe className="text-3xl text-indigo-600" />,
  },
  {
    title: "Boosts Brand Credibility",
    desc: "When real people promote your business, it builds third-party trust and authentic brand validation.",
    icon: <FaThumbsUp className="text-3xl text-pink-600" />,
  },
  {
    title: "Improves SEO & Visibility",
    desc: "Affiliate links from content creators and authority sites can indirectly improve your organic search presence.",
    icon: <FaSearch className="text-3xl text-purple-600" />,
  },
  {
    title: "Easily Trackable Performance",
    desc: "With transparent dashboards, you can track every click, conversion, and commission — in real time.",
    icon: <FaClipboardCheck className="text-3xl text-yellow-600" />,
  },
  {
    title: "Complements Other Campaigns",
    desc: "Affiliate marketing strengthens your paid, SEO, email, and social efforts by adding external credibility.",
    icon: <FaPuzzlePiece className="text-3xl text-red-600" />,
  },
];

const verticals = [
  {
    title: "E-commerce",
    icon: <FaShoppingBag className="text-3xl text-blue-600" />,
    desc: "Drive product sales through coupon platforms, review sites, and influencers who promote your store.",
  },
  {
    title: "SaaS and Tech",
    icon: <FaLaptopCode className="text-3xl text-green-600" />,
    desc: "Promote software tools and subscriptions through tech bloggers, demo creators, and comparison platforms.",
  },
  {
    title: "Education & Training",
    icon: <FaGraduationCap className="text-3xl text-purple-600" />,
    desc: "Partner with content creators and ed-tech influencers to increase enrollments and sign-ups.",
  },
  {
    title: "Fashion & Lifestyle",
    icon: <FaTshirt className="text-3xl text-pink-600" />,
    desc: "Leverage affiliate bloggers and social creators to expand your reach and grow your brand organically.",
  },
  {
    title: "Finance & Insurance",
    icon: <FaMoneyCheckAlt className="text-3xl text-yellow-600" />,
    desc: "Promote high-value services through review sites and affiliate publishers with high authority.",
  },
];

function AffiliateMarketing() {
  const sliderSettings = {
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
        <title>Affiliate Marketing Services in Delhi</title>
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
              Performance-Driven Affiliate Marketing Services in Delhi to Grow
              Your Business
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We grow your brand with&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "affiliate-driven sales",
                    2000,
                    "commission-based marketing ",
                    2000,
                    "  scalable traffic sources ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn partnerships into profits with affiliate marketing that
              scales your business, strengthens your reach, and drives
              measurable results.
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
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Title + Intro */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Performance-Driven Affiliate Marketing Services
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Power your brand’s growth with strategic, risk-free affiliate
              marketing campaigns that convert.
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Story */}
            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                Affiliate marketing is one of the most powerful and
                budget-friendly ways to scale your business online. At{" "}
                <strong>BigWig Digital</strong>, a performance-focused affiliate
                marketing agency in Delhi, we help brands build strategic
                affiliate programs that generate consistent sales, leads, and
                visibility without the upfront advertising costs.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Whether you’re a startup launching your first product or an
                established eCommerce brand looking to expand, our customized
                affiliate marketing services in India are designed to deliver
                results that matter.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                By partnering with the right affiliates and influencers, you can
                tap into new audiences, drive qualified traffic, and only pay
                for actual performance. That means no wasted budget and maximum
                ROI. With the right strategy, affiliate marketing becomes a
                growth engine for your brand.
              </p>
            </div>

            {/* Right Side: Callout Box */}
            <div className="bg-blue-50 border-l-4 border-[var(--primary-color)] p-8 rounded-2xl shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                Why Your Brand Needs Affiliate Marketing
              </h3>
              <p className="text-gray-700">
                Digital marketing is evolving rapidly, and paid ads are becoming
                more expensive and competitive. Affiliate marketing offers a
                smart alternative. Instead of paying for impressions or clicks,
                you reward partners only when they bring in conversions.
              </p>
              <p className="text-gray-700">
                This approach reduces risk and aligns your marketing budget with
                actual performance. As a trusted affiliate marketing agency in
                India, BigWig Digital helps you create a profitable, scalable
                affiliate model that works alongside your existing marketing
                channels.
              </p>
              <p className="text-gray-700">
                Whether your goal is lead generation, product sales, or app
                installs, our affiliate partnerships are built to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* SECTION 1: Where Affiliate Works Best */}
          <div className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Where Affiliate Marketing Works Best
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
              {verticals.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gray-100">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: Scalable & Transparent */}
          <div className="space-y-12">
            {/* Two-column layout with image on right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
                  Scalable, Transparent and Results-First
                </h3>
                <p className="text-gray-700 text-lg">
                  Affiliate marketing is not a one-size-fits-all approach. Every
                  brand has a different audience, product, and price point.
                  That’s why our{" "}
                  <strong>
                    <a href="https://www.bigwigdigital.in/">
                      {" "}
                      Affiliate Marketing Services in Delhi
                    </a>
                  </strong>{" "}
                  are built on personalization.
                </p>
                <p className="text-gray-700 text-lg">
                  From identifying the right partners to tracking every
                  conversion, we ensure full transparency and measurable growth
                  at every stage.
                </p>
                <p className="text-gray-700 text-lg">
                  We focus on building affiliate relationships that are
                  long-term, trustworthy, and aligned with your business goals.
                  You’ll never have to worry about shady promotions or
                  low-quality traffic. Instead, we help your brand build
                  reputation, reach, and revenue through trusted digital voices.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src={affiliate}
                  alt="Affiliate Marketing Services in Delhi"
                  className="w-full h-[60vh] rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Why BigWig */}
          <div className="bg-[var(--primary-color)] text-white p-4  rounded-3xl shadow-md text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Why BigWig for Affiliate Marketing Services
            </h3>
            <p className="text-lg  mx-auto">
              When you work with BigWig Digital, you're choosing an agency that
              understands how to blend strategy with performance. As{" "}
              <span className="italic">
                <a href="https://www.bigwigdigital.in/">
                  {" "}
                  A Top Affiliate Marketing Company in Delhi,
                </a>
              </span>{" "}
              we use real-time tracking tools, smart campaign planning, and deep
              industry experience to build affiliate programs that actually
              work.
            </p>
            <p className="text-lg max-w-4xl mx-auto">
              Our focus is always on driving qualified traffic, high intent
              users, and measurable conversions — not vanity metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          {/* Title and Intro */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Benefits of Affiliate Marketing Services
            </h2>
            <p className="text-gray-700 text-lg">
              Affiliate marketing isn’t just cost-effective — it’s one of the
              smartest ways to scale your digital reach while paying only for
              actual results.
            </p>
          </div>

          {/* Mobile Slider View */}
          <div className="block sm:hidden">
            <Slider {...sliderSettings}>
              {benefits.map((item, idx) => (
                <div key={idx} className="p-4">
                  <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-xl shadow-sm border-l-4 border-[var(--primary-color)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white p-3 rounded-full shadow">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-xl shadow-sm border-l-4 border-[var(--primary-color)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div>{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />

      {/* Final Call-to-Action */}
      <div className=" py-12 bg-[var(--primary-color)]">
        <div className="w-5/6 mx-auto rounded-xl p-6 md:p-8 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Build a Performance-Driven Partner Network?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Whether you want to start an affiliate program from scratch or scale
            an existing one, our{" "}
            <strong>affiliate marketing services in India</strong> are tailored
            to deliver consistent, trackable growth. We work across industries,
            platforms, and campaign types to help you get the most from every
            partnership.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AffiliateMarketing;
