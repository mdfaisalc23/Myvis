import React, { useState } from 'react';
import { OFFICIAL_PRICING, OfficialRateItem, BRAND_INFO } from '../data/content';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Building2, 
  DraftingCompass, 
  FileSpreadsheet, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Plus, 
  Minus 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PricingSectionProps {
  onSelectPackageForForm: (quoteDetails: {
    projectType: string;
    area: string;
    scope: string;
    estimatedBudget: string;
    details: string;
  }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackageForForm }) => {
  // Calculator states
  const [builtUpArea, setBuiltUpArea] = useState<number>(2000);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    arch_plan_section_elevation: true,
    arch_3d_render: true,
    struct_plan_section_reinforcement: true,
    estimation_boq: true,
  });
  const [siteVisitsCount, setSiteVisitsCount] = useState<number>(2);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate totals
  const allRates = [
    ...OFFICIAL_PRICING.architectural,
    ...OFFICIAL_PRICING.structural.filter((s) => s.unit === '/sft'),
    ...OFFICIAL_PRICING.estimation,
  ];

  let totalSftRate = 0;
  let itemsCostBreakdown: { title: string; cost: number; rateStr: string }[] = [];

  allRates.forEach((item) => {
    if (selectedServices[item.id]) {
      const cost = item.rate * builtUpArea;
      totalSftRate += item.rate;
      itemsCostBreakdown.push({
        title: item.title,
        cost,
        rateStr: `${item.rateDisplay} × ${builtUpArea.toLocaleString()} sft`,
      });
    }
  });

  const siteVisitItem = OFFICIAL_PRICING.structural.find((s) => s.unit === '/visit')!;
  const siteVisitsCost = siteVisitsCount * siteVisitItem.rate;

  if (siteVisitsCount > 0) {
    itemsCostBreakdown.push({
      title: `${siteVisitItem.title} (${siteVisitsCount} visits)`,
      cost: siteVisitsCost,
      rateStr: `₹5,000 × ${siteVisitsCount} visits`,
    });
  }

  const grandTotal = (totalSftRate * builtUpArea) + siteVisitsCost;

  const handleInquireWhatsApp = () => {
    const selectedNames = itemsCostBreakdown.map((i) => i.title).join(', ');
    const text = encodeURIComponent(
      `Hello MYVIS STUDIO, I calculated an engineering quote on your website:\n` +
      `• Built-up Area: ${builtUpArea.toLocaleString()} sft\n` +
      `• Services: ${selectedNames}\n` +
      `• Total Estimated Fee: ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `I would like to proceed with this scope. Please share next steps.`
    );
    const cleanNumber = BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const handleProceedWithQuote = () => {
    const selectedNames = itemsCostBreakdown.map((i) => `${i.title} (${i.rateStr} = ₹${i.cost.toLocaleString('en-IN')})`).join('; ');
    onSelectPackageForForm({
      projectType: 'Residential',
      area: `${builtUpArea.toLocaleString()} sft`,
      scope: 'Custom Rate Card Scope',
      estimatedBudget: `₹${grandTotal.toLocaleString('en-IN')}`,
      details: `Official Pricing Calculator Quote for ${builtUpArea.toLocaleString()} sft:\nServices: ${selectedNames}\nTotal Fee: ₹${grandTotal.toLocaleString('en-IN')}`,
    });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#17191C] text-[#F7F6F2] relative border-b border-[#30343A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
              <span className="w-8 h-[1px] bg-[#A58B68]" />
              <span>Transparent Rate Card</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F6F2] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
              Official Consultancy Pricing
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#B8B8B3] font-light">
              Clear, transparent per-square-foot rates for Architectural, Structural Engineering, and Estimation services.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleInquireWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all text-xs font-bold uppercase tracking-wider"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" fill="#FFFFFF" />
              <span>Direct WhatsApp Quote</span>
            </button>
          </div>
        </div>

        {/* 3 Core Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Architectural */}
          <div className="bg-[#121416] border border-[#30343A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#A58B68] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#30343A]">
                <div className="flex items-center gap-2">
                  <DraftingCompass className="w-5 h-5 text-[#A58B68]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B8B8B3]">Discipline 01</span>
                </div>
                <span className="text-[11px] font-mono bg-[#30343A] px-2 py-0.5 text-[#A58B68]">Architectural</span>
              </div>

              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white mb-6">
                1. Architectural Design
              </h3>

              <div className="space-y-6">
                {OFFICIAL_PRICING.architectural.map((item) => (
                  <div key={item.id} className="p-4 bg-[#17191C] border border-[#30343A]/80 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-[#F7F6F2]">{item.title}</span>
                      <span className="text-base font-bold font-mono text-[#A58B68]">{item.rateDisplay}</span>
                    </div>
                    <p className="text-xs text-[#B8B8B3] leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.deliverables.slice(0, 2).map((del, i) => (
                        <span key={i} className="text-[10px] font-mono text-[#B8B8B3] bg-[#30343A]/50 px-2 py-0.5">
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#30343A] text-xs font-mono text-[#B8B8B3] flex justify-between items-center">
              <span>All 2D drawings & 3D perspectives</span>
              <span className="text-[#A58B68]">₹15 – ₹20/sft</span>
            </div>
          </div>

          {/* 2. Structural */}
          <div className="bg-[#121416] border border-[#30343A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#A58B68] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#30343A]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#A58B68]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B8B8B3]">Discipline 02</span>
                </div>
                <span className="text-[11px] font-mono bg-[#30343A] px-2 py-0.5 text-[#A58B68]">Structural</span>
              </div>

              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white mb-6">
                2. Structural Engineering
              </h3>

              <div className="space-y-6">
                {OFFICIAL_PRICING.structural.map((item) => (
                  <div key={item.id} className="p-4 bg-[#17191C] border border-[#30343A]/80 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-[#F7F6F2]">{item.title}</span>
                      <span className="text-base font-bold font-mono text-[#A58B68]">{item.rateDisplay}</span>
                    </div>
                    <p className="text-xs text-[#B8B8B3] leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.deliverables.slice(0, 2).map((del, i) => (
                        <span key={i} className="text-[10px] font-mono text-[#B8B8B3] bg-[#30343A]/50 px-2 py-0.5">
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#30343A] text-xs font-mono text-[#B8B8B3] flex justify-between items-center">
              <span>Safety calculations & Site audits</span>
              <span className="text-[#A58B68]">₹15/sft + ₹5k</span>
            </div>
          </div>

          {/* 3. Estimation */}
          <div className="bg-[#121416] border border-[#30343A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#A58B68] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#30343A]">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#A58B68]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B8B8B3]">Discipline 03</span>
                </div>
                <span className="text-[11px] font-mono bg-[#30343A] px-2 py-0.5 text-[#A58B68]">Quantity & BOQ</span>
              </div>

              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white mb-6">
                3. Estimation & BOQ
              </h3>

              <div className="space-y-6">
                {OFFICIAL_PRICING.estimation.map((item) => (
                  <div key={item.id} className="p-4 bg-[#17191C] border border-[#30343A]/80 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-[#F7F6F2]">{item.title}</span>
                      <span className="text-base font-bold font-mono text-[#A58B68]">{item.rateDisplay}</span>
                    </div>
                    <p className="text-xs text-[#B8B8B3] leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.deliverables.slice(0, 2).map((del, i) => (
                        <span key={i} className="text-[10px] font-mono text-[#B8B8B3] bg-[#30343A]/50 px-2 py-0.5">
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Scope Note */}
                <div className="p-4 bg-[#30343A]/20 border border-[#30343A]/50 text-xs text-[#B8B8B3] space-y-1.5">
                  <span className="text-[#A58B68] font-mono uppercase tracking-wider block">Estimation Accuracy</span>
                  <p>Includes rebar steel tonnage, cement bag count, aggregate/sand volumes, and contractor quote verification.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#30343A] text-xs font-mono text-[#B8B8B3] flex justify-between items-center">
              <span>Complete Material Takeoff</span>
              <span className="text-[#A58B68]">₹10 / sft</span>
            </div>
          </div>

        </div>

        {/* Live Interactive Pricing Calculator */}
        <div className="bg-[#121416] border border-[#30343A] p-6 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Cost Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white">
              Calculate Your Exact Project Design Cost
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B8B3] mt-1 font-light">
              Enter your building area and select required services to generate an instant itemized fee summary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Built-up area slider & input */}
              <div className="p-5 bg-[#17191C] border border-[#30343A] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8B8B3]">
                    Built-up Area (Sq. Ft.)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="300"
                      max="100000"
                      step="100"
                      value={builtUpArea}
                      onChange={(e) => setBuiltUpArea(Math.max(100, Number(e.target.value)))}
                      className="w-32 bg-[#121416] border border-[#30343A] px-3 py-1.5 text-right font-mono text-sm font-bold text-[#A58B68] focus:outline-none focus:border-[#A58B68]"
                    />
                    <span className="text-xs font-mono text-[#B8B8B3]">sft</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-[#A58B68] h-1.5 bg-[#30343A] cursor-pointer"
                />

                {/* Quick Area Presets */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="text-[11px] font-mono text-[#B8B8B3] self-center">Presets:</span>
                  {[1000, 1500, 2000, 3000, 5000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBuiltUpArea(preset)}
                      className={`px-2.5 py-1 text-[11px] font-mono border transition-all ${
                        builtUpArea === preset
                          ? 'bg-[#A58B68] text-white border-[#A58B68]'
                          : 'bg-[#121416] text-[#B8B8B3] border-[#30343A] hover:text-white'
                      }`}
                    >
                      {preset.toLocaleString()} sft
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection Checkboxes */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B8B8B3]">
                  Select Required Services
                </div>

                {/* 1. Architectural items */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-[#A58B68] uppercase">1. Architectural Design</div>
                  {OFFICIAL_PRICING.architectural.map((item) => {
                    const isChecked = !!selectedServices[item.id];
                    return (
                      <label
                        key={item.id}
                        className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                          isChecked ? 'bg-[#17191C] border-[#A58B68]' : 'bg-[#121416] border-[#30343A] opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleService(item.id)}
                            className="accent-[#A58B68] w-4 h-4 rounded-none cursor-pointer"
                          />
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#F7F6F2] block">{item.title}</span>
                            <span className="text-[11px] text-[#B8B8B3] font-light">
                              {item.id === 'arch_plan_section_elevation' ? 'Floor plans, elevations, section cuts' : 'Photorealistic exterior renders'}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#A58B68] shrink-0 ml-4">
                          {item.rateDisplay}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {/* 2. Structural items */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-[#A58B68] uppercase">2. Structural Engineering</div>
                  {OFFICIAL_PRICING.structural.filter((s) => s.unit === '/sft').map((item) => {
                    const isChecked = !!selectedServices[item.id];
                    return (
                      <label
                        key={item.id}
                        className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                          isChecked ? 'bg-[#17191C] border-[#A58B68]' : 'bg-[#121416] border-[#30343A] opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleService(item.id)}
                            className="accent-[#A58B68] w-4 h-4 rounded-none cursor-pointer"
                          />
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#F7F6F2] block">{item.title}</span>
                            <span className="text-[11px] text-[#B8B8B3] font-light">Footing, column/beam schedules, slab rebar & BBS</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#A58B68] shrink-0 ml-4">
                          {item.rateDisplay}
                        </span>
                      </label>
                    );
                  })}

                  {/* Site visits counter */}
                  <div className="flex items-center justify-between p-3.5 bg-[#17191C] border border-[#30343A]">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F7F6F2] block">
                        Site Visit for Technical Inspection
                      </span>
                      <span className="text-[11px] text-[#B8B8B3] font-light">
                        On-site rebar & shuttering quality inspection (₹5,000 / visit)
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <div className="flex items-center border border-[#30343A]">
                        <button
                          type="button"
                          onClick={() => setSiteVisitsCount(Math.max(0, siteVisitsCount - 1))}
                          className="p-1.5 bg-[#121416] text-[#B8B8B3] hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-mono text-xs font-bold text-[#F7F6F2]">
                          {siteVisitsCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSiteVisitsCount(siteVisitsCount + 1)}
                          className="p-1.5 bg-[#121416] text-[#B8B8B3] hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs font-mono text-[#A58B68] font-bold">
                        ₹{(siteVisitsCount * 5000).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Estimation */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-[#A58B68] uppercase">3. Estimation & BOQ</div>
                  {OFFICIAL_PRICING.estimation.map((item) => {
                    const isChecked = !!selectedServices[item.id];
                    return (
                      <label
                        key={item.id}
                        className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                          isChecked ? 'bg-[#17191C] border-[#A58B68]' : 'bg-[#121416] border-[#30343A] opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleService(item.id)}
                            className="accent-[#A58B68] w-4 h-4 rounded-none cursor-pointer"
                          />
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#F7F6F2] block">{item.title}</span>
                            <span className="text-[11px] text-[#B8B8B3] font-light">Material quantities, rebar tonnage & contractor BOQ</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#A58B68] shrink-0 ml-4">
                          {item.rateDisplay}
                        </span>
                      </label>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* Calculations Summary Card */}
            <div className="lg:col-span-5 bg-[#17191C] border border-[#30343A] p-6 sm:p-8 space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-[#30343A]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
                  Itemized Quotation
                </span>
                <span className="text-xs font-mono text-[#B8B8B3]">
                  {builtUpArea.toLocaleString()} sft Area
                </span>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-3">
                {itemsCostBreakdown.length === 0 ? (
                  <div className="text-xs text-[#B8B8B3] italic py-4 text-center">
                    Please select at least one service from the list.
                  </div>
                ) : (
                  itemsCostBreakdown.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between text-xs border-b border-[#30343A]/50 pb-2">
                      <div className="pr-2">
                        <span className="text-[#F7F6F2] block font-medium">{item.title}</span>
                        <span className="text-[11px] font-mono text-[#B8B8B3]">{item.rateStr}</span>
                      </div>
                      <span className="font-mono text-sm font-bold text-[#F7F6F2] tabular-nums shrink-0">
                        ₹{item.cost.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Total Summary */}
              <div className="p-4 bg-[#121416] border border-[#30343A] space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#B8B8B3]">
                    Estimated Total Fee:
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#A58B68] tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {totalSftRate > 0 && (
                  <div className="flex justify-between text-[11px] font-mono text-[#B8B8B3] pt-1 border-t border-[#30343A]/50">
                    <span>Effective Rate:</span>
                    <span>₹{totalSftRate} / sft (+ site visits)</span>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleInquireWhatsApp}
                  disabled={itemsCostBreakdown.length === 0}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 disabled:opacity-40"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" fill="#FFFFFF" />
                  <span>Send Quote on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleProceedWithQuote}
                  disabled={itemsCostBreakdown.length === 0}
                  className="w-full py-3.5 px-4 bg-[#A58B68] hover:bg-[#8e7655] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  <span>Proceed to Consultation Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] font-mono text-[#B8B8B3] leading-relaxed text-center">
                * Rates are standard base consultancies for standard residential/commercial structures. Includes 2 revision rounds.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
