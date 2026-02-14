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
                        {/* Logo/Icon */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 p-8"
                        >
                            <Aperture className="w-24 h-24 text-orange-500 animate-spin-slow drop-shadow-[0_0_20px_rgba(236,103,24,0.6)]" />
                        </motion.div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};
