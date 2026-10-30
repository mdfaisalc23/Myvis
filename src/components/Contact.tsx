import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/content';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Linkedin, 
  Instagram,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactProps {
  prefilledData?: {
    projectType?: string;
    area?: string;
    scope?: string;
    estimatedBudget?: string;
    details?: string;
    serviceName?: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: 'Residential',
    estimatedBudget: '₹15 Lakhs – ₹35 Lakhs',
    projectDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  // Update when prefilledData changes
  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledData.projectType || prev.projectType,
        estimatedBudget: prefilledData.estimatedBudget || prev.estimatedBudget,
        projectDescription: [
          prefilledData.serviceName ? `Inquiring for: ${prefilledData.serviceName}` : '',
          prefilledData.scope ? `Scope: ${prefilledData.scope}` : '',
          prefilledData.details || '',
          prev.projectDescription,
        ].filter(Boolean).join('\n\n'),
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setInquiryRef(`MVS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello MYVIS STUDIO, I would like to consult on an architectural and structural engineering project.\nType: ${formData.projectType || 'General'}\nLocation: ${formData.projectLocation || 'Unspecified'}`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F6F2] text-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A58B68] mb-4">
            <span className="w-8 h-[1px] bg-[#A58B68]" />
            <span>07. Consultation & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#17191C] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15] text-balance">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#30343A] font-light max-w-2xl">
            Whether you require schematic architectural concepts, complex structural finite element modeling, or comprehensive engineering coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-[#B8B8B3]/50 p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in">
                <div className="w-16 h-16 bg-[#17191C] text-[#A58B68] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
                    Consultation Request Lodged
                  </span>
                  <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#17191C]">
                    Thank You, {formData.fullName}.
                  </h3>
                  <p className="text-xs font-mono text-[#30343A]">
                    Dossier Reference ID: <strong className="text-[#17191C]">{inquiryRef}</strong>
                  </p>
                </div>
                <p className="text-sm text-[#30343A] max-w-md mx-auto font-light leading-relaxed">
                  Our principal structural engineers and senior architects will review your project parameters within 24 business hours to schedule an initial technical scoping call.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      projectLocation: '',
                      projectType: 'Residential',
                      estimatedBudget: '$25,000 - $50,000',
                      projectDescription: '',
                    });
                  }}
                  className="px-6 py-2.5 border border-[#17191C] text-xs font-semibold uppercase tracking-wider text-[#17191C] hover:bg-[#17191C] hover:text-white transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] placeholder-[#B8B8B3] focus:outline-none focus:border-[#A58B68] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] placeholder-[#B8B8B3] focus:outline-none focus:border-[#A58B68] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] placeholder-[#B8B8B3] focus:outline-none focus:border-[#A58B68] transition-colors"
                    />
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Project Location (City / State / Country) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Austin, Texas, USA"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] placeholder-[#B8B8B3] focus:outline-none focus:border-[#A58B68] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] focus:outline-none focus:border-[#A58B68] transition-colors"
                    >
                      <option value="Residential">Residential Architecture</option>
                      <option value="Commercial">Commercial / Mixed-Use</option>
                      <option value="Institutional">Institutional / Civic</option>
                      <option value="Industrial">Industrial & Logistics</option>
                      <option value="Interior">Interior Space Planning</option>
                      <option value="Structural Engineering">Structural Audit & Retrofitting</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                      Estimated Construction / Design Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] focus:outline-none focus:border-[#A58B68] transition-colors"
                    >
                      <option value="Under ₹15 Lakhs">Under ₹15 Lakhs</option>
                      <option value="₹15 Lakhs – ₹35 Lakhs">₹15 Lakhs – ₹35 Lakhs</option>
                      <option value="₹35 Lakhs – ₹75 Lakhs">₹35 Lakhs – ₹75 Lakhs</option>
                      <option value="₹75 Lakhs – ₹2 Crore">₹75 Lakhs – ₹2 Crore</option>
                      <option value="₹2 Crore – ₹5 Crore">₹2 Crore – ₹5 Crore</option>
                      <option value="₹5 Crore+">₹5 Crore+</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#30343A] mb-2">
                    Project Description & Technical Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe programmatic goals, site topography, floor areas, structural preferences, and target timeline..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full bg-[#F7F6F2] border border-[#B8B8B3]/60 px-4 py-3 text-sm text-[#17191C] placeholder-[#B8B8B3] focus:outline-none focus:border-[#A58B68] transition-colors resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-4 bg-[#17191C] text-white hover:bg-[#30343A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                  >
                    <span>{submitting ? 'Transmitting Request...' : 'Submit Project Brief'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full sm:w-auto px-6 py-4 bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" fill="#FFFFFF" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact & Google Maps Integration */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Studio Contacts Card */}
            <div className="bg-[#17191C] text-[#F7F6F2] p-8 border border-[#30343A] space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#A58B68]">
                Studio Coordinates & Direct Contact
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B8B8B3] block">Studio Headquarters</span>
                    <span className="text-[#F7F6F2] font-sans text-sm">{BRAND_INFO.headquarters}</span>
                    <span className="text-[11px] text-[#A58B68] block mt-0.5">{BRAND_INFO.coordinates}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B8B8B3] block">Email Addresses</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-[#F7F6F2] hover:text-[#A58B68] block text-sm">
                      {BRAND_INFO.email}
                    </a>
                    <a href={`mailto:${BRAND_INFO.inquiriesEmail}`} className="text-[#B8B8B3] hover:text-[#A58B68] block text-xs mt-0.5">
                      {BRAND_INFO.inquiriesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B8B8B3] block">Direct Telephone</span>
                    <a href={`tel:${BRAND_INFO.phone}`} className="text-[#F7F6F2] hover:text-[#A58B68] text-sm">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B8B8B3] block">Practice Hours</span>
                    <span className="text-[#F7F6F2] font-sans">Monday – Friday: 08:30 – 18:30 (EST)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#30343A]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#B8B8B3] mb-3">
                  Studio Indexes & Publications
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <a
                    href={BRAND_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#B8B8B3] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#A58B68]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={BRAND_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#B8B8B3] hover:text-white transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#A58B68]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BRAND_INFO.socials.archdaily}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#B8B8B3] hover:text-white transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#A58B68]" />
                    <span>ArchDaily</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Integration Frame */}
            <div className="bg-white border border-[#B8B8B3]/50 overflow-hidden shadow-lg">
              <div className="p-4 bg-[#17191C] text-[#F7F6F2] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A58B68]" />
                  <span>Google Maps Studio Location</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Metropolitan Design District')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#A58B68] hover:text-white transition-colors"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Interactive Architectural Map Viewport */}
              <div className="relative h-64 sm:h-72 w-full bg-[#e5e3df] overflow-hidden">
                <iframe
                  title="MYVIS STUDIO Architectural Headquarters Map"
                  src="https://maps.google.com/maps?q=40.7128,-74.0060&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />

                {/* Location Marker Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#17191C]/90 backdrop-blur-md p-3 text-white border border-[#30343A] flex items-center justify-between text-xs font-mono">
                  <div>
                    <strong className="text-[#A58B68] block">MYVIS STUDIO MAIN PRACTICE</strong>
                    <span className="text-[#B8B8B3] text-[11px]">{BRAND_INFO.headquarters}</span>
                  </div>
                  <span className="text-[10px] bg-[#30343A] px-2 py-0.5 text-[#F7F6F2]">
                    GPS: {BRAND_INFO.coordinates}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
