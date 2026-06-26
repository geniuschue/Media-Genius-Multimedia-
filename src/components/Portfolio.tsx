import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Play, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Project {
  id: string;
  title: string;
  category: string;
  roi: string;
  videoUrl: string;
  staticImage: string;
}

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'audio' | 'brand'>('all');

  const projects: Project[] = [
    {
      id: 'proj-1',
      title: 'Aether Cyber-Chic campaign',
      category: 'video',
      roi: '+240% Audience Retention',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-silver-makeup-and-jewelry-40439-large.mp4',
      staticImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'proj-2',
      title: 'Vortex Sonic Ecosystem',
      category: 'audio',
      roi: '+310% Brand Memorability',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-dj-controlling-the-sound-level-34075-large.mp4',
      staticImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'proj-3',
      title: 'Nova Rebranding Ecosystem',
      category: 'brand',
      roi: '+180% Site Engagement',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-light-streaks-of-digital-information-42867-large.mp4',
      staticImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'proj-4',
      title: 'Chronos Real-time Metaverse',
      category: 'video',
      roi: '+450% Virtual Interaction',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-three-dimensional-neon-cubes-on-black-background-40097-large.mp4',
      staticImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=60',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className={`py-24 transition-colors duration-500 border-t ${
        theme === 'dark' 
          ? 'bg-brand-charcoal border-white/5 text-white' 
          : 'bg-white border-brand-charcoal/5 text-brand-charcoal'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">PROOF OF CAPABILITY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
              Selected <span className="text-brand-gold">Masterpieces</span>
            </h2>
          </div>

          {/* Dynamic Category Filtering */}
          <div className={`flex flex-wrap gap-2 border p-1.5 rounded-sm ${
            theme === 'dark' ? 'bg-[#222222] border-[#2D2D2D]' : 'bg-gray-50 border-gray-200'
          }`}>
            {(['all', 'video', 'audio', 'brand'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#FBC02D] text-[#1A1A1A] shadow-sm'
                    : 'text-brand-grey hover:text-brand-gold'
                }`}
              >
                {filter === 'all' ? 'Show All' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Full-width interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme as 'light' | 'dark'} />
          ))}
        </div>

        {/* Footnote statement */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-brand-grey">
            ALL PRODUCTIONS DELIVERED IN STUNNING ULTRA-HD RESOLUTION CUSTOM TAILORED FOR YOUR CHANNELS.
          </p>
        </div>

      </div>
    </section>
  );
}

/* Individual Project Card with Hover-to-Play Video Logic */
function ProjectCard({ project, theme }: { key?: string; project: Project; theme: 'light' | 'dark' }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Safe fallback if browsers block autoplay
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-sm overflow-hidden aspect-video group cursor-pointer border ${
        theme === 'dark' ? 'bg-[#222222] border-[#2D2D2D]' : 'bg-[#FAFAFA] border-gray-200'
      }`}
    >
      {/* Background Static Image */}
      <img
        src={project.staticImage}
        alt={project.title}
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Hover looping Silent Video Preview */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={project.videoUrl} type="video/mp4" />
      </video>

      {/* Visual Overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      {/* Info Overlay Panel */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
        
        {/* Top: Category Tag and Hover indicator */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold bg-[#FBC02D] text-[#1A1A1A] px-3 py-1 rounded-sm">
            {project.category}
          </span>
          <div className="p-2 bg-white/10 backdrop-blur-md rounded-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>

        {/* Bottom: Title & Conversion ROI statistics */}
        <div>
          <div className="flex items-center gap-2 text-[#FBC02D] font-mono font-bold text-xs tracking-wider mb-2">
            <TrendingUp className="h-4 w-4" />
            <span>ROI: {project.roi}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-brand-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 font-sans tracking-wide mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Hover to stream full immersive high-dynamic showreel preview.
          </p>
        </div>

      </div>

      {/* Decorative Golden Line Frame */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
