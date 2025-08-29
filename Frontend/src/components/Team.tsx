import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

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

  // Duplicate members for infinite scroll effect
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    const scrollSpeed = 0.5;

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
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-cyan-400/20 border border-cyan-400 text-cyan-400 p-3 rounded-full hover:bg-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-cyan-400/20 border border-cyan-400 text-cyan-400 p-3 rounded-full hover:bg-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

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