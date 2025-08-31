import React from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onJoinClubClick: () => void;
  onMeetMembersClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onJoinClubClick,
  onMeetMembersClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="particle-field">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={
                  {
                    "--delay": `${Math.random() * 5}s`,
                    "--duration": `${3 + Math.random() * 4}s`,
                    "--x": `${Math.random() * 100}%`,
                    "--y": `${Math.random() * 100}%`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* Data Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="url(#gridGradient)"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient
                id="gridGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff41" />
                <stop offset="50%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 glow-text-strong">
            THE MATRIX
          </h1>
          <p className="text-2xl md:text-3xl font-mono text-cyan-400 mb-4 glow-text">
            Data Science Club
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-mono">
            Dive deep into the matrix of data, machine learning, and artificial
            intelligence. Where algorithms meet innovation and data tells
            stories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-mono font-medium text-cyan-400 border-2 border-cyan-400 rounded-lg hover:text-black hover:bg-cyan-400 transition-all duration-300 glow-border double-border"
          >
            Explore Projects
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </button>

          <button
            onClick={onMeetMembersClick}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-mono font-medium text-green-400 border-2 border-green-400 rounded-lg hover:text-black hover:bg-green-400 transition-all duration-300 glow-border double-border"
          >
            Meet Members
          </button>

          <button
            onClick={onJoinClubClick}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-mono font-medium text-purple-400 border-2 border-purple-400 rounded-lg hover:text-black hover:bg-purple-400 transition-all duration-300 glow-border double-border"
          >
            Join Our Club
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-cyan-400 glow-text" />
      </div>
    </section>
  );
};

export default Hero;
