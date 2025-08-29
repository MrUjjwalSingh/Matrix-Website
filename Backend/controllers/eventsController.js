export const getEvents = (req, res) => {
  const events = [
    {
      title: "AI s",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Data Lab, Room 301",
      description: "Deep dive into neural networks and practical implementation using PyTorch. Perfect for beginners and intermediate learners.",
      color: "from-green-400 to-cyan-500"
    },
    {
      title: "Data Visualization Bootcamp",
      date: "March 22, 2024",
      time: "1:00 PM - 4:00 PM",
      venue: "Computer Lab B",
      description: "Master the art of data storytelling with D3.js, Plotly, and advanced visualization techniques.",
      color: "from-cyan-400 to-purple-500"
    },
    {
      title: "ML Competition Finals",
      date: "April 5, 2024",
      time: "10:00 AM - 6:00 PM",
      venue: "Main Auditorium",
      description: "Present your machine learning projects and compete for the grand prize. Open to all skill levels.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Industry Expert Talk",
      date: "April 12, 2024",
      time: "3:00 PM - 5:00 PM",
      venue: "Lecture Hall 1",
      description: "Learn from industry professionals about real-world applications of data science in tech companies.",
      color: "from-pink-500 to-green-400"
    },
    {
      title: "Hackathon Weekend",
      date: "April 19-21, 2024",
      time: "48 hours",
      venue: "Innovation Hub",
      description: "Build innovative data science solutions in teams. Food, mentorship, and prizes provided!",
      color: "from-green-400 to-purple-500"
    },
    {
      title: "Research Paper Workshop",
      date: "May 3, 2024",
      time: "2:30 PM - 5:30 PM",
      venue: "Research Center",
      description: "Learn how to write and publish your first data science research paper with guidance from faculty.",
      color: "from-cyan-500 to-pink-400"
    }
  ];

  res.json({ events });
};
