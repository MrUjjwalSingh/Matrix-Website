import React from 'react';

interface FooterProps {
  onJoinClubClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onJoinClubClick }) => {
  return (
    <footer className="bg-black border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 glow-text">
              THE MATRIX
            </h3>
            <p className="text-gray-400 font-mono mt-2">
              Data Science Club
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Home
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Projects
            </a>
            <a href="#events" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Events
            </a>
            <a href="#team" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Team
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Gallery
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300">
              Contact
            </a>
          </div>
          
          <div className="mb-8">
            <button
              onClick={onJoinClubClick}
              className="group relative inline-flex items-center px-6 py-3 text-base font-mono font-medium text-purple-400 border-2 border-purple-400 rounded-lg hover:text-black hover:bg-purple-400 transition-all duration-300 glow-border"
            >
              Join Our Club
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 font-mono text-sm">
              © 2024 THE MATRIX Data Science Club. All rights reserved.
            </p>
            <p className="text-gray-600 font-mono text-xs mt-2">
              Exploring the matrix of data, one algorithm at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;