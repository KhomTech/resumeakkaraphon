'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/*
  ==============================
  THEME PROVIDER
  ==============================
  Manages dark/light mode state across the application.
  - Persists preference to localStorage
  - Detects system preference on first load
  - Provides toggle function via context
  - Uses 'dark' class on <html> element for Tailwind
*/

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

// Create context with default values to prevent "undefined" errors
const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => { },
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize with dark theme (Fintech style default)
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Effect: Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);

    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Effect: Apply theme changes to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {/* Apply dark class immediately to prevent flash */}
      <div className={mounted ? '' : 'dark'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Hook with safe default - won't throw error if used outside provider
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context;
}
