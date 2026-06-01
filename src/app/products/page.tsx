"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Target,
  Layers,
  BookOpen,
  Shield,
  Globe,
  Cloud,
  Monitor,
  Bug,
  ArrowRight,
  MessageSquare,
  Zap,
  Star,
  Map,
  Award,
} from "lucide-react";

export default function Products() {
  const regions = [
    {
      name: "Web Region",
      desc: "Master web vulnerabilities — XSS, SQLi, CSRF, SSRF, IDOR, and more.",
      icon: Globe,
      color: "primary",
      vulnCount: "50+",
    },
    {
      name: "Network Region",
      desc: "Conquer network protocols, port exploitation, privilege escalation, and lateral movement.",
      icon: Monitor,
      color: "secondary",
      vulnCount: "35+",
    },
    {
      name: "Cloud Region",
      desc: "Tackle cloud misconfigurations, IAM bypasses, and container escapes across AWS, Azure, GCP.",
      icon: Cloud,
      color: "emerald-400",
      vulnCount: "30+",
    },
    {
      name: "Blue Region",
      desc: "Defensive security — SOC operations, log analysis, incident response, and threat hunting.",
      icon: Shield,
      color: "sky-400",
      vulnCount: "40+",
    },
    {
      name: "Malware Region",
      desc: "Reverse engineering, malware analysis, binary exploitation, and forensic investigation.",
      icon: Bug,
      color: "accent-red",
      vulnCount: "25+",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Catch Vulnerabilities",
      desc: "Every vulnerability is a creature to discover, study, and capture. Complete hands-on labs to add them to your VulnDex.",
    },
    {
      icon: Layers,
      title: "Evolve Your Skills",
      desc: "Each vulnerability evolves through stages — Basic, Intermediate, Advanced. Go deeper to unlock full mastery and earn evolution badges.",
    },
    {
      icon: Trophy,
      title: "Earn Security Badges",
      desc: "Defeat Gym Challenges — boss-level scenarios that test everything you've learned. Earn badges displayed on your profile.",
    },
    {
      icon: BookOpen,
      title: "VulnDex Encyclopedia",
      desc: "Your personal vulnerability encyclopedia. Track every vulnerability you've discovered, studied, and mastered across all regions.",
    },
    {
      icon: Star,
      title: "Professor Root — AI Mentor",
      desc: "Stuck on a challenge? Professor Root, your AI-powered mentor, guides you with hints, explanations, and learning paths.",
    },
    {
      icon: Map,
      title: "5 Regions to Explore",
      desc: "Journey through Web, Network, Cloud, Blue Team, and Malware regions. Each region has unique vulnerabilities and gym challenges.",
    },
  ];

  const legendaries = [
    { name: "Log4Shell", type: "Remote Code Execution", difficulty: "Legendary", color: "text-red-400" },
    { name: "EternalBlue", type: "SMB Exploit", difficulty: "Legendary", color: "text-blue-400" },
    { name: "Heartbleed", type: "Memory Leak", difficulty: "Legendary", color: "text-pink-400" },
    { name: "ShellShock", type: "Bash Injection", difficulty: "Legendary", color: "text-amber-400" },
    { name: "Stuxnet", type: "ICS/SCADA", difficulty: "Mythical", color: "text-purple-400" },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Hero */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/8 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-red/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
          >
            <Gamepad2 className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              Flagship Product by RedDoraLabs
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
          >
            Vuln<span className="bg-gradient-to-r from-amber-400 via-red-400 to-purple-500 bg-clip-text text-transparent">è</span>mon
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl font-semibold text-zinc-300 mb-2"
          >
            Learn Cybersecurity Like a Game
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Catch vulnerabilities. Evolve your skills. Become a Cyber Master. A gamified, level-based cybersecurity training platform where every vulnerability is a creature to discover, study, and conquer.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20Vuln%C3%A8mon%20-%20your%20gamified%20cybersecurity%20platform.%20Please%20share%20more%20details%20and%20early%20access%20info."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Gamepad2 className="w-4 h-4" />
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:prem@reddoralabs.com?subject=Interested%20in%20Vulnemon"
              className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Your Journey to <span className="text-amber-400">Cyber Master</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              No prior knowledge needed. Start from Level 1 and progress through an entire world of cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Choose Your Starter",
                desc: "Pick your first vulnerability to study — XSS, SQL Injection, or IDOR. Every Cyber Master starts somewhere.",
                color: "from-amber-500/20 to-amber-500/5",
              },
              {
                step: "02",
                title: "Explore Regions",
                desc: "Travel through 5 regions — Web, Network, Cloud, Blue Team, and Malware. Each region has unique challenges and vulnerabilities to discover.",
                color: "from-red-500/20 to-red-500/5",
              },
              {
                step: "03",
                title: "Become a Cyber Master",
                desc: "Defeat Gym Challenges, earn Security Badges, fill your VulnDex, and compete in the Vulnèmon League to prove your mastery.",
                color: "from-purple-500/20 to-purple-500/5",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-3xl border border-zinc-900 bg-[#0d0d15]/40 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                <span className="text-5xl font-bold text-zinc-800 font-mono">{item.step}</span>
                <h3 className="text-lg font-bold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 border-t border-[#1e1e2f]/20 bg-[#030305]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Platform Features</h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
              Everything you need to go from zero to cybersecurity professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-2xl border border-zinc-900/50 bg-[#0d0d15]/40 hover:border-amber-500/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{feature.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Map */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <Map className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                The World Map
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              5 Regions to Explore
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
              Each region is a unique cybersecurity domain with its own vulnerabilities, gyms, and legendary encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((region, index) => {
              const Icon = region.icon;
              return (
                <motion.div
                  key={region.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl border border-zinc-900 text-center hover:border-amber-500/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-${region.color}/10 border border-${region.color}/20 flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 text-${region.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{region.name}</h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed mb-3">{region.desc}</p>
                  <span className="text-amber-400 font-mono text-xs font-bold">{region.vulnCount} Challenges</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legendary Vulnèmon */}
      <section className="py-16 border-t border-[#1e1e2f]/20 bg-[#030305]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ⚡ Legendary Vulnèmon
            </h2>
            <p className="text-zinc-400 text-xs mt-2 max-w-sm mx-auto">
              The most powerful and famous vulnerabilities in history. Only the best Cyber Masters can face these challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {legendaries.map((legend, index) => (
              <motion.div
                key={legend.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-[#0d0d15] border border-zinc-800 hover:border-amber-500/30 transition-all text-center group"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h4 className={`text-sm font-bold ${legend.color} mb-1`}>{legend.name}</h4>
                <p className="text-zinc-500 text-[10px] mb-2">{legend.type}</p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  {legend.difficulty}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnèmon League */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The Vulnèmon League
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                Collected all badges? Mastered every region? It&apos;s time for the ultimate test. Enter the Vulnèmon League — a comprehensive challenge that combines everything you&apos;ve learned. Only true Cyber Masters earn the League Champion title.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20am%20interested%20in%20Vuln%C3%A8mon%20-%20your%20gamified%20cybersecurity%20platform.%20I%20want%20to%20know%20more%20about%20early%20access%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-4 h-4" />
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:prem@reddoralabs.com?subject=Vulnemon%20Early%20Access"
                  className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
