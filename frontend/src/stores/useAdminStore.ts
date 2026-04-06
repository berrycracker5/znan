import { create } from "zustand";

interface AdminState {
  isAdmin: boolean;
  adminPassword: string | null;
  setAdmin: (password: string) => void;
  clearAdmin: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  adminPassword: null,
  setAdmin: (password: string) => set({ isAdmin: true, adminPassword: password }),
  clearAdmin: () => set({ isAdmin: false, adminPassword: null }),
}));
