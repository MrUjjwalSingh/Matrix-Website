import React, { useState, useEffect, useRef } from "react";

interface GalleryFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: {
    title: string;
    alt: string;
    src: string;
  };
}

const GalleryFormModal: React.FC<GalleryFormModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [alt, setAlt] = useState(initialData?.alt || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTitle(initialData?.title || "");
      setAlt(initialData?.alt || "");
      setImageFile(null);
      setError("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !alt || (!initialData && !imageFile)) {
      setError("All fields and image are required.");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("alt", alt);
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
          {initialData ? "Edit Image" : "Add Image"}
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
            <label className="block mb-1 font-medium">Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
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
            {initialData && initialData.src && !imageFile && (
              <img
                src={initialData.src}
                alt="Current"
                className="mt-2 w-32 h-32 object-cover rounded border"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
          >
            {initialData ? "Update Image" : "Add Image"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GalleryFormModal;
