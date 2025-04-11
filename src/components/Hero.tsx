
import React from 'react';
import { ArrowRight } from 'lucide-react';
import FuturisticOrb from './FuturisticOrb';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback component for the entire FuturisticOrb if it fails
const OrbFallback = () => (
  <div className="relative w-full max-w-[500px]">
    <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-[50px]"></div>
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-48 h-48 mx-auto rounded-full bg-primary/30 animate-pulse"></div>
        <p className="text-gray-400 mt-4">Interactive visualization unavailable</p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16"
      style={{
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(109, 127, 255, 0.1) 0%, transparent 70%)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full filter blur-[80px] animate-pulse-slow animation-delay-200" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <span className="text-sm text-primary">Empowering Tomorrow with AI Innovation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">HYP FUSION</span>
              <br />
              <span className="text-white">Where Technology Meets Innovation</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Making cutting-edge artificial intelligence accessible to businesses, entrepreneurs, and tech enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium rounded-lg transition-all"
              >
                Explore Our Services
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in animation-delay-200">
            <ErrorBoundary FallbackComponent={OrbFallback}>
              <div className="relative w-full max-w-[500px]">
                {/* Glow effect behind orb */}
                <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-[50px]" />
                {/* 3D WebGL Animation or Fallback */}
                <FuturisticOrb />
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
