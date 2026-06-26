import { useTheme } from '../context/ThemeContext';
import { Quote, Star, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const { theme } = useTheme();

  const reviews = [
    {
      name: 'Elena Rostova',
      role: 'Head of Brand, Æther Cosmetics',
      quote: "Media Genium overhauled our entire video marketing stack. The precision of their cinematic direction and Dolby Atmos audio mastering was unprecedented. Our buyer retention rate skyrocketed by 240% within two quarters.",
      stars: 5,
      impact: '+240% Conversion Lift',
    },
    {
      name: 'Devon Kincaid',
      role: 'Creative Director, Vortex Records',
      quote: "Working with the Genium team is like having research scientists and film prodigies in the same room. They took our sonic identity, mapped spatial acoustics, and created an audio-visual campaign that set a new benchmark for our label.",
      stars: 5,
      impact: '12M+ Organic Plays',
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Product, Nova Systems Corp',
      quote: "Beyond Creativity is not just a tagline—it is their operating baseline. Media Genium did not just design a static brand identity; they engineered an interactive 3D visual language that immediately validated our series B valuation.",
      stars: 5,
      impact: 'Series B Validated',
    },
  ];

  return (
    <section
      id="testimonials"
      className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 border-t ${
        theme === 'dark'
          ? 'bg-[#1A1A1A] border-white/10 text-white'
          : 'bg-[#FAFAFA] border-gray-100 text-brand-charcoal'
      }`}
    >
      {/* Massive Stylized Accent Watermark: "GENIUS MULTIMEDIA" */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none select-none z-0">
        <h3 className={`text-[12vw] font-display font-black tracking-widest text-center uppercase whitespace-nowrap leading-none translate-y-[-30%] opacity-[0.02] ${
          theme === 'dark' ? 'text-white' : 'text-brand-charcoal'
        }`}>
          GENIUS MULTIMEDIA
        </h3>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none select-none z-0">
        <h3 className={`text-[12vw] font-display font-black tracking-widest text-center uppercase whitespace-nowrap leading-none translate-y-[30%] opacity-[0.02] ${
          theme === 'dark' ? 'text-white' : 'text-brand-charcoal'
        }`}>
          BEYOND CREATIVITY
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-wide mb-6 ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10 text-[#a3a3a3]'
              : 'bg-gray-50 border-gray-200 text-[#757575]'
          }`}>
            <Award className="h-4 w-4 shrink-0 text-brand-gold" />
            AUDITED PERFORMANCE METRICS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6">
            What Happens When <span className="text-brand-gold">Strategy</span> Meets Artistry.
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'}`}>
            Read verified feedback from brand leaders who trusted the Media Genium Multimedia team to drive audience engagement.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-sm p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                theme === 'dark'
                  ? 'bg-[#222222]/50 border-[#2D2D2D] hover:border-brand-gold/20 hover:shadow-[0_0_20px_rgba(251,192,45,0.05)]'
                  : 'bg-white border-gray-100 hover:border-brand-gold/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]'
              }`}
            >
              
              {/* Corner quote glow icon */}
              <div className="absolute right-6 top-6 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-300">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              {/* Main review content */}
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6 text-brand-gold">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className={`text-base leading-relaxed italic mb-8 relative z-10 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-brand-charcoal/90'
                }`}>
                  "{rev.quote}"
                </p>
              </div>

              {/* Profile & Business Metric Footer */}
              <div className="border-t border-border-custom pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-brand-grey mt-0.5">
                    {rev.role}
                  </p>
                </div>

                {/* Performance Indicator */}
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/5 border border-brand-gold/10 px-3 py-1 rounded-sm">
                  <Sparkles className="h-3 w-3" />
                  {rev.impact}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
