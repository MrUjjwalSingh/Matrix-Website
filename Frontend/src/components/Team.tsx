import React, { useEffect, useRef, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  gradient: string;
}

const Team = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/team');
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        setTeamMembers(data.teamMembers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Duplicate members for infinite scroll effect
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    const scrollSpeed = 2.5;

    const scroll = () => {
      if (!isScrolling.current && carousel) {
        carousel.scrollLeft += scrollSpeed;
        
        // Reset scroll position for infinite effect
        if (carousel.scrollLeft >= carousel.scrollWidth / 3) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      isScrolling.current = true;
    };

    const handleMouseLeave = () => {
      isScrolling.current = false;
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [teamMembers]);



  if (loading) {
    return (
      <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 glow-text">
              Team
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
              Loading team members...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 glow-text">
              Team
            </h2>
            <p className="text-xl text-red-400 font-mono max-w-3xl mx-auto">
              Error loading team members: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background network */}
      <div className="absolute inset-0 opacity-10">
        <div className="network-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="network-node"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 5}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 glow-text">
            Team
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            Meet the domain experts leading our data science initiatives
          </p>
        </div>

        <div className="relative">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-80 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-50 blur-md`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-purple-400 font-mono text-sm bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/30 inline-block">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;