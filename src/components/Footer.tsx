import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp, Mail, Phone, MapPin, Youtube, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { theme } = useTheme();

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const linksCompany = [
    { name: 'Showcase Work', href: '#portfolio' },
    { name: 'Our Services', href: '#services' },
    { name: 'Genius Philosophy', href: '#genius-studio' },
    { name: 'Client Insights', href: '#testimonials' },
  ];

  const linksLegal = [
    { name: 'Terms of Production', href: '#' },
    { name: 'Privacy Framework', href: '#' },
    { name: 'Licensing Terms', href: '#' },
    { name: 'Security Audit', href: '#' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      id="footer"
      className={`pt-20 pb-10 transition-colors duration-500 border-t ${
        theme === 'dark'
          ? 'bg-[#1A1A1A] text-white border-white/10'
          : 'bg-[#F5F5F5] text-brand-charcoal border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-border-custom">
          
          {/* Column 1: Branding & Philosophy */}
          <div className="flex flex-col gap-6">
            <Logo showText={true} />
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'}`}>
              Engineering visual and sonic masterpieces globally. We merge structural analysis with cinematography to craft high-conversion client assets.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className={`p-2 rounded-sm border border-border-custom hover:text-brand-gold hover:border-brand-gold transition-all duration-300 bg-white/5`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-sm border border-border-custom hover:text-brand-gold hover:border-brand-gold transition-all duration-300 bg-white/5`}
                aria-label="Instagram Page"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-sm border border-border-custom hover:text-brand-gold hover:border-brand-gold transition-all duration-300 bg-white/5`}
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Company Sitemap</h4>
            <ul className="flex flex-col gap-3">
              {linksCompany.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm transition-all duration-200 hover:text-brand-gold hover:pl-1 ${
                      theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-brand-grey hover:text-brand-charcoal'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Frameworks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Production Legal</h4>
            <ul className="flex flex-col gap-3">
              {linksLegal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-all duration-200 hover:text-brand-gold hover:pl-1 ${
                      theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-brand-grey hover:text-brand-charcoal'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Production Nodes</h4>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold">Media Genium HQ</p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'}>84 Creative Boulevard, Suite 500</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-gold shrink-0" />
              <a
                href="mailto:contact@mediagenium.com"
                className={`text-sm hover:text-brand-gold transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'
                }`}
              >
                contact@mediagenium.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-gold shrink-0" />
              <a
                href="tel:+18005553022"
                className={`text-sm hover:text-brand-gold transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'
                }`}
              >
                +1 (800) 555-3022
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-grey text-center sm:text-left">
            &copy; {currentYear} Media Genium Multimedia. All rights reserved.
          </p>

          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className={`p-3 rounded-sm border border-border-custom transition-all hover:scale-105 active:scale-95 text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal shadow-sm bg-white/5`}
            title="Scroll to Top"
            aria-label="Scroll to top of website"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
