import React, { useEffect, useState } from "react";
import adminApi from "../adminApi";

interface Feedback {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminFeedbacks: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Feedback | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "name">("date");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.get("/../forms/admin");
      setFeedbacks(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch feedbacks");
    } finally {
      setLoading(false);
    }
  };

  const sortedFiltered = feedbacks
    .filter(
      (f) =>
        f.name.toLowerCase().includes(filter.toLowerCase()) ||
        f.email.toLowerCase().includes(filter.toLowerCase()) ||
        f.message.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold">Feedbacks</h2>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Filter by name, email, or message..."
            className="border px-3 py-2 rounded text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <select
            className="border px-2 py-2 rounded text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : sortedFiltered.length === 0 ? (
        <div className="text-gray-500">No feedbacks found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedFiltered.map((fb) => (
                <tr
                  key={fb._id}
                  className="hover:bg-cyan-50 cursor-pointer"
                  onClick={() => setSelected(fb)}
                >
                  <td className="py-2 px-4 border-b font-semibold">
                    {fb.name}
                  </td>
                  <td className="py-2 px-4 border-b">{fb.email}</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    {fb.message}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(fb.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal for feedback details */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors duration-300 z-10 text-2xl font-bold"
            >
              ×
            </button>
            <div className="p-8">
              <h3 className="text-xl font-bold font-orbitron text-cyan-700 mb-2">
                Feedback Details
              </h3>
              <div className="mb-2">
                <span className="font-semibold">Name:</span> {selected.name}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Email:</span> {selected.email}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(selected.createdAt).toLocaleString()}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Message:</span>
                <div className="bg-gray-100 border border-cyan-200 rounded p-3 mt-1 text-gray-800 font-mono whitespace-pre-line">
                  {selected.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminFeedbacks;
