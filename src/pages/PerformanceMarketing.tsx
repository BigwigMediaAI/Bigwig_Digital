import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import img from "../assets/Performance marketing.png";
import pm1 from "../assets/pm1.png";
import pm2 from "../assets/pm2.png";

function PerformanceMarketing() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Performance Marketing Hero"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Drive Measurable Growth with Performance Marketing in Delhi
          </h1>
          <p className="text-sm md:text-lg italic font-medium max-w-3xl">
            We deliver results you can track. From ad clicks to conversions,
            Bigwig Digital ensures every penny spent delivers ROI.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why Performance Marketing */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={pm1}
              alt="Why Performance Marketing"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why Performance Marketing is Essential
            </h2>
            <ul className="list-disc list-inside space-y-3 py-4 leading-relaxed">
              <li>
                <strong>Pay for Results</strong> – Only spend when users take
                action—clicks, leads, or conversions.
              </li>
              <li>
                <strong>Trackable ROI</strong> – Real-time insights on campaign
                performance and returns.
              </li>
              <li>
                <strong>Hyper-Targeted Campaigns</strong> – Use behavior &
                demographic targeting.
              </li>
              <li>
                <strong>Multi-Channel Reach</strong> – Google, Meta, LinkedIn,
                and more.
              </li>
              <li>
                <strong>Scalable Campaigns</strong> – Start small, scale fast.
              </li>
              <li>
                <strong>Custom Landing Pages</strong> – Direct traffic to
                high-converting, tailored pages.
              </li>
              <li>
                <strong>A/B Testing</strong> – Continuously optimize ads and
                creatives for peak performance.
              </li>
              <li>
                <strong>Remarketing Capabilities</strong> – Re-engage visitors
                who didn’t convert the first time.
              </li>
              <li>
                <strong>Budget Flexibility</strong> – Set daily or lifetime
                budgets that suit your business.
              </li>
              <li>
                <strong>Fast Results</strong> – See traffic and conversions
                within hours of launch.
              </li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Our Performance Marketing Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed">
              <li>Google Ads (Search, Display, Shopping, YouTube)</li>
              <li>Meta Ads (Facebook & Instagram Campaigns)</li>
              <li>LinkedIn Ads for B2B Growth</li>
              <li>Landing Page Optimization</li>
              <li>Retargeting & Remarketing Strategies</li>
              <li>Performance Analytics & Dashboards</li>
              <li>Conversion Rate Optimization (CRO)</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={pm2}
              alt="Our Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        {/* Closing */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md"
        >
          <p className="text-base md:text-lg leading-relaxed mx-auto text-center">
            Our performance marketing experts craft highly optimized campaigns
            that scale profitably. Whether you're generating leads or sales, we
            ensure you get maximum ROI from every channel.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default PerformanceMarketing;
