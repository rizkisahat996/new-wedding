'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/components/translations';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="font-script text-5xl md:text-6xl mb-6 text-center text-burgundy">{t.ourJourney}</h2>
        
        <div className="flex justify-center items-center mb-12">
          <div className="h-px w-16 bg-gold"></div>
          <img
            src="/icons/bird.svg"
            alt="Dove"
            width={40}
            height={40}
            className="mx-4"
          />
          <div className="h-px w-16 bg-gold"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((imageNum, index) => (
            <div 
              key={index}
              className={`
                relative overflow-hidden rounded-lg shadow-xl 
                ${index === 2 || index === 3 ? 'md:col-span-1' : ''}
                transform transition-all duration-500
                ${hoveredIndex === index ? 'scale-[1.02]' : ''}
              `}
              style={{
                transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: `rotate(${hoveredIndex === index ? '0deg' : index % 2 === 0 ? '-2deg' : '2deg'})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-3 bg-white">
                <div className="relative">
                  <Image
                    src={`/images/couple-${imageNum + 1}.jpeg`}
                    alt="Alfredo and Mei"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    style={{
                      transition: 'all 0.5s ease',
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    style={{ opacity: hoveredIndex === index ? 0.7 : 0 }}
                  >
                    <img
                      src="https://api.iconify.design/mdi:heart.svg?color=white"
                      alt="Heart"
                      width={60}
                      height={60}
                      className="animate-pulse"
                    />
                  </div>
                </div>
                
                <div className="text-center pt-3 pb-1">
                  <p className="italic font-serif text-sm text-gray-600">
                    {index === 0 && t.firstDate}
                    {index === 1 && t.missionTrip}
                    {index === 2 && t.proposalDay}
                    {index === 3 && t.preWedding}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}