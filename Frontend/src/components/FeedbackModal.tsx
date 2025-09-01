import React, { useEffect } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-cyan-900/90 via-black/90 to-purple-900/90 border border-cyan-400/40 rounded-2xl shadow-2xl shadow-cyan-400/30 animate-glow-modal">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors duration-300 z-10 text-2xl font-bold"
        >
          ×
        </button>
        <div className="p-10 flex flex-col items-center">
          <div className="mb-4">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="#22d3ee"
                strokeWidth="3"
                fill="#0f172a"
              />
              <path
                d="M18 32L27 41L43 23"
                stroke="#a78bfa"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 glow-text">
            Thank you for your feedback!
          </h2>
          <p className="text-gray-300 font-mono text-center mt-2">
            We appreciate your input and will use it to improve our club and
            events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
