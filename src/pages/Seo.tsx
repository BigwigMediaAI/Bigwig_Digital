import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import SEO from "../assets/SEO.png";
import SEO2 from "../assets/SEO2.png";
import SEO3 from "../assets/SEO3.png";

function Seo() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${SEO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="SEO Hero"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4 max-w-4xl leading-snug">
            Boost Your Visibility with Leading SEO Services in Delhi!
          </h1>
          <p className="text-sm md:text-xl italic font-medium max-w-3xl">
            Climb the Google rankings and attract the right audience. Bigwig
            Digital helps your business grow with proven Search Engine
            Optimization strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why SEO Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-6 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={SEO2}
              alt="Why SEO"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why SEO is Crucial for Your Business
            </h2>
            <ul className="list-disc list-inside space-y-3 py-4 leading-relaxed">
              <li>
                <strong>Increase Website Traffic:</strong> Rank higher on Google
                and get discovered by your target audience.
              </li>
              <li>
                <strong>Build Brand Authority:</strong> Establish your presence
                as a trusted name in your industry.
              </li>
              <li>
                <strong>Cost-Effective Marketing:</strong> SEO delivers
                long-term ROI without paying for each click.
              </li>
              <li>
                <strong>Better User Experience:</strong> Optimize speed,
                mobile-friendliness, and content for higher engagement.
              </li>
              <li>
                <strong>Higher Conversion Rates:</strong> Organic visitors
                convert better with the right optimization strategy.
              </li>
              <li>
                <strong>Local SEO Optimization:</strong> Attract nearby
                customers with geo-targeted search visibility.
              </li>
              <li>
                <strong>Competitive Advantage:</strong> Outrank competitors and
                capture more market share through smart SEO.
              </li>
              <li>
                <strong>Long-Term Growth:</strong> Sustainable traffic and
                visibility that builds over time.
              </li>
              <li>
                <strong>Content Optimization:</strong> Enhance blog posts,
                product pages, and landing pages for top performance.
              </li>
              <li>
                <strong>Technical SEO Improvements:</strong> Fix crawl errors,
                improve indexing, and boost site health.
              </li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 px-4 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Our SEO Services
            </h2>
            <ul className="list-disc list-inside space-y-3  leading-relaxed">
              <li>On-Page SEO (Headings, Keywords, Meta Tags)</li>
              <li>Off-Page SEO (Link Building & Outreach)</li>
              <li>Technical SEO (Speed, Structure, Schema)</li>
              <li>Local SEO (Google Business Profile, Maps)</li>
              <li>eCommerce SEO (Product Optimization)</li>
              <li>SEO Audits & Competitor Analysis</li>
              <li>Monthly Reports & Strategy Updates</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={SEO3}
              alt="SEO Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        {/* Closing */}
        <section className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md">
          <p className="text-base md:text-lg leading-relaxed mx-auto text-center p-6">
            Our SEO experts help you grow organically and sustainably. Whether
            you're a startup or an established brand, we tailor SEO solutions to
            help you dominate search rankings and outshine your competitors.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default Seo;
