import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function Seo() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen">
      <div className="mb-24 md:mb-28">
        <Nav2 />
      </div>

      {/* Hero Section */}
      <section
        className="relative w-full h-[450px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Search Engine Optimization Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Boost Your Visibility with Leading SEO Services in Delhi!
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-3xl mx-auto mb-8">
            Climb the Google rankings and attract the right audience. Bigwig
            Digital helps your business grow with proven Search Engine
            Optimization strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why SEO Section */}
        <section
          id="why-seo"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why SEO is Crucial for Your Business
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>
              <strong>Increase Website Traffic:</strong> Rank higher on Google
              and get discovered by your target audience.
            </li>
            <li>
              <strong>Build Brand Authority:</strong> Establish your presence as
              a trusted name in your industry.
            </li>
            <li>
              <strong>Cost-Effective Marketing:</strong> SEO delivers long-term
              ROI without paying for each click.
            </li>
            <li>
              <strong>Better User Experience:</strong> Optimize speed,
              mobile-friendliness, and content for higher engagement.
            </li>
            <li>
              <strong>Higher Conversion Rates:</strong> Organic visitors convert
              better with the right optimization strategy.
            </li>
          </ul>
        </section>

        {/* SEO Services Section */}
        <section
          id="services"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Our SEO Services
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>On-Page SEO (Headings, Keywords, Meta Tags)</li>
            <li>Off-Page SEO (Link Building & Outreach)</li>
            <li>Technical SEO (Speed, Structure, Schema)</li>
            <li>Local SEO (Google Business Profile, Maps)</li>
            <li>eCommerce SEO (Product Optimization)</li>
            <li>SEO Audits & Competitor Analysis</li>
            <li>Monthly Reports & Strategy Updates</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section
          id="testimonial"
          className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center"
        >
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “With Bigwig Digital’s SEO strategy, we saw a 200% increase in
            organic traffic within months. Their expertise is unmatched and
            results speak for themselves.”
          </blockquote>
          <cite className="block mt-6 font-semibold text-white text-xl">
            - Vipul Dutta, CEO, Bigwig Digital
          </cite>
        </section>

        {/* Closing */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Our SEO experts help you grow organically and sustainably. Whether
            you're a startup or an established brand, we tailor SEO solutions to
            help you dominate search rankings and outshine your competitors.
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default Seo;
