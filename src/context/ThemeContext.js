import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useMemo(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    isDark && setTheme("dark");
  }, []);

  const toggleTheme = () => {
    const themeName = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", themeName);
    setTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
