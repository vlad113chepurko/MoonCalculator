"use client";
import { useCalendarData } from "@/store/CalendarStore";
import { useCalendarStore } from "@/store/CalendarStore";
import { useGetData } from "@/hooks/useGetData";
import { useFilterDays } from "@/hooks/useFilterDays";
import { useEffect } from "react";

export default function Calendar() {
  const { selectedMonths, filteredDays, years } = useCalendarStore();
  const { setDay, setMonth, setYear, day, month, year, tm } = useCalendarData();
  const { filterDays } = useFilterDays();

  const getMonthNumber = (monthName: string) => {
    if (monthName === "Январь") setMonth(1);
    if (monthName === "Февраль") setMonth(2);
    if (monthName === "Март") setMonth(3);
    if (monthName === "Апрель") setMonth(4);
    if (monthName === "Май") setMonth(5);
    if (monthName === "Июнь") setMonth(6);
    if (monthName === "Июль") setMonth(7);
    if (monthName === "Август") setMonth(8);
    if (monthName === "Сентябрь") setMonth(9);
    if (monthName === "Октябрь") setMonth(10);
    if (monthName === "Ноябрь") setMonth(11);
    if (monthName === "Декабрь") setMonth(12);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = event.target.value;
    getMonthNumber(month);
    filterDays(month);
  };

  useGetData();

  useEffect(() => {
    console.debug(day, month, year, tm);
  }, [day, month, year, tm]);

  return (
    <div className="w-80 bg-gray-00 h-18 flex items-center justify-between self-start rounded-t-md border-b position: relative bg-gray-100">
      <p className="position: absolute top-2 left-2 text-[0.8rem] text-gray-500">
        Григорианская дата
      </p>
      <select
        onChange={(e: any) => setDay(e.target.value)}
        id="days"
        title="days"
      >
        {filteredDays?.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleMonthChange(e)} id="months" title="months">
        {selectedMonths?.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        onChange={(e: any) => setYear(e.target.value)}
        id="years"
        title="years"
      >
        {years?.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
