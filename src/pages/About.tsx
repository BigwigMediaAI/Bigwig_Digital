import Nav from "../components/Nav";

function About() {
  return (
    <div className="bg-white dark:bg-[var(--bg-color1)] text-gray-800 dark:text-white">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* About Us */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
            About Us
          </h1>
          <p className="mb-4">
            Bigwig Media Digital is a 360° digital marketing company dedicated
            to transforming brands into industry leaders. With over 8 years of
            experience, we’ve been consistently helping businesses grow, engage
            audiences, and stay ahead in the digital landscape.
          </p>
          <p className="mb-2">
            With a data-driven approach, creative mindset and relevant
            strategies we specialize in:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>
              Search Engine Optimisation
              <ul className="list-[square] ml-5">
                <li>Local SEO</li>
                <li>On-Page SEO</li>
                <li>Off-Page SEO</li>
                <li>Technical SEO</li>
                <li>App Store Optimisation (ASO)</li>
                <li>Answer Engine Optimisation (AEO)</li>
                <li>Generative Engine Optimisation (GEO)</li>
                <li>E-Commerce</li>
              </ul>
            </li>
            <li>
              Social Media Marketing
              <ul className="list-[square] ml-5">
                <li>Meta Ads</li>
                <li>TikTok Ads</li>
                <li>Twitter Ads</li>
                <li>LinkedIn Ads</li>
                <li>Snapchat Ads</li>
                <li>Pinterest</li>
                <li>YouTube Ads</li>
              </ul>
            </li>
            <li>Performance Marketing (Google Ads)</li>
            <li>Content Creation</li>
            <li>Brand Strategy</li>
            <li>E-mail Marketing</li>
            <li>Graphic Design</li>
            <li>AI & CGI Ads</li>
            <li>Landing Page Optimization</li>
            <li>Affiliate Marketing</li>
            <li>Video Shoot</li>
            <li>Public Relations (PR)</li>
            <li>Influencer Marketing</li>
            <li>Online Reputation Management (ORM)</li>
          </ul>
          <p>
            Whether you're a startup looking to make an impression or an
            established business aiming to scale, our team delivers measurable
            results that drive growth, engage audiences, and ROI. At Bigwig, we
            don’t just market, we build digital experiences that connect,
            convert, and create impact.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Results-Driven Approach:</strong> We focus on what matters
              most like ROI. Every click, impression, and post are backed by
              data and enhanced for performance.
            </li>
            <li>
              <strong>Customized Strategies:</strong> No one-size-fits-all here.
              We tailor each plan to match your brand’s goals, engage audiences,
              and growth potential.
            </li>
            <li>
              <strong>Expert Team, Real Results:</strong> Our team of seasoned
              marketers, dynamic creatives, and analysts combine deep industry
              knowledge with cutting-edge tools to deliver measurable outcomes.
            </li>
            <li>
              <strong>Transparent Reporting:</strong> You’ll always know where
              your budget is getting spent. We provide clear, actionable reports
              and insights — no shoptalk, just results.
            </li>
            <li>
              <strong>Creative Meets Strategy:</strong> We execute bold ideas
              with strategic precision. From compelling content to
              high-converting campaigns, creativity is our superpower.
            </li>
            <li>
              <strong>360° Digital Solutions 24x7:</strong> Whether it’s SEO,
              social media, PPC or web development, we’ve got you covered across
              every digital touchpoint.
            </li>
          </ul>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
            What We Do
          </h2>
          <p>
            At Bigwig Digital, we help brands grow, engage audiences, and
            convert in the digital world. From SEO and social media to paid ads,
            content creation, and web strategy — we craft data-driven campaigns
            and strategies that deliver real, live results. Whether you're
            building your brand or boosting sales, we deliver smart digital
            solutions tailored to your goals.
          </p>
        </section>

        {/* Founder’s Message */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
            From the Founder’s Desk
          </h2>
          <p>
            <strong>Vipul Dutta, Founder – Bigwig Digital</strong>
          </p>
          <p className="mt-2">
            At Bigwig Digital, our purpose has always been well-defined: to
            empower brands in navigating the ever-evolving digital landscape
            with confidence, creativity, and measurable results.
          </p>
          <p className="mt-2">
            When I started this journey over a decade ago, digital marketing was
            still finding its place. Today, it’s at the core of how brands
            engage with their audience, and we take pride in being part of that
            transformation.
          </p>
          <p className="mt-4">
            Bigwig Digital isn’t just a company — it’s a team of passionate
            thinkers, creators, and strategists who believe in turning bold
            ideas into real business growth. We don’t chase trends; we create
            solutions that last, rooted in data, creativity, and purpose. As we
            continue to grow and evolve, our commitment remains the same: to
            deliver meaningful impact, build strong digital foundations, and be
            a trusted partner for every brand we work with.
          </p>
          <p className="mt-6 italic text-right">
            Thank you for being a part of our journey.
            <br />
            <strong>
              Warm regards,
              <br />
              Vipul Dutta
              <br />
              Founder, Bigwig Digital
            </strong>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
