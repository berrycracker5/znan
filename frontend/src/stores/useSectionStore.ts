import { createRef } from "react";
import { create } from "zustand";

interface SectionState {
  topSectionRef: React.RefObject<HTMLDivElement | null>;
  setTopSectionRef: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutMeSectionRef: React.RefObject<HTMLDivElement | null>;
  setAboutMeSectionRef: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  topSectionRef: createRef<HTMLDivElement>(),
  setTopSectionRef: (ref) => set({ topSectionRef: ref }),
  aboutMeSectionRef: createRef<HTMLDivElement>(),
  setAboutMeSectionRef: (ref) => set({ aboutMeSectionRef: ref }),
}));
