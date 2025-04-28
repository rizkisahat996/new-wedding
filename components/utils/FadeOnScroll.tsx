'use client';

import { useEffect } from 'react';

export default function FadeOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return null;
}