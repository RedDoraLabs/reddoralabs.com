"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Cpu, 
  Eye, 
  Users, 
  Award,
  Zap
} from "lucide-react";

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

export default function About() {
  const brandDecoders = [
    {
      word: "Red",
      meaning: "Offensive Mindset",
      desc: "Inspired by Red Team methodologies. We look at digital systems from an active attacker's perspective to discover vulnerabilities first.",
      color: "text-accent-red border-accent-red/20 bg-accent-red/5",
    },
    {
      word: "Dora",
      meaning: "Exploration & Search",
      desc: "Represents searchers and explorers. Pushing frontiers of secure programming models and deep learning automations.",
      color: "text-primary border-primary/20 bg-primary/5",
    },
    {
      word: "Labs",
      meaning: "Research & Build",
      desc: "We are a laboratory first. Always coding, auditing, analyzing logic, and building open-source developer tooling.",
      color: "text-secondary border-secondary/20 bg-secondary/5",
    },
  ];

  const corePillars = [
    {
      icon: Shield,
      title: "Hacker-Builder Synergy",
      desc: "We don't just find vulnerabilities; we understand the engineering code underneath. We provide fixes your devs can easily merge.",
    },
    {
      icon: Cpu,
      title: "AI-First Integration",
      desc: "Artificial intelligence shouldn't be an afterthought. We secure large language models and integrate AI natively into businesses.",
    },
    {
      icon: Users,
      title: "Community Driven",
      desc: "Through our content branch HackingMarathit, we teach offensive security to thousands of students, expanding the skill pipeline.",
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Header Hero */}
      <section className="pt-16 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Bridging the gap between active security testing and modern intelligent AI workflows.
          </motion.p>
        </div>
      </section>

      {/* Brand Identity / Naming Decode */}
      <section className="py-12 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Decoding RedDoraLabs</h2>
            <p className="text-zinc-400 text-xs mt-2 max-w-md mx-auto">
              Our name outlines our core ethos, active mission, and deep technological focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandDecoders.map((item, index) => (
              <motion.div
                key={item.word}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-3xl relative overflow-hidden border border-zinc-900"
              >
                <div className={`inline-flex items-center justify-center font-mono text-3xl font-bold px-4 py-2 rounded-xl border ${item.color} mb-6`}>
                  {item.word}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.meaning}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 border-t border-[#1e1e2f]/20 bg-[#030305]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h2>
          <blockquote className="text-lg sm:text-xl text-zinc-300 font-medium italic leading-relaxed">
            "To deliver high-fidelity, enterprise-grade cybersecurity assessments and practical, secure AI integrations to startups and growing companies — keeping operations safe and modern."
          </blockquote>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-2xl border border-zinc-900 bg-[#0d0d15]/40 flex flex-col items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HackingMarathit Community Branch */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-red/5 rounded-full filter blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-[10px] font-mono text-accent-red mb-4">
                <Youtube className="w-4 h-4 text-accent-red animate-pulse" />
                Community Content
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                HackingMarathit
              </h2>
              <h4 className="text-sm font-mono text-zinc-300 mb-4">
                The Educational Hub of RedDoraLabs
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                HackingMarathit is our free cybersecurity education brand. We teach ethical hacking, VAPT practices, bug bounty strategies, and secure coding patterns. We believe standard corporate consulting is fueled by empowering the base community.
              </p>
              <a
                href="https://youtube.com/@HackingMarathit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent-red hover:bg-accent-red/90 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 w-fit shadow-lg shadow-accent-red/20"
              >
                Subscribe on YouTube
              </a>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-80 p-6 rounded-2xl bg-[#030305] border border-zinc-800 flex flex-col gap-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">
                Channel Core Metrics
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Content Scope</span>
                  <span className="text-white font-mono font-bold">VAPT & Bugs</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Medium</span>
                  <span className="text-white font-mono font-bold">Marathi / Hindi</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-1">
                  <span className="text-zinc-400">Cost</span>
                  <span className="text-primary font-mono font-bold">100% Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Registrations */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Registrations & Compliance</h2>
            <p className="text-zinc-400 text-xs mt-2 max-w-sm mx-auto">
              Operating under statutory compliance frameworks of the Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MSME registration */}
            <div className="glass p-8 rounded-3xl border border-zinc-900 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-primary/20 flex items-center justify-center mb-6">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Govt of India MSME</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Registered Micro Enterprise recognized under Ministry of Micro, Small and Medium Enterprises, facilitating security service guarantees.
                </p>
              </div>
              <div className="p-3 bg-[#050508] rounded-xl border border-zinc-800 text-center font-mono text-xs text-zinc-300">
                Udyam: UDYAM-MH-27-0104712
              </div>
            </div>

            {/* Startup India DPIIT */}
            <div className="glass p-8 rounded-3xl border border-zinc-900 relative overflow-hidden flex flex-col justify-between opacity-80">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full filter blur-xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-secondary/20 flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Startup India Initiative</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  DPIIT recognition roadmap in-progress, unlocking innovation support, fast-track intellectual property processing, and statutory tax holidays.
                </p>
              </div>
              <div className="p-3 bg-[#050508] rounded-xl border border-zinc-800 text-center font-mono text-xs text-zinc-400">
                Pvt Ltd Incorporation Step In-Progress
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
