import { useCalendarStore } from "@/store/CalendarStore";
import { useEffect } from "react";

export function useGetData() {
  const { setSelectedMonths, setYears } = useCalendarStore();
  useEffect(() => {
    try {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          try {
            const monthNames = data.months;
            const yearsArray = data.years;
            setSelectedMonths(monthNames);
            setYears(yearsArray);
            console.debug(monthNames, yearsArray);
          } catch (error) {
            console.error("Error data:", error);
          }
        });
    } catch (error) {
      console.error("Error fetch:", error);
    }
  }, []);
}
