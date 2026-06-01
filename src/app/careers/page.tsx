"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  PenTool,
  Megaphone,
  Bug,
  ArrowRight,
  MessageSquare,
  Zap,
  Heart,
  Rocket,
} from "lucide-react";

export default function Careers() {
  const positions = [
    {
      icon: PenTool,
      title: "Content Writing Intern",
      type: "Internship · Remote",
      desc: "Help us craft blog posts, social media content, YouTube video scripts, and technical documentation that educates and inspires the cybersecurity community.",
      responsibilities: [
        "Write engaging posts for LinkedIn, Twitter/X, and Instagram",
        "Draft scripts for YouTube educational content",
        "Create technical blog articles on cybersecurity and AI topics",
        "Develop case studies and service documentation",
      ],
      color: "primary",
      wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Content%20Writing%20Intern%20position.%20Here%20is%20my%20resume.",
    },
    {
      icon: Megaphone,
      title: "Social Media Manager Intern",
      type: "Internship · Remote",
      desc: "Own our social media presence across all platforms. Plan, create, schedule, and analyze content while maintaining brand consistency and growing our audience.",
      responsibilities: [
        "Manage posting schedules across LinkedIn, Instagram, X, Facebook, YouTube",
        "Create branded carousels, reels, and visual content in Canva",
        "Engage with followers and build community",
        "Track analytics and optimize content strategy",
      ],
      color: "secondary",
      wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Social%20Media%20Manager%20Intern%20position.%20Here%20is%20my%20resume.",
    },
    {
      icon: Bug,
      title: "Cybersecurity Analyst Intern",
      type: "Internship · Remote / Hybrid",
      desc: "Get real-world, hands-on experience in offensive security. Work on actual VAPT engagements, vulnerability research, and security auditing under expert mentorship.",
      responsibilities: [
        "Web application & API penetration testing",
        "Android & iOS mobile app security testing",
        "Vulnerability assessment and report writing",
        "Security research and tool development",
      ],
      color: "accent-red",
      wa: "https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20the%20Cybersecurity%20Analyst%20Intern%20position.%20Here%20is%20my%20resume.",
    },
  ];

  const perks = [
    {
      icon: Rocket,
      title: "Real-World Experience",
      desc: "Work on actual client projects and products, not mock assignments.",
    },
    {
      icon: Heart,
      title: "Mentorship",
      desc: "Direct 1-on-1 guidance from founders with industry experience.",
    },
    {
      icon: Zap,
      title: "Certificate & Letter",
      desc: "Receive an official internship certificate and recommendation letter.",
    },
    {
      icon: Users,
      title: "Grow With Us",
      desc: "Top performers get the opportunity to join the core team.",
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <section className="pt-16 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
          >
            <Users className="w-3.5 h-3.5 text-secondary" />
            <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-widest">
              We&apos;re Hiring
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Join RedDoraLabs
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Build the future of cybersecurity and AI with us. We&apos;re looking for passionate people who want to learn, grow, and make an impact from day one.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-5 rounded-2xl bg-[#0d0d15]/40 border border-zinc-900 text-center flex flex-col items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{perk.title}</h3>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Open Positions</h2>
            <p className="text-zinc-400 text-xs mt-2 max-w-md mx-auto">
              Apply via WhatsApp with your resume. We review every application personally.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {positions.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-zinc-900"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />
                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-zinc-900 border border-${role.color}/20 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 text-${role.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{role.title}</h3>
                          <span className="text-zinc-500 text-[11px] font-mono">{role.type}</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed mb-6">{role.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {role.responsibilities.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                            <span className="text-zinc-300 text-[11px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end md:items-center shrink-0">
                      <a
                        href={role.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Apply via WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We&apos;re always looking for talented individuals. Send us your resume and tell us how you can contribute to RedDoraLabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20would%20love%20to%20work%20with%20you.%20Here%20is%20my%20resume%20and%20what%20I%20can%20bring%20to%20the%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-300"
            >
              Send General Application
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
