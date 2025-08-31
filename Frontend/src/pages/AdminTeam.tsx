import React, { useEffect, useState } from "react";
import adminApi from "../adminApi";
import TeamFormModal from "../components/TeamFormModal";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
}

const AdminTeam: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [editMember, setEditMember] = useState<TeamMember | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.get("/team");
      setTeam(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch team members");
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (formData: FormData) => {
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.post("/team", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setModalOpen(false);
      fetchTeam();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to add member");
    } finally {
      setModalLoading(false);
    }
  };

  const handleEditMember = (member: TeamMember) => {
    setEditMember(member);
    setModalOpen(true);
  };

  const handleUpdateMember = async (formData: FormData) => {
    if (!editMember) return;
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.put(`/team/${editMember._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setModalOpen(false);
      setEditMember(null);
      fetchTeam();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to update member");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteMember = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this team member?"))
      return;
    setDeleteLoading(true);
    setDeleteError("");
    setDeleteId(id);
    try {
      await adminApi.delete(`/team/${id}`);
      fetchTeam();
    } catch (err: any) {
      setDeleteError(err.response?.data?.message || "Failed to delete member");
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Team</h2>
        <button
          className="bg-cyan-600 text-white px-4 py-2 rounded font-semibold hover:bg-cyan-700 transition"
          onClick={() => {
            setEditMember(null);
            setModalOpen(true);
          }}
        >
          + Add Member
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : Array.isArray(team) && team.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member._id}>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full border"
                    />
                  </td>
                  <td className="py-2 px-4 border-b font-semibold">
                    {member.name}
                  </td>
                  <td className="py-2 px-4 border-b">{member.role}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-600 hover:underline mr-2"
                      onClick={() => handleEditMember(member)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDeleteMember(member._id)}
                      disabled={deleteLoading && deleteId === member._id}
                    >
                      {deleteLoading && deleteId === member._id
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
        <div className="text-gray-500">No team members found.</div>
      )}
      <TeamFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditMember(null);
        }}
        onSubmit={editMember ? handleUpdateMember : handleAddMember}
        initialData={editMember || undefined}
      />
      {modalLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center">
            {editMember ? "Updating member..." : "Adding member..."}
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

export default AdminTeam;
