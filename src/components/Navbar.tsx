
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-nexus-dark/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nexus-blue to-nexus-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-white font-rajdhani font-bold text-xl md:text-2xl glow-text">NEXUS</span>
          </a>
          
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-nexus-blue transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-nexus-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="hidden lg:flex text-white border-nexus-blue hover:bg-nexus-blue/20 transition-all"
          >
            Get Started
          </Button>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-nexus-space/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 lg:hidden",
        isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
      )}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:text-nexus-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline"
            className="mt-6 text-white border-nexus-blue hover:bg-nexus-blue/20"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
