import { createContext, useEffect, useState } from "react";
import {ReactNode }
interface DarkContextType {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export const DarkContext = createContext<DarkContextType>({
  dark: false,
  setDark: () => {},   // 👈 حذفنا parameter لتفادي unused error
});

interface DarkProviderProps {
  children: ReactNode;
}

export const DarkProvider = ({ children }: DarkProviderProps) => {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
};
