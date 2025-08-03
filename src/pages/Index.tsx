import React from 'react';
import ObsidianLogo from '@/components/ObsidianLogo';
import { HeroSection } from '@/components/HeroSection';
import { AboutAlpha } from '@/components/AboutAlpha';
import { MuscleWorship } from '@/components/MuscleWorship';
import { FindomDomination } from '@/components/FindomDomination';
import { Testimonials } from '@/components/Testimonials';
import { FinalCallToKneel } from '@/components/FinalCallToKneel';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <HeroSection />
      <AboutAlpha />
      <MuscleWorship />
      <FindomDomination />
      <Testimonials />
      <FinalCallToKneel />
      <footer className="relative z-10 border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <ObsidianLogo size="sm" />
              <span className="micro-label uppercase tracking-wider">
                FLEXMASTERJOE — SUPERIOR JOCK ALPHA
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="micro-label">FINDOM</span>
              <span className="micro-label">•</span>
              <span className="micro-label">2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;