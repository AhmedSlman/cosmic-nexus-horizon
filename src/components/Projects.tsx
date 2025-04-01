
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Outfit Styler",
      category: "AI & Mobile App",
      image: "/outfit-styler.png",
      description: "AI-powered fashion coordination app that analyzes user preferences and provides personalized outfit recommendations.",
      technologies: ["Flutter", "TensorFlow", "Firebase"]
    },
    {
      title: "PharmConnect",
      category: "Sales Representative App",
      image: "/pharm-connect.png",
      description: "A comprehensive tool for pharmaceutical sales representatives to manage client interactions and track inventory.",
      technologies: ["React Native", "GraphQL", "AWS"]
    },
    {
      title: "ChildFind",
      category: "DNA Identification System",
      image: "/child-find.png", 
      description: "Revolutionary DNA-based identification system to locate and reunite missing children with their families.",
      technologies: ["Python", "Bioinformatics API", "Blockchain"]
    },
    {
      title: "NexTalk",
      category: "Chat Application",
      image: "/nex-talk.png",
      description: "Secure and feature-rich messaging platform with end-to-end encryption and multimedia support.",
      technologies: ["WebRTC", "Socket.io", "React"]
    },
    {
      title: "ShopSphere",
      category: "E-commerce Platform",
      image: "/shop-sphere.png",
      description: "Category-based e-commerce solution with advanced filtering, recommendation engine, and secure payment processing.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"]
    }
  ];
  
  // Replace missing images with placeholder design
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder.svg';
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-nexus-dark/50 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that push the boundaries of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative">
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img 
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="object-cover w-full h-full"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nexus-space via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-nexus-blue/80 text-white text-sm px-3 py-1 rounded-full mb-3 inline-block">
                  {projects[activeProject].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {projects[activeProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="bg-nexus-dark/70 text-nexus-blue text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-nexus-blue to-nexus-purple hover:from-nexus-blue/90 hover:to-nexus-purple/90">
                  View Project <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeProject === index 
                  ? 'bg-gradient-to-r from-nexus-blue/20 to-nexus-purple/20 border border-nexus-blue/50' 
                  : 'bg-nexus-dark/70 hover:bg-nexus-dark border border-transparent'}`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden mr-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      onError={handleImageError}
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeProject === index ? 'text-white' : 'text-gray-300'}`}>
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="border-nexus-blue text-white hover:bg-nexus-blue/20 mt-auto">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
