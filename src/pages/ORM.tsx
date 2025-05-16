import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function Orm() {
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
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Online Reputation Management Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Protect & Elevate Your Brand with Expert Online Reputation
            Management
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-3xl mx-auto mb-8">
            Build trust, handle negative feedback, and shine online. Big Wig
            Digital is Delhi’s trusted ORM agency that secures your digital
            credibility.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why ORM Section */}
        <section
          id="why-orm"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why Online Reputation Management Matters
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>
              <strong>Build Trust & Credibility:</strong> What people say online
              shapes your brand’s image.
            </li>
            <li>
              <strong>Improve Search Results:</strong> Push down negative
              content and highlight positives.
            </li>
            <li>
              <strong>Customer Retention:</strong> Respond to reviews and
              feedback with professionalism.
            </li>
            <li>
              <strong>Crisis Control:</strong> Act fast and strategically to
              limit damage during online controversies.
            </li>
            <li>
              <strong>Influence Buyer Decisions:</strong> Positive reputation
              directly impacts conversions and sales.
            </li>
          </ul>
        </section>

        {/* ORM Services Section */}
        <section
          id="services"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Our ORM Services
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>Review Monitoring & Response Management</li>
            <li>Negative Content Suppression & Removal (where possible)</li>
            <li>Positive Branding & PR Strategy</li>
            <li>Social Media & Forum Monitoring</li>
            <li>Search Engine Result Optimization</li>
            <li>Wikipedia & Online Profile Management</li>
            <li>Reputation Audits & Recovery Planning</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section
          id="testimonial"
          className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center"
        >
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “Big Wig Digital helped us regain control of our online presence
            after a PR crisis. Their ORM team is sharp, proactive, and
            incredibly reliable.”
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
            With Big Wig Digital’s ORM services, your brand is protected and
            promoted the right way. Let us help you build a strong, trustworthy
            digital image that earns loyalty and drives business.
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default Orm;
