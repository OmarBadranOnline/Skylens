import React from 'react';
import { motion } from 'framer-motion';

export const LifestyleSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center border-t border-b border-zinc-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <iframe
          className="w-full h-full scale-[1.5] pointer-events-none grayscale-[20%] contrast-125 brightness-75"
          src="https://www.youtube.com/embed/9WzIAMkRkU8?autoplay=1&mute=1&loop=1&playlist=9WzIAMkRkU8&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=15"
          title="Lifestyle Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 w-full flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
             <h2 className="font-display text-5xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-2xl">
                PURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">ADRENALINE</span>
             </h2>
             
             <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-12 bg-white/30"></div>
                <p className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
                  CHASING MOMENTS
                </p>
                <div className="h-px w-12 bg-white/30"></div>
             </div>
          </motion.div>
      </div>
      
      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-transparent z-30"></div>
    </section>
  );
};