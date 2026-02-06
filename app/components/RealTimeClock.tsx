'use client';

import { useState, useEffect } from 'react';

export default function RealTimeClock() {
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

    const optionsDate: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Thai Date: วันศุกร์ที่ 7 กุมภาพันธ์ 2569
    const thaiDate = time.toLocaleDateString('th-TH', optionsDate);

    // Time with Seconds: 14:30:45
    const thaiTime = time.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return (
        <div className="flex flex-col items-center sm:items-start justify-center animate-in fade-in duration-1000">
            {/* Row 1: Time (Emphasized) + GMT (Faded) */}
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono tracking-widest gradient-text tabular-nums shadow-sm">
                    {thaiTime}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[var(--text-secondary)] opacity-40">
                    BKK (GMT+7)
                </span>
            </div>

            {/* Row 2: Date (Subtle) */}
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5 ml-0.5">
                {thaiDate}
            </div>
        </div>
    );
}
