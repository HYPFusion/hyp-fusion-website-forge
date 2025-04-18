import React, { useState } from 'react';
import { MessageSquare, Code, LineChart, CheckCircle2, BarChart4, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceDetails from './ServiceDetails';

interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  projects: Array<{
    title: string;
    description: string;
  }>;
}

const services: ServiceData[] = [
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Custom AI tools and platforms that automate tasks, generate insights, and enhance decision-making across your business.",
    projects: [
      {
        title: "AI-Powered Business Intelligence Tools",
        description: "Develop SaaS tools that leverage AI to provide real-time analytics, predictive insights, and data visualization for businesses."
      },
      {
        title: "Automated Customer Support Systems",
        description: "Create AI chatbots and virtual assistants that can handle customer inquiries, provide 24/7 support, and improve customer satisfaction."
      },
      {
        title: "AI-Driven Marketing Automation",
        description: "Build SaaS platforms that use AI to automate marketing tasks such as email campaigns, social media management, and customer segmentation."
      },
      {
        title: "Scalable Cloud Infrastructure Solutions",
        description: "Offer cloud-based SaaS solutions that can scale with business growth, ensuring high availability and performance."
      },
      {
        title: "AI for Content Creation",
        description: "Develop AI tools that can generate content, including blog posts, social media updates, and marketing materials, based on user inputs and preferences."
      }
    ]
  },
  {
    icon: Code,
    title: "SaaS Development",
    description: "Scalable, cloud-based AI tools and platforms designed for efficiency and growth, accessible from anywhere.",
    projects: [
      {
        title: "Customer Relationship Management (CRM) Platform",
        description: "A cloud-based CRM system that helps businesses manage customer interactions, track sales, and automate marketing efforts. Features include lead management, sales forecasting, and customer analytics."
      },
      {
        title: "Project Management Software",
        description: "A collaborative project management tool that allows teams to plan, execute, and monitor projects in real-time. Includes task assignment, progress tracking, and reporting features."
      },
      {
        title: "Human Resources Management System (HRMS)",
        description: "A comprehensive HRMS that streamlines recruitment, onboarding, performance management, and payroll processing. Features include employee self-service portals and analytics dashboards."
      },
      
    ]
  },
  {
    icon: CheckCircle2,
    title: "IT Consulting",
    description: "Expert guidance to integrate AI into your business, optimize processes, and unlock new opportunities.",
    projects: [
      {
        title: "AI Strategy and Implementation",
        description: "Provide consulting services to help businesses develop and implement AI strategies tailored to their specific needs and goals."
      },
      {
        title: "Custom AI Solutions",
        description: "Offer customized AI solutions that address unique business challenges, from data analysis to process automation."
      },
      {
        title: "AI Training and Workshops",
        description: "Conduct training sessions and workshops to upskill employees in AI technologies and best practices."
      },
      {
        title: "AI Audits and Assessments",
        description: "Perform audits to assess the current state of AI adoption in a business and provide recommendations for improvement."
      },
      {
        title: "Ethical AI Consulting",
        description: "Advise businesses on ethical considerations and compliance in AI implementation, ensuring responsible use of AI technologies."
      }
    ]
  },
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots",
    description: "Intelligent conversational interfaces that enhance customer service, streamline support, and provide 24/7 assistance.",
    projects: [
      {
        title: "Industry-Specific Chatbots",
        description: "Develop chatbots tailored to specific industries such as healthcare, finance, and e-commerce, addressing unique customer needs and queries."
      },
      {
        title: "Multilingual Chatbots",
        description: "Create chatbots that can communicate in multiple languages, enhancing global customer support and engagement."
      },
      {
        title: "AI-Powered Customer Service Automation",
        description: "Implement chatbots that can automate customer service tasks, reducing the workload on human agents and improving response times."
      },
      {
        title: "Conversational AI for Sales",
        description: "Develop chatbots that can assist in sales processes, from lead qualification to product recommendations, increasing conversion rates."
      },
      {
        title: "Internal Support Chatbots",
        description: "Create chatbots for internal use within organizations, providing quick answers to employee queries and improving operational efficiency."
      }
    ]
  },
  {
    icon: BarChart4,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automation that reduces manual tasks and increases productivity.",
    projects: [
      {
        title: "AI-Driven Process Optimization",
        description: "Implement AI to analyze and optimize workflows, identifying inefficiencies and suggesting improvements."
      },
      {
        title: "Automated Document Processing",
        description: "Use AI to automate the processing of documents, from data extraction to classification and routing."
      },
      {
        title: "Intelligent Task Allocation",
        description: "Develop AI systems that can allocate tasks to the most suitable team members based on their skills and workload."
      },
      {
        title: "Predictive Maintenance",
        description: "Implement AI to predict equipment failures and schedule maintenance, reducing downtime and maintenance costs."
      },
      {
        title: "Customer Service Automation",
        description: "Use AI to automate customer service tasks, from chatbots to automated email responses, improving customer satisfaction and response times."
      }
    ]
  },
  {
    icon: LineChart,
    title: "AI Trend Analysis",
    description: "Stay ahead with dashboards and tools that track emerging AI trends and provide actionable insights.",
    projects: [
      {
        title: "Real-Time Trend Monitoring",
        description: "Develop AI tools that monitor trends in real-time, providing up-to-date insights and alerts for businesses."
      },
      {
        title: "Predictive Trend Analysis",
        description: "Use AI to predict future trends based on historical data, helping businesses stay ahead of the curve."
      },
      {
        title: "Competitor Analysis",
        description: "Implement AI to analyze competitor activities and market positioning, providing strategic insights for businesses."
      },
      {
        title: "Customer Sentiment Analysis",
        description: "Use AI to analyze customer sentiments from social media, reviews, and surveys, helping businesses understand customer perceptions and preferences."
      },
      {
        title: "AI-Powered Market Research",
        description: "Develop AI tools that can conduct market research, from identifying target audiences to analyzing market trends and consumer behaviors."
      }
    ]
  }
];

const ServiceCard = ({ icon: Icon, title, description, onClick }: {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="glass-card p-6 rounded-xl cursor-pointer hover:border-primary/30 transition-all"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <section id="services" className="section-padding bg-black">
      <div className="grid-container">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What We Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl">
            At HYP Fusion, we specialize in AI-powered solutions, automation, and emerging AI trends. Our services are designed to help you leverage the power of artificial intelligence for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceDetails
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;
