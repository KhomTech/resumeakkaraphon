'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

/*
  ==============================
  HEADER COMPONENT - PREMIUM REFINED
  ==============================
  - Cleaner glassmorphism
  - Smoother scroll transition
  - Refined mobile menu
*/

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t.nav.home, href: '#home' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.contact, href: '#contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'th' : 'en');
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out glass py-3 shadow-sm`}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="relative z-50 text-2xl font-bold tracking-tight group cursor-pointer"
                    >
                        <span className="gradient-text group-hover:opacity-80 transition-opacity">AK</span>
                        <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors duration-300">.dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <div className="flex bg-[var(--bg-secondary)]/50 backdrop-blur-md px-6 py-2 rounded-full border border-[var(--border-color)]">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="relative px-4 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 pl-4 border-l border-[var(--border-color)]">
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                aria-label="Switch Language"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider">{language}</span>
                            </button>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-50 p-2 text-[var(--text-primary)]"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--bg-primary)]/98 backdrop-blur-xl md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 text-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsMobileMenuOpen(false);
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-2xl font-bold text-[var(--text-primary)]"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <div className="flex items-center gap-6 mt-8 p-4 rounded-2xl bg-[var(--bg-secondary)]">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 text-[var(--text-primary)] font-medium"
                                >
                                    <Globe size={20} />
                                    <span className="uppercase">{language}</span>
                                </button>
                                <div className="w-px h-6 bg-[var(--border-color)]" />
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 text-[var(--text-primary)] font-medium"
                                >
                                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                                    <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
