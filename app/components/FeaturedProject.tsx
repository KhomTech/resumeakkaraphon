'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers, Server, Database, Container, BarChart2, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';

/*
  ==============================
  FEATURED PROJECT SECTION - REFINED
  ==============================
  - 5 Images Bento Grid (Perfect Layout)
  - Corrected Links (MMRRDiKub, SmileHouse)
  - Ultra smooth reveal animations
*/

export default function FeaturedProject() {
    const { t } = useLanguage();

    const [activeContact, setActiveContact] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const techStack = [
        { name: 'Golang', icon: <Server size={14} />, color: '#00ADD8' },
        { name: 'Next.js', icon: <Layers size={14} />, color: '#ffffff' },
        { name: 'PostgreSQL', icon: <Database size={14} />, color: '#336791' },
        { name: 'Docker', icon: <Container size={14} />, color: '#2496ED' },
    ];

    /* 
      Bento Grid Layout for 5 Images:
      - Main (Dashboard): Large (2x2)
      - Others: Small (1x1)
      - Total: 2x3 grid or refined masonry
    */
    const projectImages = [
        { src: '/mmrrdikub-1.jpg', alt: 'Dashboard Overview', span: 'col-span-2 row-span-2' }, // Main Image (Large)
        { src: '/mmrrdikub-2.jpg', alt: 'Trade Logic', span: 'col-span-1 row-span-1' },
        { src: '/mmrrdikub-3.jpg', alt: 'Risk Management', span: 'col-span-1 row-span-1' },
        { src: '/mmrrdikub-4.jpg', alt: 'Mobile View', span: 'col-span-1 row-span-1' },
        { src: '/mmrrdikub-5.jpg', alt: 'Analytics', span: 'col-span-1 row-span-1' },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--accent-red)] opacity-[0.02] blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[var(--accent-red)] bg-[var(--accent-red)]/5 rounded-full border border-[var(--accent-red)]/20 uppercase">
                        {t.featured.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        {t.featured.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl">
                        {t.featured.subtitle}
                    </p>
                </motion.div>

                {/* MMRRDiKub Card - Large Feature */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm hover:shadow-glow transition-all duration-500 mb-20 group"
                >
                    <div className="p-8 md:p-12 lg:p-14">
                        <div className="flex flex-col xl:flex-row gap-12 mb-12">

                            {/* Text Content */}
                            <div className="flex-1 xl:max-w-lg">
                                {/* Why Project? */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-red)] mb-2">
                                        {t.featured.whyTitle || 'Why this project?'}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {t.featured.why || t.featured.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-red)] mb-3">
                                        {t.featured.featuresTitle || 'Key Capabilities'}
                                    </h3>
                                    <ul className="space-y-2">
                                        {(t.featured.features || []).map((feature: string, idx: number) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                            >
                                                <span className="mt-1 w-1.5 h-1.5 bg-[var(--accent-red)] rounded-full flex-shrink-0" />
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Architecture / Tech Detail */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-red)] mb-2">
                                        {t.featured.techTitle || 'Architecture'}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                        {t.featured.techDetail}
                                    </p>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.map((tech) => (
                                            <div key={tech.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] transition-transform hover:scale-105">
                                                <span style={{ color: tech.color }}>{tech.icon}</span>
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.a
                                    href="https://mmrrdikub.xyz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white gradient-red shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40"
                                >
                                    <ExternalLink size={20} />
                                    {t.featured.visitSite}
                                </motion.a>
                            </div>

                            {/* 5-Image Grid (Bento) */}
                            <div className="flex-[1.5]">
                                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px]">
                                    {projectImages.map((img, i) => (
                                        <div
                                            key={i}
                                            className={`relative rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] group/img hover:border-[var(--accent-red)] transition-colors duration-300 ${img.span}`}
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover/img:scale-105 will-change-transform"
                                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                            />
                                            {/* Subtle Overlay on Hover */}
                                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />

                                            {/* Placeholder if missing */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                                                <BarChart2 className="text-[var(--border-color)] opacity-50" size={32} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Projects Grid - 2x2 Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            key: 'smarthealth',
                            img: '/smart-health.png',
                            icon: '🏥',
                            link: null
                        },
                        {
                            key: 'shoes',
                            img: '/shoes-store.mp4', // Video loop
                            icon: '👟',
                            link: null
                        },
                        {
                            key: 'pos',
                            img: '/pos-system.jpg',
                            icon: '🏪',
                            link: null
                        },
                        {
                            key: 'smilehouse',
                            img: '/smile-house.jpg',
                            icon: '🏠',
                            link: "https://khomtech.github.io/SmileHouseRayong/"
                        }
                    ].map((proj, i) => {
                        // Access translations dynamically
                        // @ts-ignore
                        const p = t.experience[proj.key] || {};
                        const isLink = !!proj.link;

                        return (
                            <motion.div
                                key={proj.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-red)]/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full relative"
                            >
                                {/* Overlay Link for Whole Card (if clickable) */}
                                {isLink && (
                                    <a
                                        href={proj.link!}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 z-10"
                                        aria-label={`View ${p.title}`}
                                    />
                                )}

                                <div className="h-64 relative bg-[var(--bg-secondary)] overflow-hidden">
                                    {proj.img.endsWith('.mp4') ? (
                                        <video
                                            src={proj.img}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <Image
                                            src={proj.img}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                                        <span className="text-6xl opacity-10 grayscale">{proj.icon}</span>
                                    </div>

                                    {/* Tech Stack Icons Overlay (Top Left) */}
                                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                                        {(p.stack || "").split('|').map((tech: string, idx: number) => (
                                            <div key={idx} className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-medium border border-white/10 shadow-sm">
                                                {tech.trim()}
                                            </div>
                                        ))}
                                    </div>

                                    {/* External Link Floating Icon */}
                                    {isLink && (
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-[var(--accent-red)] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-red-500/30 z-20 pointer-events-none">
                                            <ExternalLink size={18} />
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-between relative">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:text-[var(--accent-red)] transition-colors line-clamp-1">{p.company}</h3>
                                                <p className="text-sm text-[var(--text-secondary)] font-medium mb-3">{p.title}</p>
                                            </div>
                                        </div>
                                        <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed line-clamp-3">
                                            {p.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-[var(--border-color)] mt-auto">
                                        {/* Impact / Stats */}
                                        <div className="flex flex-col">
                                            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">{p.impactLabel}</span>
                                            <span className="text-lg font-bold gradient-text">{p.impact}</span>
                                        </div>

                                        {/* Contact Interactive Button */}
                                        <div className="relative z-30">
                                            <button
                                                onClick={() => setActiveContact(activeContact === proj.key ? null : proj.key)}
                                                className={`w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all duration-300 shadow-sm ${activeContact === proj.key
                                                    ? 'bg-[var(--accent-red)] text-white border-[var(--accent-red)]'
                                                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--accent-red)] hover:text-white hover:border-[var(--accent-red)]'
                                                    }`}
                                                aria-label="Contact options"
                                            >
                                                <Mail size={14} />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {activeContact === proj.key && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    className="absolute bottom-full right-0 mb-2 w-48 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-xl overflow-hidden z-40"
                                                >
                                                    <div className="p-1">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                copyToClipboard("akkaraphon7tech@gmail.com");
                                                            }}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors text-left"
                                                        >
                                                            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                                            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                                                        </button>
                                                        <a
                                                            href="mailto:akkaraphon7tech@gmail.com"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors text-left"
                                                        >
                                                            <Mail size={14} />
                                                            <span>Open Mail App</span>
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

