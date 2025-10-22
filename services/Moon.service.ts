import type { TCalendarData } from "@/types/Data";

class MoonService {
  julianDayAtNoon({ day, month, year }: TCalendarData): number {
    let YY = year - Math.floor((12 - month) / 10);
    let MM = month + 9;
    if (MM >= 12) MM -= 12;

    let K1 = Math.floor(365.25 * (YY + 4712));
    let K2 = Math.floor(30.6 * MM + 0.5);
    let K3 = Math.floor(Math.floor(YY / 100 + 49) * 0.75) - 38;

    let JD = K1 + K2 + day + 59;
    if (JD > 2299160) JD -= K3;
    return JD;
  }

  normalize01(v: number): number {
    v = v - Math.floor(v);
    if (v < 0) v += 1;
    return v;
  }

  moonAgeDay({ year, month, day }: TCalendarData): number {
    const JD = this.julianDayAtNoon({ year, month, day });
    const SYNODIC_MONTH = 29.530588853;
    const EPOCH_NEWMOON = 2451550.1;
    let IP = this.normalize01((JD - EPOCH_NEWMOON) / SYNODIC_MONTH);
    let age = IP * SYNODIC_MONTH;
    return age;
  }

  moonIlluminationPercent(ageDays: number): number {
    const SYNODIC_MONTH = 29.530588853;
    const phase = (ageDays / SYNODIC_MONTH) * 2 * Math.PI;
    const percent = ((1 - Math.cos(phase)) / 2) * 100;
    return percent;
  }

  getMoonPercentPhase(procent: number): string {
    if (procent === 0) return "Новолуние";
    else if (procent > 0 && procent < 25) return "Растущий полумесяц";
    else if (procent === 25) return "Первый квартал";
    else if (procent > 25 && procent < 50) return "Растущая луна";
    else if (procent === 50) return "Полнолуние";
    else if (procent > 50 && procent < 75) return "Убывающая луна";
    else if (procent === 75) return "Последний квартал";
    else return "Старая луна";
  }

  moonDirection(ageDays: number): string {
    const SYNODIC_MONTH = 29.530588853;
    return ageDays < SYNODIC_MONTH / 2 ? "Растущая луна" : "Убывающая луна";
  }
}
export const moonService = new MoonService();
