
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiya's Test Page | RedDoraLabs",
  description: "My Week 1 learning project.",
};

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#050508] p-10 text-white">
      <h1 className="text-4xl font-bold text-[#00d4ff]">
        Jiya's Test Page
      </h1>

      <p className="mt-6 text-lg text-[#8b5cf6]">
        During Week 1, I learned Git, GitHub, Next.js,
        Server Components, and how developers collaborate
        using branches and pull requests.
      </p>
    </main>
  );
}