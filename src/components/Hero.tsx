import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 md:pt-0">
      {/* Static background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute inset-0 opacity-20" 
      style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(109, 127, 255, 0.2) 0%, transparent 50%)',
        backgroundSize: '100% 100%',
          }}
        />
      </div>

      {/* Static tech grid */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #6d7fff 1px, transparent 1px), linear-gradient(to bottom, #6d7fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="grid-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-gradient">Transform</span>
              <br />
              <span className="text-white">Your Business with</span>
              <br />
              <span className="text-gradient">AI Innovation</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We specialize in cutting-edge AI solutions that drive growth, efficiency, and innovation for businesses of all sizes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#contact" 
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#services" 
                className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.a>
            </motion.div>

            {/* Feature highlights */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Code2 className="text-primary" size={20} />
                <span className="text-sm text-gray-300">Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="text-primary" size={20} />
                <span className="text-sm text-gray-300">AI Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="text-primary" size={20} />
                <span className="text-sm text-gray-300">Fast Delivery</span>
            </div>
            </motion.div>
          </motion.div>

          {/* Right content - Optimized HYP FUSION text */}
          <motion.div 
            className="flex-1 relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Simplified background effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
                
                {/* Single optimized ring */}
                <motion.div
                  className="absolute inset-0 border border-primary/40 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
          </div>
          
              {/* Main text with optimized animation */}
              <motion.div
                className="relative z-10 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                  <span className="text-gradient">HYP</span>
                  <br />
                  <span className="text-gradient">FUSION</span>
                </h2>
              </motion.div>

              {/* Reduced number of floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
