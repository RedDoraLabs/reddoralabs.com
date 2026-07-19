"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Ambassador", href: "/ambassador" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/80 backdrop-blur-md border-b border-[#1e1e2f]/50 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* Horizontal logo for desktop */}
            <img
              src="/logo-horizontal.png"
              alt="RedDoraLabs"
              className="hidden sm:block h-20 w-auto object-contain group-hover:brightness-110 transition-all"
            />
            {/* Icon-only logo for mobile */}
            <img
              src="/logo-icon.png"
              alt="RedDoraLabs"
              className="sm:hidden h-14 w-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium relative py-1 transition-colors ${
                    isActive ? "text-primary" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0d0d15] hover:bg-[#111118] border border-primary/30 hover:border-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-[#050508] pt-24 px-6 flex flex-col justify-between pb-12"
          >
            <div className="grid-bg absolute inset-0 opacity-10 pointer-events-none" />
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold tracking-tight transition-colors ${
                      isActive ? "text-primary glow-cyan" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                Get a Quote
              </Link>
              <a
                href="https://wa.me/919699646517"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 bg-[#0d0d15] border border-zinc-800 text-zinc-300 font-medium rounded-xl hover:bg-[#111118] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
