import React, { useContext } from "react";
import { ViewContext } from "../../context/ViewContext";

const HowItWorks = ({STEPS}) => {
  const { darkMode } = useContext(ViewContext);
  const dm = darkMode;

  return (
    <section
      className={`w-full px-10 py-10 transition-colors duration-500
        ${dm ? "bg-primaryBg text-primaryTextColor" : "bg-secondaryBg text-secondaryTextColor"}`}
    >
      <div className="relative flex flex-col md:flex-row items-start gap-12 md:gap-0">
        <div
          className="hidden md:block absolute top-9 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px"
          style={{
            background: `repeating-linear-gradient(to right, #22C55E 0px, #22C55E 6px, transparent 6px, transparent 14px)`,
            opacity: 0.3,
          }}
        />

        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center flex-1 px-0 md:px-8"
          >
            {index < STEPS.length - 1 && (
              <div
                className="hidden md:hidden absolute left-7 top-14 bottom-0 w-px"
                style={{
                  background: `repeating-linear-gradient(to bottom, #22C55E 0px, #22C55E 6px, transparent 6px, transparent 14px)`,
                  opacity: 0.3,
                }}
              />
            )}
            <div
              className={`relative z-10 w-18 h-18 rounded-full border-2 flex items-center justify-center mb-5 shrink-0 transition-colors duration-500
              ${dm ? "border-white/10 bg-primaryBg" : "border-black/10 bg-secondaryBg"}`}
            >
              <span
                className="text-xl font-black"
                style={{ color: "#22C55E" }}
              >
                {step.number}
              </span>
            </div>
            <div className="flex flex-col gap-2 pl-2 md:pl-0">
              <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
              <p
                className={`text-base leading-relaxed transition-colors duration-500 ${dm ? "text-white/50" : "text-black/50"}`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
