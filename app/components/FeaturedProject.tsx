'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code, Database, Cpu, Mail, BarChart2, Copy, Check, Server, Container, Globe } from 'lucide-react';
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
            {/* Background Decor (Optimized: No CSS Blur) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle,rgba(220,38,38,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

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

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://mmrrdikub.xyz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-red)] text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                                    >
                                        {t.featured.visitSite}
                                        <ExternalLink size={18} />
                                    </a>
                                    <a
                                        href="mailto:akkaraphon7tech@gmail.com?subject=Interested in MMRRDiKub Project"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--text-secondary)]/20 font-medium rounded-lg hover:bg-[var(--glass)] transition-all hover:scale-105"
                                    >
                                        <Mail size={18} />
                                        {t.featured.contactParams}
                                    </a>
                                </div>
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
                            key: 'shoes',
                            img: '/shoes-store.mp4', // Video loop
                            icon: '👟',
                            link: null,
                            isExternal: false
                        },
                        {
                            key: 'pos',
                            img: '/pos-system.jpg',
                            icon: '🏪',
                            link: '/pos-document',
                            isExternal: false
                        },
                        {
                            key: 'smarthealth',
                            img: '/smart-health.png',
                            icon: '🏥',
                            link: '/sa-document',
                            isExternal: false
                        },
                        {
                            key: 'smilehouse',
                            img: '/smile-house.jpg',
                            icon: '🏠',
                            link: "https://khomtech.github.io/SmileHouseRayong/",
                            isExternal: true,
                            extraLinks: [
                                { label: 'Website', href: 'https://khomtech.github.io/SmileHouseRayong/', icon: <Globe size={14} /> },
                                {
                                    label: 'TikTok', href: 'https://www.tiktok.com/@smilehouserayong', icon: (
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 7.7 6.38V8.63a7.51 7.51 0 0 0 1.53.15 7.55 7.55 0 0 0 4.6-1.55v-3.72a4.42 4.42 0 0 1-4.6 3.18Z" />
                                        </svg>
                                    )
                                },
                            ]
                        }
                    ].map((proj, i) => {
                        // Access translations dynamically
                        // @ts-expect-error: Dynamic key access for translations
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
                                {/* Removed overlay link - now using explicit button */}

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

                                        {/* View Details Button(s) */}
                                        {'extraLinks' in proj && proj.extraLinks ? (
                                            <div className="flex gap-2">
                                                {proj.extraLinks.map((el: { label: string; href: string; icon: React.ReactNode }, idx: number) => (
                                                    <a
                                                        key={idx}
                                                        href={el.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[var(--accent-red)] text-white text-xs font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/20"
                                                    >
                                                        <span>
                                                            {el.icon}
                                                        </span>
                                                        <span>{el.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        ) : isLink && (
                                            <a
                                                href={proj.link!}
                                                target={proj.isExternal ? "_blank" : "_self"}
                                                rel={proj.isExternal ? "noopener noreferrer" : undefined}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-red)] text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/20"
                                            >
                                                <ExternalLink size={14} />
                                                <span>{t.featured.viewDetails || 'ดูรายละเอียด'}</span>
                                            </a>
                                        )}

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

