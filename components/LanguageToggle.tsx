'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-dark bg-opacity-60 text-ivory rounded-full hover:bg-gold hover:text-dark transition-colors duration-300 backdrop-blur-sm flex items-center shadow-lg"
    >
      <span>{t.switchTo}</span>
      {language === 'id' ? (
        <img src="https://api.iconify.design/emojione-v1:flag-for-united-kingdom.svg" alt="UK Flag" className="ml-2 w-6 h-6" />
      ) : (
        <img src="https://api.iconify.design/emojione-v1:flag-for-indonesia.svg" alt="Indonesia Flag" className="ml-2 w-6 h-6" />
      )}
    </button>
  );
}