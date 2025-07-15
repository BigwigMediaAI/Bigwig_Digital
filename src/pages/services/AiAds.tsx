import { TypeAnimation } from "react-type-animation";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet";
import hero from "../../assets/Services hero/AI And CGI Ads.jpg";
import ai from "../../assets/services/10.jpg";
import {
  FaRupeeSign,
  FaCogs,
  FaBullseye,
  FaSyncAlt,
  FaMagic,
  FaStar,
} from "react-icons/fa";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import Footer from "../../components/Footer";

function AiAds() {
  return (
    <div>
      <Helmet>
        <title>CGI Advertising Company in India</title>
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
              CGI Advertising Company in India
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[#4e6cba]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We create CGI ads that&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "grab attention instantly",
                    2000,
                    "go viral on every platform ",
                    2000,
                    " make your product unforgettable",
                    2000,
                    "blur the line between real and unreal ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Stand out in a crowded digital world with hyper-realistic,
              creative CGI ads designed to stop the scroll and spark action.
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
      <section className="py-12 bg-white  text-[#1a1a1a] ">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-[var(--primary-color)]">
            India's Leading CGI Advertising Agency
          </h2>
          <p className="text-lg leading-relaxed text-center">
            Our specialty at <strong>BigWig Digital</strong> is developing
            visually spectacular and immersive advertising campaigns using
            state-of-the-art <strong>Computer-Generated Imagery (CGI)</strong>.
            We turn concepts into campaigns that enthrall, involve, and have a
            long-lasting effect on your target audience.
          </p>
        </div>
      </section>

      <section className="py-12 text-[#1a1a1a] ">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              Elevating Brands through CGI Advertisement Production
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>BigWig Digital</strong> creates visually spectacular
              computer-generated imagery (CGI) advertisements that pique
              viewers' interest and strengthen brand loyalty by fusing
              cutting-edge technology with artistic flare. Our shared tradition
              of telling stories and our commitment to technological innovation
              allow us to create outstanding visual storytelling in Delhi.
            </p>
            <p className="text-lg leading-relaxed">
              With their eye-catching, captivating campaigns,{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">CGI ads in India </a>
              </strong>
              are revolutionizing digital marketing. By utilizing the limitless
              possibilities of digital creation, brands are embracing CGI ads to
              deliver impactful, visually stunning, and highly engaging reel
              campaigns that resonate deeply with their target audiences.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={ai} // Replace with your image path
              alt="CGI Advertising Company in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12  text-[#1a1a1a] ">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Why Pick Our Service */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--primary-color)]">
              Why Pick Our Service for CGI Ads?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              <li>
                <strong>Unmatched Realism:</strong> Use photo-realistic
                computer-generated imagery to create advertisements that seem as
                authentic as the products themselves.
              </li>
              <li>
                <strong>Customizability:</strong> Designs that are completely
                adaptable to the character and message of your brand.
              </li>
              <li>
                <strong>High-Impact Creativity:</strong> Make an impression with
                advertisements that push the limits of imagination and
                interaction.
              </li>
              <li>
                <strong>Smooth Integration:</strong> Easily incorporate CGI
                advertisements into your traditional and digital media
                campaigns.
              </li>
              <li>
                <strong>Cost-effective:</strong> Without requiring physical
                prototypes, produce high-quality images at a lower cost.
              </li>
              <li>
                <strong>Ideal for Any Product:</strong> We'll make your product
                sparkle, whether it's a novel idea or an everyday commodity.
              </li>
            </ul>
          </div>

          {/* Right Column - Realizing Your Concepts */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--primary-color)]">
              Realizing Your Concepts in Stunning Detail
            </h2>
            <p className="text-lg leading-relaxed">
              In a visual-driven society, computer-generated imagery, or CGI,
              has the unrivaled ability to make even the most difficult ideas
              come to life. Our specialty at <strong>BigWig Digital</strong> is
              producing incredibly lifelike computer-generated imagery
              advertisements that enthrall viewers and accurately convey your
              message.
            </p>
            <p className="text-lg leading-relaxed">
              We guarantee that your idea is turned into an aesthetically
              spectacular experience, whether it's a product launch, an
              immersive advertising campaign, or a novel concept.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50  text-[#1a1a1a] ">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary-color)]">
            Benefits of CGI Advertising
          </h2>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-8 mb-12">
            {[
              { icon: <FaRupeeSign />, title: "Cost Effective" },
              { icon: <FaCogs />, title: "Flexibility & Adaptability" },
              { icon: <FaBullseye />, title: "Targeted Marketing" },
              { icon: <FaSyncAlt />, title: "Unlimited Iterations" },
              { icon: <FaMagic />, title: "Unlimited Creativity" },
              { icon: <FaStar />, title: "Enhance Brand Image" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-white dark:bg-[#2a2a2a] rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl text-[var(--primary-color)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300  mx-auto">
            Selecting the best CGI advertising agency in India is a difficult
            task, but with the help of this guide's wit and insight, you'll be
            well on your way to advertising success. You may identify the ideal
            partner to realize your brand's story in breathtaking
            computer-generated imagery by taking into account elements like
            portfolio diversity, industry experience, technology and innovation,
            client testimonials, communication and collaboration, and budget
            transparency.
          </p>
        </div>
      </section>
      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default AiAds;
