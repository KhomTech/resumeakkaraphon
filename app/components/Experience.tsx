'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

/*
  ==============================
  EXPERIENCE SECTION - PREMIUM REFINED
  ==============================
  - Clean vertical timeline
  - Better typography hierarchy
  - "Impact" highlight with glass effect
*/

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
    // Simple refined static display for stability, animations handled by container
    return <span className="text-3xl sm:text-4xl font-bold gradient-text">{target}{suffix}</span>;
}

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            key: 'pos',
            icon: <Briefcase size={20} />,
            data: t.experience.pos,
        },
        {
            key: 'smilehouse',
            icon: <Briefcase size={20} />,
            data: t.experience.smilehouse,
        },
    ];

    return (
        <section id="experience" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[var(--accent-red)] opacity-[0.015] blur-[100px] -translate-y-1/2" />
            </div>

            <div className="container-custom relative z-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.experience.title}</h2>
                    <p className="text-xl text-[var(--text-secondary)] font-light">{t.experience.subtitle}</p>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[var(--border-color)] via-[var(--accent-red)] to-[var(--border-color)] opacity-30 md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-[var(--bg-card)] border-4 border-[var(--accent-red)] z-10 md:-translate-x-1/2 mt-1 shadow-[0_0_0_8px_var(--bg-secondary)]" />

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:w-1/2">
                                <div className={`p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-red)]/30 hover:shadow-lg transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-4 text-[var(--accent-red)]">
                                        <span className="p-2 rounded-lg bg-[var(--accent-red)]/10">{exp.icon}</span>
                                        <span className="font-semibold tracking-wide text-sm uppercase">{exp.data.period}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-[var(--accent-red)] transition-colors">
                                        {exp.data.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] font-medium mb-4">{exp.data.company}</p>

                                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-light">
                                        {exp.data.description}
                                    </p>

                                    {/* Impact Metric */}
                                    <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                                        <div className="flex flex-col">
                                            <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-1">Impact</span>
                                            <span className="font-bold text-[var(--text-primary)]">{exp.data.impactLabel}</span>
                                        </div>
                                        <AnimatedCounter target={exp.data.impact} />
                                    </div>
                                </div>
                            </div>

                            {/* Empty Half for balance */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
