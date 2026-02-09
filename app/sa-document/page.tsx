'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Home, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

/*
  ==============================
  SA DOCUMENT PAGE - SYSTEM ANALYSIS VIEWER
  ==============================
  - Full screen PDF viewer for Smart Health Service System documentation
  - Shows comprehensive SA documentation checklist
  - Back button to portfolio
*/

export default function SADocumentPage() {
    const documentationItems = [
        {
            section: '1. การวิเคราะห์ระบบ', items: [
                { id: '1.1', name: 'Fishbone Diagram & SWOT Analysis', done: true },
                { id: '1.2', name: 'System Request & System Scope Document', done: true },
                { id: '1.3', name: 'System Diagram', done: true },
                { id: '1.4', name: 'Use Case Diagram', done: true },
                { id: '1.5', name: 'Class Diagram', done: true },
                { id: '1.6', name: 'Data Flow Diagram Level 0 & 1', done: true },
                { id: '1.7', name: 'Data Flow Diagram Level 2', done: true },
                { id: '1.8', name: 'Activity Diagram', done: true },
                { id: '1.9', name: 'Sequence Diagram', done: true },
                { id: '1.10', name: 'Requirement Specification', done: true },
                { id: '1.11', name: 'User Interface Prototype (Figma)', done: true },
                { id: '1.12', name: 'Reports & Forms Design', done: true },
                { id: '1.13', name: 'Dialogue Diagram / Site Map', done: true },
            ]
        },
        {
            section: '2. การออกแบบฐานข้อมูล', items: [
                { id: '2.1', name: 'ER-Diagram', done: true },
                { id: '2.2', name: 'Relational Diagram / Data Schema', done: true },
                { id: '2.3', name: 'Normalization (1NF, 2NF, 3NF)', done: true },
                { id: '2.4', name: 'Data Dictionary', done: true },
            ]
        },
    ];

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
                    <div className="hidden md:flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                        <h1 className="text-lg font-bold text-white tracking-tight">
                            🏥 Smart Health Service System — System Analysis
                        </h1>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Open in New Tab */}
                        <a
                            href="/SA His Project07.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/70 hover:text-white"
                            title="เปิดในแท็บใหม่"
                        >
                            <ExternalLink size={18} />
                        </a>

                        {/* Download */}
                        <a
                            href="/SA His Project07.pdf"
                            download="SmartHealth_SystemAnalysis_Akkaraphon.pdf"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">ดาวน์โหลด</span>
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <div className="flex flex-1 flex-col lg:flex-row">
                {/* Sidebar - Documentation Checklist */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:w-80 xl:w-96 bg-[#111] border-b lg:border-b-0 lg:border-r border-white/10 p-6 overflow-y-auto max-h-[40vh] lg:max-h-none"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <FileText size={20} className="text-red-500" />
                        <h2 className="text-lg font-bold text-white">เอกสารที่จัดทำ</h2>
                    </div>

                    <p className="text-sm text-white/60 mb-6 leading-relaxed">
                        โปรเจกต์นี้ได้รับมอบหมายให้ Consult กับแพทย์จริงจากโรงพยาบาลมหาราชนครราชสีมา
                        เพื่อวิเคราะห์ปัญหาระบบ Legacy เดิมและออกแบบระบบ Smart Health ใหม่ทั้งหมด
                    </p>

                    {documentationItems.map((section, sIdx) => (
                        <div key={sIdx} className="mb-6">
                            <h3 className="text-sm font-bold text-red-500 mb-3 uppercase tracking-wider">
                                {section.section}
                            </h3>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.id} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2
                                            size={16}
                                            className={item.done ? 'text-green-500 mt-0.5 flex-shrink-0' : 'text-white/30 mt-0.5 flex-shrink-0'}
                                        />
                                        <span className={item.done ? 'text-white/80' : 'text-white/40'}>
                                            <span className="text-white/50 mr-1">{item.id}</span>
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <p className="text-sm text-red-400 font-medium mb-1">💡 Highlight</p>
                        <p className="text-xs text-white/60 leading-relaxed">
                            ได้รับ Requirement จากแพทย์จริง และออกแบบ UX/UI ด้วย Figma
                            พร้อมเอกสาร SRS/DFD ระดับมืออาชีพเพื่อนำไปพัฒนาจริง
                        </p>
                    </div>
                </motion.aside>

                {/* PDF Viewer */}
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 relative"
                >
                    <iframe
                        src="/SA His Project07.pdf"
                        className="w-full h-full min-h-[60vh] lg:min-h-[calc(100vh-80px)] border-0"
                        title="Smart Health System Analysis Document"
                        style={{ background: 'white' }}
                    />

                    {/* Mobile Floating Button */}
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-50">
                        <a
                            href="/SA His Project07.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full shadow-2xl shadow-red-500/40 animate-pulse"
                        >
                            <ExternalLink size={18} />
                            แตะเพื่อดูเอกสารเต็ม
                        </a>
                    </div>
                </motion.main>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-4 border-t border-white/10 bg-[#0a0a0a]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
                    <p>© 2025 Akkaraphon Worakleeb — System Analysis Coursework (KMUTNB)</p>
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
