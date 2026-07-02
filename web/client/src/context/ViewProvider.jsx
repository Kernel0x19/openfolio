import { useState, useEffect } from "react";
import { ViewContext } from "./ViewContext";

const ViewProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ViewContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
