import React, { useContext } from "react";
import { ViewContext } from "../../context/ViewContext";

const Features = ({ FEATURES }) => {
  const { darkMode, setDarkMode } = useContext(ViewContext);
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className={`w-full h-auto px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 bg-card rounded-xl shadow-xl border transition-all duration-500 flex flex-col gap-2 sm:gap-3 ${
              darkMode
                ? "bg-[#1A1A1A] border-white/10 text-white"
                : "bg-white border-black/10 text-black"
            }`}
          >
            <feature.icon
              strokeWidth={1.5}
              className="text-profit w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
            />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
              {feature.name}
            </h1>
            <h1
              className={`text-xs sm:text-base ${darkMode ? "text-neutral-400" : "text-neutral-700"}`}
            >
              {feature.desc}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
