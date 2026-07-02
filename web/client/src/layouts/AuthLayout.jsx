import Navbar from "../components/Navbar";
import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

const AuthLayout = ({ children }) => {
  const { darkMode } = useContext(ViewContext);

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-primaryBg text-primaryTextColor" : "bg-secondaryBg text-secondaryTextColor"
      }`}
    >
      <Navbar />
      <main className="pt-24 flex items-center justify-center min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;