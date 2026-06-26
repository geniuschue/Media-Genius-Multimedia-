import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export default function AnimatedBackground() {
  const { theme } = useTheme();

  // Floating ambient light blobs configuration
  const blobs = [
    {
      id: 'blob-1',
      color: theme === 'dark' ? 'bg-brand-gold/15' : 'bg-brand-gold/8',
      size: 'w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]',
      animate: {
        x: [0, 100, -50, 0],
        y: [0, -120, 80, 0],
        scale: [1, 1.15, 0.9, 1],
      },
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      position: 'top-12 left-10 md:left-20',
    },
    {
      id: 'blob-2',
      color: theme === 'dark' ? 'bg-brand-grey/20' : 'bg-brand-grey/10',
      size: 'w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]',
      animate: {
        x: [0, -80, 120, 0],
        y: [0, 100, -60, 0],
        scale: [1, 0.9, 1.1, 1],
      },
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      position: 'bottom-20 right-10 md:right-32',
    },
    {
      id: 'blob-3',
      color: theme === 'dark' ? 'bg-brand-gold/10' : 'bg-brand-gold/6',
      size: 'w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]',
      animate: {
        x: [0, 120, -100, 0],
        y: [0, 80, -120, 0],
        scale: [1, 1.2, 0.85, 1],
      },
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      position: 'top-1/2 left-1/3 -translate-y-1/2',
    },
  ];

  return (
    <div id="animated-bg" className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Light leaks / glowing blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full ${blob.color} ${blob.size} ${blob.position} blur-[100px] sm:blur-[140px] mix-blend-screen`}
          animate={blob.animate}
          transition={blob.transition}
        />
      ))}

      {/* Very subtle dynamic scanlines or tech lines representing film cells */}
      <div 
        className={`absolute inset-0 opacity-[0.015] ${
          theme === 'dark' 
            ? 'bg-radial-gradient' 
            : 'bg-none'
        }`}
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
}
