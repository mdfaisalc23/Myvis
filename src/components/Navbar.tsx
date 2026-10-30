import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onStartProjectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'projects', 'process', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Our Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#17191C]/92 backdrop-blur-md border-b border-[#30343A]/60 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-[#17191C]/80 via-[#17191C]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-white font-extrabold text-xl tracking-[0.2em] font-['Plus_Jakarta_Sans',sans-serif]"
          >
            <span className="w-2.5 h-2.5 bg-[#A58B68] transition-transform duration-300 group-hover:rotate-45" />
            <span>MYVIS STUDIO</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide uppercase font-['Manrope',sans-serif]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#B8B8B3] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A58B68]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Top actions (See Pricing + Start a Project) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="inline-flex items-center px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#F7F6F2] hover:text-white border border-[#A58B68] bg-[#A58B68]/15 hover:bg-[#A58B68] transition-all whitespace-nowrap shrink-0"
            >
              <span>See Pricing</span>
            </a>

            <button
              onClick={handleStartProject}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#A58B68] hover:bg-[#8e7655] transition-all rounded-none hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 text-[#F7F6F2] hover:text-[#A58B68] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#17191C]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-[11px] font-mono tracking-widest text-[#A58B68] uppercase pb-2 border-b border-[#30343A]">
              Navigation Index
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-2xl font-light text-[#F7F6F2] hover:text-[#A58B68] transition-colors py-2 border-b border-[#30343A]/40"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#B8B8B3]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#30343A]">
            <button
              onClick={handleStartProject}
              className="w-full py-3.5 px-4 bg-[#A58B68] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#8e7655]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex justify-between items-center text-xs text-[#B8B8B3]">
              <span>{BRAND_INFO.phone}</span>
              <span>{BRAND_INFO.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
