import React, { useState } from 'react';
import { Compass, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeDuality, setActiveDuality] = useState<'architecture' | 'engineering'>('architecture');

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F6F2] text-[#17191C] relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>01. About Myvis Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#17191C] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
            Where Creativity Meets Structural Intelligence.
          </h2>
        </div>

        {/* 2-Column Split: Editorial Narrative & Interactive Duality Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <p className="text-xl md:text-2xl font-light text-[#30343A] leading-relaxed">
              <strong className="font-semibold text-[#17191C]">MYVIS STUDIO</strong> is an integrated architecture and structural engineering consultancy dedicated to delivering thoughtful design solutions and technically sound structures.
            </p>

            <p className="text-base md:text-lg text-[#30343A]/90 leading-relaxed font-light">
              We believe that exceptional buildings require more than beautiful architecture. They demand intelligent structural systems, proper site analysis, engineering precision and coordinated execution.
            </p>

            <p className="text-base md:text-lg text-[#30343A]/90 leading-relaxed font-light">
              Our approach integrates architectural creativity, structural engineering and technical expertise throughout the building design process, preventing costly rework and engineering compromise before construction begins.
            </p>

            {/* Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#B8B8B3]/40">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-none bg-[#17191C] text-[#F7F6F2] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#A58B68]" />
                </div>
                <h3 className="font-bold text-sm tracking-wide uppercase text-[#17191C]">
                  Spatial Design
                </h3>
                <p className="text-xs text-[#30343A] leading-relaxed">
                  Sculptural proportion, natural daylighting, and human-centric spatial flow.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-none bg-[#17191C] text-[#F7F6F2] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#A58B68]" />
                </div>
                <h3 className="font-bold text-sm tracking-wide uppercase text-[#17191C]">
                  Finite Analysis
                </h3>
                <p className="text-xs text-[#30343A] leading-relaxed">
                  Advanced 3D mathematical modeling for high-load structural efficiency.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-none bg-[#17191C] text-[#F7F6F2] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#A58B68]" />
                </div>
                <h3 className="font-bold text-sm tracking-wide uppercase text-[#17191C]">
                  Safety & Code
                </h3>
                <p className="text-xs text-[#30343A] leading-relaxed">
                  Full seismic compliance, geotechnical alignment, and statutory approvals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Duality Demonstrator */}
          <div className="lg:col-span-5 bg-[#17191C] text-[#F7F6F2] p-6 sm:p-8 border border-[#30343A] shadow-2xl relative">
            
            {/* Top Toolbar: Switcher */}
            <div className="flex items-center justify-between pb-6 border-b border-[#30343A]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8B8B3]">
                Duality Model
              </div>

              {/* Interactive Segmented Control */}
              <div className="flex items-center gap-1 bg-[#30343A] p-1">
                <button
                  onClick={() => setActiveDuality('architecture')}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all uppercase whitespace-nowrap ${
                    activeDuality === 'architecture'
                      ? 'bg-[#A58B68] text-white shadow'
                      : 'text-[#B8B8B3] hover:text-white'
                  }`}
                >
                  Architectural
                </button>
                <button
                  onClick={() => setActiveDuality('engineering')}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all uppercase whitespace-nowrap ${
                    activeDuality === 'engineering'
                      ? 'bg-[#A58B68] text-white shadow'
                      : 'text-[#B8B8B3] hover:text-white'
                  }`}
                >
                  Structural
                </button>
              </div>
            </div>

            {/* Interactive Visual Schematic */}
            <div className="my-6 p-4 bg-[#17191C] border border-[#30343A] relative min-h-[220px] flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-dark opacity-30" />

              {/* Dynamic SVG Drawing based on active mode */}
              {activeDuality === 'architecture' ? (
                <div className="relative w-full max-w-[320px] space-y-3 text-center">
                  <svg viewBox="0 0 320 160" className="w-full h-auto text-[#A58B68]">
                    {/* Architectural massing lines */}
                    <rect x="30" y="30" width="260" height="90" fill="none" stroke="#F7F6F2" strokeWidth="1.5" />
                    <rect x="70" y="50" width="180" height="70" fill="rgba(165, 139, 104, 0.15)" stroke="#A58B68" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="30" y1="120" x2="290" y2="120" stroke="#B8B8B3" strokeWidth="2" />
                    <line x1="70" y1="30" x2="70" y2="120" stroke="#A58B68" strokeWidth="1" />
                    <line x1="250" y1="30" x2="250" y2="120" stroke="#A58B68" strokeWidth="1" />
                    {/* Cantilever overhang indicator */}
                    <path d="M 250 50 L 290 50" stroke="#A58B68" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="160" y="88" fill="#F7F6F2" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      SPATIAL VOLUME & LIGHT ATRIUM
                    </text>
                    <text x="270" y="44" fill="#A58B68" fontSize="9" fontFamily="monospace" textAnchor="middle">
                      CANTILEVER
                    </text>
                  </svg>
                  <p className="text-xs font-mono text-[#B8B8B3]">
                    Focus: Daylight penetration, circulation flow, and visual proportions.
                  </p>
                </div>
              ) : (
                <div className="relative w-full max-w-[320px] space-y-3 text-center">
                  <svg viewBox="0 0 320 160" className="w-full h-auto">
                    {/* Structural framing, moments & load path */}
                    <line x1="30" y1="120" x2="290" y2="120" stroke="#30343A" strokeWidth="3" />
                    {/* Columns */}
                    <rect x="65" y="40" width="12" height="80" fill="#B8B8B3" />
                    <rect x="180" y="40" width="12" height="80" fill="#B8B8B3" />
                    {/* Post-tensioned beam with cantilever */}
                    <rect x="40" y="32" width="250" height="12" fill="#A58B68" />
                    {/* Load vectors */}
                    <line x1="120" y1="15" x2="120" y2="28" stroke="#F7F6F2" strokeWidth="2" />
                    <polygon points="120,32 117,25 123,25" fill="#F7F6F2" />
                    <line x1="240" y1="15" x2="240" y2="28" stroke="#A58B68" strokeWidth="2" />
                    <polygon points="240,32 237,25 243,25" fill="#A58B68" />
                    {/* Moment curve representation */}
                    <path d="M 70 85 Q 125 110 185 85" fill="none" stroke="#F7F6F2" strokeWidth="1.5" strokeDasharray="2 2" />
                    {/* Soil reactions */}
                    <text x="71" y="136" fill="#A58B68" fontSize="9" fontFamily="monospace" textAnchor="middle">R1: 420kN</text>
                    <text x="186" y="136" fill="#A58B68" fontSize="9" fontFamily="monospace" textAnchor="middle">R2: 580kN</text>
                    <text x="240" y="12" fill="#A58B68" fontSize="9" fontFamily="monospace" textAnchor="middle">q_live: 3.5 kPa</text>
                  </svg>
                  <p className="text-xs font-mono text-[#A58B68]">
                    Focus: Bending moment envelopment, deflection control &lt; L/480, soil bearing.
                  </p>
                </div>
              )}
            </div>

            {/* Explanatory Spec List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-mono tracking-widest text-[#B8B8B3]">
                {activeDuality === 'architecture' ? 'Architectural Scope' : 'Structural Rigor'}
              </div>
              <ul className="space-y-2 text-xs text-[#B8B8B3]">
                {activeDuality === 'architecture' ? (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Volumetric massing calibrated to local sun path and microclimate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Unobstructed glass curtain vistas with zero clumsy corner columns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Architectural finish materials aligned with long-term weathering.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Post-tensioned rebar profile neutralizing cantilever dead-load sag.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Lateral drift verification under 100-year return wind and seismic spectrums.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A58B68] shrink-0 mt-0.5" />
                      <span>Finite element mesh verification preventing stress concentrations at re-entrant corners.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
