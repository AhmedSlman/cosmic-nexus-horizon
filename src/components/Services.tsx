
import React, { useState } from 'react';
import { Smartphone, Globe, Share2, Palette, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mobile');
  
  const services = [
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <Smartphone size={24} />,
      description: 'We create cross-platform mobile applications using Flutter that provide native-like experiences across iOS and Android devices.',
      features: ['Flutter expertise', 'Cross-platform development', 'Intuitive UI/UX', 'Offline functionality', 'API integration']
    },
    {
      id: 'web',
      title: 'Website Design & Development',
      icon: <Globe size={24} />,
      description: 'Our team builds responsive websites and web applications that engage users and drive business growth.',
      features: ['React & Next.js', 'Responsive design', 'Performance optimization', 'SEO-friendly code', 'Content management']
    },
    {
      id: 'marketing',
      title: 'Social Media Marketing',
      icon: <Share2 size={24} />,
      description: 'We help businesses expand their reach through strategic social media management and targeted ad campaigns.',
      features: ['Platform setup', 'Content creation', 'Ad campaign management', 'Analytics & reporting', 'Community engagement']
    },
    {
      id: 'design',
      title: 'Branding & Graphic Design',
      icon: <Palette size={24} />,
      description: 'Our creative team designs stunning visuals that communicate your brand story and captivate your audience.',
      features: ['Visual identity', 'Print materials', 'Motion graphics', 'Video production', 'Brand guidelines']
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Solutions',
      icon: <Database size={24} />,
      description: 'We develop intelligent systems that analyze data, make predictions, and automate processes to drive innovation.',
      features: ['Predictive analytics', 'Natural language processing', 'Computer vision', 'Custom AI models', 'Data pipeline integration']
    }
  ];
  
  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="py-24 relative nexus-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions to propel your business into the future
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all",
                activeTab === service.id 
                  ? "bg-gradient-to-r from-nexus-blue to-nexus-purple text-white glow-border" 
                  : "bg-nexus-dark hover:bg-nexus-dark/80 text-gray-300"
              )}
            >
              <span className={activeTab === service.id ? "text-white" : "text-nexus-blue"}>
                {service.icon}
              </span>
              <span>{service.title}</span>
            </button>
          ))}
        </div>
        
        {activeService && (
          <div className="bg-nexus-dark/70 backdrop-blur-md rounded-lg p-8 border border-nexus-blue/30 glow-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{activeService.title}</h3>
                <p className="text-gray-300 mb-6">{activeService.description}</p>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-nexus-blue rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-nexus-blue/20 to-nexus-purple/20 rounded-lg blur-xl animate-pulse-glow"></div>
                <div className="relative bg-nexus-dark rounded-lg h-full flex items-center justify-center p-8">
                  <div className="text-8xl text-nexus-blue/20">{activeService.icon}</div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="h-1 w-full bg-gradient-to-r from-nexus-blue to-nexus-purple"></div>
                    <div className="mt-4 flex justify-between">
                      <span className="text-nexus-blue">01</span>
                      <span className="text-nexus-blue">05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
