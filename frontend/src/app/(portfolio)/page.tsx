"use client";

import MainFooter from "@/components/MainFooter";
import AskMeSection from "./sections/AskMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import IntroSection from "./sections/IntroSection";
import ProjectSection from "./sections/ProjectSection";

export default function Portfolio() {
  return (
    <>
      <main className="flex flex-col items-start justify-center gap-30">
        <IntroSection />
        <AskMeSection />
        <ExperienceSection />
        <ProjectSection />
      </main>

      <footer className="mt-40 mb-8">
        <MainFooter />
      </footer>
    </>
  );
}
