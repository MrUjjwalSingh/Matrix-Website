import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Data Science Workshop",
      title: "AI Workshop Series"
    },
    {
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Team Collaboration",
      title: "Team Building Event"
    },
    {
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Machine Learning Competition",
      title: "ML Competition Finals"
    },
    {
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Industry Expert Talk",
      title: "Guest Speaker Session"
    },
    {
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Hackathon Weekend",
      title: "48-Hour Hackathon"
    },
    {
      src: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Data Visualization Workshop",
      title: "Visualization Bootcamp"
    },
    {
      src: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Research Presentation",
      title: "Research Showcase"
    },
    {
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Club Meeting",
      title: "Weekly Club Meeting"
    }
  ];

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