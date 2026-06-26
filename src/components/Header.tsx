import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Genius Studio', href: '#genius-studio' },
    { name: 'Insights', href: '#testimonials' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#1A1A1A]/90 border-b border-white/10 backdrop-blur-md shadow-lg py-3'
            : 'bg-white/90 border-b border-gray-100 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" onClick={(e) => handleLinkClick(e, '#root')} className="focus:outline-none">
          <Logo />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-brand-gold ${
                theme === 'dark' ? 'text-gray-300' : 'text-brand-charcoal/80'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions (Theme, CTA, Mobile Toggle) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`p-2.5 rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-brand-gold hover:bg-white/10'
                : 'bg-brand-charcoal/5 border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-charcoal/10'
            }`}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* Persistent CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 active:scale-95 group gold-glow-hover ${
              theme === 'dark'
                ? 'bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal'
                : 'bg-brand-gold text-brand-charcoal hover:bg-[#E5AC20]'
            }`}
          >
            Start a Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 md:hidden rounded-sm transition-colors ${
              theme === 'dark' ? 'text-white hover:bg-white/5' : 'text-brand-charcoal hover:bg-brand-charcoal/5'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t ${
              theme === 'dark' ? 'bg-[#1A1A1A] border-white/10' : 'bg-white border-gray-100'
            }`}
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-bold uppercase tracking-wider py-2 ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] my-2 bg-border-custom" />
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-brand-gold text-brand-charcoal hover:bg-brand-gold-dark transition-colors text-center"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
