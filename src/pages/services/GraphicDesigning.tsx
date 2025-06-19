import { TypeAnimation } from "react-type-animation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import OurProcess from "../../components/OurProcess";
import WhyBigwig from "../../components/WhyBigwig";
import { Helmet } from "react-helmet";
import Hero from "../../assets/Services hero/Graphic Design-3.jpg";

function GraphicDesigning() {
  return (
    <div>
      <Helmet>
        <title>
          Transform Your Ideas With The Best Graphic Design Agency in Delhi
        </title>
      </Helmet>
      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Transform Your Ideas With The Best Graphic Design Agency in Delhi
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[#5c85ee]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Design That&nbsp;
              <TypeAnimation
                sequence={[
                  "Connects",
                  2000,
                  "Communicates ",
                  2000,
                  "Converts",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              we craft bold visuals and crazy concepts every second to keep your
              brand always trending.
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
      <section className="bg-white py-12 px-4">
        <div className="w-5/6 mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl md:font-bold font-semibold text-[var(--primary-color)]">
              A Creative Graphic Design Agency In Delhi, NCR
            </h2>

            <p className="text-lg text-gray-600 text-justify py-5">
              At BigWig Digital, we believe in the potency of using images and
              graphics to express stories. Delhi is home to many vibrant
              enterprises, and in order to transform their concepts into
              eye-catching visual experiences, they want a graphic design firm
              that is very imaginative, committed, and hardworking. It has
              established itself as one of Delhi's top graphic design firms
              thanks to Creative Orion. Whether you are from a local Delhi
              business or the fashion sector, or you are a start-up or
              established brand, we offer graphic design services to everyone.
              All sectors can benefit from our highly innovative and customized
              solutions.
            </p>

            <p className="text-lg text-gray-600 text-justify py-5">
              BigWig Digital's graphics department provides 360° graphic design
              support to help you advance your business endeavors. Adhering to
              the maxim that "great design leads to great businesses," our team
              of expert graphic designers provides top-notch design support for
              all of your needs, including packaging, adverts, logos, and more.
              As a graphic design company in Delhi, we offer the best possible
              design services by utilizing the newest, most advanced software,
              the creative abilities of our designers, and our knowledge of
              every industry with essential resources. BigWig Digital provides
              web design services to customers in India, the United Arab
              Emirates, New Zealand, and Australia.
            </p>

            {/* New Replaced Third Paragraph as Icon List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 text-left">
              {[
                {
                  icon: "🧩",
                  title: "Complete Design Solutions for Every Industry",
                  description:
                    "From startups to established enterprises, we offer a wide range of graphic design services tailored to suit all business verticals.",
                },
                {
                  icon: "💡",
                  title: "Creative Experts with Proven Experience",
                  description:
                    "Our seasoned design professionals understand what works best for your brand and create visuals that leave a lasting impression.",
                },
                {
                  icon: "🎯",
                  title: "Impactful Designs That Drive Results",
                  description:
                    "We craft eye-catching, functional designs that help you communicate effectively with your audience and promote your offerings globally.",
                },
                {
                  icon: "🛠",
                  title: "Latest Tools, Limitless Innovation",
                  description:
                    "Using cutting-edge graphic design tools and techniques, our passionate team delivers high-quality, trend-forward designs every time.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] text-center">
              We use advanced graphic designing tools to create impressive ideas
              for you
            </h2>

            <p className="text-lg text-gray-600 text-justify">
              <strong>Creative Visual Impact:</strong> BigWig Digital, the
              leading graphic design company in Delhi, India, delivers visually
              compelling designs using text, symbols, logos, colors, and images
              to create instant impact. Our work helps clients effectively
              promote their brands, products, and services.
            </p>

            <p className="text-lg text-gray-600 text-justify">
              <strong>Expert Team & Innovative Approach:</strong> Our skilled
              and imaginative design team transforms ideas into artistic
              marvels, blending creativity with client input to deliver
              tailored, high-quality visual solutions that exceed expectations.
            </p>
          </div>

          <div className="bg-[var(--primary-color)]/5 p-8 rounded-xl">
            <h3 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--primary-color)] mb-8 text-center md:text-left">
              Graphic Design Services We Offer:-
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Package design", icon: "📦" },
                { title: "Logo designs", icon: "🎨" },
                { title: "Illustrations", icon: "🖌️" },
                { title: "Stationeries", icon: "🗂️" },
                { title: "Business cards", icon: "💼" },
                { title: "Banner designs", icon: "🖼️" },
                { title: "Brochure design", icon: "📘" },
                { title: "Animated designs", icon: "🎞️" },
                { title: "Leaflet designs", icon: "📄" },
                { title: "Catalogue designs", icon: "📚" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-gray-800 font-medium">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              Through our designs, we have assisted numerous well-known clients
              in achieving exceptional brand and commercial visibility. The best
              and most well-known type of advertising is branding, and our
              design makes a strong statement. Any kind of design can be created
              and curated by BigWig Digital, a top graphic design firm in Delhi
              NCR, India, the United Arab Emirates, New Zealand, and Australia.
              All you have to do is present us with your idea, and we will do
              everything in our power to meet your expectations by providing
              unmatched graphic design services in a predetermined amount of
              time.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="w-5/6 mx-auto">
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-4xl md:font-bold font-semibold text-[var(--primary-color)] mb-6 text-center max-w-3xl">
              Why Is Professional Graphic Design Essential for Your Business?
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 text-center">
            While it might not seem necessary right now, excellent graphic
            design is crucial for long-term success; neglecting it is like
            ignoring your health. Your company's visual identity requires
            constant attention and investment, just like your health.
            <br />
            <br />
            People may be drawn to them by graphics. By investing in a Delhi
            graphic design agency, you can use our superior design services to
            immediately create a well-known and reliable brand.
          </p>

          {/* Grid Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="p-6 bg-[var(--primary-color)]/5 rounded-lg border-l-4 border-[var(--primary-color)] shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-[var(--primary-color)]">
                It makes a powerful initial impression
              </h4>
              <p className="text-sm md:text-base text-justify text-gray-700">
                The user encounters your goods or service initially. It's the
                images of your brand. Customers' perceptions of your brand are
                shaped by the images they see. Visual appeal is important in
                today's aesthetic-driven economy, despite its apparent
                superficiality.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-[var(--primary-color)]/5 rounded-lg border-r-4 border-[var(--primary-color)] shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-[var(--primary-color)]">
                Increases Recognition of the Brand
              </h4>
              <p className="text-sm md:text-base text-justify text-gray-700">
                A strong brand identity is built through consistent and creative
                design. Thankfully, our talented graphic designers in Delhi are
                prepared to use their exceptional abilities to increase brand
                recognition.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-[var(--primary-color)]/5 rounded-lg border-l-4 border-[var(--primary-color)] shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-[var(--primary-color)]">
                Promotes Credibility & Trust
              </h4>
              <p className="text-sm md:text-base text-justify text-gray-700">
                A polished and professional appearance inspires confidence in
                your audience. When consumers see your brand for the first time,
                they are drawn to it by its visuals, which increases credibility
                and trust.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-[var(--primary-color)]/5 rounded-lg border-r-4 border-[var(--primary-color)] shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-[var(--primary-color)]">
                Boosts Engagement and Conversions
              </h4>
              <p className="text-sm md:text-base text-justify text-gray-700">
                Our Delhi graphic design firm uses visuals to highlight
                interactions and conversions, ensuring that it draws in more
                customers and boosts sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <Footer />
    </div>
  );
}

export default GraphicDesigning;
