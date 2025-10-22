import { useMoonStore } from "@/store/MoonStore";
import { useLoadingStore } from "@/store/LoadingStore";
export default function MoonResult() {
  const { moonAge, moonAgeProcent, moonPhase, moonWay } = useMoonStore();
  const isLoading = useLoadingStore((state: any) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <div className="w-full position: relative h-100 overflow-auto">
          <span className="loading"></span>
        </div>
      ) : (
        <div className="position: absolute bottom-0 w-full  h-100 flex justify-between items-center pl-5 pr-5 pt-10 flex-wrap">
          <div className="w-[30%] text-[0.8rem]">
            Возраст луны (дней)
            <h2>{moonAge}</h2>
          </div>
          <div className="w-[30%] text-[0.8rem]">
            Возраст луны (процент от полного цикла)
            <h2>{moonAgeProcent} %</h2>
          </div>
          <div className="w-[30%] text-[0.8rem]">
            Фаза луны
            <h2>{moonPhase}</h2>
          </div>
          <div className="w-[30%] text-[0.8rem]">
            Направление луны
            <h2>{moonWay}</h2>
          </div>

          <section className="self-end flex flex-row justify-center">
            <button type="button" className="links__btn">
              <img
                src="https://img.icons8.com/?size=100&id=pNYOTp5DinZ3&format=png&color=000000"
                alt="link"
              />
              ССЫЛКА
            </button>
            <button type="button" className="links__btn">
              <img
                src="https://img.icons8.com/?size=100&id=18764&format=png&color=000000"
                alt="save"
              />
              СОХРАНИТЬ
            </button>
            <button type="button" className="links__btn">
              <img
                src="https://img.icons8.com/?size=100&id=83200&format=png&color=000000"
                alt=""
              />
              ВИДЖЕТ
            </button>
          </section>
        </div>
      )}
    </>
  );
}
