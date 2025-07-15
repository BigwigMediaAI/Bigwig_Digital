import Nav from "../../components/Nav";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/Services hero/SEO HOME PAGE.jpg";
import seo from "../../assets/services/3.jpg";
import Footer from "../../components/Footer";
import {
  BarChart2,
  PieChart,
  Search,
  Globe,
  LineChart,
  Smartphone,
} from "lucide-react";
import { Helmet } from "react-helmet";

const stats = [
  {
    icon: <Search size={32} className="text-[var(--primary-color)]" />,
    text: "Of all site visits, 53% are the result of organic search engine discovery.",
  },
  {
    icon: <BarChart2 size={32} className="text-[var(--primary-color)]" />,
    text: "By 2028, the SEO market is expected to expand by $122.11 billion.",
  },
  {
    icon: <PieChart size={32} className="text-[var(--primary-color)]" />,
    text: "68% of user interactions on the internet are started by search engines.",
  },
  {
    icon: <Globe size={32} className="text-[var(--primary-color)]" />,
    text: "Google accounts for 92.96% of all traffic worldwide (Search, Images, Google Maps).",
  },
  {
    icon: <LineChart size={32} className="text-[var(--primary-color)]" />,
    text: "Within a year of publication, just five to six pages out of 100 will appear in the top ten search results.",
  },
  {
    icon: <Smartphone size={32} className="text-[var(--primary-color)]" />,
    text: "Mobile devices account for over 60% of organic search engine visits.",
  },
];

function Seo() {
  return (
    <div>
      <Helmet>
        <title>Best SEO Company in Delhi NCR</title>
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
              Best SEO Company in Delhi NCR
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)", // softer but effective
                letterSpacing: "0.5px",
              }}
            >
              More&nbsp;
              <TypeAnimation
                sequence={["Traffic", 2000, "Leads", 2000, "Sales", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We help businesses grow their online presence with tailored SEO
              strategies. Connect with us and see the difference.
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

      <section className="bg-white dark:bg-black py-12 px-6 md:px-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              What is SEO & Why is it Important for Your business?
            </h2>
          </div>

          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Many people mistakenly believe that SEO is merely a business
                etiquette. The process of increasing a website's or online
                content's visibility in search engine results pages (SERPs),
                mostly on sites like Google, Yahoo, and Bing, is known as search
                engine optimization. Thus, the likelihood of showing up in
                search queries increases with visibility. Usually, an SEO
                strategy focuses on four important areas:
              </p>

              <ul className="list-[upper-roman] pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Analysis of Keywords</li>
                <li>Establishing Backlinks</li>
                <li>Production of Content</li>
                <li>Upkeep of technical systems</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                These elements form the foundation of the approaches used by
                different <strong>SEO agencies</strong>, regardless of the kind
                of SEO.
              </p>
            </div>

            {/* Right image */}
            <div className="w-full">
              <img
                src={seo}
                alt="Best SEO Company in Delhi NCR"
                className="w-full h-[60vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Drive Organic Traffic with the Best SEO Company in India
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            We are a{" "}
            <strong>
              <a href="https://www.bigwigdigital.in/">
                Top SEO Agency in Delhi
              </a>
            </strong>
            , offering companies the greatest SEO solutions. BigWig Digital has
            more than 10 years of extensive expertise and has assisted numerous
            companies in Delhi, India, and other countries in achieving their
            online marketing objectives and improving their search engine
            rankings. Managing more than 10,000 campaigns with success and
            keeping a 95% client retention rate.
          </p>
        </div>

        {/* Right stats with icons */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-gray-800 dark:text-gray-100 font-medium text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-black py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">
            All in One SEO Services Under One Roof
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Item */}
            {[
              {
                title: "Local search engine optimization",
                points: [
                  `We assist your company in showing up in "near me" searches, which generates local leads and foot traffic.`,
                  `Your Google Business Profile is optimized by our expertise to improve visibility on maps and local packs.`,
                  `To increase your local online authority, we create local citations.`,
                  `We control your ratings and reviews to boost click-through rates and trust.`,
                  `We use location-based sites as part of our content strategy to draw in local searchers.`,
                ],
              },
              {
                title: "App Store Optimization (ASO)",
                points: [
                  `We raise your app's visibility and ranking on the Apple App Store and Google Play.`,
                  `The purpose of our content and creatives is to increase engagement and app downloads.`,
                  `Utilizing competitive insights and keyword research, we improve discoverability.`,
                  `We help you get good app reviews so you may succeed in the long run.`,
                  `Our ASO tactics provide your app a competitive edge in a saturated market.`,
                ],
              },
              {
                title: "Answer Engine Optimization (AEO)",
                points: [
                  `We arrange your material such that it shows up in Google's "People Also Ask" and featured snippets.`,
                  `Your chances of ranking as the top response to voice search inquiries are increased by our optimization strategies.`,
                  `We produce organized, conversational material that corresponds with the way people pose inquiries.`,
                  `Our use of schema markup improves the search engine visibility of your material.`,
                  `With our AEO strategy, you'll gain more credibility and click-throughs.`,
                ],
              },
              {
                title: "Geotargeted SEO (GEO)",
                points: [
                  `To reach audiences in various cities or regions, we develop region-specific methods.`,
                  `Hyper-targeted traffic is generated by the local landing pages our team creates.`,
                  `We help you dominate local search engine results pages by optimizing for geo-specific keywords.`,
                  `Through localized content and backlinks, we bolster your visibility.`,
                  `We help you rank in every area you serve, making us perfect for businesses with many locations.`,
                ],
              },
              {
                title: "E-commerce SEO",
                points: [
                  `We enhance your store to increase organic sales and product visibility.`,
                  `Your product's rankings on Google and other search engines are raised by our tactics.`,
                  `For higher conversion rates, we improve user experience and address technical problems.`,
                  `We write product descriptions and URLs that are optimized for search engines to draw in customers.`,
                  `You can achieve long-term success with our e-commerce SEO without depending too much on advertisements.`,
                ],
              },
              {
                title: "International SEO",
                points: [
                  `We increase your website's visibility across the globe by helping it rank in several languages and countries.`,
                  `To prevent content misunderstanding, our team uses geo-targeting and hreflang tags.`,
                  `For every target market and culture, we localize your approach and content.`,
                  `Baidu, Yandex, and Bing are some of the regional search engines that we optimize for.`,
                  `When you work with us, your brand is prepared to compete and prosper globally.`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-4 border-[var(--primary-color)] bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
                  {item.title}
                </h3>
                <ul className="list-disc  space-y-2 text-gray-700 dark:text-gray-300 text-base">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
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

export default Seo;
