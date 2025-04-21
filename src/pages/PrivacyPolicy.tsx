import Footer2 from "../components/Footer2";
import Nav2 from "../components/Nav2";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 md:pt-32 bg-black min-h-screen text-white">
      <div>
        <Nav2 />
      </div>
      <div className="bg-black text-white pb-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          🔐 Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">
          Last Modified: April 19, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            What Information Do We Collect?
          </h2>
          <p>
            We collect information from you when you register on our site or
            fill out a form. When ordering or registering, you may be asked to
            enter your name or e-mail address. You may, however, visit our site
            anonymously.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            What Do We Use Your Information For?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website based on your feedback</li>
            <li>To improve customer service and support</li>
            <li>
              To process transactions — your information will not be sold or
              shared without your consent, except for the purpose of delivering
              a purchased product or service.
            </li>
            <li>
              To send periodic emails related to your order, company news,
              updates, or promotions. You can unsubscribe at any time using the
              link in our emails.
            </li>
            <li>
              To administer a contest, promotion, survey, or other site feature
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How Do We Protect Your Information?
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you access your account or submit
            data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Do We Use Cookies?</h2>
          <p>No, we do not use cookies.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Do We Disclose Any Information to Outside Parties?
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties. This excludes trusted
            third parties who assist in operating our website or servicing you,
            provided they agree to keep this information confidential. We may
            release your info to comply with the law, enforce site policies, or
            protect ours or others’ rights, property, or safety. Non-personally
            identifiable visitor info may be shared for marketing or
            advertising.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
          <p>
            Occasionally, we may include or offer third-party products or
            services on our website. These sites have separate privacy policies,
            and we hold no responsibility for their content or activities.
            However, we aim to protect the integrity of our site and welcome
            feedback.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Online Privacy Policy Only
          </h2>
          <p>
            This privacy policy applies only to information collected through
            our website, not offline.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Consent</h2>
          <p>By using our site, you consent to our privacy policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Changes to Our Privacy Policy
          </h2>
          <p>
            If we make changes to our privacy policy, we will post them on this
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contacting Us</h2>
          <p>
            If you have any questions regarding this privacy policy, you may
            contact us at:
          </p>
          <address className="mt-2 not-italic">
            Plot # 2 <br />
            Sanjay Nagar, Gulabi Bagh, <br />
            Delhi 110007, <br />
            Email:
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="text-blue-600 hover:underline"
            >
              vipul@bigwigmedia.in
            </a>
            <br />
            Website:
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
