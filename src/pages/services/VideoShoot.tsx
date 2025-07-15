import { TypeAnimation } from "react-type-animation";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet";
import hero from "../../assets/Services hero/Video Shot.jpg";
import videoshoot from "../../assets/services/13.jpg";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";
import Slider from "react-slick";

const services = [
  {
    title: "Brand Story Videos",
    description:
      "Showcase your brand’s mission, journey, and personality through a compelling visual narrative that resonates with your audience.",
  },
  {
    title: "Product Demo Videos",
    description:
      "Demonstrate your product’s features, usage, and benefits clearly, building trust and influencing buying decisions.",
  },
  {
    title: "Social Media Reels & Shorts",
    description:
      "We create short-form, trend-driven video content for Instagram, YouTube, and TikTok that’s crafted to go viral and spark engagement.",
  },
  {
    title: "Corporate Video Shoots",
    description:
      "From interviews to company culture highlights, we deliver polished corporate videos that reflect professionalism and authenticity.",
  },
  {
    title: "Event Coverage",
    description:
      "Capture key moments from launches, expos, conferences, or internal events with cinematic video coverage.",
  },
  {
    title: "Explainer Videos",
    description:
      "Break down complex processes or services with easy-to-understand, visually appealing explainer content.",
  },
];

function VideoShoot() {
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
        <title>Video Shoot Services in Delhi</title>
      </Helmet>
      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/50 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Professional Video Shoot Services in Delhi That Elevate Your Brand
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> We shoot videos that&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "tell your story",
                    2000,
                    "make people watch",
                    2000,
                    "drive real engagement",
                    2000,
                    " speak without words",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              From concept to final cut, we create scroll-stopping videos that
              make your brand unforgettable. Let’s shoot your next story
            </p>

            <a href="/contact">
              <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Form - 1/3 */}
          <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4">
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

      <section className="bg-white text-black py-12 space-y-10">
        {/* Section 1 - Introduction */}
        <div className="w-11/12 md:w-5/6 mx-auto space-y-6 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl  font-bold text-[var(--primary-color)]">
                In today’s digital world, video is no longer just content, it’s
                communication.
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                At <strong>BigWig Digital</strong>, we help brands turn their
                ideas into high-quality, engaging video content that grabs
                attention and delivers results. From promotional videos and
                social media reels to brand stories and product demos, we offer
                end-to-end{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">
                    {" "}
                    Video Shoot Services in Delhi
                  </a>
                </strong>{" "}
                tailored to your goals.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We blend creativity, storytelling, and strategy to create videos
                that don’t just look good — they convert. Whether you're a
                startup launching your first product or an established brand
                looking to scale visually, we craft video content that tells
                your story and supports your growth.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={videoshoot} // Replace with your actual image
                alt="Video Shoot Services in Delhi"
                className="w-full h-[60vh] rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white text-black py-8">
          <h2 className="text-3xl font-semibold text-[var(--primary-color)] w-5/6 mx-auto mb-5">
            Why Your Business Needs Professional Video Content
          </h2>
          <div className="w-5/6 mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE: Title, Paragraphs, Closing */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Compared to other media, video content draws viewers in more
                quickly. It helps you connect emotionally, explain your
                offerings clearly, and boost conversions, whether on websites,
                ads, or social media.
              </p>
              <p className="text-lg leading-relaxed pt-2">
                With the rise of video-first platforms like Instagram Reels,
                YouTube Shorts, and TikTok, having professional video marketing
                content is no longer optional, it’s essential.
              </p>
            </div>

            {/* RIGHT SIDE: Bullet Point List */}
            <ul className="list-disc pl-6 space-y-3">
              {[
                "Increase brand visibility and recall",
                "Improve engagement on digital platforms",
                "Communicate complex messages quickly",
                "Boost website conversions and SEO performance",
                "Make ads more effective and scroll-stopping",
                "Enhance customer trust with consistent visual identity",
              ].map((point, i) => (
                <li key={i} className="text-lg leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4 - Final Impact Statement */}
        <div className="w-5/6 mx-auto space-y-6 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
            Don’t Just Tell Your Story
          </h3>

          <p className="text-lg leading-relaxed">
            In a world flooded with content, standing still is not an option. At
            BigWig Digital, we turn static ideas into cinematic motion, because
            great brands don’t whisper, they perform. Our video shoot services
            go beyond the lens to capture the energy, emotion, and essence of
            your brand.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it’s a 15-second scroll-stopper for Instagram or a
            full-scale brand film, we create visuals that demand attention and
            drive results. With a team of storytellers, strategists, and
            creators behind the camera, every frame is intentional, every second
            is optimized, and every video speaks louder than words.
          </p>
        </div>
      </section>

      <div className="bg-white w-11/12 md:w-5/6 mx-auto text-black py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)] mb-12">
          Our Video Shoot Services
        </h2>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8  mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="border-l-4 border-[var(--primary-color)] pl-4 bg-gray-50 p-5 rounded-md shadow-sm"
            >
              <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                {service.title}
              </h4>
              <p className="text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <Slider {...sliderSettings}>
            {services.map((service, i) => (
              <div key={i} className="px-2">
                <div className="border-l-4 border-[var(--primary-color)] pl-4 bg-gray-50 p-5 rounded-md shadow-sm h-full">
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-white text-black py-12  space-y-16">
        {/* Heading + Intro */}
        <div className="w-11/12 md:w-5/6 mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Why Choose BigWig Digital for Video Shoot Services in Delhi?
          </h2>
          <p className="text-lg leading-relaxed">
            We’re not just videographers, we’re digital marketers who understand
            how video fits into your overall growth strategy. Our approach
            combines creative production with marketing insight, ensuring that
            each video has a purpose and a measurable impact.
          </p>
        </div>

        {/* Step-by-step layout */}
        <div className="w-5/6 mx-auto space-y-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-[var(--primary-color)] hidden md:block" />

          {[
            {
              title: "In-House Team of Creators",
              desc: "From directors and scriptwriters to editors and motion graphic designers, we manage everything in-house for full quality control.",
            },
            {
              title: "Script to Screen Solutions",
              desc: "We handle the full process, ideation, scripting, shooting, editing, and delivery — so you can focus on what matters.",
            },
            {
              title: "Latest Equipment & Techniques",
              desc: "Our team uses professional-grade cameras, lighting, drones, and audio tools to ensure top-tier production quality.",
            },
            {
              title: "Tailored for Platforms",
              desc: "Each video is formatted and optimized based on where you plan to publish it, social media, websites, ads, or presentations.",
            },
            {
              title: "Fast Turnaround with Quality",
              desc: "We understand that speed matters in the digital world, and we’re committed to delivering high-quality videos within agreed timelines.",
            },
          ].map((item, i) => (
            <div key={i} className="md:flex md:gap-8 md:items-start relative">
              {/* Step Number */}
              <div className="flex-shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary-color)] text-white font-bold z-10">
                {i + 1}
              </div>

              {/* Content Block */}
              <div className="md:ml-12">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-base leading-relaxed text-gray-800">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OurProcess />
      <WhyBigwig />

      <div className="bg-[var(--primary-color)] text-white py-12 text-center ">
        {/* Headline */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Let’s Make Your Brand Move
          </h3>

          {/* Main Paragraph */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            If you’re looking for professional, impactful{" "}
            <span className="italic">
              <a href="https://www.bigwigdigital.in/">
                {" "}
                Video Shoot Services in Delhi
              </a>
            </span>
            , BigWig Digital is your creative partner. We help you bring your
            ideas to life on screen, connect with your audience emotionally, and
            convert views into value.
          </p>

          {/* Closing Line */}
          <p className="max-w-2xl mx-auto text-lg font-semibold">
            It’s time to turn your vision into video, and your video into
            growth.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideoShoot;
