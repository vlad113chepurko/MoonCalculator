import { moonService } from "@/services/Moon.service";
import { useCalendarData } from "@/store/CalendarStore";
import { useMoonStore } from "@/store/MoonStore";
import { useCallback } from "react";

export function useMoonResult() {
  const { day, month, year } = useCalendarData();
  const { setMoonAge, setMoonPhase, setMoonAgeProcent, setMoonWay } =
    useMoonStore();

  const handleCalculateMoonData = useCallback(() => {
    console.log("Day: ", day, "Month: ", month, "Year: ", year);

    const age = moonService.moonAgeDay({ year, month, day });
    setMoonAge(age);

    const procent = moonService.moonIlluminationPercent(age);
    const moonPhase = moonService.getMoonPercentPhase(procent);
    const moonWay = moonService.moonDirection(age);

    console.log(procent, moonPhase, moonWay);

    setMoonWay(moonWay);
    setMoonAgeProcent(procent);
    setMoonPhase(moonPhase);
  }, [
    day,
    month,
    year,
    setMoonAge,
    setMoonAgeProcent,
    setMoonPhase,
    setMoonWay,
  ]);

  return {
    handleCalculateMoonData,
  };
}
