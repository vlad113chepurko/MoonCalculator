import type { TCalendarData } from "@/types/Data";

class MoonService {
  getMoonPhase({ day, month, year }: TCalendarData): number {
    const moonPosition = month / day / year;
    return moonPosition;
  }
}

export const moonService = new MoonService();
