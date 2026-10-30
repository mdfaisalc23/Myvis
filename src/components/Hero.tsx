import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Layers } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
  onSeePricing?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onStartProject, onSeePricing }) => {
  const handlePricingClick = () => {
    if (onSeePricing) {
      onSeePricing();
    } else {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between bg-[#17191C] text-white overflow-hidden">
      {/* Background Architectural Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architecture_geometry_1793366599926.jpg"
          alt="MYVIS STUDIO Contemporary Architectural and Structural Engineering Landmark"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured Scrim for WCAG AA compliance & editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191C] via-[#17191C]/65 to-[#17191C]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#17191C_90%)] opacity-80" />
        
        {/* Subtle architectural CAD overlay grid */}
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40" />
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="pt-28 md:pt-36" />

      {/* Hero Core Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-12 md:py-20 my-auto">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          
          {/* Studio Discipline Header */}
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase text-[#B8B8B3]">
            <span className="w-6 h-[1px] bg-[#A58B68]" />
            <span className="text-[#A58B68] font-semibold">MYVIS STUDIO</span>
            <span>·</span>
            <span>Architecture & Structural Engineering</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight text-[#F7F6F2] leading-[1.08] font-['Plus_Jakarta_Sans',sans-serif] text-balance">
            Architecture Meets Engineering.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-[#B8B8B3] max-w-2xl leading-relaxed font-['Manrope',sans-serif]">
            We design meaningful spaces and engineer structures that stand the test of time.
          </p>

          {/* Dual Discipline Tagline Banner */}
          <div className="py-2 text-sm text-[#F7F6F2]/80 font-mono tracking-wider flex items-center gap-4">
            <span className="text-[#A58B68]">"Designing Spaces. Engineering Strength."</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={onExploreProjects}
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#F7F6F2] text-[#17191C] font-semibold text-sm tracking-wide uppercase hover:bg-white transition-all shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={handlePricingClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#A58B68] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[#8e7655] transition-all hover:-translate-y-0.5 shadow-xl whitespace-nowrap"
            >
              <span>See Pricing</span>
            </button>

            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-transparent border border-[#B8B8B3]/60 text-[#F7F6F2] font-semibold text-sm tracking-wide uppercase hover:bg-white/10 hover:border-white transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Technical Metric Strip */}
      <div className="relative z-10 w-full border-t border-[#30343A]/80 bg-[#17191C]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {BRAND_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-[#30343A]/70 pl-4 md:pl-6 first:border-l-0 md:first:border-l">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F6F2] tracking-tight font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-[#B8B8B3] uppercase tracking-wider mt-1 font-['Manrope',sans-serif]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
