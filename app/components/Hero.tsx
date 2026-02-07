'use client';

import { motion, Variants } from 'framer-motion';
import { FileText, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';
import RealTimeClock from './RealTimeClock';
import ImageModal from './ImageModal';
import { useState } from 'react';

/*
  ==============================
  HERO SECTION - PREMIUM REFINED
  ==============================
  - Smoother eased animations
  - Cleaner typography and layout
  - Elegant interactions
*/

interface HeroProps {
    onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
    const { t } = useLanguage();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }, // Ultra-smooth ease
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
            {/* Refined Background Gradients */}
            {/* Refined Background Gradients (Optimized: No CSS Blur) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(220,38,38,0.08)_0%,rgba(0,0,0,0)_70%)]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_70%)]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Availability Badge & Clock */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-10">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-sm font-medium border border-[var(--border-color)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {t.hero.availability}
                            </span>

                            {/* Real-time Clock */}
                            <div className="scale-90 origin-left">
                                <RealTimeClock />
                            </div>
                        </motion.div>

                        {/* Greeting */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4 font-light"
                        >
                            {t.hero.greeting}
                        </motion.h2>

                        {/* Name - Huge & Bold */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
                        >
                            <span className="gradient-text">{t.hero.name}</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                <span className="text-[var(--accent-red)]">{t.hero.title}</span>
                                <span className="text-[var(--text-secondary)] font-light ml-3 opacity-60">{t.hero.subtitle}</span>
                            </h3>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
                        >
                            {t.hero.description}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onOpenResume}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white gradient-red shadow-lg hover:shadow-red-500/30 transition-all border border-transparent"
                            >
                                <FileText size={20} />
                                <span>{t.hero.viewResume}</span>
                                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </motion.button>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-card)] hover:border-[var(--accent-red)] hover:text-[var(--accent-red)] transition-all"
                            >
                                <Mail size={20} />
                                {t.hero.contactMe}
                            </motion.a>
                        </motion.div>

                        {/* Location */}
                        <motion.div variants={itemVariants} className="mt-12 flex items-center lg:items-start gap-2 text-[var(--text-secondary)] opacity-60 hover:opacity-100 transition-opacity">
                            <MapPin size={16} />
                            <span className="text-sm">Bangkok, Thailand</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        className="flex justify-center lg:justify-end relative"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
                            {/* Soft Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-red)] to-transparent rounded-[2rem] opacity-20 blur-3xl transform rotate-6 scale-105" />

                            {/* Image Container */}
                            <div
                                className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl cursor-zoom-in group"
                                onClick={() => setIsProfileOpen(true)}
                            >
                                <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                {/* Better Placeholder */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg-secondary)] -z-10">
                                    <span className="text-9xl font-bold text-[var(--text-primary)] opacity-5">AW</span>
                                </div>

                                {/* Hover Hint */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <span className="bg-black/50 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">Click to Zoom</span>
                                </div>
                            </div>

                            {/* Floaters - cleaner */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl"
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl"
                            >
                                <span className="text-3xl">💻</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div >

            {/* Profile Image Zoom Modal */}
            <ImageModal
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                imageSrc="/profile.png"
            />
        </section >
    );
}
