"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Cpu, 
  Terminal, 
  Code, 
  Cloud, 
  Lock, 
  Eye, 
  ArrowRight,
  Zap, 
  FileText, 
  Users, 
  Award,
  MessageSquare,
  Gamepad2,
  Trophy,
  Target,
  Layers,
  BookOpen,
  Globe,
  Smartphone,
  Mail
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const services = [
    {
      icon: Terminal,
      title: "VAPT Services",
      desc: "Penetration testing and vulnerability assessment for web apps, mobile apps, and networks.",
    },
    {
      icon: Shield,
      title: "Red Teaming",
      desc: "Full-scale adversary simulation to test your team's real-world detection and response capabilities.",
    },
    {
      icon: Code,
      title: "Source Code Review",
      desc: "Secure code auditing to identify security flaws, logical issues, and coding vulnerabilities.",
    },
    {
      icon: Cloud,
      title: "Cloud Security Audit",
      desc: "Comprehensive review of AWS, Azure, or GCP environments to identify security misconfigurations.",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      desc: "Help startups automate tedious workflows and design custom AI agent systems.",
    },
    {
      icon: Lock,
      title: "LLM Security Testing",
      desc: "Auditing custom AI models and LLMs against prompt injection and data leakage risks.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Grid overlay background */}
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Tag / Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-widest">
                AI-Native B2B Cybersec
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] text-white"
            >
              Securing the Future. <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Powering it with AI.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mt-2"
            >
              We help startups and enterprises fortify their digital infrastructure and harness the power of AI — so you can build and scale fearlessly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919699646517"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                Talk on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-20 relative border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Two Pillars. One Mission.
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
              We operate at the crucial intersection of offensive security and modern artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Cybersec */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover-glow-cyan"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Offensive Cybersecurity</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                From high-fidelity VAPT audits to strategic red teaming, we identify, exploit, and help remediate vulnerabilities before real-world threat actors do.
              </p>
              <Link
                href="/services#cybersec"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Explore Cybersec
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Pillar 2: AI Solutions */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover-glow-purple"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent AI Solutions</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We design intelligent custom agents and optimize startup workflows with secure AI stack advisory, while auditing large language models against attack vectors.
              </p>
              <Link
                href="/services#ai"
                className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:gap-3 transition-all"
              >
                Explore AI Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 relative border-t border-[#1e1e2f]/20 bg-[#030305]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              B2B Services Portfolio
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
              Expert consulting crafted specifically to support growing tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl border border-zinc-900/50 hover:border-zinc-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vulnèmon Product Teaser */}
      <section className="py-20 relative border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden border border-amber-500/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-red-500 to-purple-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/5 rounded-full filter blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    Flagship Product
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  Vuln<span className="bg-gradient-to-r from-amber-400 via-red-400 to-purple-500 bg-clip-text text-transparent">è</span>mon
                </h2>
                <p className="text-lg text-zinc-300 font-medium mb-4">
                  Learn Cybersecurity Like a Game
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xl">
                  Catch vulnerabilities. Evolve your skills. Become a Cyber Master. A gamified platform with 5 regions, 180+ challenges, legendary zero-day bosses, and Professor Root — your AI mentor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Explore Vulnèmon
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20Vuln%C3%A8mon.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    Get Early Access
                  </a>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-72 flex flex-col gap-3">
                {[
                  { label: "Regions", value: "Web · Network · Cloud · Blue · Malware" },
                  { label: "Challenges", value: "180+ Hands-On Labs" },
                  { label: "AI Mentor", value: "Professor Root" },
                  { label: "Legendaries", value: "Log4Shell · EternalBlue · Heartbleed" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-[#030305] border border-zinc-800 flex justify-between items-center text-xs">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="text-white font-mono font-bold text-[10px] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                Why Startups Choose <br />
                <span className="text-primary">RedDoraLabs</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                As a startup ourselves, we understand scaling. We don't just sell VAPT reports; we deliver strategic security partners who act as extension of your team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Hacker Mindset",
                    desc: "Offensive-first strategy. We attack to learn how to defend your assets.",
                  },
                  {
                    icon: Cpu,
                    title: "AI-First Scope",
                    desc: "We secure custom LLMs and deploy smart AI architectures securely.",
                  },
                  {
                    icon: FileText,
                    title: "Actionable Reports",
                    desc: "No automated PDF dumps. Direct steps developers can implement easily.",
                  },
                  {
                    icon: Users,
                    title: "Committed Partners",
                    desc: "Direct advisory via WhatsApp and Slack. No ticketing system friction.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0d0d15] border border-zinc-800 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-zinc-400 text-[11px] leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex items-center justify-center h-80 lg:h-[450px] w-full bg-[#0d0d15] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid-bg absolute inset-0 opacity-[0.05]" />
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]" />
              <div className="absolute w-48 h-48 bg-secondary/10 rounded-full filter blur-[60px] translate-x-12 -translate-y-12" />
              
              <div className="relative z-10 flex flex-col items-center text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-primary/20 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Government Registered Company</h3>
                <p className="text-zinc-400 text-xs max-w-xs mb-4">
                  Incorporated Private Limited Company & recognized Micro Enterprise under the Government of India.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-[#050508]/80 border border-primary/30 rounded-lg text-zinc-200 font-mono text-xs">
                    CIN: U62099MR2026PTC478260
                  </div>
                  <div className="px-4 py-2 bg-[#050508]/80 border border-zinc-800 rounded-lg text-zinc-400 font-mono text-xs">
                    UDYAM-MH-27-0261181
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-12 border-t border-b border-[#1e1e2f]/20 bg-[#030305]/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 text-center">
          {[
            { metric: "10,000+", label: "People Trained" },
            { metric: "15,000+", label: "People Helped" },
            { metric: "100%", label: "Client Satisfaction" },
            { metric: "Multiple", label: "Enterprise Clients Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.metric}
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Secure Your Growth?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Let's talk about your security requirements. We provide complimentary basic scopes and transparent, flexible consulting quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-300"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/919699646517"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
