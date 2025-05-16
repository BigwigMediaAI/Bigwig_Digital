import Footer2 from "../components/Footer2";

import Nav2 from "../components/Nav2";

function SMM() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen">
      <div className="mb-24 md:mb-32">
        <Nav2 />
      </div>

      {/* Hero Section Full Width */}
      <section
        className="relative w-full h-[450px] md:h-[600px] overflow-hidden"
        aria-label="Social Media Management Hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Elevate Your Brand with the Best Social Media Management Company in
            Delhi!
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-4xl mx-auto mb-10">
            Looking for a top social media marketing agency in Delhi to boost
            your online presence? Big Wig Digital is your trusted partner for
            expert social media management services.
          </p>
        </div>
      </section>

      {/* Main Content Section max-w-7xl */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why Choose Us for Social Media Management?
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>
              <strong>Strategic Social Media Marketing</strong> – Tailored
              campaigns for Facebook, Instagram, LinkedIn, Twitter &amp; more.
            </li>
            <li>
              <strong>Content Creation &amp; Curation</strong> – High-quality
              posts, videos, reels, and stories to captivate your audience.
            </li>
            <li>
              <strong>Paid Advertising (PPC &amp; Social Ads)</strong> –
              Targeted ads to maximize ROI and lead generation.
            </li>
            <li>
              <strong>Community Engagement &amp; Growth</strong> – Active
              interaction to build loyal followers and brand advocates.
            </li>
            <li>
              <strong>Analytics &amp; Performance Tracking</strong> –
              Data-driven insights to refine strategies and improve results.
            </li>
            <li>
              <strong>Affordable &amp; Results-Driven</strong> – Customized
              packages for startups, SMEs, and enterprises.
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Our Social Media Services
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>Social Media Strategy &amp; Planning</li>
            <li>Content Creation &amp; Scheduling</li>
            <li>Influencer &amp; Collaborations Marketing</li>
            <li>Paid Social Media Advertising (Meta, Google, LinkedIn Ads)</li>
            <li>Reputation Management &amp; Brand Monitoring</li>
            <li>Monthly Performance Reports &amp; Optimization</li>
          </ul>
        </section>

        {/* Testimonial Section */}
        <section
          id="testimonial"
          className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center"
        >
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “Big Wig Digital helped our brand triple engagement in just 6
            months. Their expert team is creative, responsive, and always ahead
            of trends. Highly recommend for any serious business looking to grow
            on social media.”
          </blockquote>
          <cite className="block mt-6 font-semibold text-white text-xl">
            - Vipul Dutta, CEO, Bigwig Digital
          </cite>
        </section>

        {/* Closing Section */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            As a leading social media agency in Delhi, we help businesses
            dominate their niche with engaging, trend-driven content and smart
            advertising strategies. Whether you need Facebook marketing in
            Delhi, Instagram growth, or LinkedIn branding, we’ve
            got&nbsp;you&nbsp;covered!
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default SMM;
