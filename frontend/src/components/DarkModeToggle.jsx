import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
   const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

   return (
      <button onClick={toggleDarkMode} className={`${isDarkMode ? "bg-gray-800 text-white" : ""}`}>
         Toggle Dark Mode
      </button>
   );
};

export default DarkModeToggle;
