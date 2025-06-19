import { TypeAnimation } from "react-type-animation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import hero from "../../assets/Services hero/PPC-1.jpg";
// import ppc from "../../assets/Services hero/PPC.jpg";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSearchDollar,
  FaPhotoVideo,
  FaFacebookF,
  FaRetweet,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";

const ppcBenefits = [
  {
    title: "Achieve Business Goals",
    content:
      "PPC services give us immediate results from the ads that are displayed, unlike any other campaigning medium. You may reach a large number of people with a single click by increasing your Google Network advertisements. This can help you realize your goals, whether they are engagement, leads, sales, video views, or app downloads.",
  },
  {
    title: "Fast Results",
    content:
      "By reaching millions of consumers while they are occupied with their favorite websites, Gmail accounts, YouTube videos, apps, and mobile devices, Google Display Network Advertising helps you expand your business. Google Display Network Advertising gives you a fantastic chance to market your brand to consumers without having to wait for them to find your goods or services.",
  },
  {
    title: "Measurable Results",
    content:
      "Because every aspect of your business ads can be tracked, PPC services are incredibly open. Everything is answerable, including expenses, earnings, and the quantity of clicks and visits. This would help determine whether the PPC services are contributing to the accomplishment of our specific objectives or whether there is room for improvement. You can easily figure out your PPC campaign's conversion and return on investment.",
  },
  {
    title: "Targeted Audience",
    content:
      "Because Pay Per Click advertisements target consumers who are looking for particular brands or products—like cuisine, travel, astrology, and more—one can maintain control over the audience type. Selecting a target audience based on age, time zone, geography, and offers raises awareness of the product or services to increase the amount of people who are interested in it.",
  },
  {
    title: "Brand Recognition",
    content:
      "You can stay at the top by carefully choosing the perfect term to raise awareness of your business or product. In this manner, brand recognition is raised, which will increase sales and attract the intended demographic. Ads on social media can be useful as well.",
  },
  {
    title: "Budget Friendly",
    content:
      "PPC services give users the freedom to decide how much they want to spend on developing, generating, and paying for each click. The investment can be increased or decreased based on the earnings or return received from this service, and there is no set budget.",
  },
  {
    title: "Increased Web Traffic",
    content:
      "You may make your adverts relevant to the specified keywords by using PPC services. By enabling companies to target particular keywords and phrases that prospective clients are likely to seek for, PPC services can boost your chances of promoting more online traffic. Businesses can boost traffic by encouraging more people to click on to their website by ranking highly in search results.",
  },
  {
    title: "More Leads",
    content:
      "PPC services may help you target your audience with efficient keyword research, create engaging ads, and optimize your campaigns for quality leads. Understanding your target audience's requirements and desires is made easier using PPC. You can also increase the quantity of quality leads you generate by utilizing retargeting and other lead-generation techniques.",
  },
  {
    title: "Increased Sales",
    content:
      "PPC services assist you in remarketing to prospective clients who have previously expressed interest in your goods or services. You are working to properly educate customers to move them farther down the sales funnel as you gain a better understanding of your customers. By optimizing your landing pages and providing strong calls to action, PPC services can help you increase your conversion rate.",
  },
  {
    title: "More In-Store Visits",
    content:
      "PPC services can assist you in placing a higher priority on using search ads to reach clients looking for goods or services related to your company. A call-to-action that entices visitors to visit your store should be included in your ad copy. To reach customers who are close to your store, use location-based targeting.",
  },
  {
    title: "More Phone Calls",
    content:
      "You can boost your phone call volume by utilizing PPC services. Utilize click-to-call advertisements, which let users phone you straight from your ad, and call monitoring services to measure how many calls are coming from your PPC campaigns. You can identify the words, advertising, and other elements that result in fruitful encounters by using remarketing.",
  },
  {
    title: "Better Brand Awareness",
    content:
      "PPC can help you accomplish a variety of marketing goals. These goals cover a wide range of topics, from a hot lead registration or an online transaction to high brand recognition and actionable insights. Using PPC services, you can also make advertisements that are specifically made to raise brand awareness, which will encourage people to recognize and value your business because of its well-known brand.",
  },
];

const features = [
  {
    title: "Top PPC Services Provider in Delhi",
    text: "With Google Ads-certified experts, BigWig Digital is a top PPC provider that serves customers worldwide.",
  },
  {
    title: "Instant Lead Generation with Cost-Efficiency",
    text: "With the help of our PPC services, you can swiftly and affordably draw in targeted customers with clever sponsored advertising campaigns.",
  },
  {
    title: "Expert Management of Google & Social Media Ads",
    text: "We oversee effective PPC campaigns on social media and Google Ads to immediately increase your visibility and traffic.",
  },
  {
    title: "Affordable PPC Campaigns That Deliver Results",
    text: "Our digital marketing services are at competitive prices while maintaining high quality, unlike many other agencies in Delhi.",
  },
  {
    title: "Guaranteed Top Search Placement",
    text: "With high-intent keywords, our SEO team gets your website on the front page of search results when it matters most.",
  },
  {
    title: "Transparent & Scalable PPC Strategy",
    text: "With BigWig Digital, you maintain budgetary control while we assist in growing your company with ROI-focused, data-driven campaigns.",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
};

const featureSettings = {
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

function PerformanceMarketing() {
  return (
    <div>
      <Helmet>
        <title>Top PPC Company in India</title>
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
              Top PPC Company in India
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Be&nbsp;
              <TypeAnimation
                sequence={["Seen", 2000, "Clicked", 2000, "Remembered", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn Clicks into Customers with Our ROI-Focused PPC Campaigns
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

      <section className="bg-white text-black dark:text-white py-12">
        <div className="w-5/6 mx-auto space-y-20">
          {/* Intro */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              We are Delhi NCR's Top PPC Company
            </h2>
            <p className="text-lg mx-auto leading-relaxed text-justify md:text-start">
              We are Delhi NCR's top PPC company, having been tried and tested.
              Our PPC specialists constantly work to keep you one step ahead of
              your rivals by offering top-notch PPC services. With complete
              transparency, select cost-effective PPC plans specifically
              designed for Google Ads services, such as Banner Ads, Search Ads,
              App Installation Ads, YouTube Ads, Lead Generation Ads, Shopping
              Ads, Campaign Quality Score Impro vement & Modification, Landing
              Page Design, etc.
            </p>
            <p className="text-lg mx-auto leading-relaxed text-justify md:text-start">
              We are a team of extremely driven, committed, and skilled
              businesspeople with years of expertise planning and carrying out
              digital marketing campaigns for a range of businesses and niches.
              The success of our clientele is our motto.
            </p>
            <p className="text-lg  mx-auto leading-relaxed text-justify md:text-start">
              We firmly think that success comes from smart work that makes a
              significant difference rather than just hard work. For this
              reason, we constantly advise our clients to concentrate on their
              strengths while we take care of their digital marketing
              requirements.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] text-center">
              Why Pick Us for Your PPC Needs?
            </h3>

            {/* Mobile Slider */}
            <div className="block lg:hidden">
              <Slider {...featureSettings}>
                {features.map((item, i) => (
                  <div key={i}>
                    <div className="bg-white dark:bg-neutral-800 border-l-4 border-[var(--primary-color)] p-6 rounded-xl shadow">
                      <h4 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-neutral-800 border-l-4 border-[var(--primary-color)] p-6 rounded-xl shadow"
                >
                  <h4 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--primary-color)]">
                Team of Dedicated PPC Consultants
              </h3>
              <p className="text-lg leading-relaxed">
                Our staff of PPC consultants is skilled, passionate, and
                experienced in handling complex PPC campaigns. Each project is
                assigned to an expert who specializes in keyword selection, ad
                copywriting, audience targeting, landing page design,
                goal-setting, and conversion optimization.
              </p>
              <p className="text-lg leading-relaxed">
                Many clients came to us after unsatisfactory experiences with
                other agencies, looking to increase leads and conversions
                without increasing cost. Today, they remain loyal clients thanks
                to our result-driven strategies and consistent performance.
              </p>
              <p className="text-lg leading-relaxed">
                To maximize impact, we carefully plan each PPC campaign. We work
                across Google Ads, Facebook, Bing, and other advertising
                platforms. Contact us today for a PPC package tailored to your
                unique business goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-black dark:text-white">
              {[
                { icon: <FaSearchDollar />, label: "Search Advertising" },
                {
                  icon: <FaPhotoVideo />,
                  label: "Display & Video Advertising",
                },
                { icon: <FaFacebookF />, label: "Social Media Advertising" },
                { icon: <FaRetweet />, label: "Remarketing" },
                { icon: <FaMobileAlt />, label: "Mobile Advertising" },
                { icon: <FaShoppingCart />, label: "Shopping Advertising" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-6 border border-gray-200 dark:border-neutral-700 shadow-md rounded-xl bg-white dark:bg-neutral-800"
                >
                  <div className="text-[var(--primary-color)] text-3xl">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray py-12">
        <div className="w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--primary-color)]">
            Benefits of PPC Services for Your Business
          </h2>
          {/* Mobile View: Slider */}
          <div className="block lg:hidden">
            <Slider {...sliderSettings}>
              {ppcBenefits.map((benefit, index) => (
                <div key={index}>
                  <div className="bg-white h-[300px] rounded-2xl gap-5 shadow-lg border-l-4 border-[var(--primary-color)] p-6 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* Desktop View: Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcBenefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg border-l-4 border-[var(--primary-color)] p-6 pl-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />
      <section className="py-12 bg-white text-black">
        <div className="w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center text-[var(--primary-color)]">
            How is PPC Service Helpful for New Business?
          </h2>

          <div className="space-y-6 leading-relaxed text-lg ">
            <p>
              Following PPC promotion, a business can receive immediate results
              in a matter of seconds. Compared to SEO or SMO services, PPC
              services drive traffic to a website considerably more quickly.
              Either way, it's an inorganic or paid service. Each time the
              advertisement is clicked, we must pay. Clicks, appearances, lead
              generation, app installs, and many more actions can be considered
              activities.
            </p>

            <p>
              The PPC sector is quite competitive. Managing many specialized
              components is part of PPC. These focus elements can be obtained by
              downgrading a dedicated PPC company in Delhi for PPC management
              and organization work promotion.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PerformanceMarketing;
