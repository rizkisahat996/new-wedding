'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimationWrapper from '@/components/AnimationWrapper';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/components/translations';

interface HeroProps {
  guestName: string;
}

export default function Hero({ guestName }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [sparkles, setSparkles] = useState<{left: string, top: string, delay: string}[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
    }));
    
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/couple-5.jpeg"
          alt="Alfredo and Mei"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-dark bg-opacity-50 backdrop-blur-[2px]"></div>
        
        {sparkles.map((sparkle, index) => (
          <div 
            key={index}
            className="sparkle" 
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-ivory px-4 max-w-4xl mx-auto">
        <AnimationWrapper className="inline-block mb-8" delay="0s">
          <img
            src="/icons/cross.svg"
            alt="Ornate Cross"
            width={60}
            height={60}
            className="mx-auto animate-golden-glow"
          />
        </AnimationWrapper>
        
        <AnimationWrapper className="font-elegant text-4xl md:text-6xl mb-8 animate-fade-in leading-relaxed tracking-wider" delay="0.3s">
          <div>
            <span className="font-script golden-text text-5xl md:text-7xl">{guestName}</span>
          </div>
          <div className="mt-4 text-neutral-200">
            {guestName.toLowerCase().includes('family') 
              ? t.cordiallyInvitedPlural 
              : t.cordiallyInvited}
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper className="font-elegant text-3xl md:text-4xl mb-12 animate-slide-up text-neutral-200" delay="0.6s">
          {t.toTheSacredUnion}
        </AnimationWrapper>
        
        <AnimationWrapper className="font-script text-6xl md:text-8xl mb-12 animate-slide-up golden-text" delay="0.9s">
          Alfredo & Mei
        </AnimationWrapper>
        
        <div className="w-28 h-1 bg-gold mx-auto mb-12"></div>
        
        <AnimationWrapper className="text-xl md:text-2xl italic font-serif animate-slide-up ornate-border" delay="1.2s">
          "{t.bibleVerse1}"
          <div className="mt-3 text-right font-elegant text-lg">
            {t.bibleReference1}
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper className="mt-12 animate-slide-up" delay="1.5s">
          <a 
            href="#details" 
            className="px-8 py-3 rounded-full border-2 border-gold text-ivory hover:bg-gold hover:text-dark transition-all duration-500 group"
          >
            <span className="mr-2">{t.viewDetails}</span>
            <img 
              src="https://api.iconify.design/mdi:chevron-down.svg?color=white" 
              alt="Down Arrow"
              width={20}
              height={20}
              className="inline animate-float group-hover:text-dark"
            />
          </a>
        </AnimationWrapper>
      </div>
    </section>
  );
}