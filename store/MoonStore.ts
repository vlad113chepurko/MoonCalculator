import { create } from "zustand";

interface MoonStore {
  moonAge: number;
  moonAgeProcent: number;
  moonPhase: string;
  moonWay: string;
  setMoonAge: (age: number) => void;
  setMoonAgeProcent: (procent: number) => void;
  setMoonPhase: (phase: string) => void;
  setMoonWay: (way: string) => void;
}

export const useMoonStore = create<MoonStore>((set) => ({
  moonAge: 0,
  moonAgeProcent: 0,
  moonPhase: "Новолуние",
  moonWay: "Растущая луна",
  setMoonAge: (age: number) => set({ moonAge: age }),
  setMoonAgeProcent: (procent: number) => set({ moonAgeProcent: procent }),
  setMoonPhase: (phase: string) => set({ moonPhase: phase }),
  setMoonWay: (way: string) => set({ moonWay: way }),
}));
