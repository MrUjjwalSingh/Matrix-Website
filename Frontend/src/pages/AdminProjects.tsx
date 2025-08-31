import React, { useEffect, useState } from "react";
import adminApi from "../adminApi";
import ProjectFormModal from "../components/ProjectFormModal";

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const AdminProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.get("/projects");
      setProjects(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleAddProject = async (data: any) => {
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.post("/projects", data);
      setModalOpen(false);
      fetchProjects();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to add project");
    } finally {
      setModalLoading(false);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditProject(project);
    setModalOpen(true);
  };

  const handleUpdateProject = async (data: any) => {
    if (!editProject) return;
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.put(`/projects/${editProject._id}`, data);
      setModalOpen(false);
      setEditProject(null);
      fetchProjects();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to update project");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    setDeleteLoading(true);
    setDeleteError("");
    setDeleteId(id);
    try {
      await adminApi.delete(`/projects/${id}`);
      fetchProjects();
    } catch (err: any) {
      setDeleteError(err.response?.data?.message || "Failed to delete project");
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          className="bg-cyan-600 text-white px-4 py-2 rounded font-semibold hover:bg-cyan-700 transition"
          onClick={() => {
            setEditProject(null);
            setModalOpen(true);
          }}
        >
          + Add Project
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Tags</th>
                <th className="py-2 px-4 border-b">GitHub</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(projects || []).map((project) => (
                <tr key={project._id}>
                  <td className="py-2 px-4 border-b font-semibold">
                    {project.title}
                  </td>
                  <td className="py-2 px-4 border-b">{project.description}</td>
                  <td className="py-2 px-4 border-b">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-cyan-100 text-cyan-700 px-2 py-1 rounded mr-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-600 hover:underline mr-2"
                      onClick={() => handleEditProject(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDeleteProject(project._id)}
                      disabled={deleteLoading && deleteId === project._id}
                    >
                      {deleteLoading && deleteId === project._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ProjectFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditProject(null);
        }}
        onSubmit={editProject ? handleUpdateProject : handleAddProject}
        initialData={editProject || undefined}
      />
      {modalLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center">
            {editProject ? "Updating project..." : "Adding project..."}
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

export default AdminProjects;
