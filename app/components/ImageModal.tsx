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

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
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
                <div className="relative z-[100]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                    />

                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-4 right-4 z-[102] flex items-center gap-2"
                    >
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm p-1 rounded-full border border-white/10 text-white">
                            <button onClick={handleZoomOut} className="p-2 hover:bg-white/20 rounded-full transition-colors"><ZoomOut size={20} /></button>
                            <button onClick={handleReset} className="p-2 hover:bg-white/20 rounded-full transition-colors"><RotateCcw size={18} /></button>
                            <button onClick={handleZoomIn} className="p-2 hover:bg-white/20 rounded-full transition-colors"><ZoomIn size={20} /></button>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-3 bg-white/10 hover:bg-red-500 rounded-full text-white transition-colors backdrop-blur-sm"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>

                    {/* Image Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                        >
                            <div
                                className="relative transition-transform duration-200 ease-out"
                                style={{ transform: `scale(${scale})` }}
                            >
                                {/* We use a regular img tag for smoother zooming without Next.js Image wrapper constraints in modal often */}
                                {/* But Next/Image is fine if we size widely. Let's use img for raw behavior control specifically in zoom modal */}
                                <img
                                    src={imageSrc}
                                    alt={altText}
                                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
