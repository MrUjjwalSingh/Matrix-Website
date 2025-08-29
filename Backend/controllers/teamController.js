export const getTeamMembers = (req, res) => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "ML Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-green-400 to-cyan-500"
    },
    {
      name: "Sarah Rodriguez",
      role: "Data Viz Lead",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-cyan-400 to-purple-500"
    },
    {
      name: "Marcus Johnson",
      role: "AI Research Lead",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Zhang",
      role: "NLP Specialist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-pink-500 to-green-400"
    },
    {
      name: "David Kim",
      role: "Computer Vision Lead",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-green-400 to-purple-500"
    },
    {
      name: "Lisa Wang",
      role: "Data Engineering Lead",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      gradient: "from-cyan-500 to-pink-400"
    }
  ];

  res.json({ teamMembers });
};
