import { themeContext } from "../contexts/Themecontext";
import { useState } from "react";

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? "dark" : "light")
  };

  const value = {theme, toggleTheme};

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  )
}
