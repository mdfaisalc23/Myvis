import React from 'react';
import { BRAND_INFO } from '../data/content';
import { ArrowUp, MapPin, Mail, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121416] text-[#F7F6F2] border-t border-[#30343A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#30343A]/60">
          
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-[0.2em] font-['Plus_Jakarta_Sans',sans-serif]">
              <span className="w-2.5 h-2.5 bg-[#A58B68]" />
              <span>MYVIS STUDIO</span>
            </div>

            <p className="text-xs font-mono text-[#A58B68] tracking-wider uppercase">
              "Designing Spaces. Engineering Strength."
            </p>

            <p className="text-xs sm:text-sm text-[#B8B8B3] font-light leading-relaxed max-w-sm">
              A multidisciplinary architecture and structural engineering studio combining creative architectural design with scientific structural engineering to create functional, sustainable, safe and aesthetically beautiful buildings.
            </p>

            <div className="text-xs font-mono text-[#B8B8B3]/80 space-y-1">
              <div>Est. {BRAND_INFO.established} · Licenced Consulting Practice</div>
              <div>IBC, Eurocode & ACI Code Compliant Practice</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
              Studio Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-[#B8B8B3]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Myvis</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">6-Step Process</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">Engineering Philosophy</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Brief</a>
              </li>
            </ul>
          </div>

          {/* Disciplines */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-xs text-[#B8B8B3]">
              <li>Architectural Design</li>
              <li>Structural Engineering</li>
              <li>Seismic Analysis</li>
              <li>RCC & Steel Frames</li>
              <li>Foundation Engineering</li>
              <li>Structural Auditing</li>
              <li>BOQ & Documentation</li>
            </ul>
          </div>

          {/* Coordinates & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
              Headquarters
            </div>
            <div className="space-y-3 text-xs text-[#B8B8B3] font-mono">
              <div>
                <span className="text-white block font-sans text-sm">{BRAND_INFO.headquarters}</span>
                <span className="text-[#A58B68] text-[11px]">{BRAND_INFO.coordinates}</span>
              </div>
              <div>
                <a href={`mailto:${BRAND_INFO.email}`} className="text-[#B8B8B3] hover:text-white block">
                  {BRAND_INFO.email}
                </a>
                <a href={`tel:${BRAND_INFO.phone}`} className="text-[#B8B8B3] hover:text-white block mt-0.5">
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8B8B3]">
          <div>
            © {new Date().getFullYear()} MYVIS STUDIO. All architectural concepts & structural calculations reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy & Code Ethics</span>
            <span className="hover:text-white cursor-pointer">Technical Terms</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A58B68] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
