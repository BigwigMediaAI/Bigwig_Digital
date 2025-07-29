import { useEffect, useState } from "react";
import "../../index.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const initialForm = {
  title: "",
  location: "",
  jd: "",
  responsibilities: "",
  requirements: "",
  jobType: "",
  workMode: "",
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
    setForm({ ...form, [e.target.name]: e.target.value });
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
    const confirm = window.confirm("Delete this job?");
    if (!confirm) return;

    const res = await fetch(`${baseURL}/api/jobs/${id}`, { method: "DELETE" });
    if (res.ok) fetchJobs();
  };

  return (
    <div className="min-h-screen bg-black text-white font-raleway flex flex-col p-4">
      <div className="flex justify-between items-center sticky top-0 z-20 bg-black p-4 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Manage Job Vacancies</h1>
        <button
          onClick={() => openPopup()}
          className="text-white bg-[var(--primary-color)] px-4 py-2 rounded"
        >
          New Job Post
        </button>
      </div>

      {/* Job List */}
      <div className="mt-6 grid gap-4">
        {jobs.map((job: any) => (
          <div
            key={job._id}
            className="bg-gray-800 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="text-sm mt-1">
                {job.jobType} • {job.workMode}
              </p>
            </div>
            <div className="flex gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => openPopup(job, job._id, true)}
                className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="px-4 py-1 rounded bg-red-600 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

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
              <input
                type="text"
                name="jobType"
                value={form.jobType}
                onChange={handleInputChange}
                placeholder="Job Type (e.g. Full-time)"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="workMode"
                value={form.workMode}
                onChange={handleInputChange}
                placeholder="Work Mode (e.g. Remote)"
                className="p-2 border rounded"
              />
              <textarea
                name="responsibilities"
                value={form.responsibilities}
                onChange={handleInputChange}
                placeholder="Responsibilities"
                className="p-2 border rounded col-span-2"
                rows={2}
              />
              <textarea
                name="requirements"
                value={form.requirements}
                onChange={handleInputChange}
                placeholder="Requirements"
                className="p-2 border rounded col-span-2"
                rows={2}
              />
              <textarea
                name="jd"
                value={form.jd}
                onChange={handleInputChange}
                placeholder="Job Description"
                className="p-2 border rounded col-span-2"
                rows={3}
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
