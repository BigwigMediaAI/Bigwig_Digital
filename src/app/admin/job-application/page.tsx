"use client";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 20;

interface JobApplication {
  _id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  experience: string;
  cctc: string;
  ectc: string;
  noticePeriod: string;
  coverLetter: string;
  createdAt: string;
}

const JobApplication = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<
    JobApplication[]
  >([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: JobApplication, b: JobApplication) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setApplications(sorted);
        console.log(applications);
        setFilteredApplications(sorted);
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredApplications(applications);
      setCurrentPage(1);
      return;
    }
    const filtered = applications.filter((a) =>
      new Date(a.createdAt).toISOString().startsWith(selectedDate)
    );
    setFilteredApplications(filtered);
    setCurrentPage(1);
  }, [selectedDate, applications]);

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const currentApplications = filteredApplications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="sticky top-0 z-20 bg-black p-4 sm:p-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Job Applications</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="filter-date" className="text-sm text-gray-400">
            Filter by Date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {filteredApplications.length === 0 ? (
          <p className="text-gray-400">No applications found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                  <th className="px-4 py-3 border-b border-gray-700">Exp</th>
                  <th className="px-4 py-3 border-b border-gray-700">CTC</th>
                  <th className="px-4 py-3 border-b border-gray-700">ECTC</th>
                  <th className="px-4 py-3 border-b border-gray-700">Notice</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Applied At
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentApplications.map((app) => (
                  <tr
                    key={app._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">{app.fullName}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${app.email}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {app.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">{app.mobileNumber}</td>
                    <td className="px-4 py-3">{app.experience}</td>
                    <td className="px-4 py-3">{app.cctc}</td>
                    <td className="px-4 py-3">{app.ectc}</td>
                    <td className="px-4 py-3">{app.noticePeriod}</td>
                    <td className="px-4 py-3">
                      {new Date(app.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>

              {currentPage > 2 && (
                <>
                  <span className="px-2">1</span>
                  {currentPage > 3 && <span className="px-1">...</span>}
                </>
              )}

              {currentPage > 1 && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
              )}

              <span className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">
                {currentPage}
              </span>

              {currentPage < totalPages && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && (
                    <span className="px-1">...</span>
                  )}
                  <span className="px-2">{totalPages}</span>
                </>
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplication;
