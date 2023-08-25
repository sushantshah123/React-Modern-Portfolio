// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState("dark");

  return (
    <ThemeContext.Provider value={[ isLightMode, setIsLightMode ]}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);
export {useTheme,ThemeProvider};
