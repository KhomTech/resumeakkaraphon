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
            availability: 'Internship Ready: (11 Months) May 2026 - Mar 2027',
            urgency: 'Actively seeking opportunities — Feb-Mar 2026',
        },
        // Featured Project
        featured: {
            badge: 'FEATURED PROJECT',
            title: 'MMRRDiKub',
            subtitle: 'Trade Risk Management Platform',
            description: 'A personal solution built to solve my own trading struggles: emotional decisions, lack of planning, and poor risk management.',
            whyTitle: 'The Story ("Why I Built This")',
            why: 'I created this to fix my own real-life problems. I used to trade based on emotions, with no clear plan or calculated risk. I applied my tech skills to build a disciplined system that forces me to trade with logic and mathematics, not feelings.',
            featuresTitle: 'How it Solves the Problem',
            features: [
                'Risk Control: Enforces strict Risk% and Position Sizing to prevent emotional overtrading.',
                'Trade Planning: AI Score validates every setup (R:R) before execution.',
                'Real-time Price Feed: Fetches live crypto prices via Binance API for accurate market analysis.'
            ],
            techTitle: 'Robust Fintech Architecture',
            techDetail: 'Engineered for reliability using Golang (Backend), Next.js (Frontend), and PostgreSQL (Database). Fully containerized with Docker.',
            stack: 'Golang | Next.js | PostgreSQL | Docker',
            visitSite: 'Visit Live Site',
            viewDetails: 'View Details',
            contactParams: 'Discuss this Project',
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
                title: 'System Analyst & UX/UI Designer',
                company: 'Smart Health Service System (Maharat Nakhon Ratchasima Hospital)',
                period: '2024',
                description: 'Full System Analysis & Design for hospital legacy system transformation. Consulted directly with physicians to understand real problems and delivered comprehensive SA documentation.',
                achievements: [
                    '📋 13+ SA Documents: Use Case, Class Diagram, DFD Level 0-2, Activity, Sequence, SRS',
                    '🗄️ Database Design: ER-Diagram, Relational Schema, Normalization, Data Dictionary',
                    '🎨 UX/UI Prototype: Professional wireframes & mockups in Figma'
                ],
                impact: '17+ Docs',
                impactLabel: 'SA Deliverables',
                stack: 'Figma | Visio | SA/DFD/SRS | ER-Diagram'
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
            availability: 'พร้อมเริ่มสหกิจ/ฝึกงาน (11 เดือน): 5 พ.ค. 2569 - มี.ค. 2570',
            urgency: 'กำลังหาที่สหกิจ/ฝึกงาน — ภายใน ก.พ.-มี.ค. 2569',
        },
        // Featured Project
        featured: {
            badge: 'โปรเจกต์ไฮไลท์',
            title: 'MMRRDiKub',
            subtitle: 'แพลตฟอร์มบริหารความเสี่ยงสำหรับเทรดเดอร์',
            description: 'ระบบที่สร้างขึ้นเพื่อแก้ปัญหาการเทรดของตัวผมเอง: ลดการใช้อารมณ์, วางแผนให้ชัดเจน และคุมความเสี่ยงด้วยคณิตศาสตร์',
            whyTitle: 'จุดเริ่มต้น ("ระบบนี้เกิดขึ้นได้อย่างไร")',
            why: 'ผมสร้างโปรเจกต์นี้เพื่อแก้ปัญหาของตัวเองครับ เมื่อก่อนผมเทรดด้วย "อารมณ์" ไม่มีแผนที่ชัดเจน และขาดการคำนวณความเสี่ยง ผมจึงนำทักษะ Tech มาสร้างระบบที่มีวินัย บังคับให้ตัวเองเทรดด้วย "ตรรกะและคณิตศาสตร์" แทนความรู้สึก',
            featuresTitle: 'ระบบนี้แก้ปัญหาอย่างไร?',
            features: [
                'Risk Control: บังคับคุมความเสี่ยง (Risk%) และคำนวณ Position Sizing ทุกครั้ง ป้องกันการเทรดเกินตัว (Overtrading)',
                'Trade Planning: AI Score ประเมินความคุ้มค่า (R:R) ของทุก Setup ก่อนตัดสินใจเข้าออเดอร์',
                'Real-time Price Feed: เชื่อมต่อ Binance API ดึงราคาเหรียญจริงมาแสดงผลเพื่อประกอบการวางแผน (Live Market Data)'
            ],
            techTitle: 'สถาปัตยกรรม Fintech ที่แข็งแกร่ง',
            techDetail: 'ออกแบบระบบให้เสถียรและรวดเร็วด้วย Golang (Backend), Next.js (Frontend) และเก็บข้อมูลด้วย PostgreSQL (Database) โดยรันทุกอย่างบน Docker',
            stack: 'Golang | Next.js | PostgreSQL | Docker',
            visitSite: 'ลองใช้งานจริง',
            viewDetails: 'ดูเบื้องหลังการพัฒนา',
            contactParams: 'สนใจโปรเจกต์นี้',
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
                title: 'System Analyst & UX/UI Designer',
                company: 'Smart Health Service System (โรงพยาบาลมหาราชนครราชสีมา)',
                period: '2567',
                description: 'วิเคราะห์และออกแบบระบบ Smart Health ทั้งหมด โดย Consult ตรงกับแพทย์จริง เพื่อแก้ปัญหา Legacy System และส่งมอบเอกสาร SA ระดับมืออาชีพ',
                achievements: [
                    '📋 เอกสาร SA 13+ ชิ้น: Use Case, Class Diagram, DFD Level 0-2, Activity, Sequence, SRS',
                    '🗄️ ออกแบบ Database: ER-Diagram, Relational Schema, Normalization, Data Dictionary',
                    '🎨 UX/UI Prototype: Wireframe & Mockup ระดับมืออาชีพด้วย Figma'
                ],
                impact: '17+ เอกสาร',
                impactLabel: 'SA Deliverables',
                stack: 'Figma | Visio | SA/DFD/SRS | ER-Diagram'
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
