
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "/team-alex.png",
      bio: "Expert in AI and machine learning with 15 years of experience in tech leadership.",
      links: { linkedin: "#", twitter: "#", email: "alex@nexus.com" }
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "/team-sarah.png",
      bio: "Award-winning UX/UI designer specializing in creating immersive digital experiences.",
      links: { linkedin: "#", twitter: "#", email: "sarah@nexus.com" }
    },
    {
      name: "Marcus Johnson",
      role: "Technical Director",
      image: "/team-marcus.png",
      bio: "Full-stack developer with expertise in React, Flutter, and cloud architecture.",
      links: { linkedin: "#", twitter: "#", email: "marcus@nexus.com" }
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      image: "/team-priya.png",
      bio: "Digital marketing strategist with a background in psychology and consumer behavior.",
      links: { linkedin: "#", twitter: "#", email: "priya@nexus.com" }
    }
  ];
  
  // Replace missing images with generic avatars
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const index = parseInt(target.dataset.index || "0", 10);
    target.src = `https://api.dicebear.com/6.x/bottts/svg?seed=nexus${index}`;
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the brilliant minds behind Nexus innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden hexagon aspect-square mb-6 bg-gradient-to-br from-nexus-blue/20 to-nexus-purple/20 transition-all group-hover:from-nexus-blue/40 group-hover:to-nexus-purple/40">
                <div className="absolute inset-[3px] hexagon bg-nexus-dark overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full"
                    onError={handleImageError}
                    data-index={index}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexus-space to-transparent opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-nexus-dark/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex gap-4">
                      <a href={member.links.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nexus-dark hover:bg-nexus-blue hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.links.twitter} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nexus-dark hover:bg-nexus-blue hover:text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={`mailto:${member.links.email}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nexus-dark hover:bg-nexus-blue hover:text-white transition-colors">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-nexus-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-nexus-dark rounded-lg p-8 border border-nexus-blue/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who are passionate about pushing the boundaries of technology and creating exceptional digital experiences.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nexus-blue rounded-full"></div>
                  <span className="text-gray-300">Competitive salary and benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nexus-blue rounded-full"></div>
                  <span className="text-gray-300">Flexible work environment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nexus-blue rounded-full"></div>
                  <span className="text-gray-300">Opportunities for growth and learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nexus-blue rounded-full"></div>
                  <span className="text-gray-300">Work on cutting-edge projects</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-nexus-blue to-nexus-purple text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-medium">
                View Open Positions
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-nexus-blue/20 to-nexus-purple/20 rounded-lg blur-xl"></div>
              <div className="relative h-full w-full bg-nexus-dark/80 backdrop-blur-sm rounded-lg p-8 animate-space-float">
                <h4 className="text-xl font-bold text-white mb-4">We Value</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-nexus-blue mb-2">Innovation</h5>
                    <p className="text-gray-400">We encourage creative thinking and novel approaches to problem-solving.</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-nexus-purple mb-2">Collaboration</h5>
                    <p className="text-gray-400">We believe great ideas come from diverse teams working together.</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-nexus-blue mb-2">Excellence</h5>
                    <p className="text-gray-400">We strive for the highest standards in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
