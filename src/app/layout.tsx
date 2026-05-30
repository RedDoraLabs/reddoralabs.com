import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RedDoraLabs - Cybersecurity & AI Solutions",
  description: "B2B Cybersecurity VAPT, Red Teaming, Source Code Review, and AI Workflow Automations for startups and enterprises.",
  metadataBase: new URL("https://reddoralabs.com"),
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "RedDoraLabs - Cybersecurity & AI Solutions",
    description: "Securing the Future. Powering it with AI. B2B Cybersecurity and AI automation solutions.",
    siteName: "RedDoraLabs",
    images: ["/logo-full.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RedDoraLabs - Cybersecurity & AI Solutions",
    description: "Securing the Future. Powering it with AI.",
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-slate-100 selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
