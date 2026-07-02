import React, {useContext} from "react";
import { ViewContext } from "../../context/ViewContext";

const HomeStats = ({STATS}) => {
  const { darkMode, setDarkMode } = useContext(ViewContext);

  const dm = darkMode;
  return (
    <>
      <div
        className={`w-full grid grid-cols-2 md:grid-cols-4 border-t-2 ${dm ? "border-white/50" : "border-black/50"}`}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center gap-3 py-8 md:py-10 px-5 md:px-10
            ${i % 2 !== 1 ? `border-r-2 ${dm ? "border-white/50" : "border-black/50"}` : ""}
            ${i < 2 ? `border-b-2 md:border-b-0 ${dm ? "border-white/50" : "border-black/50"}` : ""}
            ${i === 3 ? `md:border-r-0` : `md:border-r-2 md:${dm ? "border-white/50" : "border-black/50"}`}
          `}
          >
            <div className="flex items-end gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black playfair-font">
                {stat.count}
              </span>
              <span className="text-xl sm:text-2xl font-bold playfair-font mb-1">
                {stat.suffix}
              </span>
            </div>
            <p
              className={`text-xs tracking-[0.2em] uppercase ${dm ? "text-white/40" : "text-black/40"}`}
            >
              {stat.stat}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeStats;
