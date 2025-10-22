import { create } from "zustand";

interface MoonStore {
  precision: number;
  selectedMonths: string[];
  filteredDays: string[] | null;
  years: number[];
  setPrecision: (precision: number) => void;
  setSelectedMonths: (months: string[]) => void;
  setFilteredDays: (days: string[] | null) => void;
  setYears: (years: number[]) => void;
}

interface CalendarData {
  day: number;
  month: number;
  year: number;
  tm: number;
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  setTm: (tm: number) => void;
}

export const useCalendarStore = create<MoonStore>((set) => ({
  precision: 0,
  selectedMonths: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  filteredDays: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  years: [],
  setPrecision: (precision) => set({ precision }),
  setSelectedMonths: (months) => set({ selectedMonths: months }),
  setFilteredDays: (days) => set({ filteredDays: days }),
  setYears: (years) => set({ years }),
}));

export const useCalendarData = create<CalendarData>((set) => ({
  day: 1,
  month: 1,
  year: 2025,
  tm: Date.now(),
  setDay: (day) => set({ day }),
  setMonth: (month) => set({ month }),
  setYear: (year) => set({ year }),
  setTm: (tm) => set({ tm }),
}));
