import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

   const handleToggle = (e) => {
      if (e.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };
   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   return <ThemeContext.Provider value={{ handleToggle, theme }}>{children}</ThemeContext.Provider>;
};
