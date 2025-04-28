'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/components/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-16 bg-dark text-ivory relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <img
          src="https://api.iconify.design/mdi:flower-outline.svg?color=white"
          alt="Decorative flower"
          width={120}
          height={120}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <img
          src="https://api.iconify.design/mdi:flower-outline.svg?color=white"
          alt="Decorative flower"
          width={120}
          height={120}
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <img
            src="https://api.iconify.design/mdi:cross-outline.svg?color=gold"
            alt="Cross"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div>
        
        <h3 className="font-script text-4xl md:text-5xl mb-4 golden-text">Alfredo & Mei</h3>
        
        <p className="text-xl mb-2 font-elegant tracking-widest">{t.date2}</p>
        
        <div className="w-16 h-px bg-gold mx-auto my-8 opacity-70"></div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-ivory hover:text-gold transition-colors duration-300 p-2">
            <img
              src="https://api.iconify.design/mdi:instagram.svg?color=white"
              alt="Instagram"
              width={28}
              height={28}
              className="hover:scale-110 transition-transform"
            />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-ivory hover:text-gold transition-colors duration-300 p-2">
            <img
              src="https://api.iconify.design/mdi:facebook.svg?color=white"
              alt="Facebook"
              width={28}
              height={28}
              className="hover:scale-110 transition-transform"
            />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
        
        <a 
          href="https://wa.me/62811603636?text=Hello,%20I%20would%20like%20to%20confirm%20my%20attendance"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 rounded-md"
        >
          {t.rsvpNow}
        </a>
      </div>
    </footer>
  );
}