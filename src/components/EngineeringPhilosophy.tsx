import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/content';
import { Compass, Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#121416] text-[#F7F6F2] relative border-y border-[#30343A] overflow-hidden">
      {/* Blueprint grid on dark */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68]">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>05. Our Guiding Manifesto</span>
            <span className="w-8 h-[1px] bg-[#A58B68]" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.12] text-balance">
            "Good Architecture Inspires. Good Engineering Makes It Possible."
          </h2>

          <p className="text-base sm:text-xl text-[#B8B8B3] font-light max-w-3xl mx-auto leading-relaxed">
            Every structure tells a story of creativity, mathematics, materials and engineering intelligence. Our philosophy is to bring these elements together through thoughtful design and precise engineering.
          </p>
        </div>

        {/* 4 Governing Structural Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <div
              key={index}
              className="bg-[#17191C] border border-[#30343A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#A58B68] transition-colors"
            >
              <div>
                {/* Equation / Formula badge */}
                <div className="inline-block px-3 py-1 bg-[#30343A]/50 border border-[#30343A] text-xs font-mono text-[#A58B68] mb-6">
                  {principle.equation}
                </div>

                <h3 className="text-lg font-bold text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] mb-3">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8B8B3] leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#30343A]/60 flex items-center justify-between text-[11px] font-mono text-[#B8B8B3]">
                <span>PRINCIPLE 0{index + 1}</span>
                <span className="text-[#A58B68]">VALIDATED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Cadence Callout Banner */}
        <div className="bg-[#17191C] border border-[#30343A] p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="text-xs font-mono text-[#A58B68] uppercase tracking-widest">
              The Myvis Integration Standard
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif]">
              Zero Compromise Between Form & Safety
            </h4>
            <p className="text-xs sm:text-sm text-[#B8B8B3] font-light leading-relaxed">
              When architects and structural engineers think together from concept inception, cantilevers soar further, columns thin out, and structural members celebrate the building's identity rather than hiding behind dropped ceilings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-center sm:text-right px-4">
              <span className="text-3xl font-bold font-mono text-[#F7F6F2]">0.00%</span>
              <span className="block text-[11px] uppercase tracking-wider text-[#B8B8B3]">Structural Failures</span>
            </div>
            <div className="w-[1px] h-12 bg-[#30343A] hidden sm:block" />
            <div className="text-center sm:text-left px-4">
              <span className="text-3xl font-bold font-mono text-[#A58B68]">100%</span>
              <span className="block text-[11px] uppercase tracking-wider text-[#B8B8B3]">IBC / Eurocode Pass</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
