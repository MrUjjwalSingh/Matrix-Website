export const getGalleryImages = (req, res) => {
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

  res.json({ galleryImages });
};
