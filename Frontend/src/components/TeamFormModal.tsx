import React, { useState, useEffect, useRef } from "react";

interface TeamFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: {
    name: string;
    role: string;
    image: string;
  };
}

const TeamFormModal: React.FC<TeamFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [role, setRole] = useState(initialData?.role || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setName(initialData?.name || "");
      setRole(initialData?.role || "");
      setImageFile(null);
      setError("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || (!initialData && !imageFile)) {
      setError("All fields and image are required.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    if (imageFile) formData.append("image", imageFile);
    onSubmit(formData);
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
          {initialData ? "Edit Team Member" : "Add Team Member"}
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Image {initialData && "(leave blank to keep current)"}
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full"
            />
            {initialData && initialData.image && !imageFile && (
              <img
                src={initialData.image}
                alt="Current"
                className="mt-2 w-24 h-24 object-cover rounded-full border"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded font-semibold hover:bg-cyan-700 transition"
          >
            {initialData ? "Update Member" : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamFormModal;
