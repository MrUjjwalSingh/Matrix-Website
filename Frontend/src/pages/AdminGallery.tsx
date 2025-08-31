import React, { useEffect, useState } from "react";
import adminApi from "../adminApi";
import GalleryFormModal from "../components/GalleryFormModal";

interface GalleryImage {
  _id: string;
  title: string;
  alt: string;
  src: string;
}

const AdminGallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [editImage, setEditImage] = useState<GalleryImage | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.get("/gallery");
      setImages(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = async (formData: FormData) => {
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setModalOpen(false);
      fetchImages();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to add image");
    } finally {
      setModalLoading(false);
    }
  };

  const handleEditImage = (image: GalleryImage) => {
    setEditImage(image);
    setModalOpen(true);
  };

  const handleUpdateImage = async (formData: FormData) => {
    if (!editImage) return;
    setModalLoading(true);
    setModalError("");
    try {
      await adminApi.put(`/gallery/${editImage._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setModalOpen(false);
      setEditImage(null);
      fetchImages();
    } catch (err: any) {
      setModalError(err.response?.data?.message || "Failed to update image");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    setDeleteLoading(true);
    setDeleteError("");
    setDeleteId(id);
    try {
      await adminApi.delete(`/gallery/${id}`);
      fetchImages();
    } catch (err: any) {
      setDeleteError(err.response?.data?.message || "Failed to delete image");
    } finally {
      setDeleteLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition"
          onClick={() => {
            setEditImage(null);
            setModalOpen(true);
          }}
        >
          + Add Image
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : Array.isArray(images) && images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image._id}
              className="bg-white rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <div className="font-bold mb-1">{image.title}</div>
              <div className="text-gray-500 text-sm mb-2">{image.alt}</div>
              <div className="flex gap-2">
                <button
                  className="text-green-600 hover:underline"
                  onClick={() => handleEditImage(image)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDeleteImage(image._id)}
                  disabled={deleteLoading && deleteId === image._id}
                >
                  {deleteLoading && deleteId === image._id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">No images found.</div>
      )}
      <GalleryFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditImage(null);
        }}
        onSubmit={editImage ? handleUpdateImage : handleAddImage}
        initialData={editImage || undefined}
      />
      {modalLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center">
            {editImage ? "Updating image..." : "Adding image..."}
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

export default AdminGallery;
