import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | RedDoraLabs",
  description:
    "Learn how RedDoraLabs collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "RedDoraLabs may collect information you voluntarily provide through contact forms or other communication channels, such as your name, email address, company name, and project details. Our website hosting provider may also process technical information such as IP addresses and browser details.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we receive to respond to enquiries, communicate about requested services, provide support, and improve our website and services. We do not sell your personal information.",
  },
  {
    title: "3. Data Storage & Security",
    content:
      "We take reasonable measures to protect personal information against unauthorized access, alteration, or disclosure. Information is retained only for as long as necessary for the purposes described in this policy or as required by applicable law.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "Our website may rely on third-party providers for hosting, website functionality, analytics, or communication. These providers may process information as needed to provide their services and are subject to their own privacy policies.",
  },
  {
    title: "5. Your Rights",
    content:
      "You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law. You may also ask questions about how your information is handled.",
  },
  {
    title: "6. Contact Information",
    content:
      "If you have questions about this Privacy Policy or how your information is handled, contact us at prem@reddoralabs.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050508] px-5 py-20 text-zinc-300 sm:px-8">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00d4ff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-96 h-72 w-72 rounded-full bg-[#8b5cf6]/10 blur-[120px]" />

      <article className="relative mx-auto max-w-4xl space-y-8">
        <header className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">
            RedDoraLabs
          </p>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-zinc-500">
            Last Updated: November 1, 2026
          </p>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
            Your privacy matters to us. This policy explains what information
            we may collect and how we use and protect it.
          </p>
        </header>

        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:border-[#00d4ff]/30 sm:p-8"
          >
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
              {section.title}
            </h2>

            <p className="leading-8 text-zinc-400">
              {section.content}
            </p>
          </section>
        ))}

        <footer className="border-t border-white/10 pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#00d4ff] transition hover:text-[#8b5cf6]"
          >
            ← Return to Home
          </Link>
        </footer>
      </article>
    </main>
  );
}