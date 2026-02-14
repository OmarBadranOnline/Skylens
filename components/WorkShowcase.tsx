import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Grid3X3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects, projectCategories } from '../src/data/projects';

export const WorkShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeFilter === "ALL"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Helper to determine grid span based on index (only applied when ALL is active for the mosaic look)
  const getGridClass = (index: number) => {
    if (activeFilter !== "ALL") return "col-span-1 row-span-1 h-[300px]"; // Standard grid when filtering

    // Mosaic Pattern for 8 items
    // 0: Large Square (2x2)
    // 1: Wide (2x1)
    // 2: Standard
    // 3: Tall (1x2)
    // 4: Standard
    // 5: Standard
    // 6: Wide (2x1)
    // 7: Standard

    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2 h-[600px]";
      case 1: return "md:col-span-2 md:row-span-1 h-[300px]";
      case 3: return "md:col-span-1 md:row-span-2 h-[600px]";
      case 6: return "md:col-span-2 md:row-span-1 h-[300px]";
      default: return "col-span-1 row-span-1 h-[300px]";
    }
  };

  return (
    <section className="bg-black py-20 relative z-20 overflow-hidden min-h-screen">

      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] z-10" />
        <div className="absolute top-20 right-0 text-[20rem] font-black text-white/5 font-display leading-none select-none">
          WORKS
        </div>
        <div className="absolute bottom-40 left-10 text-[10rem] font-black text-white/5 font-display leading-none select-none">
          ARCHIVE
        </div>
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Grid3X3 className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">Mission Log</span>
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black text-white leading-none">
              SELECTED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">PROJECTS</span>
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 md:mt-0">
            <div className="flex flex-wrap gap-2 md:justify-end">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest border transition-all duration-300 clip-path-slant ${activeFilter === cat
                      ? 'bg-orange-600 border-orange-600 text-black font-bold'
                      : 'bg-transparent border-gray-800 text-gray-400 hover:border-white hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Wall / Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 auto-flow-dense">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-orange-500/50 transition-colors ${getGridClass(index)}`}
                onClick={() => navigate(`/project/${project.id}`)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Tech Overlays (Corners) */}
                <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-orange-500"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-orange-500"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-orange-500"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-orange-500"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="bg-orange-600 text-black text-[10px] font-bold px-2 py-0.5 font-mono uppercase">
                      {project.category}
                    </span>
                    <div className="h-px flex-grow bg-white/20"></div>
                  </div>

                  <div className="flex justify-between items-end">
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-white leading-none group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>

                    <button className="bg-white/10 p-3 rounded-full backdrop-blur hover:bg-orange-500 hover:text-black transition-all duration-300 -rotate-45 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-400 text-xs font-mono mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 line-clamp-2 max-w-[80%]">
                    {project.description}
                  </p>
                </div>

                {/* Center Play Icon (Simulated) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 backdrop-blur-sm">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .clip-path-slant {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
        }
      `}</style>
    </section>
  );
};