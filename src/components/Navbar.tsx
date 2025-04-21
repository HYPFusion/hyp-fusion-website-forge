
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== scrolled) {
        // Use requestAnimationFrame for smoother state updates
        requestAnimationFrame(() => setScrolled(scrolled));
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (isOpen) setIsOpen(false);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Approach', href: '#approach' },
    { title: 'Values', href: '#values' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-primary flex items-center gap-2">
              <img src="/images/logo.svg" alt="HYP FUSION Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 ease-in-out hover:scale-105"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile nav toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden glass-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-900 rounded-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ x: 10 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
