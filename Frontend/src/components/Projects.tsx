import React, { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { gradientClassOrStyle } from "../styles/gradientPicker";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  _id?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data.data); // Changed from data.projects to data.data
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-6 glow-text">
              Projects
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-6 glow-text">
              Projects
            </h2>
            <p className="text-xl text-red-400 font-mono max-w-3xl mx-auto">
              Error loading projects: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-6 glow-text">
            Projects
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            Exploring the frontiers of data science, machine learning, and
            artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const bg = gradientClassOrStyle(project._id || project.title);
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:scale-105"
              >
                <div
                  className={
                    `absolute inset-0 rounded-xl` +
                    (bg.className ? ` ${bg.className}` : "") +
                    " opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  }
                  style={bg.style}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-mono text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-purple-400 border border-purple-400/50 rounded-lg hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
