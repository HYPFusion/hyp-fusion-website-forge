
import React from 'react';
import { User, MapPin, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-black/80">
      <div className="grid-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Who We Are</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            HYP Fusion is a Gurgaon, India-based software development company dedicated to making cutting-edge artificial intelligence accessible to businesses, entrepreneurs, and tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl hover:border-primary/30 transition-all hover:translate-y-[-5px]">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <MapPin size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Location</h3>
            <p className="text-gray-300">
              Based in Gurgaon, India, we're positioned in one of Asia's most dynamic tech hubs, allowing us to blend global innovation with local expertise.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:border-primary/30 transition-all hover:translate-y-[-5px]">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Users size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-300">
              With a small, dynamic team of 2-10 employees, we bring together diverse talents united by a passion for AI innovation and problem-solving.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:border-primary/30 transition-all hover:translate-y-[-5px]">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <User size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              Empowering Tomorrow: We bridge the gap between AI advancements and real-world applications, making cutting-edge technology accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
