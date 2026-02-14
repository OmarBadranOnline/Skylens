import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../src/data/projects';

export const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === Number(id));

    useEffect(() => {
        if (!project) {
            //   navigate('/');
        }
    }, [project, navigate]);

    if (!project) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-zinc-900 text-white overflow-y-auto">
            {/* Navigation Header */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <button
                    onClick={() => navigate('/')}
                    className="bg-black/50 hover:bg-orange-500 text-white p-3 rounded-full backdrop-blur transition-all duration-300 border border-white/10 pointer-events-auto flex items-center gap-2 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline font-mono text-sm uppercase tracking-widest pl-2">Back to Base</span>
                </button>
            </div>

            {/* Hero Header */}
            <div className="h-[50vh] md:h-[60vh] w-full relative">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 pb-0">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-orange-500 font-mono text-xs tracking-widest uppercase bg-black/80 backdrop-blur px-3 py-1 rounded border border-orange-500/30">
                                    {project.category}
                                </span>
                                <span className="text-gray-400 font-mono text-xs">PROJECT ID: #{project.id.toString().padStart(3, '0')}</span>
                            </div>
                            <h1 className="font-display text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-6">{project.title}</h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Description Sidebar */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                Mission Brief
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-lg font-light">
                                {project.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-mono">CLIENT</span>
                                    <span className="text-white">Confidential</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-mono">DATE</span>
                                    <span className="text-white">2024.03.15</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-mono">PILOT</span>
                                    <span className="text-white">Sky Lens Team</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Media Gallery Grid */}
                    <div className="md:col-span-8 space-y-8">
                        {project.content.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="space-y-3 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                            >
                                <div className="w-full bg-black rounded-lg overflow-hidden border border-zinc-800 relative">
                                    {item.type === 'video' ? (
                                        <div className="aspect-video w-full relative">
                                            {/* Note: In a real app, handle video sources appropriately. 
                                Since these are often YouTube/Vimeo embeds in portfolio sites, iframe is used.
                                If using raw files, a <video> tag would be better. */}
                                            <iframe
                                                className="w-full h-full"
                                                src={item.src}
                                                title="Project Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="relative overflow-hidden">
                                            <img src={item.src} alt={item.caption || "Project detail"} className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                                        </div>
                                    )}
                                </div>
                                {item.caption && (
                                    <div className="flex items-center gap-2">
                                        <div className="h-px w-8 bg-orange-500"></div>
                                        <p className="text-xs text-gray-500 font-mono uppercase">{item.caption}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
