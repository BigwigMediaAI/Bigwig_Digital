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

function LandingPageOptimization() {
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
              Landing Page Optimization Services in Dubai
            </h1>
            <h2 className="text-2xl font-semibold leading-tight">
              Turn Clicks into Conversions with Expert Landing Page Optimization
              Services in Dubai{" "}
            </h2>
            <p className="text-lg">
              In Dubai’s fast-paced digital market, BigWig Media Digital
              elevates your brand with AI and CGI advertising. We create
              hyper-realistic visuals, 3D ads, and immersive experiences that
              capture attention and drive conversions. Stand out with
              innovative, high-impact campaigns crafted for Dubai’s competitive
              landscape.
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
              Turn Clicks into Conversions with Expert Landing Page Optimization
              in Dubai
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Driving traffic to your website is just the first step. At{" "}
              <strong>BigWig Media Digital</strong>, we specialize in{" "}
              <strong>Landing Page Optimization Services in Dubai</strong>{" "}
              designed to maximize conversions, reduce bounce rates, and boost
              your ROI. We ensure every visitor engages, takes action, and
              becomes a potential customer.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Whether your goal is lead generation, sales, or sign-ups, our team
              crafts landing pages that are fast, persuasive, and tailored to
              your audience. We combine data-driven insights with design best
              practices to make every click count.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In Dubai’s competitive digital market, standing out is essential.
              With our expert optimization strategies, your landing pages not
              only attract visitors but convert them into loyal customers,
              giving your brand a measurable edge over the competition.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={seoImage} // Replace with your Landing Page Optimization image
              alt="Landing Page Optimization Services in Dubai"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What Is Landing Page Optimization (LPO)?
        </h2>

        {/* Introduction */}
        <p className="text-gray-700  leading-relaxed  mb-4 ">
          Landing Page Optimization (LPO) is the science and art of improving
          each element on your landing page to increase conversions. It involves
          analyzing user behavior, testing variations, and making data-driven
          design and content improvements that enhance the user experience and
          motivate action.
        </p>

        <p className="text-gray-700   leading-relaxed  mb-12">
          Our Landing Page Optimization Services in Dubai combine behavioral
          psychology, design precision, and advanced analytics to create pages
          that truly perform.
        </p>

        {/* Key Focus Areas */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {[
            "Page Speed & Mobile Optimization",
            "Engaging Headlines and Copywriting",
            "Strategic CTA Placement",
            "A/B Testing & Heatmap Analysis",
            "Conversion Funnel Design",
          ].map((item, idx) => (
            <div
              key={idx}
              className=" p-6 rounded-3xl shadow-lg border border-blue-200 flex-1 min-w-[220px] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Landing Page Optimization Matters in Dubai’s Digital Market
        </h2>

        {/* Introduction */}
        <p className="text-gray-700   leading-relaxed  mb-4 ">
          Dubai consumers are digitally aware and have endless options. Whether
          they’re booking a service, requesting a quote, or shopping online,
          their decision to act happens in seconds. A well-optimized landing
          page ensures your visitors find exactly what they’re looking for -
          instantly.
        </p>
        {/* Solution Text */}
        <p className="text-gray-700  leading-relaxed mb-8">
          Our Landing Page Optimization Services in Dubai fix these problems by
          transforming your page into a conversion machine - designed for
          results, not just looks.
        </p>

        {/* Problem Points in Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {[
            "High bounce rates",
            "Low conversions despite high ad spend",
            "Poor user experience",
            "Low search engine ranking",
          ].map((item, idx) => (
            <div
              key={idx}
              className=" p-6 rounded-3xl shadow-lg border border-blue-200 flex-1 min-w-[220px] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Step-by-Step Landing Page Optimization Process
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className=" p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              In-Depth Page Audit
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We start with a full audit of your existing landing page to
              analyze user flow, content performance, design layout, loading
              time, and conversion points.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Data and User Behavior Analysis
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Using tools like heatmaps, session recordings, and scroll
              tracking, we identify how users interact with your page and where
              they drop off.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Design & Copy Enhancement
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We redesign and rewrite sections based on user intent - focusing
              on emotional triggers, persuasive CTAs, and conversion-oriented
              messaging.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mobile Optimization
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              With over 70% of Dubai’s traffic coming from mobile users, we
              ensure your page is fast, responsive, and flawless on all devices.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              5
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              A/B Testing & Experimentation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We run multiple A/B tests to identify the best-performing
              headlines, buttons, layouts, and visuals.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[var(--primary-color)] text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-md">
              6
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Performance Reporting
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              You’ll receive detailed monthly reports showing improvements in
              conversion rate, session duration, and lead quality.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className=" py-12 text-center bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl shadow-xl">
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            Ready to see your conversion rate soar? Let our experts handle your
            Landing Page Optimization Services in Dubai today.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[var(--primary-color)] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Key Elements We Optimize for Higher Conversions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Above-the-Fold Clarity
            </h3>
            <p className="text-gray-700 text-sm">
              We make sure your main message, offer, and CTA are visible
              instantly when the page loads.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Engaging Headlines & Subheads
            </h3>
            <p className="text-gray-700 text-sm">
              Clear, benefit-driven headlines grab attention and set the tone
              for your offer.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Compelling CTAs
            </h3>
            <p className="text-gray-700 text-sm">
              We test CTA wording, color, and position to maximize clicks.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Visual Hierarchy
            </h3>
            <p className="text-gray-700 text-sm">
              From fonts to color contrasts, every design choice guides the user
              naturally toward conversion.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trust Elements
            </h3>
            <p className="text-gray-700 text-sm">
              Testimonials, reviews, awards, and security badges build instant
              credibility - essential for Dubai’s competitive business market.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-6 rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Page Speed Optimization
            </h3>
            <p className="text-gray-700 text-sm">
              Even a one-second delay can reduce conversions by 20%. We ensure
              lightning-fast loading using compression, caching, and lightweight
              assets.
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Why Choose BigWig */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="relative p-8 rounded-3xl border border-blue-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Why Choose BigWig Media Digital for Landing Page Optimization in
                Dubai
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                There’s no one-size-fits-all formula for landing pages - which
                is why we build custom strategies for every brand.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm list-disc list-inside marker:text-[var(--primary-color)]">
                <li>
                  <span className="font-semibold">Local Expertise:</span> We
                  understand Dubai’s multicultural audience and digital behavior
                  patterns.
                </li>
                <li>
                  <span className="font-semibold">
                    Conversion-Centric Approach:
                  </span>{" "}
                  Every change is backed by analytics and A/B testing.
                </li>
                <li>
                  <span className="font-semibold">
                    Design + Psychology Synergy:
                  </span>{" "}
                  Our UX/UI experts collaborate with copywriters to craft
                  seamless user journeys.
                </li>
                <li>
                  <span className="font-semibold">Proven ROI Results:</span>{" "}
                  Clients report up to 3x higher conversions after optimization.
                </li>
                <li>
                  <span className="font-semibold">Transparent Reporting:</span>{" "}
                  Clear metrics, monthly insights, and performance dashboards.
                </li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                💡 Whether you run Google Ads, Meta Ads, or SEO campaigns, an
                optimized landing page ensures every click pays off.
              </p>
            </div>
          </div>

          {/* Right Side - Industries We Serve */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="relative p-8 rounded-3xl border border-blue-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Industries We Serve
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our Landing Page Optimization Services in Dubai cater to diverse
                industries, including:
              </p>
              <ul className="space-y-3 text-gray-700 text-sm list-disc list-inside marker:text-[var(--primary-color)]">
                <li>Real Estate & Property Developers</li>
                <li>E-commerce & Retail</li>
                <li>Healthcare & Clinics</li>
                <li>Education & Training</li>
                <li>Tourism & Hospitality</li>
                <li>Finance & Investment</li>
                <li>B2B Service Providers</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Each industry demands different messaging, layouts, and CTAs -
                and we optimize them accordingly for maximum conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 space-y-16">
        {/* Section 1: Benefits of Landing Page Optimization */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Benefits of Landing Page Optimization
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An optimized landing page impacts your entire digital marketing
              performance. Here’s what you gain:
            </p>
            <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-[var(--primary-color)]">
              <li>
                <span className="font-semibold">Higher Conversion Rates:</span>{" "}
                Turn more visitors into customers.
              </li>
              <li>
                <span className="font-semibold">Reduced Ad Spend Waste:</span>{" "}
                Get more results from the same traffic.
              </li>
              <li>
                <span className="font-semibold">Improved User Experience:</span>{" "}
                Visitors stay longer and engage more.
              </li>
              <li>
                <span className="font-semibold">Enhanced SEO Value:</span>{" "}
                Better page performance improves Google rankings.
              </li>
              <li>
                <span className="font-semibold">Increased ROI:</span> Every
                marketing campaign becomes more profitable.
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Want measurable growth? <br />
              Contact BigWig Media Digital for professional Landing Page
              Optimization Services in Dubai that truly deliver.
            </p>
          </div>

          {/* Right visual accent box */}
          <div className="p-8 border border-blue-200 rounded-3xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Local SEO Advantage - Built for Dubai Businesses
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dubai’s online competition is intense - and your landing pages
              must reflect local preferences. We optimize your copy, visuals,
              and CTAs to align with the UAE audience’s mindset, ensuring
              relevance and conversion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also optimize for local SEO signals (Arabic + English keywords,
              schema markup, and mobile experience), ensuring your page ranks
              higher and remains crawlable for Google indexing.
            </p>
          </div>
        </div>

        {/* Section 2: Results You Can Expect */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="p-8 border border-blue-200 rounded-3xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Results You Can Expect
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-[var(--primary-color)]">
              <li>30–60% increase in lead conversions</li>
              <li>40% reduction in bounce rates</li>
              <li>2x–3x increase in ad ROI</li>
              <li>Better form-fill and CTA engagement</li>
            </ul>
            <p className="mt-6 text-gray-700 font-semibold">
              Real results. Real growth. Real ROI.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Let’s Optimize Your Landing Page Today
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Stop losing conversions to underperforming landing pages. Whether
              you’re running paid campaigns or organic traffic, your landing
              page is the ultimate make-or-break point - and we make sure it
              wins every time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At BigWig Media Digital, we don’t just design; we engineer
              performance. Our data-driven Landing Page Optimization Services in
              Dubai help you turn every visitor into a customer.
            </p>

            <div className="space-y-4 text-gray-700 font-semibold">
              <p>📞 Schedule your free consultation today!</p>
              <p>
                👉 Contact our Dubai team to get a tailored strategy for your
                business.
              </p>
              <p>
                📩 Email us to start optimizing your website for higher
                conversions and better ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <CTABanner
        title="Turn Clicks into Customers with Proven Landing Page Optimization in Dubai."
        buttonText="Contact Us"
      />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default LandingPageOptimization;
