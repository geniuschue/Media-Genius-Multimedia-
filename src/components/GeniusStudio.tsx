import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Cpu, Music, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function GeniusStudio() {
  const { theme } = useTheme();

  const pillars = [
    {
      icon: Cpu,
      title: 'Strategic Visual Pacing',
      desc: 'Every shot is designed to capture and hold attention. We craft beautiful visual progressions and modern color schemes to keep your audience engaged from start to finish.',
    },
    {
      icon: Music,
      title: 'Immersive Sound Design',
      desc: 'Pristine soundscapes and elegant audio pacing that build real emotional connection. We build rich, custom audio that makes your brand story feel real and memorable.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Driven Outcomes',
      desc: 'Media built with clear business goals. We place visual call-to-actions and key brand messages strategically to lead prospective customers directly to your door.',
    },
  ];

  return (
    <section
      id="genius-studio"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-500 border-t ${
        theme === 'dark'
          ? 'bg-[#1A1A1A] border-white/10 text-white'
          : 'bg-[#FFFFFF] border-gray-100 text-brand-charcoal'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">GENIUS MULTIMEDIA STUDIO</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight leading-none">
              Where Storytelling <br />
              Meets <span className="text-brand-gold text-flare-gradient gold-glow">High Cinema</span>.
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-brand-grey'}`}>
              Media Genium Multimedia operates at the intersection of cinematic artistry and modern audience engagement. We do not just make videos—we build visual assets that elevate your brand and lead customers straight to you.
            </p>

            <div className={`p-6 rounded-sm border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-brand-charcoal/5 border-gray-200'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono block mb-2">// CORPORATE CORE:</span>
              <p className="text-sm font-semibold italic">
                "Beyond Creativity is not just our tagline—it is our absolute operational standard."
              </p>
            </div>
          </div>

          {/* Right Block: Three Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group ${
                    theme === 'dark'
                      ? 'bg-[#222222]/50 border-[#2D2D2D] hover:border-brand-gold/20 hover:bg-[#222222]'
                      : 'bg-[#F9F9F9] border-gray-200 hover:border-brand-gold/20 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  {/* Icon Container */}
                  <div className={`p-4 rounded-sm border text-brand-gold shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-white/5 border-[#2D2D2D] group-hover:bg-brand-gold/10' : 'bg-brand-charcoal/5 border-gray-100 group-hover:bg-brand-gold/10'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-display font-bold tracking-tight group-hover:text-brand-gold transition-colors">
                      {pillar.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'}`}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
