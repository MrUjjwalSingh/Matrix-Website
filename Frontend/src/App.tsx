import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JoinClubModal from "./components/JoinClubModal";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [backendMessage, setBackendMessage] = useState<string>("");
  const [isJoinClubModalOpen, setIsJoinClubModalOpen] = useState(false);

  useEffect(() => {
    // Fetch message from backend
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => console.error("Error fetching backend:", err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "events",
        "team",
        "gallery",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinClubClick = () => {
    setIsJoinClubModalOpen(true);
  };

  const handleCloseJoinClubModal = () => {
    setIsJoinClubModalOpen(false);
  };

  const handleMeetMembersClick = () => {
    scrollToSection("team");
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Show backend message at top */}
      {backendMessage && (
        <div className="bg-green-600 text-center py-2 text-lg font-semibold">
          {backendMessage}
        </div>
      )}

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero
        onExploreClick={() => scrollToSection("projects")}
        onJoinClubClick={handleJoinClubClick}
        onMeetMembersClick={handleMeetMembersClick}
      />
      <Events />
      <Projects />
      <Team />
      <Gallery />
      <Contact />
      <Footer onJoinClubClick={handleJoinClubClick} />

      {/* Join Club Modal */}
      <JoinClubModal
        isOpen={isJoinClubModalOpen}
        onClose={handleCloseJoinClubModal}
      />
    </div>
  );
}

export default App;
