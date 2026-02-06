import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

/*
  ==============================
  ROOT LAYOUT
  ==============================
  Main application wrapper that provides:
  - Inter font (Global/English)
  - Prompt font (Thai Premium)
  - ThemeProvider for dark/light mode
  - LanguageProvider for EN/TH switching
  - SEO metadata
*/

// Load Inter font (Standard Sans)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Prompt font (Premium Thai)
const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-prompt",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Akkaraphon Worakleeb | Software Engineer & Fintech Developer",
  description:
    "Third-year Mathematics & Computer Science student at KMUTNB. Passionate about Fintech, building full-stack solutions with Golang, Next.js, PostgreSQL, and Docker.",
  keywords: [
    "Akkaraphon Worakleeb",
    "Software Engineer",
    "Fintech Developer",
    "Full Stack Developer",
    "Golang",
    "Next.js",
    "React",
    "TypeScript",
    "KMUTNB",
    "Thailand",
    "Internship",
  ],
  authors: [{ name: "Akkaraphon Worakleeb" }],
  creator: "Akkaraphon Worakleeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: "https://akkaraphon88.github.io",
    title: "Akkaraphon Worakleeb | Software Engineer & Fintech Developer",
    description:
      "Third-year Mathematics & Computer Science student. Passionate about Fintech, building full-stack solutions.",
    siteName: "Akkaraphon Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akkaraphon Worakleeb Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akkaraphon Worakleeb | Software Engineer & Fintech Developer",
    description:
      "Third-year Mathematics & Computer Science student. Passionate about Fintech, building full-stack solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.variable} ${prompt.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
