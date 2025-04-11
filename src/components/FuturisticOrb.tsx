
import React, { useEffect, useState } from 'react';
import { Circle, Sparkles, ArrowUpRight } from 'lucide-react';

// Professional-looking animated orb component
const FuturisticOrb = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    // Short delay to ensure CSS animations trigger properly
    const timer = setTimeout(() => setAnimationStarted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      {/* Main container with depth effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Primary orbital ring */}
        <div className={`absolute w-[350px] h-[350px] md:w-[380px] md:h-[380px] rounded-full 
                      border-[1px] border-primary/30 
                      ${animationStarted ? 'animate-spin-slow' : ''}`}>
          {/* Ring accents */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`accent-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/70"
              style={{
                left: `${50 + 49 * Math.cos(i * (Math.PI / 6))}%`,
                top: `${50 + 49 * Math.sin(i * (Math.PI / 6))}%`
              }}
            />
          ))}
        </div>
        
        {/* Secondary orbit ring */}
        <div className={`absolute w-[320px] h-[320px] md:w-[340px] md:h-[340px] rounded-full 
                        border-[1px] border-blue-400/20 
                        ${animationStarted ? 'animate-spin-slow-reverse' : ''}`}>
        </div>
        
        {/* Third orbit ring with dots */}
        <div className={`absolute w-[390px] h-[390px] md:w-[420px] md:h-[420px] rounded-full 
                        border-[0.5px] border-dashed border-primary/20
                        ${animationStarted ? 'animate-spin-slow' : ''}`}>
          {/* Connection dots */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`dot-${i}`}
              className={`absolute w-2 h-2 rounded-full bg-primary/60 
                        shadow-[0_0_5px_rgba(109,127,255,0.7)]`}
              style={{
                left: `${50 + 49 * Math.cos(i * (Math.PI / 4))}%`,
                top: `${50 + 49 * Math.sin(i * (Math.PI / 4))}%`
              }}
            />
          ))}
        </div>
        
        {/* Main orb with gradient */}
        <div className={`relative z-10 w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full 
                       bg-gradient-to-br from-primary/80 via-blue-500/60 to-primary/50
                       flex items-center justify-center
                       shadow-[0_0_50px_rgba(109,127,255,0.4)]
                       backdrop-blur-sm
                       ${animationStarted ? 'animate-pulse-slow' : ''}`}>
          
          {/* Company name at center */}
          <div className="text-center z-20">
            <div className="text-white font-bold tracking-wider text-3xl md:text-4xl">
              HYP<span className="text-2xl md:text-3xl"> </span>FUSION
            </div>
            <div className="mt-1 text-xs md:text-sm text-white/70">
              INNOVATION REDEFINED
            </div>
          </div>
          
          {/* Inner core glow */}
          <div className="absolute inset-[15%] rounded-full 
                         bg-gradient-to-br from-white/10 to-primary/20
                         backdrop-blur-sm"></div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Floating tech elements */}
        {[...Array(6)].map((_, i) => (
          <ArrowUpRight 
            key={`arrow-${i}`}
            className="absolute text-primary/30 floating-element"
            style={{
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 85 + 5}%`,
              width: `${Math.random() * 10 + 15}px`,
              height: `${Math.random() * 10 + 15}px`,
              animationDuration: `${Math.random() * 6 + 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Circular nodes */}
        {[...Array(8)].map((_, i) => (
          <Circle 
            key={`circle-${i}`}
            className="absolute text-primary/30 floating-element"
            style={{
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 85 + 5}%`,
              width: `${Math.random() * 8 + 8}px`,
              height: `${Math.random() * 8 + 8}px`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Sparkle effects */}
        {[...Array(4)].map((_, i) => (
          <Sparkles 
            key={`sparkle-${i}`}
            className="absolute text-white/40 sparkle-effect"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>
      
      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundSize: '20px 20px',
             backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)'
           }}
      ></div>
      
      {/* Add the CSS animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); }
            25% { transform: translateY(-8px) translateX(5px) rotate(5deg); }
            50% { transform: translateY(0) translateX(10px) rotate(0deg); }
            75% { transform: translateY(8px) translateX(5px) rotate(-5deg); }
            100% { transform: translateY(0) translateX(0) rotate(0deg); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(0.98); opacity: 0.9; }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes spin-slow-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 30s linear infinite;
          }
          
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 25s linear infinite;
          }
          
          .floating-element {
            animation: float 10s ease-in-out infinite;
          }
          
          .sparkle-effect {
            animation: sparkle 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FuturisticOrb;
