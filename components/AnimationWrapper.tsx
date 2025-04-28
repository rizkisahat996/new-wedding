'use client';

import React from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export default function AnimationWrapper({ children, className, delay = "0s" }: AnimationWrapperProps) {
  return (
    <div 
      className={className} 
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}