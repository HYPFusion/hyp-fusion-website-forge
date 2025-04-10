
import React from 'react';
import { Globe, Clock, PieChart, Code2 } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="section-padding bg-gradient-to-b from-black to-background">
      <div className="grid-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Approach</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            We combine flexibility, affordability, and expertise to deliver high-quality AI solutions that meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-8 md:p-10 h-full animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <Globe size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Availability</h3>
                <p className="text-gray-300 mb-auto">
                  Flexible engagement—remote or in-person at our Gurgaon headquarters.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <PieChart size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pricing</h3>
                <p className="text-gray-300 mb-auto">
                  Competitive rates starting at ₹80.00/hr (~$0.95 USD), tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 md:p-10 animate-fade-in animation-delay-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <Code2 size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-gray-300 mb-auto">
                  We use agile methods and open-source AI frameworks (like TensorFlow and PyTorch).
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <Clock size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                <p className="text-gray-300 mb-auto">
                  Efficient delivery with regular updates to keep you informed throughout the development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
