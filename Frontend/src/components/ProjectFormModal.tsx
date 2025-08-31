import React, { useState, useEffect } from "react";

interface ProjectFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: {
    title: string;
    description: string;
    tags: string[];
    github: string;
  };
}

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "");
  const [github, setGithub] = useState(initialData?.github || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setTitle(initialData?.title || "");
      setDescription(initialData?.description || "");
      setTags(initialData?.tags?.join(", ") || "");
      setGithub(initialData?.github || "");
      setError("");
    }
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !tags || !github) {
      setError("All fields are required.");
      return;
    }
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    onSubmit({ title, description, tags: tagsArray, github });
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
          {initialData ? "Edit Project" : "Add Project"}
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
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g., React, TypeScript, Tailwind"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">GitHub URL</label>
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="https://github.com/username/repo"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded font-semibold hover:bg-cyan-700 transition"
          >
            {initialData ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormModal;
