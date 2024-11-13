import { createContext } from "react";
import { Theme } from "~/types/theme";

interface IThemeContext {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);
