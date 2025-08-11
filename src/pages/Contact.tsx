import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateInputs = () => {
    const newErrors: typeof errors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateInputs()) return;

    setLoading(true);
    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
      setStep("otp");
      setStatusMessage("OTP sent! Please check your email.");
    } catch (err: any) {
      if (err.response?.status === 400) {
        setStatusMessage(err.response.data.message || "Email already used.");
      } else {
        setStatusMessage("Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/verify-otp",
        {
          email: formData.email,
          otp,
        }
      );
      setShowSuccessPopup(true); // <-- Show success popup
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setOtp("");
      setTimeout(() => {
        setStep("form");
        setStatusMessage("");
      }, 3000);
    } catch (err: any) {
      setStatusMessage(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <Helmet>
        <title>Contact BigWig Digital</title>
        <meta
          name="description"
          content="Get in touch with BigWig Digital for your next big digital marketing transformation."
        />
        <link
          rel="canonical"
          href="https://www.bigwigmediadigital.com/contact"
        />
      </Helmet>

      {/* Locations */}
      <section className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
        {/* Office Info */}
        <div className="pt-4">
          <h2 className="text-2xl mb-2 font-semibold">Dubai</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Head Office</h2>
          <p className="mb-1 text-lg">Dubai</p>
          <p className="mb-4">
            1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.
          </p>
          <h2 className="text-2xl mb-2 font-semibold">India</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Branch Offices</h2>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
          </p>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            S-1, 3rd Floor, Janta Market, Rajouri Garden New Delhi - 110027
          </p>
          <h2 className="text-2xl mb-2 font-semibold">Australia</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Melbourne</p>
          <p className="mb-4">80 Lsabella way, Tarneit 3029 Melbourne</p>

          <h2 className="text-2xl mb-2 font-semibold">New Zealand</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Auckland</p>
          <p className="mb-4">
            9/136 Marua Road, Mount Wellington, Auckland 1051
          </p>

          <p className="text-gray-400 mt-8">
            Our business operating hours are as follows:
          </p>
          <p className="mt-2">Monday to Saturday: 10:30am - 7:30pm</p>
        </div>
        {/* Contact Options */}
        <div>
          <h2 className="text-xl font-semibold mb-2 font-sans">Get in Touch</h2>
          <p className="mb-4 text-gray-400">
            Please contact us via phone or email below or visit us during hours.
          </p>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md flex gap-4 shadow-sm">
              <Phone className="text-gray-700" />
              <span className="text-sm text-gray-700">
                +971 505029471 (Dubai)
              </span>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 shadow-sm">
              <Phone className="text-gray-700" />
              <span className="text-sm text-gray-700">
                +91 83685 73451 (India)
              </span>
            </div>
            <a
              href="https://wa.me/+918368573451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-md flex gap-4 shadow-sm"
            >
              <FaWhatsapp className="text-green-600" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="bg-white p-4 rounded-md flex gap-4 shadow-sm"
            >
              <Mail className="text-gray-700" />
              <span className="text-sm text-gray-700">
                vipul@bigwigmedia.in
              </span>
            </a>
            <a
              href="sms:+918368573451"
              className="bg-white p-4 rounded-md flex gap-4 shadow-sm"
            >
              <MessageSquareText className="text-gray-700" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro to Form */}
      <div className="w-full md:w-[90%] mx-auto px-5">
        <h2 className="text-lg text-[var(--secondary-color)]">
          Have questions or need marketing advice?
        </h2>
        <p className="text-md text-gray-400 mb-6">
          Fill out the form and we’ll respond within 24 hours.
        </p>
      </div>

      {/* Form & Map */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7 bg-black">
        {/* Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-[#2c2c2c] rounded-lg p-8 shadow-lg">
          {step === "form" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-white text-black p-3 rounded-lg w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white text-black p-3 rounded-lg w-full ${
                  errors.email ? "border border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <PhoneInput
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handlePhoneChange}
                defaultCountry="IN"
                international
                className={`bg-white text-black p-3 rounded-lg w-full ${
                  errors.phone ? "border border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white text-black p-3 rounded-lg w-full"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg w-full"
              >
                {loading ? "Sending OTP..." : "Submit"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-white text-black p-3 rounded-lg w-full"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}
          {statusMessage && (
            <p className="text-sm text-center mt-3">{statusMessage}</p>
          )}
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.668560792657!2d55.264871674024235!3d25.18066683237258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69004a524faf%3A0x13d5b1575adb574a!2sBusiness%20Bay!5e0!3m2!1sen!2sin!4v1744201890505!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full shadow-2xl text-center">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Thank you!
            </h3>
            <p className="mb-4">
              Your response has been added. Our representative will contact you
              within 24 hours.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
