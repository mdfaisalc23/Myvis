import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/content';
import { Check, ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F6F2] text-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>06. Distinct Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#17191C] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
            Why Choose Myvis Studio?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#30343A] font-light max-w-2xl">
            A unified design-engineering consultancy built to safeguard your capital investment and realize ambitious architectural vision.
          </p>
        </div>

        {/* 7 Advantage Cards in a Curated Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={item.number}
                className={`bg-white border border-[#B8B8B3]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#17191C] hover:shadow-lg ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-[#17191C] text-[#F7F6F2]' : 'text-[#17191C]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-6 pb-2 border-b border-[#B8B8B3]/30">
                    <span className="text-[#A58B68] font-bold">PILLAR {item.number}</span>
                    <span className={isFeatured ? 'text-[#B8B8B3]' : 'text-[#30343A]'}>MYVIS ADVANTAGE</span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
                    isFeatured ? 'text-[#F7F6F2]' : 'text-[#17191C]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                    isFeatured ? 'text-[#B8B8B3]' : 'text-[#30343A]'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`pt-6 mt-8 border-t flex items-end justify-between ${
                  isFeatured ? 'border-[#30343A]' : 'border-[#B8B8B3]/30'
                }`}>
                  <div>
                    <span className={`text-2xl font-bold font-mono tracking-tight block ${
                      isFeatured ? 'text-[#A58B68]' : 'text-[#17191C]'
                    }`}>
                      {item.stat}
                    </span>
                    <span className={`text-[11px] uppercase tracking-wider block ${
                      isFeatured ? 'text-[#B8B8B3]' : 'text-[#30343A]'
                    }`}>
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
