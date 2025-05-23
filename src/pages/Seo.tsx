import Footer2 from "../components/Footer2";
import Nav from "../components/Nav";

function Seo() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] md:h-[550px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2023/09/05133724/Best-Digital-Marketing-Agencies-In-Mumbai.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="SEO Hero"
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 max-w-4xl leading-snug">
            Boost Your Visibility with Leading SEO Services in Delhi!
          </h1>
          <p className="text-base md:text-xl italic font-medium max-w-3xl">
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
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
              alt="Why SEO"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why SEO is Crucial for Your Business
            </h2>
            <ul className="list-disc list-inside space-y-3 leading-relaxed">
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
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
              alt="SEO Services"
              className="rounded-lg w-full h-auto"
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
