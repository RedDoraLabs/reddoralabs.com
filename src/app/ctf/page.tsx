"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Terminal,
  Globe,
  Search,
  FileCode2,
  Binary,
  Trophy,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Flag,
  Swords,
  Brain,
  Lock,
  ChevronDown,
  Star,
  Award,
  Timer,
  IndianRupee,
  Wifi,
  Medal,
} from "lucide-react";
import { useState } from "react";

export default function CTFPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const categories = [
    {
      icon: Globe,
      title: "Web Exploitation",
      count: 5,
      color: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      desc: "SQL injection, SSTI, IDOR, cookie manipulation, deserialization",
    },
    {
      icon: Lock,
      title: "Cryptography",
      count: 4,
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      text: "text-purple-400",
      desc: "Caesar, Vigenère, RSA, AES — decode your way to the flag",
    },
    {
      icon: Search,
      title: "OSINT",
      count: 4,
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/20",
      text: "text-amber-400",
      desc: "Digital footprints, geolocation, metadata, social engineering",
    },
    {
      icon: FileCode2,
      title: "Forensics",
      count: 4,
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
      text: "text-green-400",
      desc: "PCAP analysis, steganography, memory dumps, corrupted files",
    },
    {
      icon: Binary,
      title: "Misc / Reverse",
      count: 3,
      color: "from-red-500/20 to-red-500/5",
      border: "border-red-500/20",
      text: "text-red-400",
      desc: "Binary reversing, Python jails, sanity checks",
    },
  ];

  const timeline = [
    { date: "Aug 19", event: "Registrations Open", active: true },
    { date: "Aug 28", event: "Registration Closes", active: false },
    { date: "Aug 29", event: "Credentials Sent", active: false },
    { date: "Aug 30, 10 AM", event: "Competition STARTS 🔥", active: false },
    { date: "Aug 31, 10 AM", event: "Competition ENDS", active: false },
    { date: "Sep 1", event: "Winners Announced 🏆", active: false },
  ];

  const prizes = [
    {
      rank: "1st",
      icon: Trophy,
      prize: "₹5,000 Cash",
      extras: ["Internship Offer at RedDoraLabs", "Certificate of Excellence", "Letter of Recommendation", "LinkedIn Endorsement from Founder"],
      color: "from-amber-500 to-yellow-400",
      glow: "shadow-amber-500/20",
      border: "border-amber-500/30",
    },
    {
      rank: "2nd",
      icon: Medal,
      prize: "Certificate + LOR",
      extras: ["Certificate of Excellence", "Letter of Recommendation", "Featured on reddoralabs.com"],
      color: "from-slate-300 to-slate-400",
      glow: "shadow-slate-400/20",
      border: "border-slate-400/30",
    },
    {
      rank: "3rd",
      icon: Award,
      prize: "Certificate + LOR",
      extras: ["Certificate of Achievement", "Letter of Recommendation", "Featured on reddoralabs.com"],
      color: "from-orange-600 to-orange-400",
      glow: "shadow-orange-500/20",
      border: "border-orange-500/30",
    },
  ];

  const faqs = [
    {
      q: "What is a CTF?",
      a: "Capture The Flag (CTF) is a cybersecurity competition where participants solve security challenges to find hidden 'flags' — secret text strings. It's the most fun way to learn hacking legally!",
    },
    {
      q: "Do I need prior hacking experience?",
      a: "No! We have challenges from Easy to Hard. Beginners can start with the easy ones and learn as they go. All you need is curiosity and a laptop.",
    },
    {
      q: "What tools do I need?",
      a: "A laptop with internet. That's it. Useful tools include Burp Suite, Wireshark, Python, CyberChef, and a Linux terminal — but many challenges can be solved with just a browser.",
    },
    {
      q: "Can I participate solo?",
      a: "Yes! You can join as Solo (₹99) or as a Duo team of 2 (₹149). Choose what works for you.",
    },
    {
      q: "How does scoring work?",
      a: "Dynamic scoring — challenges start at full points and decrease as more people solve them. First Blood (first solver) gets a 10% bonus. No negative marking.",
    },
    {
      q: "Is flag sharing allowed?",
      a: "Absolutely NOT. We monitor for flag sharing. If two teams submit identical non-obvious solutions, both will be investigated and may be disqualified.",
    },
    {
      q: "What is the flag format?",
      a: "All flags follow the format: flag{example_text_here}. Submit the entire string including flag{ and }.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/3 rounded-full blur-[150px] pointer-events-none" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-wider mb-6">
              <Flag className="w-3.5 h-3.5" />
              NATIONAL CYBER DEFENSE CHALLENGE
            </div>

            {/* Indian flag accent line */}
            <div className="flex justify-center gap-0 mb-6">
              <div className="h-1 w-16 rounded-l-full bg-[#FF9933]" />
              <div className="h-1 w-16 bg-white" />
              <div className="h-1 w-16 rounded-r-full bg-[#138808]" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
                OPERATION
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TIRANGA
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-2">
              Defend the Digital Nation. 🇮🇳
            </p>
            <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8">
              India&apos;s Capture The Flag cybersecurity competition by RedDoraLabs.
              20 challenges. 5 categories. 24 hours. One winner.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
              {[
                { icon: Swords, label: "20 Challenges", val: "20" },
                { icon: Clock, label: "24 Hours", val: "24h" },
                { icon: Brain, label: "5 Categories", val: "5" },
                { icon: Trophy, label: "₹5,000 Prize", val: "₹5K" },
                { icon: Wifi, label: "100% Online", val: "Online" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-slate-400"
                >
                  <stat.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://unstop.com/hackathons/operation-tiranga-reddoralabs"
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl text-base hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Register Now — ₹99
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-8 py-3.5 glass border border-white/10 text-slate-300 font-semibold rounded-xl text-base hover:border-cyan-500/30 transition-all duration-300"
              >
                View Challenges
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Date banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5"
            >
              <Timer className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">COMPETITION DATE</p>
                <p className="text-sm font-bold text-white">Aug 30, 10:00 AM — Aug 31, 10:00 AM IST</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            <span className="text-cyan-400">📅</span> Event Timeline
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${
                  item.active
                    ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                    : "border-white/5 bg-white/2 text-slate-400"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.active ? "bg-cyan-400 animate-pulse" : "bg-slate-600"
                  }`}
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60">{item.date}</p>
                  <p className="text-sm font-bold">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGE CATEGORIES ===== */}
      <section id="categories" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-cyan-400">5 Categories.</span>{" "}
              <span className="text-purple-400">20 Challenges.</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              From beginner-friendly warmups to brain-melting hard challenges. 
              Every category tests a different cybersecurity skill.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-5"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative p-6 rounded-2xl border ${cat.border} bg-gradient-to-b ${cat.color} hover:scale-[1.02] transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start justify-between mb-3">
                  <cat.icon className={`w-8 h-8 ${cat.text}`} />
                  <span className={`text-xs font-bold ${cat.text} bg-white/5 px-2.5 py-1 rounded-full`}>
                    {cat.count} challenges
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{cat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}

            {/* Difficulty card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 p-6 rounded-2xl border border-white/5 bg-white/2"
            >
              <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Difficulty Distribution</h3>
              <div className="space-y-3">
                {[
                  { label: "Easy", count: 7, pct: "35%", color: "bg-green-500" },
                  { label: "Medium", count: 7, pct: "35%", color: "bg-amber-500" },
                  { label: "Hard", count: 5, pct: "25%", color: "bg-red-500" },
                  { label: "Warmup", count: 1, pct: "5%", color: "bg-cyan-500" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16 font-medium">{d.label}</span>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: d.pct }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                        className={`h-full ${d.color} rounded-full`}
                      />
                    </div>
                    <span className="text-xs text-slate-500 w-20 text-right">{d.count} challenges</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRIZES ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            <span className="text-amber-400">🏆</span> Prizes & Rewards
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {prizes.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative p-6 rounded-2xl border ${p.border} bg-gradient-to-b from-white/3 to-transparent text-center hover:shadow-xl ${p.glow} transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} mb-4`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{p.rank} Place</p>
                <p className="text-xl font-black text-white mb-4">{p.prize}</p>
                <ul className="space-y-2 text-left">
                  {p.extras.map((extra, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                      <Star className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                      {extra}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* All participants */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-5 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 text-center"
          >
            <p className="text-sm font-bold text-cyan-300 mb-1">🎖️ ALL Participants Receive</p>
            <p className="text-xs text-slate-400">
              Certificate of Participation from Reddora Labs Pvt. Ltd. • Top 10 featured on reddoralabs.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            How It <span className="text-cyan-400">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Register", desc: "Sign up on Unstop. Solo (₹99) or Duo (₹149).", icon: Users },
              { step: "02", title: "Get Credentials", desc: "Receive your CTF platform login on Aug 29.", icon: Lock },
              { step: "03", title: "Hack", desc: "Solve challenges across 5 categories for 24 hours.", icon: Terminal },
              { step: "04", title: "Win", desc: "Top the leaderboard. Claim your prize.", icon: Trophy },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass border border-white/5 mb-3">
                  <s.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-[10px] font-bold text-cyan-500 tracking-widest mb-1">STEP {s.step}</p>
                <p className="text-sm font-bold text-white mb-1">{s.title}</p>
                <p className="text-xs text-slate-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RULES ===== */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            📜 Rules & <span className="text-purple-400">Guidelines</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 space-y-3"
          >
            {[
              "Open to all Indian residents. No age restriction.",
              "Team size: Solo (1 person) or Duo (max 2 members).",
              "Duration: 24 hours — Aug 30, 10:00 AM to Aug 31, 10:00 AM IST.",
              "Format: Jeopardy-style. Solve challenges, find flags, earn points.",
              "Flag format: flag{example_text_here}",
              "Internet, tools, and resources are freely allowed. This is NOT an exam.",
              "Sharing flags, brute-forcing submissions, or attacking infrastructure = instant disqualification.",
              "Dynamic scoring — challenge points decrease as more teams solve them.",
              "First Blood bonus: First solver gets +10% bonus points.",
              "All decisions by the organizers are final.",
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xs font-bold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-slate-300">{rule}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            ❓ Frequently Asked <span className="text-cyan-400">Questions</span>
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="relative z-10">
              {/* Flag line */}
              <div className="flex justify-center gap-0 mb-6">
                <div className="h-1 w-12 rounded-l-full bg-[#FF9933]" />
                <div className="h-1 w-12 bg-white" />
                <div className="h-1 w-12 rounded-r-full bg-[#138808]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Ready to <span className="text-cyan-400">Hack</span>?
              </h2>
              <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                20 challenges. 5 categories. 24 hours. ₹5,000 cash prize.
                Registration closes Aug 28. Don&apos;t miss out.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://unstop.com/hackathons/operation-tiranga-reddoralabs"
                  target="_blank"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl text-base hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20have%20a%20question%20about%20Operation%20Tiranga%20CTF."
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-3.5 glass border border-white/10 text-slate-300 font-semibold rounded-xl text-base hover:border-cyan-500/30 transition-all duration-300"
                >
                  <Zap className="w-4 h-4" />
                  Ask a Question
                </Link>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                Organized by <span className="text-white font-semibold">Reddora Labs Private Limited</span> · CIN: U62099MR2026PTC478260
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
