'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

/*
  ==============================
  MAIN PAGE
  ==============================
  The single-page portfolio application that composes all sections:
  1. Header - Sticky navigation with dark mode and language toggle
  2. Hero - Name, title, and CTA buttons
  3. FeaturedProject - MMRRDiKub bento grid showcase
  4. Experience - Work history timeline with impact stats
  5. Skills - Technical skills icon grid
  6. Contact - Footer with social links and email CTA
  7. ResumeModal - PDF viewer popup

  Page Flow:
  - User lands on Hero section
  - Can navigate via header or scroll
  - Click "View Resume" opens modal
  - Click "Contact Me" scrolls to footer
  - All animations trigger on scroll/interaction
*/

export default function Home() {
  // State for resume modal
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Hero Section - Landing area with name and CTAs */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* Featured Project - MMRRDiKub Showcase */}
      <FeaturedProject />

      {/* Work Experience Timeline */}
      <Experience />

      {/* Technical Skills Grid */}
      <Skills />

      {/* Contact / Footer Section */}
      <Contact />

      {/* Resume Modal - Opens on "View Resume" click */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
