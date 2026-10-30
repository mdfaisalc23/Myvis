import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/content';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Compass, Shield, MapPin, Maximize2 } from 'lucide-react';

interface ProjectsProps {
  onInquireProject: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Institutional',
    'Industrial',
    'Interior',
    'Structural Engineering'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F7F6F2] text-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
              <span className="w-8 h-[1px] bg-[#A58B68]" />
              <span>03. Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#17191C] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
              Featured Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#30343A] font-light">
              A curated portfolio of architectural form balanced with high-rigor structural engineering.
            </p>
          </div>

          <div className="text-xs font-mono text-[#30343A] uppercase tracking-wider">
            Showing {filteredProjects.length} Architectural & Structural Case Studies
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#B8B8B3]/40 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#17191C] text-white shadow-md'
                    : 'bg-transparent text-[#30343A] hover:text-[#17191C] hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Modern Masonry / Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // Give specific cards asymmetric spans for editorial masonry feel
            const isMarquee = index === 0 || index === 3;

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group cursor-pointer bg-white border border-[#B8B8B3]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-[#17191C] ${
                  isMarquee ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image Frame */}
                <div className={`relative overflow-hidden bg-neutral-900 ${
                  isMarquee ? 'h-72 sm:h-96 md:h-[420px]' : 'h-64 sm:h-80'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category & Status Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                    <span className="bg-[#17191C]/85 backdrop-blur-sm px-2.5 py-1 text-[11px] tracking-wider uppercase text-[#A58B68] border border-[#30343A]">
                      {project.category}
                    </span>
                    <span className="bg-[#17191C]/85 backdrop-blur-sm px-2.5 py-1 text-[11px] tracking-wider uppercase text-[#F7F6F2]">
                      Architectural + Structural CAD
                    </span>
                  </div>

                  {/* Quick Click Affordance */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-[#A58B68] text-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
                    <span>Inspect Dossier</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Project Metadata & Brief */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Area Line */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#30343A]/80 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#A58B68] shrink-0" />
                      <span>{project.location}</span>
                      <span>·</span>
                      <span className="tabular-nums">{project.area}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#17191C] group-hover:text-[#A58B68] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#30343A] leading-relaxed line-clamp-2 font-light">
                      {project.architecturalConcept}
                    </p>
                  </div>

                  {/* Structural System Footnote */}
                  <div className="mt-6 pt-4 border-t border-[#B8B8B3]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-[#30343A] font-mono text-[11px]">
                      <Shield className="w-3.5 h-3.5 text-[#A58B68]" />
                      <span className="truncate max-w-[280px]">{project.structuralSystem}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-semibold text-[#17191C] group-hover:text-[#A58B68] shrink-0 uppercase tracking-wider text-[11px]">
                      <span>View Drawings</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dossier Modal when clicked */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onInquireSimilar={onInquireProject}
        />

      </div>
    </section>
  );
};
