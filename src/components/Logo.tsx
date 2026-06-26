import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  const { theme } = useTheme();

  return (
    <div id="media-genium-logo" className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* High-Fidelity SVG Logo Mark derived from the real logo */}
      <svg
        viewBox="0 0 100 100"
        className="w-10.5 h-10.5 shrink-0 transition-transform duration-500 hover:rotate-12"
        aria-hidden="true"
      >
        <defs>
          {/* Sphere Radial 3D Gradient */}
          <radialGradient id="logoSphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="40%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#D49D10" />
          </radialGradient>
          
          {/* Shutter Wings/Claws Gradient */}
          <linearGradient id="logoClawGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#3A3A3A' : '#1A1A1A'} />
            <stop offset="100%" stopColor={theme === 'dark' ? '#1E1E1E' : '#0B0B0B'} />
          </linearGradient>
        </defs>

        {/* Outer curved wings wrapping the sphere (faithful claw/crescent shape) */}
        {/* Upper Left Wing */}
        <path
          d="M 50,12 C 28,12 14,28 14,50 C 14,58 18,65 24,69 C 22,58 25,44 35,33 C 43,24 55,19 69,21 C 63,15 57,12 50,12 Z"
          fill="url(#logoClawGrad)"
        />
        
        {/* Lower Right Wing */}
        <path
          d="M 50,88 C 72,88 86,72 86,50 C 86,42 82,35 76,31 C 78,42 75,56 65,67 C 57,76 45,81 31,79 C 37,85 43,88 50,88 Z"
          fill="url(#logoClawGrad)"
        />

        {/* Central Gold-Yellow Sphere */}
        <circle cx="50" cy="50" r="23" fill="url(#logoSphereGrad)" />

        {/* Cool Grey diagonal ribbon/slash cutting across the sphere */}
        <path
          d="M 24,68 L 76,32 C 70,27 63,24 56,26 L 29,66 C 26,62 24,58 24,68 Z"
          fill="#757575"
          opacity="0.8"
          style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
        />
        
        {/* Sleek film track line inside diagonal ribbon */}
        <line
          x1="29"
          y1="64"
          x2="71"
          y2="36"
          stroke="#9E9E9E"
          strokeWidth="1.5"
          strokeDasharray="2,3"
          opacity="0.9"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          {/* Logo Heading: Wide Display Typography with Golden Accent Flare */}
          <div className="relative inline-block leading-none">
            <span className={`text-2xl font-black tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-brand-charcoal'
            }`}>
              MEDIA
            </span>
            {/* The horizontal gold-yellow line reflecting through the center of "MEDIA" from the logo */}
            <div className="absolute top-[55%] left-0 w-full h-[1.5px] bg-brand-gold opacity-80 pointer-events-none" />
          </div>

          {/* Subheading representing "Genius Multimedia" customized to "GENIUM MULTIMEDIA" */}
          <span className={`text-[9px] font-bold uppercase tracking-[0.25em] leading-none mt-1 ${
            theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'
          }`}>
            GENIUM MULTIMEDIA
          </span>

          {/* Slogan details */}
          <span className="text-[7.5px] uppercase tracking-[0.35em] text-brand-gold font-mono leading-none mt-1">
            Beyond Creativity
          </span>
        </div>
      )}
    </div>
  );
}
