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
                            <object
                                data="/resume.pdf"
                                type="application/pdf"
                                className="w-full h-full block"
                                onLoad={() => setIsLoading(false)}
                                onError={() => setIsLoading(false)}
                            >
                                {/* Fallback for browsers (mainly mobile) that don't inline PDFs */}
                                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                    <p className="text-[var(--text-secondary)] mb-4">
                                        This browser doesn't support inline PDFs.
                                    </p>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-red)] text-white rounded-lg font-medium"
                                    >
                                        <Download size={18} />
                                        Download PDF
                                    </a>
                                </div>
                            </object>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/*
  ==============================
  RESUME MODAL COMPONENT
  ==============================
  Full-screen modal for viewing the PDF resume with:
  - Embedded PDF viewer using iframe
  - Zoom controls
  - Download button
  - Smooth open/close animations
  - Keyboard support (Escape to close)
  - Click outside to close
*/

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const { t } = useLanguage();
    const [zoom, setZoom] = useState(100);
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

    // Zoom controls
    const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50));
    const handleZoomReset = () => setZoom(100);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 modal-backdrop"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-4 md:inset-8 z-50 flex flex-col bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] shadow-2xl overflow-hidden"
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                            {/* Title */}
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-8 bg-[var(--accent-red)] rounded-full" />
                                <h2 className="text-lg md:text-xl font-bold">{t.resume.title}</h2>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-2">
                                {/* Zoom Controls */}
                                <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                                    <button
                                        onClick={handleZoomOut}
                                        className="p-1.5 rounded hover:bg-[var(--bg-secondary)] transition-colors"
                                        title="Zoom Out"
                                    >
                                        <ZoomOut size={18} />
                                    </button>
                                    <span className="w-12 text-center text-sm font-medium">{zoom}%</span>
                                    <button
                                        onClick={handleZoomIn}
                                        className="p-1.5 rounded hover:bg-[var(--bg-secondary)] transition-colors"
                                        title="Zoom In"
                                    >
                                        <ZoomIn size={18} />
                                    </button>
                                    <button
                                        onClick={handleZoomReset}
                                        className="p-1.5 rounded hover:bg-[var(--bg-secondary)] transition-colors"
                                        title="Reset Zoom"
                                    >
                                        <RotateCcw size={16} />
                                    </button>
                                </div>

                                {/* Download Button */}
                                <motion.a
                                    href="/resume.pdf"
                                    download="Akkaraphon_Worakleeb_Resume.pdf"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white gradient-red transition-all"
                                >
                                    <Download size={18} />
                                    <span className="hidden sm:inline">{t.resume.download}</span>
                                </motion.a>

                                {/* Close Button */}
                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-lg hover:bg-[var(--accent-red)] hover:text-white transition-all"
                                    title={t.resume.close}
                                >
                                    <X size={22} />
                                </motion.button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 relative overflow-auto bg-[var(--bg-card)]">
                            {/* Loading State */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-card)]">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 border-4 border-[var(--accent-red)] border-t-transparent rounded-full animate-spin" />
                                        <p className="text-[var(--text-secondary)]">{t.resume.loading}</p>
                                    </div>
                                </div>
                            )}

                            {/* PDF iframe - Using Google PDF Viewer as fallback, or direct embed */}
                            <div
                                className="w-full h-full flex justify-center p-4"
                                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                            >
                                <iframe
                                    src="/resume.pdf"
                                    className="w-full max-w-4xl h-full rounded-lg border border-[var(--border-color)] bg-white"
                                    title="Resume PDF"
                                    onLoad={() => setIsLoading(false)}
                                    onError={() => setIsLoading(false)}
                                />
                            </div>

                            {/* Fallback message if PDF doesn't load */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-[var(--text-secondary)]">
                                <p>
                                    Can&apos;t see the PDF? {' '}
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--accent-red)] underline hover:no-underline"
                                    >
                                        Open in new tab
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
