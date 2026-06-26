import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FormStep = 1 | 2 | 3 | 'success';

interface FormData {
  service: string;
  budget: string;
  name: string;
  email: string;
  brief: string;
}

export default function LeadCapture() {
  const { theme } = useTheme();
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    service: '',
    budget: '',
    name: '',
    email: '',
    brief: '',
  });

  // Inverse background values based on prompt requirement:
  // "Use Charcoal in light mode and White in dark mode"
  const sectionBgClass = theme === 'light' 
    ? 'bg-[#1A1A1A] text-white border-t border-white/5' 
    : 'bg-white text-brand-charcoal border-t border-brand-charcoal/5';

  const subtitleClass = theme === 'light' ? 'text-gray-400' : 'text-[#757575]';
  const labelClass = theme === 'light' ? 'text-gray-300' : 'text-brand-charcoal/80';
  const inputClass = theme === 'light'
    ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-brand-gold focus:bg-white/10 rounded-sm'
    : 'bg-brand-charcoal/5 border-brand-charcoal/10 text-brand-charcoal placeholder-brand-grey focus:border-brand-gold focus:bg-brand-charcoal/5 rounded-sm';

  const services = [
    'Cinematic Video Production',
    'Immersive Audio & Sound Design',
    'Brand Identity & Digital Design',
    '3D Animation & VFX',
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $30,000',
    '$30,000 - $100,000',
    '$100,000+',
  ];

  const handleSelectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setErrorMessage('');
  };

  const handleSelectBudget = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
    setErrorMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleNextStep = () => {
    if (step === 1 && !formData.service) {
      setErrorMessage('Please select a production service to proceed.');
      return;
    }
    if (step === 2 && !formData.budget) {
      setErrorMessage('Please select your target budget to proceed.');
      return;
    }
    setStep((prev) => (prev === 1 ? 2 : 3) as FormStep);
  };

  const handlePrevStep = () => {
    setErrorMessage('');
    setStep((prev) => (prev === 3 ? 2 : 1) as FormStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage('Name and email are required to generate your dossier.');
      return;
    }
    // Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate micro-interaction transition as requested: "Igniting Project..."
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 2200);
  };

  return (
    <section id="contact" className={`py-24 sm:py-32 transition-colors duration-500 relative overflow-hidden ${sectionBgClass}`}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-grid-pattern" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-wide mb-6 ${
            theme === 'light'
              ? 'bg-white/5 border-white/10 text-gray-400'
              : 'bg-gray-50 border-gray-200 text-[#757575]'
          }`}>
            <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-spin" />
            CONVERSION ENGINE V4
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 leading-tight">
            Ready to engineer your <br />
            <span className="text-brand-gold text-flare-gradient gold-glow">visual masterpiece?</span>
          </h2>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${subtitleClass}`}>
            Initialize your creative workflow. Follow our 3-step engine to map your project parameters directly into our pipeline.
          </p>
        </div>

        {/* Step Progress indicators */}
        {step !== 'success' && (
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-sm flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    step === s
                      ? 'bg-brand-gold text-brand-charcoal scale-110 shadow-md ring-4 ring-brand-gold/20'
                      : step > s
                      ? 'bg-brand-gold/40 text-white'
                      : theme === 'light'
                      ? 'bg-white/10 text-gray-500'
                      : 'bg-brand-charcoal/10 text-brand-grey'
                  }`}
                >
                  {step > s ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-[2px] w-12 sm:w-20 transition-all duration-500 ${
                      step > s ? 'bg-brand-gold' : theme === 'light' ? 'bg-white/10' : 'bg-brand-charcoal/10'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <div className={`rounded-sm p-8 sm:p-12 border ${
          theme === 'light' ? 'bg-[#222222] border-white/10' : 'bg-white border-gray-100 shadow-2xl'
        }`}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SERVICE REQUIRED */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-display font-bold">Step 1: Select Your Required Production Specialty</h3>
                <p className={`text-sm ${subtitleClass}`}>Choose the primary service category for your production requirements:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {services.map((srv) => {
                    const isSelected = formData.service === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleSelectService(srv)}
                        className={`p-5 rounded-sm border text-left font-semibold text-sm transition-all duration-300 flex items-center justify-between group ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(251,192,45,0.15)]'
                            : theme === 'light'
                            ? 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'
                            : 'border-gray-200 bg-brand-charcoal/5 text-brand-charcoal hover:border-brand-charcoal/20 hover:bg-brand-charcoal/10'
                        }`}
                      >
                        <span>{srv}</span>
                        <div className={`h-5 w-5 rounded-sm border flex items-center justify-center transition-all ${
                          isSelected ? 'bg-brand-gold border-brand-gold text-brand-charcoal' : 'border-current opacity-30 group-hover:opacity-100'
                        }`}>
                          {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: BUDGET RANGE */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-display font-bold">Step 2: Define Target Production Budget</h3>
                <p className={`text-sm ${subtitleClass}`}>Select the capital structure mapped to your production vision:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {budgets.map((bud) => {
                    const isSelected = formData.budget === bud;
                    return (
                      <button
                        key={bud}
                        type="button"
                        onClick={() => handleSelectBudget(bud)}
                        className={`p-5 rounded-sm border text-left font-semibold text-sm transition-all duration-300 flex items-center justify-between group ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(251,192,45,0.15)]'
                            : theme === 'light'
                            ? 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'
                            : 'border-gray-200 bg-brand-charcoal/5 text-brand-charcoal hover:border-brand-charcoal/20 hover:bg-brand-charcoal/10'
                        }`}
                      >
                        <span>{bud}</span>
                        <div className={`h-5 w-5 rounded-sm border flex items-center justify-center transition-all ${
                          isSelected ? 'bg-brand-gold border-brand-gold text-brand-charcoal' : 'border-current opacity-30 group-hover:opacity-100'
                        }`}>
                          {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONTACT DETAILS */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-display font-bold">Step 3: Share Your Project Details</h3>
                <p className={`text-sm ${subtitleClass}`}>Provide your contact info to schedule your creative review:</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider ${labelClass}`}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`px-5 py-3.5 rounded-sm border text-sm font-semibold outline-none transition-all ${inputClass}`}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider ${labelClass}`}>Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`px-5 py-3.5 rounded-sm border text-sm font-semibold outline-none transition-all ${inputClass}`}
                        placeholder="john@agency.com"
                      />
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="brief" className={`text-xs font-bold uppercase tracking-wider ${labelClass}`}>Brief Project Scope (Optional)</label>
                    <textarea
                      id="brief"
                      name="brief"
                      rows={3}
                      value={formData.brief}
                      onChange={handleInputChange}
                      className={`px-5 py-4 rounded-sm border text-sm font-semibold outline-none transition-all resize-none ${inputClass}`}
                      placeholder="Outline any specific requirements, deadlines, or timelines..."
                    />
                  </div>
                </form>
              </motion.div>
            )}

            {/* SUCCESS WINDOW */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center gap-6"
              >
                {/* Radial glow success indicator */}
                <div className="h-16 w-16 rounded-sm bg-brand-gold flex items-center justify-center text-brand-charcoal animate-bounce shadow-[0_0_20px_rgba(251,192,45,0.4)]">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                  Project Parameters Engaged!
                </h3>
                
                <p className={`text-base max-w-xl mx-auto leading-relaxed ${subtitleClass}`}>
                  We have verified your credentials (<span className="text-brand-gold font-bold">{formData.email}</span>) and queued your production scope for: <span className="font-semibold text-brand-gold">{formData.service}</span>.
                </p>

                <div className={`mt-4 p-5 rounded-sm border text-left text-xs font-mono max-w-md w-full ${
                  theme === 'light' ? 'bg-white/5 border-white/5' : 'bg-brand-charcoal/5 border-brand-charcoal/5'
                }`}>
                  <p className="text-brand-gold font-bold uppercase mb-2">// PROJECT STATUS:</p>
                  <p>STATUS: DETAILS_RECEIVED</p>
                  <p>BUDGET CATEGORY: {formData.budget}</p>
                  <p>CREATIVE LEAD: Media Genium Multimedia</p>
                  <p className="mt-2 text-brand-grey">A creative consultant will contact you in under 4 business hours.</p>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({ service: '', budget: '', name: '', email: '', brief: '' });
                  }}
                  className={`mt-4 text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors ${
                    theme === 'light' ? 'text-white/60' : 'text-brand-charcoal/60'
                  }`}
                >
                  Restart Project Planner
                </button>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Dynamic Error Messaging */}
          {errorMessage && (
            <div className="mt-6 flex items-center gap-2 p-4 rounded-sm bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold animate-pulse">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Navigation Controls */}
          {step !== 'success' && (
            <div className="mt-10 pt-8 border-t border-dashed border-border-custom flex items-center justify-between">
              
              {/* Back Button */}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className={`flex items-center gap-2 px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-widest border transition-all active:scale-95 ${
                    theme === 'light' ? 'border-white/20 text-white hover:bg-white/5 bg-transparent' : 'border-[#1A1A1A] text-brand-charcoal hover:bg-brand-charcoal/5'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {/* Next/Submit Button */}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-brand-gold text-brand-charcoal hover:bg-[#E5AC20] transition-all gold-glow-hover active:scale-95 cursor-pointer"
                >
                  Next Step
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-brand-gold text-brand-charcoal hover:bg-[#E5AC20] transition-all gold-glow-hover active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-brand-charcoal border-t-transparent animate-spin" />
                      Igniting Project...
                    </>
                  ) : (
                    <>
                      Secure Presentation
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
