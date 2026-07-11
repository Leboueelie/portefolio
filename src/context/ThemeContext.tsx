import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
  accent: string;
  cycleAccent: () => void;
  eco: boolean;
  toggleEco: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const accents = ["orange", "green", "blue"];
const defaultAccent = "orange";

const accentColors = {
  orange: "#E86A33",
  green: "#2A9D8F",
  blue: "#0B3B60",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const [accent, setAccent] = useState(
    () => localStorage.getItem("accent") || defaultAccent,
  );
  const [eco, setEco] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    root.style.setProperty("--accent", accentColors[accent as keyof typeof accentColors]);
    localStorage.setItem("accent", accent);

    if (eco) {
      root.classList.add("eco");
    } else {
      root.classList.remove("eco");
    }
  }, [dark, accent, eco]);

  const toggleDark = () => setDark(!dark);
  const cycleAccent = () => {
    const currentIdx = accents.indexOf(accent);
    const nextIdx = (currentIdx + 1) % accents.length;
    setAccent(accents[nextIdx]);
  };
  const toggleEco = () => setEco(!eco);

  return (
    <ThemeContext.Provider
      value={{ dark, toggleDark, accent, cycleAccent, eco, toggleEco }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
