import React from 'react';
import { motion } from 'framer-motion';

export const AutomotiveSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden border-t border-zinc-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <video
          className="w-full h-full object-cover pointer-events-none grayscale-[20%] contrast-125 brightness-75"
          src="/assets/videos/Vid1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Main Content Layout */}
      <div className="relative z-20 w-full h-full container mx-auto px-6 md:px-12 flex items-center justify-start">

        {/* Text Content - Far Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 lg:w-1/2 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase">Sec.01 // TES</span>
            <div className="w-12 h-px bg-red-500"></div>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter drop-shadow-2xl leading-[0.9] mb-6 py-2">
            TES<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 pr-4">TECHNICAL</span>
          </h2>

          <p className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.3em] uppercase border-l-2 border-red-600 pl-6 max-w-md">
            Engineering Project
          </p>
        </motion.div>

      </div>

      {/* HUD Footer Splitter */}
      <div className="absolute bottom-0 w-full z-30 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        <div className="flex justify-between px-6 pb-4 pt-2">
          <span className="text-[10px] text-red-500/50 font-mono">COORD: 34.0522° N, 118.2437° W</span>
          <span className="text-[10px] text-red-500/50 font-mono">VELOCITY: MACH 0.2</span>
        </div>
      </div>
    </section>
  );
};