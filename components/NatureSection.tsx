import React from 'react';
import { motion } from 'framer-motion';

export const NatureSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden border-t border-zinc-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <iframe
          className="w-full h-full scale-[1.5] pointer-events-none grayscale-[10%] contrast-110 brightness-90"
          src="https://www.youtube.com/embed/hHeoT5L2vIQ?autoplay=1&mute=1&loop=1&playlist=hHeoT5L2vIQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=30"
          title="Nature Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Main Content Layout */}
      <div className="relative z-20 w-full h-full container mx-auto px-6 md:px-12 flex items-center justify-end">
          
          {/* Text Content - Far Right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 lg:w-1/2 text-right"
          >
             <div className="flex items-center justify-end gap-3 mb-4">
                <div className="w-12 h-px bg-emerald-500"></div>
                <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">Sec.02 // Terra</span>
             </div>
             
             <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter drop-shadow-2xl leading-[0.9] mb-6 py-2">
                TERRA<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 pr-4">FIRMA</span>
             </h2>
             
             <div className="flex justify-end">
                <p className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.3em] uppercase border-r-2 border-emerald-500 pr-6 max-w-md">
                   Untouched Landscapes captured from above.
                </p>
             </div>
          </motion.div>

      </div>
      
      {/* HUD Footer Splitter */}
      <div className="absolute bottom-0 w-full z-30 pointer-events-none">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
         <div className="flex justify-between px-6 pb-4 pt-2">
             <span className="text-[10px] text-emerald-500/50 font-mono">ELEVATION: 8000FT</span>
             <span className="text-[10px] text-emerald-500/50 font-mono">WIND: 12KTS NE</span>
         </div>
      </div>
    </section>
  );
};