import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const events = [
    {
      title: "AI Workshop Series",
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

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 glow-text">
            Events
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            Join us for workshops, competitions, and networking opportunities in the data science community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative h-64 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm overflow-hidden group-hover:border-cyan-400 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-orbitron text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-xs font-mono text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        Click to flip
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl border border-purple-500/30 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-15`} />
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-orbitron text-purple-400 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 text-sm font-mono">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;