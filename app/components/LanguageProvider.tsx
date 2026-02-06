'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

/*
  ==============================
  LANGUAGE PROVIDER
  ==============================
  Manages EN/TH language switching across the application.
  - Provides all translation strings
  - Persists preference to localStorage
  - Uses context for global access
*/

type Language = 'en' | 'th';

// Translation strings for both languages
const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            projects: 'Projects',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact',
        },
        // Hero Section
        hero: {
            greeting: "Hi, I'm",
            name: 'Akkaraphon Worakleeb',
            title: 'SOFTWARE ENGINEER / FINTECH',
            subtitle: '(INTERN)',
            description: 'Third-year Mathematics & Computer Science student passionate about Fintech. Dedicated to building full-stack solutions that solve real problems.',
            viewResume: 'View Resume',
            contactMe: 'Contact Me',
            availability: 'Available for Internship: May 2026 - Mar 2027',
        },
        // Featured Project
        featured: {
            badge: 'FEATURED PROJECT',
            title: 'MMRRDiKub',
            subtitle: 'Trade Risk Management Platform',
            description: 'A professional Fintech tool designed to replace emotional trading with algorithmic logic.',
            whyTitle: 'Why this project?',
            why: 'To solve the problem of emotional trading. This platform acts as a disciplined risk manager, ensuring every trade follows a strict mathematical edge.',
            featuresTitle: 'Key Capabilities',
            features: [
                'AI Trade Score: Validates setups (R:R, Risk%) to prevent impulse trades',
                'Position Sizing: Extensible calculator with Multi-TP/SL & Fees',
                'Live Analytics: Internal PnL sync via Binance Price API & CSV Export'
            ],
            techTitle: 'Custom Fintech Architecture',
            techDetail: 'Built on Golang and Next.js for high-performance execution. Containerized via Docker and deployed live at mmrrdikub.xyz.',
            stack: 'Core Technologies',
            visitSite: 'Visit Live Site',
            viewDetails: 'View Details',
        },
        // Experience
        experience: {
            title: 'Work Experience',
            subtitle: 'Building real solutions with measurable impact',
            pos: {
                title: 'Business Solutions Developer',
                company: 'Family Retail Business (POS System)',
                period: '2024',
                description: 'Custom retail POS with barcode scanning and inventory management. Increased operational efficiency by 70%.',
                achievements: [
                    'Digitized inventory via Barcode Scanning and SQL',
                    'Replaced manual logs with real-time system',
                ],
                impact: '70%',
                impactLabel: 'Time Saved',
                stack: 'C# .NET | SQL Server | WinForms'
            },
            smilehouse: {
                title: 'Web Developer & Digital Marketing',
                company: 'Smile House Rayong (Rental Property)',
                period: '2025',
                description: 'Responsive real estate platform with integrated Line OA for automated lead generation. Achieved 100%+ online growth.',
                achievements: [
                    'End-to-end SEO & content strategy',
                    'Automated lead generation pipeline',
                ],
                impact: '100%+',
                impactLabel: 'Growth',
                stack: 'Next.js | Line API | Tailwind'
            },
            smarthealth: {
                title: 'System Analyst & UX/UI',
                company: 'Maharat Nakhon Ratchasima Hospital',
                period: '2024',
                description: 'Consulted directly with physicians to address data loss issues in the existing Legacy System. Designed a Centralized Platform workflow and user-friendly UX/UI using Figma.',
                achievements: [
                    'Delivered professional SRS and DFD specifications',
                    'Designed Centralized Platform workflow',
                ],
                impact: 'UX/UI',
                impactLabel: 'Design',
                stack: 'System Analysis | UX/UI | Figma'
            },
            shoes: {
                title: 'Full-Stack Developer',
                company: 'Shoes Store E-commerce',
                period: '2024',
                description: 'Engineered a responsive e-commerce platform using React.js (Frontend) and Nest.js (Backend). Implemented MongoDB for scalable product storage and built an Admin Dashboard.',
                achievements: [
                    'Engineered responsive e-commerce platform',
                    'Implemented MongoDB for scalable storage',
                ],
                impact: 'Full-Stack',
                impactLabel: 'Architecture',
                stack: 'React.js | Nest.js | MongoDB'
            },
        },
        // Skills
        skills: {
            title: 'Technical Skills',
            subtitle: 'Technologies I work with',
            categories: {
                languages: 'Languages',
                frameworks: 'Frameworks',
                databases: 'Databases',
                tools: 'Tools & DevOps',
            },
        },
        // Contact
        contact: {
            title: "Let's Connect",
            subtitle: 'Open for internship opportunities in Software Engineering & Fintech',
            email: 'Email Me',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            location: 'Bangkok, Thailand',
        },
        // Resume Modal
        resume: {
            title: 'Resume',
            download: 'Download PDF',
            close: 'Close',
            loading: 'Loading resume...',
        },
    },
    th: {
        // Navigation
        nav: {
            home: 'หน้าหลัก',
            projects: 'ผลงาน',
            experience: 'ประสบการณ์',
            skills: 'ทักษะ',
            contact: 'ติดต่อ',
        },
        // Hero Section
        hero: {
            greeting: 'สวัสดีครับ ผมชื่อ',
            name: 'อัครพนธ์ วรกลีบ',
            title: 'SOFTWARE ENGINEER / FINTECH',
            subtitle: '(นักศึกษาฝึกงาน)',
            description: 'นักศึกษาชั้นปีที่ 3 สาขาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ ที่หลงใหลในโลก Fintech และการพัฒนา Software มุ่งมั่นสร้าง Solutions ที่ใช้งานได้จริงและทรงพลัง',
            viewResume: 'ดูเรซูเม่',
            contactMe: 'ติดต่อร่วมงาน',
            availability: 'พร้อมเริ่มฝึกงาน: พ.ค. 2569 - มี.ค. 2570',
        },
        // Featured Project
        featured: {
            badge: 'โปรเจกต์ไฮไลท์',
            title: 'MMRRDiKub',
            subtitle: 'แพลตฟอร์มบริหารความเสี่ยงสำหรับเทรดเดอร์',
            description: 'เครื่องมือ Fintech ที่ช่วยเปลี่ยนการเทรดด้วย "อารมณ์" ให้เป็น "ระบบระเบียบ" ด้วยพลังของข้อมูล',
            whyTitle: 'ทำไมต้องมีโปรเจกต์นี้?',
            why: 'เพื่อแก้ปัญหา "Emotional Trading" ที่เป็นศัตรูอันดับ 1 ของเทรดเดอร์ ระบบนี้จะช่วยคัดกรอง Trade Setup ที่ไม่ได้เปรียบออกไป และเน้นเฉพาะไม้ที่มีสถิติดีเยี่ยมตามหลักคณิตศาสตร์',
            featuresTitle: 'ฟีเจอร์เด็ด',
            features: [
                'AI Trade Score: ระบบให้คะแนนความน่าจะเป็น (R:R) ช่วยตัดสินใจก่อนเข้าออเดอร์',
                'Advanced Calculator: คำนวณ Position Sizing แม่นยำ รองรับ Multi-TP/SL',
                'Real-time Market Data: ดึงราคาล่าสุดจาก Binance API มาคำนวณ PnL อัตโนมัติ'
            ],
            techTitle: 'สถาปัตยกรรม Fintech',
            techDetail: 'พัฒนาด้วย Golang (Backend) เพื่อความเร็วสูงสุด และ Next.js (Frontend) ที่ลื่นไหล Deploy จริงด้วย Docker บน Cloud Server',
            stack: 'เทคโนโลยีเบื้องหลัง',
            visitSite: 'ลองใช้งานจริง',
            viewDetails: 'ดูเบื้องหลังการพัฒนา',
        },
        // Experience
        experience: {
            title: 'ประสบการณ์การทำงาน',
            subtitle: 'ลงมือทำจริง แก้ปัญหาจริง วัดผลได้',
            pos: {
                title: 'Business Solutions Developer',
                company: 'ธุรกิจค้าปลีกครอบครัว (ระบบ POS)',
                period: '2567',
                description: 'พัฒนาระบบ POS และจัดการสต็อกสินค้าด้วยการสแกนบาร์โค้ด ลดความผิดพลาดและเพิ่มประสิทธิภาพการทำงานได้ถึง 70%',
                achievements: [
                    'Digitize สินค้าผ่าน Barcode และ SQL',
                    'เปลี่ยนจากบันทึกมือเป็นระบบ Real-time',
                ],
                impact: '70%',
                impactLabel: 'ประหยัดเวลา',
                stack: 'C# .NET | SQL Server | WinForms'
            },
            smilehouse: {
                title: 'Web Developer & Digital Marketing',
                company: 'Smile House Rayong (อสังหาริมทรัพย์)',
                period: '2568',
                description: 'แพลตฟอร์มอสังหาฯ Responsive พร้อมเชื่อมต่อ Line OA สำหรับการสร้าง Lead อัตโนมัติ เพิ่มยอดผู้สนใจกว่า 100%',
                achievements: [
                    'SEO & Content Strategy ครบวงจร',
                    'ระบบ Lead Generation อัตโนมัติ',
                ],
                impact: '100%+',
                impactLabel: 'เติบโต',
                stack: 'Next.js | Line API | Tailwind'
            },
            smarthealth: {
                title: 'System Analyst & UX/UI',
                company: 'โรงพยาบาลมหาราชนครราชสีมา',
                period: '2567',
                description: 'Consult โดยตรงกับแพทย์เพื่อแก้ปัญหาข้อมูลสูญหายในระบบ Legacy เดิม ออกแบบ Workflow แพลตฟอร์มกลางและ UX/UI ที่ใช้งานง่ายด้วย Figma',
                achievements: [
                    'ส่งมอบเอกสาร SRS และ DFD ระดับมืออาชีพ',
                    'ออกแบบหน้าจอ UX/UI ที่เป็นมิตรกับผู้ใช้',
                ],
                impact: 'UX/UI',
                impactLabel: 'Design',
                stack: 'System Analysis | UX/UI | Figma'
            },
            shoes: {
                title: 'Full-Stack Developer',
                company: 'Shoes Store E-commerce',
                period: '2567',
                description: 'พัฒนาระบบ E-commerce เต็มรูปแบบ Responsive ด้วย React.js และ Backend ด้วย Nest.js ใช้ MongoDB รองรับการขยายตัวของข้อมูลสินค้า',
                achievements: [
                    'สร้าง Admin Dashboard สำหรับจัดการสินค้า',
                    'วางโครงสร้าง Database ที่รองรับ Scale ได้จริง',
                ],
                impact: 'Full-Stack',
                impactLabel: 'Architecture',
                stack: 'React.js | Nest.js | MongoDB'
            },
        },
        // Skills
        skills: {
            title: 'คลังอาวุธ & ทักษะ',
            subtitle: 'เทคโนโลยีที่ผมเชี่ยวชาญและเลือกใช้',
            categories: {
                languages: 'ภาษาโปรแกรม (Programming)',
                frameworks: 'เฟรมเวิร์ก (Frameworks)',
                databases: 'ฐานข้อมูล (Databases)',
                tools: 'เครื่องมือ & DevOps',
            },
        },
        // Contact
        contact: {
            title: 'ร่วมงานกันไหม?',
            subtitle: 'ผมพร้อมเสมอสำหรับโอกาสฝึกงานที่ท้าทายในสาย Software Engineer และ Fintech',
            email: 'ส่งอีเมลหาผม',
            github: 'ดู Code ที่ GitHub',
            linkedin: 'LinkedIn Profile',
            location: 'กรุงเทพมหานคร',
        },
        // Resume Modal
        resume: {
            title: 'เรซูเม่ฉบับเต็ม',
            download: 'ดาวน์โหลดเก็บไว้',
            close: 'ปิดหน้าต่าง',
            loading: 'กำลังดึงข้อมูล...',
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => { },
    t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('portfolio-language') as Language | null;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (mounted) {
            localStorage.setItem('portfolio-language', lang);
        }
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook - won't throw error
export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    return context;
}
