import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseStudyHeader } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "AI Safety Research — Kaitlyn Chen",
  description:
    "Measuring how persuasive AI-generated political statements are, and to whom — and building the ML pipeline to do it at scale.",
};

export default function AISafetyResearch() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="AI Safety Research"
          title="Measuring how persuasive AI-generated political statements are, and to whom"
          role="Undergraduate Research Assistant"
          team="Me, assisting a PhD student researcher"
          timeline="April 2025 – Sep 2025 (currently paused due to funding cuts)"
        />

        <p className="mx-auto max-w-3xl px-6 py-14 font-sans text-sm italic text-stone">
          More details coming soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}
