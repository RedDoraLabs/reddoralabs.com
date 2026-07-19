"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Star,
  Trophy,
  Users,
  Megaphone,
  Rocket,
  Award,
  Zap,
  CheckCircle,
  MessageCircle,
  Globe,
  TrendingUp,
  Crown,
} from "lucide-react";

const FORM_LINK = "https://forms.gle/Zn5YEqHbk4TXdhJL9";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Ambassador() {
  const tiers = [
    {
      name: "Bronze",
      emoji: "🥉",
      points: "0 – 99 pts",
      color: "from-amber-700 to-amber-900",
      borderColor: "border-amber-700/30",
      glowColor: "shadow-amber-900/20",
      rewards: ["Official Digital Certificate", "LinkedIn Badge"],
    },
    {
      name: "Silver",
      emoji: "🥈",
      points: "100 – 249 pts",
      color: "from-zinc-400 to-zinc-500",
      borderColor: "border-zinc-400/30",
      glowColor: "shadow-zinc-400/20",
      rewards: [
        "Official Certificate",
        "Letter of Recommendation",
        "LinkedIn Endorsement from Founder",
      ],
    },
    {
      name: "Gold",
      emoji: "🥇",
      points: "250+ pts",
      color: "from-yellow-400 to-amber-500",
      borderColor: "border-yellow-400/30",
      glowColor: "shadow-yellow-400/20",
      rewards: [
        "Official Certificate",
        "Letter of Recommendation",
        "Internship Offer at RedDoraLabs",
        "Featured on our Website",
        "LinkedIn Endorsement from Founder",
      ],
    },
  ];

  const pointsSystem = [
    { activity: "Share a RedDoraLabs post on LinkedIn", points: 5 },
    { activity: "Share on Instagram story", points: 3 },
    { activity: "Create a cybersecurity reel/post tagging us", points: 20 },
    { activity: "Write a blog/article mentioning RedDoraLabs", points: 25 },
    { activity: "Get someone to apply for internship", points: 10 },
    { activity: "Refer another campus ambassador", points: 15 },
    { activity: "Organize a cybersecurity session at college", points: 50 },
    { activity: "Bring a client lead", points: 75 },
    { activity: "Get college to host a RedDoraLabs workshop", points: 100 },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Official Certificate & LOR",
      desc: "Performance-based certificate and Letter of Recommendation signed by the Founder & CEO.",
    },
    {
      icon: Users,
      title: "Founder Mentorship",
      desc: "Direct access to the founding team. Get mentored on building, marketing, and leadership.",
    },
    {
      icon: Rocket,
      title: "Internship Priority",
      desc: "Top-performing Gold tier ambassadors get priority for paid internship positions.",
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      desc: "Join a community of 50+ student leaders across colleges. Network, collaborate, grow.",
    },
    {
      icon: TrendingUp,
      title: "Resume Powerhouse",
      desc: "\"Campus Ambassador at a registered Pvt Ltd cybersecurity company\" — instant resume upgrade.",
    },
    {
      icon: Star,
      title: "Exclusive Event Access",
      desc: "Early access to RedDoraLabs CTFs, hackathons, workshops, and webinars before anyone else.",
    },
  ];

  const responsibilities = [
    "Represent RedDoraLabs at your campus and in your college community",
    "Share RedDoraLabs content 2-3 times/week on LinkedIn & Instagram",
    "Organize or co-organize at least 1 cybersecurity event at your college",
    "Identify students interested in cybersecurity internships and training",
    "Submit a brief monthly activity report (takes 2 minutes)",
  ];

  return (
    <main className="min-h-screen bg-[#050508] pt-28 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="grid-bg absolute inset-0 opacity-[0.04] pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
        >
          <Crown className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
            Season 1 — Applications Open
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Become a{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Campus Ambassador
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Represent RedDoraLabs at your college. Organize events, build your
          network, earn certificates, and unlock internship opportunities — all
          through a gamified points system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-all duration-300 group"
          >
            Apply Now — It&apos;s Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-sm text-zinc-500 font-mono">
            Deadline: 31 July, 2026
          </span>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "3 Months", label: "Program Duration" },
            { value: "₹0", label: "Registration Fee" },
            { value: "50+", label: "Colleges Targeted" },
            { value: "100%", label: "Remote & Flexible" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass p-6 rounded-2xl text-center border border-zinc-800/50"
            >
              <div className="text-2xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What You Get
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            This isn&apos;t just a title on your resume. It&apos;s a launchpad
            for your career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass p-6 rounded-2xl border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tier System */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Gamified Tier System
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Earn points for every activity. More points = higher tier = better
            rewards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`relative glass rounded-3xl border ${tier.borderColor} overflow-hidden group hover:${tier.glowColor} transition-all duration-300`}
            >
              <div
                className={`h-1.5 bg-gradient-to-r ${tier.color} w-full`}
              />
              <div className="p-8">
                <div className="text-4xl mb-4">{tier.emoji}</div>
                <h3 className="text-2xl font-extrabold text-white mb-1">
                  {tier.name} Tier
                </h3>
                <p className="text-sm text-zinc-500 font-mono mb-6">
                  {tier.points}
                </p>
                <ul className="space-y-3">
                  {tier.rewards.map((reward) => (
                    <li key={reward} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-zinc-300">{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Points System */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            How Points Work
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Every action earns you points. The more you contribute, the higher
            you climb.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-zinc-800/50 overflow-hidden"
        >
          {pointsSystem.map((item, i) => (
            <div
              key={item.activity}
              className={`flex items-center justify-between px-6 py-4 ${
                i !== pointsSystem.length - 1
                  ? "border-b border-zinc-800/30"
                  : ""
              } hover:bg-white/[0.02] transition-colors`}
            >
              <span className="text-sm text-zinc-300">{item.activity}</span>
              <span
                className={`font-mono text-sm font-bold shrink-0 ml-4 ${
                  item.points >= 50
                    ? "text-yellow-400"
                    : item.points >= 20
                    ? "text-primary"
                    : "text-zinc-400"
                }`}
              >
                +{item.points} pts
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* What You'll Do */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What You&apos;ll Do
          </h2>
        </motion.div>

        <div className="space-y-4">
          {responsibilities.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 glass p-5 rounded-2xl border border-zinc-800/50"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-bold text-secondary">
                  {i + 1}
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-cyan p-8 sm:p-12 rounded-3xl text-center"
        >
          <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Who Can Apply?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-8">
            {[
              "Currently enrolled college student (any year)",
              "Passionate about technology & cybersecurity",
              "Active on LinkedIn and/or Instagram",
              "B.Tech / BCA / MCA / B.Sc IT preferred (not mandatory)",
              "Leadership or event experience is a plus",
              "Located anywhere in India",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Timeline
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              date: "Now",
              event: "Applications Open",
              status: "live",
            },
            {
              date: "31 Jul",
              event: "Application Deadline",
              status: "upcoming",
            },
            {
              date: "3 Aug",
              event: "Results Announced",
              status: "upcoming",
            },
            {
              date: "Aug - Oct",
              event: "Program Duration",
              status: "upcoming",
            },
          ].map((item, i) => (
            <motion.div
              key={item.date}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`glass p-6 rounded-2xl border ${
                item.status === "live"
                  ? "border-primary/40 bg-primary/5"
                  : "border-zinc-800/50"
              } text-center`}
            >
              {item.status === "live" && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse mx-auto mb-3" />
              )}
              <div className="text-lg font-extrabold text-white">
                {item.date}
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
                {item.event}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#0d0d15] to-secondary/20" />
          <div className="grid-bg absolute inset-0 opacity-[0.05]" />

          <div className="relative z-10 p-10 sm:p-16 text-center">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Represent?
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-8">
              Join the first cohort of RedDoraLabs Campus Ambassadors. Build
              your career while building the cybersecurity community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-all duration-300 group"
              >
                Apply Now — Free
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/919699646517?text=Hi%20RedDoraLabs!%20I%20have%20a%20question%20about%20the%20Campus%20Ambassador%20Program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Have questions? WhatsApp us
              </a>
            </div>

            <p className="text-xs text-zinc-600 font-mono mt-6">
              Reddora Labs Private Limited · CIN: U62099MR2026PTC478260
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
