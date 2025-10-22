"use client";
import "./MoonCalculator.css";
import { useMoonResult } from "@/hooks/useMoonResult";
import { useState } from "react";
import { components } from "@/components/index";

export default function MoonCalculator() {
  const [precision, setPrecision] = useState<number>(2);

  const { handleCalculateMoonData } = useMoonResult();

  return (
    <div className="moon__container">
      <article className="flex self-start flex-row gap-1">
        <button type="button" className="logo">
          <img
            src="https://planetcalc.ru/img/32x32i.png"
            alt="logo"
            width={32}
            height={32}
          />
        </button>
        <h1 className="text-[1.5rem]">Фаза Луны</h1>
      </article>
      <br />
      <components.Calendar />
      <div className="flex flex-col justify-center text-center position: absolute top-20 w-60">
        <p className="text-[0.8rem] text-gray-500">Точность вычислений</p>
        <label htmlFor="precision" className="mb-1">
          Значков после запятой {precision}
        </label>
        <input
          type="range"
          name="precision"
          id="precision"
          min={0}
          max={20}
          value={precision}
          onChange={(e) => setPrecision(Number(e.target.value))}
        />
      </div>
      <div className="self-end">
        <button
          onClick={() => handleCalculateMoonData()}
          type="button"
          className="bg-[#fa7014] text-white px-2 py-1 rounded-md hover:bg-[#f06c13] transition-colors duration-300 cursor-pointer w-40 h-10 font-bold text-[1.3rem]"
        >
          Рассчитать
        </button>
      </div>
      <components.MoonResult />
    </div>
  );
}
