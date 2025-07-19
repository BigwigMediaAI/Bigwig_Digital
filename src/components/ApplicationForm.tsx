import React, { useState } from "react";
import axios from "axios";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    experience: "",
    cctc: "",
    ectc: "",
    noticePeriod: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      setMessage("Please upload a resume.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, (formData as any)[key]);
    }
    data.append("resume", resume);

    try {
      setLoading(true);
      setMessage("");

      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/submit-job",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        experience: "",
        cctc: "",
        ectc: "",
        noticePeriod: "",
        coverLetter: "",
      });
      setResume(null);
    } catch (err: any) {
      console.error(err);
      setMessage("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-2">Apply for this job</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="text"
          name="experience"
          placeholder="Total Experience"
          value={formData.experience}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="cctc"
          placeholder="Current CTC"
          value={formData.cctc}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="ectc"
          placeholder="Expected CTC"
          value={formData.ectc}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="noticePeriod"
          placeholder="Notice Period"
          value={formData.noticePeriod}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
          className="border p-2"
          required
        />
      </div>

      {/* Full width textarea */}
      <textarea
        name="coverLetter"
        placeholder="Note"
        value={formData.coverLetter}
        onChange={handleChange}
        rows={2}
        className="w-full border p-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {message && <p className="text-sm mt-2 text-gray-700">{message}</p>}
    </form>
  );
};

export default ApplicationForm;
