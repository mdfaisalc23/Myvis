import React, { useState } from 'react';
import { X, MapPin, Maximize2, Shield, Calendar, Layers, Eye, FileText, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquireSimilar }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'blueprint'>('photo');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#17191C] text-[#F7F6F2] border border-[#30343A] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#17191C]/95 backdrop-blur-md border-b border-[#30343A] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#A58B68] uppercase tracking-widest">
              Dossier Ref: {project.id.toUpperCase()}
            </span>
            <span className="text-[#30343A]">|</span>
            <span className="text-xs uppercase tracking-wider text-[#B8B8B3]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-[#30343A] p-0.5">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3 py-1 text-xs font-semibold tracking-wider uppercase transition-all ${
                  viewMode === 'photo' ? 'bg-[#A58B68] text-white' : 'text-[#B8B8B3] hover:text-white'
                }`}
              >
                Photography
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 text-xs font-semibold tracking-wider uppercase transition-all ${
                  viewMode === 'blueprint' ? 'bg-[#A58B68] text-white' : 'text-[#B8B8B3] hover:text-white'
                }`}
              >
                Structural CAD
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-[#B8B8B3] hover:text-white hover:bg-[#30343A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Frame (Photo vs Structural CAD Blueprint) */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] bg-black overflow-hidden flex items-center justify-center">
          {viewMode === 'photo' ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            /* Interactive Structural Blueprint Viewer */
            <div className="w-full h-full p-8 flex flex-col justify-between blueprint-grid-dark bg-[#0f1113] relative">
              <div className="flex justify-between items-start text-xs font-mono text-[#A58B68]">
                <div>
                  <div>ENGINEERING SECTION: {project.schematicType.toUpperCase()}</div>
                  <div className="text-[10px] text-[#B8B8B3]">SCALE 1:100 // TOLERANCE ±2mm</div>
                </div>
                <div className="text-right text-[10px] text-[#B8B8B3]">
                  <div>CODE: IBC / ACI 318-19</div>
                  <div>STATUS: APPROVED FOR CONST.</div>
                </div>
              </div>

              {/* Vector representation of structural system */}
              <div className="w-full max-w-xl mx-auto my-auto py-6">
                {project.schematicType === 'cantilever' && (
                  <svg viewBox="0 0 500 200" className="w-full h-auto stroke-[#A58B68] fill-none">
                    {/* Fixed wall / shear core */}
                    <rect x="40" y="20" width="80" height="160" stroke="#F7F6F2" strokeWidth="2" fill="rgba(255,255,255,0.05)" />
                    {/* Cantilevered box */}
                    <rect x="120" y="40" width="280" height="70" stroke="#A58B68" strokeWidth="2.5" fill="rgba(165, 139, 104, 0.1)" />
                    {/* Ground line */}
                    <line x1="20" y1="180" x2="480" y2="180" stroke="#B8B8B3" strokeWidth="1.5" />
                    {/* Post-tensioned tendon profile */}
                    <path d="M 40 50 Q 120 100 400 45" stroke="#F7F6F2" strokeWidth="2" strokeDasharray="4 2" />
                    {/* Moment curve */}
                    <path d="M 120 110 C 160 140, 260 145, 400 110" stroke="#A58B68" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="260" y="32" fill="#A58B68" fontSize="11" fontFamily="monospace">7.2m UNBRACED OVERHANG</text>
                    <text x="80" y="105" fill="#F7F6F2" fontSize="10" fontFamily="monospace" textAnchor="middle">PT CORE</text>
                  </svg>
                )}

                {project.schematicType === 'diagrid' && (
                  <svg viewBox="0 0 500 200" className="w-full h-auto stroke-[#A58B68] fill-none">
                    {/* Diagrid framing skeleton */}
                    <rect x="80" y="20" width="340" height="160" stroke="#F7F6F2" strokeWidth="2" />
                    {/* Diagonals */}
                    <line x1="80" y1="20" x2="165" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="165" y1="20" x2="80" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="165" y1="20" x2="250" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="250" y1="20" x2="165" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="250" y1="20" x2="335" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="335" y1="20" x2="250" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="335" y1="20" x2="420" y2="180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="420" y1="20" x2="335" y2="180" stroke="#A58B68" strokeWidth="2" />
                    {/* Floor diaphragms */}
                    <line x1="80" y1="73" x2="420" y2="73" stroke="#B8B8B3" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="126" x2="420" y2="126" stroke="#B8B8B3" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="250" y="196" fill="#A58B68" fontSize="10" fontFamily="monospace" textAnchor="middle">DIAGRID LATERAL RESISTANCE ENVELOPE</text>
                  </svg>
                )}

                {(project.schematicType === 'vault' || project.schematicType === 'truss') && (
                  <svg viewBox="0 0 500 200" className="w-full h-auto stroke-[#A58B68] fill-none">
                    {/* Long span truss / fluted vault */}
                    <line x1="40" y1="180" x2="460" y2="180" stroke="#B8B8B3" strokeWidth="2" />
                    <path d="M 60 180 C 60 70, 100 50, 140 50 C 180 50, 220 70, 220 180" stroke="#A58B68" strokeWidth="2" />
                    <path d="M 220 180 C 220 70, 260 50, 300 50 C 340 50, 380 70, 380 180" stroke="#A58B68" strokeWidth="2" />
                    <line x1="60" y1="50" x2="440" y2="50" stroke="#F7F6F2" strokeWidth="2" />
                    {/* Load distribution */}
                    <line x1="200" y1="25" x2="200" y2="45" stroke="#A58B68" strokeWidth="1.5" />
                    <polygon points="200,48 197,42 203,42" fill="#A58B68" />
                    <line x1="300" y1="25" x2="300" y2="45" stroke="#A58B68" strokeWidth="1.5" />
                    <polygon points="300,48 297,42 303,42" fill="#A58B68" />
                    <text x="250" y="194" fill="#A58B68" fontSize="10" fontFamily="monospace" textAnchor="middle">COMPRESSION PARABOLIC DISTRIBUTION</text>
                  </svg>
                )}
              </div>

              <div className="flex justify-between items-end text-[11px] font-mono text-[#B8B8B3]">
                <span>MOMENT RESISTING CAPACITY: 1,420 kNm</span>
                <span className="text-[#A58B68]">LATERAL DRIFT: 0.0018 H</span>
              </div>
            </div>
          )}

          {/* Small mobile toggle overlay */}
          <div className="sm:hidden absolute bottom-4 right-4 z-10 flex gap-1 bg-[#17191C]/90 p-1 border border-[#30343A]">
            <button
              onClick={() => setViewMode(viewMode === 'photo' ? 'blueprint' : 'photo')}
              className="px-3 py-1 text-[11px] font-mono text-white bg-[#A58B68]"
            >
              Switch to {viewMode === 'photo' ? 'Blueprint' : 'Photo'}
            </button>
          </div>
        </div>

        {/* Modal Body & Specs */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Main Title & Key Parameters */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-4xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#F7F6F2]">
              {project.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#30343A] text-xs font-mono">
              <div>
                <span className="text-[#A58B68] block uppercase">Location</span>
                <span className="text-[#F7F6F2] font-sans">{project.location}</span>
              </div>
              <div>
                <span className="text-[#A58B68] block uppercase">Gross Area</span>
                <span className="text-[#F7F6F2] tabular-nums">{project.area}</span>
              </div>
              <div>
                <span className="text-[#A58B68] block uppercase">Completion</span>
                <span className="text-[#F7F6F2] tabular-nums">{project.year}</span>
              </div>
              <div>
                <span className="text-[#A58B68] block uppercase">Discipline</span>
                <span className="text-[#F7F6F2] font-sans">Arch + Structural</span>
              </div>
            </div>
          </div>

          {/* Concept vs Structural Engineering Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A58B68] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Architectural Concept</span>
              </div>
              <p className="text-sm text-[#B8B8B3] leading-relaxed font-light">
                {project.architecturalConcept}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A58B68] uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Structural System & Analysis</span>
              </div>
              <p className="text-sm text-[#B8B8B3] leading-relaxed font-light">
                {project.structuralDescription}
              </p>
            </div>
          </div>

          {/* Technical Specifications Bar */}
          <div className="bg-[#30343A]/40 p-5 border border-[#30343A] space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#F7F6F2]">
              Structural Engineering Parameters
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between border-b border-[#30343A]/60 pb-1.5">
                <span className="text-[#B8B8B3]">Structural System:</span>
                <span className="text-[#F7F6F2] font-medium text-right">{project.structuralSystem}</span>
              </div>
              <div className="flex justify-between border-b border-[#30343A]/60 pb-1.5">
                <span className="text-[#B8B8B3]">Seismic Design:</span>
                <span className="text-[#F7F6F2] font-medium text-right">{project.seismicDesign}</span>
              </div>
            </div>

            {/* Highlights Chips */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-[#A58B68] uppercase tracking-wider mb-2">
                Engineering Highlights:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.keyHighlights.map((hl, i) => (
                  <span key={i} className="text-xs bg-[#17191C] text-[#B8B8B3] px-3 py-1 border border-[#30343A]">
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#30343A]">
            <button
              onClick={() => {
                onInquireSimilar(project.title);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#A58B68] hover:bg-[#8e7655] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Consult on Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 border border-[#30343A] text-xs font-semibold uppercase tracking-wider text-[#B8B8B3] hover:text-white hover:border-[#B8B8B3] transition-all"
            >
              Close Dossier
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
