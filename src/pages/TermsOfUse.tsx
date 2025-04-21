import Footer2 from "../components/Footer2";
import Nav2 from "../components/Nav2";

export default function TermsOfUse() {
  return (
    <div className="pt-24 md:pt-32 bg-black min-h-screen text-white">
      <Nav2 />

      <div className=" pb-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          📄 Terms of Use
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">
          Last Modified: April 19, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and conditions of this agreement. If you do not
            agree to abide by these terms, please do not use this site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Modifications</h2>
          <p>
            We reserve the right to change, modify, or revise these terms at any
            time. Changes will become effective immediately upon being posted on
            the site. Your continued use of the site after any changes means you
            accept those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Use of the Site</h2>
          <p>
            You agree to use the site for lawful purposes only. You may not use
            the site in any way that could damage, disable, overburden, or
            impair it, or interfere with any other party’s use of the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property displayed
            on this site are the property of Bigwig Digital or their respective
            owners. You may not reproduce, duplicate, copy, sell, resell, or
            exploit any portion of the site without express written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
          <p>
            The content on this site is provided “as is” and without warranties
            of any kind. We do not guarantee the accuracy, completeness, or
            usefulness of any information on the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            In no event shall Bigwig Digital be liable for any indirect,
            incidental, special, or consequential damages arising from the use
            of or inability to use this site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the content or practices of those sites. Access them
            at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Termination</h2>
          <p>
            We reserve the right to terminate your access to the site without
            notice if you violate these terms or engage in any harmful or
            unlawful behavior.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>If you have any questions about these Terms of Use, contact us:</p>
          <address className="mt-2 not-italic">
            Plot # 2 <br />
            Sanjay Nagar, Gulabi Bagh, <br />
            Delhi 110007, <br />
            Email:{" "}
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="text-blue-600 hover:underline"
            >
              vipul@bigwigmedia.in
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.bigwigdigital.in"
              className="text-blue-600 hover:underline"
            >
              www.bigwigdigital.in
            </a>
          </address>
        </section>
      </div>
      <Footer2 />
    </div>
  );
}
