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
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  MessageSquare
} from "lucide-react";

export default function Services() {
  const cybersecServices = [
    {
      title: "Web Application VAPT",
      desc: "Comprehensive testing targeting OWASP Top 10, logical bypasses, session vulnerabilities, and business logic flaws.",
      features: ["OWASP Top 10 auditing", "Business logic flow check", "Detailed manual exploitation", "Remediation verification"],
    },
    {
      title: "Mobile Application VAPT",
      desc: "Static and dynamic analysis of iOS and Android binaries. We audit storage patterns, transit security, and API calls.",
      features: ["Binary reverse engineering", "Local data storage review", "Root/Jailbreak bypass check", "Secure transmission audit"],
    },
    {
      title: "Network VAPT",
      desc: "External and internal infrastructure security audits. We find vulnerable open ports, unpatched software, and configuration issues.",
      features: ["Network perimeter scanning", "Firewall configuration check", "Vulnerable service exploitation", "Privilege escalation testing"],
    },
    {
      title: "API Security Testing",
      desc: "Specialized auditing for REST, GraphQL, and WebSocket APIs. We test authorization boundaries and data leakage.",
      features: ["BOLA/IDOR auditing", "Token configuration check", "Rate limiting & DoS testing", "Injection flaw auditing"],
    },
    {
      title: "Source Code Review",
      desc: "Security-focused static code analysis (SAST) and manual code walk-throughs to uncover hidden logical and cryptographic vulnerabilities.",
      features: ["Multi-language auditing", "Logical flaw inspection", "Hardcoded credentials check", "Dependency vulnerability review"],
    },
    {
      title: "Red Teaming",
      desc: "Adversary simulation mimicry to test your company's detection, blocking, response, and resilience thresholds against real-world hacks.",
      features: ["Phishing simulation", "Credential harvesting", "Evasion testing", "Critical system penetration"],
    },
    {
      title: "Cloud Security Assessment",
      desc: "Auditing AWS, GCP, and Azure configurations. We identify structural IAM issues, open buckets, and vulnerable network linkages.",
      features: ["IAM configuration audit", "Public asset discovery", "Storage bucket policies check", "Cloud compliance alignment"],
    },
  ];

  const aiServices = [
    {
      title: "AI Workflow Automation",
      desc: "Integrating intelligent LLM-powered nodes and agents to handle redundant startup workflows and boost speed 10x.",
      features: ["Workflow efficiency analysis", "Custom AI agent development", "Secure vector database link", "System API integration"],
    },
    {
      title: "AI Integration Consulting",
      desc: "We consult startup founders on which AI models to select, stack requirements, open-source hosting, and budget optimization.",
      features: ["Foundational model advisory", "Hosting cost optimization", "AI safety guidelines setup", "Custom agent roadmap creation"],
    },
    {
      title: "LLM Security Testing",
      desc: "Our unique research-backed service. We test custom models and interfaces against prompt injection, model jailbreaks, and sensitive data leakage.",
      features: ["Prompt injection testing", "Model jailbreak attempts", "System prompt leaks check", "Data exfiltration analysis"],
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Header Banner */}
      <section className="pt-16 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Premium offensive cybersecurity assessments alongside future-focused artificial intelligence integrations.
          </motion.p>
        </div>
      </section>

      {/* Cybersecurity Vertical */}
      <section id="cybersec" className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest block">Pillar One</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Offensive Cybersecurity</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cybersecServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass p-8 rounded-3xl relative overflow-hidden group hover-glow-cyan"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-900">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-zinc-300 text-[11px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Vertical */}
      <section id="ai" className="py-16 border-t border-[#1e1e2f]/20 bg-[#030305]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-widest block">Pillar Two</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">AI Solutions & Integrations</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass p-8 rounded-3xl relative overflow-hidden group hover-glow-purple flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full filter blur-xl pointer-events-none" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-4 border-t border-zinc-900 mt-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="text-zinc-300 text-[11px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings & Workshops */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full filter blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full filter blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 mb-4">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                Community & Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Trainings & Bootcamps
              </h2>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                We organize corporate security awareness workshops, deep-dive bug bounty training bootcamps, and build local cybersecurity skillsets. 
                Follow our official YouTube channel **HackingMarathon** to learn active cybersecurity methodologies for free.
              </p>
              <a
                href="https://youtube.com/@HackingMarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Visit HackingMarathon on YouTube
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3 relative z-10">
              <div className="p-4 rounded-xl bg-[#0d0d15] border border-zinc-800 text-xs">
                <h4 className="font-bold text-white mb-1">🎯 Bug Bounty Bootcamp</h4>
                <p className="text-zinc-400 text-[11px]">Next cohort launching soon</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0d0d15] border border-zinc-800 text-xs">
                <h4 className="font-bold text-white mb-1">🤖 AI for Founders</h4>
                <p className="text-zinc-400 text-[11px]">Automating workflow safely</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 border-t border-[#1e1e2f]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Need a Customized Assessment Scope?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Every software stack has unique logical entrypoints. Let's discuss your product architectures and tailor a perfect security audit or AI build roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/919028586517"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0d0d15] hover:bg-[#111118] border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
