"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

// Custom SVG brand icons to avoid Lucide React import issues
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/reddoralabs", icon: Linkedin },
    { name: "Twitter/X", href: "https://x.com/RedDoraLabs", icon: Twitter },
    { name: "YouTube", href: "https://youtube.com/@RedDoraLabs", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/reddoralabs", icon: Instagram },
  ];

  return (
    <footer className="bg-[#030305] border-t border-[#1e1e2f]/30 pt-20 pb-10 relative overflow-hidden">
      {/* Background grids */}
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="flex items-center group w-fit">
              <img
                src="/logo-horizontal.png"
                alt="RedDoraLabs"
                className="h-16 w-auto object-contain group-hover:brightness-110 transition-all"
              />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Securing the digital frontier. Empowering automation through intelligent artificial intelligence solutions.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#0d0d15] border border-[#1e1e2f] flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    title={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Web/App VAPT", href: "/services#cybersec" },
                { name: "Source Code Review", href: "/services#cybersec" },
                { name: "Red Teaming", href: "/services#cybersec" },
                { name: "AI Automation Setup", href: "/services#ai" },
                { name: "LLM Security Testing", href: "/services#ai" },
                { name: "Training & Academy", href: "/services#training" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legals */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
              Office
            </h3>
            <div className="flex flex-col gap-4 text-sm text-zinc-400">
              <a
                href="mailto:prem@reddoralabs.com"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                prem@reddoralabs.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Mandwa, Alibag, Raigad,
                  <br />
                  Maharashtra - 402201
                </span>
              </div>

              {/* MSME Badge */}
              <div className="mt-2 p-3.5 rounded-xl bg-[#0d0d15] border border-secondary/20 flex flex-col gap-1 shadow-inner shadow-black/40">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-wider">
                    Govt Recognized MSME
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Udyam: UDYAM-MH-27-0261181
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e1e2f]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} RedDoraLabs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
