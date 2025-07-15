import { TypeAnimation } from "react-type-animation";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet";
import hero from "../../assets/Services hero/Public relation.jpg";
import publicRelation from "../../assets/services/14.jpg";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import {
  FaBullhorn,
  FaUserCheck,
  FaGlobe,
  FaSearch,
  FaShieldAlt,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Media Relations",
    desc: "Get featured in top-tier publications, digital media outlets, and industry blogs that your audience already trusts.",
  },
  {
    title: "Influencer Outreach",
    desc: "Collaborate with credible voices and thought leaders to boost visibility and build social proof.",
  },
  {
    title: "Online Reputation Management",
    desc: "Protect and enhance your brand’s image with timely responses, press mentions, and credibility-focused content.",
  },
  {
    title: "Press Release Creation & Distribution",
    desc: "Craft compelling announcements and distribute them through leading news and PR platforms.",
  },
  {
    title: "Thought Leadership Positioning",
    desc: "Position your brand leaders as experts through interviews, articles, podcasts, and panel features.",
  },
  {
    title: "Brand Story Development",
    desc: "Shape a narrative that resonates emotionally and communicates your value with clarity.",
  },
];

const benefits = [
  {
    title: "Earned Media Exposure",
    desc: "Appear in trusted media outlets where your audience already pays attention.",
    icon: <FaBullhorn className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Increased Brand Credibility",
    desc: "Compared to self-promotion or sponsored advertisements, third-party coverage fosters trust more quickly.",
    icon: <FaUserCheck className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Stronger Online Reputation",
    desc: "Use favorable press to control what people see when they look for you online.",
    icon: <FaGlobe className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Improved SEO Performance",
    desc: "Quality backlinks and branded mentions can boost your search rankings.",
    icon: <FaSearch className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Effective Crisis Management",
    desc: "Proactive communication during sensitive times helps protect your image.",
    icon: <FaShieldAlt className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Stronger Stakeholder Confidence",
    desc: "Consistent PR builds investor, customer, and partner trust.",
    icon: <FaHandshake className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
  {
    title: "Support for Product Launches",
    desc: "Drive buzz and attention for new offerings through strategic outreach.",
    icon: <FaRocket className="text-4xl text-[var(--primary-color)] mb-3" />,
  },
];

function PublicRelation() {
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
        <title>Public Relations Services in Delhi</title>
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
              Powerful Public Relations Services in Delhi to Build Trust,
              Visibility, and Influence
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We build your reputation&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "strategic media coverage",
                    2000,
                    "meaningful public presence ",
                    2000,
                    " high-visibility campaigns",
                    2000,
                    "impactful press stories",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Let your voice be heard where it matters most, we help brands
              build lasting reputations through smart, consistent PR efforts.
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

      <section className="bg-white py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Content */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700">
              In today’s fast-paced digital environment, perception is
              everything. At{" "}
              <span className="font-semibold">BigWig Digital</span>, we help you
              control the narrative with high-impact{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">
                  {" "}
                  Public Relation Services in Delhi
                </a>
              </strong>{" "}
              that position your brand where it matters most, in front of the
              right people, at the right time.
            </p>
            <p className="text-gray-700">
              Whether you’re a startup making your debut, a brand handling a
              sensitive moment, or a business looking to establish long-term
              authority, our PR strategies are built to amplify your voice and
              create lasting credibility.
            </p>
            <p className="text-gray-700">
              We go beyond press releases and mentions. Our approach is
              strategic and focused on reputation, relevance, and reach . As a
              trusted public relation agency in Delhi, we bridge the gap between
              your brand and the media, influencers, and industry leaders who
              shape public opinion.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2">
            <img
              src={publicRelation}
              alt="Public Relations Services in Delhi"
              className="w-full h-[50vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Content Block */}
          <div className="space-y-4">
            <h2 className="text-3xl  font-semibold text-[var(--primary-color)]">
              Why Public Relations Still Matters in the Digital Age
            </h2>
            <p className="text-gray-700">
              With algorithms constantly changing and ad fatigue growing,
              organic brand trust has never been more valuable. Public relations
              gives your brand authenticity, something that cannot be bought
              through ads. A well-crafted PR strategy helps you gain third-party
              validation, stay in the public eye, and navigate both growth
              opportunities and crisis communication with confidence.
            </p>
            <p className="text-gray-700">
              As a leading public relation agency in India,{" "}
              <strong>BigWig Digital</strong> helps brands create consistent
              media exposure, strengthen stakeholder confidence, and build a
              public image that aligns with your mission. When done right, PR
              doesn’t just create buzz, it builds belief.
            </p>
          </div>

          {/* Right Content Block */}
          <div className="space-y-4">
            <h3 className="text-3xl  font-semibold text-[var(--primary-color)]">
              PR That Builds More Than Awareness, It Builds Authority
            </h3>
            <p className="text-gray-700">
              While marketing may bring attention, public relations builds the
              foundation of trust. At BigWig Digital, we use PR to establish
              your brand as a credible, influential force in your industry.
            </p>
            <p className="text-gray-700">
              Whether you're entering a competitive market, managing brand
              perception, or preparing for expansion, a strong PR presence helps
              you earn validation that paid ads simply cannot.
            </p>
            <p className="text-gray-700">
              Our PR efforts are geared toward long-term growth, giving your
              brand visibility that lasts far beyond campaign timelines. As a
              performance-focused public relation agency in India, we don’t just
              chase features. We craft strategies that align your business
              objectives with content that connects, media that matters, and
              messages that move people.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Section 1: Key Areas We Help You Shine */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-8 text-center">
              Key Areas We Help You Shine
            </h2>
            {/* Mobile View: Slider */}
            <div className="md:hidden">
              <Slider {...sliderSettings}>
                {services.map((item, idx) => (
                  <div key={idx} className="px-2">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm">
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Digital-First Public Relations */}
          <div className="bg-[var(--primary-color)] p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Digital-First Public Relations for a Changing Media Landscape
            </h2>
            <p className="text-gray-200 mb-4">
              The media landscape is evolving, and so is the way people consume
              news and brand stories. That’s why we focus on digital PR, the
              intersection of traditional credibility and modern engagement. We
              help you earn visibility not just in newspapers or TV, but across
              high-authority websites, search engines, online magazines,
              podcasts, and social media platforms. Every mention we earn is
              designed to boost both reputation and discoverability.
            </p>
            <p className="text-gray-200">
              With our expertise in digital marketing and content strategy, we
              ensure your PR campaign supports your SEO, content marketing, and
              social media efforts, making <strong>BigWig Digital</strong> a
              truly integrated{" "}
              <span className="italic">
                <a href="https://www.bigwigdigital.in/">
                  Public Relation Agency in Delhi
                </a>
              </span>{" "}
              that understands the full picture of brand growth.
            </p>
          </div>

          {/* Section 3: Strategic PR Support Across Industries */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-8 text-center">
              Strategic PR Support Across Industries
            </h2>
            <p className="text-gray-700 mb-4">
              Every industry speaks a different language, and we know how to
              translate your story for the media that matters. From tech
              startups and D2C brands to education, finance, lifestyle, and
              wellness, our public relation services in India are designed to
              meet your industry’s unique communication needs.
            </p>
            <p className="text-gray-700">
              Whether you're looking to launch a product, handle reputation
              recovery, or become a known name in your niche, our PR strategies
              adapt to your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <h2 className="w-11/12 md:w-5/6 mx-auto text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-8 text-center">
          Benefits of Professional PR for Your Brand
        </h2>

        {/* Mobile View: Slider */}
        <div className="w-11/12 mx-auto md:hidden">
          <Slider {...sliderSettings}>
            {benefits.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View: Grid */}
        <div className="w-5/6 mx-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-between">
                {item.icon}
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Block */}
          <div>
            <h2 className="text-3xl font-semibold text-[var(--primary-color)] mb-4">
              Why BigWig for Public Relations Services?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With a sharp understanding of both traditional media and digital
              platforms, <strong>BigWig Digital</strong> offers a well-rounded,
              modern PR approach. As a trusted public relation agency in Delhi,
              we focus on meaningful placements, long-term reputation building,
              and storytelling that resonates. Our group makes sure that people
              remember your brand, not simply see it.
            </p>
          </div>

          {/* Right Block */}
          <div>
            <h2 className="text-3xl  font-semibold text-[var(--primary-color)] mb-4">
              Who Should Invest in PR?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PR isn’t just for large corporations or public figures—it’s for
              any business ready to grow with intention. Whether you’re
              launching a new venture, entering a new market, expanding
              globally, or aiming for acquisition, a solid PR foundation
              strengthens every move you make.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              If you're a startup looking for investor confidence, a tech
              company entering new regions, or a lifestyle brand building
              emotional connection, PR becomes your voice in a noisy market.{" "}
              <strong>BigWig Digital</strong> provides public relation services
              in Delhi and across India tailored to your size, sector, and stage
              of growth.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default PublicRelation;
