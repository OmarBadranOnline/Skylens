import React from 'react';
import { Play } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-60">
        <iframe 
          className="w-full h-full scale-150 pointer-events-none"
          src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=0&showinfo=0&modestbranding=1" 
          title="Showreel Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="inline-block mb-4 border border-orange-500/50 bg-black/50 backdrop-blur px-4 py-1 rounded-full">
           <span className="text-orange-500 text-xs font-mono tracking-[0.3em] uppercase">Showreel 2024</span>
        </div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter mix-blend-overlay">
          VISUAL STORYTELLING
        </h2>
        
        <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From high-speed FPV chases to cinematic architectural reveals, we capture the world from perspectives others can't reach.
        </p>

        {/* Custom Player UI */}
        <div className="group relative inline-flex items-center justify-center">
           <div className="absolute inset-0 bg-orange-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
           <button className="relative bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
             <Play className="fill-white w-8 h-8 ml-1" />
           </button>
        </div>
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    </section>
  );
};