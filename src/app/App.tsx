import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingShapes } from './components/FloatingShapes';
import { Navigation } from './components/Navigation';
import { GridBackground } from './components/GridBackground';

export default function App() {
  return (
    <div className="relative" style={{ backgroundColor: '#0B0F19' }}>
      {/* Grid background */}
      <GridBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Global floating shapes background */}
      <FloatingShapes />
      
      {/* All sections */}
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0B0F19;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #7F5AF0 0%, #00F5FF 100%);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00F5FF 0%, #7F5AF0 100%);
        }
      `}</style>
    </div>
  );
}