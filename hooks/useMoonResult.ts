import { moonService } from "@/services/Moon.service";
import { useCalendarData } from "@/store/CalendarStore";
export function useMoonResult() {
  const { day, month, year, tm } = useCalendarData();
  //   "Новолуние",
  //   "Растущий полумесяц",
  //   "Первый квартал",
  //   "Растущая луна",
  //   "Полнолуние",
  //   "Убывающая луна",
  //   "Последний квартал",
  //   "Старая луна",
  // ];

  const handleCalculateMoonData = () => {
    const moonPosition = moonService.getMoonPhase({ day, month, year, tm });
    console.log(moonPosition);
  };

  return {
    handleCalculateMoonData,
  };
}
