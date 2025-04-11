
import React, { useEffect, useState } from 'react';
import { Circle, PartyPopper, Sparkles } from 'lucide-react';

// CSS-based animated orb component
const FuturisticOrb = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    // Short delay to ensure CSS animations trigger properly
    const timer = setTimeout(() => setAnimationStarted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      {/* Main glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full 
                        bg-gradient-to-br from-primary/90 to-blue-500/70 
                        shadow-[0_0_80px_20px_rgba(109,127,255,0.4)] 
                        ${animationStarted ? 'animate-pulse-slow' : ''}`}>
          
          {/* Inner core */}
          <div className="absolute inset-[15%] rounded-full 
                         bg-gradient-to-br from-white/20 to-primary/30 
                         backdrop-blur-sm"></div>
          
          {/* Orbiting particles */}
          <div className="orbit-particles">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={`absolute w-3 h-3 rounded-full bg-white/90 
                          blur-[2px] shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
                          orbit-particle-${i + 1}`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  left: `${50 + 42 * Math.cos(i * (Math.PI / 4))}%`,
                  top: `${50 + 42 * Math.sin(i * (Math.PI / 4))}%`
                }}
              />
            ))}
          </div>
          
          {/* Dynamic sparkles */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <Sparkles 
                key={`sparkle-${i}`}
                className={`absolute text-white/70 w-6 h-6 sparkle-${i + 1}`}
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `scale(${0.8 + Math.random() * 0.6})`,
                  opacity: 0.7
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Outer ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full 
                        border-4 border-primary/20 
                        ${animationStarted ? 'animate-spin-slow' : ''}`}></div>
      </div>
      
      {/* Secondary rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-[360px] h-[360px] md:w-[400px] md:h-[400px] rounded-full 
                        border border-blue-400/30 
                        ${animationStarted ? 'animate-spin-slow-reverse' : ''}`}></div>
      </div>
      
      {/* Floating circles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <Circle 
            key={`circle-${i}`}
            className={`absolute text-primary/30 floating-circle-${i + 1}`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              width: `${Math.random() * 12 + 8}px`,
              height: `${Math.random() * 12 + 8}px`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-[60px]"></div>
      
      {/* Extra particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute bg-white/60 rounded-full particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Add CSS animations to head */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.95); opacity: 0.9; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
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
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .particle {
          animation: float 10s ease-in-out infinite;
        }
        
        .sparkle-1, .sparkle-2, .sparkle-3, .sparkle-4, .sparkle-5 {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .floating-circle-1, .floating-circle-2, .floating-circle-3, 
        .floating-circle-4, .floating-circle-5, .floating-circle-6, 
        .floating-circle-7, .floating-circle-8, .floating-circle-9, 
        .floating-circle-10 {
          animation: float 8s ease-in-out infinite;
        }
        
        .orbit-particle-1, .orbit-particle-2, .orbit-particle-3, 
        .orbit-particle-4, .orbit-particle-5, .orbit-particle-6, 
        .orbit-particle-7, .orbit-particle-8 {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FuturisticOrb;
