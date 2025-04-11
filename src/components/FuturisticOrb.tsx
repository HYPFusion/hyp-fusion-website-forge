import React from 'react';
import { motion } from 'framer-motion';

const FuturisticOrb = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Background Glow - Simplified */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Center Content - Optimized */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gradient">HYP FUSION</span>
        </motion.div>
      </div>

      {/* Simplified Orbiting Elements */}
      <div className="absolute inset-0">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-2 h-2 rounded-full bg-primary/30"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(j * Math.PI / 2) * 100}%, ${Math.sin(j * Math.PI / 2) * 100}%)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: j * 0.5,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticOrb;
