'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

/*
  ==============================
  CONTACT / FOOTER SECTION - REFINED
  ==============================
  - Smooth interaction for Email Copy
  - Corrected Social Links (KhomTech)
  - Clean Layout
*/

export default function Contact() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('akkaraphon7tech@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        // Also open mailto for convenience
        window.location.href = 'mailto:akkaraphon7tech@gmail.com';
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            href: 'https://github.com/KhomTech',
            label: 'github.com/KhomTech',
            color: '#ffffff',
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            href: 'https://linkedin.com/in/akkaraphon7tech',
            label: 'Akkaraphon7 Tech',
            color: '#0A66C2',
        },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Decorative separators */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

            <div className="container-custom relative z-10 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.contact.title}</h2>
                    <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                {/* Location Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] mb-16 shadow-sm"
                >
                    <MapPin size={16} className="text-[var(--accent-red)]" />
                    <span>{t.contact.location}</span>
                </motion.div>

                {/* Main Action Area */}
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-24">

                    {/* Email Card (Big CTA) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        onClick={handleCopyEmail}
                        className="col-span-1 md:col-span-2 relative group cursor-pointer p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-red)] transition-all duration-300 shadow-sm hover:shadow-glow will-change-transform"
                    >
                        <div className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-red)]">
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Check size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Copy size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-red)]/10 text-[var(--accent-red)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{t.contact.email}</h3>
                            <p className="text-lg text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                akkaraphon7tech@gmail.com
                            </p>
                            <span className="mt-6 text-sm font-medium text-[var(--accent-red)] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                Click to Copy & Send
                            </span>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: [0.2, 0.8, 0.2, 1] }}
                            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-red)] hover:shadow-lg transition-all duration-300 group will-change-transform"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${link.color}15`, color: link.color === '#ffffff' ? 'var(--text-primary)' : link.color }}
                            >
                                {link.icon}
                            </div>
                            <span className="font-semibold text-lg">{link.name}</span>
                            <span className="text-sm text-[var(--text-secondary)] mt-1 flex items-center gap-1">
                                {link.label} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)] opacity-80 hover:opacity-100 transition-opacity">
                    <p>© {new Date().getFullYear()} Akkaraphon Worakleeb.</p>
                    <div className="flex gap-6">
                        <a href="https://khomtech.github.io/SmileHouseRayong/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                            Smile House
                        </a>
                        <a href="https://mmrrdikub.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                            MMRRDiKub
                        </a>
                        <a href="https://github.com/KhomTech" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
