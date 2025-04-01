
import React from 'react';
import { Rocket, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: 2015, title: "Company Founded", description: "Nexus was established with a vision to transform digital experiences." },
    { year: 2017, title: "First Major Project", description: "Released the groundbreaking Outfit Styler application." },
    { year: 2019, title: "International Expansion", description: "Opened offices in three new countries and doubled our team size." },
    { year: 2021, title: "Innovation Award", description: "Received the prestigious Global Technology Innovation Award." },
    { year: 2023, title: "AI Revolution", description: "Launched our proprietary AI platform for next-gen applications." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">About Nexus</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneers of digital innovation, exploring new frontiers in technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Vision</h3>
            <p className="text-gray-300 mb-6">
              At Nexus, we are a tech company specializing in developing futuristic digital solutions that transform businesses. Our team of expert engineers, designers, and strategists work collaboratively to create cutting-edge software, mobile applications, websites, and digital marketing campaigns.
            </p>
            <p className="text-gray-300">
              We believe that technology should not only be functional but also provide immersive experiences that captivate users. Our mission is to push the boundaries of what's possible, creating solutions that seem like they've arrived from the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-nexus-dark p-6 rounded-lg card-hover">
              <Rocket className="text-nexus-blue mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">Innovation</h4>
              <p className="text-gray-400">We continuously explore new technologies to stay at the cutting edge.</p>
            </div>
            
            <div className="bg-nexus-dark p-6 rounded-lg card-hover">
              <Zap className="text-nexus-purple mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">Performance</h4>
              <p className="text-gray-400">Our solutions are optimized for speed, efficiency, and scalability.</p>
            </div>
            
            <div className="bg-nexus-dark p-6 rounded-lg card-hover">
              <Users className="text-nexus-blue mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">Collaboration</h4>
              <p className="text-gray-400">We work closely with clients to bring their visions to life.</p>
            </div>
            
            <div className="bg-nexus-dark p-6 rounded-lg card-hover">
              <Award className="text-nexus-purple mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">Excellence</h4>
              <p className="text-gray-400">We pride ourselves on delivering exceptional quality in every project.</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">Our Journey</h3>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-nexus-blue/30 z-0"></div>
          
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
                  <h4 className="text-xl font-bold text-nexus-blue">{milestone.year}</h4>
                  <h5 className="text-xl font-bold text-white mb-2">{milestone.title}</h5>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
                
                <div className="w-10 h-10 bg-gradient-to-br from-nexus-blue to-nexus-purple rounded-full flex items-center justify-center flex-shrink-0 glow-border">
                  <span className="text-white font-bold">{milestone.year.toString().slice(-2)}</span>
                </div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
