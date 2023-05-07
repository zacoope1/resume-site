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
  backgroundColor: string;
  fontSize: string;
};

type ThemeContextType = {
  themeIsLoading: boolean;
  theme: Theme;
  secondaryTheme: boolean;
  toggleTheme: () => void;
};

const DefaultTheme: Theme = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  color: "white",
  backgroundColor: "#203354",
  fontSize: "1em",
};

const SecondaryTheme: Theme = {
  fontFamily: "SF Distant Galaxy",
  // fontFamily: "Galactic Basic",
  // fontFamily: "RuneScape UF",
  color: "#ffff00",
  backgroundColor: "orange",
  fontSize: "1em",
};

const ThemeContext = createContext<ThemeContextType>({
  themeIsLoading: false,
  theme: DefaultTheme,
  secondaryTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeIsLoading, setThemeIsLoading] = useState<boolean>(false);

  const [secondaryTheme, setSecondaryTheme] = useState(
    localStorage.getItem("theme") === "secondary" ? true : false
  );

  const [theme, setTheme] = useState<Theme>(
    secondaryTheme ? SecondaryTheme : DefaultTheme
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", secondaryTheme ? "default" : "secondary");
    setThemeIsLoading(true);
    setTimeout(() => {
      setThemeIsLoading(false);
      setSecondaryTheme(!secondaryTheme);
    }, 2000);
  };

  useEffect(() => {
    if (secondaryTheme) setTheme(SecondaryTheme);
    else setTheme(DefaultTheme);
  }, [secondaryTheme]);

  return (
    <ThemeContext.Provider
      value={{
        themeIsLoading,
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
