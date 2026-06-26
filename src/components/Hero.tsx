import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Play, Calendar, X, Volume2, VolumeX, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Hero() {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // High-fidelity royalty-free cinematic placeholder loops
  const bgVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41851-large.mp4";
  const showreelVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-screen-with-code-42866-large.mp4";

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clientLogos = [
    { name: 'Aether Media', text: 'ÆTHER' },
    { name: 'Vortex Labs', text: 'VORTEX' },
    { name: 'Nova Studios', text: 'NOVA.ST' },
    { name: 'Sensus Sound', text: 'SENSUS' },
    { name: 'Chronos VFX', text: 'CHRONOS' },
  ];

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-brand-charcoal bg-grid-pattern-dark text-white' : 'bg-white bg-grid-pattern text-brand-charcoal'
      }`}
    >
      {/* Background Cinematic Video for Dark Mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-15 mix-blend-screen"
          >
            <source src={bgVideoUrl} type="video/mp4" />
          </video>
          {/* Vignette & Gradients for seamless integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/40 via-transparent to-brand-charcoal/40" />
        </div>
      )}

      {/* Background Subtle Gradient Glow for Light Mode */}
      {theme === 'light' && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-grey/5 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Stylized Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 border text-[11px] font-mono tracking-wide ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10 text-[#a3a3a3]'
              : 'bg-gray-50 border-gray-200 text-[#757575]'
          }`}
        >
          <span className="w-1.5 h-1.5 bg-[#FBC02D] rounded-full shrink-0" />
          BEYOND CREATIVITY
        </motion.div>

        {/* Cinematic Headline with Horizontal Gold Flare Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tighter leading-[1.05] mb-6 max-w-4xl"
        >
          Cinematic Video & <br />
          <span className={`inline-block px-1 ${theme === 'dark' ? 'dark-text-flare-gradient' : 'text-flare-gradient'}`}>
            Immersive Sound
          </span>
          .<br />
          Beyond Creativity.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-brand-grey'
          }`}
        >
          <span className="font-semibold text-brand-gold">Media Genium Multimedia</span> is your premier partner for high-impact commercial video production, pristine sound engineering, and stunning visual branding.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-20 w-full sm:w-auto"
        >
          {/* Primary CTA: View Showreel Modal */}
          <button
            onClick={() => setShowModal(true)}
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#FBC02D] text-[#1A1A1A] font-bold text-sm tracking-widest uppercase rounded-sm hover:brightness-105 transition-all duration-300 gold-glow-hover active:scale-95 cursor-pointer"
          >
            <Play className="h-4 w-4 fill-current" />
            View Our Showreel
          </button>

          {/* Secondary CTA: Book a Call */}
          <a
            href="#contact"
            onClick={handleScrollToForm}
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95 ${
              theme === 'dark'
                ? 'border-white/20 text-white hover:bg-white/5 bg-transparent'
                : 'border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-black'
            }`}
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
        </motion.div>
      </div>

      {/* Social Proof Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`w-full max-w-7xl mx-auto border-t py-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4 ${
          theme === 'dark' ? 'border-white/5' : 'border-brand-charcoal/5'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
          <p className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-brand-grey'}`}>
            A trusted name in professional multimedia production
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((logo) => (
            <span
              key={logo.name}
              className={`font-display font-black text-xl tracking-widest opacity-25 hover:opacity-100 transition-opacity duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-brand-charcoal'
              }`}
              title={logo.name}
            >
              {logo.text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* High-Fidelity Showreel Video Player Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/95 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl rounded-sm overflow-hidden bg-brand-charcoal border border-white/10 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-brand-charcoal/60">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Media Genium - Showreel 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Mute/Unmute */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                  {/* Close */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Aspect Ratio Video Container */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={showreelVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Brief details overlay */}
              <div className="px-6 py-4 bg-brand-charcoal/90 text-sm text-gray-400 border-t border-white/5 flex items-center justify-between">
                <span>Engaging Cinematic Showcases</span>
                <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold">Beyond Creativity</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
