import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { crew } from '../src/data/crew';

export const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % crew.length);
    }, 4000); // 2 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">THE CREW</h2>
          <div className="h-1 w-20 bg-orange-500"></div>
        </div>

        {/* Progress Bar for the large number of crew */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-orange-500 font-mono text-sm">{(currentIndex + 1).toString().padStart(2, '0')}</span>
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / crew.length) * 100}%` }}
            />
          </div>
          <span className="text-gray-600 font-mono text-sm">{crew.length.toString().padStart(2, '0')}</span>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-[500px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-md mx-auto px-6 relative z-10"
          >
            {/* Card Container */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-orange-500/50 transition-colors shadow-2xl group">

              {/* Main Image */}
              <img
                src={crew[currentIndex].image}
                alt={crew[currentIndex].name}
                className="w-full h-full object-cover"
              />

              {/* Fallback Overlay if image fails or for styling uniformity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

              {/* Name Overlay (In case the card image doesn't have it, or to reinforce it) */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-px bg-orange-500"></div>
                  <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">Member ID: {crew[currentIndex].id}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white uppercase leading-none drop-shadow-md">
                  {crew[currentIndex].name}
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Background Blur Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 blur-3xl">
          <img
            src={crew[currentIndex].image}
            className="w-1/2 h-1/2 object-cover"
            alt="blur-bg"
          />
        </div>
      </div>
    </section>
  );
};