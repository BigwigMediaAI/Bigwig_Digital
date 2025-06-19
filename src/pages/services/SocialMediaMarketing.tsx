import { Helmet } from "react-helmet";
import Nav from "../../components/Nav";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/Services hero/Social Media Marketing-2.jpg";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";
import {
  FaLinkedinIn,
  FaMeta,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

const icons: Record<string, JSX.Element> = {
  "Meta Ads": (
    <div className="flex items-center gap-2">
      <FaMeta className="text-[#1877F2]" />
    </div>
  ),
  "LinkedIn Ads": <FaLinkedinIn className="text-[#0077B5]" />,
  "TikTok Ads": <FaTiktok className="text-black" />,
  "Snapchat Ads": <FaSnapchatGhost className="text-[#FFFC00]" />,
  "Twitter (X) Ads": <FaXTwitter className="text-black" />,
  "YouTube Ads": <FaYoutube className="text-[#FF0000]" />,
};

function SocialMediaMarketing() {
  return (
    <div>
      <Helmet>
        <title>Top SMM Company in India</title>
      </Helmet>
      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/20 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Social Media Marketing Services in Delhi That Drive Real ROI
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> Social ads that&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "Stop the Scroll",
                    2000,
                    "Generate Leads",
                    2000,
                    "Target the Right",
                    2000,
                    "Build Recall",
                    2000,
                    "Capture Attention",
                    2000,
                    "Deliver ROI",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We’re here to help you grow, scale, and stand out—across every
              major social media platform.
            </p>
            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md lg:max-w-sm mx-auto bg-black/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4">
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

      <section className="py-12 px-4 space-y-10 text-black dark:text-white">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
          Social Media Marketing Agency in Delhi
        </h2>

        {/* Two-column Layout */}
        <div className="w-5/6 grid md:grid-cols-2 gap-10 items-start mx-auto">
          {/* Left Content */}
          <div className="space-y-6 text-md leading-relaxed">
            <p>
              Looking for a social media marketing agency in Delhi that
              understands performance marketing? At BigWig Digital, we deliver
              paid ad campaigns that actually convert, not just drive traffic.
              We’re here to help you grow, scale, and stand out, across every
              major social media platform.
            </p>

            <p>
              At BigWig Digital, we go beyond likes and followers, we deliver
              performance-driven social media ad campaigns designed to get your
              brand seen, clicked, and remembered. As a trusted social media
              marketing agency in Delhi, we specialize in creating
              high-converting paid campaigns across today’s most powerful
              platforms.
            </p>

            <p>
              Whether your goal is brand awareness, lead generation, website
              traffic, app installs, or video views, our expert team crafts
              data-backed ad strategies that bring measurable results.If you’re
              looking for expert social media marketing services in India,
              BigWig Digital is your go-to partner for growth-focused ad
              solutions.
            </p>
          </div>

          {/* Right Side Box with List */}
          <div className="bg-[var(--primary-color)] text-white p-6 md:p-8 rounded-xl shadow space-y-4">
            <h3 className="text-2xl font-semibold">
              Why Paid Social Media Ads Matter More Than Ever
            </h3>
            <ul className="list-disc space-y-3 text-base">
              <li>
                Organic reach is insufficient in 2025. Paid advertisements give
                you the advantage you need to reach the right audience at the
                right time in the face of changing algorithms and an abundance
                of content.
              </li>
              <li>
                Our strategy for social media advertising is based on accuracy,
                originality, and output. We create effective, focused campaigns
                that are suited to your objectives rather than promoting
                arbitrary posts.
              </li>
              <li>
                To get the most out of every rupee you spend, our results-driven
                social media marketing agency in India combines audience
                segmentation, ad creatives, copywriting, analytics, and A/B
                testing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white  text-black ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)] mb-12">
          Our Paid Social Media Advertising Services
        </h2>

        <div className="w-5/6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {[
            {
              title: "Meta Ads",
              text: "We create compelling ad campaigns that grab attention and drive action across Facebook and Instagram. Perfect for eCommerce, D2C, and lead-gen brands.",
            },
            {
              title: "LinkedIn Ads",
              text: "B2B targeting done right. From sponsored content to lead-gen forms, we help you connect with decision-makers on the world’s largest professional network.",
            },
            {
              title: "TikTok Ads",
              text: "Engage Gen Z and young adults with short-form video ads that are creative, impactful, and trend-driven.",
            },
            {
              title: "Snapchat Ads",
              text: "Reach highly engaged, mobile-first users through immersive video and story-based ad formats.",
            },
            {
              title: "Twitter (X) Ads",
              text: "Launch trending campaigns, promote tweets, or generate traffic with precise keyword, hashtag, and interest-based targeting.",
            },
            {
              title: "YouTube Ads",
              text: "Build awareness and engagement with skippable, non-skippable, and in-feed video ads. Perfect for brand storytelling and video-first funnels.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-[var(--primary-color)] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-[var(--primary-color)]">
                  {item.title}
                </h4>
                <div className="text-2xl">{icons[item.title]}</div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-5/6 mx-auto py-12 space-y-10 px-4">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Why Choose BigWig Digital for Social Media Advertising?
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            We’re not just another agency boosting your posts. We’re a team of
            paid social experts with experience across industries, platforms,
            and ad formats. Here's what makes us different:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200 text-base md:text-lg">
            <li>
              <span className="text-[var(--primary-color)]">
                Platform-Specific Expertise:
              </span>{" "}
              Each platform has its own algorithm, ad types, and targeting
              rules. We build custom campaigns designed to get the most out of
              each channel.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Creative + Strategy:
              </span>{" "}
              We blend eye-catching visuals, persuasive copy, and clear CTAs
              with data-backed targeting strategies that deliver clicks and
              conversions.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Conversion-Focused Funnels:
              </span>{" "}
              From awareness to retargeting, we build full-funnel ad strategies
              that nurture leads and drive purchases.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Transparent Reporting & Optimization:
              </span>{" "}
              We track what matters CPC, CTR, ROAS, CPL and optimize every week
              to improve performance.
            </li>
            <li>
              <span className="text-[var(--primary-color)]">
                Budget-Friendly Scaling:
              </span>{" "}
              Whether you’re starting with ₹5,000 or scaling up to ₹5 lakhs, we
              help you make the most of your budget without compromising
              performance.
            </li>
          </ul>
        </div>

        {/* What You Get Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
            What You Get with Our Social Media Ad Management
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base">
            {[
              "Campaign strategy and funnel design",
              "Audience research and targeting setup",
              "Ad creative (copy + visuals)",
              "A/B testing of creatives and copy",
              "Pixel and conversion tracking",
              "Weekly reporting and performance analysis",
              "Ongoing optimization and scaling",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 text-[var(--primary-color)] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default SocialMediaMarketing;
