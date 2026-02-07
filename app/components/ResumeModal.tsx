'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

/*
  ==============================
  RESUME MODAL COMPONENT (Optimized)
  ==============================
  - Removed CSS Zoom (Performance Bottleneck)
  - Uses native <object> for better PDF embedding
  - HW Accelerated Animations
  - "Open in New Tab" fallback for Mobile/Compatibility
*/

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(true);

    // Handle Escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Low blur for performance */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        style={{ willChange: 'opacity' }}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }} // smooth ease-out-quintish
                        className="fixed inset-4 md:inset-10 z-50 flex flex-col bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] shadow-2xl overflow-hidden"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                            {/* Title */}
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-[var(--accent-red)] rounded-full" />
                                <h2 className="text-lg font-bold tracking-tight">{t.resume.title}</h2>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-3">
                                {/* Download Button */}
                                <a
                                    href="/resume.pdf"
                                    download="Akkaraphon_Worakleeb_Resume.pdf"
                                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white gradient-red hover:shadow-lg hover:shadow-red-500/20 transition-all text-sm"
                                >
                                    <Download size={16} />
                                    <span>{t.resume.download}</span>
                                </a>

                                {/* Open New Tab (Mobile Friendly) */}
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                    title="Open in new tab"
                                >
                                    <ExternalLink size={20} />
                                </a>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-[var(--accent-red)]/10 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
                                    title={t.resume.close}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 relative bg-[var(--bg-card)] w-full h-full">
                            {/* Loading State Overlay */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 bg-[var(--bg-card)]">
                                    <div className="flex flex-col items-center gap-3 animate-pulse">
                                        <div className="w-8 h-8 border-2 border-[var(--accent-red)] border-t-transparent rounded-full animate-spin" />
                                        <p className="text-sm text-[var(--text-secondary)] font-medium">Loading...</p>
                                    </div>
                                </div>
                            )}

                            {/* Native Object Embed - Better Performance than Iframe for PDF */}
                            {/* Native Iframe - Better for Mobile Scroll/Zoom than Object */}
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-full block rounded-lg bg-white"
                                title="Resume PDF"
                                style={{ border: 'none' }}
                                onLoad={() => setIsLoading(false)}
                            />

                            {/* Mobile Overlay: Force Open in New Tab if Iframe interaction is poor */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-red)] text-white font-bold rounded-full shadow-xl animate-bounce"
                                >
                                    <ExternalLink size={18} />
                                    Tap to Zoom/Scroll Full PDF
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}


