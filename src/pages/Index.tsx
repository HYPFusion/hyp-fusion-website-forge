
import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Values from '@/components/Values';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background glowing effects */}
      <div className="fixed top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] z-0 animate-pulse-slow" />
      <div className="fixed bottom-1/3 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[150px] z-0 animate-pulse-slow animation-delay-400" />
      
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Values />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
