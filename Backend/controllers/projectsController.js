export const getProjects = (req, res) => {
  const projects = [
    {
      title: "Neural Market Predictor",
      description: "LSTM-based stock market prediction using sentiment analysis and technical indicators.",
      tags: ["Deep Learning", "LSTM", "Finance", "Python"],
      github: "https://github.com",
      color: "from-green-400 to-cyan-500"
    },
    {
      title: "AI Health Diagnostics",
      description: "Computer vision model for medical image analysis and disease detection.",
      tags: ["Computer Vision", "CNN", "Healthcare", "TensorFlow"],
      github: "https://github.com",
      color: "from-cyan-400 to-purple-500"
    },
    {
      title: "Smart Campus Analytics",
      description: "Real-time campus data analysis dashboard with predictive modeling.",
      tags: ["Data Viz", "Dashboard", "IoT", "React"],
      github: "https://github.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "NLP Sentiment Engine",
      description: "Advanced sentiment analysis for social media monitoring and brand insights.",
      tags: ["NLP", "BERT", "Sentiment", "API"],
      github: "https://github.com",
      color: "from-pink-500 to-green-400"
    },
    {
      title: "Climate Data Visualizer",
      description: "Interactive visualization platform for climate change data and trends.",
      tags: ["Data Viz", "Climate", "D3.js", "Python"],
      github: "https://github.com",
      color: "from-green-400 to-purple-500"
    },
    {
      title: "Autonomous Navigation AI",
      description: "Reinforcement learning model for autonomous robot navigation in complex environments.",
      tags: ["RL", "Robotics", "AI", "Simulation"],
      github: "https://github.com",
      color: "from-cyan-500 to-pink-400"
    }
  ];

  res.json({ projects });
};
