import React, { useState } from 'react';
import { DESIGN_PROCESS_STEPS, ProcessStep } from '../data/content';
import { CheckCircle2, Clock, FileCheck, Layers, ArrowRight } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentStep = DESIGN_PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#17191C] text-[#F7F6F2] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>04. Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
            Our 6-Step Design Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8B8B3] font-light max-w-2xl">
            A linear, accountable framework that bridges abstract architectural vision with calibrated structural reality.
          </p>
        </div>

        {/* 6 Steps Horizontal / Grid Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {DESIGN_PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left transition-all border flex flex-col justify-between h-32 ${
                  isActive
                    ? 'bg-[#A58B68] text-white border-[#A58B68] shadow-lg'
                    : 'bg-[#17191C] text-[#B8B8B3] border-[#30343A] hover:border-[#B8B8B3]/50 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-white' : 'text-[#A58B68]'}>
                    {step.number}
                  </span>
                  <span className="text-[10px] opacity-75">{step.duration}</span>
                </div>
                <div className="font-bold text-sm tracking-tight font-['Plus_Jakarta_Sans',sans-serif] line-clamp-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="bg-[#17191C] border border-[#30343A] p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Engineering Focus */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A58B68] tracking-widest uppercase">
                <span>Phase {currentStep.number} of 06</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#F7F6F2]">
                {currentStep.title}
              </h3>

              <p className="text-base sm:text-lg text-[#B8B8B3] font-light leading-relaxed">
                {currentStep.shortSummary}
              </p>

              <div className="p-5 bg-[#30343A]/40 border border-[#30343A] space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
                  Structural Engineering Calibration:
                </div>
                <p className="text-xs sm:text-sm text-[#F7F6F2] font-mono leading-relaxed">
                  {currentStep.engineeringFocus}
                </p>
              </div>
            </div>

            {/* Right: Technical Deliverables */}
            <div className="lg:col-span-5 bg-[#30343A]/25 border border-[#30343A] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F7F6F2] uppercase tracking-wider pb-3 border-b border-[#30343A]">
                <FileCheck className="w-4 h-4 text-[#A58B68]" />
                <span>Phase Outputs & Client Deliverables</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#B8B8B3]">
                {currentStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#30343A] flex justify-between items-center text-xs">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 border border-[#30343A] text-[#B8B8B3] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Prev Step
                </button>
                <span className="font-mono text-[#A58B68]">
                  {activeStepIndex + 1} / {DESIGN_PROCESS_STEPS.length}
                </span>
                <button
                  disabled={activeStepIndex === DESIGN_PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(DESIGN_PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 border border-[#30343A] text-[#B8B8B3] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
