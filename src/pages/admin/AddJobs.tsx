import { useEffect, useState } from "react";
import "../../index.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const initialForm = {
  title: "",
  location: "",
  jd: "",
  responsibilities: [] as string[],
  requirements: [] as string[],
  jobType: "Full-time",
  workMode: "Office",
};

const AddJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const fetchJobs = async () => {
    const res = await fetch(`${baseURL}/api/jobs`);
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "responsibilities" || name === "requirements") {
      setForm({ ...form, [name]: value.split("\n").filter(Boolean) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const openPopup = (job = initialForm, id = "", editing = false) => {
    setForm(job);
    setEditId(id);
    setIsEditing(editing);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setForm(initialForm);
    setIsPopupOpen(false);
    setEditId("");
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    const method = isEditing ? "PUT" : "POST";
    const endpoint = isEditing
      ? `${baseURL}/api/jobs/${editId}`
      : `${baseURL}/api/jobs`;

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      fetchJobs();
      closePopup();
    } else {
      alert("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job?")) return;
    const res = await fetch(`${baseURL}/api/jobs/${id}`, { method: "DELETE" });
    if (res.ok) fetchJobs();
  };

  return (
    <div className="min-h-screen bg-black text-white font-raleway p-6">
      <div className="flex justify-between items-center sticky top-0 z-20 bg-black p-4 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Manage Job Vacancies</h1>
        <button
          onClick={() => openPopup()}
          className="text-white bg-[var(--primary-color)] px-4 py-2 rounded hover:bg-opacity-90"
        >
          New Job Post
        </button>
      </div>

      {/* Job List */}
      {jobs.length === 0 ? (
        <div className="text-center text-gray-400 mt-10 text-lg">
          No job vacancies found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job: any) => (
            <div
              key={job._id}
              className="bg-gray-800 p-6 rounded-lg shadow-md relative group"
            >
              <div className="absolute top-4 right-4 flex gap-2 transition">
                <button
                  onClick={() => openPopup(job, job._id, true)}
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-400 hover:text-red-500"
                >
                  <FaTrash />
                </button>
              </div>

              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{job.location}</p>
              <p className="text-sm text-gray-300 mb-2">
                {job.jobType} • {job.workMode}
              </p>

              <div className="text-sm text-gray-300 mb-2">
                <strong>Responsibilities:</strong>
                <ul className="list-disc list-inside pl-2 mt-1">
                  {job.responsibilities.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-300">
                <strong>Requirements:</strong>
                <ul className="list-disc list-inside pl-2 mt-1">
                  {job.requirements.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-3xl shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Job" : "Create Job"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleInputChange}
                placeholder="Job Title"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="p-2 border rounded"
              />
              <select
                name="jobType"
                value={form.jobType}
                onChange={handleInputChange}
                className="p-2 border rounded"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
              <select
                name="workMode"
                value={form.workMode}
                onChange={handleInputChange}
                className="p-2 border rounded"
              >
                <option value="">Select Work Mode</option>
                <option value="Office">Office</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
              <textarea
                name="responsibilities"
                value={form.responsibilities.join("\n")}
                onChange={handleInputChange}
                placeholder="Responsibilities (one per line)"
                className="p-2 border rounded col-span-2"
                rows={3}
              />
              <textarea
                name="requirements"
                value={form.requirements.join("\n")}
                onChange={handleInputChange}
                placeholder="Requirements (one per line)"
                className="p-2 border rounded col-span-2"
                rows={3}
              />
              <textarea
                name="jd"
                value={form.jd}
                onChange={handleInputChange}
                placeholder="Job Description"
                className="p-2 border rounded col-span-2"
                rows={4}
              />
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={closePopup}
                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-[var(--primary-color)] text-white"
              >
                {isEditing ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddJobs;
