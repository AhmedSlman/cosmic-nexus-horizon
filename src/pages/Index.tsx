
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarsBg from '@/components/StarsBg';

const Index = () => {
  useEffect(() => {
    document.title = "Nexus - Innovating the Future";
    
    // Update head metadata
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Nexus is a cutting-edge tech company specializing in software development, mobile applications, website development, and digital marketing.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-nexus-space text-white overflow-x-hidden">
      <StarsBg />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
