import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Crosshair, Battery, Wifi, Aperture } from 'lucide-react';

export const DroneFollower: React.FC = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Smooth out the scroll value for smoother animations
  const smoothScroll = useSpring(scrollY, { stiffness: 60, damping: 20 });
  
  // Transform scroll into a slight bobbing motion for the camera (simulating handheld/gimbal)
  const yOffset = useTransform(smoothScroll, (latest: number) => Math.sin(latest / 100) * 10);
  const rotateZ = useTransform(smoothScroll, (latest: number) => Math.sin(latest / 200) * 2); // Very subtle sway

  useEffect(() => {
    const handleScroll = () => {
      // Show camera only after passing the initial 3D hero section (approx 80vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* --- HUD OVERLAY --- */}
      
      {/* Top Bar */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-red-900/20 px-3 py-1 rounded border border-red-500/30">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
            <span className="font-mono text-red-500 text-xs tracking-widest">REC [RAW]</span>
          </div>
          <span className="font-mono text-white/50 text-xs">ISO 800</span>
          <span className="font-mono text-white/50 text-xs">4K 120FPS</span>
          <span className="font-mono text-white/50 text-xs">T2.1</span>
        </div>

        <div className="flex items-center gap-4 text-white/70">
           <Aperture className="w-4 h-4" />
           <Battery className="w-4 h-4" />
           <span className="font-mono text-xs">14.4V</span>
        </div>
      </div>

      {/* Center Crosshair - Cinema Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="w-16 h-[1px] bg-white"></div>
        <div className="h-16 w-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-32 border border-white/30 rounded-sm"></div>
      </div>

      {/* Safe Area Guides */}
      <div className="absolute inset-12 border border-white/10 rounded-lg"></div>
      <div className="absolute inset-24 border border-dashed border-white/5 rounded-lg"></div>

      {/* --- VISUAL CAMERA COMPANION --- */}
      {/* Fixed position relative to viewport, animating gently */}
      <motion.div 
        className="absolute bottom-10 right-10 w-64 h-64 md:w-80 md:h-80"
        style={{ 
          y: yOffset,
          rotateZ,
          perspective: 1000
        } as any}
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 50
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          x: { duration: 0.5 }
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Cinema Camera Image */}
          {/* Using an image with a dark background and using mix-blend-mode to integrate it nicely */}
          <img 
            src="https://images.unsplash.com/photo-1594951471026-97bc201eb913?q=80&w=1000&auto=format&fit=crop" 
            alt="Cinema Camera Rig" 
            className="w-full h-full object-contain"
            style={{ 
               mixBlendMode: 'lighten', // Blends the black background of the image with the scene
               filter: 'contrast(1.1) brightness(1.2) drop-shadow(0 0 15px rgba(255,170,0,0.1))',
            }}
          />
          
          {/* Tally Light (Red Dot) on Camera */}
          <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
          
          {/* LCD Glow Simulation */}
          <div className="absolute top-[40%] left-[30%] w-8 h-6 bg-blue-500/20 blur-md rounded-full animate-pulse"></div>

        </div>
      </motion.div>
    </div>
  );
};