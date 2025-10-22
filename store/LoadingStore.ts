import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  isLoading: true,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
