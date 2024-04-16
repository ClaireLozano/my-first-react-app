import { createContext, useContext, useState } from 'react';

// On peut récupérer la valeur et la changer depuis n'importe où
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return {
    isLight: theme === 'light',
    isDark: theme === 'dark',
    theme,
    toggleTheme,
  };
}

export function ThemeContextProvider({ children }) {
  const [themeValue, setThemeValue] = useState('light');
  const toggleThemeValue = () => {
    setThemeValue(themeValue === 'light' ? 'dark' : 'light');
  };

  // Tous les éléments qui consomme le context provider vont etre re-rendu
  return (
    <ThemeContext.Provider value={{ theme: themeValue, toggleTheme: toggleThemeValue }}>
      <button onClick={toggleThemeValue}>Changer de theme</button>
      {children}
    </ThemeContext.Provider>
  );
}
