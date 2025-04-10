
import React from 'react';
import { ArrowUp, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start flex-col md:flex-row border-b border-white/10 pb-8 mb-8">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary flex items-center mb-4">
              HYP FUSION
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              Making cutting-edge artificial intelligence accessible to businesses, entrepreneurs, and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/hyp-fusion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a 
                href="mailto:info@hypfusion.com" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail size={20} className="text-primary" />
              </a>
              <a 
                href="https://goo.gl/maps/SomeGurgaonLocation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <MapPin size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#values" className="text-gray-400 hover:text-primary transition-colors">Our Values</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">AI Solutions</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">SaaS Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">IT Consulting</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Custom AI Chatbots</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Gurgaon, Haryana, India</li>
                <li className="text-gray-400">info@hypfusion.com</li>
                <li className="text-gray-400">Starting at ₹80.00/hr</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HYP Fusion. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
