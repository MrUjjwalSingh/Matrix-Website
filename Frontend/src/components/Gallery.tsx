import React, { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }
        const data = await response.json();
        setGalleryImages(data.data); // Changed from data.galleryImages to data.data
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-400 mb-6 glow-text">
              Gallery
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
              Loading gallery images...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-400 mb-6 glow-text">
              Gallery
            </h2>
            <p className="text-xl text-red-400 font-mono max-w-3xl mx-auto">
              Error loading gallery images: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-400 mb-6 glow-text">
            Gallery
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            Capturing moments from our data science journey and community events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-bold font-orbitron text-white mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Neon glow effect */}
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-border-strong" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
