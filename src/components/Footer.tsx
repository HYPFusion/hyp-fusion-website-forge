import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="grid-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:work@hypfusion.com?subject=Inquiry%20from%20Website&body=Hello%20HYP%20Fusion%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services." 
                className="flex items-center gap-2 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:work@hypfusion.com?subject=Inquiry%20from%20Website&body=Hello%20HYP%20Fusion%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.';
                }}
              >
                <Mail className="text-primary" size={20} />
                <span>work@hypfusion.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Connect With Us</h3>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/hypfusion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                title="Connect on LinkedIn"
              >
                <Linkedin className="text-primary" size={24} />
              </a>

              {/* Email */}
              <a 
                href="mailto:work@hypfusion.com?subject=Inquiry%20from%20Website&body=Hello%20HYP%20Fusion%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                title="Send us an email"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:work@hypfusion.com?subject=Inquiry%20from%20Website&body=Hello%20HYP%20Fusion%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.';
                }}
              >
                <Mail className="text-primary" size={24} />
              </a>

              {/* Location */}
              <a 
                href="https://www.google.com/maps/place/Gurgaon,+Haryana,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                title="View our location"
              >
                <MapPin className="text-primary" size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HYP Fusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
