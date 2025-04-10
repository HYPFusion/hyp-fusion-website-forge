
import React from 'react';
import { MessageSquare, Code, LineChart, CheckCircle2, BarChart4, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Update the interface to use LucideIcon type
const ServiceCard = ({ icon: Icon, title, description, className }: { 
  icon: LucideIcon, 
  title: string, 
  description: string,
  className?: string
}) => (
  <div className={cn(
    "glass-card p-8 rounded-xl hover:border-primary/30 transition-all hover:translate-y-[-5px]",
    className
  )}>
    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
      <Icon size={28} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      description: "Custom AI tools and platforms that automate tasks, generate insights, and enhance decision-making across your business."
    },
    {
      icon: Code,
      title: "SaaS Development",
      description: "Scalable, cloud-based AI tools and platforms designed for efficiency and growth, accessible from anywhere."
    },
    {
      icon: CheckCircle2,
      title: "IT Consulting",
      description: "Expert guidance to integrate AI into your business, optimize processes, and unlock new opportunities."
    },
    {
      icon: MessageSquare,
      title: "Custom AI Chatbots",
      description: "Intelligent conversational interfaces that enhance customer service, streamline support, and provide 24/7 assistance."
    },
    {
      icon: BarChart4,
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation that reduces manual tasks and increases productivity."
    },
    {
      icon: LineChart,
      title: "AI Trend Analysis",
      description: "Stay ahead with dashboards and tools that track emerging AI trends and provide actionable insights."
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="grid-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What We Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            At HYP Fusion, we specialize in AI-powered solutions, automation, and emerging AI trends. Our services are designed to help you leverage the power of artificial intelligence for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              className={`animate-fade-in animation-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
