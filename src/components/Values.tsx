
import React from 'react';
import { 
  Home, 
  Clock, 
  Target, 
  Rocket, 
  BookOpen, 
  MessageCircle, 
  Users, 
  BarChart, 
  Bot, 
  TrendingUp 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Update the interface to use LucideIcon type
const ValueItem = ({ icon: Icon, title }: { icon: LucideIcon, title: string }) => (
  <div className="flex items-center gap-4 glass-card p-4 rounded-lg hover:border-primary/30 transition-all">
    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
      <Icon size={20} className="text-primary" />
    </div>
    <span className="text-sm font-medium">{title}</span>
  </div>
);

const Values = () => {
  const values = [
    { icon: Home, title: "Remote First 🏡" },
    { icon: Clock, title: "Flexible Hours ⏳" },
    { icon: Target, title: "Results Driven 🎯" },
    { icon: Rocket, title: "Innovation Focused 🚀" },
    { icon: BookOpen, title: "Continuous Learning 📚" },
    { icon: MessageCircle, title: "Open Communication 🗣️" },
    { icon: Users, title: "Team Collaboration 🤝" },
    { icon: BarChart, title: "Work-Life Balance ⚖️" },
    { icon: Bot, title: "AI-Powered Efficiency 🤖" },
    { icon: TrendingUp, title: "Growth Mindset 📈" }
  ];

  return (
    <section id="values" className="section-padding bg-background">
      <div className="grid-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Values</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            Our culture and values define who we are and how we work. They guide our decisions and shape our relationships with clients and team members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <ValueItem 
              key={index} 
              icon={value.icon} 
              title={value.title} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
