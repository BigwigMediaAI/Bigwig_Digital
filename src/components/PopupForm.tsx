import { useEffect, useState } from "react";
import axios from "axios";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [otp, setOtp] = useState("");

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setOtp("");
    setStatusMessage("");
    setStep("form");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        formData
      );
      setStatusMessage("OTP sent! Please check your email.");
      setStep("otp");
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
      setStatusMessage("Lead saved successfully!");
      setTimeout(handleClose, 2000);
    } catch (err: any) {
      setStatusMessage(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#4E6CBA] max-w-sm w-full p-6 rounded-lg shadow-xl relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-lg font-bold text-white"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-center mb-1 text-white">
              Let's Grow Together!
            </h2>
            <p className="text-center mb-4 text-white">Request a FREE Call!</p>

            {step === "form" ? (
              <form className="space-y-3" onSubmit={handleSendOtp}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID"
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile No."
                    className="w-1/2 p-2 border rounded"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Explain your requirements (minimum 50 characters)"
                  className="w-full p-2 border rounded"
                  rows={3}
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#DA4D42] text-white w-full py-2 rounded-full mt-2 hover:bg-red-700"
                >
                  {loading ? "Sending OTP..." : "Submit Now"}
                </button>
              </form>
            ) : (
              <form className="space-y-3" onSubmit={handleVerifyOtp}>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white w-full py-2 rounded-full mt-2 hover:bg-green-700"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            )}

            {statusMessage && (
              <p className="text-sm text-white text-center mt-2">
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
