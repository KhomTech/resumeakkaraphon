'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Home } from 'lucide-react';
import Link from 'next/link';

/*
  ==============================
  RESUME PAGE - FULL SCREEN PDF VIEWER
  ==============================
  - Dedicated page for viewing resume
  - Back button to return to portfolio
  - Download button
  - Optimized for viewing
*/

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    {/* Back Button */}
                    <Link
                        href="https://resumeakkaraphon.vercel.app/"
                        className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="text-red-500 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-medium text-white/90">กลับหน้าหลัก</span>
                    </Link>

                    {/* Title */}
                    <div className="hidden sm:flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                        <h1 className="text-lg font-bold text-white tracking-tight">
                            Resume — Akkaraphon Worakleeb
                        </h1>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Open in New Tab */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/70 hover:text-white"
                            title="เปิดในแท็บใหม่"
                        >
                            <ExternalLink size={18} />
                        </a>

                        {/* Download */}
                        <a
                            href="/resume.pdf"
                            download="Akkaraphon_Worakleeb_Resume.pdf"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">ดาวน์โหลด</span>
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* PDF Viewer */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 relative"
            >
                {/* PDF iframe - Full height */}
                <iframe
                    src="/resume.pdf"
                    className="w-full h-full min-h-[calc(100vh-80px)] border-0"
                    title="Resume PDF"
                    style={{
                        background: 'white',
                    }}
                />

                {/* Mobile Floating Button */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:hidden z-50">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full shadow-2xl shadow-red-500/40 animate-pulse"
                    >
                        <ExternalLink size={18} />
                        แตะเพื่อซูม/เลื่อนดู
                    </a>
                </div>
            </motion.main>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-4 border-t border-white/10 bg-[#0a0a0a]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
                    <p>© 2025 Akkaraphon Worakleeb</p>
                    <Link
                        href="https://resumeakkaraphon.vercel.app/"
                        className="flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                        <Home size={14} />
                        resumeakkaraphon.vercel.app
                    </Link>
                </div>
            </motion.footer>
        </div>
    );
}
