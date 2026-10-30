import React, { useState } from 'react';
import { SERVICES_DATA, ServiceCategory } from '../data/content';
import { DraftingCompass, Building2, Calculator, Wrench, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('architectural-design');
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  const activeCategory = SERVICES_DATA.find((c) => c.id === activeCategoryId) || SERVICES_DATA[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'architectural-design':
        return <DraftingCompass className="w-5 h-5" />;
      case 'structural-engineering':
        return <Building2 className="w-5 h-5" />;
      case 'engineering-consultancy':
        return <Calculator className="w-5 h-5" />;
      case 'specialized-structural':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#17191C] text-[#F7F6F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>02. Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
            Our Multidisciplinary Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8B8B3] font-light max-w-2xl">
            From preliminary massing concepts and environmental daylighting to non-linear finite element structural analysis and site quality assurance.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#30343A] scrollbar-none">
          {SERVICES_DATA.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setExpandedSubService(null);
                }}
                className={`flex items-center gap-3 px-5 py-3 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#A58B68] text-white shadow-lg'
                    : 'bg-[#30343A]/50 text-[#B8B8B3] hover:text-white hover:bg-[#30343A]'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Marquee Panel */}
        <div className="bg-[#17191C] border border-[#30343A] p-6 sm:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A58B68]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left summary */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono text-[#A58B68] uppercase tracking-widest">
                {activeCategory.categoryName}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif]">
                {activeCategory.tagline}
              </h3>
              <p className="text-sm sm:text-base text-[#B8B8B3] leading-relaxed max-w-3xl font-light">
                {activeCategory.description}
              </p>
            </div>

            {/* Right Tools & Deliverables */}
            <div className="lg:col-span-4 bg-[#30343A]/40 p-5 border border-[#30343A] space-y-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#A58B68] mb-2">
                  Engineered With:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#F7F6F2]">
                  {activeCategory.softwareTools.map((tool, i) => (
                    <span key={i} className="text-[11px] font-mono text-[#B8B8B3] bg-[#17191C] px-2.5 py-1 border border-[#30343A]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#A58B68] mb-2">
                  Key Deliverables:
                </div>
                <ul className="space-y-1.5 text-xs text-[#B8B8B3]">
                  {activeCategory.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#A58B68] rounded-none shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.subServices.map((sub, index) => {
            const isExpanded = expandedSubService === sub.title;
            return (
              <div
                key={index}
                className="group bg-[#17191C] border border-[#30343A] p-6 hover:border-[#A58B68]/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Technical index indicator */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#B8B8B3] mb-4 pb-2 border-b border-[#30343A]/60">
                    <span className="text-[#A58B68]">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[11px] tracking-wider uppercase">Scope Spec</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#A58B68] transition-colors">
                    {sub.title}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#B8B8B3] leading-relaxed font-light">
                    {sub.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30343A]/60 flex items-center justify-between">
                  <button
                    onClick={() => handleInquire(`${activeCategory.shortTitle}: ${sub.title}`)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#A58B68] hover:text-[#d3b48b] transition-colors uppercase tracking-wider"
                  >
                    <span>Request Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Service Checklist Ribbon */}
        <div className="mt-16 p-6 sm:p-8 bg-[#30343A]/30 border border-[#30343A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-[#F7F6F2]">
              Need a Custom Multidisciplinary Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#B8B8B3]">
              We package Architectural Concept, Structural Calculation Books, and Site Supervision into a unified contract.
            </p>
          </div>
          <button
            onClick={() => handleInquire("Full Multidisciplinary Package")}
            className="px-6 py-3 bg-[#A58B68] hover:bg-[#8e7655] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all"
          >
            Inquire for Custom Package
          </button>
        </div>

      </div>
    </section>
  );
};
