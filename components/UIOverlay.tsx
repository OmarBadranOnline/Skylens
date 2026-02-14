import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export const UIOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position (similar threshold to floating button)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Menu Button (Always Visible) */}
      <div className="fixed top-6 right-6 z-50 pointer-events-auto text-white mix-blend-difference">
        <button className="hover:text-orange-500 transition-colors">
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Header Bar (Fades in on scroll) */}
      <div
        className={`fixed top-0 left-0 w-full p-6 z-40 pointer-events-none flex justify-between items-start text-white mix-blend-difference transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center gap-3">
          {/* Logo - Resized for symmetry as requested */}
          <img
            src="/assets/images/Skylens_Logo.png"
            alt="SKY LENS"
            className="w-32 md:w-40 h-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] filter brightness-110 contrast-125"
          />
        </div>
      </div>

      {/* Scroll Indicator (Hidden when scrolled) */}
      <div className={`fixed bottom-6 right-6 hidden md:block transition-opacity duration-500 ${!isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-end gap-1">
          <div className="w-px h-12 bg-orange-500/50 mb-2"></div>
          <span className="font-mono text-xs text-orange-500 writing-vertical rotate-180">SCROLL TO FLY</span>
        </div>
      </div>
    </>
  );
};