const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('../models/Project');
const Event = require('../models/Event');
const Team = require('../models/Team');
const Gallery = require('../models/Gallery');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected for seeding');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Project.deleteMany({});
        await Event.deleteMany({});
        await Team.deleteMany({});
        await Gallery.deleteMany({});

        // Seed Projects
        const projects = [
            {
                title: "Neural Market Predictor",
                description: "LSTM-based stock market prediction using sentiment analysis and technical indicators.",
                tags: ["Deep Learning", "LSTM", "Finance", "Python"],
                github: "https://github.com"
            },
            {
                title: "AI Health Diagnostics",
                description: "Computer vision model for medical image analysis and disease detection.",
                tags: ["Computer Vision", "CNN", "Healthcare", "TensorFlow"],
                github: "https://github.com"
            },
            {
                title: "Smart Campus Analytics",
                description: "Real-time campus data analysis dashboard with predictive modeling.",
                tags: ["Data Viz", "Dashboard", "IoT", "React"],
                github: "https://github.com"
            },
            {
                title: "NLP Sentiment Engine",
                description: "Advanced sentiment analysis for social media monitoring and brand insights.",
                tags: ["NLP", "BERT", "Sentiment", "API"],
                github: "https://github.com"
            },
            {
                title: "Climate Data Visualizer",
                description: "Interactive visualization platform for climate change data and trends.",
                tags: ["Data Viz", "Climate", "D3.js", "Python"],
                github: "https://github.com"
            },
            {
                title: "Autonomous Navigation AI",
                description: "Reinforcement learning model for autonomous robot navigation in complex environments.",
                tags: ["RL", "Robotics", "AI", "Simulation"],
                github: "https://github.com"
            },
            {
                title: "Medical Chatbot",
                description: "Conversational AI for patient triage and health advice.",
                tags: ["Chatbot", "Healthcare", "NLP", "Node.js"],
                github: "https://github.com"
            },
            {
                title: "Retail Demand Forecaster",
                description: "Time series forecasting for retail inventory optimization.",
                tags: ["Forecasting", "Retail", "Time Series", "Pandas"],
                github: "https://github.com"
            }
        ];

        // Seed Events
        const events = [
            {
                title: "AI Summit",
                date: "March 15, 2024",
                time: "2:00 PM - 5:00 PM",
                venue: "Data Lab, Room 301",
                description: "Deep dive into neural networks and practical implementation using PyTorch. Perfect for beginners and intermediate learners."
            },
            {
                title: "Data Visualization Bootcamp",
                date: "March 22, 2024",
                time: "1:00 PM - 4:00 PM",
                venue: "Computer Lab B",
                description: "Master the art of data storytelling with D3.js, Plotly, and advanced visualization techniques."
            },
            {
                title: "ML Competition Finals",
                date: "April 5, 2024",
                time: "10:00 AM - 6:00 PM",
                venue: "Main Auditorium",
                description: "Present your machine learning projects and compete for the grand prize. Open to all skill levels."
            },
            {
                title: "Industry Expert Talk",
                date: "April 12, 2024",
                time: "3:00 PM - 5:00 PM",
                venue: "Lecture Hall 1",
                description: "Learn from industry professionals about real-world applications of data science in tech companies."
            },
            {
                title: "Hackathon Weekend",
                date: "April 19-21, 2024",
                time: "48 hours",
                venue: "Innovation Hub",
                description: "Build innovative data science solutions in teams. Food, mentorship, and prizes provided!"
            },
            {
                title: "Research Paper Workshop",
                date: "May 3, 2024",
                time: "2:30 PM - 5:30 PM",
                venue: "Research Center",
                description: "Learn how to write and publish your first data science research paper with guidance from faculty."
            },
            {
                title: "Data Ethics Panel",
                date: "May 10, 2024",
                time: "4:00 PM - 6:00 PM",
                venue: "Auditorium B",
                description: "Panel discussion on ethics in AI and data science."
            },
            {
                title: "Startup Pitch Night",
                date: "May 17, 2024",
                time: "6:00 PM - 9:00 PM",
                venue: "Startup Hub",
                description: "Pitch your data-driven startup ideas to investors."
            }
        ];

        // Seed Team
        const team = [
            {
                name: "Dr. Sarah Chen",
                role: "Lead Data Scientist",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Alex Rodriguez",
                role: "ML Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Priya Patel",
                role: "Research Analyst",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Michael Lee",
                role: "Data Engineer",
                image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Emily Davis",
                role: "Statistician",
                image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Ravi Kumar",
                role: "AI Product Manager",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Sophia Turner",
                role: "UX Researcher",
                image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop&crop=face"
            },
            {
                name: "Carlos Mendez",
                role: "Cloud Architect",
                image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face"
            }
        ];

        // Seed Gallery
        const gallery = [
            {
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                alt: "Data Science Workshop",
                title: "Workshop Session"
            },
            {
                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
                alt: "Team Collaboration",
                title: "Team Meeting"
            },
            {
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                alt: "Hackathon Event",
                title: "Hackathon 2024"
            },
            {
                src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?w=600&h=400&fit=crop",
                alt: "Panel Discussion",
                title: "AI Ethics Panel"
            },
            {
                src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
                alt: "Networking Night",
                title: "Startup Pitch Night"
            },
            {
                src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=400&fit=crop",
                alt: "Research Workshop",
                title: "Research Paper Workshop"
            },
            {
                src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop",
                alt: "Bootcamp",
                title: "Data Viz Bootcamp"
            },
            {
                src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
                alt: "Team Building",
                title: "Team Building Retreat"
            }
        ];

        // Insert data
        await Project.insertMany(projects);
        await Event.insertMany(events);
        await Team.insertMany(team);
        await Gallery.insertMany(gallery);

        console.log('✅ Data seeded successfully!');
        console.log(`📊 Projects: ${projects.length}`);
        console.log(`📅 Events: ${events.length}`);
        console.log(`👥 Team: ${team.length}`);
        console.log(`🖼️ Gallery: ${gallery.length}`);

        process.exit(0);
    } catch (err) {
        console.error('❌ Seeding error:', err.message);
        process.exit(1);
    }
};

seedData();
