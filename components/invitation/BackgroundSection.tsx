'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/components/translations';
import Image from 'next/image';

export default function BackgroundSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Only apply parallax effect when section is visible
      if (scrollPosition > sectionTop - window.innerHeight && 
          scrollPosition < sectionTop + sectionHeight) {
        const yValue = (scrollPosition - sectionTop) * 0.4;
        section.style.backgroundPositionY = `-${yValue}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-36 bg-center bg-cover"
      style={{ backgroundImage: 'url("/images/couple-1.jpeg")' }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-60 backdrop-blur-[1px]"></div>
      
      <div className="relative container mx-auto px-4 text-center text-ivory">
        <img
          src="https://api.iconify.design/mdi:flower-tulip.svg?color=white"
          alt="Flower"
          width={60}
          height={60}
          className="mx-auto mb-8 opacity-80"
        />
        
        <h2 className="font-script text-5xl md:text-6xl mb-8 golden-text">{t.ourLoveStory}</h2>
        
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>
        
        <div className="max-w-2xl mx-auto bg-dark bg-opacity-40 p-8 rounded-lg backdrop-blur-sm">
          <p className="text-lg md:text-xl mb-6 fade-on-scroll text-neutral-200">
            {t.loveStoryPart1}
          </p>
          
          <p className="text-lg md:text-xl mb-10 fade-on-scroll text-neutral-200">
            {t.loveStoryPart2}
          </p>
          
          <div className="flex justify-center items-center my-8">
            <div className="h-px w-12 bg-gold opacity-70"></div>
            <img
              src="https://api.iconify.design/mdi:heart-multiple.svg?color=gold"
              alt="Hearts"
              width={30}
              height={30}
              className="mx-3 opacity-80"
            />
            <div className="h-px w-12 bg-gold opacity-70"></div>
          </div>
          
          <p className="text-xl md:text-2xl italic font-script mt-8 golden-text fade-on-scroll">
            &ldquo;{t.bibleVerse3}&rdquo;
          </p>
          <p className="text-md md:text-lg mt-2 font-elegant fade-on-scroll">
            — {t.bibleReference3}
          </p>
        </div>
      </div>
    </section>
  );
}