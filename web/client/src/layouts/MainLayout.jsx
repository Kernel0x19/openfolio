import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ViewContext } from "../context/ViewContext";
import { MoveRight } from "lucide-react";

const MainLayout = ({ children }) => {
  const { darkMode } = useContext(ViewContext);
  const navigate = useNavigate();
  const links = [
    {
      label: "Home",
      onClick: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Features",
      onClick: () =>
        document
          .getElementById("features")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Docs",
      onClick: () =>
        document.getElementById("docs")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Github",
      onClick: () =>
        window.open("https://github.com/Kernel0x19/openfolio", "_blank"),
    },
  ];
  const actions = (
    <>
      <button
        className={`px-3 xl:px-5 py-2 xl:py-3 text-sm xl:text-lg hover:rounded-lg transition-all duration-500 cursor-pointer
          ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() => navigate("/auth/login")}
      >
        Login
      </button>
      <button
        className={`px-3 xl:px-5 py-2 xl:py-3 text-sm xl:text-lg hover:rounded-lg transition-all duration-500 cursor-pointer flex items-center gap-2 group
          ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() => navigate("/auth/signup")}
      >
        Get Started
        <MoveRight
          size={16}
          className="group-hover:translate-x-2 transition-all duration-500"
        />
      </button>
    </>
  );

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-primaryBg text-primaryTextColor"
          : "bg-secondaryBg text-secondaryTextColor"
      }`}
    >
      <Navbar links={links} actions={actions} />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
