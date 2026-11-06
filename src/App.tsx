import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CustomerStrip } from './components/CustomerStrip';
import { IndustryImpact } from './components/IndustryImpact';
import { ProblemSection } from './components/ProblemSection';
import { CleaningMechanism } from './components/CleaningMechanism';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ProductMatrix } from './components/ProductMatrix';
import { EvidenceSection } from './components/EvidenceSection';
import { SafetyProtocol } from './components/SafetyProtocol';
import { SiteDemoSection } from './components/SiteDemoSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SiteDemoModal } from './components/SiteDemoModal';
import { DocumentRequestModal } from './components/DocumentRequestModal';
import { VideoModal } from './components/VideoModal';

export const App: React.FC = () => {
  // Modal states
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalVariant, setDemoModalVariant] = useState<string | undefined>(undefined);
  const [docsModalOpen, setDocsModalOpen] = useState(false);
  const [selectedDocCode, setSelectedDocCode] = useState<string | undefined>(undefined);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Trigger handlers
  const handleOpenDemo = (variant?: string) => {
    setDemoModalVariant(variant);
    setDemoModalOpen(true);
  };

  const handleOpenDocs = (docCode?: string) => {
    setSelectedDocCode(docCode);
    setDocsModalOpen(true);
  };

  const handleOpenVideo = () => {
    setVideoModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 88;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#425466] flex flex-col antialiased selection:bg-[#EAF6F5] selection:text-[#007C83]">
      
      {/* 1. Header (Sticky, 88px desktop, 72px mobile) */}
      <Header
        onRequestDemo={() => handleOpenDemo()}
      />

      {/* Main Content Area */}
      <main id="top" className="flex-1">
        
        {/* 2. Hero Section (H1: Clean critical systems. / Keep operations moving.) */}
        <Hero
          onRequestDemo={() => handleOpenDemo()}
          onWatchDemo={handleOpenVideo}
          onRequestDocs={() => handleOpenDocs()}
        />

        {/* 3. Customer Reference Strip (CIPLA, TATA MOTORS, RDSO, MAHAGENCO) */}
        <CustomerStrip />

        {/* 4. Sourced industry context: downtime and electrical safety */}
        <IndustryImpact />

        {/* 5. Problem Statement: The Overlooked Contamination Problem */}
        <ProblemSection
          onLearnSolution={() => scrollToSection('technology')}
        />

        {/* 5. Creative Concept & Cleaning Mechanism: "Clean the contamination. Keep the continuity." */}
        <CleaningMechanism
          onRequestDemo={() => handleOpenDemo()}
          onRequestDocs={() => handleOpenDocs()}
        />

        {/* 6. Secondary Conversion: Interactive In-Situ Simulator & Video Trigger */}
        <InteractiveDemo
          onRequestDemo={() => handleOpenDemo()}
          onWatchVideoModal={handleOpenVideo}
        />

        {/* 7. Product Range & Engineering Matrix (InstaClean 100, 200, 50 with strict claim boundaries) */}
        <ProductMatrix
          onRequestDemo={() => handleOpenDemo()}
          onRequestDocs={(variant) => handleOpenDocs(variant ? `PDS-IC${variant}-2024` : undefined)}
        />

        {/* 8. Technical Evidence & Documentary Proof ("Technical evidence behind the technology.") */}
        <EvidenceSection
          onRequestDocs={(code) => handleOpenDocs(code)}
        />

        {/* 9. Safety Standards & Field Protocol */}
        <SafetyProtocol
          onRequestDemo={() => handleOpenDemo()}
        />

        {/* 10. Primary Conversion Section: Request a Site Demo (In-depth B2B Form & Hotline) */}
        <SiteDemoSection />

        {/* 11. Final Action Panel (Contained electrical navy panel with continuity line) */}
        <FinalCTA
          onRequestDemo={() => handleOpenDemo()}
          onRequestDocs={() => handleOpenDocs()}
        />

      </main>

      {/* 12. Footer with full engineering and company compliance details */}
      <Footer />

      {/* Modals for Conversion Flows */}
      <SiteDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultVariant={demoModalVariant}
      />

      <DocumentRequestModal
        isOpen={docsModalOpen}
        onClose={() => setDocsModalOpen(false)}
        selectedDocCode={selectedDocCode}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onRequestDemo={() => handleOpenDemo()}
      />

    </div>
  );
};

export default App;
