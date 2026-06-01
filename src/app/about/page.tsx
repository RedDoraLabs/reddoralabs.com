"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Cpu, 
  Eye, 
  Users, 
  Award,
  Zap,
  PenTool,
  Megaphone,
  Bug,
  ArrowRight
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
      icon: Award,
      title: "Startup-Friendly Pricing",
      desc: "Enterprise-grade security at prices that won't burn your runway. We've been there — we understand budget constraints.",
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

      {/* Join Our Team — Internships */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">We&apos;re Hiring</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Join the RedDoraLabs Team</h2>
            <p className="text-zinc-400 text-xs mt-2 max-w-md mx-auto">
              We&apos;re looking for passionate interns to grow with us. Learn, build, and make an impact from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Content Writing Intern",
                desc: "Help us craft blog posts, social media content, YouTube video scripts, and technical documentation that educates and inspires the cybersecurity community.",
                color: "primary",
                wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Content%20Writing%20Intern%20position.%20Here%20is%20my%20resume.",
              },
              {
                icon: Megaphone,
                title: "Social Media Manager Intern",
                desc: "Manage our presence across LinkedIn, Instagram, Twitter/X, Facebook, and YouTube. Plan, schedule, and post content while maintaining brand consistency.",
                color: "secondary",
                wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Social%20Media%20Manager%20Intern%20position.%20Here%20is%20my%20resume.",
              },
              {
                icon: Bug,
                title: "Cybersecurity Analyst Intern",
                desc: "Get hands-on experience in VAPT, web app testing, Android & iOS security, API penetration testing, and vulnerability research under expert mentorship.",
                color: "accent-red",
                wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Cybersecurity%20Analyst%20Intern%20position.%20Here%20is%20my%20resume.",
              },
            ].map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-8 rounded-3xl relative overflow-hidden border border-zinc-900 flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-zinc-900 border border-${role.color}/20 flex items-center justify-center mb-6`}>
                      <Icon className={`w-5 h-5 text-${role.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6">{role.desc}</p>
                  </div>
                  <a
                    href={role.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-xs font-semibold hover:gap-3 transition-all"
                  >
                    Apply via WhatsApp
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
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
                Udyam: UDYAM-MH-27-0261181
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
