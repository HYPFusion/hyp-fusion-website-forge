import React, { useRef, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    projects: Array<{
      title: string;
      description: string;
    }>;
  };
}

const ServiceDetails = ({ isOpen, onClose, service }: ServiceDetailsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Triple the projects for infinite scroll effect
  const duplicatedProjects = [...service.projects, ...service.projects, ...service.projects];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isHovered = false;
    let speed = 0.5; // Base scroll speed
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered && scrollContainer) {
        // Smooth scroll animation
        setScrollPosition(prev => {
          const newPosition = prev + speed * (delta / 16); // Normalize by 60fps
          
          // Reset position when reaching the end
          if (newPosition >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
            return 0;
          }
          return newPosition;
        });

        scrollContainer.scrollTop = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      lastTimestamp = performance.now(); // Reset timestamp to prevent jump
    };

    // Smooth scroll wheel handling
    const handleWheel = (e: WheelEvent) => {
      if (isHovered) {
        e.preventDefault();
        const newPosition = scrollContainer.scrollTop + e.deltaY * 0.5;
        scrollContainer.scrollTo({
          top: newPosition,
          behavior: 'smooth'
        });
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollPosition]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[85vw] w-[85vw] bg-black/95 border-primary/20 text-white h-[80vh] max-h-[80vh] overflow-hidden">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-4xl font-bold">
            <span className="text-gradient">{service.title}</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300 mt-3 text-xl">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-y-auto custom-scrollbar pr-4 scroll-smooth"
          style={{
            height: 'calc(80vh - 160px)',
            maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
          }}
        >
          <div className="space-y-8 max-w-4xl mx-auto pb-8">
            <AnimatePresence>
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                  className="glass-card p-8 rounded-xl hover:border-primary/30 transition-all transform-gpu"
                >
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetails; 