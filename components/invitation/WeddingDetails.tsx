'use client';

import React, { useEffect } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/components/translations';

export default function WeddingDetails() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="details" className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimationWrapper className="font-script text-5xl md:text-6xl mb-6 text-burgundy animate-fade-in">
            {t.ourSpecialDay}
          </AnimationWrapper>
          
          <div className="flex justify-center items-center mb-12">
            <div className="h-px w-16 bg-gold"></div>
            <img
              src="https://api.iconify.design/mdi:ring.svg?color=gold"
              alt="Wedding Rings"
              width={40}
              height={40}
              className="mx-4"
            />
            <div className="h-px w-16 bg-gold"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <AnimationWrapper className="p-8 bg-white shadow-lg rounded-lg fade-on-scroll transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ornate-border" delay="0.2s">
              <div className="text-gold text-3xl mb-4">
                <img
                  src="https://api.iconify.design/mdi:calendar-heart.svg?color=gold"
                  alt="Date"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-elegant text-2xl mb-3">{t.when}</h3>
              <p className="text-lg font-medium mb-1">{t.date}</p>
              <p className="text-lg">{t.time}</p>
            </AnimationWrapper>
            
            <AnimationWrapper className="p-8 bg-white shadow-lg rounded-lg fade-on-scroll transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ornate-border" delay="0.4s">
              <div className="text-gold text-3xl mb-4">
                <img
                  src="https://api.iconify.design/mdi:church.svg?color=gold"
                  alt="Church"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-elegant text-2xl mb-3">{t.ceremony}</h3>
              <p className="text-lg font-medium">{t.churchName}</p>
              <p className="text-lg mb-1">{t.churchAddress1}</p>
              <p className="text-lg">{t.churchAddress2}</p>
            </AnimationWrapper>
            
            <AnimationWrapper className="p-8 bg-white shadow-lg rounded-lg fade-on-scroll transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ornate-border" delay="0.6s">
              <div className="text-gold text-3xl mb-4">
                <img
                  src="https://api.iconify.design/mdi:glass-wine.svg?color=gold"
                  alt="Reception"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-elegant text-2xl mb-3">{t.reception}</h3>
              <p className="text-lg font-medium">{t.receptionVenue}</p>
              <p className="text-lg mb-1">{t.receptionAddress1}</p>
              <p className="text-lg">{t.receptionAddress2}</p>
            </AnimationWrapper>
          </div>
          
          <div className="floral-divider"></div>
          
          <AnimationWrapper className="bible-verse text-xl md:text-2xl max-w-2xl mx-auto mb-12 fade-on-scroll p-6 bg-white bg-opacity-80 rounded-lg shadow-lg" delay="0.8s">
            "{t.bibleVerse2}"
            <div className="mt-3 text-right font-elegant">— {t.bibleReference2}</div>
          </AnimationWrapper>
          
          <AnimationWrapper className="fade-on-scroll p-8 bg-white rounded-lg shadow-lg max-w-xl mx-auto" delay="1s">
            <img
              src="https://api.iconify.design/mdi:email-heart-outline.svg?color=burgundy"
              alt="RSVP"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="font-elegant text-3xl mb-4 text-burgundy">{t.rsvp}</h3>
            <p className="text-lg mb-4">
              {t.respondBy} <span className="font-medium">{t.rsvpDate}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center">
                <img
                  src="https://api.iconify.design/mdi:phone.svg?color=gold"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <p className="text-lg">0811-603-636</p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://api.iconify.design/mdi:email.svg?color=gold"
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <p className="text-lg">-</p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}