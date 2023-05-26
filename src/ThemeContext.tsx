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
};

type ThemeContextType = {
  themeIsLoading: boolean;
  theme: Theme;
  secondaryTheme: boolean;
  toggleTheme: () => void;
};

const DefaultTheme: Theme = {
  fontFamily: "var(--default-font-family)",
  color: "white",
  backgroundColor: "#050810",
};

const SecondaryTheme: Theme = {
  // fontFamily: "SF Distant Galaxy",
  // fontFamily: "Galactic Basic",
  // fontFamily: "RuneScape UF",
  // fontFamily: "var(--secondary-font-family)",
  fontFamily: "var(--default-font-family)",
  color: "#ffff00",
  backgroundColor: "#444474",
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
    if (secondaryTheme) {
      document.documentElement.style.setProperty(
        "--bg-color",
        SecondaryTheme.backgroundColor
      );
      document.documentElement.style.setProperty("--neon-color", "#e60f0f");
      document.documentElement.style.setProperty(
        "--neon-text-shadow",
        "#000000"
      );
      setTheme(SecondaryTheme);
    } else {
      document.documentElement.style.setProperty(
        "--bg-color",
        DefaultTheme.backgroundColor
      );
      document.documentElement.style.setProperty("--neon-color", "#f09");
      document.documentElement.style.setProperty("--neon-text-shadow", "#fff");
      setTheme(DefaultTheme);
    }
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
