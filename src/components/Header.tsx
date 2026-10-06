import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onRequestDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('technology');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['hero', 'technology', 'demo', 'products', 'evidence', 'safety', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Technology', href: '#technology', id: 'technology' },
    { name: 'Demo', href: '#demo', id: 'demo' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Evidence', href: '#evidence', id: 'evidence' },
    { name: 'Safety Protocol', href: '#safety', id: 'safety' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 88;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b border-[#E7EDF0] ${
        scrolled ? 'shadow-[0_4px_20px_rgba(16,42,67,0.06)]' : ''
      }`}
      style={{ height: '88px' }}
    >
      <div className="max-w-[1200px] mx-auto h-full px-5 sm:px-8 xl:px-0 flex items-center justify-between">
        {/* Left: Trinetra brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007C83] rounded-md py-1"
          title="Trinetra Industrial Solutions Pvt. Ltd."
        >
          <img
            src="/images/trinetra-brand-logo.jpg"
            alt="Trinetra Industrial Solutions — Solutions Today for a Stronger Tomorrow"
            className="w-[112px] sm:w-[136px] max-h-[80px] object-contain flex-shrink-0"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-2 text-[14px] font-medium transition-colors duration-150 ${
                  isActive ? 'text-[#007C83] font-semibold' : 'text-[#425466] hover:text-[#102A43]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007C83] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onRequestDemo}
            className="h-[52px] px-[22px] rounded-[10px] bg-[#102A43] hover:bg-[#173C59] text-white text-[14px] leading-[20px] font-semibold transition-all duration-200 shadow-sm flex items-center gap-[10px] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007C83] focus:ring-offset-2"
          >
            <span>Request a Site Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onRequestDemo}
            className="sm:hidden h-[40px] px-3 rounded-[8px] bg-[#102A43] text-white text-[12px] font-semibold flex items-center gap-1.5"
          >
            <span>Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2.5 rounded-lg border border-[#DCE5EA] text-[#102A43] hover:bg-[#F5F8F9] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[88px] left-0 right-0 bg-white border-b border-[#DCE5EA] shadow-xl z-50 px-6 py-6 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-88px)] overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#F0F4F7]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3.5 text-[15px] font-semibold text-[#102A43] hover:text-[#007C83] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#607285]" />
              </a>
            ))}
          </div>

          <div className="pt-5 mt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full h-[52px] rounded-[10px] bg-[#102A43] text-white text-[14px] font-semibold flex items-center justify-center gap-2"
            >
              <span>Request a Site Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 pt-2 text-[12px] text-[#607285]">
              <ShieldCheck className="w-4 h-4 text-[#007C83]" />
              <span>Certified Industrial Assessment Protocol</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
