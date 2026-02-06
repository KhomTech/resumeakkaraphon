'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';

/*
  ==============================
  SKILLS SECTION - PREMIUM REFINED
  ==============================
  - Refined grid layout
  - High fidelity icons from CDN
  - Subtle hover effects (glassmorphism)
*/

// Skill data with CDN icon URLs
const skillsData = {
    languages: [
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', color: '#00ADD8' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#336791' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#512BD4' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
        { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    ],
    frameworks: [
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#ffffff' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
        { name: 'Fiber', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'Nest.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#ffffff' },
    ],
    databases: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
        { name: 'MS SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg', color: '#CC2927' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
        { name: 'GORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8' },
    ],
    tools: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#ffffff' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#FF6C37' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
        { name: 'Swagger', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', color: '#85EA2D' },
        { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg', color: '#000000' },
    ],
};

function SkillCard({ skill, index }: { skill: { name: string; icon: string; color: string }; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.2, 0.8, 0.2, 1]
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="group relative flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-red)]/50 transition-colors shadow-sm hover:shadow-lg aspect-square"
        >
            <div
                className="w-12 h-12 md:w-14 md:h-14 relative mb-3 transition-transform duration-300 group-hover:scale-110"
            >
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="object-contain"
                    unoptimized
                />
            </div>

            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors text-center">
                {skill.name}
            </span>

            {/* Subtle Glow Background on Hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
            />
        </motion.div>
    );
}

function SkillCategory({ title, skills, delay = 0 }: { title: string; skills: typeof skillsData.languages; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-16 last:mb-0"
        >
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            <div className="grid grid-cols-2 min-[450px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.skills.title}</h2>
                    <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                <SkillCategory title={t.skills.categories.languages} skills={skillsData.languages} delay={0} />
                <SkillCategory title={t.skills.categories.frameworks} skills={skillsData.frameworks} delay={0.1} />
                <SkillCategory title={t.skills.categories.databases} skills={skillsData.databases} delay={0.2} />
                <SkillCategory title={t.skills.categories.tools} skills={skillsData.tools} delay={0.3} />
            </div>
        </section>
    );
}
