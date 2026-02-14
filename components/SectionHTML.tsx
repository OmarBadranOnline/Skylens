import React from 'react';
import { motion } from 'framer-motion';
import { VideoShowcase } from './VideoShowcase';
import { TeamCarousel } from './TeamCarousel';
import { WorkShowcase } from './WorkShowcase';
import { AutomotiveSection } from './AutomotiveSection';
import { NatureSection } from './NatureSection';
import { UrbanSection } from './UrbanSection';
import { Camera, Zap } from 'lucide-react';

export const SectionHTML: React.FC = () => {
  return (
    <div className="w-full text-white overflow-hidden">

      {/* --- SECTION 1: HERO (Transparent Overlay) --- */}
      <section className="h-screen w-full flex flex-col items-center justify-center pointer-events-none relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.5 }
          } as any)}
          className="text-center"
        >
          <h1 className="mb-8">
            <img src="/assets/images/Skylens_Logo.png" alt="SKY LENS" className="w-[500px] md:w-[700px] h-auto mx-auto object-contain drop-shadow-[0_0_20px_rgba(236,103,24,0.4)] filter brightness-110 contrast-125" />
          </h1>
          <p className="font-sans text-xl md:text-2xl tracking-[0.5em] text-orange-500 uppercase">
            Beyond Boundaries
          </p>
          <p className="mt-8 text-sm text-gray-400 font-mono">SCROLL TO TAKEOFF</p>
        </motion.div>
      </section>

      {/* --- CONTENT SECTIONS (Solid Backgrounds) --- */}
      <div className="relative z-20 bg-black">

        {/* SECTION: CINEMATIC */}
        <section className="min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden">
          {/* Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              {...({
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 }
              } as any)}
              className="z-10"
            >
              <div className="flex items-center gap-2 mb-4 text-orange-500">
                <Camera className="w-6 h-6" />
                <span className="font-mono text-sm tracking-widest uppercase">Precision Tracking</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-none">
                CINE<span className="text-gray-700">MATIC</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-l-2 border-orange-500 pl-6 max-w-md">
                We utilize heavy-lift drone platforms capable of carrying cinema-grade cameras (RED, ARRI) at speeds up to 100mph. Perfect for high-stakes automotive commercials and large-scale productions.
              </p>
            </motion.div>

            {/* Visual/Image */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 }
              } as any)}
              className="relative flex justify-center"
            >
              {/* Floating Image Container */}
              <div className="relative w-full max-w-md aspect-square">
                {/* Fake "PNG" utilizing a blended image or illustration */}
                <div className="absolute inset-0 animate-float-slow">
                  <img
                    src="/assets/images/Ad1.png"
                    alt="Cinema Camera Drone"
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,170,0,0.3)] mask-image-fade"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                  />
                </div>
                {/* Tech Circles */}
                <div className="absolute inset-0 border border-white/10 rounded-full scale-125 animate-spin-slower pointer-events-none"></div>
                <div className="absolute inset-0 border border-dashed border-orange-500/20 rounded-full scale-110 animate-reverse-spin pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION: IMMERSIVE */}
        <section className="min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden">
          {/* Background Element */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Visual/Image (Left on Desktop) */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 }
              } as any)}
              className="order-2 md:order-1 relative flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 animate-float-delayed">
                  <img
                    src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1000&auto=format&fit=crop"
                    alt="FPV Goggles"
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,100,255,0.3)]"
                    style={{
                      mixBlendMode: 'lighten',
                      filter: 'contrast(1.2) brightness(1.1)'
                    }}
                  />
                </div>
                {/* HUD Elements */}
                <div className="absolute top-10 right-0 bg-white/10 backdrop-blur px-3 py-1 text-xs font-mono rounded border-l-2 border-orange-500">
                  VEL: 120km/h
                </div>
                <div className="absolute bottom-20 left-0 bg-white/10 backdrop-blur px-3 py-1 text-xs font-mono rounded border-l-2 border-orange-500">
                  ALT: 450m
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              {...({
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 }
              } as any)}
              className="order-1 md:order-2 z-10 text-right md:text-right"
            >
              <div className="flex items-center justify-end gap-2 mb-4 text-orange-500">
                <span className="font-mono text-sm tracking-widest uppercase">First Person View</span>
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-none">
                IMMER<span className="text-gray-700">SIVE</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-r-2 border-orange-500 pr-6 max-w-md ml-auto">
                Experience the thrill of flight. Our custom-built FPV drones navigate tight spaces, dive down skyscrapers, and weave through architectural marvels to deliver shots that are physically impossible for traditional cameras.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EXISTING SECTIONS */}
        <VideoShowcase />
        <AutomotiveSection />
        <NatureSection />
        <UrbanSection />
        <WorkShowcase />
        <TeamCarousel />

        {/* CONTACT FORM */}
        <section className="min-h-screen w-full flex items-center justify-center py-20 bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
          <div className="bg-zinc-900/30 backdrop-blur-sm p-8 md:p-12 border border-zinc-800 w-full max-w-3xl relative">

            <div className="absolute -top-6 left-0 bg-orange-500 text-black font-bold px-4 py-1 text-sm font-mono">
              MISSION CONTROL
            </div>

            <div className="mb-10 text-center">
              <h2 className="font-display text-5xl font-bold mb-4 text-white">INITIATE PROJECT</h2>
              <p className="text-gray-400 font-mono text-sm">Fill out the flight plan below.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-xs text-orange-500 font-mono tracking-widest group-focus-within:text-white transition-colors">CALLSIGN (NAME)</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-700 p-3 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-800" placeholder="ENTER NAME" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs text-orange-500 font-mono tracking-widest group-focus-within:text-white transition-colors">FREQUENCY (EMAIL)</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-700 p-3 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-800" placeholder="ENTER EMAIL" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs text-orange-500 font-mono tracking-widest group-focus-within:text-white transition-colors">MISSION BRIEF</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-700 p-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder-gray-800" placeholder="DESCRIBE YOUR PROJECT PARAMETERS..."></textarea>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6">
                <div className="flex gap-4">
                  {/* FACEBOOK */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61557024400417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors group"
                    title="Facebook"
                  >
                    <div className="p-3 border border-gray-700 rounded-full group-hover:border-blue-600 group-hover:bg-blue-600/20 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </div>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/skylens_videos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors group"
                    title="Instagram"
                  >
                    <div className="p-3 border border-gray-700 rounded-full group-hover:border-pink-600 group-hover:bg-pink-600/20 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/201027351069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors group"
                    title="WhatsApp"
                  >
                    <div className="p-3 border border-gray-700 rounded-full group-hover:border-green-500 group-hover:bg-green-500/20 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
                    </div>
                  </a>
                </div>

                <button type="button" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 text-sm tracking-[0.2em] uppercase transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] clip-path-slant">
                  Launch Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-600 py-8 text-center text-xs font-mono border-t border-gray-900">
          © 2024 SKY LENS MEDIA AGENCY. ALL RIGHTS RESERVED. <br className="md:hidden" /> DEVELOPED BY OMAR BADRAN.
        </footer>

      </div>

      {/* Styles for Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slower {
          0% { transform: rotate(0deg) scale(1.25); }
          100% { transform: rotate(360deg) scale(1.25); }
        }
        @keyframes reverse-spin {
          0% { transform: rotate(360deg) scale(1.1); }
          100% { transform: rotate(0deg) scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-spin-slower { animation: spin-slower 20s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 25s linear infinite; }
      `}</style>
    </div>
  );
};