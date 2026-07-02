import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ViewContext } from "../context/ViewContext";
import OpenFolioLogo from "../assets/OpenFolioLogo-1.png";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ links = [], actions = null, mobileExtra = null, onLogoClick }) => {
  const { darkMode, setDarkMode } = useContext(ViewContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = () => {
    if (onLogoClick) return onLogoClick();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasLinks = links.length > 0;
  const hasActions = !!actions;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 sm:pt-4 px-3 sm:px-4 md:px-5 lg:px-6">
      <div
        className={`w-full flex items-center justify-between transition-all duration-500
          px-3 sm:px-4 md:px-5 lg:px-6
          ${darkMode ? "text-primaryTextColor" : "text-secondaryTextColor"}
          ${
            scrolled
              ? `rounded-xl sm:rounded-2xl shadow-2xl py-3 sm:py-5 backdrop-blur-md border
               ${darkMode ? "bg-[#151212]/90 border-white/10" : "bg-white/90 border-black/10"}`
              : `py-3 sm:py-4 md:py-5 lg:py-6 rounded-none shadow-none border-transparent
               ${darkMode ? "bg-primaryBg" : "bg-secondaryBg"}`
          }`}
      >
        <div
          className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={OpenFolioLogo}
            alt="OpenFolio Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
          />
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-jetbrains">
            OpenFolio
          </h1>
        </div>
        {hasLinks && (
          <div className="hidden lg:flex items-center gap-10 xl:gap-20">
            {links.map((link) => (
              <span
                key={link.label}
                onClick={link.onClick}
                className={`text-sm xl:text-lg font-bold cursor-pointer pb-0.5 border-b border-transparent transition-all duration-300
                  ${darkMode ? "text-white hover:border-white" : "text-black hover:border-black"}`}
              >
                {link.label}
              </span>
            ))}
          </div>
        )}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {actions}
          <button
            className={`p-2 xl:p-4 hover:rounded-lg transition-all duration-500 cursor-pointer
              ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        {hasLinks && (
          <div className="hidden sm:flex lg:hidden items-center gap-4 md:gap-6">
            {links.map((link) => (
              <span
                key={link.label}
                onClick={link.onClick}
                className={`text-xs md:text-sm font-bold cursor-pointer pb-0.5 border-b border-transparent transition-all duration-300
                  ${darkMode ? "text-white hover:border-white" : "text-black hover:border-black"}`}
              >
                {link.label}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            className={`p-1.5 sm:p-2 hover:rounded-lg transition-all duration-500 cursor-pointer
              ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {(hasLinks || hasActions) && (
            <button
              className={`p-1.5 sm:p-2 hover:rounded-lg transition-all duration-500 cursor-pointer
                ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>
      {(hasLinks || hasActions || mobileExtra) && (
        <div
          className={`w-full lg:hidden transition-all duration-500 overflow-hidden
            ${menuOpen ? "max-h-screen opacity-100 mt-2" : "max-h-0 opacity-0"}
            ${
              darkMode
                ? "bg-[#151212]/95 border border-white/10 text-white"
                : "bg-white/95 border border-black/10 text-black"
            }
            rounded-xl sm:rounded-2xl backdrop-blur-md shadow-2xl`}
        >
          <div className="flex flex-col p-3 sm:p-4 gap-1">
            {hasLinks && (
              <div className="sm:hidden">
                {links.map((link) => (
                  <span
                    key={link.label}
                    onClick={() => {
                      link.onClick?.();
                      setMenuOpen(false);
                    }}
                    className={`block text-base font-bold cursor-pointer px-4 py-3 rounded-lg transition-all duration-500
                      ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"}`}
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            )}

            {hasActions && (
              <div className="flex flex-col gap-2 pt-2 [&_button]:w-full [&_button]:justify-center">
                {actions}
              </div>
            )}

            {mobileExtra}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;