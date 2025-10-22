import { useCalendarStore } from "@/store/CalendarStore";

export function useFilterDays() {
  const { setFilteredDays } = useCalendarStore();
  const filterDays = (month: string) => {
    let daysCount = 31;

    if (month === "Февраль") {
      daysCount = 28;
    } else if (["Апрель", "Июнь", "Сентябрь", "Ноябрь"].includes(month)) {
      daysCount = 30;
    }

    const filteredDays = Array.from({ length: daysCount }, (_, i) =>
      (i + 1).toString()
    );

    setFilteredDays(filteredDays);
  };

  return { filterDays };
}
