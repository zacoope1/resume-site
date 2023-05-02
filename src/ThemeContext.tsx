import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

export type Theme = {
  fontFamily: string;
  color: string;
};

type ThemeContextType = {
  theme: Theme;
  secondaryTheme: boolean;
  toggleTheme: () => void;
};

const DefaultTheme: Theme = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  color: "white",
};

const SecondaryTheme: Theme = {
  fontFamily: "'Press Start 2P', cursive",
  color: "#ffff00",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: DefaultTheme,
  secondaryTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [secondaryTheme, setSecondaryTheme] = useState(
    localStorage.getItem("theme") === "secondary" ? true : false
  );

  const [theme, setTheme] = useState<Theme>(
    secondaryTheme ? SecondaryTheme : DefaultTheme
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", secondaryTheme ? "default" : "secondary");
    setSecondaryTheme(!secondaryTheme);
  };

  useEffect(() => {
    if (secondaryTheme) setTheme(SecondaryTheme);
    else setTheme(DefaultTheme);
  }, [secondaryTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        secondaryTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext must be used within a ThemeProvider");
  return context;
};
