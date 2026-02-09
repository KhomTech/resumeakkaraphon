'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, FileText, Database, Layout, Code, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

/*
  ==============================
  POS SYSTEM DOCUMENT PAGE
  ==============================
  Displays the SEC2_GROUP3 (1).pdf SA Document
  for the POS System project with premium UI
*/

export default function POSDocumentPage() {
    const { language } = useLanguage();
    const isEnglish = language === 'en';

    const sections = [
        {
            icon: <FileText size={20} />,
            title: isEnglish ? 'Part 1: Project Plan' : 'ส่วนที่ 1: แผนงานโครงงาน',
            items: [
                { label: isEnglish ? 'Introduction' : 'บทนํา', page: 1 },
                { label: isEnglish ? 'References' : 'แหล่งอ้างอิง', page: 1 },
                { label: isEnglish ? 'Project Timeline' : 'ระยะเวลาดําเนินโครงงาน', page: 2 },
            ]
        },
        {
            icon: <Database size={20} />,
            title: isEnglish ? 'Part 2: System Analysis' : 'ส่วนที่ 2: การวิเคราะห์ระบบ',
            items: [
                { label: isEnglish ? 'Class Diagram' : 'แผนภาพคลาส (Class Diagram)', page: 4 },
                { label: isEnglish ? 'Activity Diagram' : 'แผนภาพกิจกรรม (Activity Diagram)', page: 6 },
            ]
        },
        {
            icon: <Layout size={20} />,
            title: isEnglish ? 'Part 3: System Design' : 'ส่วนที่ 3: การออกแบบระบบ',
            items: [
                { label: isEnglish ? 'Physical Database Design & Data Dictionary' : 'การออกแบบฐานข้อมูล + Data Dictionary', page: 26 },
                { label: isEnglish ? 'Form & Report Design' : 'การออกแบบฟอร์มและรายงาน', page: 32 },
                { label: isEnglish ? 'UI Design' : 'การออกแบบส่วนประสานกับผู้ใช้งาน', page: 51 },
                { label: isEnglish ? 'Screen Navigation Flow' : 'การออกแบบลําดับการเชื่อมโยงจอภาพ', page: 67 },
            ]
        },
        {
            icon: <Code size={20} />,
            title: isEnglish ? 'Part 4: System Development' : 'ส่วนที่ 4: การพัฒนาระบบ',
            items: [
                { label: isEnglish ? 'Sample Database Data' : 'ข้อมูลตัวอย่างที่อยู่ในระบบฐานข้อมูล', page: 79 },
                { label: isEnglish ? 'System Screenshots' : 'ตัวอย่างหน้าจอของระบบจริง', page: 85 },
                { label: isEnglish ? 'User Manual' : 'คู่มือการใช้งานระบบโดยสังเขป', page: 116 },
            ]
        },
    ];

    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-0 z-50 glass border-b border-[var(--border-color)]"
            >
                <div className="container-custom py-4 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">{isEnglish ? 'Back to Projects' : 'กลับไปหน้าโปรเจกต์'}</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <a
                            href="/SEC2_GROUP3 (1).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] text-sm font-medium hover:bg-[var(--bg-secondary)] transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">{isEnglish ? 'Open in New Tab' : 'เปิดในแท็บใหม่'}</span>
                        </a>
                        <a
                            href="/SEC2_GROUP3 (1).pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-red)] text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">{isEnglish ? 'Download PDF' : 'ดาวน์โหลด PDF'}</span>
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="py-16 md:py-24 border-b border-[var(--border-color)]"
            >
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 mb-6"
                    >
                        <span className="text-4xl">🏪</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        {isEnglish ? 'POS System' : 'ระบบ POS'}
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] mb-2">
                        {isEnglish ? 'Systems Analysis Document' : 'เอกสารวิเคราะห์และออกแบบระบบ'}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] opacity-70">
                        SEC2_GROUP3 | 116+ {isEnglish ? 'Pages' : 'หน้า'}
                    </p>
                </div>
            </motion.section>

            {/* Table of Contents */}
            <section className="py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12 text-center"
                    >
                        <BookOpen className="w-8 h-8 mx-auto mb-4 text-[var(--accent-red)]" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            {isEnglish ? 'Document Contents' : 'สารบัญเอกสาร'}
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            {isEnglish ? 'Comprehensive SA documentation for the POS System' : 'เอกสาร SA ฉบับสมบูรณ์สำหรับระบบ POS'}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] p-6 hover:border-[var(--accent-red)]/50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-red)]/10 flex items-center justify-center text-[var(--accent-red)]">
                                        {section.icon}
                                    </div>
                                    <h3 className="font-bold text-lg">{section.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex justify-between items-center text-sm py-1.5 px-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                                            <span className="text-[var(--text-secondary)]">{item.label}</span>
                                            <span className="text-xs font-mono text-[var(--accent-red)] opacity-60">p.{item.page}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Viewer */}
            <section className="pb-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-xl"
                    >
                        <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-secondary)]">
                            <div className="flex items-center gap-3">
                                <FileText size={20} className="text-[var(--accent-red)]" />
                                <span className="font-medium">SEC2_GROUP3 (1).pdf</span>
                            </div>
                            <span className="text-xs text-[var(--text-secondary)]">
                                {isEnglish ? 'Full Document' : 'เอกสารฉบับเต็ม'}
                            </span>
                        </div>
                        <div className="relative w-full" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
                            <iframe
                                src="/SEC2_GROUP3 (1).pdf"
                                className="absolute inset-0 w-full h-full"
                                title="POS System SA Document"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
