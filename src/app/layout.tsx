import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/common/BackToTop";
import CursorGlow from "@/components/common/CursorGlow";
import PageViewTracker from "@/components/analytics/PageViewTracker";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap", // Font loading smooth korbe
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Abu Bakar Siddique | Full Stack Developer",
  description: "Portfolio of Md Abu Bakar Siddique, a Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// এই স্ক্রিপ্টটি পেজ লোড হওয়ার আগেই থিম সেট করবে, ফলে কোনো Flash হবে না
const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && supportDarkMode)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <CursorGlow />
        <PageViewTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}