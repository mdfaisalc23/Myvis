import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello MYVIS STUDIO, I would like to consult on an architectural and structural engineering project (Plan, 3D Render, Structural & Estimation).`
    );
    const cleanNumber = BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  };

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip badge */}
      <div 
        className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 bg-[#17191C] text-white text-xs font-mono border border-[#30343A] shadow-2xl pointer-events-none transition-all duration-300 opacity-95 group-hover:opacity-100 group-hover:-translate-x-1"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-[#F7F6F2]">Chat with Principal Engineer</span>
      </div>

      {/* Official WhatsApp Floating Action Button */}
      <button
        type="button"
        onClick={handleOpenWhatsApp}
        aria-label="Chat on WhatsApp with MYVIS STUDIO"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle animated ping ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>

        {/* Authentic Official WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 text-white" fill="#FFFFFF" />
      </button>
    </aside>
  );
};
