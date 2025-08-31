import React, { useEffect, useState } from "react";
import adminApi from "../adminApi";
import EventFormModal from "../components/EventFormModal";

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [editEvent, setEditEvent] = useState<Event | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.get("/events");
      setEvents(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleAddEvent = async (data: any) => {
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.post("/events", data);
      setModalOpen(false);
      fetchEvents();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to add event");
    } finally {
      setModalLoading(false);
    }
  };

  const handleEditEvent = (event: Event) => {
    setEditEvent(event);
    setModalOpen(true);
  };

  const handleUpdateEvent = async (data: any) => {
    if (!editEvent) return;
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.put(`/events/${editEvent._id}`, data);
      setModalOpen(false);
      setEditEvent(null);
      fetchEvents();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to update event");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    setDeleteLoading(true);
    setDeleteError("");
    setDeleteId(id);
    try {
      await adminApi.delete(`/events/${id}`);
      fetchEvents();
    } catch (err: any) {
      setDeleteError(err.response?.data?.message || "Failed to delete event");
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Events</h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 transition"
          onClick={() => {
            setEditEvent(null);
            setModalOpen(true);
          }}
        >
          + Add Event
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : Array.isArray(events) && events.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Venue</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td className="py-2 px-4 border-b font-semibold">
                    {event.title}
                  </td>
                  <td className="py-2 px-4 border-b">{event.date}</td>
                  <td className="py-2 px-4 border-b">{event.time}</td>
                  <td className="py-2 px-4 border-b">{event.venue}</td>
                  <td className="py-2 px-4 border-b">{event.description}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-purple-600 hover:underline mr-2"
                      onClick={() => handleEditEvent(event)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDeleteEvent(event._id)}
                      disabled={deleteLoading && deleteId === event._id}
                    >
                      {deleteLoading && deleteId === event._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-500">No events found.</div>
      )}
      <EventFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditEvent(null);
        }}
        onSubmit={editEvent ? handleUpdateEvent : handleAddEvent}
        initialData={editEvent || undefined}
      />
      {modalLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center">
            {editEvent ? "Updating event..." : "Adding event..."}
          </div>
        </div>
      )}
      {modalError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center text-red-500">
            {modalError}
          </div>
        </div>
      )}
      {deleteError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center text-red-500">
            {deleteError}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminEvents;
