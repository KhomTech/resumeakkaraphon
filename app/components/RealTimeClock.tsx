'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

/*
  ==============================
  REAL-TIME CLOCK - BILINGUAL
  ==============================
  - Displays time in Thai or English based on language
  - Shows urgency for internship search
  - Premium smooth animations
*/

export default function RealTimeClock() {
    const { language } = useLanguage();
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        // Initialize time
        setTime(new Date());

        // Update every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!time) return null; // Prevent hydration mismatch

    const isEnglish = language === 'en';

    // Date options
    const optionsDate: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Format based on language
    const displayDate = isEnglish
        ? time.toLocaleDateString('en-US', optionsDate)
        : time.toLocaleDateString('th-TH', optionsDate);

    const displayTime = time.toLocaleTimeString(isEnglish ? 'en-US' : 'th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return (
        <div className="flex flex-col items-center sm:items-start justify-center animate-in fade-in duration-1000">
            {/* Row 1: Time (Emphasized) + GMT (Faded) */}
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono tracking-widest gradient-text tabular-nums">
                    {displayTime}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[var(--text-secondary)] opacity-50">
                    BKK (GMT+7)
                </span>
            </div>

            {/* Row 2: Date (Subtle) */}
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">
                {displayDate}
            </div>
        </div>
    );
}
