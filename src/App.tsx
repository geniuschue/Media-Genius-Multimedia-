import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import GeniusStudio from './components/GeniusStudio';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans transition-colors duration-500 bg-bg text-text-primary selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden relative">
        {/* Animated Cinematic Background */}
        <AnimatedBackground />

        {/* Sticky Header with Backdrop Blur and Theme Toggle */}
        <Header />

        {/* Hero Hook: Cinematic & Dual-Theme responsive */}
        <main className="relative z-10">
          <Hero />

          {/* Selected Works Portfolio Grid with hover looping silent previews */}
          <Portfolio />

          {/* Staggered Services Breakdown (The Genium Method) */}
          <Services />

          {/* Deep Dive into Genius Multimedia Studio guidelines */}
          <GeniusStudio />

          {/* Social Proof / Verified ROI testimonials */}
          <Testimonials />

          {/* Conversational Lead Capture Engine: Inverted background theme contrast */}
          <LeadCapture />
        </main>

        {/* Detailed Footer, physical location nodes, legal sitemaps */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
