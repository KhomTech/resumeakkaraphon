'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import Image from 'next/image';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText?: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, altText = 'Image' }: ImageModalProps) {
    const [scale, setScale] = useState(1);

    // Reset scale when opening
    useEffect(() => {
        if (isOpen) setScale(1);
    }, [isOpen]);

    // Handle Escape key and Scroll Lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Lock body scroll
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = ''; // Unlock body scroll
        };
    }, [isOpen, onClose]);

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(prev => Math.max(prev - 0.5, 1));
    };

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setScale(1);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="relative z-[9999]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
                        style={{ willChange: 'opacity' }}
                    />

                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.1 }}
                        className="fixed top-6 right-6 z-[10000] flex items-center gap-4"
                    >
                        {/* Zoom Controls */}
                        <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            <button onClick={handleZoomOut} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Zoom Out">
                                <ZoomOut size={20} />
                            </button>
                            <button onClick={handleReset} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Reset">
                                <RotateCcw size={18} />
                            </button>
                            <button onClick={handleZoomIn} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Zoom In">
                                <ZoomIn size={20} />
                            </button>
                        </div>

                        {/* Close Button - Big & Clear */}
                        <button
                            onClick={onClose}
                            className="group flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105"
                        >
                            <span className="text-sm">Close</span>
                            <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                                <X size={18} />
                            </div>
                        </button>
                    </motion.div>

                    {/* Image Container */}
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                        >
                            <div
                                className="relative transition-transform duration-200 ease-linear origin-center will-change-transform flex items-center justify-center"
                                style={{ transform: `scale(${scale})` }}
                            >
                                <img
                                    src={imageSrc}
                                    alt={altText}
                                    className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl select-none"
                                    onClick={(e) => e.stopPropagation()}
                                    draggable={false}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        // Show fallback text or icon if image fails
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            const fallback = document.createElement('div');
                                            fallback.className = 'text-white text-2xl font-bold opacity-50 flex flex-col items-center gap-4';
                                            fallback.innerHTML = '<span>Image Not Found</span><span class="text-sm font-normal">Please upload profile.png</span>';
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
