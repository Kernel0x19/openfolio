import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ViewContext } from "../../context/ViewContext";
import OpenFolioLogo from "../../assets/OpenFolioLogo-1.png";
import { MoveRight } from "lucide-react";

const NotFound = () => {
  const { darkMode } = useContext(ViewContext);
  const navigate = useNavigate();

  return (
    <main
      className={`w-full min-h-screen transition-colors duration-500 flex flex-col items-center justify-center px-6 sm:px-10 py-10 text-center
        ${
          darkMode
            ? "bg-primaryBg text-primaryTextColor"
            : "bg-secondaryBg text-secondaryTextColor"
        }`}
    >
      <div
        className="flex items-center gap-2 cursor-pointer mb-8 sm:mb-10"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={OpenFolioLogo}
          alt="OpenFolio Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
        />
        <span className="text-base sm:text-xl md:text-2xl font-jetbrains">
          OpenFolio
        </span>
      </div>
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-red-500 mb-3 sm:mb-4">
        404
      </h1>
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">
        Page Not <span className="text-red-500">Found</span>
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl font-medium max-w-md mb-8 sm:mb-10 transition-colors duration-500
        ${darkMode ? "text-white/50" : "text-black/50"}`}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        className={`px-5 py-3 text-sm sm:text-base font-semibold hover:rounded-lg transition-all duration-500 cursor-pointer flex items-center gap-2 group
          ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back Home
        <MoveRight
          size={16}
          className="group-hover:translate-x-2 transition-transform duration-500"
        />
      </button>
    </main>
  );
};

export default NotFound;
