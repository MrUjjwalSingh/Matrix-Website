import React, { useState, useEffect } from "react";

interface EventFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: {
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
  };
}

const EventFormModal: React.FC<EventFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [time, setTime] = useState(initialData?.time || "");
  const [venue, setVenue] = useState(initialData?.venue || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setTitle(initialData?.title || "");
      setDate(initialData?.date || "");
      setTime(initialData?.time || "");
      setVenue(initialData?.venue || "");
      setDescription(initialData?.description || "");
      setError("");
    }
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !time || !venue || !description) {
      setError("All fields are required.");
      return;
    }
    onSubmit({ title, date, time, venue, description });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {initialData ? "Edit Event" : "Add Event"}
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g., March 15, 2024"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g., 2:00 PM - 5:00 PM"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Venue</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition"
          >
            {initialData ? "Update Event" : "Add Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventFormModal;
