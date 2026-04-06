import { create } from "zustand";

interface HeaderState {
  hideHeader: boolean;
  setHideHeader: (hide: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  hideHeader: false,
  setHideHeader: (hide) => set({ hideHeader: hide }),
}));
