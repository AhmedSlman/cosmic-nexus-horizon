
import React, { useEffect } from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  useEffect(() => {
    // Create stars dynamically
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        
        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.classList.add('animate-star-twinkle');
        
        starsContainer.appendChild(star);
      }
    }
  }, []);
  
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Stars background container */}
      <div id="stars-container" className="absolute inset-0 z-0"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 z-0">
        <div className="absolute inset-0 border-2 border-nexus-blue rounded-full animate-pulse-glow"></div>
        <div className="absolute inset-[50px] border border-nexus-purple rounded-full animate-rotate-slow"></div>
        <div className="absolute inset-[150px] border border-nexus-blue/50 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Welcome to the Future
          </h1>
          
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white glow-text">
              Innovating the Future, One Pixel at a Time
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-nexus-blue to-nexus-purple mx-auto mt-8"></div>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We are a cutting-edge tech company creating immersive digital experiences that bridge the gap between imagination and reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-nexus-blue to-nexus-purple hover:from-nexus-blue/90 hover:to-nexus-purple/90 text-white px-8 py-6 rounded-md font-rajdhani text-lg">
              Explore Services
            </Button>
            <Button variant="outline" className="border-nexus-blue text-white hover:bg-nexus-blue/20 px-8 py-6 rounded-md font-rajdhani text-lg">
              <span className="mr-2">Our Projects</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-nexus-space to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-nexus-blue mb-2">Scroll Down</span>
        <div className="w-6 h-6 border-b-2 border-r-2 border-nexus-blue transform rotate-45"></div>
      </div>
    </div>
  );
};

export default Hero;
