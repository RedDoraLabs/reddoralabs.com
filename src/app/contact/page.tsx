"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "VAPT Audit",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "VAPT Audit (Web/App)",
    "Source Code Review",
    "Red Teaming Simulation",
    "Cloud Security Audit",
    "AI Workflow Automation",
    "LLM Model Auditing",
    "Other Consultancy",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Web3Forms for bootstrap free email sending
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "99b7fb62-7564-44da-8154-dc5f9122ab5e", // prem@reddoralabs.com
          subject: `New Lead: ${formData.service} from ${formData.company || formData.name}`,
          from_name: "RedDoraLabs Portal",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "VAPT Audit",
          message: "",
        });
      } else {
        alert("Submission failed. Please try again or WhatsApp us directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please connect with us directly via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen pb-20">
      <div className="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <section className="pt-16 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Connect with us to schedule VAPT audits, custom secure AI automations, or general strategic cybersecurity inquiries.
          </motion.p>
        </div>
      </section>

      {/* Content grid */}
      <section className="py-10 border-t border-[#1e1e2f]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact channels info (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="glass p-8 rounded-3xl relative overflow-hidden border border-zinc-900">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl pointer-events-none" />
                <h2 className="text-xl font-bold text-white mb-6">Connect Directly</h2>

                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <a
                    href="mailto:prem@reddoralabs.com"
                    className="flex items-start gap-4 group p-3 -m-3 rounded-2xl hover:bg-zinc-900/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                      <Mail className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Email Inquiry</h4>
                      <p className="text-zinc-400 text-xs">prem@reddoralabs.com</p>
                      <span className="text-[10px] text-primary group-hover:underline mt-1 block">
                        Send detailed specifications →
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919699646517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group p-3 -m-3 rounded-2xl hover:bg-zinc-900/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-secondary/50 transition-colors">
                      <MessageSquare className="w-5 h-5 text-zinc-400 group-hover:text-secondary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">WhatsApp Chat</h4>
                      <p className="text-zinc-400 text-xs">+91-9699646517</p>
                      <span className="text-[10px] text-secondary group-hover:underline mt-1 block">
                        Instantly connect on chat →
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-3 -m-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Location</h4>
                      <p className="text-zinc-400 text-xs">
                        Mandwa, Alibag, Raigad,
                        <br />
                        Maharashtra - 402201
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance trust details */}
              <div className="p-6 rounded-2xl bg-[#0d0d15]/40 border border-zinc-900">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <h4 className="text-sm font-bold text-white">Guaranteed Safe Scoping</h4>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  We implement full NDA policies upon requirement. All test vectors are configured securely, prioritizing zero disruption of client live workloads.
                </p>
              </div>
            </div>

            {/* Scoping Form (Right) */}
            <div className="lg:col-span-7">
              <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-zinc-900">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Scoping Query Received!</h3>
                    <p className="text-zinc-400 text-xs max-w-sm">
                      Thank you partner. We have registered your request. Our research team will review the parameters and connect back within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h2 className="text-xl font-bold text-white">Audit & Integration Scope Form</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Prem Patil"
                          className="w-full bg-[#050508] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Business Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@company.com"
                          className="w-full bg-[#050508] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Company / Org Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="RedDoraLabs"
                          className="w-full bg-[#050508] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>

                      {/* Service Selection */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Scope Requirement
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#050508] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                        >
                          {services.map((item) => (
                            <option key={item} value={item} className="bg-[#0d0d15] text-zinc-300">
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                        Scope parameters / Details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please details your product architecture, timeline, and security focus points..."
                        className="w-full bg-[#050508] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Scope Parameters
                          <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
