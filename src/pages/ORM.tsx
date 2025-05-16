import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function Orm() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}
      <div className="mb-16 md:mb-24">
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
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Protect & Elevate Your Brand with Expert Online Reputation
            Management
          </h1>
          <p className="text-base md:text-xl italic font-medium max-w-3xl">
            Build trust, handle negative feedback, and shine online. Bigwig
            Digital is Delhi’s trusted ORM agency that secures your digital
            credibility.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why ORM Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Why ORM Matters"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why Online Reputation Management Matters
            </h2>
            <ul className="list-disc list-inside space-y-3 leading-relaxed">
              <li>
                <strong>Build Trust & Credibility:</strong> What people say
                online shapes your brand’s image.
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
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Our ORM Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed">
              <li>Review Monitoring & Response Management</li>
              <li>Negative Content Suppression & Removal (where possible)</li>
              <li>Positive Branding & PR Strategy</li>
              <li>Social Media & Forum Monitoring</li>
              <li>Search Engine Result Optimization</li>
              <li>Wikipedia & Online Profile Management</li>
              <li>Reputation Audits & Recovery Planning</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src="https://cdn.prod.website-files.com/64d5a3ffa7b505860e94b3bc/65d7a68bd4046121656ff820_digital-marketing-team-achieving-business-goalsc.webp"
              alt="ORM Services"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Closing Section */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md px-6 py-12"
        >
          <p className="text-base md:text-lg leading-relaxed text-center">
            With Bigwig Digital’s ORM services, your brand is protected and
            promoted the right way. Let us help you build a strong, trustworthy
            digital image that earns loyalty and drives business.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default Orm;
