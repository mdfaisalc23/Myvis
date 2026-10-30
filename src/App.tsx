/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PricingSection } from './components/PricingSection';
import { Projects } from './components/Projects';
import { DesignProcess } from './components/DesignProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [contactPrefill, setContactPrefill] = useState<{
    projectType?: string;
    area?: string;
    scope?: string;
    estimatedBudget?: string;
    details?: string;
    serviceName?: string;
  } | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setContactPrefill({
      serviceName,
      details: `Client interested in: ${serviceName}`,
    });
    scrollToContact();
  };

  const handleInquireProject = (projectName: string) => {
    setContactPrefill({
      details: `Inquiring for a new build inspired by: ${projectName}`,
    });
    scrollToContact();
  };

  const handlePackageQuoteTransfer = (quoteDetails: {
    projectType: string;
    area: string;
    scope: string;
    estimatedBudget: string;
    details: string;
  }) => {
    setContactPrefill(quoteDetails);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17191C] font-['Manrope',sans-serif] selection:bg-[#A58B68] selection:text-white flex flex-col relative">
      {/* 1. Header & Navigation (Top Bar Contract Compliant with 'See Pricing' at top) */}
      <Navbar onStartProjectClick={scrollToContact} />

      {/* 2. Full-Screen Architectural Hero Section with See Pricing CTA */}
      <main className="flex-1">
        <Hero
          onExploreProjects={scrollToProjects}
          onStartProject={scrollToContact}
          onSeePricing={scrollToPricing}
        />

        {/* 3. About Myvis Studio: Creativity Meets Structural Intelligence */}
        <About />

        {/* 4. Our Services (Architectural, Structural, Consultancy, Specialized) */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 5. Official Rate Card & Live Cost Calculator (15/sft, 20/sft, 15/sft, 5000/visit, 10/sft) */}
        <PricingSection onSelectPackageForForm={handlePackageQuoteTransfer} />

        {/* 6. Featured Projects (Masonry Grid with Structural CAD Dossier Modal) */}
        <Projects onInquireProject={handleInquireProject} />

        {/* 7. Visual 6-Step Design Process */}
        <DesignProcess />

        {/* 8. Why Choose Myvis Studio (7 Core Advantage Pillars) */}
        <WhyChooseUs />

        {/* 9. Engineering Philosophy (Dark Aesthetic & Scientific Principles) */}
        <EngineeringPhilosophy />

        {/* 10. Contact & Consultation Section with WhatsApp & Google Maps */}
        <Contact prefilledData={contactPrefill} />
      </main>

      {/* 11. Quiet Architectural Studio Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button Fixed to Side of Screen */}
      <FloatingWhatsApp />
    </div>
  );
}
