import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
