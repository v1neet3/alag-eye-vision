
import { useState, useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { LandingSection } from '@/components/LandingSection';
import { Navigation } from '@/components/Navigation';
import { VisionSection } from '@/components/VisionSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { CollectionsSection } from '@/components/CollectionsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [showMainSite, setShowMainSite] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleEnterVision = () => {
    setShowMainSite(true);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-deep-blue flex items-center justify-center">
        <div className="animate-pulse text-mystic-pink text-2xl font-syne">
          Loading consciousness...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-blue overflow-x-hidden">
      <CustomCursor />
      
      {!showMainSite ? (
        <LandingSection onEnter={handleEnterVision} />
      ) : (
        <>
          <Navigation />
          <div id="vision">
            <VisionSection />
          </div>
          <div id="philosophy">
            <PhilosophySection />
          </div>
          <div id="collections">
            <CollectionsSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
