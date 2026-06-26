import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Video, Volume2, Layers, Compass, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const { theme } = useTheme();

  const services = [
    {
      id: 'cinematic-video',
      title: 'Cinematic Video Production',
      description: 'Stunning visual storytelling crafted to promote your business. From initial script to the final polish, we deliver commercial-grade videos and ads that capture hearts and minds.',
      icon: Video,
      accent: 'Film Strip Sprockets Detail',
      metric: 'High Audience Retention',
      features: ['4K Cinematic Filming', 'Professional Video Editing', 'Brand Commercials & Ads', 'Social Media Video Campaigns'],
    },
    {
      id: 'immersive-audio',
      title: 'Immersive Audio & Sound Design',
      description: 'Professional sound design that elevates your brand message. We record crisp voiceovers, design clear audio soundtracks, and master sound FX that make your media feel alive.',
      icon: Volume2,
      accent: 'Dynamic Audio Equalizer Waves',
      metric: 'Prinstine Audio Clarity',
      features: ['Custom Voiceover Recording', 'Sleek Background Soundtracks', 'Clear Audio Mastering', 'Unique Brand Sonic Logos'],
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity & Web Design',
      description: 'Elegant visual branding that establishes deep trust. We build clean logos, comprehensive style guides, high-impact marketing assets, and fast, fully responsive web layouts.',
      icon: Layers,
      accent: 'Blueprint Wireframe Detailing',
      metric: 'Modern Cohesive Styling',
      features: ['Custom Logos & Style Guides', 'High-Converting Web Layouts', 'Eye-Catching Brand Graphics', 'Unified Social Media Assets'],
    },
    {
      id: 'animation-vfx',
      title: '3D Animation & Motion Graphics',
      description: 'Bringing creative ideas to life with high-impact movement. From stylish 3D product demonstrations to smooth, modern intro/outro animations that leave a mark.',
      icon: Compass,
      accent: 'Coordinate Axes & Mesh Nodes',
      metric: 'Breathtaking 3D & VFX',
      features: ['Realistic 3D Product Demos', 'Eye-Catching Special Effects', 'Animated Brand Intros', 'Seamless Motion Graphics'],
    },
  ];

  return (
    <section
      id="services"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-brand-charcoal bg-grid-pattern-dark text-white' : 'bg-[#FAFAFA] bg-grid-pattern text-brand-charcoal'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR PRODUCTION SCOPE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6">
            Beyond Creativity, Crafted to <br />
            <span className="text-brand-gold">Lead Customers to You</span>.
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'} max-w-2xl`}>
            We combine pristine design, high-end cinematography, and clear marketing strategies to make your brand impossible to ignore. Every project is crafted to engage your audience and drive growth.
          </p>
        </div>

        {/* Staggered CSS Grid Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-sm p-8 sm:p-10 border transition-all duration-500 flex flex-col justify-between group overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-[#222222] border-[#2D2D2D] hover:border-brand-gold/30 hover:shadow-[0_0_30px_rgba(251,192,45,0.08)]'
                    : 'bg-white border-gray-100 hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(251,192,45,0.08)]'
                } ${isEven ? 'lg:translate-y-0' : 'lg:translate-y-12'}`}
              >
                
                {/* Visual Accent/Aesthetic Flourishes Unique to Each Service */}
                {service.id === 'cinematic-video' && (
                  /* Vertical Film Strip Detail */
                  <div className="absolute right-4 top-0 bottom-0 w-6 flex flex-col justify-around opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-sm border border-current" />
                    ))}
                  </div>
                )}

                {service.id === 'immersive-audio' && (
                  /* Equalizer Wave Detail */
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-end gap-1 h-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all pointer-events-none">
                    {[16, 24, 48, 32, 12, 36, 18, 42, 28, 8].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-brand-gold rounded-full animate-pulse"
                        style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                )}

                {service.id === 'brand-identity' && (
                  /* Blueprint Wireframe Grid */
                  <div className="absolute right-4 bottom-4 w-24 h-24 border border-dashed border-current opacity-[0.03] group-hover:opacity-[0.08] rounded-full flex items-center justify-center pointer-events-none transition-all duration-700 group-hover:rotate-45">
                    <div className="w-16 h-16 border border-dashed border-current rounded-full" />
                    <div className="absolute w-24 h-[1px] bg-current" />
                    <div className="absolute h-24 w-[1px] bg-current" />
                  </div>
                )}

                {service.id === 'animation-vfx' && (
                  /* Coordinate Mesh Nodes */
                  <div className="absolute right-4 top-4 w-28 h-28 opacity-[0.03] group-hover:opacity-[0.08] pointer-events-none transition-all duration-700">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1">
                      <polygon points="10,20 40,10 80,30 90,70 50,90 20,70" />
                      <line x1="10" y1="20" x2="50" y2="90" />
                      <line x1="40" y1="10" x2="90" y2="70" />
                      <line x1="80" y1="30" x2="20" y2="70" />
                    </svg>
                  </div>
                )}

                {/* Card Content */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Circle Icon Container */}
                    <div className={`p-4 rounded-sm border transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/5 border-[#2D2D2D] text-brand-gold group-hover:bg-brand-gold/10'
                        : 'bg-brand-charcoal/5 border-gray-100 text-brand-gold group-hover:bg-brand-gold/10'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Metric indicator */}
                    <span className="text-xs font-mono font-semibold tracking-wider text-brand-grey border border-border-custom px-3 py-1 rounded-sm bg-surface">
                      {service.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 border-t border-dashed border-border-custom pt-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold">
                        <div className="h-1 w-1 rounded-full bg-brand-gold" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-brand-charcoal/80'}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:text-brand-gold transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-brand-charcoal'
                    }`}
                  >
                    Discuss Service Scope
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
