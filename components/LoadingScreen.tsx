import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture } from 'lucide-react';

interface LoadingScreenProps {
    onLoadingComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
        }, 2500); // Show for 2.5 seconds

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Central Camera Iris Animation */}
                    <div className="relative flex items-center justify-center">
                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-zinc-800 rounded-full w-64 h-64"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-zinc-700 rounded-full w-80 h-80 opacity-50"
                        />

                        {/* Logo/Icon */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 p-8"
                        >
                            <Aperture className="w-24 h-24 text-orange-500 animate-spin-slow drop-shadow-[0_0_20px_rgba(236,103,24,0.6)]" />
                        </motion.div>

                        {/* Scanning Line */}
                        <div className="absolute inset-0 w-full h-1 bg-orange-500/20 top-1/2 -translate-y-1/2 animate-scan pointer-events-none blur-sm"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <h2 className="font-display text-2xl font-bold text-white tracking-[0.5em] mb-2">INITIALIZING</h2>
                        <div className="w-32 h-1 bg-gray-900 rounded-full mx-auto overflow-hidden">
                            <motion.div
                                className="h-full bg-orange-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                    <style>{`
            @keyframes scan {
              0% { transform: translateY(-100px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(100px); opacity: 0; }
            }
            .animate-scan {
               animation: scan 2s linear infinite;
            }
          `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
